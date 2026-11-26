/*
 * YouTube videos on project/experience pages (see _layouts/project.html).
 *
 * With autoplay on, YouTube's player is a black box until playback really starts,
 * and stays black if the browser blocks autoplay. So each video is covered by its
 * thumbnail, which is removed once the video is actually playing. If it never
 * starts, the thumbnail stays and a click on it plays the video.
 */
(function () {
  var boxes = Array.prototype.slice.call(document.querySelectorAll('.project-video'));
  if (!boxes.length) return;

  function reveal(box) {
    box.classList.add('is-playing');
  }

  boxes.forEach(function (box) {
    var poster = box.querySelector('.video-poster');
    if (!poster) return;

    // Sharper thumbnail when YouTube has one (a missing one comes back as a 120px placeholder).
    var better = new Image();
    better.onload = function () {
      if (better.naturalWidth > 120) poster.style.backgroundImage = 'url("' + better.src + '")';
    };
    better.src = 'https://i.ytimg.com/vi/' + box.getAttribute('data-youtube') + '/' +
      (box.hasAttribute('data-vertical') ? 'oardefault' : 'maxresdefault') + '.jpg';

    poster.addEventListener('click', function () {
      reveal(box);
      if (box.ytPlayer && box.ytPlayer.playVideo) box.ytPlayer.playVideo();
    });
  });

  window.onYouTubeIframeAPIReady = function () {
    boxes.forEach(function (box) {
      box.ytPlayer = new YT.Player(box.querySelector('iframe'), {
        events: {
          onReady: function (event) {
            var player = event.target;
            var timer = setInterval(function () {
              if (box.classList.contains('is-playing')) {
                clearInterval(timer);
              } else if (player.getPlayerState() === YT.PlayerState.PLAYING && player.getCurrentTime() > 0.2) {
                clearInterval(timer);
                reveal(box);
              }
            }, 150);
          }
        }
      });
    });
  };

  // Without YouTube's API we cannot tell when playback starts: show the plain player.
  var api = document.createElement('script');
  api.src = 'https://www.youtube.com/iframe_api';
  api.onerror = function () { boxes.forEach(reveal); };
  document.head.appendChild(api);
})();
