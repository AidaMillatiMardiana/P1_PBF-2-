const linkHome = document.getElementById("link-home");
const linkAbout = document.getElementById("link-about");   
const root = document.getElementById("root");

// untuk mencegah meminta file html baru
linkHome.onclick = function(event) {
    event.preventDefault();
    root.textContent = "Welcome to Home";
    // krn di awal sudah berhasil tanpa meminta file lagi, maka disini dibuat agar tanpa meminta file namun berubah file.html di link atas website nya
    history.pushState(null, "", event.target.href);
};

linkAbout.onclick = function(event) {
    event.preventDefault();
    root.textContent = "Welcome to About";
    history.pushState(null, "", event.target.href);
};

if (location.hash == "#about"){
    root.textContent = "Welcome to About";
} else if (location.hash == "#home") {
    root.textContent = "Welcome to Home";
}