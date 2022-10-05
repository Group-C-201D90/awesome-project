'use strict';

const storybutton = document.getElementById('storybutton');

const handleStoryButtonClick = function(){
  const storiesFromLS = JSON.parse(localStorage.stories);
  console.log('bookShelf array after retrieving from local storage', bookShelf);
  for (let i = 0; i < storiesFromLS.length; i++){
    const booksOnBookshelf = new Story(storiesFromLS[i].name);
    booksOnBookshelf.storyRender();
  }
  console.log('bookShelf array after reinstantiating through our Story constructor', bookShelf);
};

storybutton.addEventListener('click', handleStoryButtonClick);

//Profile button and LS

const profilebutton = document.getElementById('profilebutton');

const handleProfileButtonClick = function(){
  const profilesFromLS = JSON.parse(localStorage.profiles);
  console.log('userProfiles array after retrieving from local storage', userProfiles);
  for (let i = 0; i < profilesFromLS.length; i++){
    const profilesInStorage = new Profile(profilesFromLS[i].name);
    profilesInStorage.storyRender();
  }
  console.log('userProfiles array after reinstantiating through our Story constructor', userProfiles);
};

profilebutton.addEventListener('click', handleProfileButtonClick);
