import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  auth: service(),
  flashMessages: service(),

  actions: {
    signOut () {
      this.get('auth').signOut()
        .then(() => this.get('store').unloadAll())
        .then(() => this.transitionTo('sign-in'))
        .then(() => {
          this.toast.info('You have been signed out.', 'Success')
        })
        .catch(() => {
          this.toast.error('There was a problem. Are you sure you\'re signed-in?', 'Error')
        })
    },

    error (reason) {
      // console.error(reason)

      const unauthorized = reason.errors && reason.errors.some((error) =>
        error.status === '401'
      )

      if (unauthorized) {
        this.toast.error('You must be authenticated to access that page.', 'Error')
        this.transitionTo('/sign-in')
      } else {
        this.toast.error('There was a problem. Please try again.', 'Error')
      }

      return false
    }
  }
})
