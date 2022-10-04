// GLOBALS
const storyDisplay = document.getElementById('storyDisplay');
let color = ['red', 'green', 'blue'];



//**Place Holders!//
let userName = 'profileName';
let userDislike = 'userDislike';

//Placeholder Selectors


function genreSelection() {
  let genreSelection = genretypes[0];
  console.log(genreSelection);
};

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
  this.color = color[i];
}
//Story Definer
new Story(genretypes[i[0]], userName, noun1, genretypes[i[1]], genretypes[i[2]], genretypes[i[3]], genretypes[i[4]], genretypes[i[5]], genretypes[i[6]]);


console.log(story.genre);

//HELPER FUNCTIONS

//**Story Element Renderer


function storyRender() {
  const wyos = document.getElementById("wyos");
  wyos.remove();
  let i = genreSelection;
  let storyContent = document.createElement('p');
  storyContent.textContent = genretypes[i];
  storyDisplay.appendChild(storyContent);

}

//**Selectors**//
function genreSelect() {

  if (genreSelection === horror) {
    genretypes = 0;
  }
  else if (genreSelection === fantasy) {
    genretypes = 1;
  }
  else if (genreSelection === scifi) {
    genretypes = 2;
  }

}

function genreSelection(){




}









//**GENRE Parameters **/

let genretypes = [horror];

//!Horror//

let horror = [content, genNoun1, genNoun2, genNoun3, genPlace1, genAdj1, genVerb1];

let content = `There once was a ${genNoun1} that lived in a ${genAdj1} ${genNoun2}. The name of this ${genNoun1} was ${userName}. They didn’t like ${color} ${genNoun3}. One day ${userName} visited ${genPlace1}.There was an evil ${userDislike}. ${userName} got scared and ${genVerb1} as far away as they could!  used ${genAdj1} to take ${genPlace1}.`;


//!-----//





console.log();


//LOCAL STORAGE??//


//Invocations for Testing  //

storyRender();
genreSelect();
