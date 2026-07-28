window.onload = () => {
    fetch("navbar/navbar.html")|fetch("/my-personal-website/navbar/navbar.html")
        .then(html => document.getElementById("navbar").innerHTML = html);
};
