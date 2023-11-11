var books = [
   
    
    {
        name: "Bolyana",
        image: "../img/Books/bolyana.jpg",
        link: "../html Books/bolyana.html", 
        description: "Pollyanna is a 1913 novel by American author Eleanor H. Porter, considered a classic of children's literature."
    },
    

   
   
    
  ];
  
  // A function to create a card element for a given book
  function createCard(book) {
    // Create a div element with the class "card"
    var card = document.createElement("div");
    card.className = "card";
  
    // Create an img element with the class "card__background" and the src attribute set to the book's image
    var cardImage = document.createElement("img");
    cardImage.className = "card__background";
    cardImage.src = book.image;
  
    // Create a div element with the class "card__content | flow"
    var cardContent = document.createElement("div");
    cardContent.className = "card__content | flow";
  
    // Create a div element with the class "card__content--container | flow"
    var cardContentContainer = document.createElement("div");
    cardContentContainer.className = "card__content--container | flow";
  
    // Create a h3 element with the class "card__title" and the text content set to the book's name
    var cardTitle = document.createElement("h3");
    cardTitle.className = "card__title";
    cardTitle.textContent = book.name;
  
    // Create a p element with the class "card__description" and the text content set to the book's description
    var cardDescription = document.createElement("p");
    cardDescription.className = "card__description";
    cardDescription.textContent = book.description;
  
    // Append the title and the description to the content container
    cardContentContainer.appendChild(cardTitle);
    cardContentContainer.appendChild(cardDescription);
  
    // Create a button element with the class "card__button" and the text content set to "Read more"
    var cardButton = document.createElement("button");
    cardButton.className = "card__button";
    cardButton.textContent = "Read more";
  
     // Add an event listener to the button that opens the book's link in a new tab when clicked
     cardButton.addEventListener("click", function() {
         window.open(book.link, "_blank");
     });
  
     // Append the content container and the button to the content
     cardContent.appendChild(cardContentContainer);
     cardContent.appendChild(cardButton);
  
     // Append the image and the content to the card
     card.appendChild(cardImage);
     card.appendChild(cardContent);
  
     // Return the card element
     return card;
  }
  
  // Get the container element by its id
  var container = document.getElementById("container");
  
  
  
  // Loop through the books array and append a card for each country to the container
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var card = createCard(book);
    container.appendChild(card);
  }
  function openwindow(){
    window.open("../audio.html");
  }
  
 