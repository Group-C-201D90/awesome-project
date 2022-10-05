let imageArr = []


// >>> DOM Manipulation <<<
let imgArticle = document.getElementById('genre'); // images container
let imgFantasy = document.getElementById('fantasy');
let imgSciFi = document.getElementById('sci-fi');
let imgHorror = document.getElementById('horror');

// Constructor for image selection
function ImageGenre(name, fileExtension = 'jpg') {
  this.name = name;
  this.img = `img/${name}.${fileExtension}`;
  imageArr.push(this);
}

// // events for image clicked
// function handleImageClicked(event) {
//   console.dir(event.target);
// }
