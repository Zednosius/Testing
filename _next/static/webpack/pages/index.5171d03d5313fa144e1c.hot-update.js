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
  }, cost.energy)), cost.buildticks, ", Total build time:", " ", cost.buildticks / TotalBuildRate(building), "s", __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "Avg Mass: ", AvgMassPerSec, ", Avg Energy: ", AvgEnergyPerSec))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
        lineNumber: 66,
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
      lineNumber: 83,
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
      lineNumber: 96,
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
      lineNumber: 108,
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
        lineNumber: 110,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy50c3giXSwibmFtZXMiOlsiQnVpbGRpbmciLCJidWlsZGluZyIsInNldEJ1aWxkaW5nIiwiZGIiLCJpbmRleCIsImNvc3QiLCJjYWxjdWxhdGVRdWV1ZUNvc3QiLCJRdWV1ZSIsImNvbnN0cnVjdGFibGVzIiwiQ29uc3RydWN0YWJsZXMiLCJjb25jYXQiLCJVcGdyYWRlcyIsImZpbHRlciIsImlkIiwibWFwIiwidSIsIlVuaXROYW1lIiwiaW5jbHVkZXMiLCJzb3J0IiwiRnVuYyIsIkF2Z01hc3NQZXJTZWMiLCJNYXNzUGVyU2VjIiwiTWFzc1NwZW50QnVpbGRpbmciLCJBdmdFbmVyZ3lQZXJTZWMiLCJFbmVyZ3lQZXJTZWMiLCJFbmVyZ3lTcGVudEJ1aWxkaW5nIiwic3R5bGVzIiwic29saWQiLCJyb3dfY29udGFpbmVyIiwiY29sdW1uX2NvbnRhaW5lciIsIlNpbXBsZU5hbWUiLCJyZXNvdXJjZV90YWJsZSIsInJlc291cmNlX2NlbGwiLCJDb25zdGFudHMiLCJUb3RhbEJ1aWxkUmF0ZSIsIm1hc3MiLCJlbmVyZ3kiLCJidWlsZHRpY2tzIiwidW5pdCIsIm5Vbml0Iiwia2V5IiwiUXVldWVObyIsIkFzc2lzdGFibGVCeSIsIkFzc2lzdHMiLCJuZXdBc3Npc3RzIiwiTWVtb2l6ZWRCdWlsZGluZyIsIlJlYWN0IiwibWVtbyIsIlVuaXRRdWV1ZSIsIlNldFF1ZXVlIiwiaSIsIm0iLCJxaSIsIkJ1aWxkUmF0ZSIsIkVjb25vbXkiLCJjb3VudCIsInJlZHVjZSIsImEiLCJiIiwicCIsIlByb2R1Y3Rpb25QZXJTZWNvbmRNYXNzIiwiTWFpbnRlbmFuY2VDb25zdW1wdGlvblBlclNlY29uZEVuZXJneSIsIlByb2R1Y3Rpb25QZXJTZWNvbmRFbmVyZ3kiLCJCdWlsZENvc3RNYXNzIiwiQnVpbGRDb3N0RW5lcmd5IiwiQnVpbGRUaW1lIiwicHYiLCJjdiIsIkJ1aWxkaW5nRGF0YSIsIkJ1aWxkaW5nUHJvcCIsImNvbnNvbGUiLCJsb2ciLCJGdWxsTmFtZSIsIlVuaXRJZCIsIlN0cnVjdHVyZSIsIkFkamFjZW50YWJsZXMiLCJBZGphY2VudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQVVHO0FBQUE7O0FBQUEsTUFUREMsUUFTQyxRQVREQSxRQVNDO0FBQUEsTUFSREMsV0FRQyxRQVJEQSxXQVFDO0FBQUEsTUFQREMsRUFPQyxRQVBEQSxFQU9DO0FBQUEsTUFOREMsS0FNQyxRQU5EQSxLQU1DO0FBQ0QsTUFBSUMsSUFBSSxHQUFHQyxrQkFBa0IsQ0FBQ0wsUUFBUSxDQUFDTSxLQUFWLENBQTdCO0FBRUEsTUFBSUMsY0FBYyxHQUFHUCxRQUFRLENBQUNRLGNBQVQsQ0FBd0JDLE1BQXhCLENBQ25CVCxRQUFRLENBQUNVLFFBQVQsQ0FBa0JDLE1BQWxCLENBQ0UsVUFBQ0MsRUFBRDtBQUFBLFdBQVEsQ0FBQ1osUUFBUSxDQUFDTSxLQUFULENBQWVPLEdBQWYsQ0FBbUIsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ0MsUUFBVDtBQUFBLEtBQW5CLEVBQXNDQyxRQUF0QyxDQUErQ0osRUFBL0MsQ0FBVDtBQUFBLEdBREYsQ0FEbUIsRUFLbEJDLEdBTGtCLENBS2QsVUFBQ0QsRUFBRDtBQUFBLFdBQVFWLEVBQUUsQ0FBQ1UsRUFBRCxDQUFWO0FBQUEsR0FMYyxFQU1sQkssSUFOa0IsQ0FNYkMsc0RBTmEsQ0FBckI7QUFRQSxNQUFJQyxhQUFhLEdBQUdDLFVBQVUsQ0FBQ3BCLFFBQUQsQ0FBVixHQUF1QnFCLGlCQUFpQixDQUFDckIsUUFBRCxFQUFXSSxJQUFYLENBQTVEO0FBRUEsTUFBSWtCLGVBQWUsR0FDakJDLFlBQVksQ0FBQ3ZCLFFBQUQsQ0FBWixHQUF5QndCLG1CQUFtQixDQUFDeEIsUUFBRCxFQUFXSSxJQUFYLENBRDlDO0FBR0EsU0FDRTtBQUFLLGFBQVMsRUFBRXFCLGtFQUFNLENBQUNDLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsa0VBQU0sQ0FBQ0UsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRixrRUFBTSxDQUFDRyxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk1QixRQUFRLENBQUM2QixVQUFiLENBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUosa0VBQU0sQ0FBQ0ssY0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFTCxrRUFBTSxDQUFDTSxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVDLCtDQUFBLENBQWUsTUFBZixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0MsY0FBYyxDQUFDakMsUUFBRCxDQUFyQixDQUZGLENBREYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVnQywrQ0FBQSxDQUFlLE1BQWYsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU81QixJQUFJLENBQUM4QixJQUFaLENBRkYsQ0FMRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRUYsK0NBQUEsQ0FBZSxRQUFmLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPNUIsSUFBSSxDQUFDK0IsTUFBWixDQUZGLENBVEYsRUFhRy9CLElBQUksQ0FBQ2dDLFVBYlIseUJBYXVDLEdBYnZDLEVBY0doQyxJQUFJLENBQUNnQyxVQUFMLEdBQWtCSCxjQUFjLENBQUNqQyxRQUFELENBZG5DLE9BZ0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2FtQixhQURiLG9CQUMwQ0csZUFEMUMsQ0FoQkosQ0FGRixDQURGLEVBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2YsY0FBYyxDQUFDTSxHQUFmLENBQW1CLFVBQUN3QixJQUFELEVBQVU7QUFDNUIsV0FDRSxNQUFDLG1EQUFEO0FBQ0UsVUFBSSxFQUFFQSxJQURSO0FBRUUsU0FBRyxFQUFFQSxJQUFJLENBQUN0QixRQUZaO0FBR0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2IsWUFBSXVCLEtBQUsscUJBQVFELElBQVIsQ0FBVDs7QUFDQUMsYUFBSyxDQUFDQyxHQUFOLEdBQVl2QyxRQUFRLENBQUN3QyxPQUFyQjtBQUNBdkMsbUJBQVcsQ0FBQ0UsS0FBRCxrQ0FDTkgsUUFETTtBQUVUTSxlQUFLLHlHQUFNTixRQUFRLENBQUNNLEtBQWYsSUFBc0JnQyxLQUF0QixFQUZJO0FBR1RFLGlCQUFPLEVBQUV4QyxRQUFRLENBQUN3QyxPQUFULEdBQW1CO0FBSG5CLFdBQVg7QUFLRCxPQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQWVELEdBaEJBLENBREgsQ0F6QkYsQ0FERixFQThDRSxNQUFDLGdEQUFEO0FBQ0UsZ0JBQVksRUFBRXhDLFFBQVEsQ0FBQ3lDLFlBRHpCO0FBRUUsV0FBTyxFQUFFekMsUUFBUSxDQUFDMEMsT0FGcEI7QUFHRSxjQUFVLEVBQUUsb0JBQUNDLFVBQUQsRUFLTjtBQUNKMUMsaUJBQVcsQ0FBQ0UsS0FBRCxrQ0FBYUgsUUFBYjtBQUF1QjBDLGVBQU8sRUFBRUM7QUFBaEMsU0FBWDtBQUNELEtBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlDRixDQURGLEVBNERFLE1BQUMsU0FBRDtBQUNFLFNBQUssRUFBRTNDLFFBQVEsQ0FBQ00sS0FEbEI7QUFFRSxZQUFRLEVBQUUsa0JBQUNBLEtBQUQ7QUFBQSxhQUFXTCxXQUFXLENBQUNFLEtBQUQsa0NBQWFILFFBQWI7QUFBdUJNLGFBQUssRUFBRUE7QUFBOUIsU0FBdEI7QUFBQSxLQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1REYsQ0FERjtBQW1FRDs7S0E3RlFQLFE7QUErRkYsSUFBTTZDLGdCQUFnQixHQUFHQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcvQyxRQUFYLENBQXpCO01BQU02QyxnQjs7QUFFYixTQUFTRyxTQUFULFFBQXdDO0FBQUE7O0FBQUEsTUFBbkJ6QyxLQUFtQixTQUFuQkEsS0FBbUI7QUFBQSxNQUFaMEMsUUFBWSxTQUFaQSxRQUFZO0FBQ3RDLFNBQ0U7QUFBSyxhQUFTLEVBQUV2QixrRUFBTSxDQUFDQyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dwQixLQUFLLENBQUNPLEdBQU4sQ0FBVSxVQUFDd0IsSUFBRCxFQUFPWSxDQUFQO0FBQUEsV0FDVCxNQUFDLG1EQUFEO0FBQ0UsVUFBSSxFQUFFWixJQURSO0FBRUUsU0FBRyxFQUFFQSxJQUFJLENBQUNFLEdBRlo7QUFHRSxhQUFPLEVBQUUsbUJBQU07QUFDYlMsZ0JBQVEsQ0FBQzFDLEtBQUssQ0FBQ0ssTUFBTixDQUFhLFVBQUN1QyxDQUFELEVBQUlDLEVBQUo7QUFBQSxpQkFBV0YsQ0FBQyxJQUFJRSxFQUFoQjtBQUFBLFNBQWIsQ0FBRCxDQUFSO0FBQ0QsT0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFM7QUFBQSxHQUFWLENBREgsQ0FERjtBQWFEOztNQWRRSixTOztBQWdCVCxTQUFTZCxjQUFULENBQXdCakMsUUFBeEIsRUFBd0Q7QUFDdEQsU0FDRUEsUUFBUSxDQUFDb0QsU0FBVCxHQUNFcEQsUUFBUSxDQUFDeUMsWUFBVCxDQUFzQjVCLEdBQXRCLENBQ0UsVUFBQ3dCLElBQUQ7QUFBQSxXQUNFQSxJQUFJLENBQUNnQixPQUFMLENBQWFELFNBQWIsR0FBeUJwRCxRQUFRLENBQUMwQyxPQUFULENBQWlCTCxJQUFJLENBQUN0QixRQUF0QixFQUFnQ3VDLEtBRDNEO0FBQUEsR0FERixFQUdFQyxNQUhGLENBR1MsVUFBQ0MsQ0FBRCxFQUFZQyxDQUFaO0FBQUEsV0FBMEJELENBQUMsR0FBR0MsQ0FBOUI7QUFBQSxHQUhULEVBRzBDLENBSDFDLENBREYsSUFJa0QsQ0FMcEQ7QUFPRDs7TUFSUXhCLGM7O0FBU1QsU0FBU2IsVUFBVCxDQUFvQnBCLFFBQXBCLEVBQW9EO0FBQ2xELFNBQU9BLFFBQVEsQ0FBQzBELENBQVQsQ0FBV0wsT0FBWCxDQUFtQk0sdUJBQW5CLElBQThDLENBQXJEO0FBQ0Q7O01BRlF2QyxVOztBQUdULFNBQVNHLFlBQVQsQ0FBc0J2QixRQUF0QixFQUFzRDtBQUNwRCxTQUNFLENBQUMsQ0FBQ0EsUUFBUSxDQUFDMEQsQ0FBVCxDQUFXTCxPQUFYLENBQW1CTyxxQ0FBcEIsSUFBNkQsQ0FBOUQsS0FDQzVELFFBQVEsQ0FBQzBELENBQVQsQ0FBV0wsT0FBWCxDQUFtQlEseUJBQW5CLElBQWdELENBRGpELENBREY7QUFJRDs7TUFMUXRDLFk7O0FBT1QsU0FBU0YsaUJBQVQsQ0FDRXJCLFFBREYsRUFFRUksSUFGRixFQUdVO0FBQ1IsTUFBSUEsSUFBSSxDQUFDZ0MsVUFBTCxHQUFrQixDQUF0QixFQUF5QjtBQUN2QjtBQUNBLFdBQ0doQyxJQUFJLENBQUM4QixJQUFMLEdBQVk5QixJQUFJLENBQUNnQyxVQUFsQixHQUFnQ3BDLFFBQVEsQ0FBQ29ELFNBQXpDLEdBQ0NoRCxJQUFJLENBQUM4QixJQUFMLEdBQVk5QixJQUFJLENBQUNnQyxVQUFsQixJQUNHSCxjQUFjLENBQUNqQyxRQUFELENBQWQsR0FBMkJBLFFBQVEsQ0FBQ29ELFNBRHZDLENBRkY7QUFLRCxHQVBELE1BT08sT0FBTyxDQUFQO0FBQ1I7O01BWlEvQixpQjs7QUFjVCxTQUFTRyxtQkFBVCxDQUNFeEIsUUFERixFQUVFSSxJQUZGLEVBR1U7QUFDUixNQUFJQSxJQUFJLENBQUNnQyxVQUFMLEdBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCO0FBQ0EsV0FDR2hDLElBQUksQ0FBQytCLE1BQUwsR0FBYy9CLElBQUksQ0FBQ2dDLFVBQXBCLEdBQWtDcEMsUUFBUSxDQUFDb0QsU0FBM0MsR0FDQ2hELElBQUksQ0FBQytCLE1BQUwsR0FBYy9CLElBQUksQ0FBQ2dDLFVBQXBCLElBQ0dILGNBQWMsQ0FBQ2pDLFFBQUQsQ0FBZCxHQUEyQkEsUUFBUSxDQUFDb0QsU0FEdkMsQ0FGRjtBQUtELEdBUEQsTUFPTyxPQUFPLENBQVA7QUFDUjs7TUFaUTVCLG1COztBQWFULFNBQVNuQixrQkFBVCxDQUE0QkMsS0FBNUIsRUFBMkM7QUFDekMsU0FBT0EsS0FBSyxDQUFDTyxHQUFOLENBQVUsVUFBQ3dCLElBQUQ7QUFBQSxXQUFXO0FBQzFCSCxVQUFJLEVBQUVHLElBQUksQ0FBQ2dCLE9BQUwsQ0FBYVMsYUFETztBQUUxQjNCLFlBQU0sRUFBRUUsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhVSxlQUZLO0FBRzFCM0IsZ0JBQVUsRUFBRUMsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhVztBQUhDLEtBQVg7QUFBQSxHQUFWLEVBSUhULE1BSkcsQ0FLTCxVQUFDVSxFQUFELEVBQUtDLEVBQUw7QUFBQSxXQUFhO0FBQ1hoQyxVQUFJLEVBQUUrQixFQUFFLENBQUMvQixJQUFILEdBQVVnQyxFQUFFLENBQUNoQyxJQURSO0FBRVhDLFlBQU0sRUFBRThCLEVBQUUsQ0FBQzlCLE1BQUgsR0FBWStCLEVBQUUsQ0FBQy9CLE1BRlo7QUFHWEMsZ0JBQVUsRUFBRTZCLEVBQUUsQ0FBQzdCLFVBQUgsR0FBZ0I4QixFQUFFLENBQUM5QjtBQUhwQixLQUFiO0FBQUEsR0FMSyxFQVVMO0FBQUVGLFFBQUksRUFBRSxDQUFSO0FBQVdDLFVBQU0sRUFBRSxDQUFuQjtBQUFzQkMsY0FBVSxFQUFFO0FBQWxDLEdBVkssQ0FBUDtBQVlEOztBQUVNLElBQU0rQixZQUFiLEdBb0JFLHNCQUFZQyxZQUFaLEVBQXVDbEUsRUFBdkMsRUFBMkM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDekNtRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsWUFBWjtBQUVBLE9BQUtHLFFBQUwsR0FBZ0JILFlBQVksQ0FBQ0csUUFBN0I7QUFDQSxPQUFLMUMsVUFBTCxHQUFrQnVDLFlBQVksQ0FBQ3ZDLFVBQS9CO0FBQ0EsT0FBS3JCLGNBQUwsR0FBc0I0RCxZQUFZLENBQUM1RCxjQUFiLElBQStCLEVBQXJEO0FBRUEsT0FBS2dFLE1BQUwsR0FBY0osWUFBWSxDQUFDckQsUUFBM0I7QUFDQSxPQUFLcUMsU0FBTCxHQUFpQmdCLFlBQVksQ0FBQ2YsT0FBYixDQUFxQkQsU0FBdEM7QUFDQSxPQUFLWCxZQUFMLEdBQ0UyQixZQUFZLENBQUNLLFNBQWIsQ0FBdUJoQyxZQUF2QixDQUFvQzVCLEdBQXBDLENBQXdDLFVBQUNELEVBQUQ7QUFBQSxXQUFRVixFQUFFLENBQUNVLEVBQUQsQ0FBVjtBQUFBLEdBQXhDLEtBQTJELEVBRDdEO0FBRUEsT0FBSzhCLE9BQUwsR0FDRSxLQUFLRCxZQUFMLENBQWtCYyxNQUFsQixDQUF5QixVQUFDTCxDQUFELEVBQUliLElBQUosRUFBYTtBQUNwQ2EsS0FBQyxDQUFDYixJQUFJLENBQUN0QixRQUFOLENBQUQsR0FBbUI7QUFBRXVDLFdBQUssRUFBRSxDQUFUO0FBQVlqQixVQUFJLEVBQUVBO0FBQWxCLEtBQW5CO0FBQ0EsV0FBT2EsQ0FBUDtBQUNELEdBSEQsRUFHRyxFQUhILEtBR1UsRUFKWjtBQUtBLE9BQUtRLENBQUwsR0FBU1UsWUFBVDtBQUNBLE9BQUs5RCxLQUFMLEdBQWEsRUFBYjtBQUNBLE9BQUtrQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLE9BQUtrQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLE9BQUtqRSxRQUFMLEdBQWdCMEQsWUFBWSxDQUFDMUQsUUFBYixJQUF5QixFQUF6QztBQUNELENBMUNIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUxNzFkMDNkNTMxM2ZhMTQ0ZTFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQnVpbGRpbmcubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCAqIGFzIEZ1bmMgZnJvbSBcIi4vRnVuY1wiO1xyXG5pbXBvcnQgQXNzaXN0cyBmcm9tIFwiLi9Bc3Npc3RzXCI7XHJcbmltcG9ydCBVbml0QnV0dG9uIGZyb20gXCIuL1VuaXRCdXR0b25cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVbml0LCBSYXdCdWlsZGluZyB9IGZyb20gXCIuLi90eXBlc2NyaXB0L1R5cGVzXCI7XHJcbmZ1bmN0aW9uIEJ1aWxkaW5nKHtcclxuICBidWlsZGluZyxcclxuICBzZXRCdWlsZGluZyxcclxuICBkYixcclxuICBpbmRleCxcclxufToge1xyXG4gIGJ1aWxkaW5nOiBCdWlsZGluZ0RhdGE7XHJcbiAgc2V0QnVpbGRpbmc6IChpOiBudW1iZXIsIGI6IEJ1aWxkaW5nRGF0YSkgPT4gdm9pZDtcclxuICBkYjogYW55O1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbn0pIHtcclxuICBsZXQgY29zdCA9IGNhbGN1bGF0ZVF1ZXVlQ29zdChidWlsZGluZy5RdWV1ZSk7XHJcblxyXG4gIGxldCBjb25zdHJ1Y3RhYmxlcyA9IGJ1aWxkaW5nLkNvbnN0cnVjdGFibGVzLmNvbmNhdChcclxuICAgIGJ1aWxkaW5nLlVwZ3JhZGVzLmZpbHRlcihcclxuICAgICAgKGlkKSA9PiAhYnVpbGRpbmcuUXVldWUubWFwKCh1KSA9PiB1LlVuaXROYW1lKS5pbmNsdWRlcyhpZClcclxuICAgIClcclxuICApXHJcbiAgICAubWFwKChpZCkgPT4gZGJbaWRdKVxyXG4gICAgLnNvcnQoRnVuYy51bml0X2ljb25fc29ydGVyKTtcclxuXHJcbiAgbGV0IEF2Z01hc3NQZXJTZWMgPSBNYXNzUGVyU2VjKGJ1aWxkaW5nKSAtIE1hc3NTcGVudEJ1aWxkaW5nKGJ1aWxkaW5nLCBjb3N0KTtcclxuXHJcbiAgbGV0IEF2Z0VuZXJneVBlclNlYyA9XHJcbiAgICBFbmVyZ3lQZXJTZWMoYnVpbGRpbmcpIC0gRW5lcmd5U3BlbnRCdWlsZGluZyhidWlsZGluZywgY29zdCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvbGlkfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3dfY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbHVtbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+e2J1aWxkaW5nLlNpbXBsZU5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc291cmNlX3RhYmxlfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc291cmNlX2NlbGx9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e0NvbnN0YW50cy5JY29uKFwiVGltZVwiKX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57VG90YWxCdWlsZFJhdGUoYnVpbGRpbmcpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e0NvbnN0YW50cy5JY29uKFwiTWFzc1wiKX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57Y29zdC5tYXNzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e0NvbnN0YW50cy5JY29uKFwiRW5lcmd5XCIpfT48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntjb3N0LmVuZXJneX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2Nvc3QuYnVpbGR0aWNrc30sIFRvdGFsIGJ1aWxkIHRpbWU6e1wiIFwifVxyXG4gICAgICAgICAgICAgIHtjb3N0LmJ1aWxkdGlja3MgLyBUb3RhbEJ1aWxkUmF0ZShidWlsZGluZyl9c1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBBdmcgTWFzczoge0F2Z01hc3NQZXJTZWN9LCBBdmcgRW5lcmd5OiB7QXZnRW5lcmd5UGVyU2VjfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjb25zdHJ1Y3RhYmxlcy5tYXAoKHVuaXQpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFVuaXRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdW5pdD17dW5pdH1cclxuICAgICAgICAgICAgICAgICAga2V5PXt1bml0LlVuaXROYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5Vbml0ID0geyAuLi51bml0IH07XHJcbiAgICAgICAgICAgICAgICAgICAgblVuaXQua2V5ID0gYnVpbGRpbmcuUXVldWVObztcclxuICAgICAgICAgICAgICAgICAgICBzZXRCdWlsZGluZyhpbmRleCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uYnVpbGRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBRdWV1ZTogWy4uLmJ1aWxkaW5nLlF1ZXVlLCBuVW5pdF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBRdWV1ZU5vOiBidWlsZGluZy5RdWV1ZU5vICsgMSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QXNzaXN0c1xyXG4gICAgICAgICAgQXNzaXN0YWJsZUJ5PXtidWlsZGluZy5Bc3Npc3RhYmxlQnl9XHJcbiAgICAgICAgICBBc3Npc3RzPXtidWlsZGluZy5Bc3Npc3RzfVxyXG4gICAgICAgICAgU2V0QXNzaXN0cz17KG5ld0Fzc2lzdHM6IHtcclxuICAgICAgICAgICAgW2luZGV4OiBzdHJpbmddOiB7XHJcbiAgICAgICAgICAgICAgY291bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICB1bml0OiBVbml0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRCdWlsZGluZyhpbmRleCwgeyAuLi5idWlsZGluZywgQXNzaXN0czogbmV3QXNzaXN0cyB9KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxVbml0UXVldWVcclxuICAgICAgICBRdWV1ZT17YnVpbGRpbmcuUXVldWV9XHJcbiAgICAgICAgU2V0UXVldWU9eyhRdWV1ZSkgPT4gc2V0QnVpbGRpbmcoaW5kZXgsIHsgLi4uYnVpbGRpbmcsIFF1ZXVlOiBRdWV1ZSB9KX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNZW1vaXplZEJ1aWxkaW5nID0gUmVhY3QubWVtbyhCdWlsZGluZyk7XHJcblxyXG5mdW5jdGlvbiBVbml0UXVldWUoeyBRdWV1ZSwgU2V0UXVldWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvbGlkfT5cclxuICAgICAge1F1ZXVlLm1hcCgodW5pdCwgaSkgPT4gKFxyXG4gICAgICAgIDxVbml0QnV0dG9uXHJcbiAgICAgICAgICB1bml0PXt1bml0fVxyXG4gICAgICAgICAga2V5PXt1bml0LmtleX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgU2V0UXVldWUoUXVldWUuZmlsdGVyKChtLCBxaSkgPT4gaSAhPSBxaSkpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRvdGFsQnVpbGRSYXRlKGJ1aWxkaW5nOiBCdWlsZGluZ0RhdGEpOiBudW1iZXIge1xyXG4gIHJldHVybiAoXHJcbiAgICBidWlsZGluZy5CdWlsZFJhdGUgK1xyXG4gICAgICBidWlsZGluZy5Bc3Npc3RhYmxlQnkubWFwKFxyXG4gICAgICAgICh1bml0OiBVbml0KSA9PlxyXG4gICAgICAgICAgdW5pdC5FY29ub215LkJ1aWxkUmF0ZSAqIGJ1aWxkaW5nLkFzc2lzdHNbdW5pdC5Vbml0TmFtZV0uY291bnRcclxuICAgICAgKS5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBhICsgYiwgMCkgfHwgMFxyXG4gICk7XHJcbn1cclxuZnVuY3Rpb24gTWFzc1BlclNlYyhidWlsZGluZzogQnVpbGRpbmdEYXRhKTogbnVtYmVyIHtcclxuICByZXR1cm4gYnVpbGRpbmcucC5FY29ub215LlByb2R1Y3Rpb25QZXJTZWNvbmRNYXNzIHx8IDA7XHJcbn1cclxuZnVuY3Rpb24gRW5lcmd5UGVyU2VjKGJ1aWxkaW5nOiBCdWlsZGluZ0RhdGEpOiBudW1iZXIge1xyXG4gIHJldHVybiAoXHJcbiAgICAoLWJ1aWxkaW5nLnAuRWNvbm9teS5NYWludGVuYW5jZUNvbnN1bXB0aW9uUGVyU2Vjb25kRW5lcmd5IHx8IDApICtcclxuICAgIChidWlsZGluZy5wLkVjb25vbXkuUHJvZHVjdGlvblBlclNlY29uZEVuZXJneSB8fCAwKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1hc3NTcGVudEJ1aWxkaW5nKFxyXG4gIGJ1aWxkaW5nOiBCdWlsZGluZ0RhdGEsXHJcbiAgY29zdDogeyBtYXNzOiBudW1iZXI7IGVuZXJneTogbnVtYmVyOyBidWlsZHRpY2tzOiBudW1iZXIgfVxyXG4pOiBudW1iZXIge1xyXG4gIGlmIChjb3N0LmJ1aWxkdGlja3MgPiAwKSB7XHJcbiAgICAvLyBQcmVwYXJlIGZvciBhZGphY2VudHMgd2hpY2ggb25seSBhZmZlY3RzIHRoZSBjb3N0IGZyb20gdGhlIGJhc2UgYnVpbGRpbmdzIGJ1aWxkcmF0ZS5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIChjb3N0Lm1hc3MgLyBjb3N0LmJ1aWxkdGlja3MpICogYnVpbGRpbmcuQnVpbGRSYXRlICtcclxuICAgICAgKGNvc3QubWFzcyAvIGNvc3QuYnVpbGR0aWNrcykgKlxyXG4gICAgICAgIChUb3RhbEJ1aWxkUmF0ZShidWlsZGluZykgLSBidWlsZGluZy5CdWlsZFJhdGUpXHJcbiAgICApO1xyXG4gIH0gZWxzZSByZXR1cm4gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gRW5lcmd5U3BlbnRCdWlsZGluZyhcclxuICBidWlsZGluZzogQnVpbGRpbmdEYXRhLFxyXG4gIGNvc3Q6IHsgbWFzczogbnVtYmVyOyBlbmVyZ3k6IG51bWJlcjsgYnVpbGR0aWNrczogbnVtYmVyIH1cclxuKTogbnVtYmVyIHtcclxuICBpZiAoY29zdC5idWlsZHRpY2tzID4gMCkge1xyXG4gICAgLy8gUHJlcGFyZSBmb3IgYWRqYWNlbnRzIHdoaWNoIG9ubHkgYWZmZWN0cyB0aGUgY29zdCBmcm9tIHRoZSBiYXNlIGJ1aWxkaW5ncyBidWlsZHJhdGUuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAoY29zdC5lbmVyZ3kgLyBjb3N0LmJ1aWxkdGlja3MpICogYnVpbGRpbmcuQnVpbGRSYXRlICtcclxuICAgICAgKGNvc3QuZW5lcmd5IC8gY29zdC5idWlsZHRpY2tzKSAqXHJcbiAgICAgICAgKFRvdGFsQnVpbGRSYXRlKGJ1aWxkaW5nKSAtIGJ1aWxkaW5nLkJ1aWxkUmF0ZSlcclxuICAgICk7XHJcbiAgfSBlbHNlIHJldHVybiAwO1xyXG59XHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZVF1ZXVlQ29zdChRdWV1ZTogVW5pdFtdKSB7XHJcbiAgcmV0dXJuIFF1ZXVlLm1hcCgodW5pdCkgPT4gKHtcclxuICAgIG1hc3M6IHVuaXQuRWNvbm9teS5CdWlsZENvc3RNYXNzLFxyXG4gICAgZW5lcmd5OiB1bml0LkVjb25vbXkuQnVpbGRDb3N0RW5lcmd5LFxyXG4gICAgYnVpbGR0aWNrczogdW5pdC5FY29ub215LkJ1aWxkVGltZSxcclxuICB9KSkucmVkdWNlKFxyXG4gICAgKHB2LCBjdikgPT4gKHtcclxuICAgICAgbWFzczogcHYubWFzcyArIGN2Lm1hc3MsXHJcbiAgICAgIGVuZXJneTogcHYuZW5lcmd5ICsgY3YuZW5lcmd5LFxyXG4gICAgICBidWlsZHRpY2tzOiBwdi5idWlsZHRpY2tzICsgY3YuYnVpbGR0aWNrcyxcclxuICAgIH0pLFxyXG4gICAgeyBtYXNzOiAwLCBlbmVyZ3k6IDAsIGJ1aWxkdGlja3M6IDAgfVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCdWlsZGluZ0RhdGEge1xyXG4gIFVuaXRJZDogc3RyaW5nO1xyXG4gIEZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgU2ltcGxlTmFtZTogc3RyaW5nO1xyXG4gIENvbnN0cnVjdGFibGVzOiBhbnlbXTtcclxuICBBc3Npc3RhYmxlQnk6IFVuaXRbXTtcclxuICBBc3Npc3RzOiB7XHJcbiAgICBbaW5kZXg6IHN0cmluZ106IHtcclxuICAgICAgY291bnQ6IG51bWJlcjtcclxuICAgICAgdW5pdDogVW5pdDtcclxuICAgIH07XHJcbiAgfTtcclxuICBCdWlsZFJhdGU6IG51bWJlcjtcclxuICBBZGphY2VudGFibGVzOiBhbnlbXTtcclxuICBBZGphY2VudHM6IGFueVtdO1xyXG4gIFVwZ3JhZGVzOiBhbnlbXTtcclxuICBRdWV1ZTogVW5pdFtdO1xyXG4gIFF1ZXVlTm86IG51bWJlcjtcclxuICBwOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEJ1aWxkaW5nUHJvcDogUmF3QnVpbGRpbmcsIGRiKSB7XHJcbiAgICBjb25zb2xlLmxvZyhCdWlsZGluZ1Byb3ApO1xyXG5cclxuICAgIHRoaXMuRnVsbE5hbWUgPSBCdWlsZGluZ1Byb3AuRnVsbE5hbWU7XHJcbiAgICB0aGlzLlNpbXBsZU5hbWUgPSBCdWlsZGluZ1Byb3AuU2ltcGxlTmFtZTtcclxuICAgIHRoaXMuQ29uc3RydWN0YWJsZXMgPSBCdWlsZGluZ1Byb3AuQ29uc3RydWN0YWJsZXMgfHwgW107XHJcblxyXG4gICAgdGhpcy5Vbml0SWQgPSBCdWlsZGluZ1Byb3AuVW5pdE5hbWU7XHJcbiAgICB0aGlzLkJ1aWxkUmF0ZSA9IEJ1aWxkaW5nUHJvcC5FY29ub215LkJ1aWxkUmF0ZTtcclxuICAgIHRoaXMuQXNzaXN0YWJsZUJ5ID1cclxuICAgICAgQnVpbGRpbmdQcm9wLlN0cnVjdHVyZS5Bc3Npc3RhYmxlQnkubWFwKChpZCkgPT4gZGJbaWRdKSB8fCBbXTtcclxuICAgIHRoaXMuQXNzaXN0cyA9XHJcbiAgICAgIHRoaXMuQXNzaXN0YWJsZUJ5LnJlZHVjZSgobSwgdW5pdCkgPT4ge1xyXG4gICAgICAgIG1bdW5pdC5Vbml0TmFtZV0gPSB7IGNvdW50OiAwLCB1bml0OiB1bml0IH07XHJcbiAgICAgICAgcmV0dXJuIG07XHJcbiAgICAgIH0sIHt9KSB8fCB7fTtcclxuICAgIHRoaXMucCA9IEJ1aWxkaW5nUHJvcDtcclxuICAgIHRoaXMuUXVldWUgPSBbXTtcclxuICAgIHRoaXMuUXVldWVObyA9IDA7XHJcbiAgICB0aGlzLkFkamFjZW50YWJsZXMgPSBbXTtcclxuICAgIHRoaXMuQWRqYWNlbnRzID0gW107XHJcbiAgICB0aGlzLlVwZ3JhZGVzID0gQnVpbGRpbmdQcm9wLlVwZ3JhZGVzIHx8IFtdO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9