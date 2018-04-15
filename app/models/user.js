import DS from 'ember-data'

export default DS.Model.extend({
  email: DS.attr('string'),
  items: DS.attr(),
  boxes: DS.hasMany('box')
})
