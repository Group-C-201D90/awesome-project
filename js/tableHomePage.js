// function storyRender(storyindex){
//   const wyos = document.getElementById('wyos');
//   wyos.remove();
//   let storyContent = document.createElement('p');
//   storyContent.textContent = genretypes[storyindex][0];
//   storyDisplay.appendChild(storyContent);

// }


function storyRender(storyindex){
  let table = document.getElementById('bookshelf');
  // wyos.remove();
  let trElem = document.createElement('tr');

  for (let i = 0; i < genretypes.length; i++) {
    let tdElem = document.createElement('td');

    let storyContent = document.createElement('p');
    storyContent.textContent = genretypes[storyindex][i];
    tdElem.appendChild(storyContent);
    trElem.appendChild(tdElem);
    table.appendChild(trElem);
  }

}
