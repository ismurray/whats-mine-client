import Component from '@ember/component'

export default Component.extend({
  didInsertElement () {
    this.set('searchQuery', '')
  },

  actions: {
    search (searchQuery) {
      // adding a space prevents errors if a user tries to enter an empty search
      searchQuery += ' '
      console.log('searchQuery is ', searchQuery)
      this.sendAction('search', searchQuery)
    }
  }
})
