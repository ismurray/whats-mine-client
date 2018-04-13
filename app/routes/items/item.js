import Route from '@ember/routing/route'

export default Route.extend({
  model: function (params) {
    const id = params.item_id
    return this.get('store').findRecord('item', id)
  },
  actions: {
    deleteItem (item) {
      console.log('delete', item.get('name'))
      item.destroyRecord()
        .then(() => this.transitionTo('items'))
        .catch(console.error)
    }
  }
})
