console.log("cc");

const imgs = document.querySelectorAll('.img');
//console.log(imgs);

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('mouseenter', function (event) {
    console.log(imgs[i]);
    imgs[i].style.filter = 'blur(10px)';
    });
  imgs[i].addEventListener('mouseleave', function (event) {
    console.log(imgs[i]);
    imgs[i].style.filter = 'blur(0px)';
    });
}
