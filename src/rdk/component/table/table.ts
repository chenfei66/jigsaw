import {
    Component, Input, NgModule, ComponentFactoryResolver, AfterViewInit, ViewChild, Type, ChangeDetectorRef, ElementRef,
    Renderer2, OnInit, ComponentRef, Output, EventEmitter, ViewChildren, QueryList, forwardRef
} from "@angular/core";
import {CommonModule} from "@angular/common";

import {RdkRendererHost, AbstractRDKComponent} from "../core";
import {TableData} from "../../core/data/table-data";
import {TableCellRenderer, ColumnSetting, AdditionalColumnSetting, TableMsg} from "./table-api";

import {RdkScrollBarModule} from "../scrollbar/scrollbar";
import {RdkScrollBar} from "../scrollbar/scrollbar";
import {SortAs, SortOrder, CallbackRemoval} from "../../core/data/component-data";

class HeadSetting {
    cellData: string|number;
    width: string|number;
    visible: boolean;
    renderer: Type<TableCellRenderer>;
    class: string;
    sortable: boolean;
    sortAs: SortAs;
    defaultSortOrder: SortOrder;
    pos: number;
}

class CellSetting {
    cellData: string|number;
    visible: boolean;
    renderer: Type<TableCellRenderer>;
    class: string;
    editable: boolean;
    editorRenderer: Type<TableCellRenderer>;
    group: boolean;
    pos: number;
    rowSpan: number;
}

export class TableCellBasic implements AfterViewInit {
    constructor(protected componentFactoryResolver: ComponentFactoryResolver,
                protected changeDetector: ChangeDetectorRef) {
    }

    @Input()
    public tableData: TableData;
    @Input()
    public cellData: any;
    @Input()
    public row: number;
    @Input()
    public column: number;
    @Input()
    public pos: number;
    @Input()
    protected renderer: Type<TableCellRenderer>;

    public rendererRef: ComponentRef<TableCellRenderer>;

    @ViewChild(RdkRendererHost) rendererHost: RdkRendererHost;

    /*
    * 渲染器制造工厂
    * */
    protected rendererFactory(renderer: Type<TableCellRenderer>): ComponentRef<TableCellRenderer> {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(renderer);
        let viewContainerRef = this.rendererHost.viewContainerRef;
        let componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.tableData = this.tableData;
        componentRef.instance.cellData = this.cellData;
        componentRef.instance.row = this.row;
        componentRef.instance.column = this.column;
        return componentRef;
    }

    /*
    * 插入渲染器
    * */
    protected insertRenderer(){
        this.rendererRef = this.rendererFactory(this.renderer);
        this.changeDetector.detectChanges();
    }

    ngAfterViewInit(): void {
        this.insertRenderer();
    }
}

@Component({
    selector: 'rdk-table',
    templateUrl: 'table.html',
    styleUrls: ['table.scss'],
    host: {
        '[style.width]': 'width',
        '[style.height]': 'height'
    }
})
export class RdkTable extends AbstractRDKComponent implements AfterViewInit {
    private _data: TableData;
    private _removeRefreshCallback: CallbackRemoval;
    private _inited: boolean;

    @Input()
    public get data(): TableData{return this._data}
    public set data(value: TableData){
        if (!value) return;
        this._data = value;

        if (this._removeRefreshCallback) {
            this._removeRefreshCallback();
        }
        this._removeRefreshCallback = value.onRefresh(() => {
            this._transformData();
        });
    };

    @Input()
    public columns: ColumnSetting[];

    @Input()
    public additionalColumns: AdditionalColumnSetting[];

    private _fixedHead: HTMLElement;

    private _headSettings: Array<HeadSetting> = [];

    private _cellSettings: Array<CellSetting>[] = [];

    @ViewChild(RdkScrollBar) private _scrollBar: RdkScrollBar;

    @ViewChildren(forwardRef(() => RdkTableCell)) tabelCells: QueryList<RdkTableCell>;

    @Output() cellChange: EventEmitter<TableMsg> = new EventEmitter<TableMsg>();

    constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {
        super()
    }

    /*
     * 初始化_headSettings
     * */
    private _initHeadSettings(): void {
        this.data.header.forEach((cellData, index) => {
            this._headSettings.push({
                cellData: cellData,
                width: null,
                visible: true,
                renderer: null,
                class: '',
                sortable: false,
                sortAs: SortAs.string,
                defaultSortOrder: SortOrder.default,
                pos: index
            })
        });
    }

