import DS from 'ember-data'

export default DS.Model.extend({
  writeAccess: DS.attr(),
  user_id: DS.attr(),
  box_id: DS.attr(),
  user: DS.belongsTo('user', { inverse: 'permissions' }),
  box: DS.belongsTo('box', { inverse: 'permissions' })
})
