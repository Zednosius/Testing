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
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Building.module.css */ "./styles/Building.module.css");
/* harmony import */ var _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Building_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Constants */ "./components/Constants.js");





var _jsxFileName = "X:\\erik\\Programmering\\Webb\\SupCom\\ecobalancesupreme\\components\\Building.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Building(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      Queue = _useState[0],
      SetQueue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
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
  console.log("CONSTRUCTING BUILDING");
  console.log(props.data);
  console.log(props.data.constructables);
  console.log(props.data.Upgrades);
  console.log(Queue);
  var constructables = props.data.constructables.concat(props.data.Upgrades.filter(function (id) {
    return !Queue.map(function (u) {
      return u.UnitName;
    }).includes(id);
  }));
  console.log(constructables);
  var AvgMassPerSec = props.data.MassPerSec - (cost.buildtime != 0 ? cost.mass / cost.buildtime * props.data.BuildRate : 0);
  var AvgEnergyPerSec = props.data.EnergyPerSec - (cost.buildtime != 0 ? cost.energy / cost.buildtime * props.data.BuildRate : 0);
  return __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, props.data.SimpleName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "Build Rate: ", props.data.p.Economy.BuildRate, "Total Mass: ", cost.mass, ", Total Energy:", cost.energy, ", Total Build ticks:", cost.buildtime, ", Total build time:", " ", cost.buildtime / props.data.BuildRate, "s"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "Avg Mass: ", AvgMassPerSec, ", Avg Energy: ", AvgEnergyPerSec), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
        SetQueue([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Queue), [nUnit]));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, unit.FullName, " (", unit.SimpleName, ")");
  })), __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
        lineNumber: 85,
        columnNumber: 11
      }
    }, unit.FullName, " M:", unit.Economy.BuildCostMass, " E:", unit.Economy.BuildCostEnergy);
  })));
}

_s(Building, "tJphE7C9QJjMoHsbWzcrLUCgI+M=");

