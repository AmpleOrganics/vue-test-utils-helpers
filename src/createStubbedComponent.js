export function createStubbedComponent (options = {}) {
  if (!options.events) {
    return {
      template: `<p>${generateSlotString(options.slots)}</p>`
    }
  }

  if (Array.isArray(options.events)) {
    return generateComponentForEventsArray(options)
  }

  return generateComponentForEventsObject(options)
}

function generateSlotString (slots) {
  if (Array.isArray(slots) && slots.length) {
    return slots.map(slot => `<slot name="${slot}" />`).join(' ')
  }
  return ``
}

function generateComponentForEventsArray (options) {
  const eventEmittersString = options.events.map(event => `@${event}="$emit('${event}')"`).join(' ')

  return {
    template: `<p ${eventEmittersString}>${generateSlotString(options.slots)}</p>`
  }
}

function generateComponentForEventsObject (options) {
  const eventEmittersString = Object.keys(options.events).map(event => `@${event}='${event}'`).join(' ')
  const component = {
    template: `<p ${eventEmittersString}>${generateSlotString(options.slots)}</p>`,
    methods: {}
  }

  Object.keys(options.events).forEach(event => {
    component.methods[event] = function () {
      this.$emit(`${event}`, options.events[event])
    }
  })

  return component
}
