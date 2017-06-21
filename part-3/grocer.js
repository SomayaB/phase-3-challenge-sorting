
var addToCartButtons = document.querySelectorAll('.addToCartBtn')
var cartItemCount = 0
var cartModalContent = document.querySelector(".cartModalContent div")

for(var i = 0; i < addToCartButtons.length; i++){
  addToCartButtons[i].addEventListener("click", function(){
    cartItemCount++
    document.querySelector("#cart-item-count").textContent = '(' + cartItemCount + ')'
    cartModalContent.appendChild(document.createElement('p')).textContent=this.parentNode.childNodes[1].textContent
    cartModalContent.appendChild(document.createElement('li')).textContent=this.parentNode.childNodes[3].textContent
  })
}

document.querySelector(".clearButton").addEventListener("click", function(){
  clear()
  cartItemCount = 0
  document.querySelector("#cart-item-count").textContent = '(' + cartItemCount + ')'
})

function clear() {
  cartModalContent.parentNode.removeChild(cartModalContent);
  console.log(cartModalContent)
}


var cartModal = document.querySelector('.cartModal');

var cartButton = document.querySelector('#cart-button');

var span = document.querySelector(".close");

cartButton.addEventListener("click", function(){
  cartModal.style.display = "block";
})

span.addEventListener("click", function(){
  cartModal.style.display = "none";
})

window.addEventListener("click", function(event){
  if (event.target == cartModal) {
      cartModal.style.display = "none";
  }
})
