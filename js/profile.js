let myForm = document.getElementById('newUser');

let userProfiles = [];

function Profile(name, age, pronoun) {
  this.name = name;
  this.age = age;
  this.pronoun = pronoun;

  userProfiles.push(this);

}

function handleProfileSubmit(event) {
  event.preventDefault();
  
  let name = event.target.userName.value;
  let age = event.target.userAge.value;
  let pronoun = event.target.pronoun.value;
  
  let newProfile = new Profile(name, age, pronoun);
  console.log(userProfiles);
}

myForm.addEventListener('submit', handleProfileSubmit);

