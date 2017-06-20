
var addToCartButtons = document.querySelectorAll('.addToCartBtn')
// "#cart-item-count"
var cartItemCount = 0


for(var i = 0; i < addToCartButtons.length; i++){
  addToCartButtons[i].addEventListener("click", function(){
  cartItemCount++;
  document.querySelector("#cart-item-count").textContent = '(' + cartItemCount + ')'
  })
}
