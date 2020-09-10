webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_BuildingCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BuildingCategory */ "./components/BuildingCategory.tsx");
/* harmony import */ var _components_Building__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Building */ "./components/Building.tsx");
/* harmony import */ var _typescript_Types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../typescript/Types */ "./typescript/Types.ts");
/* harmony import */ var _components_Constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Constants */ "./components/Constants.js");
/* harmony import */ var _components_ImageButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ImageButton */ "./components/ImageButton.tsx");



var _jsxFileName = "X:\\erik\\Programmering\\Webb\\SupCom\\ecobalancesupreme\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function generator_filter(faction) {
  return function (unit) {
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

function BuildingsReducer(buildings, action) {
  console.log("REDUCER", buildings, action);
  var faction = action.faction;

  switch (action.type) {
    case _typescript_Types__WEBPACK_IMPORTED_MODULE_7__["ActionType"].SET:
      return _objectSpread(_objectSpread({}, buildings), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, faction, Object.assign([], buildings[faction], Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action.index, action.building))));

    case _typescript_Types__WEBPACK_IMPORTED_MODULE_7__["ActionType"].ADD:
      return _objectSpread(_objectSpread({}, buildings), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, faction, [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(buildings[faction]), [action.building])));

    case _typescript_Types__WEBPACK_IMPORTED_MODULE_7__["ActionType"].UPDATE:
      return _objectSpread(_objectSpread({}, buildings), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, faction, Object.assign([], buildings[faction], Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action.index, action.update(buildings[faction][action.index])))));

    default:
      throw new Error("Invalid action type for buildings reducer");
  }
}

_c = BuildingsReducer;

function generate_building_mutators(dispatcher, faction, db) {
  return {
    Set: function Set(index, building) {
      return dispatcher({
        type: _typescript_Types__WEBPACK_IMPORTED_MODULE_7__["ActionType"].SET,
        faction: faction,
        building: building,
        index: index
      });
    },
    Add: function Add(raw_building) {
      return dispatcher({
        type: _typescript_Types__WEBPACK_IMPORTED_MODULE_7__["ActionType"].ADD,
        faction: faction,
        building: new _components_Building__WEBPACK_IMPORTED_MODULE_6__["BuildingData"](raw_building, db)
      });
    },
    Update: function Update(index, update) {
      return dispatcher({
        type: _typescript_Types__WEBPACK_IMPORTED_MODULE_7__["ActionType"].UPDATE,
        index: index,
        faction: faction,
        update: update
      });
    }
  };
}

var __N_SSG = true;
function Home(props) {
  _s();

  var _this = this;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(BuildingsReducer, {
    SERAPHIM: [],
    CYBRAN: [],
    UEF: [],
    AEON: []
  }),
      generators = _useReducer[0],
      generatorDispatch = _useReducer[1];

  var _useReducer2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(BuildingsReducer, {
    SERAPHIM: [],
    CYBRAN: [],
    UEF: [],
    AEON: []
  }),
      constructors = _useReducer2[0],
      factoryDispatch = _useReducer2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("SERAPHIM"),
      faction = _useState[0],
      SetFaction = _useState[1];

  var generator_buildings = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return props.db.list.filter(generator_filter(faction)).sort(alphabetic_techlevel_sorter);
  }, [faction]);
  var factories = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return props.db.list.filter(factory_filter(faction)).sort(alphabetic_techlevel_sorter);
  }, [faction]);

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return generate_building_mutators(generatorDispatch, faction, props.db);
  }, [faction]),
      SetGenBuilding = _useMemo.Set,
      AddGenBuilding = _useMemo.Add,
      UpdateGenBuilding = _useMemo.Update;

  var _useMemo2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return generate_building_mutators(factoryDispatch, faction, props.db);
  }, [faction]),
      SetFacBuilding = _useMemo2.Set,
      AddFacBuilding = _useMemo2.Add,
      UpdateFacBuilding = _useMemo2.Update;

  var factions = ["SERAPHIM", "CYBRAN", "UEF", "AEON"];
  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, "Create Next App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.page_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_button_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, factions.map(function (fac) {
    return __jsx(_components_ImageButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      highlight: fac === faction,
      onClick: function onClick() {
        return SetFaction(fac);
      },
      src: Object(_components_Constants__WEBPACK_IMPORTED_MODULE_8__["Icon"])(fac),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 15
      }
    });
  })), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_header_div,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }, faction)), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.stats_div,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, "Total Stats")), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.categories_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, __jsx(_components_BuildingCategory__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: "gen",
    category_buildings: generator_buildings,
    buildings: generators[faction],
    SetBuilding: SetGenBuilding,
    AddBuilding: AddGenBuilding,
    UpdateBuilding: UpdateGenBuilding,
    db: props.db,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.vertical_divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }), __jsx(_components_BuildingCategory__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: "fac",
    category_buildings: factories,
    buildings: constructors[faction],
    SetBuilding: SetFacBuilding,
    AddBuilding: AddFacBuilding,
    UpdateBuilding: UpdateFacBuilding,
    db: props.db,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }))));
}

