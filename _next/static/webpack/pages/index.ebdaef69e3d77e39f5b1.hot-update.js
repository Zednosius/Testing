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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _Constants__WEBPACK_IMPORTED_MODULE_4__["Icon"]("Time"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }), building.p.Economy.BuildRate), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Total Build Rate: ", TotalBuildRate(building), "Total Mass: ", cost.mass, ", Total Energy:", cost.energy, ", Total Build ticks:", cost.buildticks, ", Total build time:", " ", cost.buildticks / TotalBuildRate(building), "s"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "Avg Mass: ", AvgMassPerSec, ", Avg Energy: ", AvgEnergyPerSec)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
        lineNumber: 61,
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
      lineNumber: 78,
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
      lineNumber: 91,
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
      lineNumber: 103,
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
        lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy50c3giXSwibmFtZXMiOlsiQnVpbGRpbmciLCJidWlsZGluZyIsInNldEJ1aWxkaW5nIiwiZGIiLCJpbmRleCIsImNvc3QiLCJjYWxjdWxhdGVRdWV1ZUNvc3QiLCJRdWV1ZSIsImNvbnN0cnVjdGFibGVzIiwiQ29uc3RydWN0YWJsZXMiLCJjb25jYXQiLCJVcGdyYWRlcyIsImZpbHRlciIsImlkIiwibWFwIiwidSIsIlVuaXROYW1lIiwiaW5jbHVkZXMiLCJzb3J0IiwiRnVuYyIsIkF2Z01hc3NQZXJTZWMiLCJNYXNzUGVyU2VjIiwiTWFzc1NwZW50QnVpbGRpbmciLCJBdmdFbmVyZ3lQZXJTZWMiLCJFbmVyZ3lQZXJTZWMiLCJFbmVyZ3lTcGVudEJ1aWxkaW5nIiwic3R5bGVzIiwic29saWQiLCJyb3dfY29udGFpbmVyIiwiY29sdW1uX2NvbnRhaW5lciIsIlNpbXBsZU5hbWUiLCJDb25zdGFudHMiLCJwIiwiRWNvbm9teSIsIkJ1aWxkUmF0ZSIsIlRvdGFsQnVpbGRSYXRlIiwibWFzcyIsImVuZXJneSIsImJ1aWxkdGlja3MiLCJ1bml0IiwiblVuaXQiLCJrZXkiLCJRdWV1ZU5vIiwiQXNzaXN0YWJsZUJ5IiwiQXNzaXN0cyIsIm5ld0Fzc2lzdHMiLCJNZW1vaXplZEJ1aWxkaW5nIiwiUmVhY3QiLCJtZW1vIiwiVW5pdFF1ZXVlIiwiU2V0UXVldWUiLCJpIiwibSIsInFpIiwiY291bnQiLCJyZWR1Y2UiLCJhIiwiYiIsIlByb2R1Y3Rpb25QZXJTZWNvbmRNYXNzIiwiTWFpbnRlbmFuY2VDb25zdW1wdGlvblBlclNlY29uZEVuZXJneSIsIlByb2R1Y3Rpb25QZXJTZWNvbmRFbmVyZ3kiLCJCdWlsZENvc3RNYXNzIiwiQnVpbGRDb3N0RW5lcmd5IiwiQnVpbGRUaW1lIiwicHYiLCJjdiIsIkJ1aWxkaW5nRGF0YSIsIkJ1aWxkaW5nUHJvcCIsImNvbnNvbGUiLCJsb2ciLCJGdWxsTmFtZSIs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T0FBSzhELE1BQUwsR0FBY0osWUFBWSxDQUFDbkQsUUFBM0I7QUFDQSxPQUFLa0IsU0FBTCxHQUFpQmlDLFlBQVksQ0FBQ2xDLE9BQWIsQ0FBcUJDLFNBQXRDO0FBQ0EsT0FBS1MsWUFBTCxHQUNFd0IsWUFBWSxDQUFDSyxTQUFiLENBQXVCN0IsWUFBdkIsQ0FBb0M3QixHQUFwQyxDQUF3QyxVQUFDRCxFQUFEO0FBQUEsV0FBUVYsRUFBRSxDQUFDVSxFQUFELENBQVY7QUFBQSxHQUF4QyxLQUEyRCxFQUQ3RDtBQUVBLE9BQUsrQixPQUFMLEdBQ0UsS0FBS0QsWUFBTCxDQUFrQlksTUFBbEIsQ0FBeUIsVUFBQ0gsQ0FBRCxFQUFJYixJQUFKLEVBQWE7QUFDcENhLEtBQUMsQ0FBQ2IsSUFBSSxDQUFDdkIsUUFBTixDQUFELEdBQW1CO0FBQUVzQyxXQUFLLEVBQUUsQ0FBVDtBQUFZZixVQUFJLEVBQUVBO0FBQWxCLEtBQW5CO0FBQ0EsV0FBT2EsQ0FBUDtBQUNELEdBSEQsRUFHRyxFQUhILEtBR1UsRUFKWjtBQUtBLE9BQUtwQixDQUFMLEdBQVNtQyxZQUFUO0FBQ0EsT0FBSzVELEtBQUwsR0FBYSxFQUFiO0FBQ0EsT0FBS21DLE9BQUwsR0FBZSxDQUFmO0FBQ0EsT0FBSytCLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsT0FBSy9ELFFBQUwsR0FBZ0J3RCxZQUFZLENBQUN4RCxRQUFiLElBQXlCLEVBQXpDO0FBQ0QsQ0ExQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWJkYWVmNjllM2Q3N2UzOWY1YjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9CdWlsZGluZy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuaW1wb3J0ICogYXMgRnVuYyBmcm9tIFwiLi9GdW5jXCI7XHJcbmltcG9ydCBBc3Npc3RzIGZyb20gXCIuL0Fzc2lzdHNcIjtcclxuaW1wb3J0IFVuaXRCdXR0b24gZnJvbSBcIi4vVW5pdEJ1dHRvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVuaXQsIFJhd0J1aWxkaW5nIH0gZnJvbSBcIi4uL3R5cGVzY3JpcHQvVHlwZXNcIjtcclxuZnVuY3Rpb24gQnVpbGRpbmcoe1xyXG4gIGJ1aWxkaW5nLFxyXG4gIHNldEJ1aWxkaW5nLFxyXG4gIGRiLFxyXG4gIGluZGV4LFxyXG59OiB7XHJcbiAgYnVpbGRpbmc6IEJ1aWxkaW5nRGF0YTtcclxuICBzZXRCdWlsZGluZzogKGk6IG51bWJlciwgYjogQnVpbGRpbmdEYXRhKSA9PiB2b2lkO1xyXG4gIGRiOiBhbnk7XHJcbiAgaW5kZXg6IG51bWJlcjtcclxufSkge1xyXG4gIGxldCBjb3N0ID0gY2FsY3VsYXRlUXVldWVDb3N0KGJ1aWxkaW5nLlF1ZXVlKTtcclxuXHJcbiAgbGV0IGNvbnN0cnVjdGFibGVzID0gYnVpbGRpbmcuQ29uc3RydWN0YWJsZXMuY29uY2F0KFxyXG4gICAgYnVpbGRpbmcuVXBncmFkZXMuZmlsdGVyKFxyXG4gICAgICAoaWQpID0+ICFidWlsZGluZy5RdWV1ZS5tYXAoKHUpID0+IHUuVW5pdE5hbWUpLmluY2x1ZGVzKGlkKVxyXG4gICAgKVxyXG4gIClcclxuICAgIC5tYXAoKGlkKSA9PiBkYltpZF0pXHJcbiAgICAuc29ydChGdW5jLnVuaXRfaWNvbl9zb3J0ZXIpO1xyXG5cclxuICBsZXQgQXZnTWFzc1BlclNlYyA9IE1hc3NQZXJTZWMoYnVpbGRpbmcpIC0gTWFzc1NwZW50QnVpbGRpbmcoYnVpbGRpbmcsIGNvc3QpO1xyXG5cclxuICBsZXQgQXZnRW5lcmd5UGVyU2VjID1cclxuICAgIEVuZXJneVBlclNlYyhidWlsZGluZykgLSBFbmVyZ3lTcGVudEJ1aWxkaW5nKGJ1aWxkaW5nLCBjb3N0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29saWR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd19jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD57YnVpbGRpbmcuU2ltcGxlTmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e0NvbnN0YW50cy5JY29uKFwiVGltZVwiKX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAge2J1aWxkaW5nLnAuRWNvbm9teS5CdWlsZFJhdGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBUb3RhbCBCdWlsZCBSYXRlOiB7VG90YWxCdWlsZFJhdGUoYnVpbGRpbmcpfVxyXG4gICAgICAgICAgICAgIFRvdGFsIE1hc3M6IHtjb3N0Lm1hc3N9LCBUb3RhbCBFbmVyZ3k6e2Nvc3QuZW5lcmd5fSwgVG90YWwgQnVpbGRcclxuICAgICAgICAgICAgICB0aWNrczpcclxuICAgICAgICAgICAgICB7Y29zdC5idWlsZHRpY2tzfSwgVG90YWwgYnVpbGQgdGltZTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAge2Nvc3QuYnVpbGR0aWNrcyAvIFRvdGFsQnVpbGRSYXRlKGJ1aWxkaW5nKX1zXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgQXZnIE1hc3M6IHtBdmdNYXNzUGVyU2VjfSwgQXZnIEVuZXJneToge0F2Z0VuZXJneVBlclNlY31cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2NvbnN0cnVjdGFibGVzLm1hcCgodW5pdCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VW5pdEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB1bml0PXt1bml0fVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3VuaXQuVW5pdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgblVuaXQgPSB7IC4uLnVuaXQgfTtcclxuICAgICAgICAgICAgICAgICAgICBuVW5pdC5rZXkgPSBidWlsZGluZy5RdWV1ZU5vO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEJ1aWxkaW5nKGluZGV4LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5idWlsZGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgIFF1ZXVlOiBbLi4uYnVpbGRpbmcuUXVldWUsIG5Vbml0XSxcclxuICAgICAgICAgICAgICAgICAgICAgIFF1ZXVlTm86IGJ1aWxkaW5nLlF1ZXVlTm8gKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxBc3Npc3RzXHJcbiAgICAgICAgICBBc3Npc3RhYmxlQnk9e2J1aWxkaW5nLkFzc2lzdGFibGVCeX1cclxuICAgICAgICAgIEFzc2lzdHM9e2J1aWxkaW5nLkFzc2lzdHN9XHJcbiAgICAgICAgICBTZXRBc3Npc3RzPXsobmV3QXNzaXN0czoge1xyXG4gICAgICAgICAgICBbaW5kZXg6IHN0cmluZ106IHtcclxuICAgICAgICAgICAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgIHVuaXQ6IFVuaXQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgIHNldEJ1aWxkaW5nKGluZGV4LCB7IC4uLmJ1aWxkaW5nLCBBc3Npc3RzOiBuZXdBc3Npc3RzIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFVuaXRRdWV1ZVxyXG4gICAgICAgIFF1ZXVlPXtidWlsZGluZy5RdWV1ZX1cclxuICAgICAgICBTZXRRdWV1ZT17KFF1ZXVlKSA9PiBzZXRCdWlsZGluZyhpbmRleCwgeyAuLi5idWlsZGluZywgUXVldWU6IFF1ZXVlIH0pfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1lbW9pemVkQnVpbGRpbmcgPSBSZWFjdC5tZW1vKEJ1aWxkaW5nKTtcclxuXHJcbmZ1bmN0aW9uIFVuaXRRdWV1ZSh7IFF1ZXVlLCBTZXRRdWV1ZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29saWR9PlxyXG4gICAgICB7UXVldWUubWFwKCh1bml0LCBpKSA9PiAoXHJcbiAgICAgICAgPFVuaXRCdXR0b25cclxuICAgICAgICAgIHVuaXQ9e3VuaXR9XHJcbiAgICAgICAgICBrZXk9e3VuaXQua2V5fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBTZXRRdWV1ZShRdWV1ZS5maWx0ZXIoKG0sIHFpKSA9PiBpICE9IHFpKSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVG90YWxCdWlsZFJhdGUoYnVpbGRpbmc6IEJ1aWxkaW5nRGF0YSk6IG51bWJlciB7XHJcbiAgcmV0dXJuIChcclxuICAgIGJ1aWxkaW5nLkJ1aWxkUmF0ZSArXHJcbiAgICAgIGJ1aWxkaW5nLkFzc2lzdGFibGVCeS5tYXAoXHJcbiAgICAgICAgKHVuaXQ6IFVuaXQpID0+XHJcbiAgICAgICAgICB1bml0LkVjb25vbXkuQnVpbGRSYXRlICogYnVpbGRpbmcuQXNzaXN0c1t1bml0LlVuaXROYW1lXS5jb3VudFxyXG4gICAgICApLnJlZHVjZSgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgKyBiLCAwKSB8fCAwXHJcbiAgKTtcclxufVxyXG5mdW5jdGlvbiBNYXNzUGVyU2VjKGJ1aWxkaW5nOiBCdWlsZGluZ0RhdGEpOiBudW1iZXIge1xyXG4gIHJldHVybiBidWlsZGluZy5wLkVjb25vbXkuUHJvZHVjdGlvblBlclNlY29uZE1hc3MgfHwgMDtcclxufVxyXG5mdW5jdGlvbiBFbmVyZ3lQZXJTZWMoYnVpbGRpbmc6IEJ1aWxkaW5nRGF0YSk6IG51bWJlciB7XHJcbiAgcmV0dXJuIChcclxuICAgICgtYnVpbGRpbmcucC5FY29ub215Lk1haW50ZW5hbmNlQ29uc3VtcHRpb25QZXJTZWNvbmRFbmVyZ3kgfHwgMCkgK1xyXG4gICAgKGJ1aWxkaW5nLnAuRWNvbm9teS5Qcm9kdWN0aW9uUGVyU2Vjb25kRW5lcmd5IHx8IDApXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWFzc1NwZW50QnVpbGRpbmcoXHJcbiAgYnVpbGRpbmc6IEJ1aWxkaW5nRGF0YSxcclxuICBjb3N0OiB7IG1hc3M6IG51bWJlcjsgZW5lcmd5OiBudW1iZXI7IGJ1aWxkdGlja3M6IG51bWJlciB9XHJcbik6IG51bWJlciB7XHJcbiAgaWYgKGNvc3QuYnVpbGR0aWNrcyA+IDApIHtcclxuICAgIC8vIFByZXBhcmUgZm9yIGFkamFjZW50cyB3aGljaCBvbmx5IGFmZmVjdHMgdGhlIGNvc3QgZnJvbSB0aGUgYmFzZSBidWlsZGluZ3MgYnVpbGRyYXRlLlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgKGNvc3QubWFzcyAvIGNvc3QuYnVpbGR0aWNrcykgKiBidWlsZGluZy5CdWlsZFJhdGUgK1xyXG4gICAgICAoY29zdC5tYXNzIC8gY29zdC5idWlsZHRpY2tzKSAqXHJcbiAgICAgICAgKFRvdGFsQnVpbGRSYXRlKGJ1aWxkaW5nKSAtIGJ1aWxkaW5nLkJ1aWxkUmF0ZSlcclxuICAgICk7XHJcbiAgfSBlbHNlIHJldHVybiAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBFbmVyZ3lTcGVudEJ1aWxkaW5nKFxyXG4gIGJ1aWxkaW5nOiBCdWlsZGluZ0RhdGEsXHJcbiAgY29zdDogeyBtYXNzOiBudW1iZXI7IGVuZXJneTogbnVtYmVyOyBidWlsZHRpY2tzOiBudW1iZXIgfVxyXG4pOiBudW1iZXIge1xyXG4gIGlmIChjb3N0LmJ1aWxkdGlja3MgPiAwKSB7XHJcbiAgICAvLyBQcmVwYXJlIGZvciBhZGphY2VudHMgd2hpY2ggb25seSBhZmZlY3RzIHRoZSBjb3N0IGZyb20gdGhlIGJhc2UgYnVpbGRpbmdzIGJ1aWxkcmF0ZS5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIChjb3N0LmVuZXJneSAvIGNvc3QuYnVpbGR0aWNrcykgKiBidWlsZGluZy5CdWlsZFJhdGUgK1xyXG4gICAgICAoY29zdC5lbmVyZ3kgLyBjb3N0LmJ1aWxkdGlja3MpICpcclxuICAgICAgICAoVG90YWxCdWlsZFJhdGUoYnVpbGRpbmcpIC0gYnVpbGRpbmcuQnVpbGRSYXRlKVxyXG4gICAgKTtcclxuICB9IGVsc2UgcmV0dXJuIDA7XHJcbn1cclxuZnVuY3Rpb24gY2FsY3VsYXRlUXVldWVDb3N0KFF1ZXVlOiBVbml0W10pIHtcclxuICByZXR1cm4gUXVldWUubWFwKCh1bml0KSA9PiAoe1xyXG4gICAgbWFzczogdW5pdC5FY29ub215LkJ1aWxkQ29zdE1hc3MsXHJcbiAgICBlbmVyZ3k6IHVuaXQuRWNvbm9teS5CdWlsZENvc3RFbmVyZ3ksXHJcbiAgICBidWlsZHRpY2tzOiB1bml0LkVjb25vbXkuQnVpbGRUaW1lLFxyXG4gIH0pKS5yZWR1Y2UoXHJcbiAgICAocHYsIGN2KSA9PiAoe1xyXG4gICAgICBtYXNzOiBwdi5tYXNzICsgY3YubWFzcyxcclxuICAgICAgZW5lcmd5OiBwdi5lbmVyZ3kgKyBjdi5lbmVyZ3ksXHJcbiAgICAgIGJ1aWxkdGlja3M6IHB2LmJ1aWxkdGlja3MgKyBjdi5idWlsZHRpY2tzLFxyXG4gICAgfSksXHJcbiAgICB7IG1hc3M6IDAsIGVuZXJneTogMCwgYnVpbGR0aWNrczogMCB9XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1aWxkaW5nRGF0YSB7XHJcbiAgVW5pdElkOiBzdHJpbmc7XHJcbiAgRnVsbE5hbWU6IHN0cmluZztcclxuICBTaW1wbGVOYW1lOiBzdHJpbmc7XHJcbiAgQ29uc3RydWN0YWJsZXM6IGFueVtdO1xyXG4gIEFzc2lzdGFibGVCeTogVW5pdFtdO1xyXG4gIEFzc2lzdHM6IHtcclxuICAgIFtpbmRleDogc3RyaW5nXToge1xyXG4gICAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgICB1bml0OiBVbml0O1xyXG4gICAgfTtcclxuICB9O1xyXG4gIEJ1aWxkUmF0ZTogbnVtYmVyO1xyXG4gIEFkamFjZW50YWJsZXM6IGFueVtdO1xyXG4gIEFkamFjZW50czogYW55W107XHJcbiAgVXBncmFkZXM6IGFueVtdO1xyXG4gIFF1ZXVlOiBVbml0W107XHJcbiAgUXVldWVObzogbnVtYmVyO1xyXG4gIHA6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoQnVpbGRpbmdQcm9wOiBSYXdCdWlsZGluZywgZGIpIHtcclxuICAgIGNvbnNvbGUubG9nKEJ1aWxkaW5nUHJvcCk7XHJcblxyXG4gICAgdGhpcy5GdWxsTmFtZSA9IEJ1aWxkaW5nUHJvcC5GdWxsTmFtZTtcclxuICAgIHRoaXMuU2ltcGxlTmFtZSA9IEJ1aWxkaW5nUHJvcC5TaW1wbGVOYW1lO1xyXG4gICAgdGhpcy5Db25zdHJ1Y3RhYmxlcyA9IEJ1aWxkaW5nUHJvcC5Db25zdHJ1Y3RhYmxlcyB8fCBbXTtcclxuXHJcbiAgICB0aGlzLlVuaXRJZCA9IEJ1aWxkaW5nUHJvcC5Vbml0TmFtZTtcclxuICAgIHRoaXMuQnVpbGRSYXRlID0gQnVpbGRpbmdQcm9wLkVjb25vbXkuQnVpbGRSYXRlO1xyXG4gICAgdGhpcy5Bc3Npc3RhYmxlQnkgPVxyXG4gICAgICBCdWlsZGluZ1Byb3AuU3RydWN0dXJlLkFzc2lzdGFibGVCeS5tYXAoKGlkKSA9PiBkYltpZF0pIHx8IFtdO1xyXG4gICAgdGhpcy5Bc3Npc3RzID1cclxuICAgICAgdGhpcy5Bc3Npc3RhYmxlQnkucmVkdWNlKChtLCB1bml0KSA9PiB7XHJcbiAgICAgICAgbVt1bml0LlVuaXROYW1lXSA9IHsgY291bnQ6IDAsIHVuaXQ6IHVuaXQgfTtcclxuICAgICAgICByZXR1cm4gbTtcclxuICAgICAgfSwge30pIHx8IHt9O1xyXG4gICAgdGhpcy5wID0gQnVpbGRpbmdQcm9wO1xyXG4gICAgdGhpcy5RdWV1ZSA9IFtdO1xyXG4gICAgdGhpcy5RdWV1ZU5vID0gMDtcclxuICAgIHRoaXMuQWRqYWNlbnRhYmxlcyA9IFtdO1xyXG4gICAgdGhpcy5BZGphY2VudHMgPSBbXTtcclxuICAgIHRoaXMuVXBncmFkZXMgPSBCdWlsZGluZ1Byb3AuVXBncmFkZXMgfHwgW107XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=