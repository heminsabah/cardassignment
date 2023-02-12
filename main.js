let cards= [
    {
         title:  "Gladiator",release: "2013", image:"images/bradlong.jpg",
         
        },
        {
            title:  "Fury",release: "2014", image:"images/bradmo.jpg", 
        },
        {
            title:  "Troy", release: "2015",image:"images/helmet.jpg",
        },
        {
            title:  "Snow", release: "2012", image: "images/bradlonghair.jpg",
        },
];
    



const container = document.querySelectorAll('.card');

const repeater = cards.length-1;

let counter;
for(counter=0; counter<=repeater;counter++){
    let cou = cards[counter];
    
    let all = container[counter];

    
    all.style.backgroundImage= `url('${cou.image}')`;
   
    all.textContent = cards[counter].title+ " "+ cards[counter].release ;
   
}

