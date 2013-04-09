$(document).ready(function(){
	var preword = ["Crunchy ", "Cheesy ", "Double Decker ","7-Layer ","1/2 lb ","Spicy ", "Beefy ", "Doritos ", "Cantina ", "Hard ","Crispy ","Volcano ", "Supreme ", "Fresco ", "Soft ","Baja ", "Fiesta ","Mexican ", "Zesty ", "Stuft ","XXL "];
	var prefix = ["Enchi","Gor","Nacho","Cha","Mexi","Quesa","Soft","Hard", "Steak"];
	var suffix = ["rito ","dita ","grande ","ito ","lupa ","melt ","wrap ","dilla "]
	var postword = ["Pizza","Roll-up","Griller","Bowl","Taco","Supreme", "Crunch", "Salad", "Taquito"]
	
	function random(min,max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	
	function pickword(wordarray) {
		return wordarray[random(0,wordarray.length - 1)];
	}
	
	function wordreload(cssid,word) {
		$(cssid).fadeOut(500)
		.queue(function(n) {
			$(cssid).html(word);
			n();
		}).fadeIn(500);
	}	
	
	wordreload('#preword',pickword(preword));
	wordreload('#prefix',pickword(prefix)+pickword(suffix));
	wordreload('#postword',pickword(postword));	
	
	$('#prefix').click(function(){
		wordreload('#prefix',pickword(prefix)+pickword(suffix));
	});
	$('#preword').click(function(){
		wordreload('#preword',pickword(preword));
	});
	$('#postword').click(function(){
		wordreload('#postword',pickword(postword));
	});
});