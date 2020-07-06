//let hButton = document.querySelector(".hamburger-button");
//hButton.addEventListener("click", openNav);

function openNav() {
  document.querySelector("#mySidenav").style.width = "21%";
}
let closeButton = document.querySelector("#mySidenav");
closeButton.addEventListener("click", closeNav);
function closeNav() {
  document.querySelector("#mySidenav").style.width = "0";
}

//fwxUMVRWEwEB4QSXOKgUuUJcvg6CG3dk8B108l1W
//https://api.nasa.gov/planetary/apod

//trefle
//L0xBODJtQjhIeUZYSi9tUW1oNDI1Zz09

let body = document.querySelector("body");
//body background image fetch
/*const res = "https://api.nasa.gov/planetary/apod?api_key=fwxUMVRWEwEB4QSXOKgUuUJcvg6CG3dk8B108l1W";
fetch(res)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    document.body.style.backgroundImage = `url(${res.url})`;
  })
  .catch((err) => console.log("something went wrong", err));
  */

const FHAZres =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=fwxUMVRWEwEB4QSXOKgUuUJcvg6CG3dk8B108l1W";
let image = document.querySelector(".picture-image");
let FHAZ = document.querySelector(".FHAZ");
FHAZ.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(FHAZres)
    .then((FHAZres) => FHAZres.json())
    .then((FHAZres) => {
      console.log(FHAZres);
      image.src = FHAZres.photos[Math.floor(Math.random() * 2)].img_src;
    })
    .catch((err) => console.log("something went wrong", err));
});
const RHAZres =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=rhaz&api_key=fwxUMVRWEwEB4QSXOKgUuUJcvg6CG3dk8B108l1W";
let RHAZ = document.querySelector(".RHAZ");
RHAZ.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(RHAZres)
    .then((RHAZres) => RHAZres.json())
    .then((RHAZres) => {
      console.log(RHAZres);
      image.src = RHAZres.photos[Math.floor(Math.random() * 2)].img_src;
    })
    .catch((err) => console.log("something went wrong", err));
});
const MASTres =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=fwxUMVRWEwEB4QSXOKgUuUJcvg6CG3dk8B108l1W";
let MAST = document.querySelector(".MAST");
MAST.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(MASTres)
    .then((MASTres) => MASTres.json())
    .then((MASTres) => {
      console.log(MASTres);
      image.src = MASTres.photos[Math.floor(Math.random() * 836)].img_src;
    })
    .catch((err) => console.log("something went wrong", err));
});
const NAVCAMres =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=fwxUMVRWEwEB4QSXOKgUuUJcvg6CG3dk8B108l1W";
let NAVCAM = document.querySelector(".NAVCAM");
NAVCAM.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(NAVCAMres)
    .then((NAVCAMres) => NAVCAMres.json())
    .then((NAVCAMres) => {
      console.log(NAVCAMres);
      image.src = NAVCAMres.photos[Math.floor(Math.random() * 10)].img_src;
    })
    .catch((err) => console.log("something went wrong", err));
});
