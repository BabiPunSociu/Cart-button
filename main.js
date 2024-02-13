var myBtn = document.getElementById("cart-btn");
myBtn.addEventListener("click", () => {
  /* Text hidden */
  var myText = document.getElementsByClassName("cart-btn_text")[0];
  myText.classList.add("text-to-hidden");

  /* Animation cart to center */
  var myCart = document.getElementsByClassName("cart-icon")[0];
  myCart.classList.add("cart-to-center");

  /* Animation shirt to center */
  var myShirt = document.getElementsByClassName("shirt-icon")[0];
  myShirt.classList.add("shirt-to-center");

  setTimeout(() => {
    /* Animation cart to end */
    myCart.classList.add("cart-to-end");
  }, 1000 * 2);

  setTimeout(() => {
    /* Thêm overflow cho button */
    myBtn.style.overflow = "hidden";
  }, 1000 * 2.5);

  setTimeout(() => {
    /* Xóa hết các class animation */
    myCart.classList.remove("cart-to-center", "cart-to-end");
    myShirt.classList.remove("shirt-to-center");
    myText.classList.remove("text-to-hidden");
    myBtn.style.overflow = "visible";
  }, 1000 * 3);
});
