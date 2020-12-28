function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 6500);
  })
}

loadData()
  .then(() => {
     let preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('display-none__animation');
  });

function loadDisplay() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 5000);
  })
}

loadDisplay()
  .then(() => {
     let preloaderDisplay = document.getElementById('page-preload');
    preloaderDisplay.classList.add('page__block');
  });