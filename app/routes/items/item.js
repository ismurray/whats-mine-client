import Route from '@ember/routing/route'

export default Route.extend({
  model: function (params) {
    const id = params.item_id
    return this.get('store').findRecord('item', id)
  },
  actions: {
    deleteItem (item) {
      console.log('delete', item.get('name'))
      const box = item.get('box')
      item.destroyRecord()
        .then(() => this.transitionTo('boxes.box', box))
        .catch(console.error)
    },
    editItemView (item) {
      this.transitionTo('/items/' + item.get('id') + '/edit')
    }
  }
})
