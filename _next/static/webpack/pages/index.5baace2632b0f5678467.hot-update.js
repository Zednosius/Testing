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
  return function (unit) {
    console.log("UNIT", unit);
    return unit.Faction == faction && (unit.Categories.includes("ENERGYPRODUCTION") || unit.Categories.includes("MASSPRODUCTION")) && unit.Categories.includes("STRUCTURE");
  };
}

function factory_filter(faction) {
  return function (unit) {
    return unit.IsFactory && unit.Faction === faction && !unit.Description.includes("HQ");
  };
}

function alphabetic_techlevel_sorter(a, b) {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    SERAPHIM: [],
    CYBRAN: [],
    UEF: [],
    AEON: []
  }),
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

  var generator_buildings = props.db.list.filter(generator_filter(faction)).sort(alphabetic_techlevel_sorter);
  var factories = props.db.list.filter(factory_filter(faction)).sort(alphabetic_techlevel_sorter);
  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "Create Next App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  })), __jsx("button", {
    onClick: function onClick() {
      return SetFaction("SERAPHIM");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, "Seraphim"), __jsx("button", {
    onClick: function onClick() {
      return SetFaction("CYBRAN");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, "Cybran"), __jsx("button", {
    onClick: function onClick() {
      return SetFaction("UEF");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "UEF"), __jsx("button", {
    onClick: function onClick() {
      return SetFaction("AEON");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, "Aeon"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, faction), __jsx("main", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(_components_BuildingSelection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
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
        lineNumber: 91,
        columnNumber: 15
      }
    });
  })), __jsx(_components_BuildingList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, console.log(generators), generators[faction].map(function (data) {
    return __jsx(_components_Building__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: data,
      db: props.db,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 15
      }
    });
  }))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx(_components_BuildingSelection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
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
        lineNumber: 114,
        columnNumber: 15
      }
    });
  })), __jsx(_components_BuildingList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, console.log(constructors), constructors[faction].map(function (data) {
    return __jsx(_components_Building__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: data,
      db: props.db,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    });
  })))));
}

