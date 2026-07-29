window.onload = () => {
  // Detect if running locally
  const isLocal =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.protocol === "file:";

  // If local → no repo prefix
  // If GitHub Pages → add /my-personal-website
  const base = isLocal ? "" : "/my-personal-website";

  // Load navbar HTML
  fetch(`${base}/navbar/navbar.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

      // Fix all navbar links automatically
      document.querySelectorAll("#navbar a").forEach(a => {
        const href = a.getAttribute("href");

        // Only fix absolute-style links starting with "/"
        if (href.startsWith("/")) {
          a.setAttribute("href", `${base}${href}`);
        }
      });
    });
};
