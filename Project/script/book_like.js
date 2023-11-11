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

var likeButtons = document.querySelectorAll('.likeButton');
  
likeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the book ID from the data-book-id attribute of the button
    // let bookId = button.getAttribute('data-book-id');
    var bookId = button.id;

    if (!localStorage.getItem('likedBooks')) {
      let likedBooks = [];
      localStorage.setItem('likedBooks', JSON.stringify(likedBooks));
    }

    var likedBooks = JSON.parse(localStorage.getItem('likedBooks'));

    // Find the book object in the books array with matching id
    var book = books.find(book => book.id === bookId);

    if (book) {
      // Check if the book is already liked
      var isLiked = likedBooks.some(b => b.id === book.id);

      if (!isLiked) {
        likedBooks.push(book);
        // button.textContent = 'Liked';
        button.innerHTML = `
        liked
        <i class="fas fa-thumbs-up fa-2xl "></i> 
        `
    
        // button.style.backgroundColor = '#3498db';
      } else {
        likedBooks = likedBooks.filter(b => b.id !== book.id);
        // button.textContent = 'Like';
        button.innerHTML = `
        like
        <i class="fas fa-thumbs-up fa-2xl" ></i> 
        `
        // button.style.backgroundColor = '#641d1d';
      }

      localStorage.setItem('likedBooks', JSON.stringify(likedBooks));
    }
  });
});

window.onload = function() {
  var likeButtons = document.querySelectorAll('.likeButton');
  
  likeButtons.forEach(function(button) { 
      if (!localStorage.getItem('likedBooks')) {
          var likedBooks = [];
          localStorage.setItem('likedBooks', JSON.stringify(likedBooks));
      }
  
      var likedBooks = JSON.parse(localStorage.getItem('likedBooks'));
      var buttonId = button.id;
      console.log("Button ID:", buttonId);
  
      for (let i = 0; i < likedBooks.length; i++){
          if (buttonId === likedBooks[i].id){
              button.textContent = 'Liked';
              // button.style.backgroundColor = '#3498db';
          }
      }
  });
  };

   