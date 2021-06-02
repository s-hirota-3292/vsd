const app = () => {

  const playBtn = document.querySelector('.player-timer-btn');
  const song = document.querySelector('.song');
  const player = document.querySelector('.player');
  const sounds = document.querySelectorAll('.soundList-item');
  // const outline = document.querySelector('.player-timer-moving-circle circle');
  // const outlineLength = outline.getTotalLength();
  // const timeDisplay = document.querySelector('.timeDisplay');


  let SetCase = 1;
  let HRValue = 120;
  const HRUpBtn = document.querySelector('.HR-UP-Botton');
  const HRDOWNBtn = document.querySelector('.HR-DOWN-Botton');

  // let currentTime = song.currentTime;
  // let currentDuration = 120;
  // let leftDuration = currentDuration - currentTime;
  // let minutes = Math.floor(leftDuration / 60);
  // let seconds = Math.floor(leftDuration % 60);

  window.addEventListener('DOMContentLoaded', () => {
    setDefaultPlayer();
  });

  const setDefaultPlayer = () => {
    // setCircleStroke();
    // updatePlayerByTimeUpdate();
    // setTimerText(minutes, seconds);
    mapCheckPlayingEvent();//曲再生イベント
    mapClickEventToSoundBtn();//曲リスト更新
    TestEvent();
  };

  // 追加したよ
  const TestEvent = () => {

    HRUpBtn.addEventListener('click', () => {
      console.log(SetCase);
      song.pause();
      playBtn.src = 'svg/play.svg';
      if (HRValue < 200) HRValue = HRValue + 10;
      document.getElementById("HR-Count").textContent = HRValue;

      if (HRValue == 60) song.src = "sounds/Normal/01-060.mp3";
      if (HRValue == 70) song.src = "sounds/Normal/01-070.mp3";
      if (HRValue == 80) song.src = "sounds/Normal/01-080.mp3";
      if (HRValue == 90) song.src = "sounds/Normal/01-090.mp3";
      if (HRValue == 100) song.src = "sounds/Normal/01-100.mp3";
      if (HRValue == 110) song.src = "sounds/Normal/01-110.mp3";
      if (HRValue == 120) song.src = "sounds/Normal/01-120.mp3";
      if (HRValue == 120) song.src = "sounds/Normal/01-120.mp3";
      if (HRValue == 130) song.src = "sounds/Normal/01-130.mp3";
      if (HRValue == 140) song.src = "sounds/Normal/01-140.mp3";
      if (HRValue == 150) song.src = "sounds/Normal/01-150.mp3";
      if (HRValue == 160) song.src = "sounds/Normal/01-160.mp3";
      if (HRValue == 170) song.src = "sounds/Normal/01-170.mp3";
      if (HRValue == 180) song.src = "sounds/Normal/01-180.mp3";
      if (HRValue == 190) song.src = "sounds/Normal/01-190.mp3";
      if (HRValue == 200) song.src = "sounds/Normal/01-200.mp3";

      song.play();
      playBtn.src = 'svg/stop.svg';


    });

    HRDOWNBtn.addEventListener('click', () => {
      song.pause();
      playBtn.src = 'svg/play.svg';
      if (HRValue > 60) HRValue = HRValue - 10;
      document.getElementById("HR-Count").textContent = HRValue;

      if (HRValue == 60) song.src = "sounds/Normal/01-060.mp3";
      if (HRValue == 70) song.src = "sounds/Normal/01-070.mp3";
      if (HRValue == 80) song.src = "sounds/Normal/01-080.mp3";
      if (HRValue == 90) song.src = "sounds/Normal/01-090.mp3";
      if (HRValue == 100) song.src = "sounds/Normal/01-100.mp3";
      if (HRValue == 110) song.src = "sounds/Normal/01-110.mp3";
      if (HRValue == 120) song.src = "sounds/Normal/01-120.mp3";
      if (HRValue == 120) song.src = "sounds/Normal/01-120.mp3";
      if (HRValue == 130) song.src = "sounds/Normal/01-130.mp3";
      if (HRValue == 140) song.src = "sounds/Normal/01-140.mp3";
      if (HRValue == 150) song.src = "sounds/Normal/01-150.mp3";
      if (HRValue == 160) song.src = "sounds/Normal/01-160.mp3";
      if (HRValue == 170) song.src = "sounds/Normal/01-170.mp3";
      if (HRValue == 180) song.src = "sounds/Normal/01-180.mp3";
      if (HRValue == 190) song.src = "sounds/Normal/01-190.mp3";
      if (HRValue == 200) song.src = "sounds/Normal/01-200.mp3";

      song.play();
      playBtn.src = 'svg/stop.svg';
    });


    document.getElementById('Normal').addEventListener('click', () => {
      SetCase = 1;
      console.log("Nomal select");
    });
    document.getElementById('MR').addEventListener('click', () => {
      SetCase = 2;
      console.log("MR select");
    });
    document.getElementById('AS').addEventListener('click', () => {
      SetCase = 3;
      console.log("AS select");
    });
    document.getElementById('PSD').addEventListener('click', () => {
      SetCase = 4;
      console.log("PSD select");
    });

  }

  const mapCheckPlayingEvent = () => {
    playBtn.addEventListener('click', () => {
      checkPlaying(song);
      // checkSongEnding();
    });
  }

  const checkPlaying = () => {
    if (song.paused) {
    // if (song.stop) {

      song.play();
      playBtn.src = 'svg/stop.svg';
    } else {
      song.pause();
      // song.stop();
      playBtn.src = 'svg/play.svg';
    }
  };

  // const checkSongEnding = () => {
  //   if (currentTime > currentDuration) {
  //     song.pause();
  //     song.currentTime = 0;
  //     playBtn.src = 'svg/play.svg';
  //   }
  // };

  //曲リスト更新
  const mapClickEventToSoundBtn = () => {


    sounds.forEach(sound => {
      sound.addEventListener('click', function () {
        const imageUrl = this.getAttribute('data-image');
        const title = this.querySelector('.soundList-title').innerText;
        const description = this.querySelector('.soundList-description').innerText;
        const songData = this.getAttribute('data-sound');;
        currentDuration = parseInt(this.getAttribute('data-time'));
        currentTime = 0;
        // minutes = Math.floor(currentDuration / 60);
        // seconds = Math.floor(currentDuration % 60);

        setPlayerSong(songData, imageUrl);
        setPlayerText(title, description, currentDuration);
        // setTimerText(minutes, seconds);

        // song.play();
        // playBtn.src = 'svg/stop.svg';
      });
    });
  };

  const setPlayerSong = (songData, imageUrl) => {
    song.src = songData;
    // player.style.backgroundImage = `url(${imageUrl})`;
    playBtn.src = 'svg/play.svg';
  }

  const setPlayerText = (title, description) => {
    const playerTitle = document.querySelector('.title-headline');
    const playerDescription = document.querySelector('.title-description');

    playerTitle.innerText = title;
    playerDescription.innerText = description;
  };

  const updateTimerText = () => {
    currentTime = song.currentTime;
    leftDuration = currentDuration - currentTime;
    minutes = Math.floor(leftDuration / 60);
    seconds = Math.floor(leftDuration % 60);

    // setTimerText(minutes, seconds);
  };

  // const updateCircle = () => {
  //   const progress = outlineLength - (currentTime / currentDuration) * outlineLength;

  //   outline.style.strokeDashoffset = progress;
  // };

  // const setCircleStroke = () => {
  //   outline.style.strokeDasharray = outlineLength;
  //   outline.style.strokeDashoffset = outlineLength;
  // };

  // const updatePlayerByTimeUpdate = () => {
  //   song.addEventListener('timeupdate', () => {
  //     const currentSrc = song.getAttribute('src');
  //     let lastSrc;

  //     if (currentSrc === lastSrc || lastSrc === undefined) {
  //       lastSrc = currentSrc;

  //       // updateCircle();
  //       // updateTimerText();
  //     } else {
  //       // setCircleStroke();
  //       lastSrc = undefined;
  //     }
  //   });
  // }

  // const setTimerText = (minutes, seconds) => {
  //   const renderSeconds = () => {
  //     return seconds > 9 ? seconds : `0${seconds}`;
  //   }

  // timeDisplay.textContent = `${minutes}:${renderSeconds()}`;
  // }
}

app();