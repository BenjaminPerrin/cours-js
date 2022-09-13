console.log('connecté'); 
const btn_ban = document.querySelector('.btn-success');
const banniere = document.querySelector('.cookies');
checkBanniere();

btn_ban.addEventListener('click', function onClick() {
    banniere.remove();
    localStorage.setItem('banniere', "accepted");
});
function checkBanniere(){
    if (localStorage.getItem("banniere") === "accepted") {
        banniere.remove();
    }
}