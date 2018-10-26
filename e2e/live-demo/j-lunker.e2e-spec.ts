import {browser, by, element, ExpectedConditions} from 'protractor';
import {expectToExist} from "../utils/asserts";

describe('plunker live demo', () => {
    beforeEach(() => {
        browser.waitForAngularEnabled(false);
    });
    describe('just test plunker live demo can open', () => {
        // demo index: 1
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/alert/customized/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/alert/customized/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 2
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/alert/in-dom/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/alert/in-dom/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 3
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/alert/popup/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/alert/popup/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 4
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/auto-complete-input/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/auto-complete-input/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 5
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/auto-complete-input/non-group/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/auto-complete-input/non-group/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 6
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/auto-complete-input/with-group/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/auto-complete-input/with-group/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 7
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/box/form/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/box/form/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 8
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/box/justify/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/box/justify/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 9
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/box/layout/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/box/layout/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 10
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/box/middle-resize-line/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/box/middle-resize-line/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 11
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/box/scroll/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/box/scroll/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 12
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/box/view-init/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/box/view-init/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 13
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/button/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/button/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 14
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/button/disabled/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/button/disabled/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 15
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/button/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/button/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 16
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/button/preset/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/button/preset/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 17
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/button/width-height/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/button/width-height/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 18
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/button/with-loading/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/button/with-loading/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 19
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/button-bar/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/button-bar/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 20
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/cascade/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/cascade/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 21
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/cascade/cross-select/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/cascade/cross-select/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 22
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/cascade/lazy-load/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/cascade/lazy-load/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 23
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/cascade/multiple-select/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/cascade/multiple-select/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 24
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/cascade/selected-items/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/cascade/selected-items/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 25
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/cascade/show-all/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/cascade/show-all/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 26
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/cascade/track-item-by/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/cascade/track-item-by/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 27
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/cascade/with-combo/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/cascade/with-combo/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 28
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/checkbox/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/checkbox/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 29
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/checkbox/disabled/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/checkbox/disabled/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 30
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/checkbox/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/checkbox/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 31
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/collapse/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/collapse/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 32
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/collapse/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/collapse/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 33
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/collapse/with-ngfor/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/collapse/with-ngfor/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 34
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/combo-select/auto-width/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/combo-select/auto-width/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 35
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/combo-select/change/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/combo-select/change/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 36
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/combo-select/disable/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/combo-select/disable/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 37
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/combo-select/drop-down-status/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/combo-select/drop-down-status/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 38
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/combo-select/events/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/combo-select/events/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 39
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/combo-select/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/combo-select/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 40
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/combo-select/label-field/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/combo-select/label-field/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 41
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/combo-select/multiple/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/combo-select/multiple/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 42
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/combo-select/open/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/combo-select/open/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 43
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/combo-select/searchable/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/combo-select/searchable/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 44
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/combo-select/set-width/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/combo-select/set-width/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 45
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/combo-select/trigger/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/combo-select/trigger/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 46
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/data-encapsulation/ajax-events/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/data-encapsulation/ajax-events/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 47
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/data-encapsulation/array-ajax/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/data-encapsulation/array-ajax/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 48
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/data-encapsulation/array-basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/data-encapsulation/array-basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 49
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/data-encapsulation/array-ssp/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/data-encapsulation/array-ssp/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 50
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/data-encapsulation/local-pageable-array/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/data-encapsulation/local-pageable-array/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 51
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/data-encapsulation/refresh/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/data-encapsulation/refresh/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 52
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/dialog/buttons/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/dialog/buttons/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 53
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/dialog/in-dom/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/dialog/in-dom/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 54
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/dialog/misc/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/dialog/misc/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 55
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/dialog/popup-option/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/dialog/popup-option/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 56
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/dialog/title/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/dialog/title/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 57
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/dialog/top/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/dialog/top/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 58
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/drag-drop/drag-to-replace/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/drag-drop/drag-to-replace/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 59
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/drag-drop/table-drag/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/drag-drop/table-drag/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 60
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/drawer/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/drawer/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 61
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/editable-box/custom-scene-layout/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/editable-box/custom-scene-layout/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 62
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/editable-box/editable/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/editable-box/editable/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 63
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/editable-box/monitor/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/editable-box/monitor/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 64
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/editable-box/set-resize-line-width/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/editable-box/set-resize-line-width/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 65
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/fish-bone/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/fish-bone/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 66
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/form/template-driven/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/form/template-driven/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 67
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/bar/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/bar/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 68
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 69
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/box-plot/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/box-plot/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 70
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/doughnut/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/doughnut/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 71
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/formatter/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/formatter/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 72
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/funnel-plot/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/funnel-plot/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 73
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/gauge/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/gauge/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 74
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/heat/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/heat/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 75
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/k-line/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/k-line/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 76
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/line/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/line/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 77
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/map/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/map/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 78
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/no-data/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/no-data/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 79
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/pie/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/pie/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 80
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/province-map/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/province-map/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 81
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/radar/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/radar/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 82
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/relational/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/relational/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 83
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/resize/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/resize/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 84
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/scatter/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/scatter/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 85
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/set-size/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/set-size/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 86
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/stack-area/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/stack-area/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 87
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/graph/strip/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/graph/strip/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 88
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/i18n/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/i18n/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 89
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/icon/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/icon/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 90
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/icon/icons/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/icon/icons/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 91
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/input/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/input/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 92
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/input/clearable/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/input/clearable/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 93
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/input/disabled/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/input/disabled/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 94
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/input/focus/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/input/focus/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 95
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/input/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/input/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 96
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/input/icons/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/input/icons/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 97
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/input/password/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/input/password/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 98
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/input/select/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/input/select/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 99
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/input/valid/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/input/valid/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 100
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/input/value-change/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/input/value-change/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 101
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/list/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/list/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 102
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/list-lite/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/list-lite/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 103
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/list-lite/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/list-lite/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 104
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/list-lite/line-ellipsis/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/list-lite/line-ellipsis/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 105
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/list-lite/option-count/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/list-lite/option-count/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 106
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/list-lite/preset-value/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/list-lite/preset-value/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 107
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/list-lite/searchable/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/list-lite/searchable/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 108
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/list-lite/with-combo/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/list-lite/with-combo/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 109
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/loading/ball/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/loading/ball/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 110
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/loading/bubble/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/loading/bubble/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 111
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/loading/color/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/loading/color/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 112
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/loading/dom-inner/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/loading/dom-inner/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 113
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/loading/font-icon/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/loading/font-icon/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 114
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/loading/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/loading/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 115
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/loading/user-defined/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/loading/user-defined/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 116
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/misc/zone-for-performance/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/misc/zone-for-performance/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 117
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/movable/move-and-click/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/movable/move-and-click/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 118
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/notification/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/notification/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 119
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/numeric-input/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/numeric-input/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 120
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/numeric-input/disabled/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/numeric-input/disabled/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 121
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/numeric-input/size/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/numeric-input/size/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 122
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/numeric-input/step/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/numeric-input/step/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 123
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/pagination/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/pagination/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 124
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/pagination/with-page-info/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/pagination/with-page-info/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 125
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/popup/introduce/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/popup/introduce/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 126
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/popup/z-index/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/popup/z-index/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 127
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/radio-group/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/radio-group/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 128
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/radio-group/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/radio-group/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 129
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/radio-group/track-item-by/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/radio-group/track-item-by/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 130
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/radio-lite/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/radio-lite/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 131
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/range-time/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/range-time/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 132
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/range-time/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/range-time/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 133
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/range-time/gr/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/range-time/gr/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 134
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/range-time/gr-items/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/range-time/gr-items/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 135
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/range-time/limit-end/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/range-time/limit-end/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 136
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/range-time/limit-start/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/range-time/limit-start/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 137
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/range-time/recommended/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/range-time/recommended/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 138
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/range-time/refresh-interval/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/range-time/refresh-interval/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 139
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/range-time/week-start/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/range-time/week-start/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 140
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/scrollbar/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/scrollbar/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 141
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/select/async/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/select/async/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 142
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/select/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/select/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 143
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/select/disabled/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/select/disabled/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 144
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/select/line-ellipsis/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/select/line-ellipsis/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 145
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/select/multiple/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/select/multiple/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 146
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/select/option-count/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/select/option-count/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 147
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/select/preset/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/select/preset/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 148
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/select/searchable/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/select/searchable/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 149
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/select/size/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/select/size/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 150
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/select/trigger/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/select/trigger/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 151
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/slider/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/slider/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 152
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/slider/vertical/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/slider/vertical/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 153
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/steps/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/steps/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 154
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/steps/custom-icons/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/steps/custom-icons/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 155
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/steps/step-interactive/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/steps/step-interactive/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 156
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/steps/vertical/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/steps/vertical/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 157
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/switch/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/switch/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 158
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tab/api/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tab/api/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 159
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tab/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tab/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 160
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tab/destroy-tab/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tab/destroy-tab/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 161
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tab/editable/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tab/editable/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 162
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tab/hide-tab/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tab/hide-tab/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 163
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tab/show-tab/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tab/show-tab/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 164
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tab/update-title/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tab/update-title/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 165
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tab/with-input/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tab/with-input/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 166
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tab/with-ngfor/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tab/with-ngfor/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 167
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/add-column/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/add-column/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 168
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 169
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/big-column/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/big-column/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 170
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/big-row/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/big-row/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 171
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/big-table/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/big-table/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 172
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/calendar/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/calendar/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 173
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/cell-editable/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/cell-editable/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 174
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/cell-render/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/cell-render/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 175
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/cell-select-renderer/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/cell-select-renderer/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 176
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/checkbox-column/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/checkbox-column/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 177
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/checkbox-column-object-cell/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/checkbox-column-object-cell/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 178
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/checkbox-column-pageable/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/checkbox-column-pageable/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 179
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/column-group/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/column-group/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 180
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/column-visible/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/column-visible/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 181
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/content-width/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/content-width/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 182
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/data-change/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/data-change/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 183
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/data-from-ajax/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/data-from-ajax/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 184
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/fixed-header/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/fixed-header/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 185
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/header-class/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/header-class/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 186
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/header-render/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/header-render/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 187
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/hide-header/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/hide-header/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 188
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/html-renderer/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/html-renderer/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 189
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/index-column/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/index-column/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 190
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/index-column-with-paging/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/index-column-with-paging/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 191
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/local-paging-data/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/local-paging-data/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 192
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/no-data/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/no-data/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 193
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/pageable/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/pageable/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 194
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/rebuild-table-data/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/rebuild-table-data/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 195
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/renderer/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/renderer/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 196
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/resize/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/resize/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 197
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/scroll-listen/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/scroll-listen/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 198
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/select-row/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/select-row/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 199
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/set-cell-class/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/set-cell-class/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 200
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/sortable/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/sortable/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 201
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/sudoku/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/sudoku/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 202
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/swim-lane-diagram/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/swim-lane-diagram/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 203
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/switch-renderer/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/switch-renderer/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 204
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/template-ref-renderer/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/template-ref-renderer/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 205
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/update-column-define/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/update-column-define/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 206
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/table/with-popup/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/table/with-popup/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 207
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tag/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tag/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 208
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tile/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tile/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 209
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tile/label-field/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tile/label-field/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 210
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tile/multiple-select/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tile/multiple-select/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 211
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tile/selected-items/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tile/selected-items/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 212
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tile/selected-items-change/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tile/selected-items-change/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 213
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tile/tile-option-width/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tile/tile-option-width/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 214
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tile/track-item-by/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tile/track-item-by/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 215
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tile-lite/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tile-lite/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 216
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/time/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/time/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 217
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/time/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/time/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 218
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/time/gr/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/time/gr/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 219
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/time/gr-items/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/time/gr-items/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 220
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/time/limit-end/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/time/limit-end/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 221
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/time/limit-start/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/time/limit-start/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 222
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/time/recommended/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/time/recommended/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 223
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/time/refresh-interval/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/time/refresh-interval/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 224
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/time/week-start/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/time/week-start/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 225
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/time/with-combo-select/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/time/with-combo-select/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 226
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tooltip/dialog/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tooltip/dialog/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 227
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tooltip/in-dom/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tooltip/in-dom/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 228
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tooltip/inline/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tooltip/inline/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 229
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tree/async/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tree/async/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 230
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tree/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tree/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 231
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tree/custom-settings-callback/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tree/custom-settings-callback/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 232
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tree/data-from-ajax/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tree/data-from-ajax/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 233
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/tree/editable/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/tree/editable/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 234
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/trusted-html/full/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/trusted-html/full/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });

        // demo index: 235
        it('testing http://rdkmaster.com/jigsaw/live-demo-temp/upload/basic/index.html', async () => {
            await browser.get('http://rdk.zte.com.cn/jigsaw/live-demo-temp/upload/basic/index.html');
            await browser.switchTo().frame(0);
            await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('jigsaw-live-demo'))));
            expectToExist(element(by.tagName('jigsaw-live-demo')),true);
        });
    })
});