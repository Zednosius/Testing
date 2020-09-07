webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Building.tsx":
/*!*********************************!*\
  !*** ./components/Building.tsx ***!
  \*********************************/
/*! exports provided: MemoizedBuilding, BuildingData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoizedBuilding", function() { return MemoizedBuilding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingData", function() { return BuildingData; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Building.module.css */ "./styles/Building.module.css");
/* harmony import */ var _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Building_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Constants */ "./components/Constants.js");
/* harmony import */ var _Func__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Func */ "./components/Func.js");
/* harmony import */ var _Assists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Assists */ "./components/Assists.tsx");
/* harmony import */ var _UnitButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UnitButton */ "./components/UnitButton.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "X:\\erik\\Programmering\\Webb\\SupCom\\ecobalancesupreme\\components\\Building.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function Building(_ref) {
  var _this = this;

  var building = _ref.building,
      setBuilding = _ref.setBuilding,
      db = _ref.db,
      index = _ref.index;
  var cost = calculateQueueCost(building.Queue);
  var constructables = building.Constructables.concat(building.Upgrades.filter(function (id) {
    return !building.Queue.map(function (u) {
      return u.UnitName;
    }).includes(id);
  })).map(function (id) {
    return db[id];
  }).sort(_Func__WEBPACK_IMPORTED_MODULE_5__["unit_icon_sorter"]);
  var AvgMassPerSec = MassPerSec(building) - MassSpentBuilding(building, cost);
  var AvgEnergyPerSec = EnergyPerSec(building) - EnergySpentBuilding(building, cost);
  return __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.row_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.column_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, building.SimpleName), __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.resource_table,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.resource_cell,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: _Constants__WEBPACK_IMPORTED_MODULE_4__["Icon"]("Time"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), building.p.Economy.BuildRate), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "Total Build Rate: ", TotalBuildRate(building), "Total Mass: ", cost.mass, ", Total Energy:", cost.energy, ", Total Build ticks:", cost.buildticks, ", Total build time:", " ", cost.buildticks / TotalBuildRate(building), "s"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "Avg Mass: ", AvgMassPerSec, ", Avg Energy: ", AvgEnergyPerSec))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, constructables.map(function (unit) {
    return __jsx(_UnitButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      unit: unit,
      key: unit.UnitName,
      onClick: function onClick() {
        var nUnit = _objectSpread({}, unit);

        nUnit.key = building.QueueNo;
        setBuilding(index, _objectSpread(_objectSpread({}, building), {}, {
          Queue: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(building.Queue), [nUnit]),
          QueueNo: building.QueueNo + 1
        }));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    });
  }))), __jsx(_Assists__WEBPACK_IMPORTED_MODULE_6__["default"], {
    AssistableBy: building.AssistableBy,
    Assists: building.Assists,
    SetAssists: function SetAssists(newAssists) {
      setBuilding(index, _objectSpread(_objectSpread({}, building), {}, {
        Assists: newAssists
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  })), __jsx(UnitQueue, {
    Queue: building.Queue,
    SetQueue: function SetQueue(Queue) {
      return setBuilding(index, _objectSpread(_objectSpread({}, building), {}, {
        Queue: Queue
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }));
}

_c = Building;
var MemoizedBuilding = react__WEBPACK_IMPORTED_MODULE_8___default.a.memo(Building);
_c2 = MemoizedBuilding;

function UnitQueue(_ref2) {
  var _this2 = this;

  var Queue = _ref2.Queue,
      SetQueue = _ref2.SetQueue;
  return __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, Queue.map(function (unit, i) {
    return __jsx(_UnitButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      unit: unit,
      key: unit.key,
      onClick: function onClick() {
        SetQueue(Queue.filter(function (m, qi) {
          return i != qi;
        }));
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }
    });
  }));
}

_c3 = UnitQueue;

function TotalBuildRate(building) {
  return building.BuildRate + building.AssistableBy.map(function (unit) {
    return unit.Economy.BuildRate * building.Assists[unit.UnitName].count;
  }).reduce(function (a, b) {
    return a + b;
  }, 0) || 0;
}

_c4 = TotalBuildRate;

function MassPerSec(building) {
  return building.p.Economy.ProductionPerSecondMass || 0;
}

_c5 = MassPerSec;

function EnergyPerSec(building) {
  return (-building.p.Economy.MaintenanceConsumptionPerSecondEnergy || 0) + (building.p.Economy.ProductionPerSecondEnergy || 0);
}

_c6 = EnergyPerSec;

function MassSpentBuilding(building, cost) {
  if (cost.buildticks > 0) {
    // Prepare for adjacents which only affects the cost from the base buildings buildrate.
    return cost.mass / cost.buildticks * building.BuildRate + cost.mass / cost.buildticks * (TotalBuildRate(building) - building.BuildRate);
  } else return 0;
}

_c7 = MassSpentBuilding;

function EnergySpentBuilding(building, cost) {
  if (cost.buildticks > 0) {
    // Prepare for adjacents which only affects the cost from the base buildings buildrate.
    return cost.energy / cost.buildticks * building.BuildRate + cost.energy / cost.buildticks * (TotalBuildRate(building) - building.BuildRate);
  } else return 0;
}

_c8 = EnergySpentBuilding;

function calculateQueueCost(Queue) {
  return Queue.map(function (unit) {
    return {
      mass: unit.Economy.BuildCostMass,
      energy: unit.Economy.BuildCostEnergy,
      buildticks: unit.Economy.BuildTime
    };
  }).reduce(function (pv, cv) {
    return {
      mass: pv.mass + cv.mass,
      energy: pv.energy + cv.energy,
      buildticks: pv.buildticks + cv.buildticks
    };
  }, {
    mass: 0,
    energy: 0,
    buildticks: 0
  });
}

var BuildingData = function BuildingData(BuildingProp, db) {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BuildingData);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "UnitId", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "FullName", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "SimpleName", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "Constructables", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "AssistableBy", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "Assists", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "BuildRate", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "Adjacentables", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "Adjacents", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "Upgrades", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "Queue", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "QueueNo", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "p", void 0);

  console.log(BuildingProp);
  this.FullName = BuildingProp.FullName;
  this.SimpleName = BuildingProp.SimpleName;
  this.Constructables = BuildingProp.Constructables || [];
  this.UnitId = BuildingProp.UnitName;
  this.BuildRate = BuildingProp.Economy.BuildRate;
  this.AssistableBy = BuildingProp.Structure.AssistableBy.map(function (id) {
    return db[id];
  }) || [];
  this.Assists = this.AssistableBy.reduce(function (m, unit) {
    m[unit.UnitName] = {
      count: 0,
      unit: unit
    };
    return m;
  }, {}) || {};
  this.p = BuildingProp;
  this.Queue = [];
  this.QueueNo = 0;
  this.Adjacentables = [];
  this.Adjacents = [];
  this.Upgrades = BuildingProp.Upgrades || [];
};

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Building");
$RefreshReg$(_c2, "MemoizedBuilding");
$RefreshReg$(_c3, "UnitQueue");
$RefreshReg$(_c4, "TotalBuildRate");
$RefreshReg$(_c5, "MassPerSec");
$RefreshReg$(_c6, "EnergyPerSec");
$RefreshReg$(_c7, "MassSpentBuilding");
$RefreshReg$(_c8, "EnergySpentBuilding");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy50c3giXSwibmFtZXMiOlsiQnVpbGRpbmciLCJidWlsZGluZyIsInNldEJ1aWxkaW5nIiwiZGIiLCJpbmRleCIsImNvc3QiLCJjYWxjdWxhdGVRdWV1ZUNvc3QiLCJRdWV1ZSIsImNvbnN0cnVjdGFibGVzIiwiQ29uc3RydWN0YWJsZXMiLCJjb25jYXQiLCJVcGdyYWRlcyIsImZpbHRlciIsImlkIiwibWFwIiwidSIsIlVuaXROYW1lIiwiaW5jbHVkZXMiLCJzb3J0IiwiRnVuYyIsIkF2Z01hc3NQZXJTZWMiLCJNYXNzUGVyU2VjIiwiTWFzc1NwZW50QnVpbGRpbmciLCJBdmdFbmVyZ3lQZXJTZWMiLCJFbmVyZ3lQZXJTZWMiLCJFbmVyZ3lTcGVudEJ1aWxkaW5nIiwic3R5bGVzIiwic29saWQiLCJyb3dfY29udGFpbmVyIiwiY29sdW1uX2NvbnRhaW5lciIsIlNpbXBsZU5hbWUiLCJyZXNvdXJjZV90YWJsZSIsInJlc291cmNlX2NlbGwiLCJDb25zdGFudHMiLCJwIiwiRWNvbm9teSIsIkJ1aWxkUmF0ZSIsIlRvdGFsQnVpbGRSYXRlIiwibWFzcyIsImVuZXJneSIsImJ1aWxkdGlja3MiLCJ1bml0IiwiblVuaXQiLCJrZXkiLCJRdWV1ZU5vIiwiQXNzaXN0YWJsZUJ5IiwiQXNzaXN0cyIsIm5ld0Fzc2lzdHMiLCJNZW1vaXplZEJ1aWxkaW5nIiwiUmVhY3QiLCJtZW1vIiwiVW5pdFF1ZXVlIiwiU2V0UXVldWUiLCJpIiwibSIsInFpIiwiY291bnQiLCJyZWR1Y2UiLCJhIiwiYiIsIlByb2R1Y3Rpb25QZXJTZWNvbmRNYXNzIiwiTWFpbnRlbmFuY2VDb25zdW1wdGlvblBlclNlY29uZEVuZXJneSIsIlByb2R1Y3Rpb25QZXJTZWNvbmRFbmVyZ3kiLCJCdWlsZENvc3RNYXNzIiwiQnVpbGRDb3N0RW5lcmd5IiwiQnVpbGRUaW1lIiwicHYiLCJjdiIsIkJ1aWxkaW5nRGF0YSIsIkJ1aWxkaW5nUHJvcCIsImNvbnNvbGUiLCJsb2ciLCJGdWxsTmFtZSIsIlVuaXRJZCIsIlN0cnVjdHVyZSIsIkFkamFjZW50YWJsZXMiLCJBZGphY2VudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQVVHO0FBQUE7O0FBQUEsTUFUREMsUUFTQyxRQVREQSxRQVNDO0FBQUEsTUFSREMsV0FRQyxRQVJEQSxXQVFDO0FBQUEsTUFQREMsRUFPQyxRQVBEQSxFQU9DO0FBQUEsTUFOREMsS0FNQyxRQU5EQSxLQU1DO0FBQ0QsTUFBSUMsSUFBSSxHQUFHQyxrQkFBa0IsQ0FBQ0wsUUFBUSxDQUFDTSxLQUFWLENBQTdCO0FBRUEsTUFBSUMsY0FBYyxHQUFHUCxRQUFRLENBQUNRLGNBQVQsQ0FBd0JDLE1BQXhCLENBQ25CVCxRQUFRLENBQUNVLFFBQVQsQ0FBa0JDLE1BQWxCLENBQ0UsVUFBQ0MsRUFBRDtBQUFBLFdBQVEsQ0FBQ1osUUFBUSxDQUFDTSxLQUFULENBQWVPLEdBQWYsQ0FBbUIsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ0MsUUFBVDtBQUFBLEtBQW5CLEVBQXNDQyxRQUF0QyxDQUErQ0osRUFBL0MsQ0FBVDtBQUFBLEdBREYsQ0FEbUIsRUFLbEJDLEdBTGtCLENBS2QsVUFBQ0QsRUFBRDtBQUFBLFdBQVFWLEVBQUUsQ0FBQ1UsRUFBRCxDQUFWO0FBQUEsR0FMYyxFQU1sQkssSUFOa0IsQ0FNYkMsc0RBTmEsQ0FBckI7QUFRQSxNQUFJQyxhQUFhLEdBQUdDLFVBQVUsQ0FBQ3BCLFFBQUQsQ0FBVixHQUF1QnFCLGlCQUFpQixDQUFDckIsUUFBRCxFQUFXSSxJQUFYLENBQTVEO0FBRUEsTUFBSWtCLGVBQWUsR0FDakJDLFlBQVksQ0FBQ3ZCLFFBQUQsQ0FBWixHQUF5QndCLG1CQUFtQixDQUFDeEIsUUFBRCxFQUFXSSxJQUFYLENBRDlDO0FBR0EsU0FDRTtBQUFLLGFBQVMs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WUFBWjtBQUVBLE9BQUtHLFFBQUwsR0FBZ0JILFlBQVksQ0FBQ0csUUFBN0I7QUFDQSxPQUFLMUMsVUFBTCxHQUFrQnVDLFlBQVksQ0FBQ3ZDLFVBQS9CO0FBQ0EsT0FBS3JCLGNBQUwsR0FBc0I0RCxZQUFZLENBQUM1RCxjQUFiLElBQStCLEVBQXJEO0FBRUEsT0FBS2dFLE1BQUwsR0FBY0osWUFBWSxDQUFDckQsUUFBM0I7QUFDQSxPQUFLb0IsU0FBTCxHQUFpQmlDLFlBQVksQ0FBQ2xDLE9BQWIsQ0FBcUJDLFNBQXRDO0FBQ0EsT0FBS1MsWUFBTCxHQUNFd0IsWUFBWSxDQUFDSyxTQUFiLENBQXVCN0IsWUFBdkIsQ0FBb0MvQixHQUFwQyxDQUF3QyxVQUFDRCxFQUFEO0FBQUEsV0FBUVYsRUFBRSxDQUFDVSxFQUFELENBQVY7QUFBQSxHQUF4QyxLQUEyRCxFQUQ3RDtBQUVBLE9BQUtpQyxPQUFMLEdBQ0UsS0FBS0QsWUFBTCxDQUFrQlksTUFBbEIsQ0FBeUIsVUFBQ0gsQ0FBRCxFQUFJYixJQUFKLEVBQWE7QUFDcENhLEtBQUMsQ0FBQ2IsSUFBSSxDQUFDekIsUUFBTixDQUFELEdBQW1CO0FBQUV3QyxXQUFLLEVBQUUsQ0FBVDtBQUFZZixVQUFJLEVBQUVBO0FBQWxCLEtBQW5CO0FBQ0EsV0FBT2EsQ0FBUDtBQUNELEdBSEQsRUFHRyxFQUhILEtBR1UsRUFKWjtBQUtBLE9BQUtwQixDQUFMLEdBQVNtQyxZQUFUO0FBQ0EsT0FBSzlELEtBQUwsR0FBYSxFQUFiO0FBQ0EsT0FBS3FDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsT0FBSytCLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsT0FBS2pFLFFBQUwsR0FBZ0IwRCxZQUFZLENBQUMxRCxRQUFiLElBQXlCLEVBQXpDO0FBQ0QsQ0ExQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2ZjOWJhYzM3MGM1NjMxMWYxZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9CdWlsZGluZy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuaW1wb3J0ICogYXMgRnVuYyBmcm9tIFwiLi9GdW5jXCI7XHJcbmltcG9ydCBBc3Npc3RzIGZyb20gXCIuL0Fzc2lzdHNcIjtcclxuaW1wb3J0IFVuaXRCdXR0b24gZnJvbSBcIi4vVW5pdEJ1dHRvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVuaXQsIFJhd0J1aWxkaW5nIH0gZnJvbSBcIi4uL3R5cGVzY3JpcHQvVHlwZXNcIjtcclxuZnVuY3Rpb24gQnVpbGRpbmcoe1xyXG4gIGJ1aWxkaW5nLFxyXG4gIHNldEJ1aWxkaW5nLFxyXG4gIGRiLFxyXG4gIGluZGV4LFxyXG59OiB7XHJcbiAgYnVpbGRpbmc6IEJ1aWxkaW5nRGF0YTtcclxuICBzZXRCdWlsZGluZzogKGk6IG51bWJlciwgYjogQnVpbGRpbmdEYXRhKSA9PiB2b2lkO1xyXG4gIGRiOiBhbnk7XHJcbiAgaW5kZXg6IG51bWJlcjtcclxufSkge1xyXG4gIGxldCBjb3N0ID0gY2FsY3VsYXRlUXVldWVDb3N0KGJ1aWxkaW5nLlF1ZXVlKTtcclxuXHJcbiAgbGV0IGNvbnN0cnVjdGFibGVzID0gYnVpbGRpbmcuQ29uc3RydWN0YWJsZXMuY29uY2F0KFxyXG4gICAgYnVpbGRpbmcuVXBncmFkZXMuZmlsdGVyKFxyXG4gICAgICAoaWQpID0+ICFidWlsZGluZy5RdWV1ZS5tYXAoKHUpID0+IHUuVW5pdE5hbWUpLmluY2x1ZGVzKGlkKVxyXG4gICAgKVxyXG4gIClcclxuICAgIC5tYXAoKGlkKSA9PiBkYltpZF0pXHJcbiAgICAuc29ydChGdW5jLnVuaXRfaWNvbl9zb3J0ZXIpO1xyXG5cclxuICBsZXQgQXZnTWFzc1BlclNlYyA9IE1hc3NQZXJTZWMoYnVpbGRpbmcpIC0gTWFzc1NwZW50QnVpbGRpbmcoYnVpbGRpbmcsIGNvc3QpO1xyXG5cclxuICBsZXQgQXZnRW5lcmd5UGVyU2VjID1cclxuICAgIEVuZXJneVBlclNlYyhidWlsZGluZykgLSBFbmVyZ3lTcGVudEJ1aWxkaW5nKGJ1aWxkaW5nLCBjb3N0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29saWR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd19jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD57YnVpbGRpbmcuU2ltcGxlTmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzb3VyY2VfdGFibGV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzb3VyY2VfY2VsbH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Q29uc3RhbnRzLkljb24oXCJUaW1lXCIpfT48L2ltZz5cclxuICAgICAgICAgICAgICAgIHtidWlsZGluZy5wLkVjb25vbXkuQnVpbGRSYXRlfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgVG90YWwgQnVpbGQgUmF0ZToge1RvdGFsQnVpbGRSYXRlKGJ1aWxkaW5nKX1cclxuICAgICAgICAgICAgICAgIFRvdGFsIE1hc3M6IHtjb3N0Lm1hc3N9LCBUb3RhbCBFbmVyZ3k6e2Nvc3QuZW5lcmd5fSwgVG90YWwgQnVpbGRcclxuICAgICAgICAgICAgICAgIHRpY2tzOlxyXG4gICAgICAgICAgICAgICAge2Nvc3QuYnVpbGR0aWNrc30sIFRvdGFsIGJ1aWxkIHRpbWU6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAge2Nvc3QuYnVpbGR0aWNrcyAvIFRvdGFsQnVpbGRSYXRlKGJ1aWxkaW5nKX1zXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBBdmcgTWFzczoge0F2Z01hc3NQZXJTZWN9LCBBdmcgRW5lcmd5OiB7QXZnRW5lcmd5UGVyU2VjfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjb25zdHJ1Y3RhYmxlcy5tYXAoKHVuaXQpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFVuaXRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdW5pdD17dW5pdH1cclxuICAgICAgICAgICAgICAgICAga2V5PXt1bml0LlVuaXROYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5Vbml0ID0geyAuLi51bml0IH07XHJcbiAgICAgICAgICAgICAgICAgICAgblVuaXQua2V5ID0gYnVpbGRpbmcuUXVldWVObztcclxuICAgICAgICAgICAgICAgICAgICBzZXRCdWlsZGluZyhpbmRleCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uYnVpbGRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBRdWV1ZTogWy4uLmJ1aWxkaW5nLlF1ZXVlLCBuVW5pdF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBRdWV1ZU5vOiBidWlsZGluZy5RdWV1ZU5vICsgMSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QXNzaXN0c1xyXG4gICAgICAgICAgQXNzaXN0YWJsZUJ5PXtidWlsZGluZy5Bc3Npc3RhYmxlQnl9XHJcbiAgICAgICAgICBBc3Npc3RzPXtidWlsZGluZy5Bc3Npc3RzfVxyXG4gICAgICAgICAgU2V0QXNzaXN0cz17KG5ld0Fzc2lzdHM6IHtcclxuICAgICAgICAgICAgW2luZGV4OiBzdHJpbmddOiB7XHJcbiAgICAgICAgICAgICAgY291bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICB1bml0OiBVbml0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRCdWlsZGluZyhpbmRleCwgeyAuLi5idWlsZGluZywgQXNzaXN0czogbmV3QXNzaXN0cyB9KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxVbml0UXVldWVcclxuICAgICAgICBRdWV1ZT17YnVpbGRpbmcuUXVldWV9XHJcbiAgICAgICAgU2V0UXVldWU9eyhRdWV1ZSkgPT4gc2V0QnVpbGRpbmcoaW5kZXgsIHsgLi4uYnVpbGRpbmcsIFF1ZXVlOiBRdWV1ZSB9KX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNZW1vaXplZEJ1aWxkaW5nID0gUmVhY3QubWVtbyhCdWlsZGluZyk7XHJcblxyXG5mdW5jdGlvbiBVbml0UXVldWUoeyBRdWV1ZSwgU2V0UXVldWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvbGlkfT5cclxuICAgICAge1F1ZXVlLm1hcCgodW5pdCwgaSkgPT4gKFxyXG4gICAgICAgIDxVbml0QnV0dG9uXHJcbiAgICAgICAgICB1bml0PXt1bml0fVxyXG4gICAgICAgICAga2V5PXt1bml0LmtleX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgU2V0UXVldWUoUXVldWUuZmlsdGVyKChtLCBxaSkgPT4gaSAhPSBxaSkpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRvdGFsQnVpbGRSYXRlKGJ1aWxkaW5nOiBCdWlsZGluZ0RhdGEpOiBudW1iZXIge1xyXG4gIHJldHVybiAoXHJcbiAgICBidWlsZGluZy5CdWlsZFJhdGUgK1xyXG4gICAgICBidWlsZGluZy5Bc3Npc3RhYmxlQnkubWFwKFxyXG4gICAgICAgICh1bml0OiBVbml0KSA9PlxyXG4gICAgICAgICAgdW5pdC5FY29ub215LkJ1aWxkUmF0ZSAqIGJ1aWxkaW5nLkFzc2lzdHNbdW5pdC5Vbml0TmFtZV0uY291bnRcclxuICAgICAgKS5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBhICsgYiwgMCkgfHwgMFxyXG4gICk7XHJcbn1cclxuZnVuY3Rpb24gTWFzc1BlclNlYyhidWlsZGluZzogQnVpbGRpbmdEYXRhKTogbnVtYmVyIHtcclxuICByZXR1cm4gYnVpbGRpbmcucC5FY29ub215LlByb2R1Y3Rpb25QZXJTZWNvbmRNYXNzIHx8IDA7XHJcbn1cclxuZnVuY3Rpb24gRW5lcmd5UGVyU2VjKGJ1aWxkaW5nOiBCdWlsZGluZ0RhdGEpOiBudW1iZXIge1xyXG4gIHJldHVybiAoXHJcbiAgICAoLWJ1aWxkaW5nLnAuRWNvbm9teS5NYWludGVuYW5jZUNvbnN1bXB0aW9uUGVyU2Vjb25kRW5lcmd5IHx8IDApICtcclxuICAgIChidWlsZGluZy5wLkVjb25vbXkuUHJvZHVjdGlvblBlclNlY29uZEVuZXJneSB8fCAwKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1hc3NTcGVudEJ1aWxkaW5nKFxyXG4gIGJ1aWxkaW5nOiBCdWlsZGluZ0RhdGEsXHJcbiAgY29zdDogeyBtYXNzOiBudW1iZXI7IGVuZXJneTogbnVtYmVyOyBidWlsZHRpY2tzOiBudW1iZXIgfVxyXG4pOiBudW1iZXIge1xyXG4gIGlmIChjb3N0LmJ1aWxkdGlja3MgPiAwKSB7XHJcbiAgICAvLyBQcmVwYXJlIGZvciBhZGphY2VudHMgd2hpY2ggb25seSBhZmZlY3RzIHRoZSBjb3N0IGZyb20gdGhlIGJhc2UgYnVpbGRpbmdzIGJ1aWxkcmF0ZS5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIChjb3N0Lm1hc3MgLyBjb3N0LmJ1aWxkdGlja3MpICogYnVpbGRpbmcuQnVpbGRSYXRlICtcclxuICAgICAgKGNvc3QubWFzcyAvIGNvc3QuYnVpbGR0aWNrcykgKlxyXG4gICAgICAgIChUb3RhbEJ1aWxkUmF0ZShidWlsZGluZykgLSBidWlsZGluZy5CdWlsZFJhdGUpXHJcbiAgICApO1xyXG4gIH0gZWxzZSByZXR1cm4gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gRW5lcmd5U3BlbnRCdWlsZGluZyhcclxuICBidWlsZGluZzogQnVpbGRpbmdEYXRhLFxyXG4gIGNvc3Q6IHsgbWFzczogbnVtYmVyOyBlbmVyZ3k6IG51bWJlcjsgYnVpbGR0aWNrczogbnVtYmVyIH1cclxuKTogbnVtYmVyIHtcclxuICBpZiAoY29zdC5idWlsZHRpY2tzID4gMCkge1xyXG4gICAgLy8gUHJlcGFyZSBmb3IgYWRqYWNlbnRzIHdoaWNoIG9ubHkgYWZmZWN0cyB0aGUgY29zdCBmcm9tIHRoZSBiYXNlIGJ1aWxkaW5ncyBidWlsZHJhdGUuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAoY29zdC5lbmVyZ3kgLyBjb3N0LmJ1aWxkdGlja3MpICogYnVpbGRpbmcuQnVpbGRSYXRlICtcclxuICAgICAgKGNvc3QuZW5lcmd5IC8gY29zdC5idWlsZHRpY2tzKSAqXHJcbiAgICAgICAgKFRvdGFsQnVpbGRSYXRlKGJ1aWxkaW5nKSAtIGJ1aWxkaW5nLkJ1aWxkUmF0ZSlcclxuICAgICk7XHJcbiAgfSBlbHNlIHJldHVybiAwO1xyXG59XHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZVF1ZXVlQ29zdChRdWV1ZTogVW5pdFtdKSB7XHJcbiAgcmV0dXJuIFF1ZXVlLm1hcCgodW5pdCkgPT4gKHtcclxuICAgIG1hc3M6IHVuaXQuRWNvbm9teS5CdWlsZENvc3RNYXNzLFxyXG4gICAgZW5lcmd5OiB1bml0LkVjb25vbXkuQnVpbGRDb3N0RW5lcmd5LFxyXG4gICAgYnVpbGR0aWNrczogdW5pdC5FY29ub215LkJ1aWxkVGltZSxcclxuICB9KSkucmVkdWNlKFxyXG4gICAgKHB2LCBjdikgPT4gKHtcclxuICAgICAgbWFzczogcHYubWFzcyArIGN2Lm1hc3MsXHJcbiAgICAgIGVuZXJneTogcHYuZW5lcmd5ICsgY3YuZW5lcmd5LFxyXG4gICAgICBidWlsZHRpY2tzOiBwdi5idWlsZHRpY2tzICsgY3YuYnVpbGR0aWNrcyxcclxuICAgIH0pLFxyXG4gICAgeyBtYXNzOiAwLCBlbmVyZ3k6IDAsIGJ1aWxkdGlja3M6IDAgfVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCdWlsZGluZ0RhdGEge1xyXG4gIFVuaXRJZDogc3RyaW5nO1xyXG4gIEZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgU2ltcGxlTmFtZTogc3RyaW5nO1xyXG4gIENvbnN0cnVjdGFibGVzOiBhbnlbXTtcclxuICBBc3Npc3RhYmxlQnk6IFVuaXRbXTtcclxuICBBc3Npc3RzOiB7XHJcbiAgICBbaW5kZXg6IHN0cmluZ106IHtcclxuICAgICAgY291bnQ6IG51bWJlcjtcclxuICAgICAgdW5pdDogVW5pdDtcclxuICAgIH07XHJcbiAgfTtcclxuICBCdWlsZFJhdGU6IG51bWJlcjtcclxuICBBZGphY2VudGFibGVzOiBhbnlbXTtcclxuICBBZGphY2VudHM6IGFueVtdO1xyXG4gIFVwZ3JhZGVzOiBhbnlbXTtcclxuICBRdWV1ZTogVW5pdFtdO1xyXG4gIFF1ZXVlTm86IG51bWJlcjtcclxuICBwOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEJ1aWxkaW5nUHJvcDogUmF3QnVpbGRpbmcsIGRiKSB7XHJcbiAgICBjb25zb2xlLmxvZyhCdWlsZGluZ1Byb3ApO1xyXG5cclxuICAgIHRoaXMuRnVsbE5hbWUgPSBCdWlsZGluZ1Byb3AuRnVsbE5hbWU7XHJcbiAgICB0aGlzLlNpbXBsZU5hbWUgPSBCdWlsZGluZ1Byb3AuU2ltcGxlTmFtZTtcclxuICAgIHRoaXMuQ29uc3RydWN0YWJsZXMgPSBCdWlsZGluZ1Byb3AuQ29uc3RydWN0YWJsZXMgfHwgW107XHJcblxyXG4gICAgdGhpcy5Vbml0SWQgPSBCdWlsZGluZ1Byb3AuVW5pdE5hbWU7XHJcbiAgICB0aGlzLkJ1aWxkUmF0ZSA9IEJ1aWxkaW5nUHJvcC5FY29ub215LkJ1aWxkUmF0ZTtcclxuICAgIHRoaXMuQXNzaXN0YWJsZUJ5ID1cclxuICAgICAgQnVpbGRpbmdQcm9wLlN0cnVjdHVyZS5Bc3Npc3RhYmxlQnkubWFwKChpZCkgPT4gZGJbaWRdKSB8fCBbXTtcclxuICAgIHRoaXMuQXNzaXN0cyA9XHJcbiAgICAgIHRoaXMuQXNzaXN0YWJsZUJ5LnJlZHVjZSgobSwgdW5pdCkgPT4ge1xyXG4gICAgICAgIG1bdW5pdC5Vbml0TmFtZV0gPSB7IGNvdW50OiAwLCB1bml0OiB1bml0IH07XHJcbiAgICAgICAgcmV0dXJuIG07XHJcbiAgICAgIH0sIHt9KSB8fCB7fTtcclxuICAgIHRoaXMucCA9IEJ1aWxkaW5nUHJvcDtcclxuICAgIHRoaXMuUXVldWUgPSBbXTtcclxuICAgIHRoaXMuUXVldWVObyA9IDA7XHJcbiAgICB0aGlzLkFkamFjZW50YWJsZXMgPSBbXTtcclxuICAgIHRoaXMuQWRqYWNlbnRzID0gW107XHJcbiAgICB0aGlzLlVwZ3JhZGVzID0gQnVpbGRpbmdQcm9wLlVwZ3JhZGVzIHx8IFtdO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9