'use strict'

function getStoryLS (){
  if (localStorage.stories) {
  const storiesFromLS = JSON.parse(localStorage.stories);
  return storiesFromLS;
  // for (let i = 0; i < storiesFromLS.length; i++) {
  //   new Story(storiesFromLS[i].name);
  //   bookShelf[i].storyRender();
  }
  }
  // storyform.addEventListener('submit', handleStorySubmit);
}

function getProfileLS (){
  if (localStorage.profiles) {
    const profilesFromLS = JSON.parse(localStorage.profiles);
    return profilesFromLS;
  //   for (let i = 0; i < profilesFromLS.length; i++) {
  //     new Profile(profilesFromLS[i].name);
  //     userProfiles[i].storyRender();
  //   }
  // }
  
  // profileform.addEventListener('submit', handleStorySubmit);
}