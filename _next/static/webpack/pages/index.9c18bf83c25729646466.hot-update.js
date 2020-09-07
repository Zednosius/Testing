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
    className: "resource_table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy50c3giXSwibmFtZXMiOlsiQnVpbGRpbmciLCJidWlsZGluZyIsInNldEJ1aWxkaW5nIiwiZGIiLCJpbmRleCIsImNvc3QiLCJjYWxjdWxhdGVRdWV1ZUNvc3QiLCJRdWV1ZSIsImNvbnN0cnVjdGFibGVzIiwiQ29uc3RydWN0YWJsZXMiLCJjb25jYXQiLCJVcGdyYWRlcyIsImZpbHRlciIsImlkIiwibWFwIiwidSIsIlVuaXROYW1lIiwiaW5jbHVkZXMiLCJzb3J0IiwiRnVuYyIsIkF2Z01hc3NQZXJTZWMiLCJNYXNzUGVyU2VjIiwiTWFzc1NwZW50QnVpbGRpbmciLCJBdmdFbmVyZ3lQZXJTZWMiLCJFbmVyZ3lQZXJTZWMiLCJFbmVyZ3lTcGVudEJ1aWxkaW5nIiwic3R5bGVzIiwic29saWQiLCJyb3dfY29udGFpbmVyIiwiY29sdW1uX2NvbnRhaW5lciIsIlNpbXBsZU5hbWUiLCJDb25zdGFudHMiLCJwIiwiRWNvbm9teSIsIkJ1aWxkUmF0ZSIsIlRvdGFsQnVpbGRSYXRlIiwibWFzcyIsImVuZXJneSIsImJ1aWxkdGlja3MiLCJ1bml0IiwiblVuaXQiLCJrZXkiLCJRdWV1ZU5vIiwiQXNzaXN0YWJsZUJ5IiwiQXNzaXN0cyIsIm5ld0Fzc2lzdHMiLCJNZW1vaXplZEJ1aWxkaW5nIiwiUmVhY3QiLCJtZW1vIiwiVW5pdFF1ZXVlIiwiU2V0UXVldWUiLCJpIiwibSIsInFpIiwiY291bnQiLCJyZWR1Y2UiLCJhIiwiYiIsIlByb2R1Y3Rpb25QZXJTZWNvbmRNYXNzIiwiTWFpbnRlbmFuY2VDb25zdW1wdGlvblBlclNlY29uZEVuZXJneSIsIlByb2R1Y3Rpb25QZXJTZWNvbmRFbmVyZ3kiLCJCdWlsZENvc3RNYXNzIiwiQnVpbGRDb3N0RW5lcmd5IiwiQnVpbGRUaW1lIiwicHYiLCJjdiIsIkJ1aWxkaW5nRGF0YSIsIkJ1aWxkaW5nUHJvcCIsImNvbnNvbGUiLCJsb2ciLCJGdWxsTmFtZSIs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LFVBQS9CO0FBQ0EsT0FBS3JCLGNBQUwsR0FBc0IwRCxZQUFZLENBQUMxRCxjQUFiLElBQStCLEVBQXJEO0FBRUEsT0FBSzhELE1BQUwsR0FBY0osWUFBWSxDQUFDbkQsUUFBM0I7QUFDQSxPQUFLa0IsU0FBTCxHQUFpQmlDLFlBQVksQ0FBQ2xDLE9BQWIsQ0FBcUJDLFNBQXRDO0FBQ0EsT0FBS1MsWUFBTCxHQUNFd0IsWUFBWSxDQUFDSyxTQUFiLENBQXVCN0IsWUFBdkIsQ0FBb0M3QixHQUFwQyxDQUF3QyxVQUFDRCxFQUFEO0FBQUEsV0FBUVYsRUFBRSxDQUFDVSxFQUFELENBQVY7QUFBQSxHQUF4QyxLQUEyRCxFQUQ3RDtBQUVBLE9BQUsrQixPQUFMLEdBQ0UsS0FBS0QsWUFBTCxDQUFrQlksTUFBbEIsQ0FBeUIsVUFBQ0gsQ0FBRCxFQUFJYixJQUFKLEVBQWE7QUFDcENhLEtBQUMsQ0FBQ2IsSUFBSSxDQUFDdkIsUUFBTixDQUFELEdBQW1CO0FBQUVzQyxXQUFLLEVBQUUsQ0FBVDtBQUFZZixVQUFJLEVBQUVBO0FBQWxCLEtBQW5CO0FBQ0EsV0FBT2EsQ0FBUDtBQUNELEdBSEQsRUFHRyxFQUhILEtBR1UsRUFKWjtBQUtBLE9BQUtwQixDQUFMLEdBQVNtQyxZQUFUO0FBQ0EsT0FBSzVELEtBQUwsR0FBYSxFQUFiO0FBQ0EsT0FBS21DLE9BQUwsR0FBZSxDQUFmO0FBQ0EsT0FBSytCLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsT0FBSy9ELFFBQUwsR0FBZ0J3RCxZQUFZLENBQUN4RCxRQUFiLElBQXlCLEVBQXpDO0FBQ0QsQ0ExQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWMxOGJmODNjMjU3Mjk2NDY0NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9CdWlsZGluZy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuaW1wb3J0ICogYXMgRnVuYyBmcm9tIFwiLi9GdW5jXCI7XHJcbmltcG9ydCBBc3Npc3RzIGZyb20gXCIuL0Fzc2lzdHNcIjtcclxuaW1wb3J0IFVuaXRCdXR0b24gZnJvbSBcIi4vVW5pdEJ1dHRvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVuaXQsIFJhd0J1aWxkaW5nIH0gZnJvbSBcIi4uL3R5cGVzY3JpcHQvVHlwZXNcIjtcclxuZnVuY3Rpb24gQnVpbGRpbmcoe1xyXG4gIGJ1aWxkaW5nLFxyXG4gIHNldEJ1aWxkaW5nLFxyXG4gIGRiLFxyXG4gIGluZGV4LFxyXG59OiB7XHJcbiAgYnVpbGRpbmc6IEJ1aWxkaW5nRGF0YTtcclxuICBzZXRCdWlsZGluZzogKGk6IG51bWJlciwgYjogQnVpbGRpbmdEYXRhKSA9PiB2b2lkO1xyXG4gIGRiOiBhbnk7XHJcbiAgaW5kZXg6IG51bWJlcjtcclxufSkge1xyXG4gIGxldCBjb3N0ID0gY2FsY3VsYXRlUXVldWVDb3N0KGJ1aWxkaW5nLlF1ZXVlKTtcclxuXHJcbiAgbGV0IGNvbnN0cnVjdGFibGVzID0gYnVpbGRpbmcuQ29uc3RydWN0YWJsZXMuY29uY2F0KFxyXG4gICAgYnVpbGRpbmcuVXBncmFkZXMuZmlsdGVyKFxyXG4gICAgICAoaWQpID0+ICFidWlsZGluZy5RdWV1ZS5tYXAoKHUpID0+IHUuVW5pdE5hbWUpLmluY2x1ZGVzKGlkKVxyXG4gICAgKVxyXG4gIClcclxuICAgIC5tYXAoKGlkKSA9PiBkYltpZF0pXHJcbiAgICAuc29ydChGdW5jLnVuaXRfaWNvbl9zb3J0ZXIpO1xyXG5cclxuICBsZXQgQXZnTWFzc1BlclNlYyA9IE1hc3NQZXJTZWMoYnVpbGRpbmcpIC0gTWFzc1NwZW50QnVpbGRpbmcoYnVpbGRpbmcsIGNvc3QpO1xyXG5cclxuICBsZXQgQXZnRW5lcmd5UGVyU2VjID1cclxuICAgIEVuZXJneVBlclNlYyhidWlsZGluZykgLSBFbmVyZ3lTcGVudEJ1aWxkaW5nKGJ1aWxkaW5nLCBjb3N0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29saWR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd19jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD57YnVpbGRpbmcuU2ltcGxlTmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzb3VyY2VfdGFibGVcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e0NvbnN0YW50cy5JY29uKFwiVGltZVwiKX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICB7YnVpbGRpbmcucC5FY29ub215LkJ1aWxkUmF0ZX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFRvdGFsIEJ1aWxkIFJhdGU6IHtUb3RhbEJ1aWxkUmF0ZShidWlsZGluZyl9XHJcbiAgICAgICAgICAgICAgICBUb3RhbCBNYXNzOiB7Y29zdC5tYXNzfSwgVG90YWwgRW5lcmd5Ontjb3N0LmVuZXJneX0sIFRvdGFsIEJ1aWxkXHJcbiAgICAgICAgICAgICAgICB0aWNrczpcclxuICAgICAgICAgICAgICAgIHtjb3N0LmJ1aWxkdGlja3N9LCBUb3RhbCBidWlsZCB0aW1lOntcIiBcIn1cclxuICAgICAgICAgICAgICAgIHtjb3N0LmJ1aWxkdGlja3MgLyBUb3RhbEJ1aWxkUmF0ZShidWlsZGluZyl9c1xyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgQXZnIE1hc3M6IHtBdmdNYXNzUGVyU2VjfSwgQXZnIEVuZXJneToge0F2Z0VuZXJneVBlclNlY31cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Y29uc3RydWN0YWJsZXMubWFwKCh1bml0KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxVbml0QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHVuaXQ9e3VuaXR9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17dW5pdC5Vbml0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuVW5pdCA9IHsgLi4udW5pdCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIG5Vbml0LmtleSA9IGJ1aWxkaW5nLlF1ZXVlTm87XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QnVpbGRpbmcoaW5kZXgsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLmJ1aWxkaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgUXVldWU6IFsuLi5idWlsZGluZy5RdWV1ZSwgblVuaXRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgUXVldWVObzogYnVpbGRpbmcuUXVldWVObyArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEFzc2lzdHNcclxuICAgICAgICAgIEFzc2lzdGFibGVCeT17YnVpbGRpbmcuQXNzaXN0YWJsZUJ5fVxyXG4gICAgICAgICAgQXNzaXN0cz17YnVpbGRpbmcuQXNzaXN0c31cclxuICAgICAgICAgIFNldEFzc2lzdHM9eyhuZXdBc3Npc3RzOiB7XHJcbiAgICAgICAgICAgIFtpbmRleDogc3RyaW5nXToge1xyXG4gICAgICAgICAgICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgdW5pdDogVW5pdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgc2V0QnVpbGRpbmcoaW5kZXgsIHsgLi4uYnVpbGRpbmcsIEFzc2lzdHM6IG5ld0Fzc2lzdHMgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VW5pdFF1ZXVlXHJcbiAgICAgICAgUXVldWU9e2J1aWxkaW5nLlF1ZXVlfVxyXG4gICAgICAgIFNldFF1ZXVlPXsoUXVldWUpID0+IHNldEJ1aWxkaW5nKGluZGV4LCB7IC4uLmJ1aWxkaW5nLCBRdWV1ZTogUXVldWUgfSl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWVtb2l6ZWRCdWlsZGluZyA9IFJlYWN0Lm1lbW8oQnVpbGRpbmcpO1xyXG5cclxuZnVuY3Rpb24gVW5pdFF1ZXVlKHsgUXVldWUsIFNldFF1ZXVlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2xpZH0+XHJcbiAgICAgIHtRdWV1ZS5tYXAoKHVuaXQsIGkpID0+IChcclxuICAgICAgICA8VW5pdEJ1dHRvblxyXG4gICAgICAgICAgdW5pdD17dW5pdH1cclxuICAgICAgICAgIGtleT17dW5pdC5rZXl9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIFNldFF1ZXVlKFF1ZXVlLmZpbHRlcigobSwgcWkpID0+IGkgIT0gcWkpKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUb3RhbEJ1aWxkUmF0ZShidWlsZGluZzogQnVpbGRpbmdEYXRhKTogbnVtYmVyIHtcclxuICByZXR1cm4gKFxyXG4gICAgYnVpbGRpbmcuQnVpbGRSYXRlICtcclxuICAgICAgYnVpbGRpbmcuQXNzaXN0YWJsZUJ5Lm1hcChcclxuICAgICAgICAodW5pdDogVW5pdCkgPT5cclxuICAgICAgICAgIHVuaXQuRWNvbm9teS5CdWlsZFJhdGUgKiBidWlsZGluZy5Bc3Npc3RzW3VuaXQuVW5pdE5hbWVdLmNvdW50XHJcbiAgICAgICkucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSArIGIsIDApIHx8IDBcclxuICApO1xyXG59XHJcbmZ1bmN0aW9uIE1hc3NQZXJTZWMoYnVpbGRpbmc6IEJ1aWxkaW5nRGF0YSk6IG51bWJlciB7XHJcbiAgcmV0dXJuIGJ1aWxkaW5nLnAuRWNvbm9teS5Qcm9kdWN0aW9uUGVyU2Vjb25kTWFzcyB8fCAwO1xyXG59XHJcbmZ1bmN0aW9uIEVuZXJneVBlclNlYyhidWlsZGluZzogQnVpbGRpbmdEYXRhKTogbnVtYmVyIHtcclxuICByZXR1cm4gKFxyXG4gICAgKC1idWlsZGluZy5wLkVjb25vbXkuTWFpbnRlbmFuY2VDb25zdW1wdGlvblBlclNlY29uZEVuZXJneSB8fCAwKSArXHJcbiAgICAoYnVpbGRpbmcucC5FY29ub215LlByb2R1Y3Rpb25QZXJTZWNvbmRFbmVyZ3kgfHwgMClcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNYXNzU3BlbnRCdWlsZGluZyhcclxuICBidWlsZGluZzogQnVpbGRpbmdEYXRhLFxyXG4gIGNvc3Q6IHsgbWFzczogbnVtYmVyOyBlbmVyZ3k6IG51bWJlcjsgYnVpbGR0aWNrczogbnVtYmVyIH1cclxuKTogbnVtYmVyIHtcclxuICBpZiAoY29zdC5idWlsZHRpY2tzID4gMCkge1xyXG4gICAgLy8gUHJlcGFyZSBmb3IgYWRqYWNlbnRzIHdoaWNoIG9ubHkgYWZmZWN0cyB0aGUgY29zdCBmcm9tIHRoZSBiYXNlIGJ1aWxkaW5ncyBidWlsZHJhdGUuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAoY29zdC5tYXNzIC8gY29zdC5idWlsZHRpY2tzKSAqIGJ1aWxkaW5nLkJ1aWxkUmF0ZSArXHJcbiAgICAgIChjb3N0Lm1hc3MgLyBjb3N0LmJ1aWxkdGlja3MpICpcclxuICAgICAgICAoVG90YWxCdWlsZFJhdGUoYnVpbGRpbmcpIC0gYnVpbGRpbmcuQnVpbGRSYXRlKVxyXG4gICAgKTtcclxuICB9IGVsc2UgcmV0dXJuIDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEVuZXJneVNwZW50QnVpbGRpbmcoXHJcbiAgYnVpbGRpbmc6IEJ1aWxkaW5nRGF0YSxcclxuICBjb3N0OiB7IG1hc3M6IG51bWJlcjsgZW5lcmd5OiBudW1iZXI7IGJ1aWxkdGlja3M6IG51bWJlciB9XHJcbik6IG51bWJlciB7XHJcbiAgaWYgKGNvc3QuYnVpbGR0aWNrcyA+IDApIHtcclxuICAgIC8vIFByZXBhcmUgZm9yIGFkamFjZW50cyB3aGljaCBvbmx5IGFmZmVjdHMgdGhlIGNvc3QgZnJvbSB0aGUgYmFzZSBidWlsZGluZ3MgYnVpbGRyYXRlLlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgKGNvc3QuZW5lcmd5IC8gY29zdC5idWlsZHRpY2tzKSAqIGJ1aWxkaW5nLkJ1aWxkUmF0ZSArXHJcbiAgICAgIChjb3N0LmVuZXJneSAvIGNvc3QuYnVpbGR0aWNrcykgKlxyXG4gICAgICAgIChUb3RhbEJ1aWxkUmF0ZShidWlsZGluZykgLSBidWlsZGluZy5CdWlsZFJhdGUpXHJcbiAgICApO1xyXG4gIH0gZWxzZSByZXR1cm4gMDtcclxufVxyXG5mdW5jdGlvbiBjYWxjdWxhdGVRdWV1ZUNvc3QoUXVldWU6IFVuaXRbXSkge1xyXG4gIHJldHVybiBRdWV1ZS5tYXAoKHVuaXQpID0+ICh7XHJcbiAgICBtYXNzOiB1bml0LkVjb25vbXkuQnVpbGRDb3N0TWFzcyxcclxuICAgIGVuZXJneTogdW5pdC5FY29ub215LkJ1aWxkQ29zdEVuZXJneSxcclxuICAgIGJ1aWxkdGlja3M6IHVuaXQuRWNvbm9teS5CdWlsZFRpbWUsXHJcbiAgfSkpLnJlZHVjZShcclxuICAgIChwdiwgY3YpID0+ICh7XHJcbiAgICAgIG1hc3M6IHB2Lm1hc3MgKyBjdi5tYXNzLFxyXG4gICAgICBlbmVyZ3k6IHB2LmVuZXJneSArIGN2LmVuZXJneSxcclxuICAgICAgYnVpbGR0aWNrczogcHYuYnVpbGR0aWNrcyArIGN2LmJ1aWxkdGlja3MsXHJcbiAgICB9KSxcclxuICAgIHsgbWFzczogMCwgZW5lcmd5OiAwLCBidWlsZHRpY2tzOiAwIH1cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnVpbGRpbmdEYXRhIHtcclxuICBVbml0SWQ6IHN0cmluZztcclxuICBGdWxsTmFtZTogc3RyaW5nO1xyXG4gIFNpbXBsZU5hbWU6IHN0cmluZztcclxuICBDb25zdHJ1Y3RhYmxlczogYW55W107XHJcbiAgQXNzaXN0YWJsZUJ5OiBVbml0W107XHJcbiAgQXNzaXN0czoge1xyXG4gICAgW2luZGV4OiBzdHJpbmddOiB7XHJcbiAgICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICAgIHVuaXQ6IFVuaXQ7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgQnVpbGRSYXRlOiBudW1iZXI7XHJcbiAgQWRqYWNlbnRhYmxlczogYW55W107XHJcbiAgQWRqYWNlbnRzOiBhbnlbXTtcclxuICBVcGdyYWRlczogYW55W107XHJcbiAgUXVldWU6IFVuaXRbXTtcclxuICBRdWV1ZU5vOiBudW1iZXI7XHJcbiAgcDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihCdWlsZGluZ1Byb3A6IFJhd0J1aWxkaW5nLCBkYikge1xyXG4gICAgY29uc29sZS5sb2coQnVpbGRpbmdQcm9wKTtcclxuXHJcbiAgICB0aGlzLkZ1bGxOYW1lID0gQnVpbGRpbmdQcm9wLkZ1bGxOYW1lO1xyXG4gICAgdGhpcy5TaW1wbGVOYW1lID0gQnVpbGRpbmdQcm9wLlNpbXBsZU5hbWU7XHJcbiAgICB0aGlzLkNvbnN0cnVjdGFibGVzID0gQnVpbGRpbmdQcm9wLkNvbnN0cnVjdGFibGVzIHx8IFtdO1xyXG5cclxuICAgIHRoaXMuVW5pdElkID0gQnVpbGRpbmdQcm9wLlVuaXROYW1lO1xyXG4gICAgdGhpcy5CdWlsZFJhdGUgPSBCdWlsZGluZ1Byb3AuRWNvbm9teS5CdWlsZFJhdGU7XHJcbiAgICB0aGlzLkFzc2lzdGFibGVCeSA9XHJcbiAgICAgIEJ1aWxkaW5nUHJvcC5TdHJ1Y3R1cmUuQXNzaXN0YWJsZUJ5Lm1hcCgoaWQpID0+IGRiW2lkXSkgfHwgW107XHJcbiAgICB0aGlzLkFzc2lzdHMgPVxyXG4gICAgICB0aGlzLkFzc2lzdGFibGVCeS5yZWR1Y2UoKG0sIHVuaXQpID0+IHtcclxuICAgICAgICBtW3VuaXQuVW5pdE5hbWVdID0geyBjb3VudDogMCwgdW5pdDogdW5pdCB9O1xyXG4gICAgICAgIHJldHVybiBtO1xyXG4gICAgICB9LCB7fSkgfHwge307XHJcbiAgICB0aGlzLnAgPSBCdWlsZGluZ1Byb3A7XHJcbiAgICB0aGlzLlF1ZXVlID0gW107XHJcbiAgICB0aGlzLlF1ZXVlTm8gPSAwO1xyXG4gICAgdGhpcy5BZGphY2VudGFibGVzID0gW107XHJcbiAgICB0aGlzLkFkamFjZW50cyA9IFtdO1xyXG4gICAgdGhpcy5VcGdyYWRlcyA9IEJ1aWxkaW5nUHJvcC5VcGdyYWRlcyB8fCBbXTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==