    /*
     * 初始化_cellSettings
     * */
    private _initCellSettings(): void {
        this._cellSettings = [];
        this.data.data.forEach(row => {
            let cellSettings = [];
            row.forEach((cellData, index) => {
                cellSettings.push({
                    cellData: cellData,
                    visible: true,
                    renderer: null,
                    class: '',
                    editable: false,
                    editorRenderer: null,
                    group: false,
                    pos: index,
                    rowSpan: 1
                })
            });
            this._cellSettings.push(cellSettings);
        });
    }

    /*
     * 列定义数据转换
     * */
    private _transformColumns(): void {
        this.columns && this.columns.forEach(column => {
            if (column.target instanceof Function) {
                let fields = this.data.field.filter(column.target);
                fields.forEach(field => {
                    this._mergeSettings(this.data.field.indexOf(field), column);
                })
            }
            else if (column.target instanceof Array) {
                const a: (string|number)[] = column.target;
                a.forEach(targetItem => {
                    if (typeof targetItem === 'number') {
                        this._mergeSettings(targetItem, column);
                    } else if (typeof targetItem === 'string') {
                        this._mergeSettings(this.data.field.indexOf(targetItem), column);
                    }
                })
            }
            else if (typeof column.target === 'number') {
                this._mergeSettings(column.target, column);
            } else if (typeof column.target === 'string') {
                this._mergeSettings(this.data.field.indexOf(column.target), column);
            }
        });
    }

    /*
     * 其他列定义数据转换
     * */
    private _transformAdditionalColumns(): void {
        this.additionalColumns && this.additionalColumns.forEach(additionalColumn => {
            let pos = additionalColumn.pos;
            const target = additionalColumn.target;
            pos = pos >= 0 && pos < this.data.header.length ? pos : -1;
            target ? this._insertCloneSettings(pos, target, additionalColumn) : this._insertSettings(pos, additionalColumn);
        });
    }

    /*
     * 过滤掉不显示的列
     * */
    private _filterSetttings(): void {
        if(!this._inited){
            this._headSettings = this._headSettings ? this._headSettings.filter(headSetting => headSetting.visible) : null;
        }
        this._cellSettings && this._cellSettings.forEach((cellSettings, index) => {
            this._cellSettings[index] = cellSettings.filter(cellSetting => cellSetting.visible);
        });
    }

    /*
     * 合并单元格
     * */
    private _mergeCellWithGroup(): void {
        let rowSpans: number[] = [];
        this._cellSettings.forEach((cellSettings, rowIndex) => {
            cellSettings.forEach((cellSetting, colIndex) => {
                let rowSpan: number = 1;
                if (rowIndex == 0) {
                    if (!cellSetting.group) {
                        rowSpans.push(1);
                        cellSetting.rowSpan = 1;
                    } else {
                        for (let i = 0; i < this._cellSettings.length - rowIndex - 1; i++) {
                            if (this._cellSettings[rowIndex + i + 1][colIndex].cellData == cellSetting.cellData) {
                                rowSpan += 1;
                                if (i == this._cellSettings.length - rowIndex - 2) {
                                    rowSpans.push(rowSpan);
                                    cellSetting.rowSpan = rowSpan;
                                }
                            } else {
                                rowSpans.push(rowSpan);
                                cellSetting.rowSpan = rowSpan;
                                break;
                            }
                        }
                    }
                } else {
                    if (!cellSetting.group) {
                        cellSetting.rowSpan = 1;
                    } else if (rowSpans[colIndex] != 1) {
                        rowSpans[colIndex] -= 1;
                        cellSetting.rowSpan = 0;
                    } else {
                        for (let i = 0; i < this._cellSettings.length - rowIndex - 1; i++) {
                            if (this._cellSettings[rowIndex + i + 1][colIndex].cellData == cellSetting.cellData) {
                                rowSpan += 1;
                                if (i == this._cellSettings.length - rowIndex - 2) {
                                    rowSpans[colIndex] = rowSpan;
                                    cellSetting.rowSpan = rowSpans[colIndex];
                                }
                            } else {
                                rowSpans[colIndex] = rowSpan;
                                cellSetting.rowSpan = rowSpans[colIndex];
                                break;
                            }
                        }
                    }
                }

            })
        })
    }

    /*
     * data和columns数据合并转换
     * */
    private _transformData(): void {
        //初始化Settings
        this._initSettings();

        //列定义数据转换
        this._transforms();

        //过滤掉不显示的列
        this._filterSetttings();

        //合并单元格
        this._mergeCellWithGroup();

        this._inited = true;
        console.log(this._cellSettings);
    }

