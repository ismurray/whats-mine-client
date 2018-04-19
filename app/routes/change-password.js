import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  auth: service(),
  flashMessages: service(),

  model () {
    return RSVP.Promise.resolve({
      user: this.get('auth.credentials'),
      passwords: {}
    })
  },

  actions: {
    updatePhone (newPhone) {
      console.log('in the route', newPhone)
      // make sure user entered a new number that is proper length and has no
      // underscores (which the phone-number add-on replaces empty spaces with)
      // debugger
      if (newPhone.split('_').length === 1 &&
      //     newPhone !== this.get('auth.credentials.phone') &&
          newPhone.length === 12) {
        const data = {
          phone: newPhone,
          userId: this.get('auth.credentials.id')
        }
        this.get('auth').changePhone(data)
          .then((result) => {
            this.get('auth.credentials').set('phone', result.user.phone)
          })
          .then(() => {
            this.get('flashMessages')
            .success('Successfully changed your phone number!')
          })
          .catch(() => {
            this.get('flashMessages')
            .danger('There was a problem. Please try again.')
            this.get('model').rollbackAttributes()
            console.log('first catch', this.get('model'))
          })
        // },
      // } else if (newPhone === this.get('auth.credentials.phone')) {
      //   debugger
      //   this.get('flashMessages')
      //   .danger('You must enter a new number')
      } else {
        this.get('flashMessages')
        .danger('You must enter a full phone number.')
        .then(() => {
          this.get('model').rollbackAttributes()
          console.log('first catch', this.get('model'))
        })
      }
    },
    cancelChanges () {
      this.transitionTo('application')
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
