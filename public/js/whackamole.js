console.log('whackamole js file is linked correctly');
// var images = ['image-1.gif'];
// console.log(images);
var timer = 6;
var score = 0;

(function() {

// var images = ['image-1',]
var moleRappers = $('.moleDivs');
// console.log(moleRappers);
// console.log('This is the length of the moleRappers array ' + moleRappers.length);

// console.log(moleRappers[2]);

// Creates the random number and returns it stored in the variable random
var random;  
function makeRandom() {
		console.log('This is the randomly generated number ' + random);

	return random = Math.floor( Math.random()* 12);
	// console.log('This is the randomly generated number ' + random);
	}

	// $(moleRappers[random]).css('background-image', 'url("/img/image-3.gif")');
	// shows rapper in div generated by makeRandom(); hides rapper from div by removing class
	function showRapper() {
	// var interval = setInterval(function() {
		$(moleRappers[makeRandom()]).addClass('square7');
		console.log(moleRappers[random]);


	// }, 2000);

		setTimeout(function(){
			$(moleRappers[random]).removeClass('square7');
			// clearInterval(interval)
		}, 1000);


	}
	
// game();
	
// Uses timer to control the length of the game animations
// calls showRapper(); showRapper calls makeRandom(); *in the form of the returned variable [random]
 function game() {
// click listener
var gameInterval = setInterval(function() {
	if(timer > 0) {
		timer --;
		$('#timer').html(timer);
		// console.log(timer);
		// console.log([random]);
		showRapper();
	} else{
		console.log('game over');
		clearInterval(gameInterval);
	}


	 }, 2000);



}


	$('.moleDivs').click(function(){
		// console.log($(this));
		if($(this).hasClass('square7')) {
			score ++;
			$('#score').html(score);
			$(this).removeClass('square7');
		}
	});




	


















	// if(random == moleRappers[index]){
		// $(moleRappers[random]).addClass('.square1');

	// }
// $(moleRappers[random]).css('background-image', 'image-' + [random].gif')


	// $('#square1').click(function(){

	// 	$(this).fadeOut();
	// 	console.log('square one faded out');
	// });



}) ();
