let lg = document.getElementById("logo");
lg.innerHTML = '<img src="assets/images/logo-wh.png">';

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var logodiv = document.getElementById("logo")
    header.classList.toggle("sticky", window.scrollY > 0)
    if (header.classList.contains("sticky")) {
        logodiv.innerHTML = '<img src="assets/images/logo.png">';
    } else {
        logodiv.innerHTML = '<img src="assets/images/logo-wh.png">';
    }
})

var modal = document.getElementById("modal-wrapper");
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function show() {
    document.getElementById('modal-wrapper').style.display = 'block'
}


function shownd() {
    document.getElementById('join_first').style.display = 'none';
    document.getElementById('join_second').style.display = 'block'
}