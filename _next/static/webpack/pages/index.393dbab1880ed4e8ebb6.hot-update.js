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
        console.log("down", e.currentTarget);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImdlbmVyYXRvcl9maWx0ZXIiLCJmYWN0aW9uIiwidW5pdCIsIkZhY3Rpb24iLCJDYXRlZ29yaWVzIiwiaW5jbHVkZXMiLCJmYWN0b3J5X2ZpbHRlciIsIklzRmFjdG9yeSIsIkRlc2NyaXB0aW9uIiwiYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyIiwiYSIsImIiLCJUZWNoTGV2ZWwiLCJCdWlsZGluZ3NSZWR1Y2VyIiwiYnVpbGRpbmdzIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJBY3Rpb25UeXBlIiwiU0VUIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5kZXgiLCJidWlsZGluZyIsIkFERCIsIlVQREFURSIsInVwZGF0ZSIsIkVycm9yIiwiZ2VuZXJhdGVfYnVpbGRpbmdfbXV0YXRvcnMiLCJkaXNwYXRjaGVyIiwiZGIiLCJTZXQiLCJBZGQiLCJyYXdfYnVpbGRpbmciLCJCdWlsZGluZ0RhdGEiLCJVcGRhdGUiLCJIb21lIiwicHJvcHMiLCJ1c2VSZWR1Y2VyIiwiU0VSQVBISU0iLCJDWUJSQU4iLCJVRUYiLCJBRU9OIiwiZ2VuZXJhdG9ycyIsImdlbmVyYXRvckRpc3BhdGNoIiwiY29uc3RydWN0b3JzIiwiZmFjdG9yeURpc3BhdGNoIiwidXNlU3RhdGUiLCJTZXRGYWN0aW9uIiwiZ2VuZXJhdG9yX2J1aWxkaW5ncyIsInVzZU1lbW8iLCJsaXN0IiwiZmlsdGVyIiwic29ydCIsImZhY3RvcmllcyIsIlNldEdlbkJ1aWxkaW5nIiwiQWRkR2VuQnVpbGRpbmciLCJVcGRhdGVHZW5CdWlsZGluZyIsIlNldEZhY0J1aWxkaW5nIiwiQWRkRmFjQnVpbGRpbmciLCJVcGRhdGVGYWNCdWlsZGluZyIsImZhY3Rpb25zIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInBhZ2VfaGVhZGVyIiwiZmFjdGlvbl9idXR0b25fY29udGFpbmVyIiwibWFwIiwiZmFjIiwiZmFjdGlvbl9idXR0b24iLCJpbVN0eWxlIiwiaW1hZ2VfYnV0dG9uIiwiaW1hZ2VfYnV0dG9uX2hvdmVyIiwiam9pbiIsImUiLCJjdXJyZW50VGFyZ2V0IiwiSWNvbiIsIm9wYWNpdHkiLCJmYWN0aW9uX2hlYWRlcl9kaXYiLCJmYWN0aW9uX2hlYWRlciIsInN0YXRzX2RpdiIsImNhdGVnb3JpZXNfY29udGFpbmVyIiwidmVydGljYWxfZGl2aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxTQUFTQSxnQkFBVCxDQUEwQkMsT0FBMUIsRUFBcUU7QUFDbkUsU0FBTyxVQUFDQyxJQUFELEVBQVU7QUFDZixXQUNFQSxJQUFJLENBQUNDLE9BQUwsSUFBZ0JGLE9BQWhCLEtBQ0NDLElBQUksQ0FBQ0UsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsa0JBQXpCLEtBQ0NILElBQUksQ0FBQ0UsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsZ0JBQXpCLENBRkYsS0FHQUgsSUFBSSxDQUFDRSxVQUFMLENBQWdCQyxRQUFoQixDQUF5QixXQUF6QixDQUpGO0FBTUQsR0FQRDtBQVFEOztBQUVELFNBQVNDLGNBQVQsQ0FBd0JMLE9BQXhCLEVBQW1FO0FBQ2pFLFNBQU8sVUFBQ0MsSUFBRCxFQUFVO0FBQ2YsV0FDRUEsSUFBSSxDQUFDSyxTQUFMLElBQ0FMLElBQUksQ0FBQ0MsT0FBTCxLQUFpQkYsT0FEakIsSUFFQSxDQUFDQyxJQUFJLENBQUNNLFdBQUwsQ0FBaUJILFFBQWpCLENBQTBCLElBQTFCLENBSEg7QUFLRCxHQU5EO0FBT0Q7O0FBRUQsU0FBU0ksMkJBQVQsQ0FBcUNDLENBQXJDLEVBQThDQyxDQUE5QyxFQUF1RDtBQUNyRCxNQUFJRCxDQUFDLENBQUNGLFdBQUYsR0FBZ0JHLENBQUMsQ0FBQ0gsV0FBdEIsRUFBbUM7QUFDakMsV0FBTyxDQUFDLENBQVI7QUFDRDs7QUFDRCxN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M0MsT0FBRCxDQUh2QjtBQUlFLGVBQVcsRUFBRXVELGNBSmY7QUFLRSxlQUFXLEVBQUVDLGNBTGY7QUFNRSxrQkFBYyxFQUFFQyxpQkFObEI7QUFPRSxNQUFFLEVBQUVwQixLQUFLLENBQUNQLEVBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBVUU7QUFBSyxhQUFTLEVBQUVnQyw4REFBTSxDQUFDb0IsZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFLE1BQUMsb0VBQUQ7QUFDRSxPQUFHLEVBQUMsS0FETjtBQUVFLHNCQUFrQixFQUFFNUIsU0FGdEI7QUFHRSxhQUFTLEVBQUVULFlBQVksQ0FBQzdDLE9BQUQsQ0FIekI7QUFJRSxlQUFXLEVBQUUwRCxjQUpmO0FBS0UsZUFBVyxFQUFFQyxjQUxmO0FBTUUsa0JBQWMsRUFBRUMsaUJBTmxCO0FBT0UsTUFBRSxFQUFFdkIsS0FBSyxDQUFDUCxFQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQXhCRixDQUxGLENBREY7QUFrRUQ7O0dBbkh1Qk0sSTs7TUFBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zOTNkYmFiMTg4MGVkNGU4ZWJiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IGltU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9JbWFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWR1Y2VyLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnVpbGRpbmdDYXRlZ29yeSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ0NhdGVnb3J5XCI7XG5pbXBvcnQgeyBCdWlsZGluZ0RhdGEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ1wiO1xuaW1wb3J0IHsgVW5pdCwgQWN0aW9uLCBBY3Rpb25UeXBlLCBGYWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzY3JpcHQvVHlwZXNcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db25zdGFudHNcIjtcbmltcG9ydCB7IHVybCB9IGZyb20gXCJpbnNwZWN0b3JcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IGRiX2RhdGEgPSByZXF1aXJlKFwiLi4vcHVibGljL3VuaXRfZGJfZWNvLmpzb25cIik7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZGI6IGRiX2RhdGEgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdG9yX2ZpbHRlcihmYWN0aW9uOiBGYWN0aW9uKTogKHVuaXQ6IFVuaXQpID0+IGJvb2xlYW4ge1xuICByZXR1cm4gKHVuaXQpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdW5pdC5GYWN0aW9uID09IGZhY3Rpb24gJiZcbiAgICAgICh1bml0LkNhdGVnb3JpZXMuaW5jbHVkZXMoXCJFTkVSR1lQUk9EVUNUSU9OXCIpIHx8XG4gICAgICAgIHVuaXQuQ2F0ZWdvcmllcy5pbmNsdWRlcyhcIk1BU1NQUk9EVUNUSU9OXCIpKSAmJlxuICAgICAgdW5pdC5DYXRlZ29yaWVzLmluY2x1ZGVzKFwiU1RSVUNUVVJFXCIpXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmFjdG9yeV9maWx0ZXIoZmFjdGlvbjogRmFjdGlvbik6ICh1bml0OiBVbml0KSA9PiBib29sZWFuIHtcbiAgcmV0dXJuICh1bml0KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHVuaXQuSXNGYWN0b3J5ICYmXG4gICAgICB1bml0LkZhY3Rpb24gPT09IGZhY3Rpb24gJiZcbiAgICAgICF1bml0LkRlc2NyaXB0aW9uLmluY2x1ZGVzKFwiSFFcIilcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhbHBoYWJldGljX3RlY2hsZXZlbF9zb3J0ZXIoYTogVW5pdCwgYjogVW5pdCkge1xuICBpZiAoYS5EZXNjcmlwdGlvbiA8IGIuRGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEuRGVzY3JpcHRpb24gPiBiLkRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKGEuVGVjaExldmVsIDwgYi5UZWNoTGV2ZWwpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEuVGVjaExldmVsID4gYi5UZWNoTGV2ZWwpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gQnVpbGRpbmdzUmVkdWNlcihcbiAgYnVpbGRpbmdzOiB7IFtpbmRleDogc3RyaW5nXTogQnVpbGRpbmdEYXRhW10gfSxcbiAgYWN0aW9uOiBBY3Rpb25cbikge1xuICBjb25zb2xlLmxvZyhcIlJFRFVDRVJcIiwgYnVpbGRpbmdzLCBhY3Rpb24pO1xuICBsZXQgZmFjdGlvbiA9IGFjdGlvbi5mYWN0aW9uO1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBY3Rpb25UeXBlLlNFVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmJ1aWxkaW5ncyxcbiAgICAgICAgW2ZhY3Rpb25dOiBPYmplY3QuYXNzaWduKFtdLCBidWlsZGluZ3NbZmFjdGlvbl0sIHtcbiAgICAgICAgICBbYWN0aW9uLmluZGV4XTogYWN0aW9uLmJ1aWxkaW5nLFxuICAgICAgICB9KSxcbiAgICAgIH07XG4gICAgY2FzZSBBY3Rpb25UeXBlLkFERDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmJ1aWxkaW5ncyxcbiAgICAgICAgW2ZhY3Rpb25dOiBbLi4uYnVpbGRpbmdzW2ZhY3Rpb25dLCBhY3Rpb24uYnVpbGRpbmddLFxuICAgICAgfTtcbiAgICBjYXNlIEFjdGlvblR5cGUuVVBEQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYnVpbGRpbmdzLFxuICAgICAgICBbZmFjdGlvbl06IE9iamVjdC5hc3NpZ24oW10sIGJ1aWxkaW5nc1tmYWN0aW9uXSwge1xuICAgICAgICAgIFthY3Rpb24uaW5kZXhdOiBhY3Rpb24udXBkYXRlKGJ1aWxkaW5nc1tmYWN0aW9uXVthY3Rpb24uaW5kZXhdKSxcbiAgICAgICAgfSksXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYWN0aW9uIHR5cGUgZm9yIGJ1aWxkaW5ncyByZWR1Y2VyXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlX2J1aWxkaW5nX211dGF0b3JzKFxuICBkaXNwYXRjaGVyOiAoYTogQWN0aW9uKSA9PiB2b2lkLFxuICBmYWN0aW9uOiBGYWN0aW9uLFxuICBkYlxuKSB7XG4gIHJldHVybiB7XG4gICAgU2V0OiAoaW5kZXgsIGJ1aWxkaW5nKSA9PlxuICAgICAgZGlzcGF0Y2hlcih7XG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuU0VULFxuICAgICAgICBmYWN0aW9uOiBmYWN0aW9uLFxuICAgICAgICBidWlsZGluZzogYnVpbGRpbmcsXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIH0pLFxuICAgIEFkZDogKHJhd19idWlsZGluZykgPT5cbiAgICAgIGRpc3BhdGNoZXIoe1xuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLkFERCxcbiAgICAgICAgZmFjdGlvbjogZmFjdGlvbixcbiAgICAgICAgYnVpbGRpbmc6IG5ldyBCdWlsZGluZ0RhdGEocmF3X2J1aWxkaW5nLCBkYiksXG4gICAgICB9KSxcbiAgICBVcGRhdGU6IChpbmRleCwgdXBkYXRlKSA9PlxuICAgICAgZGlzcGF0Y2hlcih7XG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuVVBEQVRFLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGZhY3Rpb246IGZhY3Rpb24sXG4gICAgICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgICAgfSksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHM6IHsgZGI6IHsgbGlzdDogVW5pdFtdIH0gfSkge1xuICBjb25zdCBbZ2VuZXJhdG9ycywgZ2VuZXJhdG9yRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihCdWlsZGluZ3NSZWR1Y2VyLCB7XG4gICAgU0VSQVBISU06IFtdLFxuICAgIENZQlJBTjogW10sXG4gICAgVUVGOiBbXSxcbiAgICBBRU9OOiBbXSxcbiAgfSk7XG4gIGNvbnN0IFtjb25zdHJ1Y3RvcnMsIGZhY3RvcnlEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKEJ1aWxkaW5nc1JlZHVjZXIsIHtcbiAgICBTRVJBUEhJTTogW10sXG4gICAgQ1lCUkFOOiBbXSxcbiAgICBVRUY6IFtdLFxuICAgIEFFT046IFtdLFxuICB9KTtcbiAgY29uc3QgW2ZhY3Rpb24sIFNldEZhY3Rpb25dOiBbRmFjdGlvbiwgYW55XSA9IHVzZVN0YXRlKFwiU0VSQVBISU1cIik7XG5cbiAgbGV0IGdlbmVyYXRvcl9idWlsZGluZ3MgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBwcm9wcy5kYi5saXN0XG4gICAgICAgIC5maWx0ZXIoZ2VuZXJhdG9yX2ZpbHRlcihmYWN0aW9uKSlcbiAgICAgICAgLnNvcnQoYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyKSxcbiAgICBbZmFjdGlvbl1cbiAgKTtcblxuICBsZXQgZmFjdG9yaWVzID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgcHJvcHMuZGIubGlzdFxuICAgICAgICAuZmlsdGVyKGZhY3RvcnlfZmlsdGVyKGZhY3Rpb24pKVxuICAgICAgICAuc29ydChhbHBoYWJldGljX3RlY2hsZXZlbF9zb3J0ZXIpLFxuICAgIFtmYWN0aW9uXVxuICApO1xuICBsZXQge1xuICAgIFNldDogU2V0R2VuQnVpbGRpbmcsXG4gICAgQWRkOiBBZGRHZW5CdWlsZGluZyxcbiAgICBVcGRhdGU6IFVwZGF0ZUdlbkJ1aWxkaW5nLFxuICB9ID0gdXNlTWVtbyhcbiAgICAoKSA9PiBnZW5lcmF0ZV9idWlsZGluZ19tdXRhdG9ycyhnZW5lcmF0b3JEaXNwYXRjaCwgZmFjdGlvbiwgcHJvcHMuZGIpLFxuICAgIFtmYWN0aW9uXVxuICApO1xuXG4gIGxldCB7XG4gICAgU2V0OiBTZXRGYWNCdWlsZGluZyxcbiAgICBBZGQ6IEFkZEZhY0J1aWxkaW5nLFxuICAgIFVwZGF0ZTogVXBkYXRlRmFjQnVpbGRpbmcsXG4gIH0gPSB1c2VNZW1vKFxuICAgICgpID0+IGdlbmVyYXRlX2J1aWxkaW5nX211dGF0b3JzKGZhY3RvcnlEaXNwYXRjaCwgZmFjdGlvbiwgcHJvcHMuZGIpLFxuICAgIFtmYWN0aW9uXVxuICApO1xuICBsZXQgZmFjdGlvbnMgPSBbXCJTRVJBUEhJTVwiLCBcIkNZQlJBTlwiLCBcIlVFRlwiLCBcIkFFT05cIl07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VfaGVhZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhY3Rpb25fYnV0dG9uX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICB7ZmFjdGlvbnMubWFwKChmYWMpID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgICAgICAgICAgc3R5bGVzLmZhY3Rpb25fYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgaW1TdHlsZS5pbWFnZV9idXR0b24sXG4gICAgICAgICAgICAgICAgICBpbVN0eWxlLmltYWdlX2J1dHRvbl9ob3ZlcixcbiAgICAgICAgICAgICAgICBdLmpvaW4oXCIgXCIpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb3duXCIsIGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBTZXRGYWN0aW9uKGZhYyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17SWNvbihmYWMpfSBzdHlsZT17eyBvcGFjaXR5OiBcIjEwMCVcIiB9fT48L2ltZz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhY3Rpb25faGVhZGVyX2Rpdn0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdGlvbl9oZWFkZXJ9PntmYWN0aW9ufTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19kaXZ9PlRvdGFsIFN0YXRzPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNfY29udGFpbmVyfT5cbiAgICAgICAgICA8QnVpbGRpbmdDYXRlZ29yeVxuICAgICAgICAgICAga2V5PVwiZ2VuXCJcbiAgICAgICAgICAgIGNhdGVnb3J5X2J1aWxkaW5ncz17Z2VuZXJhdG9yX2J1aWxkaW5nc31cbiAgICAgICAgICAgIGJ1aWxkaW5ncz17Z2VuZXJhdG9yc1tmYWN0aW9uXX1cbiAgICAgICAgICAgIFNldEJ1aWxkaW5nPXtTZXRHZW5CdWlsZGluZ31cbiAgICAgICAgICAgIEFkZEJ1aWxkaW5nPXtBZGRHZW5CdWlsZGluZ31cbiAgICAgICAgICAgIFVwZGF0ZUJ1aWxkaW5nPXtVcGRhdGVHZW5CdWlsZGluZ31cbiAgICAgICAgICAgIGRiPXtwcm9wcy5kYn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmVydGljYWxfZGl2aWRlcn0+PC9kaXY+XG4gICAgICAgICAgPEJ1aWxkaW5nQ2F0ZWdvcnlcbiAgICAgICAgICAgIGtleT1cImZhY1wiXG4gICAgICAgICAgICBjYXRlZ29yeV9idWlsZGluZ3M9e2ZhY3Rvcmllc31cbiAgICAgICAgICAgIGJ1aWxkaW5ncz17Y29uc3RydWN0b3JzW2ZhY3Rpb25dfVxuICAgICAgICAgICAgU2V0QnVpbGRpbmc9e1NldEZhY0J1aWxkaW5nfVxuICAgICAgICAgICAgQWRkQnVpbGRpbmc9e0FkZEZhY0J1aWxkaW5nfVxuICAgICAgICAgICAgVXBkYXRlQnVpbGRpbmc9e1VwZGF0ZUZhY0J1aWxkaW5nfVxuICAgICAgICAgICAgZGI9e3Byb3BzLmRifVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgey8qXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9