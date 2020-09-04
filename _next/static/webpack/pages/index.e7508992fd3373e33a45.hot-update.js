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
  return __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, props.data.SimpleName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Total Mass: ", cost.mass, ", Total Energy:", cost.energy, ", Total Build time:", " ", cost.buildtime), cost.buildtime > 0 && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Avg Mass: ", cost.mass / cost.buildtime, ", Avg Energy:", " ", cost.energy / cost.buildtime), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, props.data.constructables.map(function (id) {
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
        lineNumber: 43,
        columnNumber: 13
      }
    }, unit.FullName, " (", unit.SimpleName, ")");
  })), __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
        lineNumber: 60,
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
  this.constructables = BuildingProp.Constructables;
  this.Assists = {
    t1: 0,
    t2: 0,
    t3: 0
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy5qcyJdLCJuYW1lcyI6WyJCdWlsZGluZyIsInByb3BzIiwidXNlU3RhdGUiLCJRdWV1ZSIsIlNldFF1ZXVlIiwiUXVldWVJZCIsIlNldElkIiwiR2V0QW5kSW5jUSIsImlkIiwiY29zdCIsIm1hcCIsInVuaXQiLCJtYXNzIiwiRWNvbm9teSIsIkJ1aWxkQ29zdE1hc3MiLCJlbmVyZ3kiLCJCdWlsZENvc3RFbmVyZ3kiLCJidWlsZHRpbWUiLCJCdWlsZFRpbWUiLCJyZWR1Y2UiLCJwdiIsImN2Iiwic3R5bGVzIiwic29saWQiLCJkYXRhIiwiU2ltcGxlTmFtZSIsImNvbnN0cnVjdGFibGVzIiwiZGIiLCJVbml0TmFtZSIsIm5Vbml0IiwiY29uc29sZSIsImxvZyIsImtleSIsIkZ1bGxOYW1lIiwiaSIsImZpbHRlciIsIm0iLCJxaSIsIkJ1aWxkaW5nRGF0YSIsIkJ1aWxkaW5nUHJvcCIsIlVuaXRJZCIsIkNvbnN0cnVjdGFibGVzIiwiQXNzaXN0cyIsInQxIiwidDIiLCJ0MyIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxFQUFELENBREk7QUFBQSxNQUMvQkMsS0FEK0I7QUFBQSxNQUN4QkMsUUFEd0I7O0FBQUEsbUJBRWJGLHNEQUFRLENBQUMsQ0FBRCxDQUZLO0FBQUEsTUFFL0JHLE9BRitCO0FBQUEsTUFFdEJDLEtBRnNCOztBQUl0QyxXQUFTQyxVQUFULEdBQXNCO0FBQ3BCLFFBQUlDLEVBQUUsR0FBR0gsT0FBVDtBQUNBQyxTQUFLLENBQUNFLEVBQUUsR0FBRyxDQUFOLENBQUw7QUFDQSxXQUFPQSxFQUFQO0FBQ0Q7O0FBRUQsTUFBSUMsSUFBSSxHQUFHTixLQUFLLENBQUNPLEdBQU4sQ0FBVSxV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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNRzFCLElBQUksQ0FBQ3NCLFFBTlIsU0FNcUJ0QixJQUFJLENBQUNFLE9BQUwsQ0FBYUMsYUFObEMsU0FPR0gsSUFBSSxDQUFDRSxPQUFMLENBQWFHLGVBUGhCLENBRFM7QUFBQSxHQUFWLENBREgsQ0EvQkYsQ0FERjtBQStDRDs7R0FyRXVCaEIsUTs7S0FBQUEsUTtBQXVFakIsSUFBTXNDLFlBQWIsR0FDRSxzQkFBWUMsWUFBWixFQUEwQjtBQUFBOztBQUN4QlQsU0FBTyxDQUFDQyxHQUFSLENBQVlRLFlBQVo7QUFDQSxPQUFLQyxNQUFMLEdBQWNELFlBQVksQ0FBQ1gsUUFBM0I7QUFDQSxPQUFLSyxRQUFMLEdBQWdCTSxZQUFZLENBQUNOLFFBQTdCO0FBQ0EsT0FBS1IsVUFBTCxHQUFrQmMsWUFBWSxDQUFDZCxVQUEvQjtBQUNBLE9BQUtDLGNBQUwsR0FBc0JhLFlBQVksQ0FBQ0UsY0FBbkM7QUFDQSxPQUFLQyxPQUFMLEdBQWU7QUFBRUMsTUFBRSxFQUFFLENBQU47QUFBU0MsTUFBRSxFQUFFLENBQWI7QUFBZ0JDLE1BQUUsRUFBRTtBQUFwQixHQUFmO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTUCxZQUFUO0FBQ0QsQ0FUSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNzUwODk5MmZkMzM3M2UzM2E0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0J1aWxkaW5nLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1aWxkaW5nKHByb3BzKSB7XHJcbiAgY29uc3QgW1F1ZXVlLCBTZXRRdWV1ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW1F1ZXVlSWQsIFNldElkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBmdW5jdGlvbiBHZXRBbmRJbmNRKCkge1xyXG4gICAgbGV0IGlkID0gUXVldWVJZDtcclxuICAgIFNldElkKGlkICsgMSk7XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfVxyXG5cclxuICBsZXQgY29zdCA9IFF1ZXVlLm1hcCgodW5pdCkgPT4gKHtcclxuICAgIG1hc3M6IHVuaXQuRWNvbm9teS5CdWlsZENvc3RNYXNzLFxyXG4gICAgZW5lcmd5OiB1bml0LkVjb25vbXkuQnVpbGRDb3N0RW5lcmd5LFxyXG4gICAgYnVpbGR0aW1lOiB1bml0LkVjb25vbXkuQnVpbGRUaW1lLFxyXG4gIH0pKS5yZWR1Y2UoXHJcbiAgICAocHYsIGN2KSA9PiAoe1xyXG4gICAgICBtYXNzOiBwdi5tYXNzICsgY3YubWFzcyxcclxuICAgICAgZW5lcmd5OiBwdi5lbmVyZ3kgKyBjdi5lbmVyZ3ksXHJcbiAgICAgIGJ1aWxkdGltZTogcHYuYnVpbGR0aW1lICsgY3YuYnVpbGR0aW1lLFxyXG4gICAgfSksXHJcbiAgICB7IG1hc3M6IDAsIGVuZXJneTogMCwgYnVpbGR0aW1lOiAwIH1cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvbGlkfT5cclxuICAgICAgPHA+e3Byb3BzLmRhdGEuU2ltcGxlTmFtZX08L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFRvdGFsIE1hc3M6IHtjb3N0Lm1hc3N9LCBUb3RhbCBFbmVyZ3k6e2Nvc3QuZW5lcmd5fSwgVG90YWwgQnVpbGQgdGltZTp7XCIgXCJ9XHJcbiAgICAgICAge2Nvc3QuYnVpbGR0aW1lfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHtjb3N0LmJ1aWxkdGltZSA+IDAgJiYgKFxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgQXZnIE1hc3M6IHtjb3N0Lm1hc3MgLyBjb3N0LmJ1aWxkdGltZX0sIEF2ZyBFbmVyZ3k6e1wiIFwifVxyXG4gICAgICAgICAge2Nvc3QuZW5lcmd5IC8gY29zdC5idWlsZHRpbWV9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtwcm9wcy5kYXRhLmNvbnN0cnVjdGFibGVzLm1hcCgoaWQpID0+IHtcclxuICAgICAgICAgIGxldCB1bml0ID0gcHJvcHMuZGJbaWRdO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICBrZXk9e3VuaXQuVW5pdE5hbWV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5Vbml0ID0geyAuLi51bml0IH07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZGluZyB1bml0IVwiLCB1bml0KTtcclxuICAgICAgICAgICAgICAgIG5Vbml0LmtleSA9IEdldEFuZEluY1EoKTtcclxuICAgICAgICAgICAgICAgIFNldFF1ZXVlKFsuLi5RdWV1ZSwgblVuaXRdKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3VuaXQuRnVsbE5hbWV9ICh7dW5pdC5TaW1wbGVOYW1lfSlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2xpZH0+XHJcbiAgICAgICAge1F1ZXVlLm1hcCgodW5pdCwgaSkgPT4gKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e3VuaXQua2V5fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgU2V0UXVldWUoUXVldWUuZmlsdGVyKChtLCBxaSkgPT4gaSAhPSBxaSkpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dW5pdC5GdWxsTmFtZX0gTTp7dW5pdC5FY29ub215LkJ1aWxkQ29zdE1hc3N9IEU6XHJcbiAgICAgICAgICAgIHt1bml0LkVjb25vbXkuQnVpbGRDb3N0RW5lcmd5fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1aWxkaW5nRGF0YSB7XHJcbiAgY29uc3RydWN0b3IoQnVpbGRpbmdQcm9wKSB7XHJcbiAgICBjb25zb2xlLmxvZyhCdWlsZGluZ1Byb3ApO1xyXG4gICAgdGhpcy5Vbml0SWQgPSBCdWlsZGluZ1Byb3AuVW5pdE5hbWU7XHJcbiAgICB0aGlzLkZ1bGxOYW1lID0gQnVpbGRpbmdQcm9wLkZ1bGxOYW1lO1xyXG4gICAgdGhpcy5TaW1wbGVOYW1lID0gQnVpbGRpbmdQcm9wLlNpbXBsZU5hbWU7XHJcbiAgICB0aGlzLmNvbnN0cnVjdGFibGVzID0gQnVpbGRpbmdQcm9wLkNvbnN0cnVjdGFibGVzO1xyXG4gICAgdGhpcy5Bc3Npc3RzID0geyB0MTogMCwgdDI6IDAsIHQzOiAwIH07XHJcbiAgICB0aGlzLnAgPSBCdWlsZGluZ1Byb3A7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=