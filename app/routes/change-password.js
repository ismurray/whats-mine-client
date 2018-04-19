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
      if (newPhone.split('_').length === 1 && newPhone.length === 12) {
        const data = {
          phone: newPhone,
          userId: this.get('auth.credentials.id')
        }
        this.get('auth').changePhone(data)
          .then((result) => {
            this.get('auth.credentials').set('phone', result.user.phone)
          })
          .then(() => {
            this.toast.success('Phone number saved', 'Success', {preventDuplicates: false})
          })
          .catch(() => {
            this.toast.error('There was a problem. Please try again.', 'Error', {preventDuplicates: false})
            this.get('model').rollbackAttributes()
          })
      } else {
        this.toast.error('You must enter a full phone number.', 'Error', {preventDuplicates: false})
        this.get('model').rollbackAttributes()
        console.log('first catch', this.get('model'))
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
          this.toast.success('Changed your password!', 'Success', {preventDuplicates: false})
        })
        .then(() => {
          this.toast.info('You have been signed out.', 'Status', {preventDuplicates: false})
        })
        .catch(() => {
          this.toast.error('There was a problem. Please try again.', 'Error', {preventDuplicates: false})
        })
      } else {
        this.toast.warning('Your new passwords must match.', 'Error', {preventDuplicates: false})
      }
    }
  }
})
