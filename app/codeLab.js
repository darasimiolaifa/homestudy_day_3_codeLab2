'use strict';

module.exports = {
	
	solution : class StringSplosion {

		constructor(aString) {

			this.aString = aString;
		}

		manipulate() {
			
			let counter = 0;
			let newString = '';
			
			while(counter <= this.aString.length) {
			  
			  newString += this.aString.substring(0, counter);
			  counter += 1;
			}

			return newString;
		}
	}
}