import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  auth: service(),

  model: function (params) {
    const id = params.item_id
    return this.get('store').findRecord('item', id)
  },
  afterModel (item) {
    item.rollbackAttributes()
  },
  actions: {
    deleteItem (item) {
      // console.log('delete', item.get('name'))
      const box = item.get('box')
      item.destroyRecord()
        .then((response) => {
          this.toast.success('Item Deleted', 'Success')
          return response
        })
        .then(() => this.transitionTo('boxes.box', box))
        .catch(() => this.toast.error('Error Deleting this Item', 'Failure'))
    },
    sendMessage (item, permission) {
      const body = `Hi ${permission.get('user.email')}, ${this.get('auth.credentials.email')} sent a reminder about Item: '${item.get('name')}' in Box: '${item.get('box.name')}'!`
      const data = {
        twilio: {
          user_id: permission.get('user.id'),
          box_id: item.get('box.id'),
          item_id: item.get('id'),
          body: 'Hi hello'
        }
      }
      this.get('auth').twilioMessage(data)
        .then((response) => {
          this.toast.success(body, 'Text Sent! Your message:')
          return response
        })
        .catch(() => this.toast.error(`${permission.get('user.email')} may not have a valid phone number listed.`, 'Text not sent'))
    }
  }
})