    private _initSettings(): void {
        !this._inited && this._initHeadSettings();
        this._initCellSettings();
    }

    private _transforms(): void {
        this._transformColumns();
        this._transformAdditionalColumns();
    }

    private _mergeSettings(index, column: ColumnSetting): void {
        !this._inited && this._mergeHeaderSetting(index, column);
        this._mergeCellSetting(index, column);
    }

    /*
     * 根据column修改表头列数据
     * */
    private _mergeHeaderSetting(index, column: ColumnSetting): void {
        if (index >= 0 && index < this.data.header.length) {
            this._generateHeaderSetting(this._headSettings[index], column);
        }
    }

    /*
     * 根据column修改单元格列数据
     * */
    private _mergeCellSetting(index, column: ColumnSetting): void {
        if (index >= 0 && index < this.data.header.length) {
            this._cellSettings.forEach(cellSettings => {
                this._generateCellSetting(cellSettings[index], column);
            });
        }
    }

    /*
     * 根据元素在field的index找到在settings中的index
     * */
    private _getSettingIndex(pos) {
        let settingIndex = null;
        for (let i = 0; i < this._headSettings.length; i++) {
            if (this._headSettings[i].pos == pos) {
                settingIndex = i;
                break;
            }
        }
        return settingIndex;
    }

    /*
     * 移动列位置
     * */
    private _insertCloneSettings(pos: number, target: string|number, additionalColumn: AdditionalColumnSetting) {
        let curPos: number = null;
        let settingIndex: number = null;
        //合并列数据
        if (typeof target === 'number') {
            curPos = target;
        } else if (typeof target === 'string') {
            curPos = this.data.field.indexOf(target);
        }
        settingIndex = this._getSettingIndex(curPos);

        //插入列头
        if(!this._inited){
            let headSetting = <HeadSetting>this._clone(this._headSettings[settingIndex]);
            headSetting.visible = true;
            headSetting.pos = -1;
            this._insertHeaderSetting(pos, additionalColumn, headSetting);
        }

        //插入列
        this._cellSettings.forEach(cellSettings => {
            let cellSetting = <CellSetting>this._clone(cellSettings[settingIndex]);
            cellSetting.visible = true;
            cellSetting.pos = -1;
            this._insertCellSetting(pos, additionalColumn, cellSetting, cellSettings);
        })
    }

    private _insertSettings(pos, additionalColumn: AdditionalColumnSetting): void {
        !this._inited && this._insertHeaderSetting(pos, additionalColumn);
        this._insertCellSetting(pos, additionalColumn);
    }

    /*
     * 插入表头列
     * */
    private _insertHeaderSetting(pos, additionalColumn: AdditionalColumnSetting): void
    private _insertHeaderSetting(pos, additionalColumn: AdditionalColumnSetting, headSetting?: HeadSetting): void
    private _insertHeaderSetting(pos, additionalColumn: AdditionalColumnSetting, headSetting?: HeadSetting): void {
        headSetting = headSetting ? headSetting : {
                cellData: '',
                width: null,
                visible: true,
                renderer: null,
                class: '',
                sortable: false,
                sortAs: SortAs.string,
                defaultSortOrder: SortOrder.default,
                pos: -1 //-1代表插入列
            };
        headSetting = this._generateHeaderSetting(headSetting, additionalColumn);
        if (pos != -1) {
            const index = this._headSettings.indexOf(this._headSettings.find(headSetting => headSetting.pos == pos));
            this._headSettings.splice(index, 0, headSetting);
        } else {
            this._headSettings.push(headSetting)
        }
    }

