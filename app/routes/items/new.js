import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    createNewItem (itemPojo) {
      console.log('in the route babyyy')
      const item = this.get('store').createRecord('item', itemPojo)
      item.save()
        // transition to the item view of the newly created item
        .then((item) => this.transitionTo('/items/' + item.get('id')))
    }
  }
})
