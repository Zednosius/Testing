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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUJ1dHRvbi50c3giXSwibmFtZXMiOlsiSW1hZ2VCdXR0b24iLCJvbkNsaWNrIiwic3JjIiwidXNlU3RhdGUiLCJpbVN0eWxlIiwiaW1hZ2VfYnV0dG9uIiwiaW1hZ2UiLCJpbWFnZV9ob3ZlciIsImNsYXNzTmFtZXMiLCJzZXRDbGFzc05hbWVzIiwiam9pbiIsImltYWdlX3ByZXNzZWQiLCJmaWx0ZXIiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2UsU0FBU0EsV0FBVCxPQUF1QztBQUFBOztBQUFBLE1BQWhCQyxPQUFnQixRQUFoQkEsT0FBZ0I7QUFBQSxNQUFQQyxHQUFPLFFBQVBBLEdBQU87O0FBQUEsa0JBQ2xCQyxzREFBUSxDQUFDLENBQ3pDQywrREFBTyxDQUFDQyxZQURpQyxFQUV6Q0QsK0RBQU8sQ0FBQ0UsS0FGaUMsRUFHekNGLCtEQUFPLENBQUNHLFdBSGlDLENBQUQsQ0FEVTtBQUFBLE1BQy9DQyxVQUQrQztBQUFBLE1BQ25DQyxhQURtQzs7QUFNcEQsU0FDRTtBQUNFLGFBQVMsRUFBRUQsVUFBVSxDQUFDRSxJQUFYLENBQWdCLEdBQWhCLENBRGI7QUFFRSxlQUFXLEVBQUUsdUJBQU07QUFDakJELG1CQUFhLHdHQUFLRCxVQUFMLElBQWlCSiwrREFBTyxDQUFDTyxhQUF6QixHQUFiO0FBQ0QsS0FKSDtBQUtFLGdCQUFZLEVBQUUsd0JBQU07QUFDbEJGLG1CQUFhLENBQUNELFVBQVUsQ0FBQ0ksTUFBWCxDQUFrQixVQUFDQyxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxLQUFLVCwrREFBTyxDQUFDTyxhQUFyQjtBQUFBLE9BQWxCLENBQUQsQ0FBYjtBQUNELEtBUEg7QUFRRSxhQUFTLEVBQUUscUJBQU07QUFDZkYsbUJBQWEsQ0FBQ0QsVUFBVSxDQUFDSSxNQUFYLENBQWtCLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFDLEtBQUtULCtEQUFPLENBQUNPLGFBQXJCO0FBQUEsT0FBbEIsQ0FBRCxDQUFiO0FBQ0QsS0FWSDtBQVdFLFdBQU8sRUFBRVYsT0FYWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYUU7QUFBSyxPQUFHLEVBQUVDLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBREY7QUFpQkQ7O0dBdkJ1QkYsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMjRlYzRhNWM5ZmIxMjIxODRkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9JbWFnZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlQnV0dG9uKHsgb25DbGljaywgc3JjIH0pIHtcclxuICBsZXQgW2NsYXNzTmFtZXMsIHNldENsYXNzTmFtZXNdID0gdXNlU3RhdGUoW1xyXG4gICAgaW1TdHlsZS5pbWFnZV9idXR0b24sXHJcbiAgICBpbVN0eWxlLmltYWdlLFxyXG4gICAgaW1TdHlsZS5pbWFnZV9ob3ZlcixcclxuICBdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbihcIiBcIil9XHJcbiAgICAgIG9uTW91c2VEb3duPXsoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2xhc3NOYW1lcyhbLi4uY2xhc3NOYW1lcywgaW1TdHlsZS5pbWFnZV9wcmVzc2VkXSk7XHJcbiAgICAgIH19XHJcbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgIHNldENsYXNzTmFtZXMoY2xhc3NOYW1lcy5maWx0ZXIoKHYpID0+IHYgIT09IGltU3R5bGUuaW1hZ2VfcHJlc3NlZCkpO1xyXG4gICAgICB9fVxyXG4gICAgICBvbk1vdXNlVXA9eygpID0+IHtcclxuICAgICAgICBzZXRDbGFzc05hbWVzKGNsYXNzTmFtZXMuZmlsdGVyKCh2KSA9PiB2ICE9PSBpbVN0eWxlLmltYWdlX3ByZXNzZWQpKTtcclxuICAgICAgfX1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgID5cclxuICAgICAgPGltZyBzcmM9e3NyY30+PC9pbWc+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=