webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BuildingSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BuildingSelection */ "./components/BuildingSelection.js");
/* harmony import */ var _components_BuildingIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BuildingIcon */ "./components/BuildingIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_BuildingList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BuildingList */ "./components/BuildingList.js");
/* harmony import */ var _components_Building__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Building */ "./components/Building.js");



var _jsxFileName = "X:\\erik\\Programmering\\Webb\\SupCom\\ecobalancesupreme\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function generator_filter(faction) {
  return function (unit9) {
    return unit.Faction == faction && (unit.categories.includes("ENERGYPRODUCTION") || unit.categories.includes("MASSPRODUCTION") && unit.categories.includes("STRUCTURE"));
  };
}

function factory_filter(faction) {
  return function (unit) {
    return unit.IsFactory && unit.Faction === faction && !unit.Description.includes("HQ");
  };
}

function factory_sorter(a, b) {
  if (a.Description < b.Description) {
    return -1;
  }

  if (a.Description > b.Description) {
    return 1;
  }

  if (a.TechLevel < b.TechLevel) {
    return -1;
  }

  if (a.TechLevel > b.TechLevel) {
    return 1;
  }

  return 0;
}

var __N_SSG = true;
function Home(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      generators = _useState[0],
      SetGenerators = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    SERAPHIM: [],
    CYBRAN: [],
    UEF: [],
    AEON: []
  }),
      constructors = _useState2[0],
      SetConstructors = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])("SERAPHIM"),
      faction = _useState3[0],
      SetFaction = _useState3[1];

  var generator_buildings = props.db.list.filter(factory_filter(faction)).sort(factory_sorter);
  var factories = props.db.list.filter(factory_filter(faction)).sort(factory_sorter);
  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, "Create Next App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  })), __jsx("button", {
    onClick: function onClick() {
      return SetFaction("SERAPHIM");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, "Seraphim"), __jsx("button", {
    onClick: function onClick() {
      return SetFaction("CYBRAN");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, "Cybran"), __jsx("button", {
    onClick: function onClick() {
      return SetFaction("UEF");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, "UEF"), __jsx("button", {
    onClick: function onClick() {
      return SetFaction("AEON");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "Aeon"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, faction), __jsx("main", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(_components_BuildingSelection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, generator_buildings.map(function (building) {
    return __jsx(_components_BuildingIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: building.UnitName,
      building: building,
      onAddBuilding: function onAddBuilding(building) {
        console.log(faction);
        SetGenerators(_objectSpread(_objectSpread({}, generators), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, faction, [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(generators[faction]), [building]))));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }
    });
  })), __jsx(_components_BuildingSelection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, factories.map(function (building) {
    return __jsx(_components_BuildingIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: building.UnitName,
      building: building,
      onAddBuilding: function onAddBuilding(building) {
        console.log(faction);
        SetConstructors(_objectSpread(_objectSpread({}, constructors), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, faction, [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(constructors[faction]), [building]))));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    });
  })), __jsx(_components_BuildingList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, console.log(constructors), constructors[faction].map(function (data) {
    return __jsx(_components_Building__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: data,
      db: props.db,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    });
  }))));
}

