webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/Image.module.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/Image.module.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".Image_image_button__meaAF {\r\n  position: relative;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 0;\r\n  border: 0;\r\n  background: transparent;\r\n  outline: none;\r\n}\r\n\r\n.Image_image_button_hover__3s4Jf :hover {\r\n  background-color: #000;\r\n  opacity: 0.9;\r\n}\r\n.Image_image_button_hover__3s4Jf :focus {\r\n  background-color: #000;\r\n  opacity: 0.6;\r\n}\r\n", "",{"version":3,"sources":["X:/erik/Programmering/Webb/SupCom/ecobalancesupreme/styles/Image.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,0BAAkB;EAAlB,uBAAkB;EAAlB,kBAAkB;EAClB,2BAAmB;EAAnB,wBAAmB;EAAnB,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,YAAY;AACd","file":"Image.module.css","sourcesContent":[".image_button {\r\n  position: relative;\r\n  width: fit-content;\r\n  height: fit-content;\r\n  padding: 0;\r\n  border: 0;\r\n  background: transparent;\r\n  outline: none;\r\n}\r\n\r\n.image_button_hover :hover {\r\n  background-color: #000;\r\n  opacity: 0.9;\r\n}\r\n.image_button_hover :focus {\r\n  background-color: #000;\r\n  opacity: 0.6;\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"image_button": "Image_image_button__meaAF",
	"image_button_hover": "Image_image_button_hover__3s4Jf"
};
module.exports = exports;


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
    className: [_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_button_container, _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.image_button, _styles_Image_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.image_button_hover].join(" "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, factions.map(function (fac) {
    return __jsx("button", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_button,
      onClick: function onClick() {
        return SetFaction(fac);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: Object(_components_Constants__WEBPACK_IMPORTED_MODULE_9__["Icon"])(fac),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }
    }));
  })), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_header_div,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.faction_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, faction)), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.stats_div,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, "Total Stats")), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.categories_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
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
      lineNumber: 193,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.vertical_divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
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
      lineNumber: 203,
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

/***/ }),

