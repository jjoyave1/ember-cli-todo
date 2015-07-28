import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
}).reopenClass({

  FIXTURES: [
    {
      id: 1,
      title: "Complete Ember.js Tutorial",
      isCompleted: false
    },
    {
      id: 2,
      title: "Check out soe more Ember stuff",
      isCompleted: false
    },
    {
      id: 3,
      title: "Solve world hunger (with Ember)",
      isCompleted: false
    }
  ]

});
