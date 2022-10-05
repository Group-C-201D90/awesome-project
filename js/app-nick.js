'use strict';

const bookShelf = [];
const storyform = document.getElementById('storyform');
const storylist = document.getElementById('storylist');

function Story(name){
  this.name = name;
  this.render = function(){
    const listItem = document.createElement('li');
    listItem.textContent = this.name;
    storylist.appendChild(listItem);
  },
  bookShelf.push(this);
}

function handleStorySubmit(event){
  event.preventDefault();
  const newStory = new Story(event.target.book.value);
  storyform.reset();
  newStory.render();
  localStorage.stories = JSON.stringify(bookShelf);
  console.log('stories in local storage:', localStorage.stories);
}

//PROFILE

const userProfiles = [];
const profileform = document.getElementById('profileform');
const profilelist = document.getElementById('profilelist');

function Profile(name){
  this.name = name;
  this.render = function(){
    const listItem = document.createElement('li');
    listItem.textContent = this.name;
    profilelist.appendChild(listItem);
  },
  userProfiles.push(this);
}

function handleProfileSubmit(event){
  event.preventDefault();
  const newProfile = new Profile(event.target.name.value, event.target.age.value, event.target.pronoun.value);
  profileform.reset();
  newProfile.render();

  //TODO ADD to profile handle submit
  localStorage.profiles = JSON.stringify(userProfiles);
  console.log('profiles in local storage:', localStorage.profiles);
}