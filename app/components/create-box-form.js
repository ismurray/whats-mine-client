import Component from '@ember/component'

export default Component.extend({
  didInsertElement () {
    this.set('newBox', {
      name: ''
    })
  },
  actions: {
    createBox () {
      console.log('new name is ', this.get('newBox.name'))
      this.sendAction('createBox', this.get('newBox'))
    }
  }
})
