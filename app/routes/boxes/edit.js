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
    },
    createUsersBox (usersBoxPojo) {
      console.log('in the route babyyy', usersBoxPojo)
      const usersBox = this.get('store').createRecord('users-box', usersBoxPojo)
      usersBox.save()
        .then((usersBox) => this.transitionTo('/boxes/' + usersBox.get('box_id')))
    }
  }
})
