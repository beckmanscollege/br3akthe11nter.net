// load init when page has loaded
window.onload = init();

function init() {
  const photos = [
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/1.png?v=1675777356298",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/2.png?v=1675777358088",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/3.png?v=1675777359550",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/4.png?v=1675777360618",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/5.png?v=1675777361477",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/6.png?v=1675777362281",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/7.png?v=1676036244426",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/8.png?v=1676036245941",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/9.png?v=1676036248271",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/10.png?v=1676036250331",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/11.png?v=1676036251268",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/12.png?v=1676036252750",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/13.png?v=1676036253487",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/14.png?v=1676036254020",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/15.png?v=1676036254922",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/16.png?v=1676036255751",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/17.png?v=1676040371758",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/18.png?v=1676040373866",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/19.png?v=1676040375046",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/20.png?v=1676040375855",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/21.png?v=1676634900370",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/22.png?v=1676634902227",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/23.png?v=1676634903365",
    "https://cdn.glitch.global/a93f0b83-0eea-48ea-a39d-f60c9559c068/24.png?v=1676634904148"
  ];

  const bg = document.querySelector("#bg");
  const download = document.querySelector("#download");
  const message = document.querySelector("#message");
  const sound = document.querySelector("#sound");
  const zipFile = "https://cdn.glitch.me/a93f0b83-0eea-48ea-a39d-f60c9559c068/broken%20internet.zip?v=1676473504117"
  let currentIndex = 0;

  /*download.addEventListener("click", () => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomImage = data[randomIndex];
        const imageUrl = randomImage.download_url;

        const a = document.createElement("a");
        a.style.display = "none";
        a.href = imageUrl;
        a.download = "random-image.jpg";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
  });*/

  bg.style.backgroundImage = `url(${photos[currentIndex]})`;
  bg.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex === photos.length) {
      download.style.zIndex = 30;
      sound.currentTime = 0;
      sound.play();
    } else {
      bg.style.backgroundImage = `url(${photos[currentIndex]})`;
    }
  });
  download.onclick = function() {
    document.body.classList.add("download-clicked");
    window.location.href = zipFile
  };
}
