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
  return __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, props.data.SimpleName), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "Build Rate: ", props.data.p.Economy.BuildRate, "Total Mass: ", cost.mass, ", Total Energy:", cost.energy, ", Total Build time:", " ", cost.buildtime), cost.buildtime > 0 && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Avg Mass: ", cost.mass / cost.buildtime, ", Avg Energy:", " ", cost.energy / cost.buildtime), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
        lineNumber: 56,
        columnNumber: 13
      }
    }, unit.FullName, " (", unit.SimpleName, ")");
  })), __jsx("div", {
    className: _styles_Building_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.solid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
        lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy5qcyJdLCJuYW1lcyI6WyJCdWlsZGluZyIsInByb3BzIiwidXNlU3RhdGUiLCJRdWV1ZSIsIlNldFF1ZXVlIiwiUXVldWVJZCIsIlNldElkIiwiR2V0QW5kSW5jUSIsImlkIiwiY29zdCIsIm1hcCIsInVuaXQiLCJtYXNzIiwiRWNvbm9teSIsIkJ1aWxkQ29zdE1hc3MiLCJlbmVyZ3kiLCJCdWlsZENvc3RFbmVyZ3kiLCJidWlsZHRpbWUiLCJCdWlsZFRpbWUiLCJyZWR1Y2UiLCJwdiIsImN2IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjb25zdHJ1Y3RhYmxlcyIsIlVwZ3JhZGVzIiwiY29uY2F0IiwiZmlsdGVyIiwidSIsIlVuaXROYW1lIiwiaW5jbHVkZXMiLCJzdHlsZXMiLCJzb2xpZCIsIlNpbXBsZU5hbWUiLCJwIiwiQnVpbGRSYXRlIiwiZGIiLCJuVW5pdCIsImtleSIsIkZ1bGxOYW1lIiwiaSIsIm0iLCJxaSIsIkJ1aWxkaW5nRGF0YSIsIkJ1aWxkaW5nUHJvcCIsIlVuaXRJZCIsIkNvbnN0cnVjdGFibGVzIiwiQXNzaXN0cyIsInQxIiwidDIiLCJ0MyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDLEVBQUQsQ0FESTtBQUFBLE1BQy9CQyxLQUQrQjtBQUFBLE1BQ3hCQyxRQUR3Qjs7QUFBQSxtQkFFYkYsc0RBQVEsQ0FBQyxDQUFELENBRks7QUFBQSxNQUUvQkcsT0FGK0I7QUFBQSxNQUV0QkMsS0FGc0I7O0FBSXRDLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEIsUUFBSUMsRUFBRSxHQUFHSCxPQUFUO0FBQ0FDLFNBQUssQ0FBQ0UsRUFBRSxHQUFHLENBQU4sQ0FBTDtBQUNBLFdBQU9BLEVBQVA7QUFD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QUwsR0FBY0QsWUFBWSxDQUFDZixRQUEzQjtBQUNBLE9BQUtVLFFBQUwsR0FBZ0JLLFlBQVksQ0FBQ0wsUUFBN0I7QUFDQSxPQUFLTixVQUFMLEdBQWtCVyxZQUFZLENBQUNYLFVBQS9CO0FBQ0EsT0FBS1QsY0FBTCxHQUFzQm9CLFlBQVksQ0FBQ0UsY0FBYixJQUErQixFQUFyRDtBQUNBLE9BQUtDLE9BQUwsR0FBZTtBQUFFQyxNQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFFLEVBQUUsQ0FBYjtBQUFnQkMsTUFBRSxFQUFFO0FBQXBCLEdBQWY7QUFDQSxPQUFLekIsUUFBTCxHQUFnQm1CLFlBQVksQ0FBQ25CLFFBQWIsSUFBeUIsRUFBekM7QUFDQSxPQUFLUyxDQUFMLEdBQVNVLFlBQVQ7QUFDRCxDQVZIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIyYjNhNjAwMzBjMzAwYjFiOTNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQnVpbGRpbmcubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnVpbGRpbmcocHJvcHMpIHtcclxuICBjb25zdCBbUXVldWUsIFNldFF1ZXVlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbUXVldWVJZCwgU2V0SWRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGZ1bmN0aW9uIEdldEFuZEluY1EoKSB7XHJcbiAgICBsZXQgaWQgPSBRdWV1ZUlkO1xyXG4gICAgU2V0SWQoaWQgKyAxKTtcclxuICAgIHJldHVybiBpZDtcclxuICB9XHJcblxyXG4gIGxldCBjb3N0ID0gUXVldWUubWFwKCh1bml0KSA9PiAoe1xyXG4gICAgbWFzczogdW5pdC5FY29ub215LkJ1aWxkQ29zdE1hc3MsXHJcbiAgICBlbmVyZ3k6IHVuaXQuRWNvbm9teS5CdWlsZENvc3RFbmVyZ3ksXHJcbiAgICBidWlsZHRpbWU6IHVuaXQuRWNvbm9teS5CdWlsZFRpbWUsXHJcbiAgfSkpLnJlZHVjZShcclxuICAgIChwdiwgY3YpID0+ICh7XHJcbiAgICAgIG1hc3M6IHB2Lm1hc3MgKyBjdi5tYXNzLFxyXG4gICAgICBlbmVyZ3k6IHB2LmVuZXJneSArIGN2LmVuZXJneSxcclxuICAgICAgYnVpbGR0aW1lOiBwdi5idWlsZHRpbWUgKyBjdi5idWlsZHRpbWUsXHJcbiAgICB9KSxcclxuICAgIHsgbWFzczogMCwgZW5lcmd5OiAwLCBidWlsZHRpbWU6IDAgfVxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXCJDT05TVFJVQ1RJTkcgQlVJTERJTkdcIik7XHJcbiAgY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XHJcbiAgY29uc29sZS5sb2cocHJvcHMuZGF0YS5jb25zdHJ1Y3RhYmxlcyk7XHJcbiAgY29uc29sZS5sb2cocHJvcHMuZGF0YS5VcGdyYWRlcyk7XHJcbiAgY29uc29sZS5sb2coUXVldWUpO1xyXG4gIGxldCBjb25zdHJ1Y3RhYmxlcyA9IHByb3BzLmRhdGEuY29uc3RydWN0YWJsZXMuY29uY2F0KFxyXG4gICAgcHJvcHMuZGF0YS5VcGdyYWRlcy5maWx0ZXIoXHJcbiAgICAgIChpZCkgPT4gIVF1ZXVlLm1hcCgodSkgPT4gdS5Vbml0TmFtZSkuaW5jbHVkZXMoaWQpXHJcbiAgICApXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhjb25zdHJ1Y3RhYmxlcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvbGlkfT5cclxuICAgICAgPHA+e3Byb3BzLmRhdGEuU2ltcGxlTmFtZX08L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEJ1aWxkIFJhdGU6IHtwcm9wcy5kYXRhLnAuRWNvbm9teS5CdWlsZFJhdGV9XHJcbiAgICAgICAgVG90YWwgTWFzczoge2Nvc3QubWFzc30sIFRvdGFsIEVuZXJneTp7Y29zdC5lbmVyZ3l9LCBUb3RhbCBCdWlsZCB0aW1lOntcIiBcIn1cclxuICAgICAgICB7Y29zdC5idWlsZHRpbWV9XHJcbiAgICAgIDwvcD5cclxuICAgICAge2Nvc3QuYnVpbGR0aW1lID4gMCAmJiAoXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBBdmcgTWFzczoge2Nvc3QubWFzcyAvIGNvc3QuYnVpbGR0aW1lfSwgQXZnIEVuZXJneTp7XCIgXCJ9XHJcbiAgICAgICAgICB7Y29zdC5lbmVyZ3kgLyBjb3N0LmJ1aWxkdGltZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2NvbnN0cnVjdGFibGVzLm1hcCgoaWQpID0+IHtcclxuICAgICAgICAgIGxldCB1bml0ID0gcHJvcHMuZGJbaWRdO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICBrZXk9e3VuaXQuVW5pdE5hbWV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5Vbml0ID0geyAuLi51bml0IH07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZGluZyB1bml0IVwiLCB1bml0KTtcclxuICAgICAgICAgICAgICAgIG5Vbml0LmtleSA9IEdldEFuZEluY1EoKTtcclxuICAgICAgICAgICAgICAgIFNldFF1ZXVlKFsuLi5RdWV1ZSwgblVuaXRdKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3VuaXQuRnVsbE5hbWV9ICh7dW5pdC5TaW1wbGVOYW1lfSlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2xpZH0+XHJcbiAgICAgICAge1F1ZXVlLm1hcCgodW5pdCwgaSkgPT4gKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e3VuaXQua2V5fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgU2V0UXVldWUoUXVldWUuZmlsdGVyKChtLCBxaSkgPT4gaSAhPSBxaSkpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dW5pdC5GdWxsTmFtZX0gTTp7dW5pdC5FY29ub215LkJ1aWxkQ29zdE1hc3N9IEU6XHJcbiAgICAgICAgICAgIHt1bml0LkVjb25vbXkuQnVpbGRDb3N0RW5lcmd5fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1aWxkaW5nRGF0YSB7XHJcbiAgY29uc3RydWN0b3IoQnVpbGRpbmdQcm9wKSB7XHJcbiAgICBjb25zb2xlLmxvZyhCdWlsZGluZ1Byb3ApO1xyXG4gICAgdGhpcy5Vbml0SWQgPSBCdWlsZGluZ1Byb3AuVW5pdE5hbWU7XHJcbiAgICB0aGlzLkZ1bGxOYW1lID0gQnVpbGRpbmdQcm9wLkZ1bGxOYW1lO1xyXG4gICAgdGhpcy5TaW1wbGVOYW1lID0gQnVpbGRpbmdQcm9wLlNpbXBsZU5hbWU7XHJcbiAgICB0aGlzLmNvbnN0cnVjdGFibGVzID0gQnVpbGRpbmdQcm9wLkNvbnN0cnVjdGFibGVzIHx8IFtdO1xyXG4gICAgdGhpcy5Bc3Npc3RzID0geyB0MTogMCwgdDI6IDAsIHQzOiAwIH07XHJcbiAgICB0aGlzLlVwZ3JhZGVzID0gQnVpbGRpbmdQcm9wLlVwZ3JhZGVzIHx8IFtdO1xyXG4gICAgdGhpcy5wID0gQnVpbGRpbmdQcm9wO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9