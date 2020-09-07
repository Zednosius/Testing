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
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, TotalBuildRate(building))), __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.resource_cell,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: _Constants__WEBPACK_IMPORTED_MODULE_4__["Icon"]("Mass"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, cost.mass)), __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.resource_cell,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: _Constants__WEBPACK_IMPORTED_MODULE_4__["Icon"]("Energy"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, cost.energy)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: _Constants__WEBPACK_IMPORTED_MODULE_4__["Icon"]("Hourglass"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), cost.buildticks / TotalBuildRate(building), "s"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "Avg Mass: ", AvgMassPerSec, ", Avg Energy: ", AvgEnergyPerSec))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
        lineNumber: 69,
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
      lineNumber: 86,
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
      lineNumber: 99,
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
      lineNumber: 111,
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
        lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy50c3giXSwibmFtZXMiOlsiQnVpbGRpbmciLCJidWlsZGluZyIsInNldEJ1aWxkaW5nIiwiZGIiLCJpbmRleCIsImNvc3QiLCJjYWxjdWxhdGVRdWV1ZUNvc3QiLCJRdWV1ZSIsImNvbnN0cnVjdGFibGVzIiwiQ29uc3RydWN0YWJsZXMiLCJjb25jYXQiLCJVcGdyYWRlcyIsImZpbHRlciIsImlkIiwibWFwIiwidSIsIlVuaXROYW1lIiwiaW5jbHVkZXMiLCJzb3J0IiwiRnVuYyIsIkF2Z01hc3NQZXJTZWMiLCJNYXNzUGVyU2VjIiwiTWFzc1NwZW50QnVpbGRpbmciLCJBdmdFbmVyZ3lQZXJTZWMiLCJFbmVyZ3lQZXJTZWMiLCJFbmVyZ3lTcGVudEJ1aWxkaW5nIiwic3R5bGVzIiwic29saWQiLCJyb3dfY29udGFpbmVyIiwiY29sdW1uX2NvbnRhaW5lciIsIlNpbXBsZU5hbWUiLCJyZXNvdXJjZV90YWJsZSIsInJlc291cmNlX2NlbGwiLCJDb25zdGFudHMiLCJUb3RhbEJ1aWxkUmF0ZSIsIm1hc3MiLCJlbmVyZ3kiLCJidWlsZHRpY2tzIiwidW5pdCIsIm5Vbml0Iiwia2V5IiwiUXVldWVObyIsIkFzc2lzdGFibGVCeSIsIkFzc2lzdHMiLCJuZXdBc3Npc3RzIiwiTWVtb2l6ZWRCdWlsZGluZyIsIlJlYWN0IiwibWVtbyIsIlVuaXRRdWV1ZSIsIlNldFF1ZXVlIiwiaSIsIm0iLCJxaSIsIkJ1aWxkUmF0ZSIsIkVjb25vbXkiLCJjb3VudCIsInJlZHVjZSIsImEiLCJiIiwicCIsIlByb2R1Y3Rpb25QZXJTZWNvbmRNYXNzIiwiTWFpbnRlbmFuY2VDb25zdW1wdGlvblBlclNlY29uZEVuZXJneSIsIlByb2R1Y3Rpb25QZXJTZWNvbmRFbmVyZ3kiLCJCdWlsZENvc3RNYXNzIiwiQnVpbGRDb3N0RW5lcmd5IiwiQnVpbGRUaW1lIiwicHYiLCJjdiIsIkJ1aWxkaW5nRGF0YSIsIkJ1aWxkaW5nUHJvcCIsImNvbnNvbGUiLCJsb2ciLCJGdWxsTmFtZSIsIlVuaXRJZCIsIlN0cnVjdHVyZSIsIkFkamFjZW50YWJsZXMiLCJBZGphY2VudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQVVHO0FBQUE7O0FBQUEsTUFUREMsUUFTQyxRQVREQSxRQVNDO0FBQUEsTUFSREMsV0FRQyxRQVJEQSxXQVFDO0FBQUEsTUFQREMsRUFPQyxRQVBEQSxFQU9DO0FBQUEsTUFOREMsS0FNQyxRQU5EQSxLQU1DO0FBQ0QsTUFBSUMsSUFBSSxHQUFHQyxrQkFBa0IsQ0FBQ0wsUUFBUSxDQUFDTSxLQUFWLENBQTdCO0FBRUEsTUFBSUMsY0FBYyxHQUFHUCxRQUFRLENBQUNRLGNBQVQsQ0FBd0JDLE1BQXhCLENBQ25CVCxRQUFRLENBQUNVLFFBQVQsQ0FBa0JDLE1BQWxCLENBQ0UsVUFBQ0MsRUFBRDtBQUFBLFdBQVEsQ0FBQ1osUUFBUSxDQUFDTSxLQUFULENBQWVPLEdBQWYsQ0FBbUIsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ0MsUUFBVDtBQUFBLEtBQW5CLEVBQXNDQyxRQUF0QyxDQUErQ0osRUFBL0MsQ0FBVDtBQUFBLEdBREYsQ0FEbUIsRUFLbEJDLEdBTGtCLENBS2QsVUFBQ0QsRUFBRDtBQUFBLFdBQVFWLEVBQUUsQ0FBQ1UsRUFBRCxDQUFWO0FBQUEsR0FMYyxFQU1sQkssSUFOa0IsQ0FNYkMsc0RBTmEsQ0FBckI7QUFRQSxNQUFJQyxhQUFhLEdBQUdDLFVBQVUsQ0FBQ3BCLFFBQUQsQ0FBVixHQUF1QnFCLGlCQUFpQixDQUFDckIsUUFBRCxFQUFXSSxJQUFYLENBQTVEO0FBRUEsTUFBSWtCLGVBQWUsR0FDakJDLFlBQVksQ0FBQ3ZCLFFBQUQsQ0FBWixHQUF5QndCLG1CQUFtQixDQUFDeEIsUUFBRCxFQUFXSSxJQUFYLENBRDlDO0FBR0EsU0FDRTtBQUFLLGFBQVMs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QUFhO0FBQ3BDYSxLQUFDLENBQUNiLElBQUksQ0FBQ3RCLFFBQU4sQ0FBRCxHQUFtQjtBQUFFdUMsV0FBSyxFQUFFLENBQVQ7QUFBWWpCLFVBQUksRUFBRUE7QUFBbEIsS0FBbkI7QUFDQSxXQUFPYSxDQUFQO0FBQ0QsR0FIRCxFQUdHLEVBSEgsS0FHVSxFQUpaO0FBS0EsT0FBS1EsQ0FBTCxHQUFTVSxZQUFUO0FBQ0EsT0FBSzlELEtBQUwsR0FBYSxFQUFiO0FBQ0EsT0FBS2tDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsT0FBS2tDLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsT0FBS2pFLFFBQUwsR0FBZ0IwRCxZQUFZLENBQUMxRCxRQUFiLElBQXlCLEVBQXpDO0FBQ0QsQ0ExQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzFkMGZiNTg3MmM5ODdiZTdlM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9CdWlsZGluZy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuaW1wb3J0ICogYXMgRnVuYyBmcm9tIFwiLi9GdW5jXCI7XHJcbmltcG9ydCBBc3Npc3RzIGZyb20gXCIuL0Fzc2lzdHNcIjtcclxuaW1wb3J0IFVuaXRCdXR0b24gZnJvbSBcIi4vVW5pdEJ1dHRvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVuaXQsIFJhd0J1aWxkaW5nIH0gZnJvbSBcIi4uL3R5cGVzY3JpcHQvVHlwZXNcIjtcclxuZnVuY3Rpb24gQnVpbGRpbmcoe1xyXG4gIGJ1aWxkaW5nLFxyXG4gIHNldEJ1aWxkaW5nLFxyXG4gIGRiLFxyXG4gIGluZGV4LFxyXG59OiB7XHJcbiAgYnVpbGRpbmc6IEJ1aWxkaW5nRGF0YTtcclxuICBzZXRCdWlsZGluZzogKGk6IG51bWJlciwgYjogQnVpbGRpbmdEYXRhKSA9PiB2b2lkO1xyXG4gIGRiOiBhbnk7XHJcbiAgaW5kZXg6IG51bWJlcjtcclxufSkge1xyXG4gIGxldCBjb3N0ID0gY2FsY3VsYXRlUXVldWVDb3N0KGJ1aWxkaW5nLlF1ZXVlKTtcclxuXHJcbiAgbGV0IGNvbnN0cnVjdGFibGVzID0gYnVpbGRpbmcuQ29uc3RydWN0YWJsZXMuY29uY2F0KFxyXG4gICAgYnVpbGRpbmcuVXBncmFkZXMuZmlsdGVyKFxyXG4gICAgICAoaWQpID0+ICFidWlsZGluZy5RdWV1ZS5tYXAoKHUpID0+IHUuVW5pdE5hbWUpLmluY2x1ZGVzKGlkKVxyXG4gICAgKVxyXG4gIClcclxuICAgIC5tYXAoKGlkKSA9PiBkYltpZF0pXHJcbiAgICAuc29ydChGdW5jLnVuaXRfaWNvbl9zb3J0ZXIpO1xyXG5cclxuICBsZXQgQXZnTWFzc1BlclNlYyA9IE1hc3NQZXJTZWMoYnVpbGRpbmcpIC0gTWFzc1NwZW50QnVpbGRpbmcoYnVpbGRpbmcsIGNvc3QpO1xyXG5cclxuICBsZXQgQXZnRW5lcmd5UGVyU2VjID1cclxuICAgIEVuZXJneVBlclNlYyhidWlsZGluZykgLSBFbmVyZ3lTcGVudEJ1aWxkaW5nKGJ1aWxkaW5nLCBjb3N0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29saWR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd19jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD57YnVpbGRpbmcuU2ltcGxlTmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzb3VyY2VfdGFibGV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzb3VyY2VfY2VsbH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Q29uc3RhbnRzLkljb24oXCJUaW1lXCIpfT48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntUb3RhbEJ1aWxkUmF0ZShidWlsZGluZyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzb3VyY2VfY2VsbH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Q29uc3RhbnRzLkljb24oXCJNYXNzXCIpfT48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntjb3N0Lm1hc3N9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzb3VyY2VfY2VsbH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Q29uc3RhbnRzLkljb24oXCJFbmVyZ3lcIil9PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2Nvc3QuZW5lcmd5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtDb25zdGFudHMuSWNvbihcIkhvdXJnbGFzc1wiKX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICB7Y29zdC5idWlsZHRpY2tzIC8gVG90YWxCdWlsZFJhdGUoYnVpbGRpbmcpfXNcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgQXZnIE1hc3M6IHtBdmdNYXNzUGVyU2VjfSwgQXZnIEVuZXJneToge0F2Z0VuZXJneVBlclNlY31cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Y29uc3RydWN0YWJsZXMubWFwKCh1bml0KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxVbml0QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHVuaXQ9e3VuaXR9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17dW5pdC5Vbml0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuVW5pdCA9IHsgLi4udW5pdCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIG5Vbml0LmtleSA9IGJ1aWxkaW5nLlF1ZXVlTm87XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QnVpbGRpbmcoaW5kZXgsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLmJ1aWxkaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgUXVldWU6IFsuLi5idWlsZGluZy5RdWV1ZSwgblVuaXRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgUXVldWVObzogYnVpbGRpbmcuUXVldWVObyArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEFzc2lzdHNcclxuICAgICAgICAgIEFzc2lzdGFibGVCeT17YnVpbGRpbmcuQXNzaXN0YWJsZUJ5fVxyXG4gICAgICAgICAgQXNzaXN0cz17YnVpbGRpbmcuQXNzaXN0c31cclxuICAgICAgICAgIFNldEFzc2lzdHM9eyhuZXdBc3Npc3RzOiB7XHJcbiAgICAgICAgICAgIFtpbmRleDogc3RyaW5nXToge1xyXG4gICAgICAgICAgICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgdW5pdDogVW5pdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgc2V0QnVpbGRpbmcoaW5kZXgsIHsgLi4uYnVpbGRpbmcsIEFzc2lzdHM6IG5ld0Fzc2lzdHMgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VW5pdFF1ZXVlXHJcbiAgICAgICAgUXVldWU9e2J1aWxkaW5nLlF1ZXVlfVxyXG4gICAgICAgIFNldFF1ZXVlPXsoUXVldWUpID0+IHNldEJ1aWxkaW5nKGluZGV4LCB7IC4uLmJ1aWxkaW5nLCBRdWV1ZTogUXVldWUgfSl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWVtb2l6ZWRCdWlsZGluZyA9IFJlYWN0Lm1lbW8oQnVpbGRpbmcpO1xyXG5cclxuZnVuY3Rpb24gVW5pdFF1ZXVlKHsgUXVldWUsIFNldFF1ZXVlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2xpZH0+XHJcbiAgICAgIHtRdWV1ZS5tYXAoKHVuaXQsIGkpID0+IChcclxuICAgICAgICA8VW5pdEJ1dHRvblxyXG4gICAgICAgICAgdW5pdD17dW5pdH1cclxuICAgICAgICAgIGtleT17dW5pdC5rZXl9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIFNldFF1ZXVlKFF1ZXVlLmZpbHRlcigobSwgcWkpID0+IGkgIT0gcWkpKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUb3RhbEJ1aWxkUmF0ZShidWlsZGluZzogQnVpbGRpbmdEYXRhKTogbnVtYmVyIHtcclxuICByZXR1cm4gKFxyXG4gICAgYnVpbGRpbmcuQnVpbGRSYXRlICtcclxuICAgICAgYnVpbGRpbmcuQXNzaXN0YWJsZUJ5Lm1hcChcclxuICAgICAgICAodW5pdDogVW5pdCkgPT5cclxuICAgICAgICAgIHVuaXQuRWNvbm9teS5CdWlsZFJhdGUgKiBidWlsZGluZy5Bc3Npc3RzW3VuaXQuVW5pdE5hbWVdLmNvdW50XHJcbiAgICAgICkucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSArIGIsIDApIHx8IDBcclxuICApO1xyXG59XHJcbmZ1bmN0aW9uIE1hc3NQZXJTZWMoYnVpbGRpbmc6IEJ1aWxkaW5nRGF0YSk6IG51bWJlciB7XHJcbiAgcmV0dXJuIGJ1aWxkaW5nLnAuRWNvbm9teS5Qcm9kdWN0aW9uUGVyU2Vjb25kTWFzcyB8fCAwO1xyXG59XHJcbmZ1bmN0aW9uIEVuZXJneVBlclNlYyhidWlsZGluZzogQnVpbGRpbmdEYXRhKTogbnVtYmVyIHtcclxuICByZXR1cm4gKFxyXG4gICAgKC1idWlsZGluZy5wLkVjb25vbXkuTWFpbnRlbmFuY2VDb25zdW1wdGlvblBlclNlY29uZEVuZXJneSB8fCAwKSArXHJcbiAgICAoYnVpbGRpbmcucC5FY29ub215LlByb2R1Y3Rpb25QZXJTZWNvbmRFbmVyZ3kgfHwgMClcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNYXNzU3BlbnRCdWlsZGluZyhcclxuICBidWlsZGluZzogQnVpbGRpbmdEYXRhLFxyXG4gIGNvc3Q6IHsgbWFzczogbnVtYmVyOyBlbmVyZ3k6IG51bWJlcjsgYnVpbGR0aWNrczogbnVtYmVyIH1cclxuKTogbnVtYmVyIHtcclxuICBpZiAoY29zdC5idWlsZHRpY2tzID4gMCkge1xyXG4gICAgLy8gUHJlcGFyZSBmb3IgYWRqYWNlbnRzIHdoaWNoIG9ubHkgYWZmZWN0cyB0aGUgY29zdCBmcm9tIHRoZSBiYXNlIGJ1aWxkaW5ncyBidWlsZHJhdGUuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAoY29zdC5tYXNzIC8gY29zdC5idWlsZHRpY2tzKSAqIGJ1aWxkaW5nLkJ1aWxkUmF0ZSArXHJcbiAgICAgIChjb3N0Lm1hc3MgLyBjb3N0LmJ1aWxkdGlja3MpICpcclxuICAgICAgICAoVG90YWxCdWlsZFJhdGUoYnVpbGRpbmcpIC0gYnVpbGRpbmcuQnVpbGRSYXRlKVxyXG4gICAgKTtcclxuICB9IGVsc2UgcmV0dXJuIDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEVuZXJneVNwZW50QnVpbGRpbmcoXHJcbiAgYnVpbGRpbmc6IEJ1aWxkaW5nRGF0YSxcclxuICBjb3N0OiB7IG1hc3M6IG51bWJlcjsgZW5lcmd5OiBudW1iZXI7IGJ1aWxkdGlja3M6IG51bWJlciB9XHJcbik6IG51bWJlciB7XHJcbiAgaWYgKGNvc3QuYnVpbGR0aWNrcyA+IDApIHtcclxuICAgIC8vIFByZXBhcmUgZm9yIGFkamFjZW50cyB3aGljaCBvbmx5IGFmZmVjdHMgdGhlIGNvc3QgZnJvbSB0aGUgYmFzZSBidWlsZGluZ3MgYnVpbGRyYXRlLlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgKGNvc3QuZW5lcmd5IC8gY29zdC5idWlsZHRpY2tzKSAqIGJ1aWxkaW5nLkJ1aWxkUmF0ZSArXHJcbiAgICAgIChjb3N0LmVuZXJneSAvIGNvc3QuYnVpbGR0aWNrcykgKlxyXG4gICAgICAgIChUb3RhbEJ1aWxkUmF0ZShidWlsZGluZykgLSBidWlsZGluZy5CdWlsZFJhdGUpXHJcbiAgICApO1xyXG4gIH0gZWxzZSByZXR1cm4gMDtcclxufVxyXG5mdW5jdGlvbiBjYWxjdWxhdGVRdWV1ZUNvc3QoUXVldWU6IFVuaXRbXSkge1xyXG4gIHJldHVybiBRdWV1ZS5tYXAoKHVuaXQpID0+ICh7XHJcbiAgICBtYXNzOiB1bml0LkVjb25vbXkuQnVpbGRDb3N0TWFzcyxcclxuICAgIGVuZXJneTogdW5pdC5FY29ub215LkJ1aWxkQ29zdEVuZXJneSxcclxuICAgIGJ1aWxkdGlja3M6IHVuaXQuRWNvbm9teS5CdWlsZFRpbWUsXHJcbiAgfSkpLnJlZHVjZShcclxuICAgIChwdiwgY3YpID0+ICh7XHJcbiAgICAgIG1hc3M6IHB2Lm1hc3MgKyBjdi5tYXNzLFxyXG4gICAgICBlbmVyZ3k6IHB2LmVuZXJneSArIGN2LmVuZXJneSxcclxuICAgICAgYnVpbGR0aWNrczogcHYuYnVpbGR0aWNrcyArIGN2LmJ1aWxkdGlja3MsXHJcbiAgICB9KSxcclxuICAgIHsgbWFzczogMCwgZW5lcmd5OiAwLCBidWlsZHRpY2tzOiAwIH1cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnVpbGRpbmdEYXRhIHtcclxuICBVbml0SWQ6IHN0cmluZztcclxuICBGdWxsTmFtZTogc3RyaW5nO1xyXG4gIFNpbXBsZU5hbWU6IHN0cmluZztcclxuICBDb25zdHJ1Y3RhYmxlczogYW55W107XHJcbiAgQXNzaXN0YWJsZUJ5OiBVbml0W107XHJcbiAgQXNzaXN0czoge1xyXG4gICAgW2luZGV4OiBzdHJpbmddOiB7XHJcbiAgICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICAgIHVuaXQ6IFVuaXQ7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgQnVpbGRSYXRlOiBudW1iZXI7XHJcbiAgQWRqYWNlbnRhYmxlczogYW55W107XHJcbiAgQWRqYWNlbnRzOiBhbnlbXTtcclxuICBVcGdyYWRlczogYW55W107XHJcbiAgUXVldWU6IFVuaXRbXTtcclxuICBRdWV1ZU5vOiBudW1iZXI7XHJcbiAgcDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihCdWlsZGluZ1Byb3A6IFJhd0J1aWxkaW5nLCBkYikge1xyXG4gICAgY29uc29sZS5sb2coQnVpbGRpbmdQcm9wKTtcclxuXHJcbiAgICB0aGlzLkZ1bGxOYW1lID0gQnVpbGRpbmdQcm9wLkZ1bGxOYW1lO1xyXG4gICAgdGhpcy5TaW1wbGVOYW1lID0gQnVpbGRpbmdQcm9wLlNpbXBsZU5hbWU7XHJcbiAgICB0aGlzLkNvbnN0cnVjdGFibGVzID0gQnVpbGRpbmdQcm9wLkNvbnN0cnVjdGFibGVzIHx8IFtdO1xyXG5cclxuICAgIHRoaXMuVW5pdElkID0gQnVpbGRpbmdQcm9wLlVuaXROYW1lO1xyXG4gICAgdGhpcy5CdWlsZFJhdGUgPSBCdWlsZGluZ1Byb3AuRWNvbm9teS5CdWlsZFJhdGU7XHJcbiAgICB0aGlzLkFzc2lzdGFibGVCeSA9XHJcbiAgICAgIEJ1aWxkaW5nUHJvcC5TdHJ1Y3R1cmUuQXNzaXN0YWJsZUJ5Lm1hcCgoaWQpID0+IGRiW2lkXSkgfHwgW107XHJcbiAgICB0aGlzLkFzc2lzdHMgPVxyXG4gICAgICB0aGlzLkFzc2lzdGFibGVCeS5yZWR1Y2UoKG0sIHVuaXQpID0+IHtcclxuICAgICAgICBtW3VuaXQuVW5pdE5hbWVdID0geyBjb3VudDogMCwgdW5pdDogdW5pdCB9O1xyXG4gICAgICAgIHJldHVybiBtO1xyXG4gICAgICB9LCB7fSkgfHwge307XHJcbiAgICB0aGlzLnAgPSBCdWlsZGluZ1Byb3A7XHJcbiAgICB0aGlzLlF1ZXVlID0gW107XHJcbiAgICB0aGlzLlF1ZXVlTm8gPSAwO1xyXG4gICAgdGhpcy5BZGphY2VudGFibGVzID0gW107XHJcbiAgICB0aGlzLkFkamFjZW50cyA9IFtdO1xyXG4gICAgdGhpcy5VcGdyYWRlcyA9IEJ1aWxkaW5nUHJvcC5VcGdyYWRlcyB8fCBbXTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==