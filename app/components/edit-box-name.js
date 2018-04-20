import Component from '@ember/component'

export default Component.extend({
  didInsertElement () {
    const aBox = this.get('model')
    aBox.rollbackAttributes()
  },
  actions: {
    saveBox (box) {
      this.sendAction('saveBox', box)
    },
    cancel (box) {
      this.sendAction('cancel', box)
    }
  }
})
