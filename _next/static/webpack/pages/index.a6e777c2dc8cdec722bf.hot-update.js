webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImageButton.tsx":
/*!************************************!*\
  !*** ./components/ImageButton.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageButton; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Image.module.css */ "./styles/Image.module.css");
/* harmony import */ var _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "X:\\erik\\Programmering\\Webb\\SupCom\\ecobalancesupreme\\components\\ImageButton.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ImageButton(_ref) {
  _s();

  var onClick = _ref.onClick,
      src = _ref.src;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([_styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image, _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_hover]),
      classNames = _useState[0],
      setClassNames = _useState[1];

  return __jsx("button", {
    className: _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_button,
    onMouseDown: function onMouseDown() {
      setClassNames([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(classNames), [_styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_button_pressed]));
    },
    onMouseLeave: function onMouseLeave() {
      setClassNames(classNames.filter(function (v) {
        return v !== _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_button_pressed;
      }));
    },
    onMouseUp: function onMouseUp() {
      setClassNames(classNames.filter(function (v) {
        return v !== _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_button_pressed;
      }));
    },
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: src,
    className: classNames.join(" "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }));
}

_s(ImageButton, "reHKHkH30ddBYv8NMwWZPwdD9RE=");

_c = ImageButton;

var _c;

$RefreshReg$(_c, "ImageButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUJ1dHRvbi50c3giXSwibmFtZXMiOlsiSW1hZ2VCdXR0b24iLCJvbkNsaWNrIiwic3JjIiwidXNlU3RhdGUiLCJpbVN0eWxlIiwiaW1hZ2UiLCJpbWFnZV9ob3ZlciIsImNsYXNzTmFtZXMiLCJzZXRDbGFzc05hbWVzIiwiaW1hZ2VfYnV0dG9uIiwiaW1hZ2VfYnV0dG9uX3ByZXNzZWQiLCJmaWx0ZXIiLCJ2Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNlLFNBQVNBLFdBQVQsT0FBdUM7QUFBQTs7QUFBQSxNQUFoQkMsT0FBZ0IsUUFBaEJBLE9BQWdCO0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPOztBQUFBLGtCQUNsQkMsc0RBQVEsQ0FBQyxDQUN6Q0MsK0RBQU8sQ0FBQ0MsS0FEaUMsRUFFekNELCtEQUFPLENBQUNFLFdBRmlDLENBQUQsQ0FEVTtBQUFBLE1BQy9DQyxVQUQrQztBQUFBLE1BQ25DQyxhQURtQzs7QUFLcEQsU0FDRTtBQUNFLGFBQVMsRUFBRUosK0RBQU8sQ0FBQ0ssWUFEckI7QUFFRSxlQUFXLEVBQUUsdUJBQU07QUFDakJELG1CQUFhLHdHQUFLRCxVQUFMLElBQWlCSCwrREFBTyxDQUFDTSxvQkFBekIsR0FBYjtBQUNELEtBSkg7QUFLRSxnQkFBWSxFQUFFLHdCQUFNO0FBQ2xCRixtQkFBYSxDQUNYRCxVQUFVLENBQUNJLE1BQVgsQ0FBa0IsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsS0FBS1IsK0RBQU8sQ0FBQ00sb0JBQXJCO0FBQUEsT0FBbEIsQ0FEVyxDQUFiO0FBR0QsS0FUSDtBQVVFLGFBQVMsRUFBRSxxQkFBTTtBQUNmRixtQkFBYSxDQUNYRCxVQUFVLENBQUNJLE1BQVgsQ0FBa0IsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsS0FBS1IsK0RBQU8sQ0FBQ00sb0JBQXJCO0FBQUEsT0FBbEIsQ0FEVyxDQUFiO0FBR0QsS0FkSDtBQWVFLFdBQU8sRUFBRVQsT0FmWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaUJFO0FBQUssT0FBRyxFQUFFQyxHQUFWO0FBQWUsYUFBUyxFQUFFSyxVQUFVLENBQUNNLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixDQURGO0FBcUJEOztHQTFCdUJiLFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTZlNzc3YzJkYzhjZGVjNzIyYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbVN0eWxlIGZyb20gXCIuLi9zdHlsZXMvSW1hZ2UubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZUJ1dHRvbih7IG9uQ2xpY2ssIHNyYyB9KSB7XHJcbiAgbGV0IFtjbGFzc05hbWVzLCBzZXRDbGFzc05hbWVzXSA9IHVzZVN0YXRlKFtcclxuICAgIGltU3R5bGUuaW1hZ2UsXHJcbiAgICBpbVN0eWxlLmltYWdlX2hvdmVyLFxyXG4gIF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT17aW1TdHlsZS5pbWFnZV9idXR0b259XHJcbiAgICAgIG9uTW91c2VEb3duPXsoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2xhc3NOYW1lcyhbLi4uY2xhc3NOYW1lcywgaW1TdHlsZS5pbWFnZV9idXR0b25fcHJlc3NlZF0pO1xyXG4gICAgICB9fVxyXG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICBzZXRDbGFzc05hbWVzKFxyXG4gICAgICAgICAgY2xhc3NOYW1lcy5maWx0ZXIoKHYpID0+IHYgIT09IGltU3R5bGUuaW1hZ2VfYnV0dG9uX3ByZXNzZWQpXHJcbiAgICAgICAgKTtcclxuICAgICAgfX1cclxuICAgICAgb25Nb3VzZVVwPXsoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2xhc3NOYW1lcyhcclxuICAgICAgICAgIGNsYXNzTmFtZXMuZmlsdGVyKCh2KSA9PiB2ICE9PSBpbVN0eWxlLmltYWdlX2J1dHRvbl9wcmVzc2VkKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH19XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIDxpbWcgc3JjPXtzcmN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKFwiIFwiKX0+PC9pbWc+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=