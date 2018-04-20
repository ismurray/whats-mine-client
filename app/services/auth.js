import { bool } from '@ember/object/computed'
import { storageFor } from 'ember-local-storage'
import Service, { inject as service } from '@ember/service'

export default Service.extend({
  ajax: service(),
  credentials: storageFor('auth'),
  isAuthenticated: bool('credentials.token'),

  createPermission (usersBoxPojo) {
    return this.get('ajax').post('/users_boxes', {
      data: {
        users_box: {
          email: usersBoxPojo.email,
          box_id: usersBoxPojo.box_id,
          write_access: usersBoxPojo.writeAccess
        }
      }
    })
  },

  signUp (credentials) {
    // console.log('credentials are', credentials)
    // debugger
    if (credentials.phone === undefined) {
      credentials.phone = '___-___-____'
    }
    // debugger
    // console.log('now credentials.phone is', credentials.phone)
    return this.get('ajax').post('/sign-up', {
      data: {
        credentials: {
          email: credentials.email,
          password: credentials.password,
          password_confirmation: credentials.passwordConfirmation,
          phone: credentials.phone
        }
      }
    })
  },

  signIn (credentials) {
    return this.get('ajax').post('/sign-in', {
      data: {
        credentials: {
          email: credentials.email,
          password: credentials.password
        }
      }
    })
    .then((result) => {
      this.get('credentials').set('id', result.user.id)
      this.get('credentials').set('email', result.user.email)
      this.get('credentials').set('token', result.user.token)
      this.get('credentials').set('phone', result.user.phone)
      // console.log(this.get('credentials.phone'))
    })
  },

  changePassword (passwords) {
    return this.get('ajax').patch(`/change-password`, {
      data: {
        passwords: {
          old: passwords.previous,
          new: passwords.next
        }
      }
    })
  },

  changePhone (data) {
    return this.get('ajax').patch(`/users/${data.userId}`, {
      data: {
        user: {
          phone: data.phone
        }
      }
    })
  },

  twilioMessage (data) {
    // console.log('data is ', data)
    return this.get('ajax').post(`/twilio/text`, {
      data: data
    })
  },

  signOut () {
    return this.get('ajax').del(`/sign-out`)
    .finally(() => this.get('credentials').reset())
  }
})
