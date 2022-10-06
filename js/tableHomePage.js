// function tableRender(storyindex){
//   let table = document.getElementById('bookshelf');
//   // wyos.remove();
//   let trElem = document.createElement('tr');

//   for (let i = 0; i < genretypes.length; i++) {
//     let thElem = document.createElement('th');
//     let tdElem = document.createElement('td');

//     // thElem.textContent = genretypes[storyindex][i][0];
//     tdElem.textContent = genretypes[storyindex][i];
//     trElem.appendChild(tdElem);
//     table.appendChild(trElem);
//   }
// }



  let table = document.getElementById('bookshelf');
  let trElem = document.createElement('tr');
  let trElem2 = document.createElement('tr');


  for (let i = 0; i < bookShelf.length; i++) {
    let thElem = document.createElement('th');
    let tdElem = document.createElement('td');

    thElem.textContent = 'Username';
    trElem.appendChild(thElem);

    tdElem.textContent = this.user;
    trElem2.appendChild(tdElem);

    table.appendChild(trElem);
    table.appendChild(trElem2);
    