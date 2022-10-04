'use strict';

const allStories = [];
const storyform = document.getElementById('storyform');
const storylist = document.getElementById('storylist');

function Story(name){
  this.name = name;
  this.render = function(){
    const listItem = document.createElement('li');
    listItem.textContent = this.name;
    storylist.appendChild(listItem);
  },
  allStories.push(this);
}

function handleStorySubmit(event){
  event.preventDefault();
  const newStory = new Story(event.target.book.value);
  storyform.reset();
  newStory.render();
  localStorage.stories = JSON.stringify(allStories);
  console.log('this is what is in local storage', localStorage.stories);
}