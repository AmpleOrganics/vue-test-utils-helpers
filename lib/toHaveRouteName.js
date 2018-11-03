"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveRouteName = toHaveRouteName;

function toHaveRouteName(wrapper, expected) {
  if (!wrapper || !wrapper.vm || !wrapper.vm.$route) {
    throw new Error('wrapper $route is not initialized');
  }

  const routeName = wrapper.vm.$route.name;
  const pass = wrapper.vm.$route.name === expected;

  if (pass) {
    return {
      message: () => `expected ${routeName} not to be ${expected}`,
      pass: true
    };
  } else {
    return {
      message: () => `expected ${routeName} to be ${expected}`,
      pass: false
    };
  }
}