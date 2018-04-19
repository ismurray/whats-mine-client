import Component from '@ember/component'

export default Component.extend({
  didInsertElement () {
    this.set('newItem', {
      name: null,
      value: null
    })
  },
  actions: {
    createItem (box) {
      console.log('new name is ', this.get('newItem.name'))
      console.log('new value is ', this.get('newItem.value'))
      this.set('newItem.box', box)
      this.sendAction('createItem', this.get('newItem'))
    }
  }
})
