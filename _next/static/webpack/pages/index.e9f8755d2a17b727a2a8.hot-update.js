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
      onMouseDown: function onMouseDown(e) {
        console.log("down", e.target);
      },
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
        opacity: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }
    }));
  })), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_header_div,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, faction)), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.stats_div,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }, "Total Stats")), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.categories_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
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
      lineNumber: 195,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.vertical_divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
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
      lineNumber: 205,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImdlbmVyYXRvcl9maWx0ZXIiLCJmYWN0aW9uIiwidW5pdCIsIkZhY3Rpb24iLCJDYXRlZ29yaWVzIiwiaW5jbHVkZXMiLCJmYWN0b3J5X2ZpbHRlciIsIklzRmFjdG9yeSIsIkRlc2NyaXB0aW9uIiwiYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyIiwiYSIsImIiLCJUZWNoTGV2ZWwiLCJCdWlsZGluZ3NSZWR1Y2VyIiwiYnVpbGRpbmdzIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJBY3Rpb25UeXBlIiwiU0VUIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5kZXgiLCJidWlsZGluZyIsIkFERCIsIlVQREFURSIsInVwZGF0ZSIsIkVycm9yIiwiZ2VuZXJhdGVfYnVpbGRpbmdfbXV0YXRvcnMiLCJkaXNwYXRjaGVyIiwiZGIiLCJTZXQiLCJBZGQiLCJyYXdfYnVpbGRpbmciLCJCdWlsZGluZ0RhdGEiLCJVcGRhdGUiLCJIb21lIiwicHJvcHMiLCJ1c2VSZWR1Y2VyIiwiU0VSQVBISU0iLCJDWUJSQU4iLCJVRUYiLCJBRU9OIiwiZ2VuZXJhdG9ycyIsImdlbmVyYXRvckRpc3BhdGNoIiwiY29uc3RydWN0b3JzIiwiZmFjdG9yeURpc3BhdGNoIiwidXNlU3RhdGUiLCJTZXRGYWN0aW9uIiwiZ2VuZXJhdG9yX2J1aWxkaW5ncyIsInVzZU1lbW8iLCJsaXN0IiwiZmlsdGVyIiwic29ydCIsImZhY3RvcmllcyIsIlNldEdlbkJ1aWxkaW5nIiwiQWRkR2VuQnVpbGRpbmciLCJVcGRhdGVHZW5CdWlsZGluZyIsIlNldEZhY0J1aWxkaW5nIiwiQWRkRmFjQnVpbGRpbmciLCJVcGRhdGVGYWNCdWlsZGluZyIsImZhY3Rpb25zIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInBhZ2VfaGVhZGVyIiwiZmFjdGlvbl9idXR0b25fY29udGFpbmVyIiwibWFwIiwiZmFjIiwiZmFjdGlvbl9idXR0b24iLCJpbVN0eWxlIiwiaW1hZ2VfYnV0dG9uIiwiaW1hZ2VfYnV0dG9uX2hvdmVyIiwiam9pbiIsImUiLCJ0YXJnZXQiLCJJY29uIiwib3BhY2l0eSIsImZhY3Rpb25faGVhZGVyX2RpdiIsImZhY3Rpb25faGVhZGVyIiwic3RhdHNfZGl2IiwiY2F0ZWdvcmllc19jb250YWluZXIiLCJ2ZXJ0aWNhbF9kaXZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLFNBQVNBLGdCQUFULENBQTBCQyxPQUExQixFQUFxRTtBQUNuRSxTQUFPLFVBQUNDLElBQUQsRUFBVTtBQUNmLFdBQ0VBLElBQUksQ0FBQ0MsT0FBTCxJQUFnQkYsT0FBaEIsS0FDQ0MsSUFBSSxDQUFDRSxVQUFMLENBQWdCQyxRQUFoQixDQUF5QixrQkFBekIsS0FDQ0gsSUFBSSxDQUFDRSxVQUFMLENBQWdCQyxRQUFoQixDQUF5QixnQkFBekIsQ0FGRixLQUdBSCxJQUFJLENBQUNFLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLFdBQXpCLENBSkY7QUFNRCxHQVBEO0FBUUQ7O0FBRUQsU0FBU0MsY0FBVCxDQUF3QkwsT0FBeEIsRUFBbUU7QUFDakUsU0FBTyxVQUFDQyxJQUFELEVBQVU7QUFDZixXQUNFQSxJQUFJLENBQUNLLFNBQUwsSUFDQUwsSUFBSSxDQUFDQyxPQUFMLEtBQWlCRixPQURqQixJQUVBLENBQUNDLElBQUksQ0FBQ00sV0FBTCxDQUFpQkgsUUFBakIsQ0FBMEIsSUFBMUIsQ0FISDtBQUtELEdBTkQ7QUFPRDs7QUFFRCxTQUFTSSwyQkFBVCxDQUFxQ0MsQ0FBckMsRUFBOENDLENBQTlDLEVBQXVEO0FBQ3JELE1BQUlELENBQUMsQ0FBQ0YsV0FBRixHQUFnQkcsQ0FBQyxDQUFDSCxXQUF0QixFQUFtQztBQUNqQyxXQUFPLENBQUMsQ0FBUjtBQUNEOztBQUNELE1BQUlFLENB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LENBSHZCO0FBSUUsZUFBVyxFQUFFdUQsY0FKZjtBQUtFLGVBQVcsRUFBRUMsY0FMZjtBQU1FLGtCQUFjLEVBQUVDLGlCQU5sQjtBQU9FLE1BQUUsRUFBRXBCLEtBQUssQ0FBQ1AsRUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFVRTtBQUFLLGFBQVMsRUFBRWdDLDhEQUFNLENBQUNvQixnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0UsTUFBQyxvRUFBRDtBQUNFLE9BQUcsRUFBQyxLQUROO0FBRUUsc0JBQWtCLEVBQUU1QixTQUZ0QjtBQUdFLGFBQVMsRUFBRVQsWUFBWSxDQUFDN0MsT0FBRCxDQUh6QjtBQUlFLGVBQVcsRUFBRTBELGNBSmY7QUFLRSxlQUFXLEVBQUVDLGNBTGY7QUFNRSxrQkFBYyxFQUFFQyxpQkFObEI7QUFPRSxNQUFFLEVBQUV2QixLQUFLLENBQUNQLEVBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBeEJGLENBTEYsQ0FERjtBQWtFRDs7R0FuSHVCTSxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU5Zjg3NTVkMmExN2I3MjdhMmE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgaW1TdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0ltYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZHVjZXIsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdWlsZGluZ0NhdGVnb3J5IGZyb20gXCIuLi9jb21wb25lbnRzL0J1aWxkaW5nQ2F0ZWdvcnlcIjtcbmltcG9ydCB7IEJ1aWxkaW5nRGF0YSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0J1aWxkaW5nXCI7XG5pbXBvcnQgeyBVbml0LCBBY3Rpb24sIEFjdGlvblR5cGUsIEZhY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNjcmlwdC9UeXBlc1wiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdXJsIH0gZnJvbSBcImluc3BlY3RvclwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgZGJfZGF0YSA9IHJlcXVpcmUoXCIuLi9wdWJsaWMvdW5pdF9kYl9lY28uanNvblwiKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYjogZGJfZGF0YSB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0b3JfZmlsdGVyKGZhY3Rpb246IEZhY3Rpb24pOiAodW5pdDogVW5pdCkgPT4gYm9vbGVhbiB7XG4gIHJldHVybiAodW5pdCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB1bml0LkZhY3Rpb24gPT0gZmFjdGlvbiAmJlxuICAgICAgKHVuaXQuQ2F0ZWdvcmllcy5pbmNsdWRlcyhcIkVORVJHWVBST0RVQ1RJT05cIikgfHxcbiAgICAgICAgdW5pdC5DYXRlZ29yaWVzLmluY2x1ZGVzKFwiTUFTU1BST0RVQ1RJT05cIikpICYmXG4gICAgICB1bml0LkNhdGVnb3JpZXMuaW5jbHVkZXMoXCJTVFJVQ1RVUkVcIilcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmYWN0b3J5X2ZpbHRlcihmYWN0aW9uOiBGYWN0aW9uKTogKHVuaXQ6IFVuaXQpID0+IGJvb2xlYW4ge1xuICByZXR1cm4gKHVuaXQpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdW5pdC5Jc0ZhY3RvcnkgJiZcbiAgICAgIHVuaXQuRmFjdGlvbiA9PT0gZmFjdGlvbiAmJlxuICAgICAgIXVuaXQuRGVzY3JpcHRpb24uaW5jbHVkZXMoXCJIUVwiKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGFscGhhYmV0aWNfdGVjaGxldmVsX3NvcnRlcihhOiBVbml0LCBiOiBVbml0KSB7XG4gIGlmIChhLkRlc2NyaXB0aW9uIDwgYi5EZXNjcmlwdGlvbikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYS5EZXNjcmlwdGlvbiA+IGIuRGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBpZiAoYS5UZWNoTGV2ZWwgPCBiLlRlY2hMZXZlbCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYS5UZWNoTGV2ZWwgPiBiLlRlY2hMZXZlbCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBCdWlsZGluZ3NSZWR1Y2VyKFxuICBidWlsZGluZ3M6IHsgW2luZGV4OiBzdHJpbmddOiBCdWlsZGluZ0RhdGFbXSB9LFxuICBhY3Rpb246IEFjdGlvblxuKSB7XG4gIGNvbnNvbGUubG9nKFwiUkVEVUNFUlwiLCBidWlsZGluZ3MsIGFjdGlvbik7XG4gIGxldCBmYWN0aW9uID0gYWN0aW9uLmZhY3Rpb247XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFjdGlvblR5cGUuU0VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYnVpbGRpbmdzLFxuICAgICAgICBbZmFjdGlvbl06IE9iamVjdC5hc3NpZ24oW10sIGJ1aWxkaW5nc1tmYWN0aW9uXSwge1xuICAgICAgICAgIFthY3Rpb24uaW5kZXhdOiBhY3Rpb24uYnVpbGRpbmcsXG4gICAgICAgIH0pLFxuICAgICAgfTtcbiAgICBjYXNlIEFjdGlvblR5cGUuQUREOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYnVpbGRpbmdzLFxuICAgICAgICBbZmFjdGlvbl06IFsuLi5idWlsZGluZ3NbZmFjdGlvbl0sIGFjdGlvbi5idWlsZGluZ10sXG4gICAgICB9O1xuICAgIGNhc2UgQWN0aW9uVHlwZS5VUERBVEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5idWlsZGluZ3MsXG4gICAgICAgIFtmYWN0aW9uXTogT2JqZWN0LmFzc2lnbihbXSwgYnVpbGRpbmdzW2ZhY3Rpb25dLCB7XG4gICAgICAgICAgW2FjdGlvbi5pbmRleF06IGFjdGlvbi51cGRhdGUoYnVpbGRpbmdzW2ZhY3Rpb25dW2FjdGlvbi5pbmRleF0pLFxuICAgICAgICB9KSxcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhY3Rpb24gdHlwZSBmb3IgYnVpbGRpbmdzIHJlZHVjZXJcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVfYnVpbGRpbmdfbXV0YXRvcnMoXG4gIGRpc3BhdGNoZXI6IChhOiBBY3Rpb24pID0+IHZvaWQsXG4gIGZhY3Rpb246IEZhY3Rpb24sXG4gIGRiXG4pIHtcbiAgcmV0dXJuIHtcbiAgICBTZXQ6IChpbmRleCwgYnVpbGRpbmcpID0+XG4gICAgICBkaXNwYXRjaGVyKHtcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5TRVQsXG4gICAgICAgIGZhY3Rpb246IGZhY3Rpb24sXG4gICAgICAgIGJ1aWxkaW5nOiBidWlsZGluZyxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgfSksXG4gICAgQWRkOiAocmF3X2J1aWxkaW5nKSA9PlxuICAgICAgZGlzcGF0Y2hlcih7XG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuQURELFxuICAgICAgICBmYWN0aW9uOiBmYWN0aW9uLFxuICAgICAgICBidWlsZGluZzogbmV3IEJ1aWxkaW5nRGF0YShyYXdfYnVpbGRpbmcsIGRiKSxcbiAgICAgIH0pLFxuICAgIFVwZGF0ZTogKGluZGV4LCB1cGRhdGUpID0+XG4gICAgICBkaXNwYXRjaGVyKHtcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5VUERBVEUsXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgZmFjdGlvbjogZmFjdGlvbixcbiAgICAgICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgICB9KSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wczogeyBkYjogeyBsaXN0OiBVbml0W10gfSB9KSB7XG4gIGNvbnN0IFtnZW5lcmF0b3JzLCBnZW5lcmF0b3JEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKEJ1aWxkaW5nc1JlZHVjZXIsIHtcbiAgICBTRVJBUEhJTTogW10sXG4gICAgQ1lCUkFOOiBbXSxcbiAgICBVRUY6IFtdLFxuICAgIEFFT046IFtdLFxuICB9KTtcbiAgY29uc3QgW2NvbnN0cnVjdG9ycywgZmFjdG9yeURpc3BhdGNoXSA9IHVzZVJlZHVjZXIoQnVpbGRpbmdzUmVkdWNlciwge1xuICAgIFNFUkFQSElNOiBbXSxcbiAgICBDWUJSQU46IFtdLFxuICAgIFVFRjogW10sXG4gICAgQUVPTjogW10sXG4gIH0pO1xuICBjb25zdCBbZmFjdGlvbiwgU2V0RmFjdGlvbl06IFtGYWN0aW9uLCBhbnldID0gdXNlU3RhdGUoXCJTRVJBUEhJTVwiKTtcblxuICBsZXQgZ2VuZXJhdG9yX2J1aWxkaW5ncyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHByb3BzLmRiLmxpc3RcbiAgICAgICAgLmZpbHRlcihnZW5lcmF0b3JfZmlsdGVyKGZhY3Rpb24pKVxuICAgICAgICAuc29ydChhbHBoYWJldGljX3RlY2hsZXZlbF9zb3J0ZXIpLFxuICAgIFtmYWN0aW9uXVxuICApO1xuXG4gIGxldCBmYWN0b3JpZXMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBwcm9wcy5kYi5saXN0XG4gICAgICAgIC5maWx0ZXIoZmFjdG9yeV9maWx0ZXIoZmFjdGlvbikpXG4gICAgICAgIC5zb3J0KGFscGhhYmV0aWNfdGVjaGxldmVsX3NvcnRlciksXG4gICAgW2ZhY3Rpb25dXG4gICk7XG4gIGxldCB7XG4gICAgU2V0OiBTZXRHZW5CdWlsZGluZyxcbiAgICBBZGQ6IEFkZEdlbkJ1aWxkaW5nLFxuICAgIFVwZGF0ZTogVXBkYXRlR2VuQnVpbGRpbmcsXG4gIH0gPSB1c2VNZW1vKFxuICAgICgpID0+IGdlbmVyYXRlX2J1aWxkaW5nX211dGF0b3JzKGdlbmVyYXRvckRpc3BhdGNoLCBmYWN0aW9uLCBwcm9wcy5kYiksXG4gICAgW2ZhY3Rpb25dXG4gICk7XG5cbiAgbGV0IHtcbiAgICBTZXQ6IFNldEZhY0J1aWxkaW5nLFxuICAgIEFkZDogQWRkRmFjQnVpbGRpbmcsXG4gICAgVXBkYXRlOiBVcGRhdGVGYWNCdWlsZGluZyxcbiAgfSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gZ2VuZXJhdGVfYnVpbGRpbmdfbXV0YXRvcnMoZmFjdG9yeURpc3BhdGNoLCBmYWN0aW9uLCBwcm9wcy5kYiksXG4gICAgW2ZhY3Rpb25dXG4gICk7XG4gIGxldCBmYWN0aW9ucyA9IFtcIlNFUkFQSElNXCIsIFwiQ1lCUkFOXCIsIFwiVUVGXCIsIFwiQUVPTlwiXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZV9oZWFkZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdGlvbl9idXR0b25fY29udGFpbmVyfT5cbiAgICAgICAgICAgIHtmYWN0aW9ucy5tYXAoKGZhYykgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgICAgICAgICBzdHlsZXMuZmFjdGlvbl9idXR0b24sXG4gICAgICAgICAgICAgICAgICBpbVN0eWxlLmltYWdlX2J1dHRvbixcbiAgICAgICAgICAgICAgICAgIGltU3R5bGUuaW1hZ2VfYnV0dG9uX2hvdmVyLFxuICAgICAgICAgICAgICAgIF0uam9pbihcIiBcIil9XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRvd25cIiwgZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gU2V0RmFjdGlvbihmYWMpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e0ljb24oZmFjKX0gc3R5bGU9e3sgb3BhY2l0eTogXCIxMDAlXCIgfX0+PC9pbWc+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYWN0aW9uX2hlYWRlcl9kaXZ9PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmZhY3Rpb25faGVhZGVyfT57ZmFjdGlvbn08L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfZGl2fT5Ub3RhbCBTdGF0czwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPEJ1aWxkaW5nQ2F0ZWdvcnlcbiAgICAgICAgICAgIGtleT1cImdlblwiXG4gICAgICAgICAgICBjYXRlZ29yeV9idWlsZGluZ3M9e2dlbmVyYXRvcl9idWlsZGluZ3N9XG4gICAgICAgICAgICBidWlsZGluZ3M9e2dlbmVyYXRvcnNbZmFjdGlvbl19XG4gICAgICAgICAgICBTZXRCdWlsZGluZz17U2V0R2VuQnVpbGRpbmd9XG4gICAgICAgICAgICBBZGRCdWlsZGluZz17QWRkR2VuQnVpbGRpbmd9XG4gICAgICAgICAgICBVcGRhdGVCdWlsZGluZz17VXBkYXRlR2VuQnVpbGRpbmd9XG4gICAgICAgICAgICBkYj17cHJvcHMuZGJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZlcnRpY2FsX2RpdmlkZXJ9PjwvZGl2PlxuICAgICAgICAgIDxCdWlsZGluZ0NhdGVnb3J5XG4gICAgICAgICAgICBrZXk9XCJmYWNcIlxuICAgICAgICAgICAgY2F0ZWdvcnlfYnVpbGRpbmdzPXtmYWN0b3JpZXN9XG4gICAgICAgICAgICBidWlsZGluZ3M9e2NvbnN0cnVjdG9yc1tmYWN0aW9uXX1cbiAgICAgICAgICAgIFNldEJ1aWxkaW5nPXtTZXRGYWNCdWlsZGluZ31cbiAgICAgICAgICAgIEFkZEJ1aWxkaW5nPXtBZGRGYWNCdWlsZGluZ31cbiAgICAgICAgICAgIFVwZGF0ZUJ1aWxkaW5nPXtVcGRhdGVGYWNCdWlsZGluZ31cbiAgICAgICAgICAgIGRiPXtwcm9wcy5kYn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIHsvKlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==