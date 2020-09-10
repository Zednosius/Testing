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
      src = _ref.src,
      highlight = _ref.highlight;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([_styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_button, _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image, _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_hover]),
      classNames = _useState[0],
      setClassNames = _useState[1];

  return __jsx("button", {
    className: classNames.join(" "),
    onMouseDown: function onMouseDown() {
      setClassNames([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(classNames), [_styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_pressed]));
    },
    onMouseLeave: function onMouseLeave() {
      setClassNames(classNames.filter(function (v) {
        return v !== _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_pressed;
      }));
    },
    onMouseUp: function onMouseUp() {
      setClassNames(classNames.filter(function (v) {
        return v !== _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_pressed;
      }));
    },
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: src,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }));
}

_s(ImageButton, "i67V2zszKEVFoxqdc3JJNpoHIjw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUJ1dHRvbi50c3giXSwibmFtZXMiOlsiSW1hZ2VCdXR0b24iLCJvbkNsaWNrIiwic3JjIiwiaGlnaGxpZ2h0IiwidXNlU3RhdGUiLCJpbVN0eWxlIiwiaW1hZ2VfYnV0dG9uIiwiaW1hZ2UiLCJpbWFnZV9ob3ZlciIsImNsYXNzTmFtZXMiLCJzZXRDbGFzc05hbWVzIiwiam9pbiIsImltYWdlX3ByZXNzZWQiLCJmaWx0ZXIiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2UsU0FBU0EsV0FBVCxPQUFrRDtBQUFBOztBQUFBLE1BQTNCQyxPQUEyQixRQUEzQkEsT0FBMkI7QUFBQSxNQUFsQkMsR0FBa0IsUUFBbEJBLEdBQWtCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUFBLGtCQUM3QkMsc0RBQVEsQ0FBQyxDQUN6Q0MsK0RBQU8sQ0FBQ0MsWUFEaUMsRUFFekNELCtEQUFPLENBQUNFLEtBRmlDLEVBR3pDRiwrREFBTyxDQUFDRyxXQUhpQyxDQUFELENBRHFCO0FBQUEsTUFDMURDLFVBRDBEO0FBQUEsTUFDOUNDLGFBRDhDOztBQU0vRCxTQUNFO0FBQ0UsYUFBUyxFQUFFRCxVQUFVLENBQUNFLElBQVgsQ0FBZ0IsR0FBaEIsQ0FEYjtBQUVFLGVBQVcsRUFBRSx1QkFBTTtBQUNqQkQsbUJBQWEsd0dBQUtELFVBQUwsSUFBaUJKLCtEQUFPLENBQUNPLGFBQXpCLEdBQWI7QUFDRCxLQUpIO0FBS0UsZ0JBQVksRUFBRSx3QkFBTTtBQUNsQkYsbUJBQWEsQ0FBQ0QsVUFBVSxDQUFDSSxNQUFYLENBQWtCLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFDLEtBQUtULCtEQUFPLENBQUNPLGFBQXJCO0FBQUEsT0FBbEIsQ0FBRCxDQUFiO0FBQ0QsS0FQSDtBQVFFLGFBQVMsRUFBRSxxQkFBTTtBQUNmRixtQkFBYSxDQUFDRCxVQUFVLENBQUNJLE1BQVgsQ0FBa0IsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsS0FBS1QsK0RBQU8sQ0FBQ08sYUFBckI7QUFBQSxPQUFsQixDQUFELENBQWI7QUFDRCxLQVZIO0FBV0UsV0FBTyxFQUFFWCxPQVhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhRTtBQUFLLE9BQUcsRUFBRUMsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsQ0FERjtBQWlCRDs7R0F2QnVCRixXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ2NjE4YjQzY2VlNGZkMzEyMGY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1TdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0ltYWdlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VCdXR0b24oeyBvbkNsaWNrLCBzcmMsIGhpZ2hsaWdodCB9KSB7XHJcbiAgbGV0IFtjbGFzc05hbWVzLCBzZXRDbGFzc05hbWVzXSA9IHVzZVN0YXRlKFtcclxuICAgIGltU3R5bGUuaW1hZ2VfYnV0dG9uLFxyXG4gICAgaW1TdHlsZS5pbWFnZSxcclxuICAgIGltU3R5bGUuaW1hZ2VfaG92ZXIsXHJcbiAgXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oXCIgXCIpfVxyXG4gICAgICBvbk1vdXNlRG93bj17KCkgPT4ge1xyXG4gICAgICAgIHNldENsYXNzTmFtZXMoWy4uLmNsYXNzTmFtZXMsIGltU3R5bGUuaW1hZ2VfcHJlc3NlZF0pO1xyXG4gICAgICB9fVxyXG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICBzZXRDbGFzc05hbWVzKGNsYXNzTmFtZXMuZmlsdGVyKCh2KSA9PiB2ICE9PSBpbVN0eWxlLmltYWdlX3ByZXNzZWQpKTtcclxuICAgICAgfX1cclxuICAgICAgb25Nb3VzZVVwPXsoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2xhc3NOYW1lcyhjbGFzc05hbWVzLmZpbHRlcigodikgPT4gdiAhPT0gaW1TdHlsZS5pbWFnZV9wcmVzc2VkKSk7XHJcbiAgICAgIH19XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIDxpbWcgc3JjPXtzcmN9PjwvaW1nPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9