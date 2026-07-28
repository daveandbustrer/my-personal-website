window.onload = () => {
    fetch("navbar/navbar.html")|fetch("https://daveandbustrer.github.io/my-personal-website/navbar/navbar.html")
        .then(html => document.getElementById("navbar").innerHTML = html);
};
