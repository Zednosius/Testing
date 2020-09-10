webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ConstructionBar.tsx":
/*!****************************************!*\
  !*** ./components/ConstructionBar.tsx ***!
  \****************************************/
/*! exports provided: MemoConstructionBar, ConstructionBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoConstructionBar", function() { return MemoConstructionBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstructionBar", function() { return ConstructionBar; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_ConstructionBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ConstructionBar.module.css */ "./styles/ConstructionBar.module.css");
/* harmony import */ var _styles_ConstructionBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ConstructionBar_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UnitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UnitButton */ "./components/UnitButton.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "X:\\erik\\Programmering\\Webb\\SupCom\\ecobalancesupreme\\components\\ConstructionBar.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var MemoConstructionBar = react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(ConstructionBar); // Divides constructables + upgrade into three tier tabs.

_c = MemoConstructionBar;
function ConstructionBar(_ref) {
  _s();

  var _this = this;

  var buildingIndex = _ref.buildingIndex,
      constructables = _ref.constructables,
      upgrades = _ref.upgrades,
      updateBuilding = _ref.updateBuilding;
  var techLevels = [1, 2, 3];

  var unitClickHandler = function unitClickHandler(unit) {
    updateBuilding(buildingIndex, function (building) {
      return _objectSpread(_objectSpread({}, building), {}, {
        Queue: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(building.Queue), [_objectSpread(_objectSpread({}, unit), {}, {
          key: building.QueueNo
        })]),
        QueueNo: building.QueueNo + 1
      });
    });
  }; // UseState, store selected tech level, default to 1
  // OnClick change selected tech level and re-render


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      selectedTab = _useState[0],
      setTab = _useState[1];

  console.log(constructables, upgrades);
  return __jsx("div", {
    className: _styles_ConstructionBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.construction_bar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, techLevels.map(function (techLevel) {
    return __jsx("button", {
      key: "B_" + techLevel,
      onClick: function onClick() {
        return setTab(techLevel);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: Constants.Icon(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }), "T", techLevel);
  }), __jsx("div", {
    id: "tech" + selectedTab,
    key: selectedTab,
    className: _styles_ConstructionBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tech_tab,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, constructables.concat(upgrades).filter(function (unit) {
    return unit.TechLevel === selectedTab;
  }).map(function (unit) {
    return __jsx(_UnitButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      unit: unit,
      key: unit.UnitName,
      onClick: unitClickHandler,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 19
      }
    });
  }))));
}

_s(ConstructionBar, "wuPryp/lM0mCyn9v4MbUwdA6o5E=");

_c2 = ConstructionBar;

var _c, _c2;

