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
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Constants */ "./components/Constants.js");
/* harmony import */ var _ImageButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImageButton */ "./components/ImageButton.tsx");



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
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, techLevels.map(function (techLevel) {
    return __jsx(_ImageButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: "B_" + techLevel,
      highlight: selectedTab == techLevel,
      onClick: function onClick() {
        return setTab(techLevel);
      },
      src: Object(_Constants__WEBPACK_IMPORTED_MODULE_5__["Icon"])("TECH" + techLevel),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    });
  }), __jsx("div", {
    id: "tech" + selectedTab,
    key: selectedTab,
    className: _styles_ConstructionBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tech_tab,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
        lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db25zdHJ1Y3Rpb25CYXIudHN4Il0sIm5hbWVzIjpbIk1lbW9Db25zdHJ1Y3Rpb25CYXIiLCJSZWFjdCIsIm1lbW8iLCJDb25zdHJ1Y3Rpb25CYXIiLCJidWlsZGluZ0luZGV4IiwiY29uc3RydWN0YWJsZXMiLCJ1cGdyYWRlcyIsInVwZGF0ZUJ1aWxkaW5nIiwidGVjaExldmVscyIsInVuaXRDbGlja0hhbmRsZXIiLCJ1bml0IiwiYnVpbGRpbmciLCJRdWV1ZSIsImtleSIsIlF1ZXVlTm8iLCJ1c2VTdGF0ZSIsInNlbGVjdGVkVGFiIiwic2V0VGFiIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImNvbnN0cnVjdGlvbl9iYXIiLCJtYXAiLCJ0ZWNoTGV2ZWwiLCJJY29uIiwidGVjaF90YWIiLCJjb25jYXQiLCJmaWx0ZXIiLCJUZWNoTGV2ZWwiLCJVbml0TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDTyxJQUFNQSxtQkFBbUIsR0FBR0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXQyxlQUFYLENBQTVCLEMsQ0FFUDs7S0FGYUgsbUI7QUFHTixTQUFTRyxlQUFULE9BYUo7QUFBQTs7QUFBQTs7QUFBQSxNQVpEQyxhQVlDLFFBWkRBLGFBWUM7QUFBQSxNQVhEQyxjQVdDLFFBWERBLGNBV0M7QUFBQSxNQVZEQyxRQVVDLFFBVkRBLFFBVUM7QUFBQSxNQVREQyxjQVNDLFFBVERBLGNBU0M7QUFDRCxNQUFJQyxVQUFvQixHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQTNCOztBQUVBLE1BQUlDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQy9CSCxrQkFBYyxDQUFDSCxhQUFELEVBQWdCLFVBQUNPLFFBQUQsRUFBYztBQUMxQyw2Q0FDS0EsUUFETDtBQUVFQyxhQUFLLHlHQUFNRCxRQUFRLENBQUNDLEtBQWYsb0NBQTJCRixJQUEzQjtBQUFpQ0csYUFBRyxFQUFFRixRQUFRLENBQUNHO0FBQS9DLFlBRlA7QUFHRUEsZUFBTyxFQUFFSCxRQUFRLENBQUNHLE9BQVQsR0FBbUI7QUFIOUI7QUFLRCxLQU5hLENBQWQ7QUFPRCxHQVJELENBSEMsQ0FZRDtBQUNBOzs7QUFiQyxrQkFjMkJDLHNEQUFRLENBQUMsQ0FBRCxDQWRuQztBQUFBLE1BY0lDLFdBZEo7QUFBQSxNQWNpQkMsTUFkakI7O0FBZURDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZZCxjQUFaLEVBQTRCQyxRQUE1QjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVjLHlFQUFNLENBQUNDLGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsbUVBQ0diLFVBQVUsQ0FBQ2MsR0FBWCxDQUFlLFVBQUNDLFNBQUQsRUFBZTtBQUM3QixXQUNFLE1BQUMsb0RBQUQ7QUFDRSxTQUFHLEVBQUUsT0FBT0EsU0FEZDtBQUVFLGVBQVMsRUFBRVAsV0FBVyxJQUFJTyxTQUY1QjtBQUdFLGFBQU8sRUFBRTtBQUFBLGVBQU1OLE1BQU0sQ0FBQ00sU0FBRCxDQUFaO0FBQUEsT0FIWDtBQUlFLFNBQUcsRUFBRUMsdURBQUksQ0FBQyxTQUFTRCxTQUFWLENBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBUUQsR0FUQSxDQURILEVBWUk7QUFDRSxNQUFFLEVBQUUsU0FBU1AsV0FEZjtBQUVFLE9BQUcsRUFBRUEsV0FGUDtBQUdFLGFBQVMsRUFBRUkseUVBQU0sQ0FBQ0ssUUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHcEIsY0FBYyxDQUNacUIsTUFERixDQUNTcEIsUUFEVCxFQUVFcUIsTUFGRixDQUVTLFVBQUNqQixJQUFEO0FBQUEsV0FBVUEsSUFBSSxDQUFDa0IsU0FBTCxLQUFtQlosV0FBN0I7QUFBQSxHQUZULEVBR0VNLEdBSEYsQ0FHTSxVQUFDWixJQUFELEVBQVU7QUFDYixXQUNFLE1BQUMsbURBQUQ7QUFDRSxVQUFJLEVBQUVBLElBRFI7QUFFRSxTQUFHLEVBQUVBLElBQUksQ0FBQ21CLFFBRlo7QUFHRSxhQUFPLEVBQUVwQixnQkFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFPRCxHQVhGLENBTEgsQ0FaSixDQURGLENBREY7QUFvQ0Q7O0dBakVlTixlOztNQUFBQSxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNlMTkzZGU3ZmU3ODZhODU3MzJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVbml0IH0gZnJvbSBcIi4uL3R5cGVzY3JpcHQvVHlwZXNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0NvbnN0cnVjdGlvbkJhci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBVbml0QnV0dG9uIGZyb20gXCIuL1VuaXRCdXR0b25cIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1aWxkaW5nRGF0YSB9IGZyb20gXCIuL0J1aWxkaW5nXCI7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IEltYWdlQnV0dG9uIGZyb20gXCIuL0ltYWdlQnV0dG9uXCI7XHJcbmV4cG9ydCBjb25zdCBNZW1vQ29uc3RydWN0aW9uQmFyID0gUmVhY3QubWVtbyhDb25zdHJ1Y3Rpb25CYXIpO1xyXG5cclxuLy8gRGl2aWRlcyBjb25zdHJ1Y3RhYmxlcyArIHVwZ3JhZGUgaW50byB0aHJlZSB0aWVyIHRhYnMuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb25zdHJ1Y3Rpb25CYXIoe1xyXG4gIGJ1aWxkaW5nSW5kZXgsXHJcbiAgY29uc3RydWN0YWJsZXMsXHJcbiAgdXBncmFkZXMsXHJcbiAgdXBkYXRlQnVpbGRpbmcsXHJcbn06IHtcclxuICBidWlsZGluZ0luZGV4OiBudW1iZXI7XHJcbiAgY29uc3RydWN0YWJsZXM6IFVuaXRbXTtcclxuICB1cGdyYWRlczogVW5pdFtdO1xyXG4gIHVwZGF0ZUJ1aWxkaW5nOiAoXHJcbiAgICBpOiBudW1iZXIsXHJcbiAgICB1cGRhdGU6IChidWlsZGluZzogQnVpbGRpbmdEYXRhKSA9PiBCdWlsZGluZ0RhdGFcclxuICApID0+IHZvaWQ7XHJcbn0pIHtcclxuICBsZXQgdGVjaExldmVsczogbnVtYmVyW10gPSBbMSwgMiwgM107XHJcblxyXG4gIGxldCB1bml0Q2xpY2tIYW5kbGVyID0gKHVuaXQpID0+IHtcclxuICAgIHVwZGF0ZUJ1aWxkaW5nKGJ1aWxkaW5nSW5kZXgsIChidWlsZGluZykgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmJ1aWxkaW5nLFxyXG4gICAgICAgIFF1ZXVlOiBbLi4uYnVpbGRpbmcuUXVldWUsIHsgLi4udW5pdCwga2V5OiBidWlsZGluZy5RdWV1ZU5vIH1dLFxyXG4gICAgICAgIFF1ZXVlTm86IGJ1aWxkaW5nLlF1ZXVlTm8gKyAxLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICAvLyBVc2VTdGF0ZSwgc3RvcmUgc2VsZWN0ZWQgdGVjaCBsZXZlbCwgZGVmYXVsdCB0byAxXHJcbiAgLy8gT25DbGljayBjaGFuZ2Ugc2VsZWN0ZWQgdGVjaCBsZXZlbCBhbmQgcmUtcmVuZGVyXHJcbiAgbGV0IFtzZWxlY3RlZFRhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnNvbGUubG9nKGNvbnN0cnVjdGFibGVzLCB1cGdyYWRlcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29uc3RydWN0aW9uX2Jhcn0+XHJcbiAgICAgIDw+XHJcbiAgICAgICAge3RlY2hMZXZlbHMubWFwKCh0ZWNoTGV2ZWwpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbWFnZUJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17XCJCX1wiICsgdGVjaExldmVsfVxyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodD17c2VsZWN0ZWRUYWIgPT0gdGVjaExldmVsfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYih0ZWNoTGV2ZWwpfVxyXG4gICAgICAgICAgICAgIHNyYz17SWNvbihcIlRFQ0hcIiArIHRlY2hMZXZlbCl9XHJcbiAgICAgICAgICAgID48L0ltYWdlQnV0dG9uPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICB7XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPXtcInRlY2hcIiArIHNlbGVjdGVkVGFifVxyXG4gICAgICAgICAgICBrZXk9e3NlbGVjdGVkVGFifVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZWNoX3RhYn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NvbnN0cnVjdGFibGVzXHJcbiAgICAgICAgICAgICAgLmNvbmNhdCh1cGdyYWRlcylcclxuICAgICAgICAgICAgICAuZmlsdGVyKCh1bml0KSA9PiB1bml0LlRlY2hMZXZlbCA9PT0gc2VsZWN0ZWRUYWIpXHJcbiAgICAgICAgICAgICAgLm1hcCgodW5pdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPFVuaXRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB1bml0PXt1bml0fVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17dW5pdC5Vbml0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt1bml0Q2xpY2tIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=