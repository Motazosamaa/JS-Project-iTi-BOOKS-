$(".add-to-cart").click(function () {
    // Retrieve product attributes from the clicked product
    var productName = $(this).closest(".card_datails").data("name");
    var productPrice = $(this).closest(".card_datails").data("price");
    var productImage =$(this).closest(".card_datails").data("image");
    // Create a data object with the product information
    var productData = {
        name: productName,
        price: productPrice,
        image:productImage
    };

    // Retrieve the cart from localStorage or create an empty array
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the product data to the cart
    cart.push(productData);

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Provide some visual feedback, e.g., by changing the button text
    $(this).text("Added to Cart");
    
});


function openwindow(){

    window.open("../audio.html");

}


