window.onload = () => {
  const base = window.location.hostname === "localhost" ||
               window.location.hostname === "127.0.0.1"
               ? ""
               : "/my-personal-website";

  fetch(`${base}/navbar/navbar.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;
    });
};
