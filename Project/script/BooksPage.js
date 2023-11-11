
var books = [
   
  {
      name: "Nazret Elfosdk",
      image: "./img/Books/nazret elfosdk.jpg",
      link: "./html Books/nazret elfosdk.html", 
      description: "The book “Pistachio Theory” is one of the creations of the Saudi writer “Fahd Amer Al-Ahmadi”."
  }
  ,
  {
      name: "The Boy at Mugby",
      image: "./img/Books/The Boy at Mugby.jpg",
      link: "./html Books/The Boy at Mugby.html", 
      description: "An Anthology in Thirty Volumes. 1917. The Boy at Mugby. By Charles Dickens"
  }
  
  ,
  {   
      name: "The Apple",
      image: "./img/Books/The Apple.jpg",
      link: "./html Books/The Apple.html", 
      description: "Published in the United States in 1898, The Apple is profound research"
  }
  ,
  {  
      name: "Night Surf",
      image: "./img/Books/Night Surf.jpg",
      link: "./html Books/Night Surf.html", 
      description: "Night Surf is a post-apocalyptic short story by Stephen King"
  }
  ,
  {
      name: "Saheb Elzel Altawel",
      image: "./img/Books/saheb elzel altawel.jpg",
      link: "./html Books/saheb elzel altawel.html", 
      description: "Daddy-Long-Legs is a 1912 epistolary novel by the American writer Jean Webster."
  }
  ,
  {
      name: "Thik Benafsk",
      image: "./img/Books/thik benafsk.jpg",
      link: "./html Books/thik benafsk.html", 
      description: "Your self-confidence is the way to achieve your dreams. This is the most important thing that Joseph Murphy."
  }
  ,
  {
      name: "The Poor Traveler",
      image: "./img/Books/The Poor Traveler.jpg",
      link: "./html Books/The Poor Traveler.html", 
      description: "Reprint of the original, first published in 1858. The publishing house Anatiposi publishes historical books as reprints. Due to their age"
  },
  {

      name: "The Three Questions",
      image: "./img/Books/The Three Questions.jpg",
      link: "./html Books/The Three Questions.html", 
      description: "is a 1903 short story by Russian author Leo Tolstoy as part of the collection ..."
  },
  {
      name: "LUCK by Mark Twain",
      image: "./img/Books/LUCK by Mark Twain.jpg",
      link: "./html Books/LUCK by Mark Twain.html", 
      description: "Luck is an 1886 short story by Mark Twain which was first published in 1891 in Harper's Magazine."
  }
  ,
  {
      name: "Gadid Nafsk",
      image: "./img/Books/gadid nafsk.jpg",
      link: "./html Books/gadid nafsk.html", 
    description: "Renew Yourself: How to Become the Person You've Always Wanted to Be by Steve Chandler"
  }
  
  ,
  {
      name: "Bolyana",
      image: "./img/Books/bolyana.jpg",
      link: "./html Books/bolyana.html", 
      description: "Pollyanna is a 1913 novel by American author Eleanor H. Porter, considered a classic of children's literature."
  }
  ,
  {
      name: "The Diver",
      image: "./img/Books/The Diver.jpg",
      link: "./html Books/The Diver.html", 
      description: "For some reason or other the B.B.C. are always asking me to tell a ghost story"
  }
  ,
  {
    name: "Book",
    image: "./img/Books/Book.jpg",
    link: "./Home.html", 
    description: "A country in North Africa with ancient pyramids and a vibrant culture"
  }
  ,
  {
    name: "Book",
    image: "./img/Books/Book.jpg",
    link: "./Home.html", 
    description: "A country in North Africa with ancient pyramids and a vibrant culture"
  }
 
  ,
  {
    name: "Book",
    image: "./img/Books/Book.jpg",
    link: "./Home.html", 
    description: "A country in North Africa with ancient pyramids and a vibrant culture"
  }
 
  ,
  {
    name: "Book",
    image: "./img/Books/Book.jpg",
    link: "./Home.html", 
    description: "A country in North Africa with ancient pyramids and a vibrant culture"
  }
 
 
  
];


function createCard(book) {

  var card = document.createElement("div");
  card.className = "card";


  var cardImage = document.createElement("img");
  cardImage.className = "card__background";
  cardImage.src = book.image;


  var cardContent = document.createElement("div");
  cardContent.className = "card__content | flow";

 
  var cardContentContainer = document.createElement("div");
  cardContentContainer.className = "card__content--container | flow";

 
  var cardTitle = document.createElement("h3");
  cardTitle.className = "card__title";
  cardTitle.textContent = book.name;


  var cardDescription = document.createElement("p");
  cardDescription.className = "card__description";
  cardDescription.textContent = book.description;

  
  cardContentContainer.appendChild(cardTitle);
  cardContentContainer.appendChild(cardDescription);

 
  var cardButton = document.createElement("button");
  cardButton.className = "card__button";
  cardButton.textContent = "Read more";

 
   cardButton.addEventListener("click", function() {
       window.open(book.link, "_blank");
   });


   cardContent.appendChild(cardContentContainer);
   cardContent.appendChild(cardButton);


   card.appendChild(cardImage);
   card.appendChild(cardContent);

   return card;
}


var container = document.getElementById("container");




for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var card = createCard(book);
  container.appendChild(card);
}
function openwindow(){
  window.open("../audio.html");
}

