
 var books = [
   
    {
        id:"Book1",
        name: "Nazret Elfosdk",
        image: "./img/Books/nazret elfosdk.jpg",
        link: "./html Books/nazret elfosdk.html", 
        description: "The book “Pistachio Theory” is one of the creations of the Saudi writer “Fahd Amer Al-Ahmadi”."
    }
    ,
    {     
        id:"Book2",
        name: "The Boy at Mugby",
        image: "./img/Books/The Boy at Mugby.jpg",
        link: "./html Books/The Boy at Mugby.html", 
        description: "An Anthology in Thirty Volumes. 1917. The Boy at Mugby. By Charles Dickens"
    }
    
    ,
    {
        id:"Book3",
        name: "The Apple",
        image: "./img/Books/The Apple.jpg",
        link: "./html Books/The Apple.html", 
        description: "Published in the United States in 1898, The Apple is profound research"
    }
    ,
    {
        id:"Book4",
        name: "Night Surf",
        image: "./img/Books/Night Surf.jpg",
        link: "./html Books/Night Surf.html", 
        description: "Night Surf is a post-apocalyptic short story by Stephen King"
    }
    ,
    {
        id:"Book5",
        name: "Saheb Elzel Altawel",
        image: "./img/Books/saheb elzel altawel.jpg",
        link: "./html Books/saheb elzel altawel.html", 
        description: "Daddy-Long-Legs is a 1912 epistolary novel by the American writer Jean Webster."
    }
    ,
    {
        id:"Book6",
        name: "Thik Benafsk",
        image: "./img/Books/thik benafsk.jpg",
        link: "./html Books/thik benafsk.html", 
        description: "Your self-confidence is the way to achieve your dreams. This is the most important thing that Joseph Murphy."
    }
    ,
    {
        id:"Book7",
        name: "The Poor Traveler",
        image: "./img/Books/The Poor Traveler.jpg",
        link: "./html Books/The Poor Traveler.html", 
        description: "Reprint of the original, first published in 1858. The publishing house Anatiposi publishes historical books as reprints. Due to their age"
    },
    {
        id:"Book8",
        name: "The Three Questions",
        image: "./img/Books/The Three Questions.jpg",
        link: "./html Books/The Three Questions.html", 
        description: "is a 1903 short story by Russian author Leo Tolstoy as part of the collection ..."
    },
    {
        id:"Book9",
        name: "LUCK by Mark Twain",
        image: "./img/Books/LUCK by Mark Twain.jpg",
        link: "./html Books/LUCK by Mark Twain.html", 
        description: "Luck is an 1886 short story by Mark Twain which was first published in 1891 in Harper's Magazine."
    }
    ,
    {
        id:"Book10",
        name: "Gadid Nafsk",
        image: "./img/Books/gadid nafsk.jpg",
        link: "./html Books/gadid nafsk.html", 
      description: "Renew Yourself: How to Become the Person You've Always Wanted to Be by Steve Chandler"
    }
    
    ,
    {
        id:"Book11",
        name: "Bolyana",
        image: "./img/Books/bolyana.jpg",
        link: "./html Books/bolyana.html", 
        description: "Pollyanna is a 1913 novel by American author Eleanor H. Porter, considered a classic of children's literature."
    }
    ,
    {
        id:"Book12",
        name: "The Diver",
        image: "./img/Books/The Diver.jpg",
        link: "./html Books/The Diver.html", 
        description: "For some reason or other the B.B.C. are always asking me to tell a ghost story"
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


// ____________________________________________________ SLIDER _____________________________________________
// ____________________________________________________ SLIDER _____________________________________________
// ____________________________________________________ SLIDER _____________________________________________
// ____________________________________________________ SLIDER _____________________________________________
// ____________________________________________________ SLIDER _____________________________________________

  (function() {
  
    var autoUpdate = false,
        timeTrans = 4000;
    
      var cdSlider = document.querySelector('.cd-slider'),
          item = cdSlider.querySelectorAll("li"),
          nav = cdSlider.querySelector("nav");
  
      item[0].className = "current_slide";
  
      for (var i = 0, len = item.length; i < len; i++) {
          var color = item[i].getAttribute("data-color");
          item[i].style.backgroundColor=color;
      }
  
      // Detect IE
      // hide ripple effect on IE9
      var ua = window.navigator.userAgent;
          var msie = ua.indexOf("MSIE");
          if ( msie > 0 ) {
              var version = parseInt(ua.substring(msie+ 5, ua.indexOf(".", msie)));
              if (version === 9) { cdSlider.className = "cd-slider ie9";}
      }
  
      if (item.length <= 1) {
          nav.style.display = "none";
      }
  
      function prevSlide() {
          var currentSlide = cdSlider.querySelector("li.current_slide"),
              prevElement = currentSlide.previousElementSibling,
              prevSlide = ( prevElement !== null) ? prevElement : item[item.length-1],
              prevColor = prevSlide.getAttribute("data-color"),
              el = document.createElement('span');
  
          currentSlide.className = "";
          prevSlide.className = "current_slide";
  
          nav.children[0].appendChild(el);
  
          var size = ( cdSlider.clientWidth >= cdSlider.clientHeight ) ? cdSlider.clientWidth*2 : cdSlider.clientHeight*2,
              ripple = nav.children[0].querySelector("span");
  
          ripple.style.height = size + 'px';
          ripple.style.width = size + 'px';
          ripple.style.backgroundColor = prevColor;
  
          ripple.addEventListener("webkitTransitionEnd", function() {
              if (this.parentNode) {
                  this.parentNode.removeChild(this);
              }
          });
  
          ripple.addEventListener("transitionend", function() {
              if (this.parentNode) {
                  this.parentNode.removeChild(this);
              }
          });
  
      }
  
      function nextSlide() {
          var currentSlide = cdSlider.querySelector("li.current_slide"),
              nextElement = currentSlide.nextElementSibling,
              nextSlide = ( nextElement !== null ) ? nextElement : item[0],
              nextColor = nextSlide.getAttribute("data-color"),
              el = document.createElement('span');
  
          currentSlide.className = "";
          nextSlide.className = "current_slide";
  
          nav.children[1].appendChild(el);
  
          var size = ( cdSlider.clientWidth >= cdSlider.clientHeight ) ? cdSlider.clientWidth*2 : cdSlider.clientHeight*2,
                ripple = nav.children[1].querySelector("span");
  
          ripple.style.height = size + 'px';
          ripple.style.width = size + 'px';
          ripple.style.backgroundColor = nextColor;
  
          ripple.addEventListener("webkitTransitionEnd", function() {
              if (this.parentNode) {
                  this.parentNode.removeChild(this);
              }
          });
  
          ripple.addEventListener("transitionend", function() {
              if (this.parentNode) {
                  this.parentNode.removeChild(this);
              }
          });
  
      }
  
      updateNavColor();
  
      function updateNavColor () {
          var currentSlide = cdSlider.querySelector("li.current_slide");
  
          var nextColor = ( currentSlide.nextElementSibling !== null ) ? currentSlide.nextElementSibling.getAttribute("data-color") : item[0].getAttribute("data-color");
          var	prevColor = ( currentSlide.previousElementSibling !== null ) ? currentSlide.previousElementSibling.getAttribute("data-color") : item[item.length-1].getAttribute("data-color");
  
          if (item.length > 2) {
              nav.querySelector(".prev").style.backgroundColor = prevColor;
              nav.querySelector(".next").style.backgroundColor = nextColor;
          }
      }
  
      nav.querySelector(".next").addEventListener('click', function(event) {
          event.preventDefault();
          nextSlide();
          updateNavColor();
      });
  
      nav.querySelector(".prev").addEventListener("click", function(event) {
          event.preventDefault();
          prevSlide();
          updateNavColor();
      });
    
    //autoUpdate
    setInterval(function() {
      if (autoUpdate) {
        nextSlide();
        updateNavColor();
      };
      },timeTrans);
  
  })();


  

     
    


