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
/* harmony import */ var _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Image.module.css */ "./styles/Image.module.css");
/* harmony import */ var _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Image_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_BuildingCategory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BuildingCategory */ "./components/BuildingCategory.tsx");
/* harmony import */ var _components_Building__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Building */ "./components/Building.tsx");
/* harmony import */ var _typescript_Types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../typescript/Types */ "./typescript/Types.ts");
/* harmony import */ var _components_Constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Constants */ "./components/Constants.js");



var _jsxFileName = "X:\\erik\\Programmering\\Webb\\SupCom\\ecobalancesupreme\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

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
    case _typescript_Types__WEBPACK_IMPORTED_MODULE_8__["ActionType"].SET:
      return _objectSpread(_objectSpread({}, buildings), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, faction, Object.assign([], buildings[faction], Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action.index, action.building))));

    case _typescript_Types__WEBPACK_IMPORTED_MODULE_8__["ActionType"].ADD:
      return _objectSpread(_objectSpread({}, buildings), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, faction, [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(buildings[faction]), [action.building])));

    case _typescript_Types__WEBPACK_IMPORTED_MODULE_8__["ActionType"].UPDATE:
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
        type: _typescript_Types__WEBPACK_IMPORTED_MODULE_8__["ActionType"].SET,
        faction: faction,
        building: building,
        index: index
      });
    },
    Add: function Add(raw_building) {
      return dispatcher({
        type: _typescript_Types__WEBPACK_IMPORTED_MODULE_8__["ActionType"].ADD,
        faction: faction,
        building: new _components_Building__WEBPACK_IMPORTED_MODULE_7__["BuildingData"](raw_building, db)
      });
    },
    Update: function Update(index, update) {
      return dispatcher({
        type: _typescript_Types__WEBPACK_IMPORTED_MODULE_8__["ActionType"].UPDATE,
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

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(BuildingsReducer, {
    SERAPHIM: [],
    CYBRAN: [],
    UEF: [],
    AEON: []
  }),
      generators = _useReducer[0],
      generatorDispatch = _useReducer[1];

  var _useReducer2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(BuildingsReducer, {
    SERAPHIM: [],
    CYBRAN: [],
    UEF: [],
    AEON: []
  }),
      constructors = _useReducer2[0],
      factoryDispatch = _useReducer2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("SERAPHIM"),
      faction = _useState[0],
      SetFaction = _useState[1];

  var generator_buildings = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return props.db.list.filter(generator_filter(faction)).sort(alphabetic_techlevel_sorter);
  }, [faction]);
  var factories = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return props.db.list.filter(factory_filter(faction)).sort(alphabetic_techlevel_sorter);
  }, [faction]);

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return generate_building_mutators(generatorDispatch, faction, props.db);
  }, [faction]),
      SetGenBuilding = _useMemo.Set,
      AddGenBuilding = _useMemo.Add,
      UpdateGenBuilding = _useMemo.Update;

  var _useMemo2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
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
      lineNumber: 164,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, "Create Next App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.page_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_button_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, factions.map(function (fac) {
    return __jsx("button", {
      className: [_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_button, _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.image_button, _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.image_button_hover].join(""),
      onClick: function onClick() {
        return SetFaction(fac);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: Object(_components_Constants__WEBPACK_IMPORTED_MODULE_9__["Icon"])(fac),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 17
      }
    }));
  })), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_header_div,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }, faction)), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.stats_div,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, "Total Stats")), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.categories_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, __jsx(_components_BuildingCategory__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 191,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.vertical_divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }), __jsx(_components_BuildingCategory__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 201,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImdlbmVyYXRvcl9maWx0ZXIiLCJmYWN0aW9uIiwidW5pdCIsIkZhY3Rpb24iLCJDYXRlZ29yaWVzIiwiaW5jbHVkZXMiLCJmYWN0b3J5X2ZpbHRlciIsIklzRmFjdG9yeSIsIkRlc2NyaXB0aW9uIiwiYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyIiwiYSIsImIiLCJUZWNoTGV2ZWwiLCJCdWlsZGluZ3NSZWR1Y2VyIiwiYnVpbGRpbmdzIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJBY3Rpb25UeXBlIiwiU0VUIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5kZXgiLCJidWlsZGluZyIsIkFERCIsIlVQREFURSIsInVwZGF0ZSIsIkVycm9yIiwiZ2VuZXJhdGVfYnVpbGRpbmdfbXV0YXRvcnMiLCJkaXNwYXRjaGVyIiwiZGIiLCJTZXQiLCJBZGQiLCJyYXdfYnVpbGRpbmciLCJCdWlsZGluZ0RhdGEiLCJVcGRhdGUiLCJIb21lIiwicHJvcHMiLCJ1c2VSZWR1Y2VyIiwiU0VSQVBISU0iLCJDWUJSQU4iLCJVRUYiLCJBRU9OIiwiZ2VuZXJhdG9ycyIsImdlbmVyYXRvckRpc3BhdGNoIiwiY29uc3RydWN0b3JzIiwiZmFjdG9yeURpc3BhdGNoIiwidXNlU3RhdGUiLCJTZXRGYWN0aW9uIiwiZ2VuZXJhdG9yX2J1aWxkaW5ncyIsInVzZU1lbW8iLCJsaXN0IiwiZmlsdGVyIiwic29ydCIsImZhY3RvcmllcyIsIlNldEdlbkJ1aWxkaW5nIiwiQWRkR2VuQnVpbGRpbmciLCJVcGRhdGVHZW5CdWlsZGluZyIsIlNldEZhY0J1aWxkaW5nIiwiQWRkRmFjQnVpbGRpbmciLCJVcGRhdGVGYWNCdWlsZGluZyIsImZhY3Rpb25zIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInBhZ2VfaGVhZGVyIiwiZmFjdGlvbl9idXR0b25fY29udGFpbmVyIiwibWFwIiwiZmFjIiwiZmFjdGlvbl9idXR0b24iLCJpbVN0eWxlIiwiaW1hZ2VfYnV0dG9uIiwiaW1hZ2VfYnV0dG9uX2hvdmVyIiwiam9pbiIsIkljb24iLCJmYWN0aW9uX2hlYWRlcl9kaXYiLCJmYWN0aW9uX2hlYWRlciIsInN0YXRzX2RpdiIsImNhdGVnb3JpZXNfY29udGFpbmVyIiwidmVydGljYWxfZGl2aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxTQUFTQSxnQkFBVCxDQUEwQkMsT0FBMUIsRUFBcUU7QUFDbkUsU0FBTyxVQUFDQyxJQUFELEVBQVU7QUFDZixXQUNFQSxJQUFJLENBQUNDLE9BQUwsSUFBZ0JGLE9BQWhCLEtBQ0NDLElBQUksQ0FBQ0UsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsa0JBQXpCLEtBQ0NILElBQUksQ0FBQ0UsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsZ0JBQXpCLENBRkYsS0FHQUgsSUFBSSxDQUFDRSxVQUFMLENBQWdCQyxRQUFoQixDQUF5QixXQUF6QixDQUpGO0FBTUQsR0FQRDtBQVFEOztBQUVELFNBQVNDLGNBQVQsQ0FBd0JMLE9BQXhCLEVBQW1FO0FBQ2pFLFNBQU8sVUFBQ0MsSUFBRCxFQUFVO0FBQ2YsV0FDRUEsSUFBSSxDQUFDSyxTQUFMLElBQ0FMLElBQUksQ0FBQ0MsT0FBTCxLQUFpQkYsT0FEakIsSUFFQSxDQUFDQyxJQUFJLENBQUNNLFdBQUwsQ0FBaUJILFFBQWpCLENBQTBCLElBQTFCLENBSEg7QUFLRCxHQU5EO0FBT0Q7O0FBRUQsU0FBU0ksMkJBQVQsQ0FBcUNDLENBQXJDLEVBQThDQyxDQUE5QyxFQUF1RDtBQUNyRCxNQUFJRCxDQUFDLENBQUNGLFdBQUYsR0FBZ0JHLENBQUMsQ0FBQ0gsV0FBdEIsRUFBbUM7QUFDakMsV0FBTyxDQUFDLENBQVI7QUFDRDs7QUFDRCxNQUFJRSxDQUFDLENBQUNGLFdBQUYsR0FBZ0JHLENB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Q0FBQ2lCLGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRSxNQUFDLG9FQUFEO0FBQ0UsT0FBRyxFQUFDLEtBRE47QUFFRSxzQkFBa0IsRUFBRXpCLFNBRnRCO0FBR0UsYUFBUyxFQUFFVCxZQUFZLENBQUM3QyxPQUFELENBSHpCO0FBSUUsZUFBVyxFQUFFMEQsY0FKZjtBQUtFLGVBQVcsRUFBRUMsY0FMZjtBQU1FLGtCQUFjLEVBQUVDLGlCQU5sQjtBQU9FLE1BQUUsRUFBRXZCLEtBQUssQ0FBQ1AsRUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FyQkYsQ0FMRixDQURGO0FBK0REOztHQWhIdUJNLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmJlNTU1MmM3MjVhYjYwOTFhZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBpbVN0eWxlIGZyb20gXCIuLi9zdHlsZXMvSW1hZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVkdWNlciwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1aWxkaW5nQ2F0ZWdvcnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQnVpbGRpbmdDYXRlZ29yeVwiO1xuaW1wb3J0IHsgQnVpbGRpbmdEYXRhIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnVpbGRpbmdcIjtcbmltcG9ydCB7IFVuaXQsIEFjdGlvbiwgQWN0aW9uVHlwZSwgRmFjdGlvbiB9IGZyb20gXCIuLi90eXBlc2NyaXB0L1R5cGVzXCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29uc3RhbnRzXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBkYl9kYXRhID0gcmVxdWlyZShcIi4uL3B1YmxpYy91bml0X2RiX2Vjby5qc29uXCIpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRiOiBkYl9kYXRhIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRvcl9maWx0ZXIoZmFjdGlvbjogRmFjdGlvbik6ICh1bml0OiBVbml0KSA9PiBib29sZWFuIHtcbiAgcmV0dXJuICh1bml0KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHVuaXQuRmFjdGlvbiA9PSBmYWN0aW9uICYmXG4gICAgICAodW5pdC5DYXRlZ29yaWVzLmluY2x1ZGVzKFwiRU5FUkdZUFJPRFVDVElPTlwiKSB8fFxuICAgICAgICB1bml0LkNhdGVnb3JpZXMuaW5jbHVkZXMoXCJNQVNTUFJPRFVDVElPTlwiKSkgJiZcbiAgICAgIHVuaXQuQ2F0ZWdvcmllcy5pbmNsdWRlcyhcIlNUUlVDVFVSRVwiKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZhY3RvcnlfZmlsdGVyKGZhY3Rpb246IEZhY3Rpb24pOiAodW5pdDogVW5pdCkgPT4gYm9vbGVhbiB7XG4gIHJldHVybiAodW5pdCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB1bml0LklzRmFjdG9yeSAmJlxuICAgICAgdW5pdC5GYWN0aW9uID09PSBmYWN0aW9uICYmXG4gICAgICAhdW5pdC5EZXNjcmlwdGlvbi5pbmNsdWRlcyhcIkhRXCIpXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyKGE6IFVuaXQsIGI6IFVuaXQpIHtcbiAgaWYgKGEuRGVzY3JpcHRpb24gPCBiLkRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhLkRlc2NyaXB0aW9uID4gYi5EZXNjcmlwdGlvbikge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGlmIChhLlRlY2hMZXZlbCA8IGIuVGVjaExldmVsKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhLlRlY2hMZXZlbCA+IGIuVGVjaExldmVsKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIEJ1aWxkaW5nc1JlZHVjZXIoXG4gIGJ1aWxkaW5nczogeyBbaW5kZXg6IHN0cmluZ106IEJ1aWxkaW5nRGF0YVtdIH0sXG4gIGFjdGlvbjogQWN0aW9uXG4pIHtcbiAgY29uc29sZS5sb2coXCJSRURVQ0VSXCIsIGJ1aWxkaW5ncywgYWN0aW9uKTtcbiAgbGV0IGZhY3Rpb24gPSBhY3Rpb24uZmFjdGlvbjtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQWN0aW9uVHlwZS5TRVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5idWlsZGluZ3MsXG4gICAgICAgIFtmYWN0aW9uXTogT2JqZWN0LmFzc2lnbihbXSwgYnVpbGRpbmdzW2ZhY3Rpb25dLCB7XG4gICAgICAgICAgW2FjdGlvbi5pbmRleF06IGFjdGlvbi5idWlsZGluZyxcbiAgICAgICAgfSksXG4gICAgICB9O1xuICAgIGNhc2UgQWN0aW9uVHlwZS5BREQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5idWlsZGluZ3MsXG4gICAgICAgIFtmYWN0aW9uXTogWy4uLmJ1aWxkaW5nc1tmYWN0aW9uXSwgYWN0aW9uLmJ1aWxkaW5nXSxcbiAgICAgIH07XG4gICAgY2FzZSBBY3Rpb25UeXBlLlVQREFURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmJ1aWxkaW5ncyxcbiAgICAgICAgW2ZhY3Rpb25dOiBPYmplY3QuYXNzaWduKFtdLCBidWlsZGluZ3NbZmFjdGlvbl0sIHtcbiAgICAgICAgICBbYWN0aW9uLmluZGV4XTogYWN0aW9uLnVwZGF0ZShidWlsZGluZ3NbZmFjdGlvbl1bYWN0aW9uLmluZGV4XSksXG4gICAgICAgIH0pLFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFjdGlvbiB0eXBlIGZvciBidWlsZGluZ3MgcmVkdWNlclwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZV9idWlsZGluZ19tdXRhdG9ycyhcbiAgZGlzcGF0Y2hlcjogKGE6IEFjdGlvbikgPT4gdm9pZCxcbiAgZmFjdGlvbjogRmFjdGlvbixcbiAgZGJcbikge1xuICByZXR1cm4ge1xuICAgIFNldDogKGluZGV4LCBidWlsZGluZykgPT5cbiAgICAgIGRpc3BhdGNoZXIoe1xuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlNFVCxcbiAgICAgICAgZmFjdGlvbjogZmFjdGlvbixcbiAgICAgICAgYnVpbGRpbmc6IGJ1aWxkaW5nLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICB9KSxcbiAgICBBZGQ6IChyYXdfYnVpbGRpbmcpID0+XG4gICAgICBkaXNwYXRjaGVyKHtcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5BREQsXG4gICAgICAgIGZhY3Rpb246IGZhY3Rpb24sXG4gICAgICAgIGJ1aWxkaW5nOiBuZXcgQnVpbGRpbmdEYXRhKHJhd19idWlsZGluZywgZGIpLFxuICAgICAgfSksXG4gICAgVXBkYXRlOiAoaW5kZXgsIHVwZGF0ZSkgPT5cbiAgICAgIGRpc3BhdGNoZXIoe1xuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlVQREFURSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBmYWN0aW9uOiBmYWN0aW9uLFxuICAgICAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICAgIH0pLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzOiB7IGRiOiB7IGxpc3Q6IFVuaXRbXSB9IH0pIHtcbiAgY29uc3QgW2dlbmVyYXRvcnMsIGdlbmVyYXRvckRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoQnVpbGRpbmdzUmVkdWNlciwge1xuICAgIFNFUkFQSElNOiBbXSxcbiAgICBDWUJSQU46IFtdLFxuICAgIFVFRjogW10sXG4gICAgQUVPTjogW10sXG4gIH0pO1xuICBjb25zdCBbY29uc3RydWN0b3JzLCBmYWN0b3J5RGlzcGF0Y2hdID0gdXNlUmVkdWNlcihCdWlsZGluZ3NSZWR1Y2VyLCB7XG4gICAgU0VSQVBISU06IFtdLFxuICAgIENZQlJBTjogW10sXG4gICAgVUVGOiBbXSxcbiAgICBBRU9OOiBbXSxcbiAgfSk7XG4gIGNvbnN0IFtmYWN0aW9uLCBTZXRGYWN0aW9uXTogW0ZhY3Rpb24sIGFueV0gPSB1c2VTdGF0ZShcIlNFUkFQSElNXCIpO1xuXG4gIGxldCBnZW5lcmF0b3JfYnVpbGRpbmdzID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgcHJvcHMuZGIubGlzdFxuICAgICAgICAuZmlsdGVyKGdlbmVyYXRvcl9maWx0ZXIoZmFjdGlvbikpXG4gICAgICAgIC5zb3J0KGFscGhhYmV0aWNfdGVjaGxldmVsX3NvcnRlciksXG4gICAgW2ZhY3Rpb25dXG4gICk7XG5cbiAgbGV0IGZhY3RvcmllcyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHByb3BzLmRiLmxpc3RcbiAgICAgICAgLmZpbHRlcihmYWN0b3J5X2ZpbHRlcihmYWN0aW9uKSlcbiAgICAgICAgLnNvcnQoYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyKSxcbiAgICBbZmFjdGlvbl1cbiAgKTtcbiAgbGV0IHtcbiAgICBTZXQ6IFNldEdlbkJ1aWxkaW5nLFxuICAgIEFkZDogQWRkR2VuQnVpbGRpbmcsXG4gICAgVXBkYXRlOiBVcGRhdGVHZW5CdWlsZGluZyxcbiAgfSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gZ2VuZXJhdGVfYnVpbGRpbmdfbXV0YXRvcnMoZ2VuZXJhdG9yRGlzcGF0Y2gsIGZhY3Rpb24sIHByb3BzLmRiKSxcbiAgICBbZmFjdGlvbl1cbiAgKTtcblxuICBsZXQge1xuICAgIFNldDogU2V0RmFjQnVpbGRpbmcsXG4gICAgQWRkOiBBZGRGYWNCdWlsZGluZyxcbiAgICBVcGRhdGU6IFVwZGF0ZUZhY0J1aWxkaW5nLFxuICB9ID0gdXNlTWVtbyhcbiAgICAoKSA9PiBnZW5lcmF0ZV9idWlsZGluZ19tdXRhdG9ycyhmYWN0b3J5RGlzcGF0Y2gsIGZhY3Rpb24sIHByb3BzLmRiKSxcbiAgICBbZmFjdGlvbl1cbiAgKTtcbiAgbGV0IGZhY3Rpb25zID0gW1wiU0VSQVBISU1cIiwgXCJDWUJSQU5cIiwgXCJVRUZcIiwgXCJBRU9OXCJdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlX2hlYWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYWN0aW9uX2J1dHRvbl9jb250YWluZXJ9PlxuICAgICAgICAgICAge2ZhY3Rpb25zLm1hcCgoZmFjKSA9PiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgICAgIHN0eWxlcy5mYWN0aW9uX2J1dHRvbixcbiAgICAgICAgICAgICAgICAgIGltU3R5bGUuaW1hZ2VfYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgaW1TdHlsZS5pbWFnZV9idXR0b25faG92ZXIsXG4gICAgICAgICAgICAgICAgXS5qb2luKFwiXCIpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFNldEZhY3Rpb24oZmFjKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtJY29uKGZhYyl9PjwvaW1nPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdGlvbl9oZWFkZXJfZGl2fT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5mYWN0aW9uX2hlYWRlcn0+e2ZhY3Rpb259PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzX2Rpdn0+VG90YWwgU3RhdHM8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc19jb250YWluZXJ9PlxuICAgICAgICAgIDxCdWlsZGluZ0NhdGVnb3J5XG4gICAgICAgICAgICBrZXk9XCJnZW5cIlxuICAgICAgICAgICAgY2F0ZWdvcnlfYnVpbGRpbmdzPXtnZW5lcmF0b3JfYnVpbGRpbmdzfVxuICAgICAgICAgICAgYnVpbGRpbmdzPXtnZW5lcmF0b3JzW2ZhY3Rpb25dfVxuICAgICAgICAgICAgU2V0QnVpbGRpbmc9e1NldEdlbkJ1aWxkaW5nfVxuICAgICAgICAgICAgQWRkQnVpbGRpbmc9e0FkZEdlbkJ1aWxkaW5nfVxuICAgICAgICAgICAgVXBkYXRlQnVpbGRpbmc9e1VwZGF0ZUdlbkJ1aWxkaW5nfVxuICAgICAgICAgICAgZGI9e3Byb3BzLmRifVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52ZXJ0aWNhbF9kaXZpZGVyfT48L2Rpdj5cbiAgICAgICAgICA8QnVpbGRpbmdDYXRlZ29yeVxuICAgICAgICAgICAga2V5PVwiZmFjXCJcbiAgICAgICAgICAgIGNhdGVnb3J5X2J1aWxkaW5ncz17ZmFjdG9yaWVzfVxuICAgICAgICAgICAgYnVpbGRpbmdzPXtjb25zdHJ1Y3RvcnNbZmFjdGlvbl19XG4gICAgICAgICAgICBTZXRCdWlsZGluZz17U2V0RmFjQnVpbGRpbmd9XG4gICAgICAgICAgICBBZGRCdWlsZGluZz17QWRkRmFjQnVpbGRpbmd9XG4gICAgICAgICAgICBVcGRhdGVCdWlsZGluZz17VXBkYXRlRmFjQnVpbGRpbmd9XG4gICAgICAgICAgICBkYj17cHJvcHMuZGJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICB7LypcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXtcIiBcIn1cbiAgICAgICAgICA8aW1nIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=