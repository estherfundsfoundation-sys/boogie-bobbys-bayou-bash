(function () {
  const button = document.querySelector('.sound-toggle');
  const audio = document.getElementById('bayouAudio');
  if (!button || !audio) return;

  button.addEventListener('click', async function () {
    if (audio.paused) {
      try {
        await audio.play();
        button.classList.add('is-playing');
        button.setAttribute('aria-pressed', 'true');
        button.innerHTML = '<span aria-hidden="true">♫</span> Bayou Bash sound is on';
      } catch (error) {
        button.textContent = 'Add the music file to turn sound on';
      }
    } else {
      audio.pause();
      button.classList.remove('is-playing');
      button.setAttribute('aria-pressed', 'false');
      button.innerHTML = '<span aria-hidden="true">♫</span> Turn on the Bayou Bash sound';
    }
  });
}());
