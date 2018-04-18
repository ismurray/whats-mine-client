import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  auth: service(),
  flashMessages: service(),

  model () {
    return RSVP.Promise.resolve({
      phone: this.get('auth.credentials.phone')
    })
  },

  actions: {
    updatePhone (newPhone) {
      console.log('in the route', newPhone)
      const data = {
        phone: newPhone,
        userId: this.get('auth.credentials.id')
      }
      console.log('data is ', data)
      this.get('auth').changePhone(data)
        // .then(() => this.get('auth').signOut())
        // .then(() => this.transitionTo('sign-in'))
        .then((res) => {
          this.set('auth.credentials.phone', res.user.phone)
          console.log(this.get('auth.credentials.phone'))
          console.log('res is', res)
          return res
        })
        .then(() => {
          this.get('flashMessages')
          .success('Successfully changed your phone number!')
        })
        .then(() => {
          this.get('flashMessages').warning('You have been signed out.')
        })
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Please try again.')
        })
    },
    changePassword (passwords) {
      if (passwords.next === passwords.confirmNext) {
        this.get('auth').changePassword(passwords)
        .then(() => this.get('auth').signOut())
        .then(() => this.transitionTo('sign-in'))
        .then(() => {
          this.get('flashMessages')
          .success('Successfully changed your password!')
        })
        .then(() => {
          this.get('flashMessages').warning('You have been signed out.')
        })
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Please try again.')
        })
      } else {
        this.get('flashMessages')
        .danger('Your new passwords must match.')
      }
    }
  }
})
