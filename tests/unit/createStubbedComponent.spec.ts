import { createStubbedComponent } from '../../src/createStubbedComponent'

describe('createStubbedComponent', () => {
  it('should be able to create stubbed component', () => {
    const component = createStubbedComponent()

    expect(component).toEqual({
      template: `<p></p>`
    })
  })

  it('should be able to create stubbed component with slots', () => {
    const component = createStubbedComponent({ slots: ['default', 'slot1'] })

    expect(component).toEqual({
      template: `<p><slot name="default" /> <slot name="slot1" /></p>`
    })
  })

  it('should be able to create stubbed component with emitted events array', () => {
    const component = createStubbedComponent({ events: ['emit1', 'emit2'] })

    expect(component).toEqual({
      template: `<p @emit1="$emit('emit1')" @emit2="$emit('emit2')"></p>`
    })
  })

  it('should be able to create stubbed component with emitted events object', () => {
    const self = { $emit: jest.fn() }
    const component = createStubbedComponent({
      events: {
        emit1: 'foo',
        emit2: { foo: 'bar' },
        emit3: null
      }
    })

    expect(component.template).toEqual(`<p @emit1='emit1' @emit2='emit2' @emit3='emit3'></p>`)
    expect(Object.keys(component.methods)).toEqual(['emit1', 'emit2', 'emit3'])

    component.methods.emit1.bind(self)()
    expect(self.$emit).toHaveBeenCalledWith('emit1', 'foo')

    component.methods.emit2.bind(self)()
    expect(self.$emit).toHaveBeenCalledWith('emit2', { foo: 'bar' })

    component.methods.emit3.bind(self)()
    expect(self.$emit).toHaveBeenCalledWith('emit3', null)
  })
})