    /*
     * 插入单元格列
     * */
    private _insertCellSetting(pos, additionalColumn: AdditionalColumnSetting): void
    private _insertCellSetting(pos, additionalColumn: AdditionalColumnSetting, cellSetting?: CellSetting, cellSettings?: CellSetting[]): void
    private _insertCellSetting(pos, additionalColumn: AdditionalColumnSetting, cellSetting?: CellSetting, cellSettings?: CellSetting[]): void {
        cellSetting = cellSetting ? cellSetting : {
                cellData: '',
                visible: true,
                renderer: null,
                class: '',
                editable: false,
                editorRenderer: null,
                group: false,
                pos: -1, //-1代表插入列
                rowSpan: 1
            };
        cellSetting = this._generateCellSetting(cellSetting, additionalColumn);

        if (!cellSettings) {
            if (pos != -1) {
                this._cellSettings.forEach((cellSettings) => {
                    /*let cellSettingClone: CellSetting = <CellSetting>this._clone(cellSetting);
                     const index = cellSettings.indexOf(cellSettings.find(cellSetting => cellSetting.pos == pos));
                     cellSettings.splice(index, 0, cellSettingClone);*/
                    const index = cellSettings.indexOf(cellSettings.find(cellSetting => cellSetting.pos == pos));
                    cellSettings.splice(index, 0, cellSetting);
                })
            } else {
                this._cellSettings.forEach((cellSettings) => {
                    /*let cellSettingClone: CellSetting = <CellSetting>this._clone(cellSetting);
                     cellSettings.push(cellSettingClone);*/
                    cellSettings.push(cellSetting);
                })
            }
        } else {
            if (pos != -1) {
                const index = cellSettings.indexOf(cellSettings.find(cellSetting => cellSetting.pos == pos));
                cellSettings.splice(index, 0, cellSetting);
            } else {
                cellSettings.push(cellSetting);
            }
        }
    }

    /*
     * 简单对象的拷贝
     * */
    private _clone(obj: Object): Object {
        let copy = (obj instanceof Array) ? [] : {};
        for (let attr in obj) {
            if (!obj.hasOwnProperty(attr)) continue;
            copy[attr] = (typeof obj[attr] == "object") ? this._clone(obj[attr]) : obj[attr];
        }
        return copy;
    }

    /*
     * 根据column的数据生成headSetting，支持多个column数据的合并
     * */
    private _generateHeaderSetting(headSetting: HeadSetting, column: ColumnSetting | AdditionalColumnSetting): HeadSetting {
        headSetting.width = column.width ? column.width : headSetting.width;
        headSetting.visible = column.visible === true || column.visible === false ? column.visible : headSetting.visible;

        const header = column.header;
        if (header) {
            headSetting.renderer = header.renderer ? header.renderer : headSetting.renderer;
            headSetting.class = typeof header.class == 'string' && header.class !== '' ? headSetting.class + " " + header.class : headSetting.class;
            headSetting.sortable = header.sortable === true || header.sortable === false ? header.sortable : headSetting.sortable;
            headSetting.sortAs = header.sortAs !== null && header.sortAs !== undefined ? header.sortAs : headSetting.sortAs;
            headSetting.defaultSortOrder = header.defaultSortOrder !== null && header.defaultSortOrder !== undefined ?
                header.defaultSortOrder : headSetting.defaultSortOrder;
        }
        return headSetting;
    }

    /*
     * 根据column的数据生成cellSetting，支持多个column数据的合并
     * */
    private _generateCellSetting(cellSetting: CellSetting, column: ColumnSetting | AdditionalColumnSetting): CellSetting {
        cellSetting.visible = column.visible === true || column.visible === false ? column.visible : cellSetting.visible;
        cellSetting.group = column.group === true || column.group === false ? column.group : cellSetting.group;
        const cell = column.cell;
        if (cell) {
            cellSetting.renderer = cell.renderer ? cell.renderer : cellSetting.renderer;
            cellSetting.class = typeof cell.class == 'string' && cell.class !== '' ? cellSetting.class + " " + cell.class : cellSetting.class;
            cellSetting.editable = cell.editable === true || cell.editable === false ? cell.editable : cellSetting.editable;
            cellSetting.editorRenderer = cell.editorRenderer ? cell.editorRenderer : cellSetting.editorRenderer;
        }
        return cellSetting;
    }

    ngAfterViewInit() {
        this._fixedHead = this._elementRef.nativeElement.querySelector(".rdk-table-fixed-head");

        //调整滚动条位置
        this._renderer.setStyle(this._elementRef.nativeElement.querySelector('.mCSB_scrollTools_vertical'), 'margin', this._fixedHead.offsetHeight + 'px 0 0');

        this._scrollBar.whileScrolling.subscribe(scrollEvent => {
            if (scrollEvent.direction == 'x') {
                this._renderer.setStyle(this._fixedHead, 'left', scrollEvent.left + 'px');
            }
        });

        this._transformData();

        setTimeout(()=>{
            this.tabelCells.length && this.tabelCells.forEach(tableCell => {
                tableCell.cellChange.subscribe(value => {
                    this.cellChange.emit(value);
                })
            })
        }, 0);
    }

}

