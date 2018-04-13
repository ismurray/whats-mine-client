import Route from '@ember/routing/route'

export default Route.extend({
  model: function (params) {
    const id = params.item_id
    return this.get('store').findRecord('item', id)
  }
})
