import Route from '@ember/routing/route'

export default Route.extend({
  model: function (params) {
    const id = params.box_id
    return this.get('store').findRecord('box', id)
  },
  actions: {
    deleteBox (box) {
      // console.log('delete', box.get('name'))
      if (confirm('Are you sure you want to delete this box? The box and all of it\'s contents will be destroyed.')) {
        box.destroyRecord()
          .then((response) => {
            this.toast.success('Box Successfully Removed', 'Success')
            return response
          })
          .then(() => this.transitionTo('boxes'))
          .catch(() => this.toast.error('Error Removing the Box', 'Failure'))
      }
    },
    removeBoxFromReader (box) {
      // console.log('delete', box.get('name'))
      if (confirm('Are you sure you want to remove this box from your list?')) {
        box.destroyRecord()
          .then((response) => {
            this.toast.success('Box Successfully Removed', 'Success')
            return response
          })
          .then(() => this.transitionTo('boxes'))
          .catch(() => this.toast.error('Error Removing the Box', 'Failure'))
      }
    },
    editBoxView (box) {
      this.transitionTo('/boxes/' + box.get('id') + '/edit')
    }
  }
})
