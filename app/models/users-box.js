import DS from 'ember-data'

export default DS.Model.extend({
  write_access: DS.attr(),
  user_id: DS.attr(),
  box_id: DS.attr()
})
