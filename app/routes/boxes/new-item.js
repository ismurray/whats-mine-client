import Route from '@ember/routing/route'

export default Route.extend({
  // model: function (params) {
  //   console.log('box_id is ', params.box_id)
  //   const id = params.box_id
  //   return this.get('store').findRecord('box', id)
  // },
  actions: {
    createNewItem (itemPojo) {
      console.log('in the route babyyy')
      const item = this.get('store').createRecord('item', itemPojo)
      item.save()
        .then((item) => {
          this.toast.success('Item Successfully Created', 'Success', {preventDuplicates: false})
          return item
        })
        // transition to the item view of the newly created item
        .then((item) => this.transitionTo('/items/' + item.get('id')))
        .catch(() => this.toast.error('Error Creating an Item', 'Failure', {preventDuplicates: false}))
    }
  }
})