_s(Home, "KUm1hOcIz+C6r1eb7kgYA/GOT9k=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2VuZXJhdG9yX2ZpbHRlciIsImZhY3Rpb24iLCJ1bml0OSIsInVuaXQiLCJGYWN0aW9uIiwiY2F0ZWdvcmllcyIsImluY2x1ZGVzIiwiZmFjdG9yeV9maWx0ZXIiLCJJc0ZhY3RvcnkiLCJEZXNjcmlwdGlvbiIsImZhY3Rvcnlfc29ydGVyIiwiYSIsImIiLCJUZWNoTGV2ZWwiLCJIb21lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImdlbmVyYXRvcnMiLCJTZXRHZW5lcmF0b3JzIiwiU0VSQVBISU0iLCJDWUJSQU4iLCJVRUYiLCJBRU9OIiwiY29uc3RydWN0b3JzIiwiU2V0Q29uc3RydWN0b3JzIiwiU2V0RmFjdGlvbiIsImdlbmVyYXRvcl9idWlsZGluZ3MiLCJkYiIsImxpc3QiLCJmaWx0ZXIiLCJzb3J0IiwiZmFjdG9yaWVzIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsIm1hcCIsImJ1aWxkaW5nIiwiVW5pdE5hbWUiLCJjb25zb2xlIiwibG9nIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLFNBQVNBLGdCQUFULENBQTBCQyxPQUExQixFQUFtQztBQUNqQyxTQUFPLFVBQUNDLEtBQUQsRUFBVztBQUNoQixXQUNFQyxJQUFJLENBQUNDLE9BQUwsSUFBZ0JILE9BQWhCLEtBQ0NFLElBQUksQ0FBQ0UsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsa0JBQXpCLEtBQ0VILElBQUksQ0FBQ0UsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsZ0JBQXpCLEtBQ0NILElBQUksQ0FBQ0UsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsV0FBekIsQ0FISixDQURGO0FBTUQsR0FQRDtBQVFEOztBQUVELFNBQVNDLGNBQVQsQ0FBd0JOLE9BQXhCLEVBQWlDO0FBQy9C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QUFBO0FBQUE7QUFBQTtBQUFBLE1BRGE7QUFBQSxHQUFkLENBREgsQ0FqQkYsRUFnQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaEIsWUFBWixDQURILEVBRUdBLFlBQVksQ0FBQ3RCLE9BQUQsQ0FBWixDQUFzQmtDLEdBQXRCLENBQTBCLFVBQUNLLElBQUQ7QUFBQSxXQUN6QixNQUFDLDREQUFEO0FBQVUsVUFBSSxFQUFFQSxJQUFoQjtBQUFzQixRQUFFLEVBQUV6QixLQUFLLENBQUNZLEVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEeUI7QUFBQSxHQUExQixDQUZILENBaENGLENBVkYsQ0FERjtBQWdFRDs7R0FsRnVCYixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVhZDU1NGZkMGJhZTg1NjBjZjNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQnVpbGRpbmdTZWxlY3RvciBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ1NlbGVjdGlvblwiO1xuaW1wb3J0IEJ1aWxkaW5nSWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ0ljb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1aWxkaW5nTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ0xpc3RcIjtcbmltcG9ydCBCdWlsZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ1wiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgZGJfZGF0YSA9IHJlcXVpcmUoXCIuLi9wdWJsaWMvdW5pdF9kYl9lY28uanNvblwiKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYjogZGJfZGF0YSB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0b3JfZmlsdGVyKGZhY3Rpb24pIHtcbiAgcmV0dXJuICh1bml0OSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB1bml0LkZhY3Rpb24gPT0gZmFjdGlvbiAmJlxuICAgICAgKHVuaXQuY2F0ZWdvcmllcy5pbmNsdWRlcyhcIkVORVJHWVBST0RVQ1RJT05cIikgfHxcbiAgICAgICAgKHVuaXQuY2F0ZWdvcmllcy5pbmNsdWRlcyhcIk1BU1NQUk9EVUNUSU9OXCIpICYmXG4gICAgICAgICAgdW5pdC5jYXRlZ29yaWVzLmluY2x1ZGVzKFwiU1RSVUNUVVJFXCIpKSlcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmYWN0b3J5X2ZpbHRlcihmYWN0aW9uKSB7XG4gIHJldHVybiAodW5pdCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB1bml0LklzRmFjdG9yeSAmJlxuICAgICAgdW5pdC5GYWN0aW9uID09PSBmYWN0aW9uICYmXG4gICAgICAhdW5pdC5EZXNjcmlwdGlvbi5pbmNsdWRlcyhcIkhRXCIpXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmFjdG9yeV9zb3J0ZXIoYSwgYikge1xuICBpZiAoYS5EZXNjcmlwdGlvbiA8IGIuRGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEuRGVzY3JpcHRpb24gPiBiLkRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKGEuVGVjaExldmVsIDwgYi5UZWNoTGV2ZWwpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEuVGVjaExldmVsID4gYi5UZWNoTGV2ZWwpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zdCBbZ2VuZXJhdG9ycywgU2V0R2VuZXJhdG9yc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb25zdHJ1Y3RvcnMsIFNldENvbnN0cnVjdG9yc10gPSB1c2VTdGF0ZSh7XG4gICAgU0VSQVBISU06IFtdLFxuICAgIENZQlJBTjogW10sXG4gICAgVUVGOiBbXSxcbiAgICBBRU9OOiBbXSxcbiAgfSk7XG4gIGNvbnN0IFtmYWN0aW9uLCBTZXRGYWN0aW9uXSA9IHVzZVN0YXRlKFwiU0VSQVBISU1cIik7XG5cbiAgbGV0IGdlbmVyYXRvcl9idWlsZGluZ3MgPSBwcm9wcy5kYi5saXN0XG4gICAgLmZpbHRlcihmYWN0b3J5X2ZpbHRlcihmYWN0aW9uKSlcbiAgICAuc29ydChmYWN0b3J5X3NvcnRlcik7XG5cbiAgbGV0IGZhY3RvcmllcyA9IHByb3BzLmRiLmxpc3RcbiAgICAuZmlsdGVyKGZhY3RvcnlfZmlsdGVyKGZhY3Rpb24pKVxuICAgIC5zb3J0KGZhY3Rvcnlfc29ydGVyKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBTZXRGYWN0aW9uKFwiU0VSQVBISU1cIil9PlNlcmFwaGltPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IFNldEZhY3Rpb24oXCJDWUJSQU5cIil9PkN5YnJhbjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBTZXRGYWN0aW9uKFwiVUVGXCIpfT5VRUY8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gU2V0RmFjdGlvbihcIkFFT05cIil9PkFlb248L2J1dHRvbj5cbiAgICAgIDxoMT57ZmFjdGlvbn08L2gxPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxCdWlsZGluZ1NlbGVjdG9yPlxuICAgICAgICAgIHtnZW5lcmF0b3JfYnVpbGRpbmdzLm1hcCgoYnVpbGRpbmcpID0+IChcbiAgICAgICAgICAgIDxCdWlsZGluZ0ljb25cbiAgICAgICAgICAgICAga2V5PXtidWlsZGluZy5Vbml0TmFtZX1cbiAgICAgICAgICAgICAgYnVpbGRpbmc9e2J1aWxkaW5nfVxuICAgICAgICAgICAgICBvbkFkZEJ1aWxkaW5nPXsoYnVpbGRpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBTZXRHZW5lcmF0b3JzKHtcbiAgICAgICAgICAgICAgICAgIC4uLmdlbmVyYXRvcnMsXG4gICAgICAgICAgICAgICAgICBbZmFjdGlvbl06IFsuLi5nZW5lcmF0b3JzW2ZhY3Rpb25dLCBidWlsZGluZ10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9CdWlsZGluZ0ljb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQnVpbGRpbmdTZWxlY3Rvcj5cblxuICAgICAgICA8QnVpbGRpbmdTZWxlY3Rvcj5cbiAgICAgICAgICB7ZmFjdG9yaWVzLm1hcCgoYnVpbGRpbmcpID0+IChcbiAgICAgICAgICAgIDxCdWlsZGluZ0ljb25cbiAgICAgICAgICAgICAga2V5PXtidWlsZGluZy5Vbml0TmFtZX1cbiAgICAgICAgICAgICAgYnVpbGRpbmc9e2J1aWxkaW5nfVxuICAgICAgICAgICAgICBvbkFkZEJ1aWxkaW5nPXsoYnVpbGRpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBTZXRDb25zdHJ1Y3RvcnMoe1xuICAgICAgICAgICAgICAgICAgLi4uY29uc3RydWN0b3JzLFxuICAgICAgICAgICAgICAgICAgW2ZhY3Rpb25dOiBbLi4uY29uc3RydWN0b3JzW2ZhY3Rpb25dLCBidWlsZGluZ10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9CdWlsZGluZ0ljb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQnVpbGRpbmdTZWxlY3Rvcj5cbiAgICAgICAgPEJ1aWxkaW5nTGlzdD5cbiAgICAgICAgICB7Y29uc29sZS5sb2coY29uc3RydWN0b3JzKX1cbiAgICAgICAgICB7Y29uc3RydWN0b3JzW2ZhY3Rpb25dLm1hcCgoZGF0YSkgPT4gKFxuICAgICAgICAgICAgPEJ1aWxkaW5nIGRhdGE9e2RhdGF9IGRiPXtwcm9wcy5kYn0+PC9CdWlsZGluZz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9CdWlsZGluZ0xpc3Q+XG4gICAgICA8L21haW4+XG4gICAgICB7LypcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXtcIiBcIn1cbiAgICAgICAgICA8aW1nIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=