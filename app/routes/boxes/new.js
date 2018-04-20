import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    createNewBox (boxPojo) {
      // console.log('in the route babyyy')
      const box = this.get('store').createRecord('box', boxPojo)
      box.save()
        .then((response) => {
          this.toast.success('Box Created', 'Success', {preventDuplicates: false})
          return response
        })
        // transition to the box view of the newly created box
        .then((box) => this.transitionTo('/boxes/' + box.get('id')))
        .catch(() => this.toast.error('Error Creating this Box', 'Failure', {preventDuplicates: false}))
    }
  }
})