_c = Building;
var BuildingData = /*#__PURE__*/function () {
  function BuildingData(BuildingProp) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BuildingData);

    console.log(BuildingProp);
    this.UnitId = BuildingProp.UnitName;
    this.FullName = BuildingProp.FullName;
    this.SimpleName = BuildingProp.SimpleName;
    this.constructables = BuildingProp.Constructables || [];
    this.Assists = {
      t1: 0,
      t2: 0,
      t3: 0
    };
    this.Upgrades = BuildingProp.Upgrades || [];
    this.p = BuildingProp;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BuildingData, [{
    key: "BuildRate",
    get: function get() {
      return (this.p.Economy.BuildRate || 0) + this.Assists.t1 * _Constants__WEBPACK_IMPORTED_MODULE_6__["EngineerBuildRate"].t1 + this.Assists.t2 * _Constants__WEBPACK_IMPORTED_MODULE_6__["EngineerBuildRate"].t2 + this.Assists.t3 * _Constants__WEBPACK_IMPORTED_MODULE_6__["EngineerBuildRate"].t3;
    }
  }, {
    key: "MassPerSec",
    get: function get() {
      return this.p.Economy.ProductionPerSecondMass || 0;
    }
  }, {
    key: "EnergyPerSec",
    get: function get() {
      return (-this.p.Economy.MaintenanceConsumptionPerSecondEnergy || 0) + (this.p.Economy.ProductionPerSecondEnergy || 0);
    }
  }]);

  return BuildingData;
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy5qcyJdLCJuYW1lcyI6WyJCdWlsZGluZyIsInByb3BzIiwidXNlU3RhdGUiLCJRdWV1ZSIsIlNldFF1ZXVlIiwiUXVldWVJZCIsIlNldElkIiwiR2V0QW5kSW5jUSIsImlkIiwiY29zdCIsIm1hcCIsInVuaXQiLCJtYXNzIiwiRWNvbm9teSIsIkJ1aWxkQ29zdE1hc3MiLCJlbmVyZ3kiLCJCdWlsZENvc3RFbmVyZ3kiLCJidWlsZHRpbWUiLCJCdWlsZFRpbWUiLCJyZWR1Y2UiLCJwdiIsImN2IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjb25zdHJ1Y3RhYmxlcyIsIlVwZ3JhZGVzIiwiY29uY2F0IiwiZmlsdGVyIiwidSIsIlVuaXROYW1lIiwiaW5jbHVkZXMiLCJBdmdNYXNzUGVyU2VjIiwiTWFzc1BlclNlYyIsIkJ1aWxkUmF0ZSIsIkF2Z0VuZXJneVBlclNlYyIsIkVuZXJneVBlclNlYyIsInN0eWxlcyIsInNvbGlkIiwiU2ltcGxlTmFtZSIsInAiLCJkYiIsIm5Vbml0Iiwia2V5IiwiRnVsbE5hbWUiLCJpIiwibSIsInFpIiwiQnVpbGRpbmdEYXRhIiwiQnVpbGRpbmdQcm9wIiwiVW5pdElkIiwiQ29uc3RydWN0YWJsZXMiLCJBc3Npc3RzIiwidDEiLCJ0MiIsInQzIiwiQ29uc3RhbnRzIiwiUHJvZHVjdGlvblBlclNlY29uZE1hc3MiLCJNYWludGVuYW5jZUNvbnN1bXB0aW9uUGVyU2Vjb25kRW5lcmd5IiwiUHJvZHVjdGlvblBlclNlY29uZEVuZXJneSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDL0JDLEtBRCtCO0FBQUEsTUFDeEJDLFFBRHdCOztB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ZixJQUE0QixDQUE3QixJQUNBLEtBQUtrQixPQUFMLENBQWFDLEVBQWIsR0FBa0JHLDREQUFBLENBQTRCSCxFQUQ5QyxHQUVBLEtBQUtELE9BQUwsQ0FBYUUsRUFBYixHQUFrQkUsNERBQUEsQ0FBNEJGLEVBRjlDLEdBR0EsS0FBS0YsT0FBTCxDQUFhRyxFQUFiLEdBQWtCQyw0REFBQSxDQUE0QkQsRUFKaEQ7QUFNRDtBQW5CSDtBQUFBO0FBQUEsd0JBb0JtQjtBQUNmLGFBQU8sS0FBS2YsQ0FBTCxDQUFPM0IsT0FBUCxDQUFlNEMsdUJBQWYsSUFBMEMsQ0FBakQ7QUFDRDtBQXRCSDtBQUFBO0FBQUEsd0JBd0JxQjtBQUNqQixhQUNFLENBQUMsQ0FBQyxLQUFLakIsQ0FBTCxDQUFPM0IsT0FBUCxDQUFlNkMscUNBQWhCLElBQXlELENBQTFELEtBQ0MsS0FBS2xCLENBQUwsQ0FBTzNCLE9BQVAsQ0FBZThDLHlCQUFmLElBQTRDLENBRDdDLENBREY7QUFJRDtBQTdCSDs7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYxYTI4ZTE1MGYwNzFjNDM5NWYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQnVpbGRpbmcubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1aWxkaW5nKHByb3BzKSB7XHJcbiAgY29uc3QgW1F1ZXVlLCBTZXRRdWV1ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW1F1ZXVlSWQsIFNldElkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBmdW5jdGlvbiBHZXRBbmRJbmNRKCkge1xyXG4gICAgbGV0IGlkID0gUXVldWVJZDtcclxuICAgIFNldElkKGlkICsgMSk7XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfVxyXG5cclxuICBsZXQgY29zdCA9IFF1ZXVlLm1hcCgodW5pdCkgPT4gKHtcclxuICAgIG1hc3M6IHVuaXQuRWNvbm9teS5CdWlsZENvc3RNYXNzLFxyXG4gICAgZW5lcmd5OiB1bml0LkVjb25vbXkuQnVpbGRDb3N0RW5lcmd5LFxyXG4gICAgYnVpbGR0aW1lOiB1bml0LkVjb25vbXkuQnVpbGRUaW1lLFxyXG4gIH0pKS5yZWR1Y2UoXHJcbiAgICAocHYsIGN2KSA9PiAoe1xyXG4gICAgICBtYXNzOiBwdi5tYXNzICsgY3YubWFzcyxcclxuICAgICAgZW5lcmd5OiBwdi5lbmVyZ3kgKyBjdi5lbmVyZ3ksXHJcbiAgICAgIGJ1aWxkdGltZTogcHYuYnVpbGR0aW1lICsgY3YuYnVpbGR0aW1lLFxyXG4gICAgfSksXHJcbiAgICB7IG1hc3M6IDAsIGVuZXJneTogMCwgYnVpbGR0aW1lOiAwIH1cclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFwiQ09OU1RSVUNUSU5HIEJVSUxESU5HXCIpO1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLmRhdGEpO1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLmRhdGEuY29uc3RydWN0YWJsZXMpO1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLmRhdGEuVXBncmFkZXMpO1xyXG4gIGNvbnNvbGUubG9nKFF1ZXVlKTtcclxuICBsZXQgY29uc3RydWN0YWJsZXMgPSBwcm9wcy5kYXRhLmNvbnN0cnVjdGFibGVzLmNvbmNhdChcclxuICAgIHByb3BzLmRhdGEuVXBncmFkZXMuZmlsdGVyKFxyXG4gICAgICAoaWQpID0+ICFRdWV1ZS5tYXAoKHUpID0+IHUuVW5pdE5hbWUpLmluY2x1ZGVzKGlkKVxyXG4gICAgKVxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coY29uc3RydWN0YWJsZXMpO1xyXG5cclxuICBsZXQgQXZnTWFzc1BlclNlYyA9XHJcbiAgICBwcm9wcy5kYXRhLk1hc3NQZXJTZWMgLVxyXG4gICAgKGNvc3QuYnVpbGR0aW1lICE9IDBcclxuICAgICAgPyAoY29zdC5tYXNzIC8gY29zdC5idWlsZHRpbWUpICogcHJvcHMuZGF0YS5CdWlsZFJhdGVcclxuICAgICAgOiAwKTtcclxuXHJcbiAgbGV0IEF2Z0VuZXJneVBlclNlYyA9XHJcbiAgICBwcm9wcy5kYXRhLkVuZXJneVBlclNlYyAtXHJcbiAgICAoY29zdC5idWlsZHRpbWUgIT0gMFxyXG4gICAgICA/IChjb3N0LmVuZXJneSAvIGNvc3QuYnVpbGR0aW1lKSAqIHByb3BzLmRhdGEuQnVpbGRSYXRlXHJcbiAgICAgIDogMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvbGlkfT5cclxuICAgICAgPHA+e3Byb3BzLmRhdGEuU2ltcGxlTmFtZX08L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEJ1aWxkIFJhdGU6IHtwcm9wcy5kYXRhLnAuRWNvbm9teS5CdWlsZFJhdGV9XHJcbiAgICAgICAgVG90YWwgTWFzczoge2Nvc3QubWFzc30sIFRvdGFsIEVuZXJneTp7Y29zdC5lbmVyZ3l9LCBUb3RhbCBCdWlsZCB0aWNrczpcclxuICAgICAgICB7Y29zdC5idWlsZHRpbWV9LCBUb3RhbCBidWlsZCB0aW1lOntcIiBcIn1cclxuICAgICAgICB7Y29zdC5idWlsZHRpbWUgLyBwcm9wcy5kYXRhLkJ1aWxkUmF0ZX1zXHJcbiAgICAgIDwvcD5cclxuICAgICAge1xyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgQXZnIE1hc3M6IHtBdmdNYXNzUGVyU2VjfSwgQXZnIEVuZXJneToge0F2Z0VuZXJneVBlclNlY31cclxuICAgICAgICA8L3A+XHJcbiAgICAgIH1cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y29uc3RydWN0YWJsZXMubWFwKChpZCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHVuaXQgPSBwcm9wcy5kYltpZF07XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIGtleT17dW5pdC5Vbml0TmFtZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgblVuaXQgPSB7IC4uLnVuaXQgfTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIHVuaXQhXCIsIHVuaXQpO1xyXG4gICAgICAgICAgICAgICAgblVuaXQua2V5ID0gR2V0QW5kSW5jUSgpO1xyXG4gICAgICAgICAgICAgICAgU2V0UXVldWUoWy4uLlF1ZXVlLCBuVW5pdF0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dW5pdC5GdWxsTmFtZX0gKHt1bml0LlNpbXBsZU5hbWV9KVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvbGlkfT5cclxuICAgICAgICB7UXVldWUubWFwKCh1bml0LCBpKSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17dW5pdC5rZXl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBTZXRRdWV1ZShRdWV1ZS5maWx0ZXIoKG0sIHFpKSA9PiBpICE9IHFpKSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt1bml0LkZ1bGxOYW1lfSBNOnt1bml0LkVjb25vbXkuQnVpbGRDb3N0TWFzc30gRTpcclxuICAgICAgICAgICAge3VuaXQuRWNvbm9teS5CdWlsZENvc3RFbmVyZ3l9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnVpbGRpbmdEYXRhIHtcclxuICBjb25zdHJ1Y3RvcihCdWlsZGluZ1Byb3ApIHtcclxuICAgIGNvbnNvbGUubG9nKEJ1aWxkaW5nUHJvcCk7XHJcbiAgICB0aGlzLlVuaXRJZCA9IEJ1aWxkaW5nUHJvcC5Vbml0TmFtZTtcclxuICAgIHRoaXMuRnVsbE5hbWUgPSBCdWlsZGluZ1Byb3AuRnVsbE5hbWU7XHJcbiAgICB0aGlzLlNpbXBsZU5hbWUgPSBCdWlsZGluZ1Byb3AuU2ltcGxlTmFtZTtcclxuICAgIHRoaXMuY29uc3RydWN0YWJsZXMgPSBCdWlsZGluZ1Byb3AuQ29uc3RydWN0YWJsZXMgfHwgW107XHJcbiAgICB0aGlzLkFzc2lzdHMgPSB7IHQxOiAwLCB0MjogMCwgdDM6IDAgfTtcclxuICAgIHRoaXMuVXBncmFkZXMgPSBCdWlsZGluZ1Byb3AuVXBncmFkZXMgfHwgW107XHJcbiAgICB0aGlzLnAgPSBCdWlsZGluZ1Byb3A7XHJcbiAgfVxyXG5cclxuICBnZXQgQnVpbGRSYXRlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgKHRoaXMucC5FY29ub215LkJ1aWxkUmF0ZSB8fCAwKSArXHJcbiAgICAgIHRoaXMuQXNzaXN0cy50MSAqIENvbnN0YW50cy5FbmdpbmVlckJ1aWxkUmF0ZS50MSArXHJcbiAgICAgIHRoaXMuQXNzaXN0cy50MiAqIENvbnN0YW50cy5FbmdpbmVlckJ1aWxkUmF0ZS50MiArXHJcbiAgICAgIHRoaXMuQXNzaXN0cy50MyAqIENvbnN0YW50cy5FbmdpbmVlckJ1aWxkUmF0ZS50M1xyXG4gICAgKTtcclxuICB9XHJcbiAgZ2V0IE1hc3NQZXJTZWMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wLkVjb25vbXkuUHJvZHVjdGlvblBlclNlY29uZE1hc3MgfHwgMDtcclxuICB9XHJcblxyXG4gIGdldCBFbmVyZ3lQZXJTZWMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAoLXRoaXMucC5FY29ub215Lk1haW50ZW5hbmNlQ29uc3VtcHRpb25QZXJTZWNvbmRFbmVyZ3kgfHwgMCkgK1xyXG4gICAgICAodGhpcy5wLkVjb25vbXkuUHJvZHVjdGlvblBlclNlY29uZEVuZXJneSB8fCAwKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==