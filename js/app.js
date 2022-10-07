// GLOBALS
const storyDisplay = document.getElementById('storyDisplay');
const storyForm = document.getElementById('storyForm');
let genretypes = [];
let myForm = document.getElementById('newUser');

//Local Storage
let bookShelf = [];
let userProfiles = [];
let userName = [];

//**Word Bank//



//!!Word Bank End//






//*Story Element Holder*//



//**Place Holders!//\
let genAdj1 = 'Boat';

//Placeholder Selectors


//**GENRE Parameters **/


//!Horror//


let horror = [Story.genNoun1, Story.genNoun2, Story.genNoun3, Story.genPlace1, Story.genAdj1, Story.genVerb1];
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
  userName.push(this.name);
}

//**Profile Submission**//
function handleProfileSubmit(event) {
  event.preventDefault();

  let name = event.target.userName.value;
  let age = event.target.userAge.value;
  let pronoun = event.target.pronoun.value;

  new Profile(name, age, pronoun);
  console.log(userProfiles);
  lsProfile();
}


function storyRender(createdStory){

  const wyos = document.getElementById('wyos');
  wyos.remove();
  //Adds the title picked from form
  // let storyName = document.createElement('h2');
  // storyName.textContent = story.storyName;
  // storyDisplay.appendChild(storyName);
  //Adds Content of the Story
  let storyContent = document.createElement('p');
  storyContent.textContent = createdStory.content;
  console.log(`'!!',${createdStory.content}`);
  storyDisplay.appendChild(storyContent);
  randomIdx();
}


function storyPara(event) {
  event.preventDefault();

  let storyName = event.target.storyName.value;
  let noun1 = event.target.noun1.value;
  let adj1 = event.target.adj1.value;
  let name1 = event.target.name1.value;
  let color = event.target.color.value;



  let createdStory = randomcontent(storyName, noun1, adj1, name1, color);
  storyRender(createdStory);
  // console.log(createdStory);

}






//**Stories**//

function Story(storyName, genNoun1, noun1, genNoun2, genNoun3, genPlace1, adj1, genVerb1, name1, color) {
  this.storyName =storyName;
  this.userName = userProfiles;
  this.genNoun1 = genNoun1;
  this.noun1 = noun1;
  this.genNoun2 = genNoun2;
  this.genNoun3 = genNoun3;
  this.genPlace1 = genPlace1;
  this.adj1 = adj1;
  this.genVerb1 = genVerb1;
  this.name1 = name1;
  this.color = color;

  this.content = `There once was a ${genNoun1} that lived in a ${genAdj1} ${genNoun2}. The name of this ${genNoun1} was ${userName}. They didn’t like ${color} ${genNoun3}. One day ${userName} visited ${genPlace1}.There was an evil ${name1}. ${userName} got scared and ${genVerb1} as far away as they could!  used ${genAdj1} to take ${genPlace1}.`;


  //This pushes it into the story array for later use.
  bookShelf.push(this);

  lsBook();

}

//Story Definer


//HELPER FUNCTIONS

//**Story Element Renderer




//**Word  Variables*//

//**Selector Constructors**//


//Word Banks//

let noun1 = ['vampire', 'mummy', 'zombie', 'slime', 'werewolf', 'fog', 'doll', 'demon'];
let noun2 = ['coffin', 'cave', 'tree', 'hut', 'mansion', 'jar', 'sarcophagus', 'graveyard'];
let noun3 = ['blood', 'dirt', 'goo', 'hair', 'the dark', 'garlic', 'socializing', 'clear'];
let place1 = ['a tavern', 'a cemetery', 'a cathedral', 'a crypt', 'a grotto', 'a shop', 'a shack', 'a lake'];
let verb1 = ['crawled', 'hopped', 'shimmied', 'creeped', 'flew', 'jumped', 'sauntered', 'scurried'];

// function that generates random index value of the array
// Math.random from MDN docs

function randomIdx() {
  console.log(Math.floor(Math.random() * 8));
  return Math.floor(Math.random() * 8);
}



//Randomly picks a word and assigns it.


function randomcontent(storyName, noun1input, adj1, name1, color) {

  let genNoun1 = noun1[randomIdx()];
  let genNoun2 = noun2[randomIdx()];
  let genNoun3 = noun3[randomIdx()];
  let genPlace1 = place1[randomIdx()];
  let genVerb1 = verb1[randomIdx()];

  console.log(bookShelf);

  let createdStory = new Story(storyName, genNoun1, noun1input, genNoun2, genNoun3, genPlace1, adj1, genVerb1, name1, color);
  console.log(createdStory.content);
  console.log(bookShelf);
  return createdStory;
}

//!!END WORD DEFINERS//

//LOCAL STORAGE//

//BookShelf Local Storage//
function lsBook() {
  let stringBooks = JSON.stringify(bookShelf);
  localStorage.setItem('storedBooks', stringBooks);
  console.log('storedBooks');

  //String --> Object//


  console.log(stringBooks);
}

//Profile Local Storage//

function lsProfile() {
  //Store arrays into strings//
  let stringProfiles = JSON.stringify(userProfiles);
  localStorage.setItem('storedProfiles', stringProfiles);
}

//Data Extraction//

function loadstorage() {
  let recallBook = localStorage.getItem('storedBooks');
  let recallProfile = localStorage.getItem('storedProfiles');
  console.log(recallBook);
  console.log(recallProfile);
  if (recallBook) {
    let makeBook = JSON.parse(recallBook);

    bookShelf = makeBook;
  }
  if (recallProfile) {
    let makeProfile = JSON.parse(recallProfile);

    userProfiles = makeProfile;
  }
}


//Invocations for Testing  //
// noun1select();

myForm.addEventListener('submit', handleProfileSubmit);

storyForm.addEventListener('submit', storyPara);
loadstorage();

