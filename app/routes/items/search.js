import Route from '@ember/routing/route'

export default Route.extend({
  model: function () {
    return this.get('store').findAll('item')
  },
  actions: {
    search (searchQuery) {
      this.transitionTo('items.search.entry', searchQuery)
    }
  }
})
