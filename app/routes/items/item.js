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
    sendMessage (item, permission) {
      console.log('clicked message button', item)
      const data = {
        twilio: {
          user_id: permission.get('user.id'),
          box_id: item.get('box.id'),
          item_id: item.get('id'),
          body: 'Hi hello'
        }
      }
      this.get('auth').twilioMessage(data)
    }
  }
})
