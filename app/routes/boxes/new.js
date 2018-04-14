import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    createNewBox (boxPojo) {
      console.log('in the route babyyy')
      const box = this.get('store').createRecord('box', boxPojo)
      box.save()
        // transition to the box view of the newly created box
        .then((box) => this.transitionTo('/boxes/' + box.get('id')))
    }
  }
})
