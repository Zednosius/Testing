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
      className: [_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_button].join(" "),
      onClick: function onClick() {
        return SetFaction(fac);
      },
      style: {
        background: "lightgrey url(".concat(Object(_components_Constants__WEBPACK_IMPORTED_MODULE_8__["Icon"])(fac), " no-repeat center")
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 15
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImdlbmVyYXRvcl9maWx0ZXIiLCJmYWN0aW9uIiwidW5pdCIsIkZhY3Rpb24iLCJDYXRlZ29yaWVzIiwiaW5jbHVkZXMiLCJmYWN0b3J5X2ZpbHRlciIsIklzRmFjdG9yeSIsIkRlc2NyaXB0aW9uIiwiYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyIiwiYSIsImIiLCJUZWNoTGV2ZWwiLCJCdWlsZGluZ3NSZWR1Y2VyIiwiYnVpbGRpbmdzIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJBY3Rpb25UeXBlIiwiU0VUIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5kZXgiLCJidWlsZGluZyIsIkFERCIsIlVQREFURSIsInVwZGF0ZSIsIkVycm9yIiwiZ2VuZXJhdGVfYnVpbGRpbmdfbXV0YXRvcnMiLCJkaXNwYXRjaGVyIiwiZGIiLCJTZXQiLCJBZGQiLCJyYXdfYnVpbGRpbmciLCJCdWlsZGluZ0RhdGEiLCJVcGRhdGUiLCJIb21lIiwicHJvcHMiLCJ1c2VSZWR1Y2VyIiwiU0VSQVBISU0iLCJDWUJSQU4iLCJVRUYiLCJBRU9OIiwiZ2VuZXJhdG9ycyIsImdlbmVyYXRvckRpc3BhdGNoIiwiY29uc3RydWN0b3JzIiwiZmFjdG9yeURpc3BhdGNoIiwidXNlU3RhdGUiLCJTZXRGYWN0aW9uIiwiZ2VuZXJhdG9yX2J1aWxkaW5ncyIsInVzZU1lbW8iLCJsaXN0IiwiZmlsdGVyIiwic29ydCIsImZhY3RvcmllcyIsIlNldEdlbkJ1aWxkaW5nIiwiQWRkR2VuQnVpbGRpbmciLCJVcGRhdGVHZW5CdWlsZGluZyIsIlNldEZhY0J1aWxkaW5nIiwiQWRkRmFjQnVpbGRpbmciLCJVcGRhdGVGYWNCdWlsZGluZyIsImZhY3Rpb25zIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInBhZ2VfaGVhZGVyIiwiZmFjdGlvbl9idXR0b25fY29udGFpbmVyIiwibWFwIiwiZmFjIiwiZmFjdGlvbl9idXR0b24iLCJqb2luIiwiYmFja2dyb3VuZCIsIkljb24iLCJmYWN0aW9uX2hlYWRlcl9kaXYiLCJmYWN0aW9uX2hlYWRlciIsInN0YXRzX2RpdiIsImNhdGVnb3JpZXNfY29udGFpbmVyIiwidmVydGljYWxfZGl2aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLFNBQVNBLGdCQUFULENBQTBCQyxPQUExQixFQUFxRTtBQUNuRSxTQUFPLFVBQUNDLElBQUQsRUFBVTtBQUNmLFdBQ0VBLElBQUksQ0FBQ0MsT0FBTCxJQUFnQkYsT0FBaEIsS0FDQ0MsSUFBSSxDQUFDRSxVQUFMLENBQWdCQyxRQUFoQixDQUF5QixrQkFBekIsS0FDQ0gsSUFBSSxDQUFDRSxVQUFMLENBQWdCQyxRQUFoQixDQUF5QixnQkFBekIsQ0FGRixLQUdBSCxJQUFJLENBQUNFLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLFdBQXpCLENBSkY7QUFNRCxHQVBEO0FBUUQ7O0FBRUQsU0FBU0MsY0FBVCxDQUF3QkwsT0FBeEIsRUFBbUU7QUFDakUsU0FBTyxVQUFDQyxJQUFELEVBQVU7QUFDZixXQUNFQSxJQUFJLENBQUNLLFNBQUwsSUFDQUwsSUFBSSxDQUFDQyxPQUFMLEtBQWlCRixPQURqQixJQUVBLENBQUNDLElBQUksQ0FBQ00sV0FBTCxDQUFpQkgsUUFBakIsQ0FBMEIsSUFBMUIsQ0FISDtBQUtELEdBTkQ7QUFPRDs7QUFFRCxTQUFTSSwyQkFBVCxDQUFxQ0MsQ0FBckMsRUFBOENDLENBQTlDLEVBQXVEO0FBQ3JELE1BQUlELENBQUMsQ0FBQ0YsV0FBRixHQUFnQkcsQ0FBQyxDQUFDSCxXQUF0QixFQUFtQztBQUNqQyxXQUFPLENBQUMsQ0FBUjtBQUNEOztBQUNELE1BQUlFLENBQUMsQ0FBQ0YsV0FBRixHQUFnQkcsQ0FBQyxDQUFDSCxXQUF0QixFQUFtQztBQUNqQyxXQUFPLENBQVA7QUFD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QixFQUFFdkIsU0FGdEI7QUFHRSxhQUFTLEVBQUVULFlBQVksQ0FBQzdDLE9BQUQsQ0FIekI7QUFJRSxlQUFXLEVBQUUwRCxjQUpmO0FBS0UsZUFBVyxFQUFFQyxjQUxmO0FBTUUsa0JBQWMsRUFBRUMsaUJBTmxCO0FBT0UsTUFBRSxFQUFFdkIsS0FBSyxDQUFDUCxFQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQXBCRixDQUxGLENBREY7QUE4REQ7O0dBL0d1Qk0sSTs7TUFBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yOGQ2MTFhMTEwYjVmZjAzMTllNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IGltU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9JbWFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWR1Y2VyLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnVpbGRpbmdDYXRlZ29yeSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ0NhdGVnb3J5XCI7XG5pbXBvcnQgeyBCdWlsZGluZ0RhdGEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZGluZ1wiO1xuaW1wb3J0IHsgVW5pdCwgQWN0aW9uLCBBY3Rpb25UeXBlLCBGYWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzY3JpcHQvVHlwZXNcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db25zdGFudHNcIjtcbmltcG9ydCB7IHVybCB9IGZyb20gXCJpbnNwZWN0b3JcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IGRiX2RhdGEgPSByZXF1aXJlKFwiLi4vcHVibGljL3VuaXRfZGJfZWNvLmpzb25cIik7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZGI6IGRiX2RhdGEgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdG9yX2ZpbHRlcihmYWN0aW9uOiBGYWN0aW9uKTogKHVuaXQ6IFVuaXQpID0+IGJvb2xlYW4ge1xuICByZXR1cm4gKHVuaXQpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdW5pdC5GYWN0aW9uID09IGZhY3Rpb24gJiZcbiAgICAgICh1bml0LkNhdGVnb3JpZXMuaW5jbHVkZXMoXCJFTkVSR1lQUk9EVUNUSU9OXCIpIHx8XG4gICAgICAgIHVuaXQuQ2F0ZWdvcmllcy5pbmNsdWRlcyhcIk1BU1NQUk9EVUNUSU9OXCIpKSAmJlxuICAgICAgdW5pdC5DYXRlZ29yaWVzLmluY2x1ZGVzKFwiU1RSVUNUVVJFXCIpXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmFjdG9yeV9maWx0ZXIoZmFjdGlvbjogRmFjdGlvbik6ICh1bml0OiBVbml0KSA9PiBib29sZWFuIHtcbiAgcmV0dXJuICh1bml0KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHVuaXQuSXNGYWN0b3J5ICYmXG4gICAgICB1bml0LkZhY3Rpb24gPT09IGZhY3Rpb24gJiZcbiAgICAgICF1bml0LkRlc2NyaXB0aW9uLmluY2x1ZGVzKFwiSFFcIilcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhbHBoYWJldGljX3RlY2hsZXZlbF9zb3J0ZXIoYTogVW5pdCwgYjogVW5pdCkge1xuICBpZiAoYS5EZXNjcmlwdGlvbiA8IGIuRGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEuRGVzY3JpcHRpb24gPiBiLkRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKGEuVGVjaExldmVsIDwgYi5UZWNoTGV2ZWwpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEuVGVjaExldmVsID4gYi5UZWNoTGV2ZWwpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gQnVpbGRpbmdzUmVkdWNlcihcbiAgYnVpbGRpbmdzOiB7IFtpbmRleDogc3RyaW5nXTogQnVpbGRpbmdEYXRhW10gfSxcbiAgYWN0aW9uOiBBY3Rpb25cbikge1xuICBjb25zb2xlLmxvZyhcIlJFRFVDRVJcIiwgYnVpbGRpbmdzLCBhY3Rpb24pO1xuICBsZXQgZmFjdGlvbiA9IGFjdGlvbi5mYWN0aW9uO1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBY3Rpb25UeXBlLlNFVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmJ1aWxkaW5ncyxcbiAgICAgICAgW2ZhY3Rpb25dOiBPYmplY3QuYXNzaWduKFtdLCBidWlsZGluZ3NbZmFjdGlvbl0sIHtcbiAgICAgICAgICBbYWN0aW9uLmluZGV4XTogYWN0aW9uLmJ1aWxkaW5nLFxuICAgICAgICB9KSxcbiAgICAgIH07XG4gICAgY2FzZSBBY3Rpb25UeXBlLkFERDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmJ1aWxkaW5ncyxcbiAgICAgICAgW2ZhY3Rpb25dOiBbLi4uYnVpbGRpbmdzW2ZhY3Rpb25dLCBhY3Rpb24uYnVpbGRpbmddLFxuICAgICAgfTtcbiAgICBjYXNlIEFjdGlvblR5cGUuVVBEQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYnVpbGRpbmdzLFxuICAgICAgICBbZmFjdGlvbl06IE9iamVjdC5hc3NpZ24oW10sIGJ1aWxkaW5nc1tmYWN0aW9uXSwge1xuICAgICAgICAgIFthY3Rpb24uaW5kZXhdOiBhY3Rpb24udXBkYXRlKGJ1aWxkaW5nc1tmYWN0aW9uXVthY3Rpb24uaW5kZXhdKSxcbiAgICAgICAgfSksXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYWN0aW9uIHR5cGUgZm9yIGJ1aWxkaW5ncyByZWR1Y2VyXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlX2J1aWxkaW5nX211dGF0b3JzKFxuICBkaXNwYXRjaGVyOiAoYTogQWN0aW9uKSA9PiB2b2lkLFxuICBmYWN0aW9uOiBGYWN0aW9uLFxuICBkYlxuKSB7XG4gIHJldHVybiB7XG4gICAgU2V0OiAoaW5kZXgsIGJ1aWxkaW5nKSA9PlxuICAgICAgZGlzcGF0Y2hlcih7XG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuU0VULFxuICAgICAgICBmYWN0aW9uOiBmYWN0aW9uLFxuICAgICAgICBidWlsZGluZzogYnVpbGRpbmcsXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIH0pLFxuICAgIEFkZDogKHJhd19idWlsZGluZykgPT5cbiAgICAgIGRpc3BhdGNoZXIoe1xuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLkFERCxcbiAgICAgICAgZmFjdGlvbjogZmFjdGlvbixcbiAgICAgICAgYnVpbGRpbmc6IG5ldyBCdWlsZGluZ0RhdGEocmF3X2J1aWxkaW5nLCBkYiksXG4gICAgICB9KSxcbiAgICBVcGRhdGU6IChpbmRleCwgdXBkYXRlKSA9PlxuICAgICAgZGlzcGF0Y2hlcih7XG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuVVBEQVRFLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGZhY3Rpb246IGZhY3Rpb24sXG4gICAgICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgICAgfSksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHM6IHsgZGI6IHsgbGlzdDogVW5pdFtdIH0gfSkge1xuICBjb25zdCBbZ2VuZXJhdG9ycywgZ2VuZXJhdG9yRGlzcGF0Y2hdID0gdXNlUmVkdWNlcihCdWlsZGluZ3NSZWR1Y2VyLCB7XG4gICAgU0VSQVBISU06IFtdLFxuICAgIENZQlJBTjogW10sXG4gICAgVUVGOiBbXSxcbiAgICBBRU9OOiBbXSxcbiAgfSk7XG4gIGNvbnN0IFtjb25zdHJ1Y3RvcnMsIGZhY3RvcnlEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKEJ1aWxkaW5nc1JlZHVjZXIsIHtcbiAgICBTRVJBUEhJTTogW10sXG4gICAgQ1lCUkFOOiBbXSxcbiAgICBVRUY6IFtdLFxuICAgIEFFT046IFtdLFxuICB9KTtcbiAgY29uc3QgW2ZhY3Rpb24sIFNldEZhY3Rpb25dOiBbRmFjdGlvbiwgYW55XSA9IHVzZVN0YXRlKFwiU0VSQVBISU1cIik7XG5cbiAgbGV0IGdlbmVyYXRvcl9idWlsZGluZ3MgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBwcm9wcy5kYi5saXN0XG4gICAgICAgIC5maWx0ZXIoZ2VuZXJhdG9yX2ZpbHRlcihmYWN0aW9uKSlcbiAgICAgICAgLnNvcnQoYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyKSxcbiAgICBbZmFjdGlvbl1cbiAgKTtcblxuICBsZXQgZmFjdG9yaWVzID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgcHJvcHMuZGIubGlzdFxuICAgICAgICAuZmlsdGVyKGZhY3RvcnlfZmlsdGVyKGZhY3Rpb24pKVxuICAgICAgICAuc29ydChhbHBoYWJldGljX3RlY2hsZXZlbF9zb3J0ZXIpLFxuICAgIFtmYWN0aW9uXVxuICApO1xuICBsZXQge1xuICAgIFNldDogU2V0R2VuQnVpbGRpbmcsXG4gICAgQWRkOiBBZGRHZW5CdWlsZGluZyxcbiAgICBVcGRhdGU6IFVwZGF0ZUdlbkJ1aWxkaW5nLFxuICB9ID0gdXNlTWVtbyhcbiAgICAoKSA9PiBnZW5lcmF0ZV9idWlsZGluZ19tdXRhdG9ycyhnZW5lcmF0b3JEaXNwYXRjaCwgZmFjdGlvbiwgcHJvcHMuZGIpLFxuICAgIFtmYWN0aW9uXVxuICApO1xuXG4gIGxldCB7XG4gICAgU2V0OiBTZXRGYWNCdWlsZGluZyxcbiAgICBBZGQ6IEFkZEZhY0J1aWxkaW5nLFxuICAgIFVwZGF0ZTogVXBkYXRlRmFjQnVpbGRpbmcsXG4gIH0gPSB1c2VNZW1vKFxuICAgICgpID0+IGdlbmVyYXRlX2J1aWxkaW5nX211dGF0b3JzKGZhY3RvcnlEaXNwYXRjaCwgZmFjdGlvbiwgcHJvcHMuZGIpLFxuICAgIFtmYWN0aW9uXVxuICApO1xuICBsZXQgZmFjdGlvbnMgPSBbXCJTRVJBUEhJTVwiLCBcIkNZQlJBTlwiLCBcIlVFRlwiLCBcIkFFT05cIl07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VfaGVhZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhY3Rpb25fYnV0dG9uX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICB7ZmFjdGlvbnMubWFwKChmYWMpID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W3N0eWxlcy5mYWN0aW9uX2J1dHRvbl0uam9pbihcIiBcIil9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gU2V0RmFjdGlvbihmYWMpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGlnaHRncmV5IHVybCgke0ljb24oZmFjKX0gbm8tcmVwZWF0IGNlbnRlcmAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsvKjxpbWcgc3JjPXtJY29uKGZhYyl9IHN0eWxlPXt7IG9wYWNpdHk6IFwiODAlXCIgfX0+PC9pbWc+Ki99XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYWN0aW9uX2hlYWRlcl9kaXZ9PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmZhY3Rpb25faGVhZGVyfT57ZmFjdGlvbn08L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfZGl2fT5Ub3RhbCBTdGF0czwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPEJ1aWxkaW5nQ2F0ZWdvcnlcbiAgICAgICAgICAgIGtleT1cImdlblwiXG4gICAgICAgICAgICBjYXRlZ29yeV9idWlsZGluZ3M9e2dlbmVyYXRvcl9idWlsZGluZ3N9XG4gICAgICAgICAgICBidWlsZGluZ3M9e2dlbmVyYXRvcnNbZmFjdGlvbl19XG4gICAgICAgICAgICBTZXRCdWlsZGluZz17U2V0R2VuQnVpbGRpbmd9XG4gICAgICAgICAgICBBZGRCdWlsZGluZz17QWRkR2VuQnVpbGRpbmd9XG4gICAgICAgICAgICBVcGRhdGVCdWlsZGluZz17VXBkYXRlR2VuQnVpbGRpbmd9XG4gICAgICAgICAgICBkYj17cHJvcHMuZGJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZlcnRpY2FsX2RpdmlkZXJ9PjwvZGl2PlxuICAgICAgICAgIDxCdWlsZGluZ0NhdGVnb3J5XG4gICAgICAgICAgICBrZXk9XCJmYWNcIlxuICAgICAgICAgICAgY2F0ZWdvcnlfYnVpbGRpbmdzPXtmYWN0b3JpZXN9XG4gICAgICAgICAgICBidWlsZGluZ3M9e2NvbnN0cnVjdG9yc1tmYWN0aW9uXX1cbiAgICAgICAgICAgIFNldEJ1aWxkaW5nPXtTZXRGYWNCdWlsZGluZ31cbiAgICAgICAgICAgIEFkZEJ1aWxkaW5nPXtBZGRGYWNCdWlsZGluZ31cbiAgICAgICAgICAgIFVwZGF0ZUJ1aWxkaW5nPXtVcGRhdGVGYWNCdWlsZGluZ31cbiAgICAgICAgICAgIGRiPXtwcm9wcy5kYn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIHsvKlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==