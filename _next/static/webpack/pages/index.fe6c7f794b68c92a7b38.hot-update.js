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
    return unit.Faction == faction && (unit.categories.includes("ENERGYPRODUCTION") || unit.categories.includes("MASSPRODUCTION") && unit.categories.includes("STRUCTURE"));
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

  var generator_buildings = props.db.list.filter(generator_filter(faction)).sort(alphabetic_techlevel_sorter);
  var factories = props.db.list.filter(factory_filter(faction)).sort(alphabetic_techlevel_sorter);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2VuZXJhdG9yX2ZpbHRlciIsImZhY3Rpb24iLCJ1bml0IiwiRmFjdGlvbiIsImNhdGVnb3JpZXMiLCJpbmNsdWRlcyIsImZhY3RvcnlfZmlsdGVyIiwiSXNGYWN0b3J5IiwiRGVzY3JpcHRpb24iLCJhbHBoYWJldGljX3RlY2hsZXZlbF9zb3J0ZXIiLCJhIiwiYiIsIlRlY2hMZXZlbCIsIkhvbWUiLCJwcm9wcyIsInVzZVN0YXRlIiwiZ2VuZXJhdG9ycyIsIlNldEdlbmVyYXRvcnMiLCJTRVJBUEhJTSIsIkNZQlJBTiIsIlVFRiIsIkFFT04iLCJjb25zdHJ1Y3RvcnMiLCJTZXRDb25zdHJ1Y3RvcnMiLCJTZXRGYWN0aW9uIiwiZ2VuZXJhdG9yX2J1aWxkaW5ncyIsImRiIiwibGlzdCIsImZpbHRlciIsInNvcnQiLCJmYWN0b3JpZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwibWFwIiwiYnVpbGRpbmciLCJVbml0TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLE9BQTFCLEVBQW1DO0FBQ2pDLFNBQU8sVUFBQ0MsSUFBRCxFQUFVO0FBQ2YsV0FDRUEsSUFBSSxDQUFDQyxPQUFMLElBQWdCRixPQUFoQixLQUNDQyxJQUFJLENBQUNFLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLGtCQUF6QixLQUNFSCxJQUFJLENBQUNFLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLGdCQUF6QixLQUNDSCxJQUFJLENBQUNFLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLFdBQXpCLENBSEosQ0FERjtBQU1ELEdBUEQ7QUFRRDs7QUFFRCxTQUFTQyxjQUFULENBQXdCTCxPQUF4QixFQUFpQztB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGE7QUFBQSxHQUFkLENBREgsQ0FqQkYsRUFnQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaEIsWUFBWixDQURILEVBRUdBLFlBQVksQ0FBQ3JCLE9BQUQsQ0FBWixDQUFzQmlDLEdBQXRCLENBQTBCLFVBQUNLLElBQUQ7QUFBQSxXQUN6QixNQUFDLDREQUFEO0FBQVUsVUFBSSxFQUFFQSxJQUFoQjtBQUFzQixRQUFFLEVBQUV6QixLQUFLLENBQUNZLEVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEeUI7QUFBQSxHQUExQixDQUZILENBaENGLENBVkYsQ0FERjtBQWdFRDs7R0FsRnVCYixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZlNmM3Zjc5NGI2OGM5MmE3YjM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQnVpbGRpbmdTZWxlY3RvciBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ1NlbGVjdGlvblwiO1xuaW1wb3J0IEJ1aWxkaW5nSWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ0ljb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1aWxkaW5nTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ0xpc3RcIjtcbmltcG9ydCBCdWlsZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ1wiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgZGJfZGF0YSA9IHJlcXVpcmUoXCIuLi9wdWJsaWMvdW5pdF9kYl9lY28uanNvblwiKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYjogZGJfZGF0YSB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0b3JfZmlsdGVyKGZhY3Rpb24pIHtcbiAgcmV0dXJuICh1bml0KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHVuaXQuRmFjdGlvbiA9PSBmYWN0aW9uICYmXG4gICAgICAodW5pdC5jYXRlZ29yaWVzLmluY2x1ZGVzKFwiRU5FUkdZUFJPRFVDVElPTlwiKSB8fFxuICAgICAgICAodW5pdC5jYXRlZ29yaWVzLmluY2x1ZGVzKFwiTUFTU1BST0RVQ1RJT05cIikgJiZcbiAgICAgICAgICB1bml0LmNhdGVnb3JpZXMuaW5jbHVkZXMoXCJTVFJVQ1RVUkVcIikpKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZhY3RvcnlfZmlsdGVyKGZhY3Rpb24pIHtcbiAgcmV0dXJuICh1bml0KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHVuaXQuSXNGYWN0b3J5ICYmXG4gICAgICB1bml0LkZhY3Rpb24gPT09IGZhY3Rpb24gJiZcbiAgICAgICF1bml0LkRlc2NyaXB0aW9uLmluY2x1ZGVzKFwiSFFcIilcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhbHBoYWJldGljX3RlY2hsZXZlbF9zb3J0ZXIoYSwgYikge1xuICBpZiAoYS5EZXNjcmlwdGlvbiA8IGIuRGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEuRGVzY3JpcHRpb24gPiBiLkRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKGEuVGVjaExldmVsIDwgYi5UZWNoTGV2ZWwpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEuVGVjaExldmVsID4gYi5UZWNoTGV2ZWwpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zdCBbZ2VuZXJhdG9ycywgU2V0R2VuZXJhdG9yc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb25zdHJ1Y3RvcnMsIFNldENvbnN0cnVjdG9yc10gPSB1c2VTdGF0ZSh7XG4gICAgU0VSQVBISU06IFtdLFxuICAgIENZQlJBTjogW10sXG4gICAgVUVGOiBbXSxcbiAgICBBRU9OOiBbXSxcbiAgfSk7XG4gIGNvbnN0IFtmYWN0aW9uLCBTZXRGYWN0aW9uXSA9IHVzZVN0YXRlKFwiU0VSQVBISU1cIik7XG5cbiAgbGV0IGdlbmVyYXRvcl9idWlsZGluZ3MgPSBwcm9wcy5kYi5saXN0XG4gICAgLmZpbHRlcihnZW5lcmF0b3JfZmlsdGVyKGZhY3Rpb24pKVxuICAgIC5zb3J0KGFscGhhYmV0aWNfdGVjaGxldmVsX3NvcnRlcik7XG5cbiAgbGV0IGZhY3RvcmllcyA9IHByb3BzLmRiLmxpc3RcbiAgICAuZmlsdGVyKGZhY3RvcnlfZmlsdGVyKGZhY3Rpb24pKVxuICAgIC5zb3J0KGFscGhhYmV0aWNfdGVjaGxldmVsX3NvcnRlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gU2V0RmFjdGlvbihcIlNFUkFQSElNXCIpfT5TZXJhcGhpbTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBTZXRGYWN0aW9uKFwiQ1lCUkFOXCIpfT5DeWJyYW48L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gU2V0RmFjdGlvbihcIlVFRlwiKX0+VUVGPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IFNldEZhY3Rpb24oXCJBRU9OXCIpfT5BZW9uPC9idXR0b24+XG4gICAgICA8aDE+e2ZhY3Rpb259PC9oMT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8QnVpbGRpbmdTZWxlY3Rvcj5cbiAgICAgICAgICB7Z2VuZXJhdG9yX2J1aWxkaW5ncy5tYXAoKGJ1aWxkaW5nKSA9PiAoXG4gICAgICAgICAgICA8QnVpbGRpbmdJY29uXG4gICAgICAgICAgICAgIGtleT17YnVpbGRpbmcuVW5pdE5hbWV9XG4gICAgICAgICAgICAgIGJ1aWxkaW5nPXtidWlsZGluZ31cbiAgICAgICAgICAgICAgb25BZGRCdWlsZGluZz17KGJ1aWxkaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmFjdGlvbik7XG4gICAgICAgICAgICAgICAgU2V0R2VuZXJhdG9ycyh7XG4gICAgICAgICAgICAgICAgICAuLi5nZW5lcmF0b3JzLFxuICAgICAgICAgICAgICAgICAgW2ZhY3Rpb25dOiBbLi4uZ2VuZXJhdG9yc1tmYWN0aW9uXSwgYnVpbGRpbmddLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvQnVpbGRpbmdJY29uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0J1aWxkaW5nU2VsZWN0b3I+XG5cbiAgICAgICAgPEJ1aWxkaW5nU2VsZWN0b3I+XG4gICAgICAgICAge2ZhY3Rvcmllcy5tYXAoKGJ1aWxkaW5nKSA9PiAoXG4gICAgICAgICAgICA8QnVpbGRpbmdJY29uXG4gICAgICAgICAgICAgIGtleT17YnVpbGRpbmcuVW5pdE5hbWV9XG4gICAgICAgICAgICAgIGJ1aWxkaW5nPXtidWlsZGluZ31cbiAgICAgICAgICAgICAgb25BZGRCdWlsZGluZz17KGJ1aWxkaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmFjdGlvbik7XG4gICAgICAgICAgICAgICAgU2V0Q29uc3RydWN0b3JzKHtcbiAgICAgICAgICAgICAgICAgIC4uLmNvbnN0cnVjdG9ycyxcbiAgICAgICAgICAgICAgICAgIFtmYWN0aW9uXTogWy4uLmNvbnN0cnVjdG9yc1tmYWN0aW9uXSwgYnVpbGRpbmddLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvQnVpbGRpbmdJY29uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0J1aWxkaW5nU2VsZWN0b3I+XG4gICAgICAgIDxCdWlsZGluZ0xpc3Q+XG4gICAgICAgICAge2NvbnNvbGUubG9nKGNvbnN0cnVjdG9ycyl9XG4gICAgICAgICAge2NvbnN0cnVjdG9yc1tmYWN0aW9uXS5tYXAoKGRhdGEpID0+IChcbiAgICAgICAgICAgIDxCdWlsZGluZyBkYXRhPXtkYXRhfSBkYj17cHJvcHMuZGJ9PjwvQnVpbGRpbmc+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQnVpbGRpbmdMaXN0PlxuICAgICAgPC9tYWluPlxuICAgICAgey8qXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9