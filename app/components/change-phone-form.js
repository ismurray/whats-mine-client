import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  actions: {
    submit () {
      console.log(this.get('phone'))
      this.sendAction('submit', this.get('phone'))
    },

    reset () {
      this.sendAction('reset')
    }
  }
})
