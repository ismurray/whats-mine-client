import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  auth: service(),

  model: function (params) {
    const id = params.box_id
    // console.log('id is ', id)
    return this.get('store').findRecord('box', id)
  },
  actions: {
    updateBox (box) {
      box.save()
        .then((boxResponse) => {
          this.toast.success('Box Name Saved', 'Success', {preventDuplicates: false})
          // console.log('response is ', boxResponse.get('name'))
          return boxResponse
        })
        .then((boxResponse) => this.transitionTo('/boxes/' + boxResponse.get('id')))
        .catch((boxResponse) => {
          this.toast.error('Error Renaming the Box', 'Failure', {preventDuplicates: false})
          box.rollbackAttributes()
        })
    },
    cancelChanges (box) {
      // console.log('cancel!')
      box.rollbackAttributes()
      this.transitionTo('boxes.box', box.get('id'))
      this.toast.info('Changes discarded', 'Status', {preventDuplicates: false})
    },
    updatePermission (permission) {
      permission.save()
        .then((response) => {
          this.toast.success('Box Permission Saved', 'Success', {preventDuplicates: false})
          return response
        })
        .catch(() => this.toast.error('Error Saving Box Permission', 'Failure', {preventDuplicates: false}))
    },
    deletePermission (permission) {
      permission.destroyRecord()
        .then((response) => {
          this.toast.success('Box Permission Deleted', 'Success', {preventDuplicates: false})
          return response
        })
        .catch(() => this.toast.error('Error Deleting Box Permission', 'Failure', {preventDuplicates: false}))
    },
    createPermission (usersBoxPojo) {
      const boxId = usersBoxPojo.box_id
      return this.get('auth').createPermission(usersBoxPojo)
              .then(() => this.store.findRecord('box', boxId, { reload: true }))
              .then((response) => {
                this.toast.success('User given access to this Box', 'Success', {preventDuplicates: false})
                return response
              })
              .catch(() => this.toast.error('Error Sharing Box with User', 'Failure', {preventDuplicates: false}))
    }
  }
})
