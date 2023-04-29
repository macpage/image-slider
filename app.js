const ul = document.querySelector('ul');
ul.addEventListener('click', () => {
  document.querySelectorAll('li').forEach((e) => {
    if (e.style.visibility != 'visible') {
      e.style.visibility = 'visible';
    } else {
      e.style.visibility = 'hidden';
    }
  });
});

let slides = [];
slides[0] = new Image(100, 100);
slides[0].style.backgroundColor = 'blue';
slides[1] = new Image(100, 100);
slides[1].style.backgroundColor = 'red';
slides[2] = new Image(100, 100);
slides[2].style.backgroundColor = 'orange';
slides[3] = new Image(100, 100);
slides[3].style.backgroundColor = 'yellowgreen';
slides[4] = new Image(100, 100);
slides[4].style.backgroundColor = 'violet';

document.querySelector('.slider_background').append(slides[0]);
document.querySelector('.slider_background').append(slides[1]);

let focus = 0;

const show_img = document.createElement('img');
show_img.width = 400;
show_img.height = 400;
show_img.style.backgroundColor = slides[focus].style.backgroundColor;
document.querySelector('#show_img').append(show_img);

slides[focus].width = 150;
slides[focus].height = 150;
const left_btn = document.querySelector('#left_btn');
const right_btn = document.querySelector('#right_btn');
left_btn.addEventListener('click', () => {
  if (focus > 0) {
    console.log('move left');
    console.log('lol');
    slides[focus].width = 100;
    slides[focus].height = 100;
    focus--;
    slides[focus].width = 150;
    slides[focus].height = 150;

    if (focus > 0) {
      document.querySelector('.slider_background').prepend(slides[focus - 1]);
    }
    if (focus < slides.length - 2) {
      document
        .querySelector('.slider_background')
        .removeChild(slides[focus + 2]);
    }

    show_img.style.backgroundColor = slides[focus].style.backgroundColor;
    console.log(focus);
  }
});
right_btn.addEventListener('click', () => {
  if (focus < slides.length - 1) {
    console.log('move right');
    console.log('lol');
    slides[focus].width = 100;
    slides[focus].height = 100;
    focus++;
    slides[focus].width = 150;
    slides[focus].height = 150;
    if (focus < slides.length - 1) {
      document.querySelector('.slider_background').append(slides[focus + 1]);
    }

    if (focus > 1) {
      document
        .querySelector('.slider_background')
        .removeChild(slides[focus - 2]);
    }
    show_img.style.backgroundColor = slides[focus].style.backgroundColor;
    console.log(focus);
  }
});