/*
 * 单元格
 * */
@Component({
    selector: '[rdk-table-cell]',
    template: '<ng-template rdk-renderer-host></ng-template>'
})
export class RdkTableCell extends TableCellBasic implements OnInit {

    @Input()
    public editable: boolean = false;

    @Input()
    public editorRenderer: Type<TableCellRenderer>;

    @Input()
    public group: boolean;

    @Output() cellChange: EventEmitter<TableMsg> = new EventEmitter<TableMsg>();

    public editorRendererRef: ComponentRef<TableCellRenderer>;

    private goEditCallback: () => void;

    constructor(cfr: ComponentFactoryResolver, cd: ChangeDetectorRef, private _rdr: Renderer2, private _el: ElementRef) {
        super(cfr, cd);
    }

    /*
    * 插入编辑渲染器
    * */
    protected insertEditorRenderer(){
        this.editorRendererRef = this.rendererFactory(this.editorRenderer);

        this.editorRendererRef.instance.changeToText.subscribe(cellData => {
            if(cellData){
                if(this.cellData != cellData){
                    this.cellData = cellData;
                    this.cellChange.emit({row: this.row, column: this.column, pos: this.pos,cellData: this.cellData});
                }
                this.rendererHost.viewContainerRef.clear();
                this.insertRenderer();
                this._onClick();
            }
        });

        this.goEditCallback && this.goEditCallback();

        this.changeDetector.detectChanges();
    }

    /*
    * 如果可编辑，单元格绑定点击事件
    * */
    private _onClick(){
        this.goEditCallback = this.editable ? this._rdr.listen(this._el.nativeElement, 'click', () => {
                this.rendererHost.viewContainerRef.clear();
                this.insertEditorRenderer();
            }) : null;
    }

    ngOnInit() {
        //设置默认渲染器
        this.renderer = this.renderer ? this.renderer : DefaultCellRenderer;

        //绑定点击事件
        this._onClick();

        this.editable && this._rdr.setStyle(this._el.nativeElement, 'cursor', 'pointer');
    }

}

/*
 * 表头单元格
 * */
@Component({
    selector: '[rdk-table-header]',
    template: `<ng-template rdk-renderer-host></ng-template>
               <div *ngIf="sortable" [ngClass]="_sortOrderClass">
                    <span (click)="_sortUp()" class="rdk-table-sort-btn rdk-table-sort-up"></span>
                    <span (click)="_sortDown()" class="rdk-table-sort-btn rdk-table-sort-down"></span>
               </div>`,
    styleUrls: ['table-head.scss']
})
export class RdkTableHeader extends TableCellBasic implements OnInit {
    private _sortOrder: SortOrder = SortOrder.default;

    private _sortOrderClass: object = {};

    private _setSortOrderClass(): void {
        this._sortOrderClass = {
            'rdk-table-sort-box': true,
            'rdk-table-asc': this._sortOrder == SortOrder.asc,
            'rdk-table-des': this._sortOrder == SortOrder.des
        }
    }

    @Input() public sortable: boolean;

    @Input() public sortAs: SortAs;

    @Input()
    public set defaultSortOrder(newValue) {
        if (newValue != null) {
            this._sortOrder = newValue
        }
    };

    constructor(cfr: ComponentFactoryResolver, cd: ChangeDetectorRef) {
        super(cfr, cd);
    }

    private _sortUp(): void {
        this._sortOrder = SortOrder.asc;
        this._setSortOrderClass();

        this.tableData.sort(this.pos, this.sortAs, SortOrder.asc);
    }

    private _sortDown(): void {
        this._sortOrder = SortOrder.des;
        this._setSortOrderClass();

        this.tableData.sort(this.pos, this.sortAs, SortOrder.des);
    }

    ngOnInit() {
        //设置默认渲染器
        this.renderer = this.renderer ? this.renderer : DefaultCellRenderer;

        this._setSortOrderClass();
    }
}

/*
 * 默认表格渲染组件
 * */
@Component({
    template: '<span>{{cellData}}</span>'
})
export class DefaultCellRenderer extends TableCellRenderer {
}

@NgModule({
    declarations: [
        RdkTable, RdkTableCell, RdkRendererHost, RdkTableHeader
    ],
    imports: [
        CommonModule, RdkScrollBarModule
    ],
    exports: [CommonModule, RdkTable, RdkTableCell, RdkRendererHost, RdkTableHeader]
})
export class RdkTableModule {
}
