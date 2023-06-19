const none = document.getElementById("card-none");
const show = document.getElementById("card-show");
none.addEventListener("click", function() {
  if (show.style.display === "flex") {
    none.style.display = "none";
  } else {
    show.style.display = "flex";
  }
});