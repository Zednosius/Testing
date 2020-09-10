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
      className: _styles_ConstructionBar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tech_button,
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
      src: Object(_Constants__WEBPACK_IMPORTED_MODULE_5__["Icon"])("TECH" + techLevel),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db25zdHJ1Y3Rpb25CYXIudHN4Il0sIm5hbWVzIjpbIk1lbW9Db25zdHJ1Y3Rpb25CYXIiLCJSZWFjdCIsIm1lbW8iLCJDb25zdHJ1Y3Rpb25CYXIiLCJidWlsZGluZ0luZGV4IiwiY29uc3RydWN0YWJsZXMiLCJ1cGdyYWRlcyIsInVwZGF0ZUJ1aWxkaW5nIiwidGVjaExldmVscyIsInVuaXRDbGlja0hhbmRsZXIiLCJ1bml0IiwiYnVpbGRpbmciLCJRdWV1ZSIsImtleSIsIlF1ZXVlTm8iLCJ1c2VTdGF0ZSIsInNlbGVjdGVkVGFiIiwic2V0VGFiIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImNvbnN0cnVjdGlvbl9iYXIiLCJtYXAiLCJ0ZWNoTGV2ZWwiLCJ0ZWNoX2J1dHRvbiIsIkljb24iLCJ0ZWNoX3RhYiIsImNvbmNhdCIsImZpbHRlciIsIlRlY2hMZXZlbCIsIlVuaXROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNPLElBQU1BLG1CQUFtQixHQUFHQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVdDLGVBQVgsQ0FBNUIsQyxDQUVQOztLQUZhSCxtQjtBQUdOLFNBQVNHLGVBQVQsT0FhSjtBQUFBOztBQUFBOztBQUFBLE1BWkRDLGFBWUMsUUFaREEsYUFZQztBQUFBLE1BWERDLGNBV0MsUUFYREEsY0FXQztBQUFBLE1BVkRDLFFBVUMsUUFWREEsUUFVQztBQUFBLE1BVERDLGNBU0MsUUFUREEsY0FTQztBQUNELE1BQUlDLFVBQW9CLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBM0I7O0FBRUEsTUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQVU7QUFDL0JILGtCQUFjLENBQUNILGFBQUQsRUFBZ0IsVUFBQ08sUUFBRCxFQUFjO0FBQzFDLDZDQUNLQSxRQURMO0FBRUVDLGFBQUsseUdBQU1ELFFBQVEsQ0FBQ0MsS0FBZixvQ0FBMkJGLElBQTNCO0FBQWlDRyxhQUFHLEVBQUVGLFFBQVEsQ0FBQ0c7QUFBL0MsWUFGUDtBQUdFQSxlQUFPLEVBQUVILFFBQVEsQ0FBQ0csT0FBVCxHQUFtQjtBQUg5QjtBQUtELEtBTmEsQ0FBZDtBQU9ELEdBUkQsQ0FIQyxDQVlEO0FBQ0E7OztBQWJDLGtCQWMyQkMsc0RBQVEsQ0FBQyxDQUFELENBZG5DO0FBQUEsTUFjSUMsV0FkSjtBQUFBLE1BY2lCQyxNQWRqQjs7QUFlREMsU0FBTyxDQUFDQyxHQUFSLENBQVlkLGNBQVosRUFBNEJDLFFBQTVCO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRWMseUVBQU0sQ0FBQ0MsZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxtRUFDR2IsVUFBVSxDQUFDYyxHQUFYLENBQWUsVUFBQ0MsU0FBRCxFQUFlO0FBQzdCLFdBQ0U7QUFDRSxlQUFTLEVBQUVILHlFQUFNLENBQUNJLFdBRHBCO0FBRUUsU0FBRyxFQUFFLE9BQU9ELFNBRmQ7QUFHRSxhQUFPLEVBQUU7QUFBQSxlQUFNTixNQUFNLENBQUNNLFNBQUQsQ0FBWjtBQUFBLE9BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtFO0FBQUssU0FBRyxFQUFFRSx1REFBSSxDQUFDLFNBQVNGLFNBQVYsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsQ0FERjtBQVNELEdBVkEsQ0FESCxFQWFJO0FBQ0UsTUFBRSxFQUFFLFNBQVNQLFdBRGY7QUFFRSxPQUFHLEVBQUVBLFdBRlA7QUFHRSxhQUFTLEVBQUVJLHlFQUFNLENBQUNNLFFBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR3JCLGNBQWMsQ0FDWnNCLE1BREYsQ0FDU3JCLFFBRFQsRUFFRXNCLE1BRkYsQ0FFUyxVQUFDbEIsSUFBRDtBQUFBLFdBQVVBLElBQUksQ0FBQ21CLFNBQUwsS0FBbUJiLFdBQTdCO0FBQUEsR0FGVCxFQUdFTSxHQUhGLENBR00sVUFBQ1osSUFBRCxFQUFVO0FBQ2IsV0FDRSxNQUFDLG1EQUFEO0FBQ0UsVUFBSSxFQUFFQSxJQURSO0FBRUUsU0FBRyxFQUFFQSxJQUFJLENBQUNvQixRQUZaO0FBR0UsYUFBTyxFQUFFckIsZ0JBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBT0QsR0FYRixDQUxILENBYkosQ0FERixDQURGO0FBcUNEOztHQWxFZU4sZTs7TUFBQUEsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYzAxMGRjMmY2MWY1Mjk4NDkzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVW5pdCB9IGZyb20gXCIuLi90eXBlc2NyaXB0L1R5cGVzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Db25zdHJ1Y3Rpb25CYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgVW5pdEJ1dHRvbiBmcm9tIFwiLi9Vbml0QnV0dG9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdWlsZGluZ0RhdGEgfSBmcm9tIFwiLi9CdWlsZGluZ1wiO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmV4cG9ydCBjb25zdCBNZW1vQ29uc3RydWN0aW9uQmFyID0gUmVhY3QubWVtbyhDb25zdHJ1Y3Rpb25CYXIpO1xyXG5cclxuLy8gRGl2aWRlcyBjb25zdHJ1Y3RhYmxlcyArIHVwZ3JhZGUgaW50byB0aHJlZSB0aWVyIHRhYnMuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb25zdHJ1Y3Rpb25CYXIoe1xyXG4gIGJ1aWxkaW5nSW5kZXgsXHJcbiAgY29uc3RydWN0YWJsZXMsXHJcbiAgdXBncmFkZXMsXHJcbiAgdXBkYXRlQnVpbGRpbmcsXHJcbn06IHtcclxuICBidWlsZGluZ0luZGV4OiBudW1iZXI7XHJcbiAgY29uc3RydWN0YWJsZXM6IFVuaXRbXTtcclxuICB1cGdyYWRlczogVW5pdFtdO1xyXG4gIHVwZGF0ZUJ1aWxkaW5nOiAoXHJcbiAgICBpOiBudW1iZXIsXHJcbiAgICB1cGRhdGU6IChidWlsZGluZzogQnVpbGRpbmdEYXRhKSA9PiBCdWlsZGluZ0RhdGFcclxuICApID0+IHZvaWQ7XHJcbn0pIHtcclxuICBsZXQgdGVjaExldmVsczogbnVtYmVyW10gPSBbMSwgMiwgM107XHJcblxyXG4gIGxldCB1bml0Q2xpY2tIYW5kbGVyID0gKHVuaXQpID0+IHtcclxuICAgIHVwZGF0ZUJ1aWxkaW5nKGJ1aWxkaW5nSW5kZXgsIChidWlsZGluZykgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmJ1aWxkaW5nLFxyXG4gICAgICAgIFF1ZXVlOiBbLi4uYnVpbGRpbmcuUXVldWUsIHsgLi4udW5pdCwga2V5OiBidWlsZGluZy5RdWV1ZU5vIH1dLFxyXG4gICAgICAgIFF1ZXVlTm86IGJ1aWxkaW5nLlF1ZXVlTm8gKyAxLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICAvLyBVc2VTdGF0ZSwgc3RvcmUgc2VsZWN0ZWQgdGVjaCBsZXZlbCwgZGVmYXVsdCB0byAxXHJcbiAgLy8gT25DbGljayBjaGFuZ2Ugc2VsZWN0ZWQgdGVjaCBsZXZlbCBhbmQgcmUtcmVuZGVyXHJcbiAgbGV0IFtzZWxlY3RlZFRhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnNvbGUubG9nKGNvbnN0cnVjdGFibGVzLCB1cGdyYWRlcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29uc3RydWN0aW9uX2Jhcn0+XHJcbiAgICAgIDw+XHJcbiAgICAgICAge3RlY2hMZXZlbHMubWFwKCh0ZWNoTGV2ZWwpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZWNoX2J1dHRvbn1cclxuICAgICAgICAgICAgICBrZXk9e1wiQl9cIiArIHRlY2hMZXZlbH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIodGVjaExldmVsKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtJY29uKFwiVEVDSFwiICsgdGVjaExldmVsKX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICB7XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPXtcInRlY2hcIiArIHNlbGVjdGVkVGFifVxyXG4gICAgICAgICAgICBrZXk9e3NlbGVjdGVkVGFifVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZWNoX3RhYn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NvbnN0cnVjdGFibGVzXHJcbiAgICAgICAgICAgICAgLmNvbmNhdCh1cGdyYWRlcylcclxuICAgICAgICAgICAgICAuZmlsdGVyKCh1bml0KSA9PiB1bml0LlRlY2hMZXZlbCA9PT0gc2VsZWN0ZWRUYWIpXHJcbiAgICAgICAgICAgICAgLm1hcCgodW5pdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPFVuaXRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB1bml0PXt1bml0fVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17dW5pdC5Vbml0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt1bml0Q2xpY2tIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=