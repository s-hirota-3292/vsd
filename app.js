const app = () => {

  const playBtn = document.querySelector('.player-timer-btn');
  const song = document.querySelector('.song');
  const sounds = document.querySelectorAll('.soundList-item');
  let CaseDefault = "";
  let SetCase = 1;
  let HRValue = 120;
  let HRValue_String = 120;
  const HRUpBtn = document.querySelector('.HR-UP-Botton');
  const HRDOWNBtn = document.querySelector('.HR-DOWN-Botton');

  window.addEventListener('DOMContentLoaded', () => {
    setDefaultPlayer();
  });

  const setDefaultPlayer = () => {
    mapCheckPlayingEvent();//Playボタン押下
    mapClickEventToSoundBtn();//曲ボタン押下
    mapClickEventToHeartRateBtn();//HRボタン押下
  };


  const mapClickEventToHeartRateBtn = () => {

    HRUpBtn.addEventListener('click', () => {

      // 心拍数更新
      if (HRValue < 200) HRValue = HRValue + 10;
      HRValue_String = ('000' + HRValue).slice(-3);
      document.getElementById("HR-Count").textContent = HRValue;
      switch (SetCase) {
        case 1:
          CaseDefault = "sounds/Normal/01-" + HRValue_String + '.mp3';
          break;
        case 2:
          CaseDefault = "sounds/MR/02-" + HRValue_String + '.mp3';
          break;
        case 3:
          CaseDefault = "sounds/AS/03-" + HRValue_String + '.mp3';
          break;
        case 4:
          CaseDefault = "sounds/PSD/04-" + HRValue_String + '.mp3';
          break;
      }

      if (song.paused) {
        song.src = CaseDefault;
      } else {
        song.src = CaseDefault;
        console.log(CaseDefault);
        CaseDefault = "";
        song.play();
        playBtn.src = 'svg/stop.svg';
      }

    });

    HRDOWNBtn.addEventListener('click', () => {

      if (HRValue > 60) HRValue = HRValue - 10;
      HRValue_String = ('000' + HRValue).slice(-3);
      document.getElementById("HR-Count").textContent = HRValue;
      CaseDefault = "sounds/Normal/01-" + HRValue_String + '.mp3';

      switch (SetCase) {
        case 1:
          CaseDefault = "sounds/Normal/01-" + HRValue_String + '.mp3';
          break;
        case 2:
          CaseDefault = "sounds/MR/02-" + HRValue_String + '.mp3';
          break;
        case 3:
          CaseDefault = "sounds/AS/03-" + HRValue_String + '.mp3';
          break;
        case 4:
          CaseDefault = "sounds/PSD/04-" + HRValue_String + '.mp3';
          break;
      }
      if (song.paused) {
        song.src = CaseDefault;
      } else {
        song.src = CaseDefault;
        console.log(CaseDefault);
        CaseDefault = "";
        song.play();
        playBtn.src = 'svg/stop.svg';
      }
    });

    document.getElementById('Normal').addEventListener('click', () => {
      SetCase = 1;
    });
    document.getElementById('MR').addEventListener('click', () => {
      SetCase = 2;
    });
    document.getElementById('AS').addEventListener('click', () => {
      SetCase = 3;
    });
    document.getElementById('PSD').addEventListener('click', () => {
      SetCase = 4;
    });

  }

  const mapCheckPlayingEvent = () => {
    playBtn.addEventListener('click', () => {
      checkPlaying(song);
    });
  }

  const checkPlaying = () => {
    if (song.paused) {
      song.play();
      playBtn.src = 'svg/stop.svg';
    } else {
      song.pause();
      playBtn.src = 'svg/play.svg';
    }
  };

  const mapClickEventToSoundBtn = () => {

    sounds.forEach(sound => {
      sound.addEventListener('click', function () {
        const imageUrl = this.getAttribute('data-image');
        const title = this.querySelector('.soundList-title').innerText;
        const description = this.querySelector('.soundList-description').innerText;
        const songData = this.getAttribute('data-sound') + HRValue_String + '.mp3';
        currentDuration = parseInt(this.getAttribute('data-time'));
        currentTime = 0;

        setPlayerSong(songData, imageUrl);
        setPlayerText(title, description, currentDuration);

        console.log(songData);

        song.play();
        playBtn.src = 'svg/stop.svg';
      });
    });
  };

  const setPlayerSong = (songData, imageUrl) => {
    song.src = songData;
    playBtn.src = 'svg/play.svg';
  }

  const setPlayerText = (title, description) => {
    const playerTitle = document.querySelector('.title-headline');
    const playerDescription = document.querySelector('.title-description');

    playerTitle.innerText = title;
    playerDescription.innerText = description;
  };

  // const updateTimerText = () => {
  //   currentTime = song.currentTime;
  //   leftDuration = currentDuration - currentTime;
  //   minutes = Math.floor(leftDuration / 60);
  //   seconds = Math.floor(leftDuration % 60);


  // };
}

app();