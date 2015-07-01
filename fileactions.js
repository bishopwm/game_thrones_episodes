'use strict';

function fileactions(err, file) {
    if (err) {
        console.log('Error!', err);
    } else {
    	var episodes = JSON.parse(file);
    	console.log('Title: ' + episodes[0].title + '     Episode #: ' + episodes[0].episode_number);
    	console.log(episodes[0].description);
    	console.log('Rating: ' + episodes[0].rating + ' Stars ' + printstars(episodes[0].rating));
    	
	}
}



function printstars(rating) {
	var starsstring = "";
	
	for (var i = 0; i <= rating; i++) {
		starsstring += "*";
	}
	return starsstring;
}


module.exports = fileactions;

		