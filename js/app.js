// GLOBALS
const mainPage = document.getElementById('story-Display');
let color = ['red', 'green', 'blue'];
let genretypes = [horrorStory, fantasy, scifi];



// Place Holders!

let userName = profileName;
let userDislike = userDislike;



//End of Place Holders

//STORAGE









//CONSTRUCTORS


//**Stories**//

function Story(baseText, user, noun1, genNoun1, genNoun2, genNoun3, genPlace1, genVerb1, color){
  this.baseText = baseText
  this.user = user;
  this.noun1 = noun1;
  this.genNoun1 = genNoun1;
  this.genNoun2 = genNoun2;
  this.genNoun3 = genNoun3;
  this.genPlace1 = genPlace1 ;
  this.adj1 = adj1;
  this.genVerb1 = genVerb1;
  this.name1 = name1;
  this.color = color[i];

}
//Story Definer
new Story(genre[i[0]], userName, noun1, genre[i[1]], genre[i[2]],genre[i[3]], genre[i[4]], genre[i[5]], genre[i[6]]);


console.log(story.genre);

//HELPER FUNCTIONS

//**Story Element Maker
let i = userSelection;
let storyContent = document.createElement('p');
storyContent.textContent = genretypes[i];
story-Display.appendChild(storyContent);







//**GENRE Selector**//
function userSelection(event) {

if (genreSelect = Horror) {
userSelection = 0
};

else if (genreSelect = fantasy){
userSelection = 1
};
else if(genreSelect = scifi){

  
}
  




}




//**GENRE Parameters **/

//!Horror//

let horrorStory = [content, genNoun1, genNoun2, genNoun3, genPlace1, genAdj1, genVerb1];

let content = `There once was a ${genNoun1} that lived in a ${genAdj1} ${genNoun2}. The name of this ${genNoun1} was ${userName}. They didn’t like ${color} ${genNoun3}. One day ${userName} visited ${genPlace1}.There was an evil ${userDislike}. ${userName} got scared and ${genVerb1} as far away as they could!  used ${genAdj1} to take ${genPlace1}.`;


//!   //





console.log(genre);


//LOCAL STORAGE??//
