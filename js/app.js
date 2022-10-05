// GLOBALS
const storyDisplay = document.getElementById('storyDisplay');
let colorindex = ['red', 'green', 'blue'];
let genretypes = [];
let genreindex = 0;


//**Place Holders!//
let userName = 'profileName';
let userDislike = 'userDislike';
let noun1 = 'cheese';
let adj1 = 'tasty';
let name1 = 'Hunter';
let genNoun1 = 'person';
let genNoun2 = 'Pumpkin';
let genNoun3 = 'Knife';
let genVerb1 = 'kill';
let color = colorindex[2];
let genPlace1 = 'graveyard';
let genAdj1 = 'nicely';
//Placeholder Selectors


//**GENRE Parameters **/


//!Horror//
let content = `There once was a ${genNoun1} that lived in a ${genAdj1} ${genNoun2}. The name of this ${genNoun1} was ${userName}. They didn’t like ${color} ${genNoun3}. One day ${userName} visited ${genPlace1}.There was an evil ${userDislike}. ${userName} got scared and ${genVerb1} as far away as they could!  used ${genAdj1} to take ${genPlace1}.`;

let horror = [content, genNoun1, genNoun2, genNoun3, genPlace1, genAdj1, genVerb1];
genretypes.push(horror);
//!-----//





console.log();


//**End of Place Holders

//STORAGE









//CONSTRUCTORS


//**Stories**//

function Story(baseText, user, noun1, genNoun1, genNoun2, genNoun3, genPlace1, genVerb1, color) {
  this.baseText = baseText;
  this.user = user;
  this.noun1 = noun1;
  this.genNoun1 = genNoun1;
  this.genNoun2 = genNoun2;
  this.genNoun3 = genNoun3;
  this.genPlace1 = genPlace1;
  this.adj1 = adj1;
  this.genVerb1 = genVerb1;
  this.name1 = name1;
  this.color = color[colorindex];
}
//Story Definer
new Story(genretypes[genreindex][0], userName, noun1, genretypes[genreindex][1], genretypes[genreindex][2], genretypes[genreindex][3], genretypes[genreindex][4], genretypes[genreindex][5], genretypes[genreindex][6]);

//HELPER FUNCTIONS

//**Story Element Renderer


function storyRender(storyindex){
  const wyos = document.getElementById('wyos');
  wyos.remove();
  let storyContent = document.createElement('p');
  storyContent.textContent = genretypes[storyindex][0];
  storyDisplay.appendChild(storyContent);

}


//**Word  Variables*//

//**Selector Constructors**//

// function noun1select(){
// if  (genreindex = 0) = ['alien', 'cyborg', 'humanoid', 'martian', 'android', 'robot', 'clones'];
// if else (genreindex = 1) = [ 'time machine', 'genie bottle', 'paper-boat'];

// if else = (genreindex = 2) = ['alien', 'cyborg', 'humanoid', 'martian', 'android', 'robot', 'clones']
// };

// function noungenNoun(){


// }













//LOCAL STORAGE??//


//Invocations for Testing  //
// noun1select();
storyRender(genreindex);
