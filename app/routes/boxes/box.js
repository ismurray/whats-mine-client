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
          this.toast.success('Box Successfully Removed', 'Success', {preventDuplicates: false})
          return response
        })
        .then(() => this.transitionTo('boxes'))
        .catch(() => this.toast.error('Error Removing the Box', 'Failure', {preventDuplicates: false}))
    },
    editBoxView (box) {
      this.transitionTo('/boxes/' + box.get('id') + '/edit')
    }
  }
})
