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
    }, unit.FullName, " M:", unit.Economy.ProductionPerSecondMass + unit.Economy.BuildCostMass, " ", "E:", unit.Economy.BuildCostEnergy);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWlsZGluZy5qcyJdLCJuYW1lcyI6WyJCdWlsZGluZyIsInByb3BzIiwidXNlU3RhdGUiLCJRdWV1ZSIsIlNldFF1ZXVlIiwiUXVldWVJZCIsIlNldElkIiwiR2V0QW5kSW5jUSIsImlkIiwiY29zdCIsIm1hcCIsInVuaXQiLCJtYXNzIiwiRWNvbm9teSIsIkJ1aWxkQ29zdE1hc3MiLCJlbmVyZ3kiLCJCdWlsZENvc3RFbmVyZ3kiLCJidWlsZHRpbWUiLCJCdWlsZFRpbWUiLCJyZWR1Y2UiLCJwdiIsImN2Iiwic3R5bGVzIiwic29saWQiLCJkYXRhIiwiU2ltcGxlTmFtZSIsImNvbnN0cnVjdGFibGVzIiwiZGIiLCJVbml0TmFtZSIsIm5Vbml0IiwiY29uc29sZSIsImxvZyIsImtleSIsIkZ1bGxOYW1lIiwiaSIsImZpbHRlciIsIm0iLCJxaSIsIlByb2R1Y3Rpb25QZXJTZWNvbmRNYXNzIiwiQnVpbGRpbmdEYXRhIiwiQnVpbGRpbmdQcm9wIiwiVW5pdElkIiwiQ29uc3RydWN0YWJsZXMiLCJBc3Npc3RzIiwidDEiLCJ0MiIsInQzIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDLEVBQUQsQ0FESTtBQUFBLE1BQy9CQyxLQUQrQjtBQUFBLE1BQ3hCQyxRQUR3Qjs7QUFBQSxtQkFFYkYsc0RBQVEsQ0FBQyxDQUFELENBRks7QUFBQSxNQUUvQkcsT0FGK0I7QUFBQSxNQUV0QkMsS0FGc0I7O0FBSXRDLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEIsUUFBSUMsRUFBRSxHQUFHSCxPQUFUO0FBQ0FDLFNBQUssQ0FBQ0UsRUFBRSxHQUFHLENBQU4sQ0FBTDtBQUNBLFdBQU9BLEVBQVA7QUFDRDs7QUFFRCxNQUFJQyxJQUFJLEdB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QSxTQUFiLENBQUQsQ0FBUjtBQUNELE9BSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1HMUIsSUFBSSxDQUFDc0IsUUFOUixTQU9HdEIsSUFBSSxDQUFDRSxPQUFMLENBQWF5Qix1QkFBYixHQUF1QzNCLElBQUksQ0FBQ0UsT0FBTCxDQUFhQyxhQVB2RCxFQU9zRSxHQVB0RSxRQVNHSCxJQUFJLENBQUNFLE9BQUwsQ0FBYUcsZUFUaEIsQ0FEUztBQUFBLEdBQVYsQ0FESCxDQS9CRixDQURGO0FBaUREOztHQXZFdUJoQixROztLQUFBQSxRO0FBeUVqQixJQUFNdUMsWUFBYixHQUNFLHNCQUFZQyxZQUFaLEVBQTBCO0FBQUE7O0FBQ3hCVixTQUFPLENBQUNDLEdBQVIsQ0FBWVMsWUFBWjtBQUNBLE9BQUtDLE1BQUwsR0FBY0QsWUFBWSxDQUFDWixRQUEzQjtBQUNBLE9BQUtLLFFBQUwsR0FBZ0JPLFlBQVksQ0FBQ1AsUUFBN0I7QUFDQSxPQUFLUixVQUFMLEdBQWtCZSxZQUFZLENBQUNmLFVBQS9CO0FBQ0EsT0FBS0MsY0FBTCxHQUFzQmMsWUFBWSxDQUFDRSxjQUFuQztBQUNBLE9BQUtDLE9BQUwsR0FBZTtBQUFFQyxNQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFFLEVBQUUsQ0FBYjtBQUFnQkMsTUFBRSxFQUFFO0FBQXBCLEdBQWY7QUFDQSxPQUFLQyxDQUFMLEdBQVNQLFlBQVQ7QUFDRCxDQVRIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY2NjE1YzA1NDBjMGJlNzY5YmUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQnVpbGRpbmcubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnVpbGRpbmcocHJvcHMpIHtcclxuICBjb25zdCBbUXVldWUsIFNldFF1ZXVlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbUXVldWVJZCwgU2V0SWRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGZ1bmN0aW9uIEdldEFuZEluY1EoKSB7XHJcbiAgICBsZXQgaWQgPSBRdWV1ZUlkO1xyXG4gICAgU2V0SWQoaWQgKyAxKTtcclxuICAgIHJldHVybiBpZDtcclxuICB9XHJcblxyXG4gIGxldCBjb3N0ID0gUXVldWUubWFwKCh1bml0KSA9PiAoe1xyXG4gICAgbWFzczogdW5pdC5FY29ub215LkJ1aWxkQ29zdE1hc3MsXHJcbiAgICBlbmVyZ3k6IHVuaXQuRWNvbm9teS5CdWlsZENvc3RFbmVyZ3ksXHJcbiAgICBidWlsZHRpbWU6IHVuaXQuRWNvbm9teS5CdWlsZFRpbWUsXHJcbiAgfSkpLnJlZHVjZShcclxuICAgIChwdiwgY3YpID0+ICh7XHJcbiAgICAgIG1hc3M6IHB2Lm1hc3MgKyBjdi5tYXNzLFxyXG4gICAgICBlbmVyZ3k6IHB2LmVuZXJneSArIGN2LmVuZXJneSxcclxuICAgICAgYnVpbGR0aW1lOiBwdi5idWlsZHRpbWUgKyBjdi5idWlsZHRpbWUsXHJcbiAgICB9KSxcclxuICAgIHsgbWFzczogMCwgZW5lcmd5OiAwLCBidWlsZHRpbWU6IDAgfVxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29saWR9PlxyXG4gICAgICA8cD57cHJvcHMuZGF0YS5TaW1wbGVOYW1lfTwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgVG90YWwgTWFzczoge2Nvc3QubWFzc30sIFRvdGFsIEVuZXJneTp7Y29zdC5lbmVyZ3l9LCBUb3RhbCBCdWlsZCB0aW1lOntcIiBcIn1cclxuICAgICAgICB7Y29zdC5idWlsZHRpbWV9XHJcbiAgICAgIDwvcD5cclxuICAgICAge2Nvc3QuYnVpbGR0aW1lID4gMCAmJiAoXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBBdmcgTWFzczoge2Nvc3QubWFzcyAvIGNvc3QuYnVpbGR0aW1lfSwgQXZnIEVuZXJneTp7XCIgXCJ9XHJcbiAgICAgICAgICB7Y29zdC5lbmVyZ3kgLyBjb3N0LmJ1aWxkdGltZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3Byb3BzLmRhdGEuY29uc3RydWN0YWJsZXMubWFwKChpZCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHVuaXQgPSBwcm9wcy5kYltpZF07XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIGtleT17dW5pdC5Vbml0TmFtZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgblVuaXQgPSB7IC4uLnVuaXQgfTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIHVuaXQhXCIsIHVuaXQpO1xyXG4gICAgICAgICAgICAgICAgblVuaXQua2V5ID0gR2V0QW5kSW5jUSgpO1xyXG4gICAgICAgICAgICAgICAgU2V0UXVldWUoWy4uLlF1ZXVlLCBuVW5pdF0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dW5pdC5GdWxsTmFtZX0gKHt1bml0LlNpbXBsZU5hbWV9KVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvbGlkfT5cclxuICAgICAgICB7UXVldWUubWFwKCh1bml0LCBpKSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17dW5pdC5rZXl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBTZXRRdWV1ZShRdWV1ZS5maWx0ZXIoKG0sIHFpKSA9PiBpICE9IHFpKSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt1bml0LkZ1bGxOYW1lfSBNOlxyXG4gICAgICAgICAgICB7dW5pdC5FY29ub215LlByb2R1Y3Rpb25QZXJTZWNvbmRNYXNzICsgdW5pdC5FY29ub215LkJ1aWxkQ29zdE1hc3N9e1wiIFwifVxyXG4gICAgICAgICAgICBFOlxyXG4gICAgICAgICAgICB7dW5pdC5FY29ub215LkJ1aWxkQ29zdEVuZXJneX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCdWlsZGluZ0RhdGEge1xyXG4gIGNvbnN0cnVjdG9yKEJ1aWxkaW5nUHJvcCkge1xyXG4gICAgY29uc29sZS5sb2coQnVpbGRpbmdQcm9wKTtcclxuICAgIHRoaXMuVW5pdElkID0gQnVpbGRpbmdQcm9wLlVuaXROYW1lO1xyXG4gICAgdGhpcy5GdWxsTmFtZSA9IEJ1aWxkaW5nUHJvcC5GdWxsTmFtZTtcclxuICAgIHRoaXMuU2ltcGxlTmFtZSA9IEJ1aWxkaW5nUHJvcC5TaW1wbGVOYW1lO1xyXG4gICAgdGhpcy5jb25zdHJ1Y3RhYmxlcyA9IEJ1aWxkaW5nUHJvcC5Db25zdHJ1Y3RhYmxlcztcclxuICAgIHRoaXMuQXNzaXN0cyA9IHsgdDE6IDAsIHQyOiAwLCB0MzogMCB9O1xyXG4gICAgdGhpcy5wID0gQnVpbGRpbmdQcm9wO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9