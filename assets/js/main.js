let lg = document.getElementById("logo");
lg.innerHTML = '<a href="index.html"><img src="assets/images/logo-wh.png"></a>';

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var logodiv = document.getElementById("logo")
    header.classList.toggle("sticky", window.scrollY > 0)
    if (header.classList.contains("sticky")) {
        logodiv.innerHTML = '<a href="index.html"><img src="assets/images/logo.png"></a>';
    } else {
        logodiv.innerHTML = '<a href="index.html"><img src="assets/images/logo-wh.png"></a>';
    }
})

var modal = document.getElementById("modal-wrapper");
var modalsecond = document.getElementById("modal-wrapper-sec");
var modalthird = document.getElementById("modal-wrapper-thr");
var modalmuallim = document.getElementById("modal-wrapper-muallim");
window.onclick = function(event) {
    if (event.target == modal || event.target == modalsecond || event.target == modalthird || event.target == modalmuallim) {
        modal.style.display = "none";
        modalsecond.style.display = "none";
        modalthird.style.display = "none";
        modalmuallim.style.display = "none";
    }
}

function show() {
    document.getElementById('modal-wrapper').style.display = 'block'
}


function showmuallim() {
    document.getElementById('modal-wrapper-muallim').style.display = 'block'
}

function showsign() {
    document.getElementById('modal-wrapper-sec').style.display = 'block';
}


function showfrgt() {
    document.getElementById('modal-wrapper-sec').style.display = 'none';
    document.getElementById('modal-wrapper-thr').style.display = 'block';
}


function hidefrgt() {
    document.getElementById('modal-wrapper-sec').style.display = 'block';
    document.getElementById('modal-wrapper-thr').style.display = 'none';
}

function shownd() {
    var x = document.getElementById('modal-wrapper-sec');
    var y = document.getElementById('modal-wrapper');
    if (y.style.display == 'block' && x.style.display == 'none') {
        y.style.display = 'none'
        x.style.display = 'block'
    } else {
        x.style.display = 'none'
        y.style.display = 'block'
    }
}


function showrd() {
    var x = document.getElementById('modal-wrapper-sec');
    var y = document.getElementById('modal-wrapper');
    if (x.style.display == 'block' && y.style.display == 'none') {
        x.style.display = 'none'
        y.style.display = 'block'
    } else {
        y.style.display = 'none'
        x.style.display = 'block'
    }
}

