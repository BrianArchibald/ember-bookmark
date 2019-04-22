import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  username: attr('string'),
  email: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  avatar: attr('string'),
  isAdmin: attr('boolean', {
    defaultValue: false
  }),
  created: attr('date', {
    defaultValue() { return new Date(); }
  })
});
