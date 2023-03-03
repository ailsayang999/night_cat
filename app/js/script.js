let starContainer = document.querySelector(".stars");
let img = document.querySelector("#popcat");
let count = document.querySelector("#score");
let score = 0;
let audio = new Audio(
  "https://www.myinstants.com/media/sounds/pop-cat-original-meme_3ObdYkj.mp3"
);

img.addEventListener("mousedown", function () {
  img.src = "cat2.png";
  increaseScore();
  audio.play();
  starContainer.innerHTML = `<i class="fa-sharp fa-solid fa-star star1 fa-2xl fa-rotate-90"></i>
  <i class="fa-sharp fa-solid fa-star star2 fa-xl fa-rotate-90"></i>
  <i class="fa-sharp fa-solid fa-star star3 fa-xl"></i>
   <i class="fa-sharp fa-solid fa-star star4 fa-lg fa-rotate-270"></i>`;
});

img.addEventListener("mouseup", function () {
  img.src = "cat1.png";
  starContainer.innerHTML = "";
});

function increaseScore() {
  score++;
  count.innerHTML = score;
}
