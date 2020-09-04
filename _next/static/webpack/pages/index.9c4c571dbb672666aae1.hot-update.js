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
  var constructables = props.data.constructables.concat((props.data.Upgrades || []).filter(function (id) {
    return !Queue.includes(id);
  }));
  return __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, props.data.SimpleName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "Total Mass: ", cost.mass, ", Total Energy:", cost.energy, ", Total Build time:", " ", cost.buildtime), cost.buildtime > 0 && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Avg Mass: ", cost.mass / cost.buildtime, ", Avg Energy:", " ", cost.energy / cost.buildtime), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
        lineNumber: 51,
        columnNumber: 13
      }
    }, unit.FullName, " (", unit.SimpleName, ")");
  })), __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
        lineNumber: 68,
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
  this.p = BuildingProp;
  this.UnitId = BuildingProp.UnitName;
  this.FullName = BuildingProp.FullName;
  this.SimpleName = BuildingProp.SimpleName;
  this.constructables = BuildingProp.Constructables;
  this.Assists = {
    t1: 0,
    t2: 0,
    t3: 0
  };
  this.Upgrades = p.Upgrades;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy5qcyJdLCJuYW1lcyI6WyJCdWlsZGluZyIsInByb3BzIiwidXNlU3RhdGUiLCJRdWV1ZSIsIlNldFF1ZXVlIiwiUXVldWVJZCIsIlNldElkIiwiR2V0QW5kSW5jUSIsImlkIiwiY29zdCIsIm1hcCIsInVuaXQiLCJtYXNzIiwiRWNvbm9teSIsIkJ1aWxkQ29zdE1hc3MiLCJlbmVyZ3kiLCJCdWlsZENvc3RFbmVyZ3kiLCJidWlsZHRpbWUiLCJCdWlsZFRpbWUiLCJyZWR1Y2UiLCJwdiIsImN2IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjb25zdHJ1Y3RhYmxlcyIsIlVwZ3JhZGVzIiwiY29uY2F0IiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzdHlsZXMiLCJzb2xpZCIsIlNpbXBsZU5hbWUiLCJkYiIsIlVuaXROYW1lIiwiblVuaXQiLCJrZXkiLCJGdWxsTmFtZSIsImkiLCJtIiwicWkiLCJCdWlsZGluZ0RhdGEiLCJCdWlsZGluZ1Byb3AiLCJwIiwiVW5pdElkIiwiQ29uc3RydWN0YWJsZXMiLCJBc3Npc3RzIiwidDEiLCJ0MiIsInQzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDL0JDLEtBRCtCO0FBQUEsTUFDeEJDLFFBRHdCOztBQUFBLG1CQUViRixzREFBUSxDQUFDLENBQUQsQ0FGSztBQUFBLE1BRS9CRyxPQUYrQjtBQUFBLE1BRXRCQyxLQUZzQjs7QUFJdEMsV0FBU0MsVUFBVCxHQUFzQjtBQUNwQixRQUFJQyxFQUFFLEdBQUdILE9BQVQ7QUFDQUMsU0FBSyxDQUFDRSxFQUFFLEdBQUcsQ0FBTixDQUFMO0FBQ0EsV0FBT0EsRUFBUDtBQUNEOztBQUVELE1BQUlDLElB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O0FBQUVDLE1BQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUUsRUFBRSxDQUFiO0FBQWdCQyxNQUFFLEVBQUU7QUFBcEIsR0FBZjtBQUNBLE9BQUt2QixRQUFMLEdBQWdCaUIsQ0FBQyxDQUFDakIsUUFBbEI7QUFDRCxDQVZIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjljNGM1NzFkYmI2NzI2NjZhYWUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQnVpbGRpbmcubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnVpbGRpbmcocHJvcHMpIHtcclxuICBjb25zdCBbUXVldWUsIFNldFF1ZXVlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbUXVldWVJZCwgU2V0SWRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGZ1bmN0aW9uIEdldEFuZEluY1EoKSB7XHJcbiAgICBsZXQgaWQgPSBRdWV1ZUlkO1xyXG4gICAgU2V0SWQoaWQgKyAxKTtcclxuICAgIHJldHVybiBpZDtcclxuICB9XHJcblxyXG4gIGxldCBjb3N0ID0gUXVldWUubWFwKCh1bml0KSA9PiAoe1xyXG4gICAgbWFzczogdW5pdC5FY29ub215LkJ1aWxkQ29zdE1hc3MsXHJcbiAgICBlbmVyZ3k6IHVuaXQuRWNvbm9teS5CdWlsZENvc3RFbmVyZ3ksXHJcbiAgICBidWlsZHRpbWU6IHVuaXQuRWNvbm9teS5CdWlsZFRpbWUsXHJcbiAgfSkpLnJlZHVjZShcclxuICAgIChwdiwgY3YpID0+ICh7XHJcbiAgICAgIG1hc3M6IHB2Lm1hc3MgKyBjdi5tYXNzLFxyXG4gICAgICBlbmVyZ3k6IHB2LmVuZXJneSArIGN2LmVuZXJneSxcclxuICAgICAgYnVpbGR0aW1lOiBwdi5idWlsZHRpbWUgKyBjdi5idWlsZHRpbWUsXHJcbiAgICB9KSxcclxuICAgIHsgbWFzczogMCwgZW5lcmd5OiAwLCBidWlsZHRpbWU6IDAgfVxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXCJDT05TVFJVQ1RJTkcgQlVJTERJTkdcIik7XHJcbiAgY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XHJcbiAgY29uc29sZS5sb2cocHJvcHMuZGF0YS5jb25zdHJ1Y3RhYmxlcyk7XHJcbiAgY29uc29sZS5sb2cocHJvcHMuZGF0YS5VcGdyYWRlcyk7XHJcbiAgbGV0IGNvbnN0cnVjdGFibGVzID0gcHJvcHMuZGF0YS5jb25zdHJ1Y3RhYmxlcy5jb25jYXQoXHJcbiAgICAocHJvcHMuZGF0YS5VcGdyYWRlcyB8fCBbXSkuZmlsdGVyKChpZCkgPT4gIVF1ZXVlLmluY2x1ZGVzKGlkKSlcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2xpZH0+XHJcbiAgICAgIDxwPntwcm9wcy5kYXRhLlNpbXBsZU5hbWV9PC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICBUb3RhbCBNYXNzOiB7Y29zdC5tYXNzfSwgVG90YWwgRW5lcmd5Ontjb3N0LmVuZXJneX0sIFRvdGFsIEJ1aWxkIHRpbWU6e1wiIFwifVxyXG4gICAgICAgIHtjb3N0LmJ1aWxkdGltZX1cclxuICAgICAgPC9wPlxyXG4gICAgICB7Y29zdC5idWlsZHRpbWUgPiAwICYmIChcclxuICAgICAgICA8cD5cclxuICAgICAgICAgIEF2ZyBNYXNzOiB7Y29zdC5tYXNzIC8gY29zdC5idWlsZHRpbWV9LCBBdmcgRW5lcmd5OntcIiBcIn1cclxuICAgICAgICAgIHtjb3N0LmVuZXJneSAvIGNvc3QuYnVpbGR0aW1lfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y29uc3RydWN0YWJsZXMubWFwKChpZCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHVuaXQgPSBwcm9wcy5kYltpZF07XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIGtleT17dW5pdC5Vbml0TmFtZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgblVuaXQgPSB7IC4uLnVuaXQgfTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIHVuaXQhXCIsIHVuaXQpO1xyXG4gICAgICAgICAgICAgICAgblVuaXQua2V5ID0gR2V0QW5kSW5jUSgpO1xyXG4gICAgICAgICAgICAgICAgU2V0UXVldWUoWy4uLlF1ZXVlLCBuVW5pdF0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dW5pdC5GdWxsTmFtZX0gKHt1bml0LlNpbXBsZU5hbWV9KVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvbGlkfT5cclxuICAgICAgICB7UXVldWUubWFwKCh1bml0LCBpKSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17dW5pdC5rZXl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBTZXRRdWV1ZShRdWV1ZS5maWx0ZXIoKG0sIHFpKSA9PiBpICE9IHFpKSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt1bml0LkZ1bGxOYW1lfSBNOnt1bml0LkVjb25vbXkuQnVpbGRDb3N0TWFzc30gRTpcclxuICAgICAgICAgICAge3VuaXQuRWNvbm9teS5CdWlsZENvc3RFbmVyZ3l9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnVpbGRpbmdEYXRhIHtcclxuICBjb25zdHJ1Y3RvcihCdWlsZGluZ1Byb3ApIHtcclxuICAgIGNvbnNvbGUubG9nKEJ1aWxkaW5nUHJvcCk7XHJcbiAgICB0aGlzLnAgPSBCdWlsZGluZ1Byb3A7XHJcbiAgICB0aGlzLlVuaXRJZCA9IEJ1aWxkaW5nUHJvcC5Vbml0TmFtZTtcclxuICAgIHRoaXMuRnVsbE5hbWUgPSBCdWlsZGluZ1Byb3AuRnVsbE5hbWU7XHJcbiAgICB0aGlzLlNpbXBsZU5hbWUgPSBCdWlsZGluZ1Byb3AuU2ltcGxlTmFtZTtcclxuICAgIHRoaXMuY29uc3RydWN0YWJsZXMgPSBCdWlsZGluZ1Byb3AuQ29uc3RydWN0YWJsZXM7XHJcbiAgICB0aGlzLkFzc2lzdHMgPSB7IHQxOiAwLCB0MjogMCwgdDM6IDAgfTtcclxuICAgIHRoaXMuVXBncmFkZXMgPSBwLlVwZ3JhZGVzO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9