import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  auth: service(),

  model: function (params) {
    const id = params.item_id
    return this.get('store').findRecord('item', id)
  },
  actions: {
    deleteItem (item) {
      console.log('delete', item.get('name'))
      const box = item.get('box')
      item.destroyRecord()
        .then(() => this.transitionTo('boxes.box', box))
        .catch(console.error)
    },
    sendMessage (permission) {
      console.log('clicked message button', permission)
      const data = {
        user_id: permission.get('user.id'),
        body: 'Hi hello'
      }
      this.get('auth').twilioMessage(data)
    }
  }
})
