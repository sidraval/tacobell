(function(root) {
  var TB = root.TB = (root.TB || {});

  var possibleWords = {
    preword: ["Crunchy ", "Cheesy ", "Double Decker ","7-Layer ","1/2 lb ","Spicy ", "Beefy ", "Doritos ", "Cantina ", "Hard ","Crispy ","Volcano ", "Supreme ", "Fresco ", "Soft ","Baja ", "Fiesta ","Mexican ", "Zesty ", "Stuft ","XXL "],
    prefix: ["Enchi","Gor","Nacho","Cha","Mexi","Quesa","Soft","Hard", "Steak"],
    suffix: ["rito ","dita ","grande ","ito ","lupa ","melt ","wrap ","dilla "],
    postword: ["Pizza","Roll-up","Griller","Bowl","Taco","Supreme", "Crunch", "Salad", "Taquito"]
  };

  TB.currentWords = {
    preword: 'Cheesy ',
    prefix: 'Gor',
    suffix: 'dita ',
    postword: 'Crunch'
  };

  TB.newWord = function(part) {
    var randomWord = possibleWords[part][random(0, possibleWords[part].length - 1)];
    if (randomWord !== TB.currentWords[part]) {
      TB.currentWords[part] = randomWord;
    } else {
      TB.newWord(part);
    }
  };

  function random(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

  TB.UI = {
    initialize: function(selector) {
                  $(selector).on("click", "li", function() {
                  });
                }
  };
})(window);
