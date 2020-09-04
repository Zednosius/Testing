webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Building.js":
/*!********************************!*\
  !*** ./components/Building.js ***!
  \********************************/
/*! exports provided: default, BuildingData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Building; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingData", function() { return BuildingData; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Building.module.css */ "./styles/Building.module.css");
/* harmony import */ var _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "X:\\erik\\Programmering\\Webb\\SupCom\\ecobalancesupreme\\components\\Building.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function Building(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      Queue = _useState[0],
      SetQueue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      QueueId = _useState2[0],
      SetId = _useState2[1];

  function GetAndIncQ() {
    var id = QueueId;
    SetId(id + 1);
    return id;
  }

  var cost = Queue.map(function (unit) {
    return {
      mass: unit.Economy.BuildCostMass,
      energy: unit.Economy.BuildCostEnergy,
      buildtime: unit.Economy.BuildTime
    };
  }).reduce(function (pv, cv) {
    return {
      mass: pv.mass + cv.mass,
      energy: pv.energy + cv.energy,
      buildtime: pv.buildtime + cv.buildtime
    };
  }, {
    mass: 0,
    energy: 0,
    buildtime: 0
  });
  var constructables = props.data.constructables + (props.data.Upgrades || []).filter(function (id) {
    return !Queue.includes(id);
  });
  console.log(constructables);
  return __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, props.data.SimpleName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Total Mass: ", cost.mass, ", Total Energy:", cost.energy, ", Total Build time:", " ", cost.buildtime), cost.buildtime > 0 && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Avg Mass: ", cost.mass / cost.buildtime, ", Avg Energy:", " ", cost.energy / cost.buildtime), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, constructables.map(function (id) {
    var unit = props.db[id];
    return __jsx("button", {
      className: "solid",
      key: unit.UnitName,
      onClick: function onClick() {
        var nUnit = _objectSpread({}, unit);

        console.log("Adding unit!", unit);
        nUnit.key = GetAndIncQ();
        SetQueue([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Queue), [nUnit]));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, unit.FullName, " (", unit.SimpleName, ")");
  })), __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, Queue.map(function (unit, i) {
    return __jsx("button", {
      key: unit.key,
      onClick: function onClick() {
        SetQueue(Queue.filter(function (m, qi) {
          return i != qi;
        }));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }, unit.FullName, " M:", unit.Economy.BuildCostMass, " E:", unit.Economy.BuildCostEnergy);
  })));
}

_s(Building, "tJphE7C9QJjMoHsbWzcrLUCgI+M=");

_c = Building;
var BuildingData = function BuildingData(BuildingProp) {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BuildingData);

  console.log(BuildingProp);
  this.UnitId = BuildingProp.UnitName;
  this.FullName = BuildingProp.FullName;
  this.SimpleName = BuildingProp.SimpleName;
  this.constructables = BuildingProp.Constructables;
  this.Assists = {
    t1: 0,
    t2: 0,
    t3: 0
  };
  this.p = BuildingProp;
};

var _c;

