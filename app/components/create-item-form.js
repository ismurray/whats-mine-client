import Component from '@ember/component'

export default Component.extend({
  didInsertElement () {
    this.set('newItem', {
      name: '',
      value: null
    })
  },
  actions: {
    createItem () {
      console.log('new name is ', this.get('newItem.name'))
      console.log('new value is ', this.get('newItem.value'))
      this.sendAction('createItem', this.get('newItem'))
    }
  }
})
