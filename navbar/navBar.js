window.onload = () => {
    fetch("/navbar/navbar.html"|"\\navbar\\navbar.html")
        .then(res => res.text())
        .then(html => document.getElementById("navbar").innerHTML = html);
};
