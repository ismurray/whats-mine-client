import Component from '@ember/component'

export default Component.extend({
  // willDestroyElement is a component func that runs just before the component
  // is removed from the DOM (for instance on nav away)
  willDestroyElement () {
    // the next line insures that we inherit all of the default behavior of this
    // func instead of overwriting it all
    this._super(...arguments)
    this.get('model').rollbackAttributes()
  },
  actions: {
    saveItem (item) {
      this.sendAction('saveItem', item)
    },
    cancel (item) {
      this.sendAction('cancel', item)
    }
  }
})
