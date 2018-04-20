import Route from '@ember/routing/route'

export default Route.extend({
  model: function (params) {
    const id = params.box_id
    return this.get('store').findRecord('box', id)
  },
  actions: {
    deleteBox (box) {
      // console.log('delete', box.get('name'))
      box.destroyRecord()
        .then((response) => {
          this.toast.success('Box Successfully Removed', 'Success')
          return response
        })
        .then(() => this.transitionTo('boxes'))
        .catch(() => this.toast.error('Error Removing the Box', 'Failure'))
    },
    editBoxView (box) {
      this.transitionTo('/boxes/' + box.get('id') + '/edit')
    }
  }
})
