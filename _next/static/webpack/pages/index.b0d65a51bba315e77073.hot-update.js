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
  var AvgMassPerSec = props.data.MassPerSec - (cost.buildtime != 0 ? cost.mass / cost.buildtime * props.data.BuildRate : 0);
  var AvgEnergyPerSec = props.data.EnergyPerSec - (cost.buildtime != 0 ? cost.energy / cost.buildtime * props.data.BuildRate : 0);
  return __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
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
  }, "Build Rate: ", props.data.p.Economy.BuildRate, "Total Mass: ", cost.mass, ", Total Energy:", cost.energy, ", Total Build time:", " ", cost.buildtime), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, "Avg Mass: ", AvgMassPerSec, ", Avg Energy: ", AvgEnergyPerSec), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
        lineNumber: 67,
        columnNumber: 13
      }
    }, unit.FullName, " (", unit.SimpleName, ")");
  })), __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
        lineNumber: 84,
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
  this.EnergyPerSec = (-BuildingProp.Economy.MaintenanceConsumptionPerSecondEnergy || 0) + (BuildingProp.Economy.ProductionPerSecondEnergy || 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy5qcyJdLCJuYW1lcyI6WyJCdWlsZGluZyIsInByb3BzIiwidXNlU3RhdGUiLCJRdWV1ZSIsIlNldFF1ZXVlIiwiUXVldWVJZCIsIlNldElkIiwiR2V0QW5kSW5jUSIsImlkIiwiY29zdCIsIm1hcCIsInVuaXQiLCJtYXNzIiwiRWNvbm9teSIsIkJ1aWxkQ29zdE1hc3MiLCJlbmVyZ3kiLCJCdWlsZENvc3RFbmVyZ3kiLCJidWlsZHRpbWUiLCJCdWlsZFRpbWUiLCJyZWR1Y2UiLCJwdiIsImN2IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjb25zdHJ1Y3RhYmxlcyIsIlVwZ3JhZGVzIiwiY29uY2F0IiwiZmlsdGVyIiwidSIsIlVuaXROYW1lIiwiaW5jbHVkZXMiLCJBdmdNYXNzUGVyU2VjIiwiTWFzc1BlclNlYyIsIkJ1aWxkUmF0ZSIsIkF2Z0VuZXJneVBlclNlYyIsIkVuZXJneVBlclNlYyIsInN0eWxlcyIsInNvbGlkIiwiU2ltcGxlTmFtZSIsInAiLCJkYiIsIm5Vbml0Iiwia2V5IiwiRnVsbE5hbWUiLCJpIiwibSIsInFpIiwiQnVpbGRpbmdEYXRhIiwiQnVpbGRpbmdQcm9wIiwiVW5pdElkIiwiQ29uc3RydWN0YWJsZXMiLCJBc3Npc3RzIiwidDEiLCJ0MiIsInQzIiwiUHJvZHVjdGlvblBlclNlY29uZE1hc3MiLCJNYWludGVuYW5jZUNvbnN1bXB0aW9uUGVyU2Vjb25kRW5lcmd5IiwiUHJvZHVjdGlvblBlclNlY29uZEVuZXJneSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDLEVBQUQsQ0FESTtBQUFBLE1BQy9CQyxLQUQrQjtBQUFBLE1BQ3hCQyxRQUR3Qjs7QUFBQSxtQkFFYkYsc0RBQVEsQ0FB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QXRCLElBQStELENBQWhFLEtBQ0NSLFlBQVksQ0FBQ3BDLE9BQWIsQ0FBcUI2Qyx5QkFBckIsSUFBa0QsQ0FEbkQsQ0FERjtBQUlBLE9BQUtsQixDQUFMLEdBQVNTLFlBQVQ7QUFDRCxDQWpCSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMGQ2NWE1MWJiYTMxNWU3NzA3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0J1aWxkaW5nLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1aWxkaW5nKHByb3BzKSB7XHJcbiAgY29uc3QgW1F1ZXVlLCBTZXRRdWV1ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW1F1ZXVlSWQsIFNldElkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBmdW5jdGlvbiBHZXRBbmRJbmNRKCkge1xyXG4gICAgbGV0IGlkID0gUXVldWVJZDtcclxuICAgIFNldElkKGlkICsgMSk7XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfVxyXG5cclxuICBsZXQgY29zdCA9IFF1ZXVlLm1hcCgodW5pdCkgPT4gKHtcclxuICAgIG1hc3M6IHVuaXQuRWNvbm9teS5CdWlsZENvc3RNYXNzLFxyXG4gICAgZW5lcmd5OiB1bml0LkVjb25vbXkuQnVpbGRDb3N0RW5lcmd5LFxyXG4gICAgYnVpbGR0aW1lOiB1bml0LkVjb25vbXkuQnVpbGRUaW1lLFxyXG4gIH0pKS5yZWR1Y2UoXHJcbiAgICAocHYsIGN2KSA9PiAoe1xyXG4gICAgICBtYXNzOiBwdi5tYXNzICsgY3YubWFzcyxcclxuICAgICAgZW5lcmd5OiBwdi5lbmVyZ3kgKyBjdi5lbmVyZ3ksXHJcbiAgICAgIGJ1aWxkdGltZTogcHYuYnVpbGR0aW1lICsgY3YuYnVpbGR0aW1lLFxyXG4gICAgfSksXHJcbiAgICB7IG1hc3M6IDAsIGVuZXJneTogMCwgYnVpbGR0aW1lOiAwIH1cclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFwiQ09OU1RSVUNUSU5HIEJVSUxESU5HXCIpO1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLmRhdGEpO1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLmRhdGEuY29uc3RydWN0YWJsZXMpO1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLmRhdGEuVXBncmFkZXMpO1xyXG4gIGNvbnNvbGUubG9nKFF1ZXVlKTtcclxuICBsZXQgY29uc3RydWN0YWJsZXMgPSBwcm9wcy5kYXRhLmNvbnN0cnVjdGFibGVzLmNvbmNhdChcclxuICAgIHByb3BzLmRhdGEuVXBncmFkZXMuZmlsdGVyKFxyXG4gICAgICAoaWQpID0+ICFRdWV1ZS5tYXAoKHUpID0+IHUuVW5pdE5hbWUpLmluY2x1ZGVzKGlkKVxyXG4gICAgKVxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coY29uc3RydWN0YWJsZXMpO1xyXG5cclxuICBsZXQgQXZnTWFzc1BlclNlYyA9XHJcbiAgICBwcm9wcy5kYXRhLk1hc3NQZXJTZWMgLVxyXG4gICAgKGNvc3QuYnVpbGR0aW1lICE9IDBcclxuICAgICAgPyAoY29zdC5tYXNzIC8gY29zdC5idWlsZHRpbWUpICogcHJvcHMuZGF0YS5CdWlsZFJhdGVcclxuICAgICAgOiAwKTtcclxuXHJcbiAgbGV0IEF2Z0VuZXJneVBlclNlYyA9XHJcbiAgICBwcm9wcy5kYXRhLkVuZXJneVBlclNlYyAtXHJcbiAgICAoY29zdC5idWlsZHRpbWUgIT0gMFxyXG4gICAgICA/IChjb3N0LmVuZXJneSAvIGNvc3QuYnVpbGR0aW1lKSAqIHByb3BzLmRhdGEuQnVpbGRSYXRlXHJcbiAgICAgIDogMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvbGlkfT5cclxuICAgICAgPHA+e3Byb3BzLmRhdGEuU2ltcGxlTmFtZX08L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEJ1aWxkIFJhdGU6IHtwcm9wcy5kYXRhLnAuRWNvbm9teS5CdWlsZFJhdGV9XHJcbiAgICAgICAgVG90YWwgTWFzczoge2Nvc3QubWFzc30sIFRvdGFsIEVuZXJneTp7Y29zdC5lbmVyZ3l9LCBUb3RhbCBCdWlsZCB0aW1lOntcIiBcIn1cclxuICAgICAgICB7Y29zdC5idWlsZHRpbWV9XHJcbiAgICAgIDwvcD5cclxuICAgICAge1xyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgQXZnIE1hc3M6IHtBdmdNYXNzUGVyU2VjfSwgQXZnIEVuZXJneToge0F2Z0VuZXJneVBlclNlY31cclxuICAgICAgICA8L3A+XHJcbiAgICAgIH1cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y29uc3RydWN0YWJsZXMubWFwKChpZCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHVuaXQgPSBwcm9wcy5kYltpZF07XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIGtleT17dW5pdC5Vbml0TmFtZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgblVuaXQgPSB7IC4uLnVuaXQgfTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIHVuaXQhXCIsIHVuaXQpO1xyXG4gICAgICAgICAgICAgICAgblVuaXQua2V5ID0gR2V0QW5kSW5jUSgpO1xyXG4gICAgICAgICAgICAgICAgU2V0UXVldWUoWy4uLlF1ZXVlLCBuVW5pdF0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dW5pdC5GdWxsTmFtZX0gKHt1bml0LlNpbXBsZU5hbWV9KVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvbGlkfT5cclxuICAgICAgICB7UXVldWUubWFwKCh1bml0LCBpKSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17dW5pdC5rZXl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBTZXRRdWV1ZShRdWV1ZS5maWx0ZXIoKG0sIHFpKSA9PiBpICE9IHFpKSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt1bml0LkZ1bGxOYW1lfSBNOnt1bml0LkVjb25vbXkuQnVpbGRDb3N0TWFzc30gRTpcclxuICAgICAgICAgICAge3VuaXQuRWNvbm9teS5CdWlsZENvc3RFbmVyZ3l9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnVpbGRpbmdEYXRhIHtcclxuICBjb25zdHJ1Y3RvcihCdWlsZGluZ1Byb3ApIHtcclxuICAgIGNvbnNvbGUubG9nKEJ1aWxkaW5nUHJvcCk7XHJcbiAgICB0aGlzLlVuaXRJZCA9IEJ1aWxkaW5nUHJvcC5Vbml0TmFtZTtcclxuICAgIHRoaXMuRnVsbE5hbWUgPSBCdWlsZGluZ1Byb3AuRnVsbE5hbWU7XHJcbiAgICB0aGlzLlNpbXBsZU5hbWUgPSBCdWlsZGluZ1Byb3AuU2ltcGxlTmFtZTtcclxuICAgIHRoaXMuY29uc3RydWN0YWJsZXMgPSBCdWlsZGluZ1Byb3AuQ29uc3RydWN0YWJsZXMgfHwgW107XHJcbiAgICB0aGlzLkFzc2lzdHMgPSB7IHQxOiAwLCB0MjogMCwgdDM6IDAgfTtcclxuICAgIHRoaXMuVXBncmFkZXMgPSBCdWlsZGluZ1Byb3AuVXBncmFkZXMgfHwgW107XHJcblxyXG4gICAgdGhpcy5CdWlsZFJhdGUgPSBCdWlsZGluZ1Byb3AuRWNvbm9teS5CdWlsZFJhdGU7XHJcbiAgICB0aGlzLk1hc3NQZXJTZWMgPSBCdWlsZGluZ1Byb3AuRWNvbm9teS5Qcm9kdWN0aW9uUGVyU2Vjb25kTWFzcyB8fCAwO1xyXG4gICAgdGhpcy5FbmVyZ3lQZXJTZWMgPVxyXG4gICAgICAoLUJ1aWxkaW5nUHJvcC5FY29ub215Lk1haW50ZW5hbmNlQ29uc3VtcHRpb25QZXJTZWNvbmRFbmVyZ3kgfHwgMCkgK1xyXG4gICAgICAoQnVpbGRpbmdQcm9wLkVjb25vbXkuUHJvZHVjdGlvblBlclNlY29uZEVuZXJneSB8fCAwKTtcclxuXHJcbiAgICB0aGlzLnAgPSBCdWlsZGluZ1Byb3A7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=