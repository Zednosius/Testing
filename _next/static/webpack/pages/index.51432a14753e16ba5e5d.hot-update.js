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
      lineNumber: 165,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, "Create Next App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.page_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_button_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, factions.map(function (fac) {
    return __jsx("button", {
      className: [_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_button, _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.image_button, _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.image_button_hover].join(" "),
      onClick: function onClick() {
        return SetFaction(fac);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: Object(_components_Constants__WEBPACK_IMPORTED_MODULE_9__["Icon"])(fac),
      style: {
        opacity: "80%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 17
      }
    }));
  })), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_header_div,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }, faction)), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.stats_div,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, "Total Stats")), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.categories_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
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
      lineNumber: 192,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.vertical_divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
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
      lineNumber: 202,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImdlbmVyYXRvcl9maWx0ZXIiLCJmYWN0aW9uIiwidW5pdCIsIkZhY3Rpb24iLCJDYXRlZ29yaWVzIiwiaW5jbHVkZXMiLCJmYWN0b3J5X2ZpbHRlciIsIklzRmFjdG9yeSIsIkRlc2NyaXB0aW9uIiwiYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyIiwiYSIsImIiLCJUZWNoTGV2ZWwiLCJCdWlsZGluZ3NSZWR1Y2VyIiwiYnVpbGRpbmdzIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJBY3Rpb25UeXBlIiwiU0VUIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5kZXgiLCJidWlsZGluZyIsIkFERCIsIlVQREFURSIsInVwZGF0ZSIsIkVycm9yIiwiZ2VuZXJhdGVfYnVpbGRpbmdfbXV0YXRvcnMiLCJkaXNwYXRjaGVyIiwiZGIiLCJTZXQiLCJBZGQiLCJyYXdfYnVpbGRpbmciLCJCdWlsZGluZ0RhdGEiLCJVcGRhdGUiLCJIb21lIiwicHJvcHMiLCJ1c2VSZWR1Y2VyIiwiU0VSQVBISU0iLCJDWUJSQU4iLCJVRUYiLCJBRU9OIiwiZ2VuZXJhdG9ycyIsImdlbmVyYXRvckRpc3BhdGNoIiwiY29uc3RydWN0b3JzIiwiZmFjdG9yeURpc3BhdGNoIiwidXNlU3RhdGUiLCJTZXRGYWN0aW9uIiwiZ2VuZXJhdG9yX2J1aWxkaW5ncyIsInVzZU1lbW8iLCJsaXN0IiwiZmlsdGVyIiwic29ydCIsImZhY3RvcmllcyIsIlNldEdlbkJ1aWxkaW5nIiwiQWRkR2VuQnVpbGRpbmciLCJVcGRhdGVHZW5CdWlsZGluZyIsIlNldEZhY0J1aWxkaW5nIiwiQWRkRmFjQnVpbGRpbmciLCJVcGRhdGVGYWNCdWlsZGluZyIsImZhY3Rpb25zIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInBhZ2VfaGVhZGVyIiwiZmFjdGlvbl9idXR0b25fY29udGFpbmVyIiwibWFwIiwiZmFjIiwiZmFjdGlvbl9idXR0b24iLCJpbVN0eWxlIiwiaW1hZ2VfYnV0dG9uIiwiaW1hZ2VfYnV0dG9uX2hvdmVyIiwiam9pbiIsIkljb24iLCJvcGFjaXR5IiwiZmFjdGlvbl9oZWFkZXJfZGl2IiwiZmFjdGlvbl9oZWFkZXIiLCJzdGF0c19kaXYiLCJjYXRlZ29yaWVzX2NvbnRhaW5lciIsInZlcnRpY2FsX2RpdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsU0FBU0EsZ0JBQVQsQ0FBMEJDLE9BQTFCLEVBQXFFO0FBQ25FLFNBQU8sVUFBQ0MsSUFBRCxFQUFVO0FBQ2YsV0FDRUEsSUFBSSxDQUFDQyxPQUFMLElBQWdCRixPQUFoQixLQUNDQyxJQUFJLENBQUNFLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLGtCQUF6QixLQUNDSCxJQUFJLENBQUNFLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLGdCQUF6QixDQUZGLEtBR0FILElBQUksQ0FBQ0UsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsV0FBekIsQ0FKRjtBQU1ELEdBUEQ7QUFRRDs7QUFFRCxTQUFTQyxjQUFULENBQXdCTCxPQUF4QixFQUFtRTtBQUNqRSxTQUFPLFVBQUNDLElBQUQsRUFBVTtBQUNmLFdBQ0VBLElBQUksQ0FBQ0ssU0FBTCxJQUNBTCxJQUFJLENBQUNDLE9BQUwsS0FBaUJGLE9BRGpCLElBRUEsQ0FBQ0MsSUFBSSxDQUFDTSxXQUFMLENBQWlCSCxRQUFqQixDQUEwQixJQUExQixDQUhIO0FBS0QsR0FORDtBQU9EOztBQUVELFNBQVNJLDJCQUFULENBQXFDQyxDQUFyQyxFQUE4Q0MsQ0FBOUMsRUFBdUQ7QUFDckQsTUFBSUQsQ0FBQyxDQUFDRixXQUFGLEdBQWdCRyxDQUFDLENBQUNILFdBQXRCLEVBQW1DO0FBQ2pDLFdBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBQ0QsTUFBSUUsQ0FBQyxDQUFDRixXQUFG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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFVRTtBQUFLLGFBQVMsRUFBRWdDLDhEQUFNLENBQUNrQixnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0UsTUFBQyxvRUFBRDtBQUNFLE9BQUcsRUFBQyxLQUROO0FBRUUsc0JBQWtCLEVBQUUxQixTQUZ0QjtBQUdFLGFBQVMsRUFBRVQsWUFBWSxDQUFDN0MsT0FBRCxDQUh6QjtBQUlFLGVBQVcsRUFBRTBELGNBSmY7QUFLRSxlQUFXLEVBQUVDLGNBTGY7QUFNRSxrQkFBYyxFQUFFQyxpQkFObEI7QUFPRSxNQUFFLEVBQUV2QixLQUFLLENBQUNQLEVBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBckJGLENBTEYsQ0FERjtBQStERDs7R0FoSHVCTSxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUxNDMyYTE0NzUzZTE2YmE1ZTVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgaW1TdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0ltYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZHVjZXIsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdWlsZGluZ0NhdGVnb3J5IGZyb20gXCIuLi9jb21wb25lbnRzL0J1aWxkaW5nQ2F0ZWdvcnlcIjtcbmltcG9ydCB7IEJ1aWxkaW5nRGF0YSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0J1aWxkaW5nXCI7XG5pbXBvcnQgeyBVbml0LCBBY3Rpb24sIEFjdGlvblR5cGUsIEZhY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNjcmlwdC9UeXBlc1wiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdXJsIH0gZnJvbSBcImluc3BlY3RvclwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgZGJfZGF0YSA9IHJlcXVpcmUoXCIuLi9wdWJsaWMvdW5pdF9kYl9lY28uanNvblwiKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYjogZGJfZGF0YSB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0b3JfZmlsdGVyKGZhY3Rpb246IEZhY3Rpb24pOiAodW5pdDogVW5pdCkgPT4gYm9vbGVhbiB7XG4gIHJldHVybiAodW5pdCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB1bml0LkZhY3Rpb24gPT0gZmFjdGlvbiAmJlxuICAgICAgKHVuaXQuQ2F0ZWdvcmllcy5pbmNsdWRlcyhcIkVORVJHWVBST0RVQ1RJT05cIikgfHxcbiAgICAgICAgdW5pdC5DYXRlZ29yaWVzLmluY2x1ZGVzKFwiTUFTU1BST0RVQ1RJT05cIikpICYmXG4gICAgICB1bml0LkNhdGVnb3JpZXMuaW5jbHVkZXMoXCJTVFJVQ1RVUkVcIilcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmYWN0b3J5X2ZpbHRlcihmYWN0aW9uOiBGYWN0aW9uKTogKHVuaXQ6IFVuaXQpID0+IGJvb2xlYW4ge1xuICByZXR1cm4gKHVuaXQpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdW5pdC5Jc0ZhY3RvcnkgJiZcbiAgICAgIHVuaXQuRmFjdGlvbiA9PT0gZmFjdGlvbiAmJlxuICAgICAgIXVuaXQuRGVzY3JpcHRpb24uaW5jbHVkZXMoXCJIUVwiKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGFscGhhYmV0aWNfdGVjaGxldmVsX3NvcnRlcihhOiBVbml0LCBiOiBVbml0KSB7XG4gIGlmIChhLkRlc2NyaXB0aW9uIDwgYi5EZXNjcmlwdGlvbikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYS5EZXNjcmlwdGlvbiA+IGIuRGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBpZiAoYS5UZWNoTGV2ZWwgPCBiLlRlY2hMZXZlbCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYS5UZWNoTGV2ZWwgPiBiLlRlY2hMZXZlbCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBCdWlsZGluZ3NSZWR1Y2VyKFxuICBidWlsZGluZ3M6IHsgW2luZGV4OiBzdHJpbmddOiBCdWlsZGluZ0RhdGFbXSB9LFxuICBhY3Rpb246IEFjdGlvblxuKSB7XG4gIGNvbnNvbGUubG9nKFwiUkVEVUNFUlwiLCBidWlsZGluZ3MsIGFjdGlvbik7XG4gIGxldCBmYWN0aW9uID0gYWN0aW9uLmZhY3Rpb247XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFjdGlvblR5cGUuU0VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYnVpbGRpbmdzLFxuICAgICAgICBbZmFjdGlvbl06IE9iamVjdC5hc3NpZ24oW10sIGJ1aWxkaW5nc1tmYWN0aW9uXSwge1xuICAgICAgICAgIFthY3Rpb24uaW5kZXhdOiBhY3Rpb24uYnVpbGRpbmcsXG4gICAgICAgIH0pLFxuICAgICAgfTtcbiAgICBjYXNlIEFjdGlvblR5cGUuQUREOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYnVpbGRpbmdzLFxuICAgICAgICBbZmFjdGlvbl06IFsuLi5idWlsZGluZ3NbZmFjdGlvbl0sIGFjdGlvbi5idWlsZGluZ10sXG4gICAgICB9O1xuICAgIGNhc2UgQWN0aW9uVHlwZS5VUERBVEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5idWlsZGluZ3MsXG4gICAgICAgIFtmYWN0aW9uXTogT2JqZWN0LmFzc2lnbihbXSwgYnVpbGRpbmdzW2ZhY3Rpb25dLCB7XG4gICAgICAgICAgW2FjdGlvbi5pbmRleF06IGFjdGlvbi51cGRhdGUoYnVpbGRpbmdzW2ZhY3Rpb25dW2FjdGlvbi5pbmRleF0pLFxuICAgICAgICB9KSxcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhY3Rpb24gdHlwZSBmb3IgYnVpbGRpbmdzIHJlZHVjZXJcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVfYnVpbGRpbmdfbXV0YXRvcnMoXG4gIGRpc3BhdGNoZXI6IChhOiBBY3Rpb24pID0+IHZvaWQsXG4gIGZhY3Rpb246IEZhY3Rpb24sXG4gIGRiXG4pIHtcbiAgcmV0dXJuIHtcbiAgICBTZXQ6IChpbmRleCwgYnVpbGRpbmcpID0+XG4gICAgICBkaXNwYXRjaGVyKHtcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5TRVQsXG4gICAgICAgIGZhY3Rpb246IGZhY3Rpb24sXG4gICAgICAgIGJ1aWxkaW5nOiBidWlsZGluZyxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgfSksXG4gICAgQWRkOiAocmF3X2J1aWxkaW5nKSA9PlxuICAgICAgZGlzcGF0Y2hlcih7XG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuQURELFxuICAgICAgICBmYWN0aW9uOiBmYWN0aW9uLFxuICAgICAgICBidWlsZGluZzogbmV3IEJ1aWxkaW5nRGF0YShyYXdfYnVpbGRpbmcsIGRiKSxcbiAgICAgIH0pLFxuICAgIFVwZGF0ZTogKGluZGV4LCB1cGRhdGUpID0+XG4gICAgICBkaXNwYXRjaGVyKHtcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5VUERBVEUsXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgZmFjdGlvbjogZmFjdGlvbixcbiAgICAgICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgICB9KSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wczogeyBkYjogeyBsaXN0OiBVbml0W10gfSB9KSB7XG4gIGNvbnN0IFtnZW5lcmF0b3JzLCBnZW5lcmF0b3JEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKEJ1aWxkaW5nc1JlZHVjZXIsIHtcbiAgICBTRVJBUEhJTTogW10sXG4gICAgQ1lCUkFOOiBbXSxcbiAgICBVRUY6IFtdLFxuICAgIEFFT046IFtdLFxuICB9KTtcbiAgY29uc3QgW2NvbnN0cnVjdG9ycywgZmFjdG9yeURpc3BhdGNoXSA9IHVzZVJlZHVjZXIoQnVpbGRpbmdzUmVkdWNlciwge1xuICAgIFNFUkFQSElNOiBbXSxcbiAgICBDWUJSQU46IFtdLFxuICAgIFVFRjogW10sXG4gICAgQUVPTjogW10sXG4gIH0pO1xuICBjb25zdCBbZmFjdGlvbiwgU2V0RmFjdGlvbl06IFtGYWN0aW9uLCBhbnldID0gdXNlU3RhdGUoXCJTRVJBUEhJTVwiKTtcblxuICBsZXQgZ2VuZXJhdG9yX2J1aWxkaW5ncyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHByb3BzLmRiLmxpc3RcbiAgICAgICAgLmZpbHRlcihnZW5lcmF0b3JfZmlsdGVyKGZhY3Rpb24pKVxuICAgICAgICAuc29ydChhbHBoYWJldGljX3RlY2hsZXZlbF9zb3J0ZXIpLFxuICAgIFtmYWN0aW9uXVxuICApO1xuXG4gIGxldCBmYWN0b3JpZXMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBwcm9wcy5kYi5saXN0XG4gICAgICAgIC5maWx0ZXIoZmFjdG9yeV9maWx0ZXIoZmFjdGlvbikpXG4gICAgICAgIC5zb3J0KGFscGhhYmV0aWNfdGVjaGxldmVsX3NvcnRlciksXG4gICAgW2ZhY3Rpb25dXG4gICk7XG4gIGxldCB7XG4gICAgU2V0OiBTZXRHZW5CdWlsZGluZyxcbiAgICBBZGQ6IEFkZEdlbkJ1aWxkaW5nLFxuICAgIFVwZGF0ZTogVXBkYXRlR2VuQnVpbGRpbmcsXG4gIH0gPSB1c2VNZW1vKFxuICAgICgpID0+IGdlbmVyYXRlX2J1aWxkaW5nX211dGF0b3JzKGdlbmVyYXRvckRpc3BhdGNoLCBmYWN0aW9uLCBwcm9wcy5kYiksXG4gICAgW2ZhY3Rpb25dXG4gICk7XG5cbiAgbGV0IHtcbiAgICBTZXQ6IFNldEZhY0J1aWxkaW5nLFxuICAgIEFkZDogQWRkRmFjQnVpbGRpbmcsXG4gICAgVXBkYXRlOiBVcGRhdGVGYWNCdWlsZGluZyxcbiAgfSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gZ2VuZXJhdGVfYnVpbGRpbmdfbXV0YXRvcnMoZmFjdG9yeURpc3BhdGNoLCBmYWN0aW9uLCBwcm9wcy5kYiksXG4gICAgW2ZhY3Rpb25dXG4gICk7XG4gIGxldCBmYWN0aW9ucyA9IFtcIlNFUkFQSElNXCIsIFwiQ1lCUkFOXCIsIFwiVUVGXCIsIFwiQUVPTlwiXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZV9oZWFkZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdGlvbl9idXR0b25fY29udGFpbmVyfT5cbiAgICAgICAgICAgIHtmYWN0aW9ucy5tYXAoKGZhYykgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgICAgICAgICBzdHlsZXMuZmFjdGlvbl9idXR0b24sXG4gICAgICAgICAgICAgICAgICBpbVN0eWxlLmltYWdlX2J1dHRvbixcbiAgICAgICAgICAgICAgICAgIGltU3R5bGUuaW1hZ2VfYnV0dG9uX2hvdmVyLFxuICAgICAgICAgICAgICAgIF0uam9pbihcIiBcIil9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gU2V0RmFjdGlvbihmYWMpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e0ljb24oZmFjKX0gc3R5bGU9e3sgb3BhY2l0eTogXCI4MCVcIiB9fT48L2ltZz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhY3Rpb25faGVhZGVyX2Rpdn0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdGlvbl9oZWFkZXJ9PntmYWN0aW9ufTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19kaXZ9PlRvdGFsIFN0YXRzPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNfY29udGFpbmVyfT5cbiAgICAgICAgICA8QnVpbGRpbmdDYXRlZ29yeVxuICAgICAgICAgICAga2V5PVwiZ2VuXCJcbiAgICAgICAgICAgIGNhdGVnb3J5X2J1aWxkaW5ncz17Z2VuZXJhdG9yX2J1aWxkaW5nc31cbiAgICAgICAgICAgIGJ1aWxkaW5ncz17Z2VuZXJhdG9yc1tmYWN0aW9uXX1cbiAgICAgICAgICAgIFNldEJ1aWxkaW5nPXtTZXRHZW5CdWlsZGluZ31cbiAgICAgICAgICAgIEFkZEJ1aWxkaW5nPXtBZGRHZW5CdWlsZGluZ31cbiAgICAgICAgICAgIFVwZGF0ZUJ1aWxkaW5nPXtVcGRhdGVHZW5CdWlsZGluZ31cbiAgICAgICAgICAgIGRiPXtwcm9wcy5kYn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmVydGljYWxfZGl2aWRlcn0+PC9kaXY+XG4gICAgICAgICAgPEJ1aWxkaW5nQ2F0ZWdvcnlcbiAgICAgICAgICAgIGtleT1cImZhY1wiXG4gICAgICAgICAgICBjYXRlZ29yeV9idWlsZGluZ3M9e2ZhY3Rvcmllc31cbiAgICAgICAgICAgIGJ1aWxkaW5ncz17Y29uc3RydWN0b3JzW2ZhY3Rpb25dfVxuICAgICAgICAgICAgU2V0QnVpbGRpbmc9e1NldEZhY0J1aWxkaW5nfVxuICAgICAgICAgICAgQWRkQnVpbGRpbmc9e0FkZEZhY0J1aWxkaW5nfVxuICAgICAgICAgICAgVXBkYXRlQnVpbGRpbmc9e1VwZGF0ZUZhY0J1aWxkaW5nfVxuICAgICAgICAgICAgZGI9e3Byb3BzLmRifVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgey8qXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9