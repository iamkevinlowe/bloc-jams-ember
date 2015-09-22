import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params, hash) {
    let value = params[0];
    return ++value;
  }
});