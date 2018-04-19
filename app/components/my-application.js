import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  auth: service(),

  user: alias('auth.credentials.email'),
  isAuthenticated: alias('auth.isAuthenticated'),

  didInsertElement () {
    this.set('searchQuery', '')
  },

  actions: {
    signOut () {
      this.sendAction('signOut')
    },
    search (searchQuery) {
      // adding a space prevents errors if a user tries to enter an empty search
      searchQuery += ' '
      console.log('searchQuery is ', searchQuery)
      this.sendAction('search', searchQuery)
    }
  }
})
