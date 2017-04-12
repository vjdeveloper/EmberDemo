import Ember from 'ember';
 
export default Ember.Controller.extend({
	actions: {
		clicked(event, jsEvent, view){
			console.log(`${event.title} was clicked!`)
			// Prints: Hackathon was clicked! 
		}
	}
});