
var addToCartButtons = document.querySelectorAll('.addToCartBtn')
var cartItemCount = 0


for(var i = 0; i < addToCartButtons.length; i++){
  addToCartButtons[i].addEventListener("click", function(){
  cartItemCount++;
  document.querySelector("#cart-item-count").textContent = '(' + cartItemCount + ')'
  })
}


// Get the modal
var cartModal = document.querySelector('.cartModal');

// Get the button that opens the modal
var cartButton = document.querySelector('#cart-button');

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on the button, open the modal
cartButton.addEventListener("click", function(){
  cartModal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function(){
  cartModal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event){
  if (event.target == cartModal) {
      cartModal.style.display = "none";
  }
})


//when add to cart is clicked, add textcontent of the item clicked to li inside cartModal div (this will be hidden until modal is opened)
