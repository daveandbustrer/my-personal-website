window.onload = () => {
    fetch("my-personal-website/navbar/navbar.html")
        .then(res => res.text())
        .then(html => document.getElementById("navbar").innerHTML = html);
};
