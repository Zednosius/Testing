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
  var AvgMassPerSec = props.data.MassPerSec + (cost.buildtime != 0 ? cost.mass / cost.buildtime : 0);
  var AvgEnergyPerSec = props.data.MassPerSec + (cost.buildtime != 0 ? cost.mass / cost.buildtime : 0);
  return __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, props.data.SimpleName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "Build Rate: ", props.data.p.Economy.BuildRate, "Total Mass: ", cost.mass, ", Total Energy:", cost.energy, ", Total Build time:", " ", cost.buildtime), cost.buildtime > 0 && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Avg Mass: ", cost.mass / cost.buildtime, ", Avg Energy:", " ", cost.energy / cost.buildtime), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
        lineNumber: 64,
        columnNumber: 13
      }
    }, unit.FullName, " (", unit.SimpleName, ")");
  })), __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
        lineNumber: 81,
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
  this.constructables = BuildingProp.Constructables || [];
  this.Assists = {
    t1: 0,
    t2: 0,
    t3: 0
  };
  this.Upgrades = BuildingProp.Upgrades || [];
  this.BuildRate = BuildingProp.Economy.BuildRate;
  this.MassPerSec = BuildingProp.Economy.ProductionPerSecondMass || 0;
  this.EnergyPerSec = (BuildingProp.Economy.MaintenanceConsumptionPerSecondEnergy || 0) + (BuildingProp.Economy.ProductionPerSecondEnergy || 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy5qcyJdLCJuYW1lcyI6WyJCdWlsZGluZyIsInByb3BzIiwidXNlU3RhdGUiLCJRdWV1ZSIsIlNldFF1ZXVlIiwiUXVldWVJZCIsIlNldElkIiwiR2V0QW5kSW5jUSIsImlkIiwiY29zdCIsIm1hcCIsInVuaXQiLCJtYXNzIiwiRWNvbm9teSIsIkJ1aWxkQ29zdE1hc3MiLCJlbmVyZ3kiLCJCdWlsZENvc3RFbmVyZ3kiLCJidWlsZHRpbWUiLCJCdWlsZFRpbWUiLCJyZWR1Y2UiLCJwdiIsImN2IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjb25zdHJ1Y3RhYmxlcyIsIlVwZ3JhZGVzIiwiY29uY2F0IiwiZmlsdGVyIiwidSIsIlVuaXROYW1lIiwiaW5jbHVkZXMiLCJBdmdNYXNzUGVyU2VjIiwiTWFzc1BlclNlYyIsIkF2Z0VuZXJneVBlclNlYyIsInN0eWxlcyIsInNvbGlkIiwiU2ltcGxlTmFtZSIsInAiLCJCdWlsZFJhdGUiLCJkYiIsIm5Vbml0Iiwia2V5IiwiRnVsbE5hbWUiLCJpIiwibSIsInFpIiwiQnVpbGRpbmdEYXRhIiwiQnVpbGRpbmdQcm9wIiwiVW5pdElkIiwiQ29uc3RydWN0YWJsZXMiLCJBc3Npc3RzIiwidDEiLCJ0MiIsInQzIiwiUHJvZHVjdGlvblBlclNlY29uZE1hc3MiLCJFbmVyZ3lQZXJTZWMiLCJNYWludGVuYW5jZUNvbnN1bXB0aW9uUGVyU2Vjb25kRW5lcmd5IiwiUHJvZHVjdGlvblBlclNlY29uZEVuZXJneSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDLEVBQUQsQ0FESTtBQUFBLE1BQy9CQyxLQUQrQjtBQUFBLE1BQ3hCQyxRQUR3Qjs7QUFBQSxtQkFFYkYsc0RBQVEsQ0FB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QUNFLENBQUNSLFlBQVksQ0FBQ25DLE9BQWIsQ0FBcUI0QyxxQ0FBckIsSUFBOEQsQ0FBL0QsS0FDQ1QsWUFBWSxDQUFDbkMsT0FBYixDQUFxQjZDLHlCQUFyQixJQUFrRCxDQURuRCxDQURGO0FBSUEsT0FBS3BCLENBQUwsR0FBU1UsWUFBVDtBQUNELENBakJIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE3MGRhYTZkOGQ4ZDU3ZjQxMDFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQnVpbGRpbmcubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnVpbGRpbmcocHJvcHMpIHtcclxuICBjb25zdCBbUXVldWUsIFNldFF1ZXVlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbUXVldWVJZCwgU2V0SWRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGZ1bmN0aW9uIEdldEFuZEluY1EoKSB7XHJcbiAgICBsZXQgaWQgPSBRdWV1ZUlkO1xyXG4gICAgU2V0SWQoaWQgKyAxKTtcclxuICAgIHJldHVybiBpZDtcclxuICB9XHJcblxyXG4gIGxldCBjb3N0ID0gUXVldWUubWFwKCh1bml0KSA9PiAoe1xyXG4gICAgbWFzczogdW5pdC5FY29ub215LkJ1aWxkQ29zdE1hc3MsXHJcbiAgICBlbmVyZ3k6IHVuaXQuRWNvbm9teS5CdWlsZENvc3RFbmVyZ3ksXHJcbiAgICBidWlsZHRpbWU6IHVuaXQuRWNvbm9teS5CdWlsZFRpbWUsXHJcbiAgfSkpLnJlZHVjZShcclxuICAgIChwdiwgY3YpID0+ICh7XHJcbiAgICAgIG1hc3M6IHB2Lm1hc3MgKyBjdi5tYXNzLFxyXG4gICAgICBlbmVyZ3k6IHB2LmVuZXJneSArIGN2LmVuZXJneSxcclxuICAgICAgYnVpbGR0aW1lOiBwdi5idWlsZHRpbWUgKyBjdi5idWlsZHRpbWUsXHJcbiAgICB9KSxcclxuICAgIHsgbWFzczogMCwgZW5lcmd5OiAwLCBidWlsZHRpbWU6IDAgfVxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXCJDT05TVFJVQ1RJTkcgQlVJTERJTkdcIik7XHJcbiAgY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XHJcbiAgY29uc29sZS5sb2cocHJvcHMuZGF0YS5jb25zdHJ1Y3RhYmxlcyk7XHJcbiAgY29uc29sZS5sb2cocHJvcHMuZGF0YS5VcGdyYWRlcyk7XHJcbiAgY29uc29sZS5sb2coUXVldWUpO1xyXG4gIGxldCBjb25zdHJ1Y3RhYmxlcyA9IHByb3BzLmRhdGEuY29uc3RydWN0YWJsZXMuY29uY2F0KFxyXG4gICAgcHJvcHMuZGF0YS5VcGdyYWRlcy5maWx0ZXIoXHJcbiAgICAgIChpZCkgPT4gIVF1ZXVlLm1hcCgodSkgPT4gdS5Vbml0TmFtZSkuaW5jbHVkZXMoaWQpXHJcbiAgICApXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhjb25zdHJ1Y3RhYmxlcyk7XHJcblxyXG4gIGxldCBBdmdNYXNzUGVyU2VjID1cclxuICAgIHByb3BzLmRhdGEuTWFzc1BlclNlYyArXHJcbiAgICAoY29zdC5idWlsZHRpbWUgIT0gMCA/IGNvc3QubWFzcyAvIGNvc3QuYnVpbGR0aW1lIDogMCk7XHJcblxyXG4gIGxldCBBdmdFbmVyZ3lQZXJTZWMgPVxyXG4gICAgcHJvcHMuZGF0YS5NYXNzUGVyU2VjICtcclxuICAgIChjb3N0LmJ1aWxkdGltZSAhPSAwID8gY29zdC5tYXNzIC8gY29zdC5idWlsZHRpbWUgOiAwKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29saWR9PlxyXG4gICAgICA8cD57cHJvcHMuZGF0YS5TaW1wbGVOYW1lfTwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgQnVpbGQgUmF0ZToge3Byb3BzLmRhdGEucC5FY29ub215LkJ1aWxkUmF0ZX1cclxuICAgICAgICBUb3RhbCBNYXNzOiB7Y29zdC5tYXNzfSwgVG90YWwgRW5lcmd5Ontjb3N0LmVuZXJneX0sIFRvdGFsIEJ1aWxkIHRpbWU6e1wiIFwifVxyXG4gICAgICAgIHtjb3N0LmJ1aWxkdGltZX1cclxuICAgICAgPC9wPlxyXG4gICAgICB7Y29zdC5idWlsZHRpbWUgPiAwICYmIChcclxuICAgICAgICA8cD5cclxuICAgICAgICAgIEF2ZyBNYXNzOiB7Y29zdC5tYXNzIC8gY29zdC5idWlsZHRpbWV9LCBBdmcgRW5lcmd5OntcIiBcIn1cclxuICAgICAgICAgIHtjb3N0LmVuZXJneSAvIGNvc3QuYnVpbGR0aW1lfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y29uc3RydWN0YWJsZXMubWFwKChpZCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHVuaXQgPSBwcm9wcy5kYltpZF07XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIGtleT17dW5pdC5Vbml0TmFtZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgblVuaXQgPSB7IC4uLnVuaXQgfTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIHVuaXQhXCIsIHVuaXQpO1xyXG4gICAgICAgICAgICAgICAgblVuaXQua2V5ID0gR2V0QW5kSW5jUSgpO1xyXG4gICAgICAgICAgICAgICAgU2V0UXVldWUoWy4uLlF1ZXVlLCBuVW5pdF0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dW5pdC5GdWxsTmFtZX0gKHt1bml0LlNpbXBsZU5hbWV9KVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvbGlkfT5cclxuICAgICAgICB7UXVldWUubWFwKCh1bml0LCBpKSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17dW5pdC5rZXl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBTZXRRdWV1ZShRdWV1ZS5maWx0ZXIoKG0sIHFpKSA9PiBpICE9IHFpKSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt1bml0LkZ1bGxOYW1lfSBNOnt1bml0LkVjb25vbXkuQnVpbGRDb3N0TWFzc30gRTpcclxuICAgICAgICAgICAge3VuaXQuRWNvbm9teS5CdWlsZENvc3RFbmVyZ3l9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnVpbGRpbmdEYXRhIHtcclxuICBjb25zdHJ1Y3RvcihCdWlsZGluZ1Byb3ApIHtcclxuICAgIGNvbnNvbGUubG9nKEJ1aWxkaW5nUHJvcCk7XHJcbiAgICB0aGlzLlVuaXRJZCA9IEJ1aWxkaW5nUHJvcC5Vbml0TmFtZTtcclxuICAgIHRoaXMuRnVsbE5hbWUgPSBCdWlsZGluZ1Byb3AuRnVsbE5hbWU7XHJcbiAgICB0aGlzLlNpbXBsZU5hbWUgPSBCdWlsZGluZ1Byb3AuU2ltcGxlTmFtZTtcclxuICAgIHRoaXMuY29uc3RydWN0YWJsZXMgPSBCdWlsZGluZ1Byb3AuQ29uc3RydWN0YWJsZXMgfHwgW107XHJcbiAgICB0aGlzLkFzc2lzdHMgPSB7IHQxOiAwLCB0MjogMCwgdDM6IDAgfTtcclxuICAgIHRoaXMuVXBncmFkZXMgPSBCdWlsZGluZ1Byb3AuVXBncmFkZXMgfHwgW107XHJcblxyXG4gICAgdGhpcy5CdWlsZFJhdGUgPSBCdWlsZGluZ1Byb3AuRWNvbm9teS5CdWlsZFJhdGU7XHJcbiAgICB0aGlzLk1hc3NQZXJTZWMgPSBCdWlsZGluZ1Byb3AuRWNvbm9teS5Qcm9kdWN0aW9uUGVyU2Vjb25kTWFzcyB8fCAwO1xyXG4gICAgdGhpcy5FbmVyZ3lQZXJTZWMgPVxyXG4gICAgICAoQnVpbGRpbmdQcm9wLkVjb25vbXkuTWFpbnRlbmFuY2VDb25zdW1wdGlvblBlclNlY29uZEVuZXJneSB8fCAwKSArXHJcbiAgICAgIChCdWlsZGluZ1Byb3AuRWNvbm9teS5Qcm9kdWN0aW9uUGVyU2Vjb25kRW5lcmd5IHx8IDApO1xyXG5cclxuICAgIHRoaXMucCA9IEJ1aWxkaW5nUHJvcDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==