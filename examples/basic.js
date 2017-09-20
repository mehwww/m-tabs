webpackJsonp([4],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rmc_tabs_assets_index_less__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rmc_tabs_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rmc_tabs_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src__ = __webpack_require__(31);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* tslint:disable:no-console */





var BasicDemo = function (_React$Component) {
    _inherits(BasicDemo, _React$Component);

    function BasicDemo(props) {
        _classCallCheck(this, BasicDemo);

        var _this = _possibleConstructorReturn(this, (BasicDemo.__proto__ || Object.getPrototypeOf(BasicDemo)).call(this, props));

        _this.canvasTest = function (canvas) {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');
                context.fillStyle = 'red';
                context.fillRect(10, 10, 50, 50);
                context.fillStyle = 'rgba(0,0,255,0.5)';
                context.fillRect(30, 30, 50, 50);
                context.strokeStyle = 'red';
                context.strokeRect(10, 90, 50, 50);
                context.strokeStyle = 'rgba(0,0,255,0.5)';
                context.strokeRect(30, 120, 50, 50);
                context.clearRect(30, 30, 30, 30);
            }
        };
        _this.state = {
            page: 0
        };
        return _this;
    }

    _createClass(BasicDemo, [{
        key: 'renderContent',
        value: function renderContent(data) {
            var pStyle = { margin: 0, padding: 10 };
            return [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { key: 't1', style: { background: '#ADFFD7' } },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 1'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 2'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 3'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 1 4'
                )
            ), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { key: 't2', style: { background: '#ADFFD7' } },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('canvas', { ref: this.canvasTest, style: { height: 200 } })
            ), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { key: 't3', style: { background: '#ADFFD7' } },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 3 1'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 3 2'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    JSON.stringify(data)
                )
            ), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { key: 't4', style: { background: '#ADFFD7' } },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 4 1'
                )
            ), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { key: 't5', style: { background: '#ADFFD7' } },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'p',
                    { style: pStyle },
                    'tab 5 1'
                )
            )];
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var baseStyle = {
                display: 'flex', flexDirection: 'column', marginTop: 10, marginBottom: 10, fontSize: 14
            };
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: baseStyle },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        null,
                        'normal'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { style: { background: '#eee', boxShadow: '0 0 0 5px #eee', margin: 10, padding: 10 }, onClick: function onClick() {
                                return _this2.setState({ page: 2, data: Math.random() });
                            } },
                        'change to 3'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { style: { background: '#eee', boxShadow: '0 0 0 5px #eee', margin: 10, padding: 10 }, onClick: function onClick() {
                                return _this2.setState({ data: Math.random() });
                            } },
                        'change data'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
                        { tabs: [{ key: 't1', title: 't1' }, { key: 't2', title: 't2' }, { key: 't3', title: 't3' }], page: this.state.page, onChange: function onChange(tab, index) {
                                console.log('onChange', tab, index);
                                _this2.setState({ page: index });
                            }, onTabClick: function onTabClick(tab, index) {
                                console.log('onTabClick', tab, index);
                            }, renderTabBar: function renderTabBar(props) {
                                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src__["b" /* DefaultTabBar */], _extends({}, props, { renderTab: function renderTab(tab) {
                                        if (tab.key === 't2') {
                                            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                                'div',
                                                { style: { position: 'relative' } },
                                                tab.title,
                                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: {
                                                        position: 'absolute',
                                                        right: -3,
                                                        top: -1,
                                                        width: 6, height: 6,
                                                        background: 'red',
                                                        borderTopLeftRadius: 6,
                                                        borderBottomLeftRadius: 6,
                                                        borderBottomRightRadius: 6,
                                                        borderTopRightRadius: 6
                                                    } })
                                            );
                                        }
                                        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                            'div',
                                            null,
                                            tab.title
                                        );
                                    } }));
                            } },
                        this.renderContent(this.state.data)
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: baseStyle },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        null,
                        'bottom'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
                        { tabs: [{ key: 't1', title: 't1' }, { key: 't2', title: 't2' }, { key: 't3', title: 't3' }, { key: 't4', title: 't4' }], initialPage: 't2', tabBarPosition: 'bottom' },
                        this.renderContent()
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: _extends({}, baseStyle) },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        null,
                        'destroyInactiveTab'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
                        { tabs: [{ title: 't1' }, { title: 't2' }, { title: 't3' }, { title: 't4' }, { title: 't5' }], destroyInactiveTab: true },
                        this.renderContent()
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: _extends({}, baseStyle, { height: 240 }) },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        null,
                        'fixed height'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
                        { tabs: [{ title: 't1' }, { title: 't2' }, { title: 't3' }, { title: 't4' }, { title: 't5' }], initialPage: 1, prerenderingSiblingsNumber: 1 },
                        this.renderContent()
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: _extends({}, baseStyle, { height: 240 }) },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        null,
                        'no animate'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
                        { tabs: [{ title: 't1' }, { title: 't2' }, { title: 't3' }, { title: 't4' }, { title: 't5' }], animated: false },
                        this.renderContent()
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: baseStyle },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        null,
                        'no swipeable'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
                        { tabs: [{ key: 't1', title: 't1' }, { key: 't2', title: 't2' }, { key: 't3', title: 't3' }, { key: 't4', title: 't4' }], initialPage: 't2', swipeable: false },
                        this.renderContent()
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { style: baseStyle },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'h2',
                        null,
                        'no paged'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__src__["a" /* Tabs */],
                        { tabs: [{ key: 't1', title: 't1' }, { key: 't2', title: 't2' }, { key: 't3', title: 't3' }, { key: 't4', title: 't4' }], initialPage: 't2', usePaged: false },
                        this.renderContent()
                    )
                )
            );
        }
    }]);

    return BasicDemo;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BasicDemo, null), document.getElementById('__react-content'));
var ip = document.body.children[3].innerText.split('/')[2].split(':')[0];
var elm = document.createElement('script');
elm.src = 'http://' + ip + ':1337/vorlon.js';
document.body.appendChild(elm);

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(132);


/***/ })

},[291]);
//# sourceMappingURL=basic.js.map