import Route from '@ember/routing/route'

export default Route.extend({
  model: function (params) {
    const id = params.item_id
    console.log('id is ', id)
    return this.get('store').findRecord('item', id)
  },
  actions: {
    updateItem (item) {
      item.save()
        .then((response) => {
          this.toast.success('Item Saved', 'Success', {preventDuplicates: false})
          return response
        })
        .then((item) => this.transitionTo('/items/' + item.get('id')))
        .catch(() => this.toast.error('Error Saving this Item', 'Failure', {preventDuplicates: false}))
    }
  }
})