/***/ "./styles/Image.module.css":
/*!*********************************!*\
  !*** ./styles/Image.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Image.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/Image.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Image.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/Image.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Image.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/Image.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0ltYWdlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0ltYWdlLm1vZHVsZS5jc3M/MDQ1YyJdLCJuYW1lcyI6WyJnZW5lcmF0b3JfZmlsdGVyIiwiZmFjdGlvbiIsInVuaXQiLCJGYWN0aW9uIiwiQ2F0ZWdvcmllcyIsImluY2x1ZGVzIiwiZmFjdG9yeV9maWx0ZXIiLCJJc0ZhY3RvcnkiLCJEZXNjcmlwdGlvbiIsImFscGhhYmV0aWNfdGVjaGxldmVsX3NvcnRlciIsImEiLCJiIiwiVGVjaExldmVsIiwiQnVpbGRpbmdzUmVkdWNlciIsImJ1aWxkaW5ncyIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiQWN0aW9uVHlwZSIsIlNFVCIsIk9iamVjdCIsImFzc2lnbiIsImluZGV4IiwiYnVpbGRpbmciLCJBREQiLCJVUERBVEUiLCJ1cGRhdGUiLCJFcnJvciIsImdlbmVyYXRlX2J1aWxkaW5nX211dGF0b3JzIiwiZGlzcGF0Y2hlciIsImRiIiwiU2V0IiwiQWRkIiwicmF3X2J1aWxkaW5nIiwiQnVpbGRpbmdEYXRhIiwiVXBkYXRlIiwiSG9tZSIsInByb3BzIiwidXNlUmVkdWNlciIsIlNFUkFQSElNIiwiQ1lCUkFOIiwiVUVGIiwiQUVPTiIsImdlbmVyYXRvcnMiLCJnZW5lcmF0b3JEaXNwYXRjaCIsImNvbnN0cnVjdG9ycyIsImZhY3RvcnlEaXNwYXRjaCIsInVzZVN0YXRlIiwiU2V0RmFjdGlvbiIsImdlbmVyYXRvcl9idWlsZGluZ3MiLCJ1c2VNZW1vIiwibGlzdCIsImZpbHRlciIsInNvcnQiLCJmYWN0b3JpZXMiLCJTZXRHZW5CdWlsZGluZyIsIkFkZEdlbkJ1aWxkaW5nIiwiVXBkYXRlR2VuQnVpbGRpbmciLCJTZXRGYWNCdWlsZGluZyIsIkFkZEZhY0J1aWxkaW5nIiwiVXBkYXRlRmFjQnVpbGRpbmciLCJmYWN0aW9ucyIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJwYWdlX2hlYWRlciIsImZhY3Rpb25fYnV0dG9uX2NvbnRhaW5lciIsImltU3R5bGUiLCJpbWFnZV9idXR0b24iLCJpbWFnZV9idXR0b25faG92ZXIiLCJqb2luIiwibWFwIiwiZmFjIiwiZmFjdGlvbl9idXR0b24iLCJJY29uIiwiZmFjdGlvbl9oZWFkZXJfZGl2IiwiZmFjdGlvbl9oZWFkZXIiLCJzdGF0c19kaXYiLCJjYXRlZ29yaWVzX2NvbnRhaW5lciIsInZlcnRpY2FsX2RpdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsK0JBQStCLHlCQUF5QixpQ0FBaUMsOEJBQThCLHlCQUF5QixrQ0FBa0MsK0JBQStCLDBCQUEwQixpQkFBaUIsZ0JBQWdCLDhCQUE4QixvQkFBb0IsS0FBSyxpREFBaUQsNkJBQTZCLG1CQUFtQixLQUFLLDZDQUE2Qyw2QkFBNkIsbUJBQW1CLEtBQUssV0FBVyxrSUFBa0ksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxrRUFBa0UseUJBQXlCLHlCQUF5QiwwQkFBMEIsaUJBQWlCLGdCQUFnQiw4QkFBOEIsb0JBQW9CLEtBQUssb0NBQW9DLDZCQUE2QixtQkFBbUIsS0FBSyxnQ0FBZ0MsNkJBQTZCLG1CQUFtQixLQUFLLE9BQU87QUFDbnhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxTQUFTQSxnQkFBVCxDQUEwQkMsT0FBMUIsRUFBcUU7QUFDbkUsU0FBTyxVQUFDQyxJQUFELEVBQVU7QUFDZixXQUNFQSxJQUFJLENBQUNDLE9BQUwsSUFBZ0JGLE9BQWhCLEtBQ0NDLElBQUksQ0FBQ0UsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsa0JBQXpCLEtBQ0NILElBQUksQ0FBQ0UsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsZ0JBQXpCLENBRkYsS0FHQUgsSUFBSSxDQUFDRSxVQUFMLENBQWdCQyxRQUFoQixDQUF5QixXQUF6QixDQUpGO0FBTUQsR0FQRDtBQVFEOztBQUVELFNBQVNDLGNBQVQsQ0FBd0JMLE9BQXhCLEVBQW1FO0FBQ2pFLFNBQU8sVUFBQ0MsSUFBRCxFQUFVO0FBQ2YsV0FDRUEsSUFBSSxDQUFDSyxTQUFMLElBQ0FMLElBQUksQ0FBQ0MsT0FBTCxLQUFpQkYsT0FEakIsSUFFQSxDQUFDQyxJQUFJLENBQUNNLFdBQUwsQ0FBaUJILFFBQWpCLENBQTBCLElBQTFCLENBSEg7QUFLRCxHQU5EO0FBT0Q7O0FBRUQsU0FBU0ksMkJBQVQsQ0FBcUNDLENBQXJDLEVBQThDQyxDQUE5QyxFQUF1RDtBQUNyRCxNQUFJRCxDQUFDLENBQUNGLFdBQUYsR0FBZ0JHLENBQUMsQ0FBQ0gsV0FBdEIsRUFBbUM7QUFDakMsV0FBTyxDQUFDLENBQVI7QUFDRDs7QUFDRCxNQUFJRSxDQUFDLENBQUNGLFdBQUYsR0FBZ0JHLENBQUMsQ0FBQ0gsV0FBdEIsRUFBbUM7QUFDakMsV0FBTyxDQUFQO0FBQ0Q7O0FBQ0QsTUFBSUUsQ0FBQyxDQUFDRSxTQUFGLEdBQWNELENBQUMsQ0FBQ0MsU0FBcEIsRUFBK0I7QUFDN0IsV0FBTyxDQUFDLENBQVI7QUFDRDs7QUFDRCxNQUFJRixDQUFDLENBQUNFLFNBQUYsR0FBY0QsQ0FBQyxDQUFDQyxTQUFwQixFQUErQjtBQUM3QixXQUFPLENBQVA7QUFDRDs7QUFDRCxTQUFPLENBQVA7QUFDRDs7QUFFRCxTQUFTQyxnQkFBVCxDQUNFQyxTQURGLEVBRUVDLE1BRkYsRUFHRTtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSCxTQUF2QixFQUFrQ0MsTUFBbEM7QUFDQSxNQUFJZCxPQUFPLEdBQUdjLE1BQU0sQ0FBQ2QsT0FBckI7O0FBQ0EsVUFBUWMsTUFBTSxDQUFDRyxJQUFmO0FBQ0UsU0FBS0MsNERBQVUsQ0FBQ0MsR0FBaEI7QUFDRSw2Q0FDS04sU0FETCxxR0FFR2IsT0FGSCxFQUVhb0IsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQlIsU0FBUyxDQUFDYixPQUFELENBQTNCLGdHQUNSYyxNQUFNLENBQUNRLEtBREMsRUFDT1IsTUFBTSxDQUFDUyxRQURkLEVBRmI7O0FBTUYsU0FBS0wsNERBQVUsQ0FBQ00sR0FBaEI7QUFDRSw2Q0FDS1gsU0FETCxxR0FFR2IsT0FGSCx5R0FFaUJhLFNBQVMsQ0FBQ2IsT0FBRCxDQUYxQixJQUVxQ2MsTUFBTSxDQUFDUyxRQUY1Qzs7QUFJRixTQUFLTCw0REFBVSxDQUFDTyxNQUFoQjtBQUNFLDZDQUNLWixTQURMLHFHQUVHYixPQUZILEVBRWFvQixNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCUixTQUFTLENBQUNiLE9BQUQsQ0FBM0IsZ0dBQ1JjLE1BQU0sQ0FBQ1EsS0FEQyxFQUNPUixNQUFNLENBQUNZLE1BQVAsQ0FBY2IsU0FBUyxDQUFDYixPQUFELENBQVQsQ0FBbUJjLE1BQU0sQ0FBQ1EsS0FBMUIsQ0FBZCxDQURQLEVBRmI7O0FBT0Y7QUFDRSxZQUFNLElBQUlLLEtBQUosQ0FBVSwyQ0FBVixDQUFOO0FBdEJKO0FBd0JEOztLQTlCUWYsZ0I7O0FBZ0NULFNBQVNnQiwwQkFBVCxDQUNFQyxVQURGLEVBRUU3QixPQUZGLEVBR0U4QixFQUhGLEVBSUU7QUFDQSxTQUFPO0FBQ0xDLE9BQUcsRUFBRSxhQUFDVCxLQUFELEVBQVFDLFFBQVI7QUFBQSxhQUNITSxVQUFVLENBQUM7QUFDVFosWUFBSSxFQUFFQyw0REFBVSxDQUFDQyxHQURSO0FBRVRuQixlQUFPLEVBQUVBLE9BRkE7QUFHVHVCLGdCQUFRLEVBQUVBLFFBSEQ7QUFJVEQsYUFBSyxFQUFFQTtBQUpFLE9BQUQsQ0FEUDtBQUFBLEtBREE7QUFRTFUsT0FBRyxFQUFFLGFBQUNDLFlBQUQ7QUFBQSxhQUNISixVQUFVLENBQUM7QUFDVFosWUFBSSxFQUFFQyw0REFBVSxDQUFDTSxHQURSO0FBRVR4QixlQUFPLEVBQUVBLE9BRkE7QUFHVHVCLGdCQUFRLEVBQUUsSUFBSVcsaUVBQUosQ0FBaUJELFlBQWpCLEVBQStCSCxFQUEvQjtBQUhELE9BQUQsQ0FEUDtBQUFBLEtBUkE7QUFjTEssVUFBTSxFQUFFLGdCQUFDYixLQUFELEVBQVFJLE1BQVI7QUFBQSxhQUNORyxVQUFVLENBQUM7QUFDVFosWUFBSSxFQUFFQyw0REFBVSxDQUFDTyxNQURSO0FBRVRILGFBQUssRUFBRUEsS0FGRTtBQUdUdEIsZUFBTyxFQUFFQSxPQUhBO0FBSVQwQixjQUFNLEVBQUVBO0FBSkMsT0FBRCxDQURKO0FBQUE7QUFkSCxHQUFQO0FBc0JEOzs7QUFFYyxTQUFTVSxJQUFULENBQWNDLEtBQWQsRUFBK0M7QUFBQTs7QUFBQTs7QUFBQSxvQkFDcEJDLHdEQUFVLENBQUMxQixnQkFBRCxFQUFtQjtBQUNuRTJCLFlBQVEsRUFBRSxFQUR5RDtBQUVuRUMsVUFBTSxFQUFFLEVBRjJEO0FBR25FQyxPQUFHLEVBQUUsRUFIOEQ7QUFJbkVDLFFBQUksRUFBRTtBQUo2RCxHQUFuQixDQURVO0FBQUEsTUFDckRDLFVBRHFEO0FBQUEsTUFDekNDLGlCQUR5Qzs7QUFBQSxxQkFPcEJOLHdEQUFVLENBQUMxQixnQkFBRCxFQUFtQjtBQUNuRTJCLFlBQVEsRUFBRSxFQUR5RDtBQUVuRUMsVUFBTSxFQUFFLEVBRjJEO0FBR25FQyxPQUFHLEVBQUUsRUFIOEQ7QUFJbkVDLFFBQUksRUFBRTtBQUo2RCxHQUFuQixDQVBVO0FBQUEsTUFPckRHLFlBUHFEO0FBQUEsTUFPdkNDLGVBUHVDOztBQUFBLGtCQWFkQyxzREFBUSxDQUFDLFVBQUQsQ0FiTTtBQUFBLE1BYXJEL0MsT0FicUQ7QUFBQSxNQWE1Q2dELFVBYjRDOztBQWU1RCxNQUFJQyxtQkFBbUIsR0FBR0MscURBQU8sQ0FDL0I7QUFBQSxXQUNFYixLQUFLLENBQUNQLEVBQU4sQ0FBU3FCLElBQVQsQ0FDR0MsTUFESCxDQUNVckQsZ0JBQWdCLENBQUNDLE9BQUQsQ0FEMUIsRUFFR3FELElBRkgsQ0FFUTdDLDJCQUZSLENBREY7QUFBQSxHQUQrQixFQUsvQixDQUFDUixPQUFELENBTCtCLENBQWpDO0FBUUEsTUFBSXNELFNBQVMsR0FBR0oscURBQU8sQ0FDckI7QUFBQSxXQUNFYixLQUFLLENBQUNQLEVBQU4sQ0FBU3FCLElBQVQsQ0FDR0MsTUFESCxDQUNVL0MsY0FBYyxDQUFDTCxPQUFELENBRHhCLEVBRUdxRCxJQUZILENBRVE3QywyQkFGUixDQURGO0FBQUEsR0FEcUIsRUFLckIsQ0FBQ1IsT0FBRCxDQUxxQixDQUF2Qjs7QUF2QjRELGlCQWtDeERrRCxxREFBTyxDQUNUO0FBQUEsV0FBTXRCLDBCQUEwQixDQUFDZ0IsaUJBQUQsRUFBb0I1QyxPQUFwQixFQUE2QnFDLEtBQUssQ0FBQ1AsRUFBbkMsQ0FBaEM7QUFBQSxHQURTLEVBRVQsQ0FBQzlCLE9BQUQsQ0FGUyxDQWxDaUQ7QUFBQSxNQStCckR1RCxjQS9CcUQsWUErQjFEeEIsR0EvQjBEO0FBQUEsTUFnQ3JEeUIsY0FoQ3FELFlBZ0MxRHhCLEdBaEMwRDtBQUFBLE1BaUNsRHlCLGlCQWpDa0QsWUFpQzFEdEIsTUFqQzBEOztBQUFBLGtCQTJDeERlLHFEQUFPLENBQ1Q7QUFBQSxXQUFNdEIsMEJBQTBCLENBQUNrQixlQUFELEVBQWtCOUMsT0FBbEIsRUFBMkJxQyxLQUFLLENBQUNQLEVBQWpDLENBQWhDO0FBQUEsR0FEUyxFQUVULENBQUM5QixPQUFELENBRlMsQ0EzQ2lEO0FBQUEsTUF3Q3JEMEQsY0F4Q3FELGFBd0MxRDNCLEdBeEMwRDtBQUFBLE1BeUNyRDRCLGNBekNxRCxhQXlDMUQzQixHQXpDMEQ7QUFBQSxNQTBDbEQ0QixpQkExQ2tELGFBMEMxRHpCLE1BMUMwRDs7QUErQzVELE1BQUkwQixRQUFRLEdBQUcsQ0FBQyxVQUFELEVBQWEsUUFBYixFQUF1QixLQUF2QixFQUE4QixNQUE5QixDQUFmO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQU0sYUFBUyxFQUFFRCw4REFBTSxDQUFDRSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVGLDhEQUFNLENBQUNHLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBRSxDQUNUSCw4REFBTSxDQUFDSSx3QkFERSxFQUVUQywrREFBTyxDQUFDQyxZQUZDLEVBR1RELCtEQUFPLENBQUNFLGtCQUhDLEVBSVRDLElBSlMsQ0FJSixHQUpJLENBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HVCxRQUFRLENBQUNVLEdBQVQsQ0FBYSxVQUFDQyxHQUFEO0FBQUEsV0FDWjtBQUNFLGVBQVMsRUFBRVYsOERBQU0sQ0FBQ1csY0FEcEI7QUFFRSxhQUFPLEVBQUU7QUFBQSxlQUFNekIsVUFBVSxDQUFDd0IsR0FBRCxDQUFoQjtBQUFBLE9BRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlFO0FBQUssU0FBRyxFQUFFRSxrRUFBSSxDQUFDRixHQUFELENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLENBRFk7QUFBQSxHQUFiLENBUEgsQ0FERixFQWlCRTtBQUFLLGFBQVMsRUFBRVYsOERBQU0sQ0FBQ2Esa0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRWIsOERBQU0sQ0FBQ2MsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QzVFLE9BQXZDLENBREYsQ0FqQkYsRUFvQkU7QUFBSyxhQUFTLEVBQUU4RCw4REFBTSxDQUFDZSxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBCRixDQURGLEVBdUJFO0FBQUssYUFBUyxFQUFFZiw4REFBTSxDQUFDZ0Isb0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsT0FBRyxFQUFDLEtBRE47QUFFRSxzQkFBa0IsRUFBRTdCLG1CQUZ0QjtBQUdFLGFBQVMsRUFBRU4sVUFBVSxDQUFDM0MsT0FBRCxDQUh2QjtBQUlFLGVBQVcsRUFBRXVELGNBSmY7QUFLRSxlQUFXLEVBQUVDLGNBTGY7QUFNRSxrQkFBYyxFQUFFQyxpQkFObEI7QUFPRSxNQUFFLEVBQUVwQixLQUFLLENBQUNQLEVBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBVUU7QUFBSyxhQUFTLEVBQUVnQyw4REFBTSxDQUFDaUIsZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFLE1BQUMsb0VBQUQ7QUFDRSxPQUFHLEVBQUMsS0FETjtBQUVFLHNCQUFrQixFQUFFekIsU0FGdEI7QUFHRSxhQUFTLEVBQUVULFlBQVksQ0FBQzdDLE9BQUQsQ0FIekI7QUFJRSxlQUFXLEVBQUUwRCxjQUpmO0FBS0UsZUFBVyxFQUFFQyxjQUxmO0FBTUUsa0JBQWMsRUFBRUMsaUJBTmxCO0FBT0UsTUFBRSxFQUFFdkIsS0FBSyxDQUFDUCxFQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQXZCRixDQUxGLENBREY7QUFpRUQ7O0dBbEh1Qk0sSTs7TUFBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIeEIsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxxUkFBNEo7O0FBRTlMOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHFSQUE0SjtBQUNsSztBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHFSQUE0Sjs7QUFFdEw7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MDdmYjlmNDhlM2ZkMTIwMmMzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkltYWdlX2ltYWdlX2J1dHRvbl9fbWVhQUYge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxyXFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGhlaWdodDogLXdlYmtpdC1maXQtY29udGVudDtcXHJcXG4gIGhlaWdodDogLW1vei1maXQtY29udGVudDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uSW1hZ2VfaW1hZ2VfYnV0dG9uX2hvdmVyX18zczRKZiA6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG59XFxyXFxuLkltYWdlX2ltYWdlX2J1dHRvbl9ob3Zlcl9fM3M0SmYgOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIlg6L2VyaWsvUHJvZ3JhbW1lcmluZy9XZWJiL1N1cENvbS9lY29iYWxhbmNlc3VwcmVtZS9zdHlsZXMvSW1hZ2UubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsU0FBUztFQUNULHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkXCIsXCJmaWxlXCI6XCJJbWFnZS5tb2R1bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbWFnZV9idXR0b24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZV9idXR0b25faG92ZXIgOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBvcGFjaXR5OiAwLjk7XFxyXFxufVxcclxcbi5pbWFnZV9idXR0b25faG92ZXIgOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImltYWdlX2J1dHRvblwiOiBcIkltYWdlX2ltYWdlX2J1dHRvbl9fbWVhQUZcIixcblx0XCJpbWFnZV9idXR0b25faG92ZXJcIjogXCJJbWFnZV9pbWFnZV9idXR0b25faG92ZXJfXzNzNEpmXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgaW1TdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0ltYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZHVjZXIsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdWlsZGluZ0NhdGVnb3J5IGZyb20gXCIuLi9jb21wb25lbnRzL0J1aWxkaW5nQ2F0ZWdvcnlcIjtcbmltcG9ydCB7IEJ1aWxkaW5nRGF0YSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0J1aWxkaW5nXCI7XG5pbXBvcnQgeyBVbml0LCBBY3Rpb24sIEFjdGlvblR5cGUsIEZhY3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNjcmlwdC9UeXBlc1wiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnN0YW50c1wiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgZGJfZGF0YSA9IHJlcXVpcmUoXCIuLi9wdWJsaWMvdW5pdF9kYl9lY28uanNvblwiKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYjogZGJfZGF0YSB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0b3JfZmlsdGVyKGZhY3Rpb246IEZhY3Rpb24pOiAodW5pdDogVW5pdCkgPT4gYm9vbGVhbiB7XG4gIHJldHVybiAodW5pdCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB1bml0LkZhY3Rpb24gPT0gZmFjdGlvbiAmJlxuICAgICAgKHVuaXQuQ2F0ZWdvcmllcy5pbmNsdWRlcyhcIkVORVJHWVBST0RVQ1RJT05cIikgfHxcbiAgICAgICAgdW5pdC5DYXRlZ29yaWVzLmluY2x1ZGVzKFwiTUFTU1BST0RVQ1RJT05cIikpICYmXG4gICAgICB1bml0LkNhdGVnb3JpZXMuaW5jbHVkZXMoXCJTVFJVQ1RVUkVcIilcbiAgICApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmYWN0b3J5X2ZpbHRlcihmYWN0aW9uOiBGYWN0aW9uKTogKHVuaXQ6IFVuaXQpID0+IGJvb2xlYW4ge1xuICByZXR1cm4gKHVuaXQpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdW5pdC5Jc0ZhY3RvcnkgJiZcbiAgICAgIHVuaXQuRmFjdGlvbiA9PT0gZmFjdGlvbiAmJlxuICAgICAgIXVuaXQuRGVzY3JpcHRpb24uaW5jbHVkZXMoXCJIUVwiKVxuICAgICk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGFscGhhYmV0aWNfdGVjaGxldmVsX3NvcnRlcihhOiBVbml0LCBiOiBVbml0KSB7XG4gIGlmIChhLkRlc2NyaXB0aW9uIDwgYi5EZXNjcmlwdGlvbikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYS5EZXNjcmlwdGlvbiA+IGIuRGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBpZiAoYS5UZWNoTGV2ZWwgPCBiLlRlY2hMZXZlbCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYS5UZWNoTGV2ZWwgPiBiLlRlY2hMZXZlbCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBCdWlsZGluZ3NSZWR1Y2VyKFxuICBidWlsZGluZ3M6IHsgW2luZGV4OiBzdHJpbmddOiBCdWlsZGluZ0RhdGFbXSB9LFxuICBhY3Rpb246IEFjdGlvblxuKSB7XG4gIGNvbnNvbGUubG9nKFwiUkVEVUNFUlwiLCBidWlsZGluZ3MsIGFjdGlvbik7XG4gIGxldCBmYWN0aW9uID0gYWN0aW9uLmZhY3Rpb247XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFjdGlvblR5cGUuU0VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYnVpbGRpbmdzLFxuICAgICAgICBbZmFjdGlvbl06IE9iamVjdC5hc3NpZ24oW10sIGJ1aWxkaW5nc1tmYWN0aW9uXSwge1xuICAgICAgICAgIFthY3Rpb24uaW5kZXhdOiBhY3Rpb24uYnVpbGRpbmcsXG4gICAgICAgIH0pLFxuICAgICAgfTtcbiAgICBjYXNlIEFjdGlvblR5cGUuQUREOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYnVpbGRpbmdzLFxuICAgICAgICBbZmFjdGlvbl06IFsuLi5idWlsZGluZ3NbZmFjdGlvbl0sIGFjdGlvbi5idWlsZGluZ10sXG4gICAgICB9O1xuICAgIGNhc2UgQWN0aW9uVHlwZS5VUERBVEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5idWlsZGluZ3MsXG4gICAgICAgIFtmYWN0aW9uXTogT2JqZWN0LmFzc2lnbihbXSwgYnVpbGRpbmdzW2ZhY3Rpb25dLCB7XG4gICAgICAgICAgW2FjdGlvbi5pbmRleF06IGFjdGlvbi51cGRhdGUoYnVpbGRpbmdzW2ZhY3Rpb25dW2FjdGlvbi5pbmRleF0pLFxuICAgICAgICB9KSxcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhY3Rpb24gdHlwZSBmb3IgYnVpbGRpbmdzIHJlZHVjZXJcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVfYnVpbGRpbmdfbXV0YXRvcnMoXG4gIGRpc3BhdGNoZXI6IChhOiBBY3Rpb24pID0+IHZvaWQsXG4gIGZhY3Rpb246IEZhY3Rpb24sXG4gIGRiXG4pIHtcbiAgcmV0dXJuIHtcbiAgICBTZXQ6IChpbmRleCwgYnVpbGRpbmcpID0+XG4gICAgICBkaXNwYXRjaGVyKHtcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5TRVQsXG4gICAgICAgIGZhY3Rpb246IGZhY3Rpb24sXG4gICAgICAgIGJ1aWxkaW5nOiBidWlsZGluZyxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgfSksXG4gICAgQWRkOiAocmF3X2J1aWxkaW5nKSA9PlxuICAgICAgZGlzcGF0Y2hlcih7XG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuQURELFxuICAgICAgICBmYWN0aW9uOiBmYWN0aW9uLFxuICAgICAgICBidWlsZGluZzogbmV3IEJ1aWxkaW5nRGF0YShyYXdfYnVpbGRpbmcsIGRiKSxcbiAgICAgIH0pLFxuICAgIFVwZGF0ZTogKGluZGV4LCB1cGRhdGUpID0+XG4gICAgICBkaXNwYXRjaGVyKHtcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5VUERBVEUsXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgZmFjdGlvbjogZmFjdGlvbixcbiAgICAgICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgICB9KSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wczogeyBkYjogeyBsaXN0OiBVbml0W10gfSB9KSB7XG4gIGNvbnN0IFtnZW5lcmF0b3JzLCBnZW5lcmF0b3JEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKEJ1aWxkaW5nc1JlZHVjZXIsIHtcbiAgICBTRVJBUEhJTTogW10sXG4gICAgQ1lCUkFOOiBbXSxcbiAgICBVRUY6IFtdLFxuICAgIEFFT046IFtdLFxuICB9KTtcbiAgY29uc3QgW2NvbnN0cnVjdG9ycywgZmFjdG9yeURpc3BhdGNoXSA9IHVzZVJlZHVjZXIoQnVpbGRpbmdzUmVkdWNlciwge1xuICAgIFNFUkFQSElNOiBbXSxcbiAgICBDWUJSQU46IFtdLFxuICAgIFVFRjogW10sXG4gICAgQUVPTjogW10sXG4gIH0pO1xuICBjb25zdCBbZmFjdGlvbiwgU2V0RmFjdGlvbl06IFtGYWN0aW9uLCBhbnldID0gdXNlU3RhdGUoXCJTRVJBUEhJTVwiKTtcblxuICBsZXQgZ2VuZXJhdG9yX2J1aWxkaW5ncyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHByb3BzLmRiLmxpc3RcbiAgICAgICAgLmZpbHRlcihnZW5lcmF0b3JfZmlsdGVyKGZhY3Rpb24pKVxuICAgICAgICAuc29ydChhbHBoYWJldGljX3RlY2hsZXZlbF9zb3J0ZXIpLFxuICAgIFtmYWN0aW9uXVxuICApO1xuXG4gIGxldCBmYWN0b3JpZXMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBwcm9wcy5kYi5saXN0XG4gICAgICAgIC5maWx0ZXIoZmFjdG9yeV9maWx0ZXIoZmFjdGlvbikpXG4gICAgICAgIC5zb3J0KGFscGhhYmV0aWNfdGVjaGxldmVsX3NvcnRlciksXG4gICAgW2ZhY3Rpb25dXG4gICk7XG4gIGxldCB7XG4gICAgU2V0OiBTZXRHZW5CdWlsZGluZyxcbiAgICBBZGQ6IEFkZEdlbkJ1aWxkaW5nLFxuICAgIFVwZGF0ZTogVXBkYXRlR2VuQnVpbGRpbmcsXG4gIH0gPSB1c2VNZW1vKFxuICAgICgpID0+IGdlbmVyYXRlX2J1aWxkaW5nX211dGF0b3JzKGdlbmVyYXRvckRpc3BhdGNoLCBmYWN0aW9uLCBwcm9wcy5kYiksXG4gICAgW2ZhY3Rpb25dXG4gICk7XG5cbiAgbGV0IHtcbiAgICBTZXQ6IFNldEZhY0J1aWxkaW5nLFxuICAgIEFkZDogQWRkRmFjQnVpbGRpbmcsXG4gICAgVXBkYXRlOiBVcGRhdGVGYWNCdWlsZGluZyxcbiAgfSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gZ2VuZXJhdGVfYnVpbGRpbmdfbXV0YXRvcnMoZmFjdG9yeURpc3BhdGNoLCBmYWN0aW9uLCBwcm9wcy5kYiksXG4gICAgW2ZhY3Rpb25dXG4gICk7XG4gIGxldCBmYWN0aW9ucyA9IFtcIlNFUkFQSElNXCIsIFwiQ1lCUkFOXCIsIFwiVUVGXCIsIFwiQUVPTlwiXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZV9oZWFkZXJ9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgICAgICBzdHlsZXMuZmFjdGlvbl9idXR0b25fY29udGFpbmVyLFxuICAgICAgICAgICAgICBpbVN0eWxlLmltYWdlX2J1dHRvbixcbiAgICAgICAgICAgICAgaW1TdHlsZS5pbWFnZV9idXR0b25faG92ZXIsXG4gICAgICAgICAgICBdLmpvaW4oXCIgXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtmYWN0aW9ucy5tYXAoKGZhYykgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmFjdGlvbl9idXR0b259XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gU2V0RmFjdGlvbihmYWMpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e0ljb24oZmFjKX0+PC9pbWc+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYWN0aW9uX2hlYWRlcl9kaXZ9PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmZhY3Rpb25faGVhZGVyfT57ZmFjdGlvbn08L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHNfZGl2fT5Ub3RhbCBTdGF0czwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPEJ1aWxkaW5nQ2F0ZWdvcnlcbiAgICAgICAgICAgIGtleT1cImdlblwiXG4gICAgICAgICAgICBjYXRlZ29yeV9idWlsZGluZ3M9e2dlbmVyYXRvcl9idWlsZGluZ3N9XG4gICAgICAgICAgICBidWlsZGluZ3M9e2dlbmVyYXRvcnNbZmFjdGlvbl19XG4gICAgICAgICAgICBTZXRCdWlsZGluZz17U2V0R2VuQnVpbGRpbmd9XG4gICAgICAgICAgICBBZGRCdWlsZGluZz17QWRkR2VuQnVpbGRpbmd9XG4gICAgICAgICAgICBVcGRhdGVCdWlsZGluZz17VXBkYXRlR2VuQnVpbGRpbmd9XG4gICAgICAgICAgICBkYj17cHJvcHMuZGJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZlcnRpY2FsX2RpdmlkZXJ9PjwvZGl2PlxuICAgICAgICAgIDxCdWlsZGluZ0NhdGVnb3J5XG4gICAgICAgICAgICBrZXk9XCJmYWNcIlxuICAgICAgICAgICAgY2F0ZWdvcnlfYnVpbGRpbmdzPXtmYWN0b3JpZXN9XG4gICAgICAgICAgICBidWlsZGluZ3M9e2NvbnN0cnVjdG9yc1tmYWN0aW9uXX1cbiAgICAgICAgICAgIFNldEJ1aWxkaW5nPXtTZXRGYWNCdWlsZGluZ31cbiAgICAgICAgICAgIEFkZEJ1aWxkaW5nPXtBZGRGYWNCdWlsZGluZ31cbiAgICAgICAgICAgIFVwZGF0ZUJ1aWxkaW5nPXtVcGRhdGVGYWNCdWlsZGluZ31cbiAgICAgICAgICAgIGRiPXtwcm9wcy5kYn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIHsvKlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vSW1hZ2UubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL0ltYWdlLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9JbWFnZS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=