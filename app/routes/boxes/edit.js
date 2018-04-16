import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  auth: service(),

  model: function (params) {
    const id = params.box_id
    console.log('id is ', id)
    return this.get('store').findRecord('box', id)
  },
  actions: {
    updateBox (box) {
      box.save()
        .then((box) => this.transitionTo('/boxes/' + box.get('id')))
    },
    createUsersBox (usersBoxPojo) {
      console.log('in the route babyyy', usersBoxPojo)
      const usersBox = this.get('store').createRecord('users-box', usersBoxPojo)
      usersBox.save()
        .then((usersBox) => this.transitionTo('/boxes/' + usersBox.get('box_id')))
    },
    updatePermission (permission) {
      permission.save()
    },
    deletePermission (permission) {
      permission.destroyRecord()
    },
    createPermission (usersBoxPojo) {
      const boxId = usersBoxPojo.box_id
      return this.get('auth').createPermission(usersBoxPojo)
              .then(() => this.store.findRecord('box', boxId, { reload: true }))
    }
  }
})
