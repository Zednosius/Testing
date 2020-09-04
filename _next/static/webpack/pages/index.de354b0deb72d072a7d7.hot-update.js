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
      return (-BuildingProp.Economy.MaintenanceConsumptionPerSecondEnergy || 0) + (BuildingProp.Economy.ProductionPerSecondEnergy || 0);
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

/***/ }),

/***/ "./components/Constants.js":
/*!*********************************!*\
  !*** ./components/Constants.js ***!
  \*********************************/
/*! exports provided: EngineerBuildRate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineerBuildRate", function() { return EngineerBuildRate; });
var EngineerBuildRate = {
  t1: 5,
  t2: 10,
  t3: 15
};

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyJdLCJuYW1lcyI6WyJCdWlsZGluZyIsInByb3BzIiwidXNlU3RhdGUiLCJRdWV1ZSIsIlNldFF1ZXVlIiwiUXVldWVJZCIsIlNldElkIiwiR2V0QW5kSW5jUSIsImlkIiwiY29zdCIsIm1hcCIsInVuaXQiLCJtYXNzIiwiRWNvbm9teSIsIkJ1aWxkQ29zdE1hc3MiLCJlbmVyZ3kiLCJCdWlsZENvc3RFbmVyZ3kiLCJidWlsZHRpbWUiLCJCdWlsZFRpbWUiLCJyZWR1Y2UiLCJwdiIsImN2IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjb25zdHJ1Y3RhYmxlcyIsIlVwZ3JhZGVzIiwiY29uY2F0IiwiZmlsdGVyIiwidSIsIlVuaXROYW1lIiwiaW5jbHVkZXMiLCJBdmdNYXNzUGVyU2VjIiwiTWFzc1BlclNlYyIsIkJ1aWxkUmF0ZSIsIkF2Z0VuZXJneVBlclNlYyIsIkVuZXJneVBlclNlYyIsInN0eWxlcyIsInNvbGlkIiwiU2ltcGxlTmFtZSIsInAiLCJkYiIsIm5Vbml0Iiwia2V5IiwiRnVsbE5hbWUiLCJpIiwibSIsInFpIiwiQnVpbGRpbmdEYXRhIiwiQnVpbGRpbmdQcm9wIiwiVW5pdElkIiwiQ29uc3RydWN0YWJsZXMiLCJBc3Npc3RzIiwidDEiLCJ0MiIsInQzIiwiQ29uc3RhbnRzIiwiUHJvZHVjdGlvblBlclNlY29uZE1hc3MiLCJNYWludGVuYW5jZUNvbnN1bXB0aW9uUGVyU2Vjb25kRW5lcmd5IiwiUHJvZHVjdGlvblBlclNlY29uZEVuZXJneSIsIkVuZ2luZWVyQnVpbGRSYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZTM1NGIwZGViNzJkMDcyYTdkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0J1aWxkaW5nLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdWlsZGluZyhwcm9wcykge1xyXG4gIGNvbnN0IFtRdWV1ZSwgU2V0UXVldWVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtRdWV1ZUlkLCBTZXRJZF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgZnVuY3Rpb24gR2V0QW5kSW5jUSgpIHtcclxuICAgIGxldCBpZCA9IFF1ZXVlSWQ7XHJcbiAgICBTZXRJZChpZCArIDEpO1xyXG4gICAgcmV0dXJuIGlkO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNvc3QgPSBRdWV1ZS5tYXAoKHVuaXQpID0+ICh7XHJcbiAgICBtYXNzOiB1bml0LkVjb25vbXkuQnVpbGRDb3N0TWFzcyxcclxuICAgIGVuZXJneTogdW5pdC5FY29ub215LkJ1aWxkQ29zdEVuZXJneSxcclxuICAgIGJ1aWxkdGltZTogdW5pdC5FY29ub215LkJ1aWxkVGltZSxcclxuICB9KSkucmVkdWNlKFxyXG4gICAgKHB2LCBjdikgPT4gKHtcclxuICAgICAgbWFzczogcHYubWFzcyArIGN2Lm1hc3MsXHJcbiAgICAgIGVuZXJneTogcHYuZW5lcmd5ICsgY3YuZW5lcmd5LFxyXG4gICAgICBidWlsZHRpbWU6IHB2LmJ1aWxkdGltZSArIGN2LmJ1aWxkdGltZSxcclxuICAgIH0pLFxyXG4gICAgeyBtYXNzOiAwLCBlbmVyZ3k6IDAsIGJ1aWxkdGltZTogMCB9XHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcIkNPTlNUUlVDVElORyBCVUlMRElOR1wiKTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhKTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhLmNvbnN0cnVjdGFibGVzKTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhLlVwZ3JhZGVzKTtcclxuICBjb25zb2xlLmxvZyhRdWV1ZSk7XHJcbiAgbGV0IGNvbnN0cnVjdGFibGVzID0gcHJvcHMuZGF0YS5jb25zdHJ1Y3RhYmxlcy5jb25jYXQoXHJcbiAgICBwcm9wcy5kYXRhLlVwZ3JhZGVzLmZpbHRlcihcclxuICAgICAgKGlkKSA9PiAhUXVldWUubWFwKCh1KSA9PiB1LlVuaXROYW1lKS5pbmNsdWRlcyhpZClcclxuICAgIClcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKGNvbnN0cnVjdGFibGVzKTtcclxuXHJcbiAgbGV0IEF2Z01hc3NQZXJTZWMgPVxyXG4gICAgcHJvcHMuZGF0YS5NYXNzUGVyU2VjIC1cclxuICAgIChjb3N0LmJ1aWxkdGltZSAhPSAwXHJcbiAgICAgID8gKGNvc3QubWFzcyAvIGNvc3QuYnVpbGR0aW1lKSAqIHByb3BzLmRhdGEuQnVpbGRSYXRlXHJcbiAgICAgIDogMCk7XHJcblxyXG4gIGxldCBBdmdFbmVyZ3lQZXJTZWMgPVxyXG4gICAgcHJvcHMuZGF0YS5FbmVyZ3lQZXJTZWMgLVxyXG4gICAgKGNvc3QuYnVpbGR0aW1lICE9IDBcclxuICAgICAgPyAoY29zdC5lbmVyZ3kgLyBjb3N0LmJ1aWxkdGltZSkgKiBwcm9wcy5kYXRhLkJ1aWxkUmF0ZVxyXG4gICAgICA6IDApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2xpZH0+XHJcbiAgICAgIDxwPntwcm9wcy5kYXRhLlNpbXBsZU5hbWV9PC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICBCdWlsZCBSYXRlOiB7cHJvcHMuZGF0YS5wLkVjb25vbXkuQnVpbGRSYXRlfVxyXG4gICAgICAgIFRvdGFsIE1hc3M6IHtjb3N0Lm1hc3N9LCBUb3RhbCBFbmVyZ3k6e2Nvc3QuZW5lcmd5fSwgVG90YWwgQnVpbGQgdGlja3M6XHJcbiAgICAgICAge2Nvc3QuYnVpbGR0aW1lfSwgVG90YWwgYnVpbGQgdGltZTp7XCIgXCJ9XHJcbiAgICAgICAge2Nvc3QuYnVpbGR0aW1lIC8gcHJvcHMuZGF0YS5CdWlsZFJhdGV9c1xyXG4gICAgICA8L3A+XHJcbiAgICAgIHtcclxuICAgICAgICA8cD5cclxuICAgICAgICAgIEF2ZyBNYXNzOiB7QXZnTWFzc1BlclNlY30sIEF2ZyBFbmVyZ3k6IHtBdmdFbmVyZ3lQZXJTZWN9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICB9XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2NvbnN0cnVjdGFibGVzLm1hcCgoaWQpID0+IHtcclxuICAgICAgICAgIGxldCB1bml0ID0gcHJvcHMuZGJbaWRdO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICBrZXk9e3VuaXQuVW5pdE5hbWV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5Vbml0ID0geyAuLi51bml0IH07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZGluZyB1bml0IVwiLCB1bml0KTtcclxuICAgICAgICAgICAgICAgIG5Vbml0LmtleSA9IEdldEFuZEluY1EoKTtcclxuICAgICAgICAgICAgICAgIFNldFF1ZXVlKFsuLi5RdWV1ZSwgblVuaXRdKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3VuaXQuRnVsbE5hbWV9ICh7dW5pdC5TaW1wbGVOYW1lfSlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2xpZH0+XHJcbiAgICAgICAge1F1ZXVlLm1hcCgodW5pdCwgaSkgPT4gKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e3VuaXQua2V5fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgU2V0UXVldWUoUXVldWUuZmlsdGVyKChtLCBxaSkgPT4gaSAhPSBxaSkpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dW5pdC5GdWxsTmFtZX0gTTp7dW5pdC5FY29ub215LkJ1aWxkQ29zdE1hc3N9IEU6XHJcbiAgICAgICAgICAgIHt1bml0LkVjb25vbXkuQnVpbGRDb3N0RW5lcmd5fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1aWxkaW5nRGF0YSB7XHJcbiAgY29uc3RydWN0b3IoQnVpbGRpbmdQcm9wKSB7XHJcbiAgICBjb25zb2xlLmxvZyhCdWlsZGluZ1Byb3ApO1xyXG4gICAgdGhpcy5Vbml0SWQgPSBCdWlsZGluZ1Byb3AuVW5pdE5hbWU7XHJcbiAgICB0aGlzLkZ1bGxOYW1lID0gQnVpbGRpbmdQcm9wLkZ1bGxOYW1lO1xyXG4gICAgdGhpcy5TaW1wbGVOYW1lID0gQnVpbGRpbmdQcm9wLlNpbXBsZU5hbWU7XHJcbiAgICB0aGlzLmNvbnN0cnVjdGFibGVzID0gQnVpbGRpbmdQcm9wLkNvbnN0cnVjdGFibGVzIHx8IFtdO1xyXG4gICAgdGhpcy5Bc3Npc3RzID0geyB0MTogMCwgdDI6IDAsIHQzOiAwIH07XHJcbiAgICB0aGlzLlVwZ3JhZGVzID0gQnVpbGRpbmdQcm9wLlVwZ3JhZGVzIHx8IFtdO1xyXG4gICAgdGhpcy5wID0gQnVpbGRpbmdQcm9wO1xyXG4gIH1cclxuXHJcbiAgZ2V0IEJ1aWxkUmF0ZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICh0aGlzLnAuRWNvbm9teS5CdWlsZFJhdGUgfHwgMCkgK1xyXG4gICAgICB0aGlzLkFzc2lzdHMudDEgKiBDb25zdGFudHMuRW5naW5lZXJCdWlsZFJhdGUudDEgK1xyXG4gICAgICB0aGlzLkFzc2lzdHMudDIgKiBDb25zdGFudHMuRW5naW5lZXJCdWlsZFJhdGUudDIgK1xyXG4gICAgICB0aGlzLkFzc2lzdHMudDMgKiBDb25zdGFudHMuRW5naW5lZXJCdWlsZFJhdGUudDNcclxuICAgICk7XHJcbiAgfVxyXG4gIGdldCBNYXNzUGVyU2VjKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucC5FY29ub215LlByb2R1Y3Rpb25QZXJTZWNvbmRNYXNzIHx8IDA7XHJcbiAgfVxyXG5cclxuICBnZXQgRW5lcmd5UGVyU2VjKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgKC1CdWlsZGluZ1Byb3AuRWNvbm9teS5NYWludGVuYW5jZUNvbnN1bXB0aW9uUGVyU2Vjb25kRW5lcmd5IHx8IDApICtcclxuICAgICAgKEJ1aWxkaW5nUHJvcC5FY29ub215LlByb2R1Y3Rpb25QZXJTZWNvbmRFbmVyZ3kgfHwgMClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBFbmdpbmVlckJ1aWxkUmF0ZSA9IHtcclxuICB0MTogNSxcclxuICB0MjogMTAsXHJcbiAgdDM6IDE1LFxyXG59O1xyXG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==