
        var cart = JSON.parse(localStorage.getItem("cart")) || [];
        var totalPrice= 0;
        var paypalButtonRendered = false;
        function updateCartDisplay() {
          totalPrice = 0;
            var cartItemsList = $("#cart-items");

            // Clear the cart display
            cartItemsList.empty();

            // Loop through cart items and display them
            $.each(cart, function (index, productData) {
                var newRow = $("<tr>").appendTo(cartItemsList);



              $("<td>").css("width", "150").addClass("iconcontainer")
                .append($("<img>").attr("src", productData.image).addClass("icon"))
                .appendTo(newRow);


             
                $("<td>").text(productData.name).css("width", "360").appendTo(newRow);



                $("<td>").text(productData.price + " $").css("width", "150").appendTo(newRow);

 


                var listDelete = $("<td>").css("width", "70");
                
                // Create a remove button with an "X" icon
                var removeButton = $("<i>").addClass("fa-solid fa-trash");
                removeButton.click(function () {
                    // Remove the item from the cart
                    cart.splice(index, 1);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    updateCartDisplay();// Update the cart display
                    
                });

                var listDelete = $("<td>").css("width", "70").append(removeButton);
                listDelete.appendTo(newRow);

                

                totalPrice += parseFloat(productData.price);
            });

            // Update the total price
            $("#total-price").text(totalPrice+" $");

        var itemNum=document.getElementById("itemB");
        itemNum.innerHTML=cart.length+" Books";


        if (!paypalButtonRendered && totalPrice > 0) {
          setupPayPalButtons(totalPrice);
          paypalButtonRendered = true; 
        }

        }



        function setupPayPalButtons(totalPrice) {
          paypal.Buttons({
            createOrder: function (data, actions) {
              // Set up the transaction
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: totalPrice // Use the total price
                  }
                }]
              });
            },
            onApprove: function (data, actions) {
              // Capture the funds
              return actions.order.capture().then(function (details) {
                // Handle a successful transaction
                alert('Transaction completed by ' + details.payer.name.given_name);
                // You can also send the payment details to your server for verification
              });
            }
          }).render('.paypal-button-container');
        }



        
        // Call the setupPayPalButtons function to initially render the PayPal button
      
        
        // Call the function to initially populate the cart
        updateCartDisplay();







