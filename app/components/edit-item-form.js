import Component from '@ember/component'

export default Component.extend({
  didInsertElement () {
    const anItem = this.get('model')
    anItem.rollbackAttributes()
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
