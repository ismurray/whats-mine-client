import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  auth: service(),
  flashMessages: service(),

  model () {
    return RSVP.Promise.resolve({})
  },

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
        .then(() => this.transitionTo('application'))
        .then(() => this.toast.success('Thanks for signing in!', 'Success', {preventDuplicates: false}))
        .catch(() => {
          this.toast.error('There was a problem. Please try again.', 'Error', {preventDuplicates: false})
        })
    }
  }
})