$RefreshReg$(_c, "MemoConstructionBar");
$RefreshReg$(_c2, "ConstructionBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db25zdHJ1Y3Rpb25CYXIudHN4Il0sIm5hbWVzIjpbIk1lbW9Db25zdHJ1Y3Rpb25CYXIiLCJSZWFjdCIsIm1lbW8iLCJDb25zdHJ1Y3Rpb25CYXIiLCJidWlsZGluZ0luZGV4IiwiY29uc3RydWN0YWJsZXMiLCJ1cGdyYWRlcyIsInVwZGF0ZUJ1aWxkaW5nIiwidGVjaExldmVscyIsInVuaXRDbGlja0hhbmRsZXIiLCJ1bml0IiwiYnVpbGRpbmciLCJRdWV1ZSIsImtleSIsIlF1ZXVlTm8iLCJ1c2VTdGF0ZSIsInNlbGVjdGVkVGFiIiwic2V0VGFiIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImNvbnN0cnVjdGlvbl9iYXIiLCJtYXAiLCJ0ZWNoTGV2ZWwiLCJDb25zdGFudHMiLCJJY29uIiwidGVjaF90YWIiLCJjb25jYXQiLCJmaWx0ZXIiLCJUZWNoTGV2ZWwiLCJVbml0TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxtQkFBbUIsR0FBR0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXQyxlQUFYLENBQTVCLEMsQ0FFUDs7S0FGYUgsbUI7QUFHTixTQUFTRyxlQUFULE9BYUo7QUFBQTs7QUFBQTs7QUFBQSxNQVpEQyxhQVlDLFFBWkRBLGFBWUM7QUFBQSxNQVhEQyxjQVdDLFFBWERBLGNBV0M7QUFBQSxNQVZEQyxRQVVDLFFBVkRBLFFBVUM7QUFBQSxNQVREQyxjQVNDLFFBVERBLGNBU0M7QUFDRCxNQUFJQyxVQUFvQixHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQTNCOztBQUVBLE1BQUlDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQy9CSCxrQkFBYyxDQUFDSCxhQUFELEVBQWdCLFVBQUNPLFFBQUQsRUFBYztBQUMxQyw2Q0FDS0EsUUFETDtBQUVFQyxhQUFLLHlHQUFNRCxRQUFRLENBQUNDLEtBQWYsb0NBQTJCRixJQUEzQjtBQUFpQ0csYUFBRyxFQUFFRixRQUFRLENBQUNHO0FBQS9DLFlBRlA7QUFHRUEsZUFBTyxFQUFFSCxRQUFRLENBQUNHLE9BQVQsR0FBbUI7QUFIOUI7QUFLRCxLQU5hLENBQWQ7QUFPRCxHQVJELENBSEMsQ0FZRDtBQUNBOzs7QUFiQyxrQkFjMkJDLHNEQUFRLENBQUMsQ0FBRCxDQWRuQztBQUFBLE1BY0lDLFdBZEo7QUFBQSxNQWNpQkMsTUFkakI7O0FBZURDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZZCxjQUFaLEVBQTRCQyxRQUE1QjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVjLHlFQUFNLENBQUNDLGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsbUVBQ0diLFVBQVUsQ0FBQ2MsR0FBWCxDQUFlLFVBQUNDLFNBQUQsRUFBZTtBQUM3QixXQUNFO0FBQVEsU0FBRyxFQUFFLE9BQU9BLFNBQXBCO0FBQStCLGFBQU8sRUFBRTtBQUFBLGVBQU1OLE1BQU0sQ0FBQ00sU0FBRCxDQUFaO0FBQUEsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFQyxTQUFTLENBQUNDLElBQVYsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsT0FDc0NGLFNBRHRDLENBREY7QUFLRCxHQU5BLENBREgsRUFTSTtBQUNFLE1BQUUsRUFBRSxTQUFTUCxXQURmO0FBRUUsT0FBRyxFQUFFQSxXQUZQO0FBR0UsYUFBUyxFQUFFSSx5RUFBTSxDQUFDTSxRQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dyQixjQUFjLENBQ1pzQixNQURGLENBQ1NyQixRQURULEVBRUVzQixNQUZGLENBRVMsVUFBQ2xCLElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUNtQixTQUFMLEtBQW1CYixXQUE3QjtBQUFBLEdBRlQsRUFHRU0sR0FIRixDQUdNLFVBQUNaLElBQUQsRUFBVTtBQUNiLFdBQ0UsTUFBQyxtREFBRDtBQUNFLFVBQUksRUFBRUEsSUFEUjtBQUVFLFNBQUcsRUFBRUEsSUFBSSxDQUFDb0IsUUFGWjtBQUdFLGFBQU8sRUFBRXJCLGdCQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQU9ELEdBWEYsQ0FMSCxDQVRKLENBREYsQ0FERjtBQWlDRDs7R0E5RGVOLGU7O01BQUFBLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2UzZGY0MTgzZjJhN2UyZmY5NWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVuaXQgfSBmcm9tIFwiLi4vdHlwZXNjcmlwdC9UeXBlc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQ29uc3RydWN0aW9uQmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFVuaXRCdXR0b24gZnJvbSBcIi4vVW5pdEJ1dHRvblwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnVpbGRpbmdEYXRhIH0gZnJvbSBcIi4vQnVpbGRpbmdcIjtcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5leHBvcnQgY29uc3QgTWVtb0NvbnN0cnVjdGlvbkJhciA9IFJlYWN0Lm1lbW8oQ29uc3RydWN0aW9uQmFyKTtcclxuXHJcbi8vIERpdmlkZXMgY29uc3RydWN0YWJsZXMgKyB1cGdyYWRlIGludG8gdGhyZWUgdGllciB0YWJzLlxyXG5leHBvcnQgZnVuY3Rpb24gQ29uc3RydWN0aW9uQmFyKHtcclxuICBidWlsZGluZ0luZGV4LFxyXG4gIGNvbnN0cnVjdGFibGVzLFxyXG4gIHVwZ3JhZGVzLFxyXG4gIHVwZGF0ZUJ1aWxkaW5nLFxyXG59OiB7XHJcbiAgYnVpbGRpbmdJbmRleDogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdGFibGVzOiBVbml0W107XHJcbiAgdXBncmFkZXM6IFVuaXRbXTtcclxuICB1cGRhdGVCdWlsZGluZzogKFxyXG4gICAgaTogbnVtYmVyLFxyXG4gICAgdXBkYXRlOiAoYnVpbGRpbmc6IEJ1aWxkaW5nRGF0YSkgPT4gQnVpbGRpbmdEYXRhXHJcbiAgKSA9PiB2b2lkO1xyXG59KSB7XHJcbiAgbGV0IHRlY2hMZXZlbHM6IG51bWJlcltdID0gWzEsIDIsIDNdO1xyXG5cclxuICBsZXQgdW5pdENsaWNrSGFuZGxlciA9ICh1bml0KSA9PiB7XHJcbiAgICB1cGRhdGVCdWlsZGluZyhidWlsZGluZ0luZGV4LCAoYnVpbGRpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5idWlsZGluZyxcclxuICAgICAgICBRdWV1ZTogWy4uLmJ1aWxkaW5nLlF1ZXVlLCB7IC4uLnVuaXQsIGtleTogYnVpbGRpbmcuUXVldWVObyB9XSxcclxuICAgICAgICBRdWV1ZU5vOiBidWlsZGluZy5RdWV1ZU5vICsgMSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgLy8gVXNlU3RhdGUsIHN0b3JlIHNlbGVjdGVkIHRlY2ggbGV2ZWwsIGRlZmF1bHQgdG8gMVxyXG4gIC8vIE9uQ2xpY2sgY2hhbmdlIHNlbGVjdGVkIHRlY2ggbGV2ZWwgYW5kIHJlLXJlbmRlclxyXG4gIGxldCBbc2VsZWN0ZWRUYWIsIHNldFRhYl0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zb2xlLmxvZyhjb25zdHJ1Y3RhYmxlcywgdXBncmFkZXMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnN0cnVjdGlvbl9iYXJ9PlxyXG4gICAgICA8PlxyXG4gICAgICAgIHt0ZWNoTGV2ZWxzLm1hcCgodGVjaExldmVsKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGtleT17XCJCX1wiICsgdGVjaExldmVsfSBvbkNsaWNrPXsoKSA9PiBzZXRUYWIodGVjaExldmVsKX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e0NvbnN0YW50cy5JY29uKCl9PjwvaW1nPlR7dGVjaExldmVsfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD17XCJ0ZWNoXCIgKyBzZWxlY3RlZFRhYn1cclxuICAgICAgICAgICAga2V5PXtzZWxlY3RlZFRhYn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGVjaF90YWJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjb25zdHJ1Y3RhYmxlc1xyXG4gICAgICAgICAgICAgIC5jb25jYXQodXBncmFkZXMpXHJcbiAgICAgICAgICAgICAgLmZpbHRlcigodW5pdCkgPT4gdW5pdC5UZWNoTGV2ZWwgPT09IHNlbGVjdGVkVGFiKVxyXG4gICAgICAgICAgICAgIC5tYXAoKHVuaXQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxVbml0QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdW5pdD17dW5pdH1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3VuaXQuVW5pdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dW5pdENsaWNrSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9