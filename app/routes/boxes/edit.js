import Route from '@ember/routing/route'

export default Route.extend({
  model: function (params) {
    const id = params.box_id
    console.log('id is ', id)
    return this.get('store').findRecord('box', id)
  },
  actions: {
    updateBox (box) {
      box.save()
      .then((box) => this.transitionTo('/boxes/' + box.get('id')))
    }
  }
})
