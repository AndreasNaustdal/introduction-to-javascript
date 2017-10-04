function findHighestNum() {
  var highestNumber = 0;
  do {
    var input = prompt('Enter a number');
    highestNumber = Math.max(highestNumber, input);
  } while (input > 0);
  document.write(highestNumber);
}

function countLetters() {
  var lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Phasellus facilisis non neque ut interdum. Aliquam fringilla aliquet metus,
  id faucibus tortor sagittis convallis.
  Sed molestie scelerisque mauris ut aliquam.
  Phasellus eleifend tortor eget sapien facilisis mollis.
  Integer non elit nec lorem pellentesque convallis vel eu orci.
  Curabitur ut velit massa. Praesent lacinia finibus leo,
  eu rhoncus sem bibendum ac. Phasellus hendrerit, augue ac fermentum pharetra,
  lorem mauris pharetra nunc, at laoreet ipsum risus quis lorem.
  Vivamus eget posuere quam, sed rutrum elit.
  Sed tempus vitae velit sit amet aliquam. Nulla vel elit elit.`;
  var character = prompt('Enter a character');
  console.table(lipsum.split(character));
  //var numberOfCharacters = lipsum.split(character).length - 1;
  var numberOfCharacters = 0;
  for (var i = 0; i < lipsum.length; i++) {
    //count+=+(character===lipsum[i++])
    numberOfCharacters += (character === lipsum[i]);
  };
  document.write(numberOfCharacters);
}

//findHighestNum();
countLetters();
