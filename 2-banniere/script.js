console.log('connecté'); 
const btn_succes = document.querySelector('.btn-success');
const cookies = document.querySelector('.cookies');

btn_succes.addEventListener('click', function onClick() {
    cookies.style.display = 'none';
});