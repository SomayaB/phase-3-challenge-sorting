
var addToCartButtons = document.querySelectorAll('.addToCartBtn')
var cartItemCount = 0
var cartModalContent = document.querySelector(".cartModalContent div")
var cartTotal = 0

for(var i = 0; i < addToCartButtons.length; i++){
  addToCartButtons[i].addEventListener("click", function(){
    cartItemCount++
    document.querySelector("#cart-item-count").textContent = '(' + cartItemCount + ')'
    cartModalContent.appendChild(document.createElement('p')).textContent=this.parentNode.childNodes[1].textContent
    cartModalContent.appendChild(document.createElement('li')).textContent=this.parentNode.childNodes[3].textContent

    var price = Math.round(Number((this.parentNode.childNodes[3].textContent).replace(/[^0-9\.]+/g,"")) * 100) / 100
    cartTotal += price
    document.querySelector(".total").textContent = cartTotal
  })
}

document.querySelector(".clearButton").addEventListener("click", function(){
  clear()
  cartItemCount = 0
  document.querySelector("#cart-item-count").textContent = '(' + cartItemCount + ')'
  var cartTotal = 0
  document.querySelector(".total").textContent = cartTotal
})

function clear() {
  cartModalContent.parentNode.removeChild(cartModalContent)
  console.log(cartModalContent)
}


var cartModal = document.querySelector('.cartModal')

var cartButton = document.querySelector('#cart-button')

var close = document.querySelector(".close")

cartButton.addEventListener("click", function(){
  cartModal.style.display = "block"
})

close.addEventListener("click", function(){
  cartModal.style.display = "none"
})

window.addEventListener("click", function(event){
  if (event.target == cartModal) {
      cartModal.style.display = "none"
  }
})
