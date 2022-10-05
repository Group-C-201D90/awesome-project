// image array
let imageArr = [];

// >>> DOM Manipulation <<<
let imgArticle = document.getElementById('genre'); // images container

// Constructor for image selection
function ImageGenre(name, fileExtension = 'jpg') {
  this.name = name;
  this.img = `img/${name}.${fileExtension}`;
  imageArr.push(this);
}

// events for image clicked
function handleImageClicked(event) {
  console.dir(event.target);
  let clickedImg = event.target.alt;

  if (imageArr[0] === clickedImg) {
    let genreindex = 0;  // horror
  } else if(imageArr[1] === clickedImg) {
    let genreindex = 1;  // fantasy
  } else if (imageArr[2] === clickedImg) {
    let genreindex = 2;  // sci-fi
  }

}

new ImageGenre('HORROR');
new ImageGenre('FANTASY');
new ImageGenre('SCI-FI');

imgArticle.addEventListener('click', handleImageClicked);