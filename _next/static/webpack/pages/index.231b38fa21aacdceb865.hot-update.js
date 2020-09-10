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
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: src,
    className: classNames.join(" "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUJ1dHRvbi50c3giXSwibmFtZXMiOlsiSW1hZ2VCdXR0b24iLCJvbkNsaWNrIiwic3JjIiwidXNlU3RhdGUiLCJpbVN0eWxlIiwiaW1hZ2UiLCJpbWFnZV9ob3ZlciIsImNsYXNzTmFtZXMiLCJzZXRDbGFzc05hbWVzIiwiaW1hZ2VfYnV0dG9uIiwiaW1hZ2VfcHJlc3NlZCIsImZpbHRlciIsInYiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2UsU0FBU0EsV0FBVCxPQUF1QztBQUFBOztBQUFBLE1BQWhCQyxPQUFnQixRQUFoQkEsT0FBZ0I7QUFBQSxNQUFQQyxHQUFPLFFBQVBBLEdBQU87O0FBQUEsa0JBQ2xCQyxzREFBUSxDQUFDLENBQ3pDQywrREFBTyxDQUFDQyxLQURpQyxFQUV6Q0QsK0RBQU8sQ0FBQ0UsV0FGaUMsQ0FBRCxDQURVO0FBQUEsTUFDL0NDLFVBRCtDO0FBQUEsTUFDbkNDLGFBRG1DOztBQUtwRCxTQUNFO0FBQ0UsYUFBUyxFQUFFSiwrREFBTyxDQUFDSyxZQURyQjtBQUVFLGVBQVcsRUFBRSx1QkFBTTtBQUNqQkQsbUJBQWEsd0dBQUtELFVBQUwsSUFBaUJILCtEQUFPLENBQUNNLGFBQXpCLEdBQWI7QUFDRCxLQUpIO0FBS0UsZ0JBQVksRUFBRSx3QkFBTTtBQUNsQkYsbUJBQWEsQ0FBQ0QsVUFBVSxDQUFDSSxNQUFYLENBQWtCLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFDLEtBQUtSLCtEQUFPLENBQUNNLGFBQXJCO0FBQUEsT0FBbEIsQ0FBRCxDQUFiO0FBQ0QsS0FQSDtBQVFFLGFBQVMsRUFBRSxxQkFBTTtBQUNmRixtQkFBYSxDQUFDRCxVQUFVLENBQUNJLE1BQVgsQ0FBa0IsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsS0FBS1IsK0RBQU8sQ0FBQ00sYUFBckI7QUFBQSxPQUFsQixDQUFELENBQWI7QUFDRCxLQVZIO0FBV0UsV0FBTyxFQUFFVCxPQVhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhRTtBQUFLLE9BQUcsRUFBRUMsR0FBVjtBQUFlLGFBQVMsRUFBRUssVUFBVSxDQUFDTSxJQUFYLENBQWdCLEdBQWhCLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixDQURGO0FBaUJEOztHQXRCdUJiLFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjMxYjM4ZmEyMWFhY2RjZWI4NjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbVN0eWxlIGZyb20gXCIuLi9zdHlsZXMvSW1hZ2UubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZUJ1dHRvbih7IG9uQ2xpY2ssIHNyYyB9KSB7XHJcbiAgbGV0IFtjbGFzc05hbWVzLCBzZXRDbGFzc05hbWVzXSA9IHVzZVN0YXRlKFtcclxuICAgIGltU3R5bGUuaW1hZ2UsXHJcbiAgICBpbVN0eWxlLmltYWdlX2hvdmVyLFxyXG4gIF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT17aW1TdHlsZS5pbWFnZV9idXR0b259XHJcbiAgICAgIG9uTW91c2VEb3duPXsoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2xhc3NOYW1lcyhbLi4uY2xhc3NOYW1lcywgaW1TdHlsZS5pbWFnZV9wcmVzc2VkXSk7XHJcbiAgICAgIH19XHJcbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgIHNldENsYXNzTmFtZXMoY2xhc3NOYW1lcy5maWx0ZXIoKHYpID0+IHYgIT09IGltU3R5bGUuaW1hZ2VfcHJlc3NlZCkpO1xyXG4gICAgICB9fVxyXG4gICAgICBvbk1vdXNlVXA9eygpID0+IHtcclxuICAgICAgICBzZXRDbGFzc05hbWVzKGNsYXNzTmFtZXMuZmlsdGVyKCh2KSA9PiB2ICE9PSBpbVN0eWxlLmltYWdlX3ByZXNzZWQpKTtcclxuICAgICAgfX1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgID5cclxuICAgICAgPGltZyBzcmM9e3NyY30gY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oXCIgXCIpfT48L2ltZz5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==