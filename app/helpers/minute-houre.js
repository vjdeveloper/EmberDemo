import Ember from 'ember';

export function minuteHoure(mins/*, hash*/) {
    var d = new Date(),
    hours = Math.floor(mins / 60),
    minutes = mins % 60;
    d.setHours(hours);
    d.setMinutes(minutes);
    hours = ("0" + d.getHours()).slice(-2);
    minutes = ("0" + d.getMinutes()).slice(-2);
  return hours + ':' + minutes;
}

export default Ember.Helper.helper(minuteHoure);
