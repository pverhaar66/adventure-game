// javascript library for simple game development
document.getElementById('option1').innerHTML = 'yes';
document.getElementById('level_title').innerHTML = 'Chapter 1';


var inventory = {

	hipotion: false,
	 weapon : false
};


//var potion = false

// jquery variant
//$('#option1').html('Dit is keuze 1');


// https://www.youtube.com/watch?v=4ba1BqJ4S2M
function game_over() {
	console.log("game_over")
	console.log("inventory")


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

function GameOver() {
	console.log ("GameOver")
	console.log("inventory")

	var chap = document.getElementById('chapter');
	var opt1 = document.getElementById('option1');
	var opt2 = document.getElementById('option2');
	var opt3 = document.getElementById('option3');

	chap.innerHTML = 'U die an horrible dead';
	opt1.style.display = 'none';
	opt2.style.display = 'none';
	opt3.style.display = 'none';

document.getElementById('level_title').innerHTML = 'gameover';
document.getElementById('level_image').src = 'img/game_over.png';
}

function gameover1() {
		console.log ("GameOver")
		console.log("inventory")

	var chap = document.getElementById('chapter');
	var opt1 = document.getElementById('option1');
	var opt2 = document.getElementById('option2');
	var opt3 = document.getElementById('option3');

	chap.innerHTML = 'U get parried and stabbed in the heart';
	opt1.style.display = 'none';
	opt2.style.display = 'none';
	opt3.style.display = 'none';

document.getElementById('level_title').innerHTML = 'gameover';
document.getElementById('level_image').src = 'img/game_over.png';

}

function gameover1_5() {
			console.log ("GameOver")
			console.log("inventory")

	var chap = document.getElementById('chapter');
	var opt1 = document.getElementById('option1');
	var opt2 = document.getElementById('option2');
	var opt3 = document.getElementById('option3');

	chap.innerHTML = 'U get mutilated and stabbed in the back of ya head';
	opt1.style.display = 'none';
	opt2.style.display = 'none';
	opt3.style.display = 'none';

document.getElementById('level_title').innerHTML = 'gameover';
document.getElementById('level_image').src = 'img/game_over.png';
}

function gameover_forest(solo) {
	solo = solo || 'none'

	if (solo == "solo") {
		console.log ("GameOver")
		console.log("inventory")

	var chap = document.getElementById('chapter');
	var opt1 = document.getElementById('option1');
	var opt2 = document.getElementById('option2');
	var opt3 = document.getElementById('option3');

	chap.innerHTML = ' U fall asleep and get assaulted in ya sleep by a pack of wolfs';
	opt1.style.display = 'none';
	opt2.style.display = 'none';
	opt3.style.display = 'none';

	}else{
		console.log ("GameOver")
		console.log("inventory")

	var chap = document.getElementById('chapter');
	var opt1 = document.getElementById('option1');
	var opt2 = document.getElementById('option2');
	var opt3 = document.getElementById('option3');

	chap.innerHTML = ' U both fall asleep and get assaulted in ya sleep by a pack of wolfs';
	opt1.style.display = 'none';
	opt2.style.display = 'none';
	opt3.style.display = 'none';
}
document.getElementById('level_title').innerHTML = 'gameover';
document.getElementById('level_image').src = 'img/game_over.png';
}

function gameover2(lava) {
	lava = lava || 'none'

	if (lava = "lava") {

	console.log ("GameOver")
	console.log("inventory")

	var chap = document.getElementById('chapter');
	var opt1 = document.getElementById('option1');
	var opt2 = document.getElementById('option2');
	var opt3 = document.getElementById('option3');

	chap.innerHTML = ' As you leave him presumely dead on the floor, he suddenly grabbed both of you your leg and throws both of you in the lava ';
	opt1.style.display = 'none';
	opt2.style.display = 'none';
	opt3.style.display = 'none';

	}else{

	console.log ("GameOver")
	console.log("inventory")

	var chap = document.getElementById('chapter');
	var opt1 = document.getElementById('option1');
	var opt2 = document.getElementById('option2');
	var opt3 = document.getElementById('option3');

	chap.innerHTML = ' As u see her get burn to crisp u get caught in the explosion and die';
	opt1.style.display = 'none';
	opt2.style.display = 'none';
	opt3.style.display = 'none';
}
document.getElementById('level_title').innerHTML = 'gameover';
document.getElementById('level_image').src = 'img/game_over.png';
}

function pickup(item) {
inventory[item] = true;
var element  =  document.getElementById(item);
element.parentNode.removeChild(element);
console.log(inventory);
}

function createItem(item, image) {
	var items = document.getElementById('items');
    var btn = document.createElement("button");
    btn.innerHTML = "get" + item;
    btn.setAttribute("id", item);
    btn.setAttribute("onClick", "javascript:pickup('"+ item +"')");
    btn.setAttribute("style", "background: url('img/"+ image +"')");
    items.appendChild(btn)
}

function checkpotion() {
	if (inventory["hipotion"] == true) {
		level_tower('tower');

	}else{

		alert ("hey a bag with hi-potions potion better pick it up");		
	}

}

function checkweapon() {
	if (inventory.weapon == true) {
		Level2()	

	}else{

		alert ("grab the weapon kid");		
	}

}



function Level1() {
	console.log("Level1()");
	console.log("inventory")

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


	if (inventory.weapon == true) {

		var chap = document.getElementById('chapter');
		chap.innerHTML = ' i see u  got the sword kid , now u can go on ure adventure!!';

		var opt3 = document.getElementById('option3');
		opt3.innerHTML = ' go to the local blacksmith ';

		opt3.style.display = 'none'


 
	} else {
		var opt3 = document.getElementById('option3');
		opt3.innerHTML = ' go to the local blacksmith ';


		opt3.style.display = 'block'
	}
	
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = ' go to after Bahamut';
	opt1.setAttribute("onClick", "javascript:gameover()");
	opt3.setAttribute("onClick", "javascript:level3();");

		var opt2 = document.getElementById('option2');
		opt2.innerHTML = ' go on a adventure'
		opt2.setAttribute("onClick", "javascript:level4();"); 

		
}

function level3() {
	console.log("level3")


	createItem("weapon", "ashbringer.jpg");

	document.getElementById('level_title').innerHTML = 'welcome to Big Steves Blacksmith';
	document.getElementById('level_image').src = 'img/Blacksmith.jpg';

	var chap = document.getElementById('chapter');
	var opt1 = document.getElementById('option1');
	var opt2 = document.getElementById('option2');
	var opt3 = document.getElementById('option3');
	chap.innerHTML = ' Welcome to Big Steves Blacksmith . you see  holy dagger like wep and a grat sword in the showcase, i guess u came here for a weapon huh well you came to the right place, i got an damn fine weapon just for you';
	opt1.innerHTML = ' A Rock ';
	opt2.innerHTML = ' Steal the holy dagger when he aint lookin ';
	opt3.innerHTML = ' go back to the old man';

	opt1.style.display = 'none';
	opt2.style.display = 'block';
	opt3.style.display = 'block';

	opt1.setAttribute("onClick", "javascript:GameOver();");
	opt2.setAttribute("onClick", "javascript:GameOver()");
    opt3.setAttribute("onClick", "javascript:checkweapon();");
    

	

}



function level4(action) {
	var action = action || "none"; 
	

	if (action != "examine") {
		console.log("level4")
		console.log("inventory")


		document.getElementById('level_title').innerHTML = 'the new road';
		document.getElementById('level_image').src = 'img/caravan.png';

		var chap = document.getElementById('chapter');
		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3');
		chap.innerHTML = ' After 2 days of traveling u find a pillaged merchant cart';
		opt1.innerHTML = ' Examine it ';
		opt2.innerHTML = ' Dont bother with it and keep walking forward';

		opt1.style.display = 'block';
		opt2.style.display = 'block';
		opt3.style.display = 'none';

		opt1.setAttribute("onClick", "javascript:level4('examine')");
	    opt2.setAttribute("onClick", "javascript:level5();");
	} else {
		console.log ("lvl4_action")

		document.getElementById('level_image').src = 'img/caravan.png';

		 var chap = document.getElementById('chapter');
		 var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		chap.innerHTML = ' U find a bag with a few health potions.';
		opt1.innerHTML = ' leave it and continue with your travels ';
		opt2.innerHTML = ' Take the items';

		opt1.setAttribute("onClick", "javascript:level5();");
		opt2.setAttribute("onClick", "javascript:level5('potion');");
	}
	

}


function level5(potion) {
	var potion = potion || null;
		console.log("level5")
		console.log("inventory")



	document.getElementById('level_title').innerHTML = 'mysterious';
	document.getElementById('level_image').src = 'img/mysterious.jpg';

	var chap = document.getElementById('chapter');
	chap.innerHTML = ' U get assaulted by a mysterious attacker and a deep cut in your left leg ';


	if (potion == "potion") {
		

		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3')

		opt1.innerHTML = ' use the potion to heal the wound ';
		opt2.innerHTML = ' attack the mysterious attacker ';
		opt3.innerHTML = ' go in defensive stance';
		opt1.style.display = 'block'
		opt2.style.display = 'block'
		opt3.style.display = 'none'

		opt1.setAttribute("onClick", "javascript:level6()");
		opt2.setAttribute("onClick", "javascript:gameover1()");
		opt3.setAttribute("onclick", "javascript:gameover1_5()");

	}else{ 


		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3');

		opt1.innerHTML = ' use potion to regain life ';
		opt2.innerHTML = ' attack the attacker ';
		opt3.innerHTML = ' go in defensive stance';
		opt1.style.display = 'none'
		opt2.style.display = 'block'
		opt3.style.display = 'block'


		opt2.setAttribute("onClick", "javascript:gameover1()");
		opt3.setAttribute("onclick", "javascript:gameover1_5()");


	}

}

function level6() {
	console.log("level6")
	console.log("inventory")

	document.getElementById('level_title').innerHTML = 'the lady';
	document.getElementById('level_image').src = 'img/lady_yugiri.jpg';

		var chap = document.getElementById('chapter');
		chap.innerHTML = ' After you healed the wound you look up , there appears to stand a stunning young lady infront of you, ';

		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3');

		opt1.innerHTML = ' ask the lady her name ';
		opt2.innerHTML = ' sneer at her for having to waste a health potion ';
		opt3.innerHTML = ' stare and do nothing ';

		opt1.setAttribute("onClick", "javascript:level7('friends')");
		opt2.setAttribute("onClick", "alert('Dont u dare to sneer at her')");
		opt3.setAttribute("onClick", "javascript:level7()");
}


function level7(friends) {
	friends = friends || 'none'
	console.log("level7")
	console.log("inventory")

	document.getElementById('level_title').innerHTML = 'the lady';
	document.getElementById('level_image').src = 'img/lady_yugiri_2.png';

	if (friends == "friends"){

		var chap = document.getElementById('chapter');
		chap.innerHTML = ' my name is Yugiri Mistwalker what is yours adventurer';

		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3');

		opt1.innerHTML =' my name is Roland Thunder, what brings u to this land yugiri ? ';
		opt2.innerHTML =' my name is not of importance, what brings you to this land ? ';
		opt3.innerHTML =' *stay silent* ';

		opt1.setAttribute("onClick", "javascript:level8('gfriends')");
		opt2.setAttribute("onClick", "javascript:level7()");
		opt3.setAttribute("onClick", "javascript:level7()");

		opt3.style.display = 'block'


	}else{

		var chap = document.getElementById('chapter');
		chap.innerHTML = ' ..... , are u choking on air or something?, *the lady left your vision right after she said that* ';

		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3');

		opt1.innerHTML =' continue with your adventure';
		opt2.innerHTML =' N/A ';
		opt3.innerHTML =' N/A ';

		opt2.style.display = 'none'
		opt3.style.display = 'none'

		opt1.setAttribute("onClick", "javascript:level8()");
		
	}
}

function level8(gfriends) {
 gfriends = gfriends || 'none'
 console.log("level8")
 console.log("inventory")

 	document.getElementById('level_title').innerHTML = 'the Hunt';
	document.getElementById('level_image').src = 'img/forest.jpg';


 	if (gfriends == "gfriends") {

 		var chap = document.getElementById('chapter');
		chap.innerHTML = ' i came to this land bc of rumors of the great primal bahamut has been seen in the cave system not far from here , and my sole purpose is  to take him down no matter the cost! ';

		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3');

		opt1.innerHTML =' i see , dont stand in my way or i might accidentally kill you ';
		opt2.innerHTML =' im here with the same objective, want to join me ? ';
		opt3.innerHTML =' N/A ';

		opt3.style.display = 'none'

		opt1.setAttribute("onClick", "javascript:level9()");		
		opt2.setAttribute("onClick", "javascript:level9('ffriends')");


 	}else{

 		var chap = document.getElementById('chapter');
		chap.innerHTML = ' *thinking in your self* hmm there is the rumord cave that i heard of in the village , the so called resting place of bahamut. ';

		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3');

		opt1.innerHTML =' lets check it out ';
		opt2.innerHTML =' screw this im out ';
		opt3.innerHTML =' N/A ';

		opt2.style.display = 'block'
		opt3.style.display = 'none'

		opt1.setAttribute("onClick", "javascript:level9()");		
		opt2.setAttribute("onClick", "alert('NO PROTAGANIST CHICKENS OUT , NOW GET IN THERE!')");	

 	}


}

function level9(ffriends) {
	ffriends = ffriends || 'none'
	console.log ("level9")
	console.log("inventory")

 	document.getElementById('level_title').innerHTML = 'the omnious cave';
	document.getElementById('level_image').src = 'img/inara-shrinenew-entrance-cave-version.jpg';


	if (ffriends == "ffriends") {

		var chap = document.getElementById('chapter');
		chap.innerHTML = ' alright were here the cave bahamut resides in, lets go in shall we ? ';

		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3');

		opt1.innerHTML =' yes lets go ';
		opt2.innerHTML =' ladies first ';
		opt3.innerHTML =' lets camp it out and go in tmmrw ';

	

		opt1.setAttribute("onClick", "javascript:level_Cave('lady')");		
		opt2.setAttribute("onClick", "javascript:level_Cave('lady')");
		opt3.setAttribute("onClick", "javascript:gameover_forest()");

		opt1.style.display = 'none'
		opt2.style.display = 'block'
		opt3.style.display = 'block'

	}else{

 		document.getElementById('level_title').innerHTML = 'the omnious cave';
		document.getElementById('level_image').src = 'img/inara-shrinenew-entrance-cave-version.jpg';

		var chap = document.getElementById('chapter');
		chap.innerHTML = ' Alright im finally here the cave entrance , what a boring path that may be to get here.';

		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3');

		opt1.innerHTML ='  lets get it over with ';
		opt2.innerHTML =' N/A';
		opt3.innerHTML =' camp it out for the night ';

		opt1.style.display = 'block'
		opt2.style.display = 'none'
		opt3.style.display = 'block'
	

		opt1.setAttribute("onClick", "javascript:level_Cave()");		
		opt2.setAttribute("onClick", "javascript:level_Cave()");
		opt3.setAttribute("onClick", "javascript:gameover_forest('solo')");

	}

}

function level_Cave(lady) {
	lady = lady || 'none'
	console.log ("level_cave")
	console.log("inventory")


	if (lady == "lady") {

 		document.getElementById('level_title').innerHTML = ' light ';
		document.getElementById('level_image').src = 'img/underground.jpg';


		var chap = document.getElementById('chapter');
		chap.innerHTML = '*yugiri grins* and you both go in the cave , surprisingly its rlly bright, when u look in the distance u see a tower like structure. aaaaaaaaaaaaaand yugiri went ahead without you towards the tower';

		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3');

		opt1.innerHTML =' follow her  ';
		opt2.innerHTML =' N/A ';
		opt3.innerHTML =' N/A ';

		opt1.style.display = 'block';
		opt2.style.display = 'none';
		opt3.style.display = 'none';

		createItem("hipotion",	 "manapotion__89478.1404296843.220.220.jpg");

	

		opt1.setAttribute("onClick", "javascript:checkpotion()");		
		opt2.setAttribute("onClick", "javascript:level_tower()");
		opt3.setAttribute("onClick", "javascript:level_tower()");



	}else{

		document.getElementById('level_title').innerHTML = ' light ';
		document.getElementById('level_image').src = 'img/underground.jpg';

		var chap = document.getElementById('chapter');
		chap.innerHTML = ' The Cave is surprisingly rlly bright, when u look in the distance u see a tower like structure ';

		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3');

		opt1.innerHTML =' go to towards the tower ';
		opt2.innerHTML =' N/A ';
		opt3.innerHTML =' N/A ';

		opt1.style.display = 'block'
		opt2.style.display = 'none'
		opt3.style.display = 'none'
	

		opt1.setAttribute("onClick", "javascript:level_tower()");		
		opt2.setAttribute("onClick", "javascript:level_tower()");
		opt3.setAttribute("onClick", "javascript:level_tower()");


	}
}


function level_tower(tower) {
		tower = tower || 'none'
	console.log ("level_tower")
	console.log("inventory")


	document.getElementById('level_title').innerHTML = ' the mysterious person';
	document.getElementById('level_image').src = 'img/coils.jpg';

	if (tower == "tower") {

		var chap = document.getElementById('chapter');
		chap.innerHTML = ' when u were almost wit walking down the extreemly long spiral stairs u hear 2 people figting fiercely. A moment later  u hear a scream, its yugiri who was laying on the ground badly hurt with a man in the distance casting a fire spell. ';

		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3');

		opt1.innerHTML =' Block the attack and save yugiri ';
		opt2.innerHTML =' Let her burn to crisp ';
		opt3.innerHTML =' N/A ';

		opt1.style.display = 'block'
		opt2.style.display = 'block'
		opt3.style.display = 'none'
	

		opt1.setAttribute("onClick", "javascript:level_bahamut('primal')");		
		opt2.setAttribute("onClick", "javascript:gameover2()");
		opt3.setAttribute("onClick", "javascript:gameover2()");

	}else{

		var chap = document.getElementById('chapter');
		chap.innerHTML = ' when u were almost wit walking down the extreemly long spiral stairs u hear 2 people figting fiercely. A moment later  u hear a scream, its the lady from earlier who was laying on the ground badly hurt with a man in the distance casting a fire spell.';

		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3');

		opt1.innerHTML =' Block the attack and save the lady ';
		opt2.innerHTML =' Let her burn to Crisp ';
		opt3.innerHTML =' N/A ';

		opt1.style.display = 'none'
		opt2.style.display = 'block'
		opt3.style.display = 'none'
	

		opt1.setAttribute("onClick", "javascript:level_bahamut('primal')");		
		opt2.setAttribute("onClick", "javascript:gameover2()");
		opt3.setAttribute("onClick", "javascript:gameover2()");

	}

}


function level_bahamut(primal) {
	console.log ("level_bahamut")
	console.log("inventory")

	document.getElementById('level_title').innerHTML = ' the mysterious person';
	document.getElementById('level_image').src = 'img/finalboss.png';

	var chap = document.getElementById('chapter');
		chap.innerHTML = ' after u blocked the damage u and Yugiri both lauched a attack followed by decimating combo and bahamuts body lays dead on the cold floor ';

		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3');

		opt1.innerHTML =' Seal Bahamut once again ';
		opt2.innerHTML =' throw Bahamut in the pit of lava (thats very conveniently next to you)';
		opt3.innerHTML =' leave him there he is dead anyway';

		opt1.style.display = 'block'
		opt2.style.display = 'block'
		opt3.style.display = 'block'
	

		opt1.setAttribute("onClick", "javascript:level_Win()");		
		opt2.setAttribute("onClick", "javascript:level_Win())");
		opt3.setAttribute("onClick", "javascript:gameover2('lava')");



}

function level_Win(){
	console.log ("GAME CLEARED")
	var inventory = false

	document.getElementById('level_title').innerHTML = ' game cleared, here is a picture of a viera ( a race in Final fantasy series ) ';
	document.getElementById('level_image').src = 'img/final_fantasy_xiv__a_realm_reborn___black_mage_by_platinum_disco-d8wmvil.png';

		var opt1 = document.getElementById('option1');
		var opt2 = document.getElementById('option2');
		var opt3 = document.getElementById('option3');


		opt1.style.display = 'none'
		opt2.style.display = 'none'
		opt3.style.display = 'none'


}