$RefreshReg$(_c, "Building");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy5qcyJdLCJuYW1lcyI6WyJCdWlsZGluZyIsInByb3BzIiwidXNlU3RhdGUiLCJRdWV1ZSIsIlNldFF1ZXVlIiwiUXVldWVJZCIsIlNldElkIiwiR2V0QW5kSW5jUSIsImlkIiwiY29zdCIsIm1hcCIsInVuaXQiLCJtYXNzIiwiRWNvbm9teSIsIkJ1aWxkQ29zdE1hc3MiLCJlbmVyZ3kiLCJCdWlsZENvc3RFbmVyZ3kiLCJidWlsZHRpbWUiLCJCdWlsZFRpbWUiLCJyZWR1Y2UiLCJwdiIsImN2IiwiY29uc3RydWN0YWJsZXMiLCJkYXRhIiwiVXBncmFkZXMiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJzb2xpZCIsIlNpbXBsZU5hbWUiLCJkYiIsIlVuaXROYW1lIiwiblVuaXQiLCJrZXkiLCJGdWxsTmFtZSIsImkiLCJtIiwicWkiLCJCdWlsZGluZ0RhdGEiLCJCdWlsZGluZ1Byb3AiLCJVbml0SWQiLCJDb25zdHJ1Y3RhYmxlcyIsIkFzc2lzdHMiLCJ0MSIsInQyIiwidDMiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDL0JDLEtBRCtCO0FBQUEsTUFDeEJDLFFBRHdCOztBQUFBLG1CQUViRixzREFBUSxDQUFDLENBQUQsQ0FGSztBQUFBLE1BRS9CRyxPQUYrQjtBQUFBLE1BRXRCQyxLQUZzQjs7QUFJdEMsV0FBU0MsVUFBVCxHQUFzQjtBQUNwQixRQUFJQyxFQUFFLEdBQUdILE9BQVQ7QUFDQUMsU0FBSyxDQUFDRSxFQUFFLEdBQUcsQ0FBTixDQUFMO0FBQ0EsV0FBT0EsRUFBUDtBQUNEOztBQUVELE1BQUlDLElBQUksR0FBR04s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LEtBQUssQ0FBQ08sR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBTzBCLENBQVA7QUFBQSxXQUNUO0FBQ0UsU0FBRyxFQUFFMUIsSUFBSSxDQUFDd0IsR0FEWjtBQUVFLGFBQU8sRUFBRSxtQkFBTTtBQUNiL0IsZ0JBQVEsQ0FBQ0QsS0FBSyxDQUFDc0IsTUFBTixDQUFhLFVBQUNhLENBQUQsRUFBSUMsRUFBSjtBQUFBLGlCQUFXRixDQUFDLElBQUlFLEVBQWhCO0FBQUEsU0FBYixDQUFELENBQVI7QUFDRCxPQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNRzVCLElBQUksQ0FBQ3lCLFFBTlIsU0FNcUJ6QixJQUFJLENBQUNFLE9BQUwsQ0FBYUMsYUFObEMsU0FPR0gsSUFBSSxDQUFDRSxPQUFMLENBQWFHLGVBUGhCLENBRFM7QUFBQSxHQUFWLENBREgsQ0EvQkYsQ0FERjtBQStDRDs7R0F6RXVCaEIsUTs7S0FBQUEsUTtBQTJFakIsSUFBTXdDLFlBQWIsR0FDRSxzQkFBWUMsWUFBWixFQUEwQjtBQUFBOztBQUN4QmQsU0FBTyxDQUFDQyxHQUFSLENBQVlhLFlBQVo7QUFDQSxPQUFLQyxNQUFMLEdBQWNELFlBQVksQ0FBQ1IsUUFBM0I7QUFDQSxPQUFLRyxRQUFMLEdBQWdCSyxZQUFZLENBQUNMLFFBQTdCO0FBQ0EsT0FBS0wsVUFBTCxHQUFrQlUsWUFBWSxDQUFDVixVQUEvQjtBQUNBLE9BQUtULGNBQUwsR0FBc0JtQixZQUFZLENBQUNFLGNBQW5DO0FBQ0EsT0FBS0MsT0FBTCxHQUFlO0FBQUVDLE1BQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUUsRUFBRSxDQUFiO0FBQWdCQyxNQUFFLEVBQUU7QUFBcEIsR0FBZjtBQUNBLE9BQUtDLENBQUwsR0FBU1AsWUFBVDtBQUNELENBVEgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDkzYWM0NWQxYzZkMzZiMWRmZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9CdWlsZGluZy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdWlsZGluZyhwcm9wcykge1xyXG4gIGNvbnN0IFtRdWV1ZSwgU2V0UXVldWVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtRdWV1ZUlkLCBTZXRJZF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgZnVuY3Rpb24gR2V0QW5kSW5jUSgpIHtcclxuICAgIGxldCBpZCA9IFF1ZXVlSWQ7XHJcbiAgICBTZXRJZChpZCArIDEpO1xyXG4gICAgcmV0dXJuIGlkO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNvc3QgPSBRdWV1ZS5tYXAoKHVuaXQpID0+ICh7XHJcbiAgICBtYXNzOiB1bml0LkVjb25vbXkuQnVpbGRDb3N0TWFzcyxcclxuICAgIGVuZXJneTogdW5pdC5FY29ub215LkJ1aWxkQ29zdEVuZXJneSxcclxuICAgIGJ1aWxkdGltZTogdW5pdC5FY29ub215LkJ1aWxkVGltZSxcclxuICB9KSkucmVkdWNlKFxyXG4gICAgKHB2LCBjdikgPT4gKHtcclxuICAgICAgbWFzczogcHYubWFzcyArIGN2Lm1hc3MsXHJcbiAgICAgIGVuZXJneTogcHYuZW5lcmd5ICsgY3YuZW5lcmd5LFxyXG4gICAgICBidWlsZHRpbWU6IHB2LmJ1aWxkdGltZSArIGN2LmJ1aWxkdGltZSxcclxuICAgIH0pLFxyXG4gICAgeyBtYXNzOiAwLCBlbmVyZ3k6IDAsIGJ1aWxkdGltZTogMCB9XHJcbiAgKTtcclxuICBsZXQgY29uc3RydWN0YWJsZXMgPVxyXG4gICAgcHJvcHMuZGF0YS5jb25zdHJ1Y3RhYmxlcyArXHJcbiAgICAocHJvcHMuZGF0YS5VcGdyYWRlcyB8fCBbXSkuZmlsdGVyKChpZCkgPT4gIVF1ZXVlLmluY2x1ZGVzKGlkKSk7XHJcbiAgY29uc29sZS5sb2coY29uc3RydWN0YWJsZXMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvbGlkfT5cclxuICAgICAgPHA+e3Byb3BzLmRhdGEuU2ltcGxlTmFtZX08L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFRvdGFsIE1hc3M6IHtjb3N0Lm1hc3N9LCBUb3RhbCBFbmVyZ3k6e2Nvc3QuZW5lcmd5fSwgVG90YWwgQnVpbGQgdGltZTp7XCIgXCJ9XHJcbiAgICAgICAge2Nvc3QuYnVpbGR0aW1lfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtjb3N0LmJ1aWxkdGltZSA+IDAgJiYgKFxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgQXZnIE1hc3M6IHtjb3N0Lm1hc3MgLyBjb3N0LmJ1aWxkdGltZX0sIEF2ZyBFbmVyZ3k6e1wiIFwifVxyXG4gICAgICAgICAge2Nvc3QuZW5lcmd5IC8gY29zdC5idWlsZHRpbWV9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtjb25zdHJ1Y3RhYmxlcy5tYXAoKGlkKSA9PiB7XHJcbiAgICAgICAgICBsZXQgdW5pdCA9IHByb3BzLmRiW2lkXTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAga2V5PXt1bml0LlVuaXROYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuVW5pdCA9IHsgLi4udW5pdCB9O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZGRpbmcgdW5pdCFcIiwgdW5pdCk7XHJcbiAgICAgICAgICAgICAgICBuVW5pdC5rZXkgPSBHZXRBbmRJbmNRKCk7XHJcbiAgICAgICAgICAgICAgICBTZXRRdWV1ZShbLi4uUXVldWUsIG5Vbml0XSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt1bml0LkZ1bGxOYW1lfSAoe3VuaXQuU2ltcGxlTmFtZX0pXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29saWR9PlxyXG4gICAgICAgIHtRdWV1ZS5tYXAoKHVuaXQsIGkpID0+IChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAga2V5PXt1bml0LmtleX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIFNldFF1ZXVlKFF1ZXVlLmZpbHRlcigobSwgcWkpID0+IGkgIT0gcWkpKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3VuaXQuRnVsbE5hbWV9IE06e3VuaXQuRWNvbm9teS5CdWlsZENvc3RNYXNzfSBFOlxyXG4gICAgICAgICAgICB7dW5pdC5FY29ub215LkJ1aWxkQ29zdEVuZXJneX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCdWlsZGluZ0RhdGEge1xyXG4gIGNvbnN0cnVjdG9yKEJ1aWxkaW5nUHJvcCkge1xyXG4gICAgY29uc29sZS5sb2coQnVpbGRpbmdQcm9wKTtcclxuICAgIHRoaXMuVW5pdElkID0gQnVpbGRpbmdQcm9wLlVuaXROYW1lO1xyXG4gICAgdGhpcy5GdWxsTmFtZSA9IEJ1aWxkaW5nUHJvcC5GdWxsTmFtZTtcclxuICAgIHRoaXMuU2ltcGxlTmFtZSA9IEJ1aWxkaW5nUHJvcC5TaW1wbGVOYW1lO1xyXG4gICAgdGhpcy5jb25zdHJ1Y3RhYmxlcyA9IEJ1aWxkaW5nUHJvcC5Db25zdHJ1Y3RhYmxlcztcclxuICAgIHRoaXMuQXNzaXN0cyA9IHsgdDE6IDAsIHQyOiAwLCB0MzogMCB9O1xyXG4gICAgdGhpcy5wID0gQnVpbGRpbmdQcm9wO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9