let cards = [
  {
    title: "Gladiator",
    release: "2013",
    image: "images/bradlon.jpg",
  },
  {
    title: "Fury",
    release: "2014",
    image: "images/bradmo.jpg",
  },
  {
    title: "Troy",
    release: "2015",
    image: "images/helmet.jpg",
  },
  {
    title: "Snow",
    release: "2012",
    image: "images/bradlonghair.jpg",
  },
];

const container = document.querySelectorAll(".card");

const cardv = document.querySelector(".cards");

const repeater = cards.length - 1;

let counter;
// for (counter = 0; counter <= repeater; counter++) {
//     let cou = cards[counter];

  //   let all = container[counter];

  //   all.style.backgroundImage = `url('${cou.image}')`;

    cards.forEach(function(card1){
console.log(card1);
  const card = document.createElement("div");
  card.classList.add("card");
//   card.style.backgroundImage = `url('${cou.image}')`;
//   card.textContent = cards[card1].title + " " + cards[card1].release;
card.style.backgroundImage = `url('${card1.image}')`;
card.textContent= card1.title +" "+ card1.release;
  cardv.appendChild(card);
});
// }
