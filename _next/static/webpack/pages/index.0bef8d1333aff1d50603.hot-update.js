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
    }).includes();
  }));
  console.log(constructables);
  return __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, props.data.SimpleName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Total Mass: ", cost.mass, ", Total Energy:", cost.energy, ", Total Build time:", " ", cost.buildtime), cost.buildtime > 0 && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "Avg Mass: ", cost.mass / cost.buildtime, ", Avg Energy:", " ", cost.energy / cost.buildtime), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
        lineNumber: 53,
        columnNumber: 13
      }
    }, unit.FullName, " (", unit.SimpleName, ")");
  })), __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
        lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy5qcyJdLCJuYW1lcyI6WyJCdWlsZGluZyIsInByb3BzIiwidXNlU3RhdGUiLCJRdWV1ZSIsIlNldFF1ZXVlIiwiUXVldWVJZCIsIlNldElkIiwiR2V0QW5kSW5jUSIsImlkIiwiY29zdCIsIm1hcCIsInVuaXQiLCJtYXNzIiwiRWNvbm9teSIsIkJ1aWxkQ29zdE1hc3MiLCJlbmVyZ3kiLCJCdWlsZENvc3RFbmVyZ3kiLCJidWlsZHRpbWUiLCJCdWlsZFRpbWUiLCJyZWR1Y2UiLCJwdiIsImN2IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjb25zdHJ1Y3RhYmxlcyIsIlVwZ3JhZGVzIiwiY29uY2F0IiwiZmlsdGVyIiwidSIsIlVuaXROYW1lIiwiaW5jbHVkZXMiLCJzdHlsZXMiLCJzb2xpZCIsIlNpbXBsZU5hbWUiLCJkYiIsIm5Vbml0Iiwia2V5IiwiRnVsbE5hbWUiLCJpIiwibSIsInFpIiwiQnVpbGRpbmdEYXRhIiwiQnVpbGRpbmdQcm9wIiwiVW5pdElkIiwiQ29uc3RydWN0YWJsZXMiLCJBc3Npc3RzIiwidDEiLCJ0MiIsInQzIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDLEVBQUQsQ0FESTtBQUFBLE1BQy9CQyxLQUQrQjtBQUFBLE1BQ3hCQyxRQUR3Qjs7QUFBQSxtQkFFYkYsc0RBQVEsQ0FBQyxDQUFELENBRks7QUFBQSxNQUUvQkcsT0FGK0I7QUFBQSxNQUV0QkMsS0FGc0I7O0FBSXRDLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEIsUUFBSUMsRUFBRSxHQUFHSCxPQUFUO0FBQ0FDLFNBQUssQ0FBQ0UsRUFBRSxHQUFHLENBQU4sQ0FBTDtBQUNBLFdBQU9BLEVBQVA7QUFDRDs7QUFFRCxNQUFJ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QlMsWUFBWSxDQUFDVCxVQUEvQjtBQUNBLE9BQUtULGNBQUwsR0FBc0JrQixZQUFZLENBQUNFLGNBQWIsSUFBK0IsRUFBckQ7QUFDQSxPQUFLQyxPQUFMLEdBQWU7QUFBRUMsTUFBRSxFQUFFLENBQU47QUFBU0MsTUFBRSxFQUFFLENBQWI7QUFBZ0JDLE1BQUUsRUFBRTtBQUFwQixHQUFmO0FBQ0EsT0FBS3ZCLFFBQUwsR0FBZ0JpQixZQUFZLENBQUNqQixRQUFiLElBQXlCLEVBQXpDO0FBQ0EsT0FBS3dCLENBQUwsR0FBU1AsWUFBVDtBQUNELENBVkgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGJlZjhkMTMzM2FmZjFkNTA2MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9CdWlsZGluZy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdWlsZGluZyhwcm9wcykge1xyXG4gIGNvbnN0IFtRdWV1ZSwgU2V0UXVldWVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtRdWV1ZUlkLCBTZXRJZF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgZnVuY3Rpb24gR2V0QW5kSW5jUSgpIHtcclxuICAgIGxldCBpZCA9IFF1ZXVlSWQ7XHJcbiAgICBTZXRJZChpZCArIDEpO1xyXG4gICAgcmV0dXJuIGlkO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNvc3QgPSBRdWV1ZS5tYXAoKHVuaXQpID0+ICh7XHJcbiAgICBtYXNzOiB1bml0LkVjb25vbXkuQnVpbGRDb3N0TWFzcyxcclxuICAgIGVuZXJneTogdW5pdC5FY29ub215LkJ1aWxkQ29zdEVuZXJneSxcclxuICAgIGJ1aWxkdGltZTogdW5pdC5FY29ub215LkJ1aWxkVGltZSxcclxuICB9KSkucmVkdWNlKFxyXG4gICAgKHB2LCBjdikgPT4gKHtcclxuICAgICAgbWFzczogcHYubWFzcyArIGN2Lm1hc3MsXHJcbiAgICAgIGVuZXJneTogcHYuZW5lcmd5ICsgY3YuZW5lcmd5LFxyXG4gICAgICBidWlsZHRpbWU6IHB2LmJ1aWxkdGltZSArIGN2LmJ1aWxkdGltZSxcclxuICAgIH0pLFxyXG4gICAgeyBtYXNzOiAwLCBlbmVyZ3k6IDAsIGJ1aWxkdGltZTogMCB9XHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcIkNPTlNUUlVDVElORyBCVUlMRElOR1wiKTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhKTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhLmNvbnN0cnVjdGFibGVzKTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhLlVwZ3JhZGVzKTtcclxuICBjb25zb2xlLmxvZyhRdWV1ZSk7XHJcbiAgbGV0IGNvbnN0cnVjdGFibGVzID0gcHJvcHMuZGF0YS5jb25zdHJ1Y3RhYmxlcy5jb25jYXQoXHJcbiAgICBwcm9wcy5kYXRhLlVwZ3JhZGVzLmZpbHRlcigoaWQpID0+ICFRdWV1ZS5tYXAoKHUpID0+IHUuVW5pdE5hbWUpLmluY2x1ZGVzKCkpXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhjb25zdHJ1Y3RhYmxlcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvbGlkfT5cclxuICAgICAgPHA+e3Byb3BzLmRhdGEuU2ltcGxlTmFtZX08L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFRvdGFsIE1hc3M6IHtjb3N0Lm1hc3N9LCBUb3RhbCBFbmVyZ3k6e2Nvc3QuZW5lcmd5fSwgVG90YWwgQnVpbGQgdGltZTp7XCIgXCJ9XHJcbiAgICAgICAge2Nvc3QuYnVpbGR0aW1lfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtjb3N0LmJ1aWxkdGltZSA+IDAgJiYgKFxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgQXZnIE1hc3M6IHtjb3N0Lm1hc3MgLyBjb3N0LmJ1aWxkdGltZX0sIEF2ZyBFbmVyZ3k6e1wiIFwifVxyXG4gICAgICAgICAge2Nvc3QuZW5lcmd5IC8gY29zdC5idWlsZHRpbWV9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtjb25zdHJ1Y3RhYmxlcy5tYXAoKGlkKSA9PiB7XHJcbiAgICAgICAgICBsZXQgdW5pdCA9IHByb3BzLmRiW2lkXTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAga2V5PXt1bml0LlVuaXROYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuVW5pdCA9IHsgLi4udW5pdCB9O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZGRpbmcgdW5pdCFcIiwgdW5pdCk7XHJcbiAgICAgICAgICAgICAgICBuVW5pdC5rZXkgPSBHZXRBbmRJbmNRKCk7XHJcbiAgICAgICAgICAgICAgICBTZXRRdWV1ZShbLi4uUXVldWUsIG5Vbml0XSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt1bml0LkZ1bGxOYW1lfSAoe3VuaXQuU2ltcGxlTmFtZX0pXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29saWR9PlxyXG4gICAgICAgIHtRdWV1ZS5tYXAoKHVuaXQsIGkpID0+IChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAga2V5PXt1bml0LmtleX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIFNldFF1ZXVlKFF1ZXVlLmZpbHRlcigobSwgcWkpID0+IGkgIT0gcWkpKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3VuaXQuRnVsbE5hbWV9IE06e3VuaXQuRWNvbm9teS5CdWlsZENvc3RNYXNzfSBFOlxyXG4gICAgICAgICAgICB7dW5pdC5FY29ub215LkJ1aWxkQ29zdEVuZXJneX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCdWlsZGluZ0RhdGEge1xyXG4gIGNvbnN0cnVjdG9yKEJ1aWxkaW5nUHJvcCkge1xyXG4gICAgY29uc29sZS5sb2coQnVpbGRpbmdQcm9wKTtcclxuICAgIHRoaXMuVW5pdElkID0gQnVpbGRpbmdQcm9wLlVuaXROYW1lO1xyXG4gICAgdGhpcy5GdWxsTmFtZSA9IEJ1aWxkaW5nUHJvcC5GdWxsTmFtZTtcclxuICAgIHRoaXMuU2ltcGxlTmFtZSA9IEJ1aWxkaW5nUHJvcC5TaW1wbGVOYW1lO1xyXG4gICAgdGhpcy5jb25zdHJ1Y3RhYmxlcyA9IEJ1aWxkaW5nUHJvcC5Db25zdHJ1Y3RhYmxlcyB8fCBbXTtcclxuICAgIHRoaXMuQXNzaXN0cyA9IHsgdDE6IDAsIHQyOiAwLCB0MzogMCB9O1xyXG4gICAgdGhpcy5VcGdyYWRlcyA9IEJ1aWxkaW5nUHJvcC5VcGdyYWRlcyB8fCBbXTtcclxuICAgIHRoaXMucCA9IEJ1aWxkaW5nUHJvcDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==