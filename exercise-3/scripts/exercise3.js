// exercise3.js

(function() {
  function Andreas() {
    this.name = 'Andreas Naustdal';
    this.age = 27;
    this.favouriteFoods = ['Rein ala Naden', 'Shakshouka', 'Sandefjordsmør'];
    this.favouriteMovies = [ {
      name: 'Speed 2',
      credits: {
        director: 'Jan de Bont',
        star: 'Sandra Bullock'
      }
    },
    {
      name: 'Lion King',
      credits: {
        director: 'Lion Filmer',
        star: 'Mofasa'
      }
    },
    {
      name: 'Star Wars: Episode I – The Phantom Menace',
      credits: {
        director: 'George Lucas',
        star: 'Jake Lloyd'
      }
    }
  ];
};
var andreas = new Andreas();
console.log(andreas);
var presentMyself = function(andreas) {
  var mostLikedMovie = andreas.favouriteMovies[0];
  var mediumLikedMovie = andreas.favouriteMovies[Math.floor(andreas.favouriteMovies.length/2)];
  var leastLikedMovie = andreas.favouriteMovies[andreas.favouriteMovies.length-1];
  var andreasText = '';
  andreasText = 'Hello, my name is ' + andreas.name +
  '. I\'m ' + andreas.age +
  ' years old and my favorite movies are ' + leastLikedMovie.name +
  ' which is directed by ' + leastLikedMovie.credits.director +
  ' and stars ' + leastLikedMovie.credits.star +
  ', ' + mediumLikedMovie.name +
  ' which is directed by ' + mediumLikedMovie.credits.director +
  ' and stars ' + mediumLikedMovie.credits.star +
  ', and ' + mostLikedMovie.name +
  ' which is directed by ' + mostLikedMovie.credits.director +
  ' and stars ' + mostLikedMovie.credits.star;
  return andreasText;
}

function saveMyself(person) {
  sessionStorage.setItem('andreas', JSON.stringify(person));
}
function getMyself(person) {
  return JSON.parse(sessionStorage.getItem(person));
}


var presentationText = presentMyself(andreas);
console.log(presentationText);
var newParagraph = document.createElement("p");
var newContent = document.createTextNode(presentationText);
newParagraph.appendChild(newContent);
var currentDiv = document.getElementById("script");
document.body.insertBefore(newParagraph, currentDiv);

saveMyself(andreas);
var hentAndreas = getMyself('andreas');
console.log(hentAndreas);

presentationText = presentMyself(hentAndreas);
console.log(presentationText);
newParagraph = document.createElement("p");
newContent = document.createTextNode(presentationText);
newParagraph.appendChild(newContent);
currentDiv = document.getElementById("script");
document.body.insertBefore(newParagraph, currentDiv);

})();
