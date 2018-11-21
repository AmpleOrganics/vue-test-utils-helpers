"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStubbedComponent = createStubbedComponent;

function createStubbedComponent() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!options.events) {
    return {
      template: "<p>".concat(generateSlotString(options.slots), "</p>")
    };
  }

  if (Array.isArray(options.events)) {
    return generateComponentForEventsArray(options);
  }

  return generateComponentForEventsObject(options);
}

function generateSlotString(slots) {
  if (Array.isArray(slots) && slots.length) {
    return slots.map(function (slot) {
      return "<slot name=\"".concat(slot, "\" />");
    }).join(' ');
  }

  return "";
}

function generateComponentForEventsArray(options) {
  var eventEmittersString = options.events.map(function (event) {
    return "@".concat(event, "=\"$emit('").concat(event, "')\"");
  }).join(' ');
  return {
    template: "<p ".concat(eventEmittersString, ">").concat(generateSlotString(options.slots), "</p>")
  };
}

function generateComponentForEventsObject(options) {
  var eventEmittersString = Object.keys(options.events).map(function (event) {
    return "@".concat(event, "='").concat(event, "'");
  }).join(' ');
  var component = {
    template: "<p ".concat(eventEmittersString, ">").concat(generateSlotString(options.slots), "</p>"),
    methods: {}
  };
  Object.keys(options.events).forEach(function (event) {
    component.methods[event] = function () {
      this.$emit("".concat(event), options.events[event]);
    };
  });
  return component;
}