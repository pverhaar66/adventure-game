// javascript library for simple game development
document.getElementById('option1').innerHTML = 'yes';
document.getElementById('level_title').innerHTML = 'Chapter 1';

var weapon = false
var money = false
var potion = false

// jquery variant
//$('#option1').html('Dit is keuze 1');


// https://www.youtube.com/watch?v=4ba1BqJ4S2M
function game_over() {
	console.log("game_over")

	var chap = document.getElementById('chapter');
	var opt1 = document.getElementById('option1');
	var opt2 = document.getElementById('option2');
	var opt3 = document.getElementById('option3');

	chap.innerHTML = ' u dindnt even try >.> ';
	opt1.style.display = 'none';
	opt2.style.display = 'none';
	opt3.style.display = 'none';

document.getElementById('level_title').innerHTML = 'gameover';
document.getElementById('level_image').src = 'img/game_over.png';
}

function GameOver(){
	console.log ("GameOver()")

	var chap = document.getElementById('chapter');
	var opt1 = document.getElementById('option1');
	var opt2 = document.getElementById('option2');
	var opt3 = document.getElementById('option3');

	chap.innerHTML = 'U die an horrible dead'
	opt1.style.display = 'none';
	opt2.style.display = 'none';
	opt3.style.display = 'none';

document.getElementById('level_title').innerHTML = 'gameover';
document.getElementById('level_image').src = 'img/game_over.png';

}

function Level1() {
	console.log("Level1()");

	var chap = document.getElementById('chapter');
	var opt1 = document.getElementById('option1');
	var opt2 = document.getElementById('option2');
	var opt3 = document.getElementById('option3');

	chap.innerHTML = ' u woke up in a bed , seein the flashbacks of  youre city being destroyed by the Primal of all Bahamut, then u feel the wind through the open window and look outside and see that the bttle have passed , you hear a voice of and old man say , aah youre finally awake boy, you ask how long it has been since Bahamuts attack , the old man replys  Bahamut last appearnce has been 5 years ago boy';
	opt1.innerHTML = 'continue';
	opt2.innerHTML = 'continue';  
	opt3.innerHTML = 'continue';

	opt1.style.display = 'none';
	opt2.style.display = 'none';

	opt3.setAttribute("onClick", "javascript:Level2();");


	document.getElementById('level_title').innerHTML = 'intro';
	document.getElementById('level_image').src = 'img/maxresdefault.jpg';

}

function Level2() {

	console.log("Level2()");

	document.getElementById('level_title').innerHTML = 'time to adventure';
	document.getElementById('level_image').src = 'img/earth.jpg';
	
	var chap = document.getElementById('chapter');
	chap.innerHTML = ' a day later after our young hero rested the old man asked the boy : what are you going to do now ? ';


	if (weapon == true) {

		var chap = document.getElementById('chapter');
		chap.innerHTML = ' i see u  got the sword kid , now u can go on ure adventure!!'


 
	} else {
		var opt3 = document.getElementById('option3');
		opt3.innerHTML = ' go to the local blacksmith ';
	}
	
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = ' go to after Bahamut';
	opt3.setAttribute("onClick", "javascript:level3();");

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = ' go on a adventure'
	opt2.setAttribute("onClick", "javascript:level4();"); 	
		
}

function level3() {
	console.log("level3")

	var weapon = true

	document.getElementById('level_title').innerHTML = 'welcome to Big Steves Blacksmith';
	document.getElementById('level_image').src = 'img/Blacksmith.jpg';

	var chap = document.getElementById('chapter');
	var opt1 = document.getElementById('option1');
	var opt2 = document.getElementById('option2');
	var opt3 = document.getElementById('option3');
	chap.innerHTML = 'welcome to Big Steves Blacksmith . i guess u came here for a weapon huh well you came to the right place';
	opt1.innerHTML = ' A Rock ';
	opt2.innerHTML = ' Steal the holy dagger when he aint lookin ';
	opt3.innerHTML = ' Buy a Big steves Steel longsword';

	opt1.style.display = 'none';
	opt2.style.display = 'block';

	opt1.setAttribute("onClick", "javascript:GameOver();");
	opt2.setAttribute("onClick", "javascript:GameOver()");
    opt3.setAttribute("onClick", "javascript:Level2();");
    

	

}



function level4(action) {
	var action = action || "none"; 
	

	if (action != "examine") {
		console.log("level4")

		document.getElementById('level_title').innerHTML = 'the new road';
		document.getElementById('level_image').src = 'img/caravan.png';

		var chap = document.getElementById('chapter');
		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		chap.innerHTML = ' after 2 days of traveling u find a pillaged merchant cart';
		opt1.innerHTML = ' examine it ';
		opt2.innerHTML = ' dont bother with it and keep walking forward';


		opt2.style.display = 'block';
		opt3.style.display = 'none';

		opt1.setAttribute("onClick", "javascript:level4("examine")");
	    opt2.setAttribute("onClick", "javascript:level5();");
	} else {
		 var chap = document.getElementById('chapter');
		 var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		chap.innerHTML = ' after 2 days of traveling u find a pillaged merchant cart';
		opt1.innerHTML = ' take the items ';
		opt2.innerHTML = ' leave it and go further with your travel';

	}
	

}


function level5() {
	console.log("level5")
}