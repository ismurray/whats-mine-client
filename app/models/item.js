import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  value: DS.attr('number'),
  box: DS.belongsTo('box')
})
