// GLOBALS
const storyDisplay = document.getElementById('storyDisplay');
const storyForm = document.getElementById('storyForm');
let genretypes = [];
let userProfiles = [];
let myForm = document.getElementById('newUser');
export let bookShelf = [];

//*Story Element Holder*//



//**Place Holders!//
let userName = 'newProfile';
let userDislike = 'userDislike';
let genNoun1 = 'person';
let genNoun2 = 'Pumpkin';
let genNoun3 = 'Knife';
let genVerb1 = 'kill';
let genPlace1 = 'graveyard';
let genAdj1 = 'nicely';
let genreindex = 0;
//Placeholder Selectors


//**GENRE Parameters **/


//!Horror//


let horror = [genNoun1, genNoun2, genNoun3, genPlace1, genAdj1, genVerb1];
genretypes.push(horror);
//!-----//

console.log();


//**End of Place Holders

//STORAGE






//CONSTRUCTORS

//**Profile **/



function Profile(name, age, pronoun) {
  this.name = name;
  this.age = age;
  this.pronoun = pronoun;

  userProfiles.push(this);

}

//**Profile Submission**//
function handleProfileSubmit(event) {
  event.preventDefault();

  let name = event.target.userName.value;
  let age = event.target.userAge.value;
  let pronoun = event.target.pronoun.value;

  new Profile(name, age, pronoun);
  console.log(userProfiles);

}




function storyPara(event) {
  event.preventDefault();

  let storyName = event.target.storyName.value;

  let noun1 = event.target.noun1.value;
  let adj1 = event.target.adj1.value;
  let name1 = event.target.name1.value;
  let color = event.target.color.value;



  let createdStory = new Story(storyName, color, genretypes[genreindex][0], userName, noun1, genretypes[genreindex][1], genretypes[genreindex][2], genretypes[genreindex][3], adj1, genretypes[genreindex][4], name1, genretypes[genreindex][5], genretypes[genreindex][6]);
  console.log(bookShelf);

  storyRender(createdStory);
}






//**Stories**//

function Story(baseText, user, noun1, genNoun1, genNoun2, genNoun3, genPlace1, adj1, genVerb1, name1, color) {
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
  this.color = color;

  this.content = `There once was a ${genNoun1} that lived in a ${genAdj1} ${genNoun2}. The name of this ${genNoun1} was ${userName}. They didn’t like ${color} ${genNoun3}. One day ${userName} visited ${genPlace1}.There was an evil ${userDislike}. ${userName} got scared and ${genVerb1} as far away as they could!  used ${genAdj1} to take ${genPlace1}.`;


  //This pushes it into the story array for later use.
  bookShelf.push(this);
  lsBook();
}

//Story Definer


//HELPER FUNCTIONS

//**Story Element Renderer


function storyRender(story) {

  const wyos = document.getElementById('wyos');
  wyos.remove();
  //Adds the title picked from form
  let storyName = document.createElement('h2');
  storyName.textContent = story.storyName;
  storyDisplay.appendChild(storyName);
  //Adds Content of the Story
  let storyContent = document.createElement('p');
  storyContent.textContent = story.content;
  storyDisplay.appendChild(storyContent);

}


//**Word  Variables*//

//**Selector Constructors**//

// function genNoun1Select() {

//   if (genreindex = 0) { ['vampire', 'mummy', 'zombie', 'slime', 'werewolf', 'fog', 'doll', 'demon']; }

//   // else if (genreindex = 1){[ 'time machine', 'genie bottle', 'paper-boat'];
//   // }

//   // else if = (genreindex = 2)['alien', 'cyborg', 'humanoid', 'martian', 'android', 'robot', 'clones']
// }

// function genNoun2Select() {

//   if (genreindex === 0) ['coffin', 'cave', 'tree', 'hut', 'mansion', 'jar', 'sarcophagus', 'graveyard', 'swamp'];
//   //!! Needs to be filled in.


// }


// function genNoun3Select() {
//   if (genreindex === 0) ['blood', 'dirt', 'goo', 'hair', 'the dark', 'garlic', 'socializing'];

// }

// function genPlace1Select() {
//   if (genreindex === 0) ['mansion', 'giant pumpkin', 'swamp'];

// }

// function genVerb1Select() {
//   if (genreindex === 0) ['sprint', 'crawl', 'cry'];

// }

//**Story Choices Render **//

// function selectRender(selectindex){
//   const display = get document.getElementById();

//   let selbarContent = document.createElementbyId('form');
//   selbarContent.appendChild(selbarContent);


//LOCAL STORAGE//
function lsBook() {
  let stringBooks = JSON.stringify(bookShelf);
  localStorage.setItem('storedBooks', stringBooks);
  //Book Extracted//
  let recallBook = localStorage.getItem('storedBooks');
  console.log('storedBooks');

  //String --> Object//
  let makeBook = JSON.parse(recallBook);

  if (recallBook) {

    bookShelf = makeBook;
  }

  console.log(stringBooks);
}


function profile(){






}












//Invocations for Testing  //
// noun1select();

// myForm.addEventListener('submit', handleProfileSubmit);

storyForm.addEventListener('submit', storyPara);





