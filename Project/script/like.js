document.addEventListener('DOMContentLoaded', function() {

 
    var likedBooks = JSON.parse(localStorage.getItem('likedBooks')) || [];
 
    likedBooks.forEach(function(book) {
        let likedCard = document.createElement('div');
        likedCard.classList.add('card');
        likedCard.innerHTML = `
       
        <img class="card__background" src="${book.image}">
        <div class="card__content | flow">
        <div class="card__content--container | flow">
        <h3 class="card__title">${book.name}</h3>
        <p class="card__description">${book.description}.</p>
        
        </div>
        <div class="liked_books">
        <button class="card__button" ><a href="${book.link}">READ MORE</a></button>
        <i class="fas fa-thumbs-up heart fa-2xl" id="${book.id}"></i> 

        </div>
        </div>
   
        `;
 
        var likedBooksContainer = document.getElementById('container');
        likedBooksContainer.appendChild(likedCard);
    });



    var likeButtons = document.querySelectorAll('.heart');
 
    likeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Find the parent card element and remove it
                let card = button.closest('.card');
                if (card) {
                    card.remove();
                  
                    let buttonId = button.id;
                    // console.log(buttonId)
                    likedBooks = likedBooks.filter(b => b.id !== buttonId);
                   
                    localStorage.setItem('likedBooks', JSON.stringify(likedBooks));
                    
                }
        });
    });
 });


 