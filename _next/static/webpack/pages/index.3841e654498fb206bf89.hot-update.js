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
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, "Create Next App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  })), __jsx("button", {
    onClick: function onClick() {
      return SetFaction("SERAPHIM");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, "Seraphim"), __jsx("button", {
    onClick: function onClick() {
      return SetFaction("CYBRAN");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, "Cybran"), __jsx("button", {
    onClick: function onClick() {
      return SetFaction("UEF");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "UEF"), __jsx("button", {
    onClick: function onClick() {
      return SetFaction("AEON");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "Aeon"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, faction), __jsx("main", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(_components_BuildingSelection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
        lineNumber: 85,
        columnNumber: 13
      }
    });
  })), __jsx(_components_BuildingSelection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
        lineNumber: 101,
        columnNumber: 13
      }
    });
  })), __jsx(_components_BuildingList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, console.log(constructors), constructors[faction].map(function (data) {
    return __jsx(_components_Building__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: data,
      db: props.db,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2VuZXJhdG9yX2ZpbHRlciIsImZhY3Rpb24iLCJ1bml0IiwiY29uc29sZSIsImxvZyIsIkZhY3Rpb24iLCJjYXRlZ29yaWVzIiwiaW5jbHVkZXMiLCJmYWN0b3J5X2ZpbHRlciIsIklzRmFjdG9yeSIsIkRlc2NyaXB0aW9uIiwiYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyIiwiYSIsImIiLCJUZWNoTGV2ZWwiLCJIb21lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImdlbmVyYXRvcnMiLCJTZXRHZW5lcmF0b3JzIiwiU0VSQVBISU0iLCJDWUJSQU4iLCJVRUYiLCJBRU9OIiwiY29uc3RydWN0b3JzIiwiU2V0Q29uc3RydWN0b3JzIiwiU2V0RmFjdGlvbiIsImdlbmVyYXRvcl9idWlsZGluZ3MiLCJkYiIsImxpc3QiLCJmaWx0ZXIiLCJzb3J0IiwiZmFjdG9yaWVzIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsIm1hcCIsImJ1aWxkaW5nIiwiVW5pdE5hbWUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLE9BQTFCLEVBQW1DO0FBQ2pDLFNBQU8sVUFBQ0MsSUFBRCxFQUFVO0FBQ2ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JGLElBQXBCO0FBQ0EsV0FDRUEsSUFBSSxDQUFDRyxPQUFMLElBQWdCSixPQUFoQixLQUNDQyxJQUFJLENBQUNJLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLGtCQUF6QixLQUNFTCxJQUFJLENBQUNJLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLGdCQUF6QixLQUNDTCxJQUFJLENBQUNJLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLFdBQXpCLENBSEosQ0FERjtBQU1ELEdB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T0FBRCxDQUZkLElBRXlCb0MsUUFGekIsS0FBZjtBQUlELE9BVEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURhO0FBQUEsR0FBZCxDQURILENBakJGLEVBZ0NFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHbEMsT0FBTyxDQUFDQyxHQUFSLENBQVlvQixZQUFaLENBREgsRUFFR0EsWUFBWSxDQUFDdkIsT0FBRCxDQUFaLENBQXNCbUMsR0FBdEIsQ0FBMEIsVUFBQ0csSUFBRDtBQUFBLFdBQ3pCLE1BQUMsNERBQUQ7QUFBVSxVQUFJLEVBQUVBLElBQWhCO0FBQXNCLFFBQUUsRUFBRXZCLEtBQUssQ0FBQ1ksRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUR5QjtBQUFBLEdBQTFCLENBRkgsQ0FoQ0YsQ0FWRixDQURGO0FBZ0VEOztHQWxGdUJiLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzg0MWU2NTQ0OThmYjIwNmJmODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBCdWlsZGluZ1NlbGVjdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0J1aWxkaW5nU2VsZWN0aW9uXCI7XG5pbXBvcnQgQnVpbGRpbmdJY29uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1aWxkaW5nSWNvblwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnVpbGRpbmdMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0J1aWxkaW5nTGlzdFwiO1xuaW1wb3J0IEJ1aWxkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL0J1aWxkaW5nXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBkYl9kYXRhID0gcmVxdWlyZShcIi4uL3B1YmxpYy91bml0X2RiX2Vjby5qc29uXCIpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRiOiBkYl9kYXRhIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRvcl9maWx0ZXIoZmFjdGlvbikge1xuICByZXR1cm4gKHVuaXQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlVOSVRcIiwgdW5pdCk7XG4gICAgcmV0dXJuIChcbiAgICAgIHVuaXQuRmFjdGlvbiA9PSBmYWN0aW9uICYmXG4gICAgICAodW5pdC5jYXRlZ29yaWVzLmluY2x1ZGVzKFwiRU5FUkdZUFJPRFVDVElPTlwiKSB8fFxuICAgICAgICAodW5pdC5jYXRlZ29yaWVzLmluY2x1ZGVzKFwiTUFTU1BST0RVQ1RJT05cIikgJiZcbiAgICAgICAgICB1bml0LmNhdGVnb3JpZXMuaW5jbHVkZXMoXCJTVFJVQ1RVUkVcIikpKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZhY3RvcnlfZmlsdGVyKGZhY3Rpb24pIHtcbiAgcmV0dXJuICh1bml0KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHVuaXQuSXNGYWN0b3J5ICYmXG4gICAgICB1bml0LkZhY3Rpb24gPT09IGZhY3Rpb24gJiZcbiAgICAgICF1bml0LkRlc2NyaXB0aW9uLmluY2x1ZGVzKFwiSFFcIilcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhbHBoYWJldGljX3RlY2hsZXZlbF9zb3J0ZXIoYSwgYikge1xuICBpZiAoYS5EZXNjcmlwdGlvbiA8IGIuRGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEuRGVzY3JpcHRpb24gPiBiLkRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKGEuVGVjaExldmVsIDwgYi5UZWNoTGV2ZWwpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEuVGVjaExldmVsID4gYi5UZWNoTGV2ZWwpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICBjb25zdCBbZ2VuZXJhdG9ycywgU2V0R2VuZXJhdG9yc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb25zdHJ1Y3RvcnMsIFNldENvbnN0cnVjdG9yc10gPSB1c2VTdGF0ZSh7XG4gICAgU0VSQVBISU06IFtdLFxuICAgIENZQlJBTjogW10sXG4gICAgVUVGOiBbXSxcbiAgICBBRU9OOiBbXSxcbiAgfSk7XG4gIGNvbnN0IFtmYWN0aW9uLCBTZXRGYWN0aW9uXSA9IHVzZVN0YXRlKFwiU0VSQVBISU1cIik7XG5cbiAgbGV0IGdlbmVyYXRvcl9idWlsZGluZ3MgPSBwcm9wcy5kYi5saXN0XG4gICAgLmZpbHRlcihnZW5lcmF0b3JfZmlsdGVyKGZhY3Rpb24pKVxuICAgIC5zb3J0KGFscGhhYmV0aWNfdGVjaGxldmVsX3NvcnRlcik7XG5cbiAgbGV0IGZhY3RvcmllcyA9IHByb3BzLmRiLmxpc3RcbiAgICAuZmlsdGVyKGZhY3RvcnlfZmlsdGVyKGZhY3Rpb24pKVxuICAgIC5zb3J0KGFscGhhYmV0aWNfdGVjaGxldmVsX3NvcnRlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gU2V0RmFjdGlvbihcIlNFUkFQSElNXCIpfT5TZXJhcGhpbTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBTZXRGYWN0aW9uKFwiQ1lCUkFOXCIpfT5DeWJyYW48L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gU2V0RmFjdGlvbihcIlVFRlwiKX0+VUVGPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IFNldEZhY3Rpb24oXCJBRU9OXCIpfT5BZW9uPC9idXR0b24+XG4gICAgICA8aDE+e2ZhY3Rpb259PC9oMT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8QnVpbGRpbmdTZWxlY3Rvcj5cbiAgICAgICAgICB7Z2VuZXJhdG9yX2J1aWxkaW5ncy5tYXAoKGJ1aWxkaW5nKSA9PiAoXG4gICAgICAgICAgICA8QnVpbGRpbmdJY29uXG4gICAgICAgICAgICAgIGtleT17YnVpbGRpbmcuVW5pdE5hbWV9XG4gICAgICAgICAgICAgIGJ1aWxkaW5nPXtidWlsZGluZ31cbiAgICAgICAgICAgICAgb25BZGRCdWlsZGluZz17KGJ1aWxkaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmFjdGlvbik7XG4gICAgICAgICAgICAgICAgU2V0R2VuZXJhdG9ycyh7XG4gICAgICAgICAgICAgICAgICAuLi5nZW5lcmF0b3JzLFxuICAgICAgICAgICAgICAgICAgW2ZhY3Rpb25dOiBbLi4uZ2VuZXJhdG9yc1tmYWN0aW9uXSwgYnVpbGRpbmddLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvQnVpbGRpbmdJY29uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0J1aWxkaW5nU2VsZWN0b3I+XG5cbiAgICAgICAgPEJ1aWxkaW5nU2VsZWN0b3I+XG4gICAgICAgICAge2ZhY3Rvcmllcy5tYXAoKGJ1aWxkaW5nKSA9PiAoXG4gICAgICAgICAgICA8QnVpbGRpbmdJY29uXG4gICAgICAgICAgICAgIGtleT17YnVpbGRpbmcuVW5pdE5hbWV9XG4gICAgICAgICAgICAgIGJ1aWxkaW5nPXtidWlsZGluZ31cbiAgICAgICAgICAgICAgb25BZGRCdWlsZGluZz17KGJ1aWxkaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmFjdGlvbik7XG4gICAgICAgICAgICAgICAgU2V0Q29uc3RydWN0b3JzKHtcbiAgICAgICAgICAgICAgICAgIC4uLmNvbnN0cnVjdG9ycyxcbiAgICAgICAgICAgICAgICAgIFtmYWN0aW9uXTogWy4uLmNvbnN0cnVjdG9yc1tmYWN0aW9uXSwgYnVpbGRpbmddLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvQnVpbGRpbmdJY29uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0J1aWxkaW5nU2VsZWN0b3I+XG4gICAgICAgIDxCdWlsZGluZ0xpc3Q+XG4gICAgICAgICAge2NvbnNvbGUubG9nKGNvbnN0cnVjdG9ycyl9XG4gICAgICAgICAge2NvbnN0cnVjdG9yc1tmYWN0aW9uXS5tYXAoKGRhdGEpID0+IChcbiAgICAgICAgICAgIDxCdWlsZGluZyBkYXRhPXtkYXRhfSBkYj17cHJvcHMuZGJ9PjwvQnVpbGRpbmc+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQnVpbGRpbmdMaXN0PlxuICAgICAgPC9tYWluPlxuICAgICAgey8qXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9