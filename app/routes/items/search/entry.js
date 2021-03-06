import Route from '@ember/routing/route'

export default Route.extend({
  model: function (params) {
    const searchQuery = params.searchQuery
    // console.log('searchQuery is ', searchQuery)
    return this.get('store').query('item', { search: searchQuery })
            .then((results) => {
              // if there are no results, set model to false, so the hbs file renders differently
              if (results.get('lastObject') === undefined) {
                results = false
                this.toast.info('No Items found that match your search', 'Failure')
              } else {
                this.toast.success('Items Found!', 'Success')
              }
              return results
            })
  },
  actions: {
    search (searchQuery) {
      this.transitionTo('items.search.entry', searchQuery)
    }
  }
})
