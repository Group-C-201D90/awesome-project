//TODO UPDATE PAGE LINKS AFTER CODE REVIEW

let bookShelf = [];
let userProfiles = [];
console.log(bookShelf);
console.log(userProfiles);
loadstorage();
console.log(bookShelf);
console.log(userProfiles);

let table = document.getElementById('shelf');
let trElem = document.createElement('tr');
let trElem2 = document.createElement('tr');

for (let i = 0; i < bookShelf.length; i++) {
  let thElem = document.createElement('th');
  let tdElem = document.createElement('td');

  tdElem.textContent = bookShelf[i].baseText;
  trElem.appendChild(tdElem);

  thElem.textContent = bookShelf[i].userName;
  trElem2.appendChild(thElem);

  table.appendChild(trElem);
  table.appendChild(trElem2);
}

function loadstorage() {
  let recallBook = localStorage.getItem('storedBooks');
  let recallProfile = localStorage.getItem('storedProfiles');
  if (recallBook) {
    let makeBook = JSON.parse(recallBook);

    bookShelf = makeBook;
  }
  if (recallProfile) {
    let makeProfile = JSON.parse(recallProfile);

    userProfiles = makeProfile;
  }
}
