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
  var constructables = props.data.constructables.concat((props.data.Upgrades || []).filter(function (id) {
    return !Queue.includes(id);
  }));
  console.log(constructables);
  return __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, props.data.SimpleName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Total Mass: ", cost.mass, ", Total Energy:", cost.energy, ", Total Build time:", " ", cost.buildtime), cost.buildtime > 0 && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Avg Mass: ", cost.mass / cost.buildtime, ", Avg Energy:", " ", cost.energy / cost.buildtime), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
        lineNumber: 47,
        columnNumber: 13
      }
    }, unit.FullName, " (", unit.SimpleName, ")");
  })), __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
        lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy5qcyJdLCJuYW1lcyI6WyJCdWlsZGluZyIsInByb3BzIiwidXNlU3RhdGUiLCJRdWV1ZSIsIlNldFF1ZXVlIiwiUXVldWVJZCIsIlNldElkIiwiR2V0QW5kSW5jUSIsImlkIiwiY29zdCIsIm1hcCIsInVuaXQiLCJtYXNzIiwiRWNvbm9teSIsIkJ1aWxkQ29zdE1hc3MiLCJlbmVyZ3kiLCJCdWlsZENvc3RFbmVyZ3kiLCJidWlsZHRpbWUiLCJCdWlsZFRpbWUiLCJyZWR1Y2UiLCJwdiIsImN2IiwiY29uc3RydWN0YWJsZXMiLCJkYXRhIiwiY29uY2F0IiwiVXBncmFkZXMiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJzb2xpZCIsIlNpbXBsZU5hbWUiLCJkYiIsIlVuaXROYW1lIiwiblVuaXQiLCJrZXkiLCJGdWxsTmFtZSIsImkiLCJtIiwicWkiLCJCdWlsZGluZ0RhdGEiLCJCdWlsZGluZ1Byb3AiLCJVbml0SWQiLCJDb25zdHJ1Y3RhYmxlcyIsIkFzc2lzdHMiLCJ0MSIsInQyIiwidDMiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDL0JDLEtBRCtCO0FBQUEsTUFDeEJDLFFBRHdCOztBQUFBLG1CQUViRixzREFBUSxDQUFDLENBQUQsQ0FGSztBQUFBLE1BRS9CRyxPQUYrQjtBQUFBLE1BRXRCQyxLQUZzQjs7QUFJdEMsV0FBU0MsVUFBVCxHQUFzQjtBQUNwQixRQUFJQyxFQUFFLEdBQUdILE9BQVQ7QUFDQUMsU0FBSyxDQUFDRSxFQUFFLEdBQUcsQ0FBTixDQUFMO0FBQ0EsV0FBT0EsRUFBUDtBQUNEOztBQUVELE1BQUlDLElB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHNUIsS0FBSyxDQUFDTyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPMkIsQ0FBUDtBQUFBLFdBQ1Q7QUFDRSxTQUFHLEVBQUUzQixJQUFJLENBQUN5QixHQURaO0FBRUUsYUFBTyxFQUFFLG1CQUFNO0FBQ2JoQyxnQkFBUSxDQUFDRCxLQUFLLENBQUN1QixNQUFOLENBQWEsVUFBQ2EsQ0FBRCxFQUFJQyxFQUFKO0FBQUEsaUJBQVdGLENBQUMsSUFBSUUsRUFBaEI7QUFBQSxTQUFiLENBQUQsQ0FBUjtBQUNELE9BSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1HN0IsSUFBSSxDQUFDMEIsUUFOUixTQU1xQjFCLElBQUksQ0FBQ0UsT0FBTCxDQUFhQyxhQU5sQyxTQU9HSCxJQUFJLENBQUNFLE9BQUwsQ0FBYUcsZUFQaEIsQ0FEUztBQUFBLEdBQVYsQ0FESCxDQS9CRixDQURGO0FBK0NEOztHQXpFdUJoQixROztLQUFBQSxRO0FBMkVqQixJQUFNeUMsWUFBYixHQUNFLHNCQUFZQyxZQUFaLEVBQTBCO0FBQUE7O0FBQ3hCZCxTQUFPLENBQUNDLEdBQVIsQ0FBWWEsWUFBWjtBQUNBLE9BQUtDLE1BQUwsR0FBY0QsWUFBWSxDQUFDUixRQUEzQjtBQUNBLE9BQUtHLFFBQUwsR0FBZ0JLLFlBQVksQ0FBQ0wsUUFBN0I7QUFDQSxPQUFLTCxVQUFMLEdBQWtCVSxZQUFZLENBQUNWLFVBQS9CO0FBQ0EsT0FBS1YsY0FBTCxHQUFzQm9CLFlBQVksQ0FBQ0UsY0FBbkM7QUFDQSxPQUFLQyxPQUFMLEdBQWU7QUFBRUMsTUFBRSxFQUFFLENBQU47QUFBU0MsTUFBRSxFQUFFLENBQWI7QUFBZ0JDLE1BQUUsRUFBRTtBQUFwQixHQUFmO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTUCxZQUFUO0FBQ0QsQ0FUSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NjlmODMyMzQyNWRkZjBiMmM2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0J1aWxkaW5nLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1aWxkaW5nKHByb3BzKSB7XHJcbiAgY29uc3QgW1F1ZXVlLCBTZXRRdWV1ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW1F1ZXVlSWQsIFNldElkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBmdW5jdGlvbiBHZXRBbmRJbmNRKCkge1xyXG4gICAgbGV0IGlkID0gUXVldWVJZDtcclxuICAgIFNldElkKGlkICsgMSk7XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfVxyXG5cclxuICBsZXQgY29zdCA9IFF1ZXVlLm1hcCgodW5pdCkgPT4gKHtcclxuICAgIG1hc3M6IHVuaXQuRWNvbm9teS5CdWlsZENvc3RNYXNzLFxyXG4gICAgZW5lcmd5OiB1bml0LkVjb25vbXkuQnVpbGRDb3N0RW5lcmd5LFxyXG4gICAgYnVpbGR0aW1lOiB1bml0LkVjb25vbXkuQnVpbGRUaW1lLFxyXG4gIH0pKS5yZWR1Y2UoXHJcbiAgICAocHYsIGN2KSA9PiAoe1xyXG4gICAgICBtYXNzOiBwdi5tYXNzICsgY3YubWFzcyxcclxuICAgICAgZW5lcmd5OiBwdi5lbmVyZ3kgKyBjdi5lbmVyZ3ksXHJcbiAgICAgIGJ1aWxkdGltZTogcHYuYnVpbGR0aW1lICsgY3YuYnVpbGR0aW1lLFxyXG4gICAgfSksXHJcbiAgICB7IG1hc3M6IDAsIGVuZXJneTogMCwgYnVpbGR0aW1lOiAwIH1cclxuICApO1xyXG4gIGxldCBjb25zdHJ1Y3RhYmxlcyA9IHByb3BzLmRhdGEuY29uc3RydWN0YWJsZXMuY29uY2F0KFxyXG4gICAgKHByb3BzLmRhdGEuVXBncmFkZXMgfHwgW10pLmZpbHRlcigoaWQpID0+ICFRdWV1ZS5pbmNsdWRlcyhpZCkpXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhjb25zdHJ1Y3RhYmxlcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29saWR9PlxyXG4gICAgICA8cD57cHJvcHMuZGF0YS5TaW1wbGVOYW1lfTwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgVG90YWwgTWFzczoge2Nvc3QubWFzc30sIFRvdGFsIEVuZXJneTp7Y29zdC5lbmVyZ3l9LCBUb3RhbCBCdWlsZCB0aW1lOntcIiBcIn1cclxuICAgICAgICB7Y29zdC5idWlsZHRpbWV9XHJcbiAgICAgIDwvcD5cclxuICAgICAge2Nvc3QuYnVpbGR0aW1lID4gMCAmJiAoXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBBdmcgTWFzczoge2Nvc3QubWFzcyAvIGNvc3QuYnVpbGR0aW1lfSwgQXZnIEVuZXJneTp7XCIgXCJ9XHJcbiAgICAgICAgICB7Y29zdC5lbmVyZ3kgLyBjb3N0LmJ1aWxkdGltZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2NvbnN0cnVjdGFibGVzLm1hcCgoaWQpID0+IHtcclxuICAgICAgICAgIGxldCB1bml0ID0gcHJvcHMuZGJbaWRdO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICBrZXk9e3VuaXQuVW5pdE5hbWV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5Vbml0ID0geyAuLi51bml0IH07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZGluZyB1bml0IVwiLCB1bml0KTtcclxuICAgICAgICAgICAgICAgIG5Vbml0LmtleSA9IEdldEFuZEluY1EoKTtcclxuICAgICAgICAgICAgICAgIFNldFF1ZXVlKFsuLi5RdWV1ZSwgblVuaXRdKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3VuaXQuRnVsbE5hbWV9ICh7dW5pdC5TaW1wbGVOYW1lfSlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2xpZH0+XHJcbiAgICAgICAge1F1ZXVlLm1hcCgodW5pdCwgaSkgPT4gKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e3VuaXQua2V5fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgU2V0UXVldWUoUXVldWUuZmlsdGVyKChtLCBxaSkgPT4gaSAhPSBxaSkpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dW5pdC5GdWxsTmFtZX0gTTp7dW5pdC5FY29ub215LkJ1aWxkQ29zdE1hc3N9IEU6XHJcbiAgICAgICAgICAgIHt1bml0LkVjb25vbXkuQnVpbGRDb3N0RW5lcmd5fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1aWxkaW5nRGF0YSB7XHJcbiAgY29uc3RydWN0b3IoQnVpbGRpbmdQcm9wKSB7XHJcbiAgICBjb25zb2xlLmxvZyhCdWlsZGluZ1Byb3ApO1xyXG4gICAgdGhpcy5Vbml0SWQgPSBCdWlsZGluZ1Byb3AuVW5pdE5hbWU7XHJcbiAgICB0aGlzLkZ1bGxOYW1lID0gQnVpbGRpbmdQcm9wLkZ1bGxOYW1lO1xyXG4gICAgdGhpcy5TaW1wbGVOYW1lID0gQnVpbGRpbmdQcm9wLlNpbXBsZU5hbWU7XHJcbiAgICB0aGlzLmNvbnN0cnVjdGFibGVzID0gQnVpbGRpbmdQcm9wLkNvbnN0cnVjdGFibGVzO1xyXG4gICAgdGhpcy5Bc3Npc3RzID0geyB0MTogMCwgdDI6IDAsIHQzOiAwIH07XHJcbiAgICB0aGlzLnAgPSBCdWlsZGluZ1Byb3A7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=