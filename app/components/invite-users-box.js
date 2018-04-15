import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  store: service(),
  didInsertElement () {
    this.set('newUsersBox', {
      user_id: null,
      box_id: null,
      write_access: false
    })
  },
  actions: {
    addUserToBox (box) {
      console.log('write_access is', this.get('newUsersBox.write_access'))
      console.log('user_id is', this.get('newUsersBox.user_id'))
      this.set('newUsersBox.box_id', box.get('id'))
      console.log('box_id is', this.get('newUsersBox.box_id'))
      this.sendAction('addUserToBox', this.get('newUsersBox'))
    }
  }
})
