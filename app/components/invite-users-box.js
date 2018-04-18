import Component from '@ember/component'

export default Component.extend({
  didInsertElement () {
    this.set('newUsersBox', {
      email: null,
      box_id: null,
      writeAccess: false
    })
  },
  actions: {
    addUserToBox (box) {
      console.log('writeAccess is', this.get('newUsersBox.writeAccess'))
      console.log('email is', this.get('newUsersBox.email'))
      this.set('newUsersBox.box_id', box.get('id'))
      console.log('box_id is', this.get('newUsersBox.box_id'))
      this.sendAction('addUserToBox', this.get('newUsersBox'))
    }
  }
})
