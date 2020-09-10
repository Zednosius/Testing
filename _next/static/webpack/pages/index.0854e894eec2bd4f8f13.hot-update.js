webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImageButton.tsx":
/*!************************************!*\
  !*** ./components/ImageButton.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Image.module.css */ "./styles/Image.module.css");
/* harmony import */ var _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "X:\\erik\\Programmering\\Webb\\SupCom\\ecobalancesupreme\\components\\ImageButton.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var onClick = _ref.onClick,
      src = _ref.src;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([_styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_button, _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_button_hover]),
      classNames = _useState[0],
      setClassNames = _useState[1];

  return __jsx("button", {
    className: classNames.join(" "),
    onMouseDown: function onMouseDown() {
      setClassNames([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(classNames), [_styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_button_pressed]));
    },
    onMouseLeave: function onMouseLeave() {
      setClassNames(classNames.filter(function (v) {
        return v !== _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_button_pressed;
      }));
    },
    onMouseUp: function onMouseUp() {
      setClassNames(classNames.filter(function (v) {
        return v !== _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image_button_pressed;
      }));
    },
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: src,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }));
});

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

/***/ }),

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
      lineNumber: 181,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }, faction)), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.stats_div,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 11
    }
  }, "Total Stats")), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.categories_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
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
      lineNumber: 187,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.vertical_divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
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
      lineNumber: 197,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJvbkNsaWNrIiwic3JjIiwidXNlU3RhdGUiLCJpbVN0eWxlIiwiaW1hZ2VfYnV0dG9uIiwiaW1hZ2VfYnV0dG9uX2hvdmVyIiwiY2xhc3NOYW1lcyIsInNldENsYXNzTmFtZXMiLCJqb2luIiwiaW1hZ2VfYnV0dG9uX3ByZXNzZWQiLCJmaWx0ZXIiLCJ2IiwiZ2VuZXJhdG9yX2ZpbHRlciIsImZhY3Rpb24iLCJ1bml0IiwiRmFjdGlvbiIsIkNhdGVnb3JpZXMiLCJpbmNsdWRlcyIsImZhY3RvcnlfZmlsdGVyIiwiSXNGYWN0b3J5IiwiRGVzY3JpcHRpb24iLCJhbHBoYWJldGljX3RlY2hsZXZlbF9zb3J0ZXIiLCJhIiwiYiIsIlRlY2hMZXZlbCIsIkJ1aWxkaW5nc1JlZHVjZXIiLCJidWlsZGluZ3MiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIkFjdGlvblR5cGUiLCJTRVQiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmRleCIsImJ1aWxkaW5nIiwiQUREIiwiVVBEQVRFIiwidXBkYXRlIiwiRXJyb3IiLCJnZW5lcmF0ZV9idWlsZGluZ19tdXRhdG9ycyIsImRpc3BhdGNoZXIiLCJkYiIsIlNldCIsIkFkZCIsInJhd19idWlsZGluZyIsIkJ1aWxkaW5nRGF0YSIsIlVwZGF0ZSIsIkhvbWUiLCJwcm9wcyIsInVzZVJlZHVjZXIiLCJTRVJBUEhJTSIsIkNZQlJBTiIsIlVFRiIsIkFFT04iLCJnZW5lcmF0b3JzIiwiZ2VuZXJhdG9yRGlzcGF0Y2giLCJjb25zdHJ1Y3RvcnMiLCJmYWN0b3J5RGlzcGF0Y2giLCJTZXRGYWN0aW9uIiwiZ2VuZXJhdG9yX2J1aWxkaW5ncyIsInVzZU1lbW8iLCJsaXN0Iiwic29ydCIsImZhY3RvcmllcyIsIlNldEdlbkJ1aWxkaW5nIiwiQWRkR2VuQnVpbGRpbmciLCJVcGRhdGVHZW5CdWlsZGluZyIsIlNldEZhY0J1aWxkaW5nIiwiQWRkRmFjQnVpbGRpbmciLCJVcGRhdGVGYWNCdWlsZGluZyIsImZhY3Rpb25zIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsInBhZ2VfaGVhZGVyIiwiZmFjdGlvbl9idXR0b25fY29udGFpbmVyIiwibWFwIiwiZmFjIiwiSWNvbiIsImZhY3Rpb25faGVhZGVyX2RpdiIsImZhY3Rpb25faGVhZGVyIiwic3RhdHNfZGl2IiwiY2F0ZWdvcmllc19jb250YWluZXIiLCJ2ZXJ0aWNhbF9kaXZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDZSwrRUFBNEI7QUFBQSxNQUFoQkEsT0FBZ0IsUUFBaEJBLE9BQWdCO0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLENBQ3pDQywrREFBTyxDQUFDQyxZQURpQyxFQUV6Q0QsK0RBQU8sQ0FBQ0Usa0JBRmlDLENBQUQsQ0FERDtBQUFBLE1BQ3BDQyxVQURvQztBQUFBLE1BQ3hCQyxhQUR3Qjs7QUFLekMsU0FDRTtBQUNFLGFBQVMsRUFBRUQsVUFBVSxDQUFDRSxJQUFYLENBQWdCLEdBQWhCLENBRGI7QUFFRSxlQUFXLEVBQUUsdUJBQU07QUFDakJELG1CQUFhLHdHQUFLRCxVQUFMLElBQWlCSCwrREFBTyxDQUFDTSxvQkFBekIsR0FBYjtBQUNELEtBSkg7QUFLRSxnQkFBWSxFQUFFLHdCQUFNO0FBQ2xCRixtQkFBYSxDQUNYRCxVQUFVLENBQUNJLE1BQVgsQ0FBa0IsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsS0FBS1IsK0RBQU8sQ0FBQ00sb0JBQXJCO0FBQUEsT0FBbEIsQ0FEVyxDQUFiO0FBR0QsS0FUSDtBQVVFLGFBQVMsRUFBRSxxQkFBTTtBQUNmRixtQkFBYSxDQUNYRCxVQUFVLENBQUNJLE1BQVgsQ0FBa0IsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsS0FBS1IsK0RBQU8sQ0FB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QUFrQixFQUFFcEIsU0FGdEI7QUFHRSxhQUFTLEVBQUVQLFlBQVksQ0FBQzdDLE9BQUQsQ0FIekI7QUFJRSxlQUFXLEVBQUV3RCxjQUpmO0FBS0UsZUFBVyxFQUFFQyxjQUxmO0FBTUUsa0JBQWMsRUFBRUMsaUJBTmxCO0FBT0UsTUFBRSxFQUFFckIsS0FBSyxDQUFDUCxFQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQWZGLENBTEYsQ0FERjtBQXlERDs7R0ExR3VCTSxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA4NTRlODk0ZWVjMmJkNGY4ZjEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1TdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0ltYWdlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgb25DbGljaywgc3JjIH0pIHtcclxuICBsZXQgW2NsYXNzTmFtZXMsIHNldENsYXNzTmFtZXNdID0gdXNlU3RhdGUoW1xyXG4gICAgaW1TdHlsZS5pbWFnZV9idXR0b24sXHJcbiAgICBpbVN0eWxlLmltYWdlX2J1dHRvbl9ob3ZlcixcclxuICBdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbihcIiBcIil9XHJcbiAgICAgIG9uTW91c2VEb3duPXsoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2xhc3NOYW1lcyhbLi4uY2xhc3NOYW1lcywgaW1TdHlsZS5pbWFnZV9idXR0b25fcHJlc3NlZF0pO1xyXG4gICAgICB9fVxyXG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICBzZXRDbGFzc05hbWVzKFxyXG4gICAgICAgICAgY2xhc3NOYW1lcy5maWx0ZXIoKHYpID0+IHYgIT09IGltU3R5bGUuaW1hZ2VfYnV0dG9uX3ByZXNzZWQpXHJcbiAgICAgICAgKTtcclxuICAgICAgfX1cclxuICAgICAgb25Nb3VzZVVwPXsoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2xhc3NOYW1lcyhcclxuICAgICAgICAgIGNsYXNzTmFtZXMuZmlsdGVyKCh2KSA9PiB2ICE9PSBpbVN0eWxlLmltYWdlX2J1dHRvbl9wcmVzc2VkKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH19XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIDxpbWcgc3JjPXtzcmN9PjwvaW1nPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgaW1TdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0ltYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZHVjZXIsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdWlsZGluZ0NhdGVnb3J5IGZyb20gXCIuLi9jb21wb25lbnRzL0J1aWxkaW5nQ2F0ZWdvcnlcIjtcbmltcG9ydCB7IEJ1aWxkaW5nRGF0YSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0J1aWxkaW5nXCI7XG5pbXBvcnQgeyBVbml0LCBBY3Rpb24sIEFjdGlvblR5cGUsIEZhY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNjcmlwdC9UeXBlc1wiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdXJsIH0gZnJvbSBcImluc3BlY3RvclwiO1xuaW1wb3J0IEltYWdlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0ltYWdlQnV0dG9uXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBkYl9kYXRhID0gcmVxdWlyZShcIi4uL3B1YmxpYy91bml0X2RiX2Vjby5qc29uXCIpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRiOiBkYl9kYXRhIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRvcl9maWx0ZXIoZmFjdGlvbjogRmFjdGlvbik6ICh1bml0OiBVbml0KSA9PiBib29sZWFuIHtcbiAgcmV0dXJuICh1bml0KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHVuaXQuRmFjdGlvbiA9PSBmYWN0aW9uICYmXG4gICAgICAodW5pdC5DYXRlZ29yaWVzLmluY2x1ZGVzKFwiRU5FUkdZUFJPRFVDVElPTlwiKSB8fFxuICAgICAgICB1bml0LkNhdGVnb3JpZXMuaW5jbHVkZXMoXCJNQVNTUFJPRFVDVElPTlwiKSkgJiZcbiAgICAgIHVuaXQuQ2F0ZWdvcmllcy5pbmNsdWRlcyhcIlNUUlVDVFVSRVwiKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZhY3RvcnlfZmlsdGVyKGZhY3Rpb246IEZhY3Rpb24pOiAodW5pdDogVW5pdCkgPT4gYm9vbGVhbiB7XG4gIHJldHVybiAodW5pdCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB1bml0LklzRmFjdG9yeSAmJlxuICAgICAgdW5pdC5GYWN0aW9uID09PSBmYWN0aW9uICYmXG4gICAgICAhdW5pdC5EZXNjcmlwdGlvbi5pbmNsdWRlcyhcIkhRXCIpXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyKGE6IFVuaXQsIGI6IFVuaXQpIHtcbiAgaWYgKGEuRGVzY3JpcHRpb24gPCBiLkRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhLkRlc2NyaXB0aW9uID4gYi5EZXNjcmlwdGlvbikge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGlmIChhLlRlY2hMZXZlbCA8IGIuVGVjaExldmVsKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhLlRlY2hMZXZlbCA+IGIuVGVjaExldmVsKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIEJ1aWxkaW5nc1JlZHVjZXIoXG4gIGJ1aWxkaW5nczogeyBbaW5kZXg6IHN0cmluZ106IEJ1aWxkaW5nRGF0YVtdIH0sXG4gIGFjdGlvbjogQWN0aW9uXG4pIHtcbiAgY29uc29sZS5sb2coXCJSRURVQ0VSXCIsIGJ1aWxkaW5ncywgYWN0aW9uKTtcbiAgbGV0IGZhY3Rpb24gPSBhY3Rpb24uZmFjdGlvbjtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQWN0aW9uVHlwZS5TRVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5idWlsZGluZ3MsXG4gICAgICAgIFtmYWN0aW9uXTogT2JqZWN0LmFzc2lnbihbXSwgYnVpbGRpbmdzW2ZhY3Rpb25dLCB7XG4gICAgICAgICAgW2FjdGlvbi5pbmRleF06IGFjdGlvbi5idWlsZGluZyxcbiAgICAgICAgfSksXG4gICAgICB9O1xuICAgIGNhc2UgQWN0aW9uVHlwZS5BREQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5idWlsZGluZ3MsXG4gICAgICAgIFtmYWN0aW9uXTogWy4uLmJ1aWxkaW5nc1tmYWN0aW9uXSwgYWN0aW9uLmJ1aWxkaW5nXSxcbiAgICAgIH07XG4gICAgY2FzZSBBY3Rpb25UeXBlLlVQREFURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmJ1aWxkaW5ncyxcbiAgICAgICAgW2ZhY3Rpb25dOiBPYmplY3QuYXNzaWduKFtdLCBidWlsZGluZ3NbZmFjdGlvbl0sIHtcbiAgICAgICAgICBbYWN0aW9uLmluZGV4XTogYWN0aW9uLnVwZGF0ZShidWlsZGluZ3NbZmFjdGlvbl1bYWN0aW9uLmluZGV4XSksXG4gICAgICAgIH0pLFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFjdGlvbiB0eXBlIGZvciBidWlsZGluZ3MgcmVkdWNlclwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZV9idWlsZGluZ19tdXRhdG9ycyhcbiAgZGlzcGF0Y2hlcjogKGE6IEFjdGlvbikgPT4gdm9pZCxcbiAgZmFjdGlvbjogRmFjdGlvbixcbiAgZGJcbikge1xuICByZXR1cm4ge1xuICAgIFNldDogKGluZGV4LCBidWlsZGluZykgPT5cbiAgICAgIGRpc3BhdGNoZXIoe1xuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlNFVCxcbiAgICAgICAgZmFjdGlvbjogZmFjdGlvbixcbiAgICAgICAgYnVpbGRpbmc6IGJ1aWxkaW5nLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICB9KSxcbiAgICBBZGQ6IChyYXdfYnVpbGRpbmcpID0+XG4gICAgICBkaXNwYXRjaGVyKHtcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5BREQsXG4gICAgICAgIGZhY3Rpb246IGZhY3Rpb24sXG4gICAgICAgIGJ1aWxkaW5nOiBuZXcgQnVpbGRpbmdEYXRhKHJhd19idWlsZGluZywgZGIpLFxuICAgICAgfSksXG4gICAgVXBkYXRlOiAoaW5kZXgsIHVwZGF0ZSkgPT5cbiAgICAgIGRpc3BhdGNoZXIoe1xuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlVQREFURSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBmYWN0aW9uOiBmYWN0aW9uLFxuICAgICAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICAgIH0pLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzOiB7IGRiOiB7IGxpc3Q6IFVuaXRbXSB9IH0pIHtcbiAgY29uc3QgW2dlbmVyYXRvcnMsIGdlbmVyYXRvckRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoQnVpbGRpbmdzUmVkdWNlciwge1xuICAgIFNFUkFQSElNOiBbXSxcbiAgICBDWUJSQU46IFtdLFxuICAgIFVFRjogW10sXG4gICAgQUVPTjogW10sXG4gIH0pO1xuICBjb25zdCBbY29uc3RydWN0b3JzLCBmYWN0b3J5RGlzcGF0Y2hdID0gdXNlUmVkdWNlcihCdWlsZGluZ3NSZWR1Y2VyLCB7XG4gICAgU0VSQVBISU06IFtdLFxuICAgIENZQlJBTjogW10sXG4gICAgVUVGOiBbXSxcbiAgICBBRU9OOiBbXSxcbiAgfSk7XG4gIGNvbnN0IFtmYWN0aW9uLCBTZXRGYWN0aW9uXTogW0ZhY3Rpb24sIGFueV0gPSB1c2VTdGF0ZShcIlNFUkFQSElNXCIpO1xuXG4gIGxldCBnZW5lcmF0b3JfYnVpbGRpbmdzID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgcHJvcHMuZGIubGlzdFxuICAgICAgICAuZmlsdGVyKGdlbmVyYXRvcl9maWx0ZXIoZmFjdGlvbikpXG4gICAgICAgIC5zb3J0KGFscGhhYmV0aWNfdGVjaGxldmVsX3NvcnRlciksXG4gICAgW2ZhY3Rpb25dXG4gICk7XG5cbiAgbGV0IGZhY3RvcmllcyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHByb3BzLmRiLmxpc3RcbiAgICAgICAgLmZpbHRlcihmYWN0b3J5X2ZpbHRlcihmYWN0aW9uKSlcbiAgICAgICAgLnNvcnQoYWxwaGFiZXRpY190ZWNobGV2ZWxfc29ydGVyKSxcbiAgICBbZmFjdGlvbl1cbiAgKTtcbiAgbGV0IHtcbiAgICBTZXQ6IFNldEdlbkJ1aWxkaW5nLFxuICAgIEFkZDogQWRkR2VuQnVpbGRpbmcsXG4gICAgVXBkYXRlOiBVcGRhdGVHZW5CdWlsZGluZyxcbiAgfSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gZ2VuZXJhdGVfYnVpbGRpbmdfbXV0YXRvcnMoZ2VuZXJhdG9yRGlzcGF0Y2gsIGZhY3Rpb24sIHByb3BzLmRiKSxcbiAgICBbZmFjdGlvbl1cbiAgKTtcblxuICBsZXQge1xuICAgIFNldDogU2V0RmFjQnVpbGRpbmcsXG4gICAgQWRkOiBBZGRGYWNCdWlsZGluZyxcbiAgICBVcGRhdGU6IFVwZGF0ZUZhY0J1aWxkaW5nLFxuICB9ID0gdXNlTWVtbyhcbiAgICAoKSA9PiBnZW5lcmF0ZV9idWlsZGluZ19tdXRhdG9ycyhmYWN0b3J5RGlzcGF0Y2gsIGZhY3Rpb24sIHByb3BzLmRiKSxcbiAgICBbZmFjdGlvbl1cbiAgKTtcbiAgbGV0IGZhY3Rpb25zID0gW1wiU0VSQVBISU1cIiwgXCJDWUJSQU5cIiwgXCJVRUZcIiwgXCJBRU9OXCJdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlX2hlYWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYWN0aW9uX2J1dHRvbl9jb250YWluZXJ9PlxuICAgICAgICAgICAge2ZhY3Rpb25zLm1hcCgoZmFjKSA9PiAoXG4gICAgICAgICAgICAgIDxJbWFnZUJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFNldEZhY3Rpb24oZmFjKX1cbiAgICAgICAgICAgICAgICBzcmM9e0ljb24oZmFjKX1cbiAgICAgICAgICAgICAgPjwvSW1hZ2VCdXR0b24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhY3Rpb25faGVhZGVyX2Rpdn0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdGlvbl9oZWFkZXJ9PntmYWN0aW9ufTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c19kaXZ9PlRvdGFsIFN0YXRzPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXNfY29udGFpbmVyfT5cbiAgICAgICAgICA8QnVpbGRpbmdDYXRlZ29yeVxuICAgICAgICAgICAga2V5PVwiZ2VuXCJcbiAgICAgICAgICAgIGNhdGVnb3J5X2J1aWxkaW5ncz17Z2VuZXJhdG9yX2J1aWxkaW5nc31cbiAgICAgICAgICAgIGJ1aWxkaW5ncz17Z2VuZXJhdG9yc1tmYWN0aW9uXX1cbiAgICAgICAgICAgIFNldEJ1aWxkaW5nPXtTZXRHZW5CdWlsZGluZ31cbiAgICAgICAgICAgIEFkZEJ1aWxkaW5nPXtBZGRHZW5CdWlsZGluZ31cbiAgICAgICAgICAgIFVwZGF0ZUJ1aWxkaW5nPXtVcGRhdGVHZW5CdWlsZGluZ31cbiAgICAgICAgICAgIGRiPXtwcm9wcy5kYn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmVydGljYWxfZGl2aWRlcn0+PC9kaXY+XG4gICAgICAgICAgPEJ1aWxkaW5nQ2F0ZWdvcnlcbiAgICAgICAgICAgIGtleT1cImZhY1wiXG4gICAgICAgICAgICBjYXRlZ29yeV9idWlsZGluZ3M9e2ZhY3Rvcmllc31cbiAgICAgICAgICAgIGJ1aWxkaW5ncz17Y29uc3RydWN0b3JzW2ZhY3Rpb25dfVxuICAgICAgICAgICAgU2V0QnVpbGRpbmc9e1NldEZhY0J1aWxkaW5nfVxuICAgICAgICAgICAgQWRkQnVpbGRpbmc9e0FkZEZhY0J1aWxkaW5nfVxuICAgICAgICAgICAgVXBkYXRlQnVpbGRpbmc9e1VwZGF0ZUZhY0J1aWxkaW5nfVxuICAgICAgICAgICAgZGI9e3Byb3BzLmRifVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgey8qXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9