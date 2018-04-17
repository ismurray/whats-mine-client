import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  items: DS.hasMany('item'),
  users: DS.hasMany('user'),
  permissions: DS.hasMany('users-box', { inverse: 'box' }),
  editable: DS.attr()
})
