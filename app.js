//Movement for Animation 
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items
const title = document.querySelector(".title");
const photo = document.querySelector(".photo img");
const LinkedIn = document.querySelector(".LinkedIn");
const description = document.querySelector(".info h3");
const online = document.querySelector(".online");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  //Popout
  title.style.transform = "translateZ(150px)";
  photo.style.transform = "translateZ(200px) rotateZ(-2deg)";
  description.style.transform = "translateZ(125px)";
  online.style.transform = "translateZ(100px)";
  LinkedIn.style.transform = "translateZ(75px)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;


  //Popback
  title.style.transform = "translateZ(0px)";
  photo.style.transform = "translateZ(200px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  online.style.transform = "translateZ(0px)";
  LinkedIn.style.transform = "translateZ(0px)";
});