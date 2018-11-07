"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockRouterComponents = mockRouterComponents;

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mockRouterComponents(routes) {
  var dummyComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    template: '<p>Foo</p>'
  };
  var routesToClear = (0, _lodash.default)(routes);
  routesToClear.forEach(function (route) {
    route.component = dummyComponent;

    if (route.children && route.children.length) {
      route.children = mockRouterComponents(route.children, dummyComponent);
    }
  });
  return routesToClear;
}