_s(Home, "LjFvdwWH+BKhOaSYL7+OHJ3bqCE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2VuZXJhdG9yX2ZpbHRlciIsImZhY3Rpb24iLCJ1bml0IiwiY29uc29sZSIsImxvZyIsIkZhY3Rpb24iLCJDYXRlZ29yaWVzIiwiaW5jbHVkZXMiLCJmYWN0b3J5X2ZpbHRlciIsIklzRmFjdG9yeSIsIkRlc2NyaXB0aW9uIiwiYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyIiwiYSIsImIiLCJUZWNoTGV2ZWwiLCJIb21lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIlNFUkFQSElNIiwiQ1lCUkFOIiwiVUVGIiwiQUVPTiIsImdlbmVyYXRvcnMiLCJTZXRHZW5lcmF0b3JzIiwiY29uc3RydWN0b3JzIiwiU2V0Q29uc3RydWN0b3JzIiwiU2V0RmFjdGlvbiIsImdlbmVyYXRvcl9idWlsZGluZ3MiLCJkYiIsImxpc3QiLCJmaWx0ZXIiLCJzb3J0IiwiZmFjdG9yaWVzIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsIm1hcCIsImJ1aWxkaW5nIiwiVW5pdE5hbWUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLE9BQTFCLEVBQW1DO0FBQ2pDLFNBQU8sVUFBQ0MsSUFBRCxFQUFVO0FBQ2ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JGLElBQXBCO0FBQ0EsV0FDRUEsSUFBSSxDQUFDRyxPQUFMLElBQWdCSixPQUFoQixLQUNDQyxJQUFJLENBQUNJLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLGtCQUF6QixLQUNDTCxJQUFJLENBQUNJLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLGdCQUF6QixDQUZGLEtBR0FMLElBQUksQ0FBQ0ksVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsV0FBekIsQ0FKRjtBQU1ELEdB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QSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjViYWFjZTI2MzJiMGY1Njc4NDY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQnVpbGRpbmdTZWxlY3RvciBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ1NlbGVjdGlvblwiO1xuaW1wb3J0IEJ1aWxkaW5nSWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ0ljb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1aWxkaW5nTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ0xpc3RcIjtcbmltcG9ydCBCdWlsZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ1wiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgZGJfZGF0YSA9IHJlcXVpcmUoXCIuLi9wdWJsaWMvdW5pdF9kYl9lY28uanNvblwiKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYjogZGJfZGF0YSB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0b3JfZmlsdGVyKGZhY3Rpb24pIHtcbiAgcmV0dXJuICh1bml0KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJVTklUXCIsIHVuaXQpO1xuICAgIHJldHVybiAoXG4gICAgICB1bml0LkZhY3Rpb24gPT0gZmFjdGlvbiAmJlxuICAgICAgKHVuaXQuQ2F0ZWdvcmllcy5pbmNsdWRlcyhcIkVORVJHWVBST0RVQ1RJT05cIikgfHxcbiAgICAgICAgdW5pdC5DYXRlZ29yaWVzLmluY2x1ZGVzKFwiTUFTU1BST0RVQ1RJT05cIikpICYmXG4gICAgICB1bml0LkNhdGVnb3JpZXMuaW5jbHVkZXMoXCJTVFJVQ1RVUkVcIilcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmYWN0b3J5X2ZpbHRlcihmYWN0aW9uKSB7XG4gIHJldHVybiAodW5pdCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB1bml0LklzRmFjdG9yeSAmJlxuICAgICAgdW5pdC5GYWN0aW9uID09PSBmYWN0aW9uICYmXG4gICAgICAhdW5pdC5EZXNjcmlwdGlvbi5pbmNsdWRlcyhcIkhRXCIpXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyKGEsIGIpIHtcbiAgaWYgKGEuRGVzY3JpcHRpb24gPCBiLkRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhLkRlc2NyaXB0aW9uID4gYi5EZXNjcmlwdGlvbikge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGlmIChhLlRlY2hMZXZlbCA8IGIuVGVjaExldmVsKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhLlRlY2hMZXZlbCA+IGIuVGVjaExldmVsKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3QgW2dlbmVyYXRvcnMsIFNldEdlbmVyYXRvcnNdID0gdXNlU3RhdGUoe1xuICAgIFNFUkFQSElNOiBbXSxcbiAgICBDWUJSQU46IFtdLFxuICAgIFVFRjogW10sXG4gICAgQUVPTjogW10sXG4gIH0pO1xuICBjb25zdCBbY29uc3RydWN0b3JzLCBTZXRDb25zdHJ1Y3RvcnNdID0gdXNlU3RhdGUoe1xuICAgIFNFUkFQSElNOiBbXSxcbiAgICBDWUJSQU46IFtdLFxuICAgIFVFRjogW10sXG4gICAgQUVPTjogW10sXG4gIH0pO1xuICBjb25zdCBbZmFjdGlvbiwgU2V0RmFjdGlvbl0gPSB1c2VTdGF0ZShcIlNFUkFQSElNXCIpO1xuXG4gIGxldCBnZW5lcmF0b3JfYnVpbGRpbmdzID0gcHJvcHMuZGIubGlzdFxuICAgIC5maWx0ZXIoZ2VuZXJhdG9yX2ZpbHRlcihmYWN0aW9uKSlcbiAgICAuc29ydChhbHBoYWJldGljX3RlY2hsZXZlbF9zb3J0ZXIpO1xuXG4gIGxldCBmYWN0b3JpZXMgPSBwcm9wcy5kYi5saXN0XG4gICAgLmZpbHRlcihmYWN0b3J5X2ZpbHRlcihmYWN0aW9uKSlcbiAgICAuc29ydChhbHBoYWJldGljX3RlY2hsZXZlbF9zb3J0ZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IFNldEZhY3Rpb24oXCJTRVJBUEhJTVwiKX0+U2VyYXBoaW08L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gU2V0RmFjdGlvbihcIkNZQlJBTlwiKX0+Q3licmFuPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IFNldEZhY3Rpb24oXCJVRUZcIil9PlVFRjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBTZXRGYWN0aW9uKFwiQUVPTlwiKX0+QWVvbjwvYnV0dG9uPlxuICAgICAgPGgxPntmYWN0aW9ufTwvaDE+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QnVpbGRpbmdTZWxlY3Rvcj5cbiAgICAgICAgICAgIHtnZW5lcmF0b3JfYnVpbGRpbmdzLm1hcCgoYnVpbGRpbmcpID0+IChcbiAgICAgICAgICAgICAgPEJ1aWxkaW5nSWNvblxuICAgICAgICAgICAgICAgIGtleT17YnVpbGRpbmcuVW5pdE5hbWV9XG4gICAgICAgICAgICAgICAgYnVpbGRpbmc9e2J1aWxkaW5nfVxuICAgICAgICAgICAgICAgIG9uQWRkQnVpbGRpbmc9eyhidWlsZGluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmFjdGlvbik7XG4gICAgICAgICAgICAgICAgICBTZXRHZW5lcmF0b3JzKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZ2VuZXJhdG9ycyxcbiAgICAgICAgICAgICAgICAgICAgW2ZhY3Rpb25dOiBbLi4uZ2VuZXJhdG9yc1tmYWN0aW9uXSwgYnVpbGRpbmddLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPjwvQnVpbGRpbmdJY29uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9CdWlsZGluZ1NlbGVjdG9yPlxuICAgICAgICAgIDxCdWlsZGluZ0xpc3Q+XG4gICAgICAgICAgICB7Y29uc29sZS5sb2coZ2VuZXJhdG9ycyl9XG4gICAgICAgICAgICB7Z2VuZXJhdG9yc1tmYWN0aW9uXS5tYXAoKGRhdGEpID0+IChcbiAgICAgICAgICAgICAgPEJ1aWxkaW5nIGRhdGE9e2RhdGF9IGRiPXtwcm9wcy5kYn0+PC9CdWlsZGluZz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQnVpbGRpbmdMaXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QnVpbGRpbmdTZWxlY3Rvcj5cbiAgICAgICAgICAgIHtmYWN0b3JpZXMubWFwKChidWlsZGluZykgPT4gKFxuICAgICAgICAgICAgICA8QnVpbGRpbmdJY29uXG4gICAgICAgICAgICAgICAga2V5PXtidWlsZGluZy5Vbml0TmFtZX1cbiAgICAgICAgICAgICAgICBidWlsZGluZz17YnVpbGRpbmd9XG4gICAgICAgICAgICAgICAgb25BZGRCdWlsZGluZz17KGJ1aWxkaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgIFNldENvbnN0cnVjdG9ycyh7XG4gICAgICAgICAgICAgICAgICAgIC4uLmNvbnN0cnVjdG9ycyxcbiAgICAgICAgICAgICAgICAgICAgW2ZhY3Rpb25dOiBbLi4uY29uc3RydWN0b3JzW2ZhY3Rpb25dLCBidWlsZGluZ10sXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+PC9CdWlsZGluZ0ljb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0J1aWxkaW5nU2VsZWN0b3I+XG4gICAgICAgICAgPEJ1aWxkaW5nTGlzdD5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhjb25zdHJ1Y3RvcnMpfVxuICAgICAgICAgICAge2NvbnN0cnVjdG9yc1tmYWN0aW9uXS5tYXAoKGRhdGEpID0+IChcbiAgICAgICAgICAgICAgPEJ1aWxkaW5nIGRhdGE9e2RhdGF9IGRiPXtwcm9wcy5kYn0+PC9CdWlsZGluZz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQnVpbGRpbmdMaXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIHsvKlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==