_s(Home, "Wlp/NibsxYE0h8pCy93AhnFl8PA=");

_c2 = Home;

var _c, _c2;

$RefreshReg$(_c, "BuildingsReducer");
$RefreshReg$(_c2, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImdlbmVyYXRvcl9maWx0ZXIiLCJmYWN0aW9uIiwidW5pdCIsIkZhY3Rpb24iLCJDYXRlZ29yaWVzIiwiaW5jbHVkZXMiLCJmYWN0b3J5X2ZpbHRlciIsIklzRmFjdG9yeSIsIkRlc2NyaXB0aW9uIiwiYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyIiwiYSIsImIiLCJUZWNoTGV2ZWwiLCJCdWlsZGluZ3NSZWR1Y2VyIiwiYnVpbGRpbmdzIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJBY3Rpb25UeXBlIiwiU0VUIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5kZXgiLCJidWlsZGluZyIsIkFERCIsIlVQREFURSIsInVwZGF0ZSIsIkVycm9yIiwiZ2VuZXJhdGVfYnVpbGRpbmdfbXV0YXRvcnMiLCJkaXNwYXRjaGVyIiwiZGIiLCJTZXQiLCJBZGQiLCJyYXdfYnVpbGRpbmciLCJCdWlsZGluZ0RhdGEiLCJVcGRhdGUiLCJIb21lIiwicHJvcHMiLCJ1c2VSZWR1Y2VyIiwiU0VSQVBISU0iLCJDWUJSQU4iLCJVRUYiLCJBRU9OIiwiZ2VuZXJhdG9ycyIsImdlbmVyYXRvckRpc3BhdGNoIiwiY29uc3RydWN0b3JzIiwiZmFjdG9yeURpc3BhdGNoIiwidXNlU3RhdGUiLCJTZXRGYWN0aW9uIiwiZ2VuZXJhdG9yX2J1aWxkaW5ncyIsInVzZU1lbW8iLCJsaXN0IiwiZmlsdGVyIiwic29ydCIsImZhY3RvcmllcyIsIlNldEdlbkJ1aWxkaW5nIiwiQWRkR2VuQnVpbGRpbmciLCJVcGRhdGVHZW5CdWlsZGluZyIsIlNldEZhY0J1aWxkaW5nIiwiQWRkRmFjQnVpbGRpbmciLCJVcGRhdGVGYWNCdWlsZGluZyIsImZhY3Rpb25zIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInBhZ2VfaGVhZGVyIiwiZmFjdGlvbl9idXR0b25fY29udGFpbmVyIiwibWFwIiwiZmFjIiwiSWNvbiIsImZhY3Rpb25faGVhZGVyX2RpdiIsImZhY3Rpb25faGVhZGVyIiwic3RhdHNfZGl2IiwiY2F0ZWdvcmllc19jb250YWluZXIiLCJ2ZXJ0aWNhbF9kaXZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBUUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLE9BQTFCLEVBQXFFO0FBQ25FLFNBQU8sVUFBQ0MsSUFBRCxFQUFVO0FBQ2YsV0FDRUEsSUFBSSxDQUFDQyxPQUFMLElBQWdCRixPQUFoQixLQUNDQyxJQUFJLENBQUNFLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLGtCQUF6QixLQUNDSCxJQUFJLENBQUNFLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLGdCQUF6QixDQUZGLEtBR0FILElBQUksQ0FBQ0UsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsV0FBekIsQ0FKRjtBQU1ELEdBUEQ7QUFRRDs7QUFFRCxTQUFTQyxjQUFULENBQXdCTCxPQUF4QixFQUFtRTtBQUNqRSxTQUFPLFVBQUNDLElBQUQsRUFBVTtBQUNmLFdBQ0VBLElBQUksQ0FBQ0ssU0FBTCxJQUNBTCxJQUFJLENBQUNDLE9BQUwsS0FBaUJGLE9BRGpCLElBRUEsQ0FBQ0MsSUFBSSxDQUFDTSxXQUFMLENBQWlCSCxRQUFqQixDQUEwQixJQUExQixDQUhIO0FBS0QsR0FORDtBQU9EOztBQUVELFNBQVNJLDJCQUFULENBQXFDQyxDQUFyQyxFQUE4Q0MsQ0FBOUMsRUFBdUQ7QUFDckQsTUFBSUQsQ0FBQyxDQUFDRixXQUFGLEdBQWdCRyxDQUFDLENBQUNILFdBQXRCLEVBQW1DO0FBQ2pDLFdBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBQ0QsTUFBSUUsQ0FBQyxDQUFDRixXQUFGLEdBQWdCRyxDQUFDLENBQUNILFdBQXRCLEVBQW1DO0FBQ2pDLFdBQU8sQ0FBUDtBQUNEOztBQUNELE1BQUlFLENBQUMsQ0FBQ0UsU0FBRixH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RUFBRUMsY0FMZjtBQU1FLGtCQUFjLEVBQUVDLGlCQU5sQjtBQU9FLE1BQUUsRUFBRXZCLEtBQUssQ0FBQ1AsRUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FoQkYsQ0FMRixDQURGO0FBMEREOztHQTNHdUJNLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGM3YzhjYjk3ZjM1Nzk0NTVhYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBpbVN0eWxlIGZyb20gXCIuLi9zdHlsZXMvSW1hZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVkdWNlciwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1aWxkaW5nQ2F0ZWdvcnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQnVpbGRpbmdDYXRlZ29yeVwiO1xuaW1wb3J0IHsgQnVpbGRpbmdEYXRhIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnVpbGRpbmdcIjtcbmltcG9ydCB7IFVuaXQsIEFjdGlvbiwgQWN0aW9uVHlwZSwgRmFjdGlvbiB9IGZyb20gXCIuLi90eXBlc2NyaXB0L1R5cGVzXCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyB1cmwgfSBmcm9tIFwiaW5zcGVjdG9yXCI7XG5pbXBvcnQgSW1hZ2VCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvSW1hZ2VCdXR0b25cIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IGRiX2RhdGEgPSByZXF1aXJlKFwiLi4vcHVibGljL3VuaXRfZGJfZWNvLmpzb25cIik7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZGI6IGRiX2RhdGEgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdG9yX2ZpbHRlcihmYWN0aW9uOiBGYWN0aW9uKTogKHVuaXQ6IFVuaXQpID0+IGJvb2xlYW4ge1xuICByZXR1cm4gKHVuaXQpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdW5pdC5GYWN0aW9uID09IGZhY3Rpb24gJiZcbiAgICAgICh1bml0LkNhdGVnb3JpZXMuaW5jbHVkZXMoXCJFTkVSR1lQUk9EVUNUSU9OXCIpIHx8XG4gICAgICAgIHVuaXQuQ2F0ZWdvcmllcy5pbmNsdWRlcyhcIk1BU1NQUk9EVUNUSU9OXCIpKSAmJlxuICAgICAgdW5pdC5DYXRlZ29yaWVzLmluY2x1ZGVzKFwiU1RSVUNUVVJFXCIpXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmFjdG9yeV9maWx0ZXIoZmFjdGlvbjogRmFjdGlvbik6ICh1bml0OiBVbml0KSA9PiBib29sZWFuIHtcbiAgcmV0dXJuICh1bml0KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHVuaXQuSXNGYWN0b3J5ICYmXG4gICAgICB1bml0LkZhY3Rpb24gPT09IGZhY3Rpb24gJiZcbiAgICAgICF1bml0LkRlc2NyaXB0aW9uLmluY2x1ZGVzKFwiSFFcIilcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhbHBoYWJldGljX3RlY2hsZXZlbF9zb3J0ZXIoYTogVW5pdCwgYjogVW5pdCkge1xuICBpZiAoYS5EZXNjcmlwdGlvbiA8IGIuRGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEuRGVzY3JpcHRpb24gPiBiLkRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKGEuVGVjaExldmVsIDwgYi5UZWNoTGV2ZWwpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEuVGVjaExldmVsID4gYi5UZWNoTGV2ZWwpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gQnVpbGRpbmdzUmVkdWNlcihcbiAgYnVpbGRpbmdzOiB7IFtpbmRleDogc3RyaW5nXTogQnVpbGRpbmdEYXRhW10gfSxcbiAgYWN0aW9uOiBBY3Rpb25cbikge1xuICBjb25zb2xlLmxvZyhcIlJFRFVDRVJcIiwgYnVpbGRpbmdzLCBhY3Rpb24pO1xuICBsZXQgZmFjdGlvbiA9IGFjdGlvbi5mYWN0aW9uO1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBY3Rpb25UeXBlLlNFVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmJ1aWxkaW5ncyxcbiAgICAgICAgW2ZhY3Rpb25dOiBPYmplY3QuYXNzaWduKFtdLCBidWlsZGluZ3NbZmFjdGlvbl0sIHtcbiAgICAgICAgICBbYWN0aW9uLmluZGV4XTogYWN0aW9uLmJ1aWxkaW5nLFxuICAgICAgICB9KSxcbiAgICAgIH07XG4gICAgY2FzZSBBY3Rpb25UeXBlLkFERDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmJ1aWxkaW5ncyxcbiAgICAgICAgW2ZhY3Rpb25dOiBbLi4uYnVpbGRpbmdzW2ZhY3Rpb25dLCBhY3Rpb24uYnVpbGRpbmddLFxuICAgICAgfTtcbiAgICBjYXNlIEFjdGlvblR5cGUuVVBEQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYnVpbGRpbmdzLFxuICAgICAgICBbZmFjdGlvbl06IE9iamVjdC5hc3NpZ24oW10sIGJ1aWxkaW5nc1tmYWN0aW9uXSwge1xuICAgICAgICAgIFthY3Rpb24uaW5kZXhdOiBhY3Rpb24udXBkYXRlKGJ1aWxkaW5nc1tmYWN0aW9uXVthY3Rpb24uaW5kZXhdKSxcbiAgICAgICAgfSksXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYWN0aW9uIHR5cGUgZm9yIGJ1aWxkaW5ncyByZWR1Y2VyXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlX2J1aWxkaW5nX211dGF0b3JzKFxuICBkaXNwYXRjaGVyOiAoYTogQWN0aW9uKSA9PiB2b2lkLFxuICBmYWN0aW9uOiBGYWN0aW9uLFxuICBkYlxuKSB7XG4gIHJldHVybiB7XG4gICAgU2V0OiAoaW5kZXgsIGJ1aWxkaW5nKSA9PlxuICAgICAgZGlzcGF0Y2hlcih7XG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuU0VULFxuICAgICAgICBmYWN0aW9uOiBmYWN0aW9uLFxuICAgICAgICBidWlsZGluZzogYnVpbGRpbmcsXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIH0pLFxuICAgIEFkZDogKHJhd19idWlsZGluZykgPT5cbiAgICAgIGRpc3BhdGNoZXIoe1xuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLkFERCxcbiAgICAgICAgZmFjdGlvbjogZmFjdGlvbixcbiAgICAgICAgYnVpbGRpbmc6IG5ldyBCdWlsZGluZ0RhdGEocmF3X2J1aWxkaW5nLCBkYiksXG4gICAgICB9KSxcbiAgICBVcGRhdGU6IChpbmRleCwgdXBkYXRlKSA9PlxuICAgICAgZGlzcGF0Y2hlcih7XG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuVVBEQVRFLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGZhY3Rpb246IGZhY3Rpb24sXG4gICAgICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgICAgfSksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHM6IHsgZGI6IHsgbGlzdDogVW5pdFtdIH0gfSkge1xuICBjb25zdCBbZ2VuZXJhdG9ycywgZ2VuZXJhdG9yRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihCdWlsZGluZ3NSZWR1Y2VyLCB7XG4gICAgU0VSQVBISU06IFtdLFxuICAgIENZQlJBTjogW10sXG4gICAgVUVGOiBbXSxcbiAgICBBRU9OOiBbXSxcbiAgfSk7XG4gIGNvbnN0IFtjb25zdHJ1Y3RvcnMsIGZhY3RvcnlEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKEJ1aWxkaW5nc1JlZHVjZXIsIHtcbiAgICBTRVJBUEhJTTogW10sXG4gICAgQ1lCUkFOOiBbXSxcbiAgICBVRUY6IFtdLFxuICAgIEFFT046IFtdLFxuICB9KTtcbiAgY29uc3QgW2ZhY3Rpb24sIFNldEZhY3Rpb25dOiBbRmFjdGlvbiwgYW55XSA9IHVzZVN0YXRlKFwiU0VSQVBISU1cIik7XG5cbiAgbGV0IGdlbmVyYXRvcl9idWlsZGluZ3MgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBwcm9wcy5kYi5saXN0XG4gICAgICAgIC5maWx0ZXIoZ2VuZXJhdG9yX2ZpbHRlcihmYWN0aW9uKSlcbiAgICAgICAgLnNvcnQoYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyKSxcbiAgICBbZmFjdGlvbl1cbiAgKTtcblxuICBsZXQgZmFjdG9yaWVzID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgcHJvcHMuZGIubGlzdFxuICAgICAgICAuZmlsdGVyKGZhY3RvcnlfZmlsdGVyKGZhY3Rpb24pKVxuICAgICAgICAuc29ydChhbHBoYWJldGljX3RlY2hsZXZlbF9zb3J0ZXIpLFxuICAgIFtmYWN0aW9uXVxuICApO1xuICBsZXQge1xuICAgIFNldDogU2V0R2VuQnVpbGRpbmcsXG4gICAgQWRkOiBBZGRHZW5CdWlsZGluZyxcbiAgICBVcGRhdGU6IFVwZGF0ZUdlbkJ1aWxkaW5nLFxuICB9ID0gdXNlTWVtbyhcbiAgICAoKSA9PiBnZW5lcmF0ZV9idWlsZGluZ19tdXRhdG9ycyhnZW5lcmF0b3JEaXNwYXRjaCwgZmFjdGlvbiwgcHJvcHMuZGIpLFxuICAgIFtmYWN0aW9uXVxuICApO1xuXG4gIGxldCB7XG4gICAgU2V0OiBTZXRGYWNCdWlsZGluZyxcbiAgICBBZGQ6IEFkZEZhY0J1aWxkaW5nLFxuICAgIFVwZGF0ZTogVXBkYXRlRmFjQnVpbGRpbmcsXG4gIH0gPSB1c2VNZW1vKFxuICAgICgpID0+IGdlbmVyYXRlX2J1aWxkaW5nX211dGF0b3JzKGZhY3RvcnlEaXNwYXRjaCwgZmFjdGlvbiwgcHJvcHMuZGIpLFxuICAgIFtmYWN0aW9uXVxuICApO1xuICBsZXQgZmFjdGlvbnMgPSBbXCJTRVJBUEhJTVwiLCBcIkNZQlJBTlwiLCBcIlVFRlwiLCBcIkFFT05cIl07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VfaGVhZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhY3Rpb25fYnV0dG9uX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICB7ZmFjdGlvbnMubWFwKChmYWMpID0+IChcbiAgICAgICAgICAgICAgPEltYWdlQnV0dG9uXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0PXtmYWMgPT09IGZhY3Rpb259XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gU2V0RmFjdGlvbihmYWMpfVxuICAgICAgICAgICAgICAgIHNyYz17SWNvbihmYWMpfVxuICAgICAgICAgICAgICA+PC9JbWFnZUJ1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdGlvbl9oZWFkZXJfZGl2fT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5mYWN0aW9uX2hlYWRlcn0+e2ZhY3Rpb259PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Rpdn0+VG90YWwgU3RhdHM8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc19jb250YWluZXJ9PlxuICAgICAgICAgIDxCdWlsZGluZ0NhdGVnb3J5XG4gICAgICAgICAgICBrZXk9XCJnZW5cIlxuICAgICAgICAgICAgY2F0ZWdvcnlfYnVpbGRpbmdzPXtnZW5lcmF0b3JfYnVpbGRpbmdzfVxuICAgICAgICAgICAgYnVpbGRpbmdzPXtnZW5lcmF0b3JzW2ZhY3Rpb25dfVxuICAgICAgICAgICAgU2V0QnVpbGRpbmc9e1NldEdlbkJ1aWxkaW5nfVxuICAgICAgICAgICAgQWRkQnVpbGRpbmc9e0FkZEdlbkJ1aWxkaW5nfVxuICAgICAgICAgICAgVXBkYXRlQnVpbGRpbmc9e1VwZGF0ZUdlbkJ1aWxkaW5nfVxuICAgICAgICAgICAgZGI9e3Byb3BzLmRifVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52ZXJ0aWNhbF9kaXZpZGVyfT48L2Rpdj5cbiAgICAgICAgICA8QnVpbGRpbmdDYXRlZ29yeVxuICAgICAgICAgICAga2V5PVwiZmFjXCJcbiAgICAgICAgICAgIGNhdGVnb3J5X2J1aWxkaW5ncz17ZmFjdG9yaWVzfVxuICAgICAgICAgICAgYnVpbGRpbmdzPXtjb25zdHJ1Y3RvcnNbZmFjdGlvbl19XG4gICAgICAgICAgICBTZXRCdWlsZGluZz17U2V0RmFjQnVpbGRpbmd9XG4gICAgICAgICAgICBBZGRCdWlsZGluZz17QWRkRmFjQnVpbGRpbmd9XG4gICAgICAgICAgICBVcGRhdGVCdWlsZGluZz17VXBkYXRlRmFjQnVpbGRpbmd9XG4gICAgICAgICAgICBkYj17cHJvcHMuZGJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICB7LypcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXtcIiBcIn1cbiAgICAgICAgICA8aW1nIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=