// <!--##################################################-->
// <!--##################################################-->
// <!--##  Site     ...........: Portfolio             ##-->
// <!--##  Author   ...........: Alcides Tiago         ##-->
// <!--##  Data     ...........: 22 de September 2021  ##-->
// <!--##  Version  ...........: 1.0                   ##-->
// <!--##  Archive  ...........: mainFunction.js           ##-->
// <!--##################################################-->
// <!--##################################################-->

console.log("Working...")

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setThem(mode)
    })

}

function setThem(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'css/default.css'
    }
    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'css/blue.css'
    }
    if (mode == 'green') {
        document.getElementById('theme-style').href = 'css/green.css'
    }
    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'css/purple.css'
    }
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}