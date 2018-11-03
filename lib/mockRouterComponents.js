"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockRouterComponents = mockRouterComponents;

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mockRouterComponents(routes = []) {
  const routesToClear = (0, _lodash.default)(routes);
  routesToClear.forEach(route => {
    route.component = {
      template: '<p>Foo</p>'
    };

    if (route.children && route.children.length) {
      mockRouterComponents(route.children);
    }
  });
  return routesToClear;
}