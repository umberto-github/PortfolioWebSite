
// Function to load content from a link
function loadContent(event) {
    event.preventDefault();
    const link = event.target;
    const id = link.getAttribute('id');
    const href = link.getAttribute('href');
    fetch(href)
    .then(response => response.text())
    .then(data => {
        if (id === 'home') {
            document.getElementById('index-body').innerHTML = data;
            return;
        }
        document.getElementById('index-body').innerHTML = data;
    })
    .catch(error => console.error('Errore nel caricamento del contenuto:', error));
}

// Add event listener to all nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', loadContent);
});


// Load home page content on page load
document.addEventListener('DOMContentLoaded', (event) => {
    const homeLink = document.getElementById('home-link');
    const homeEvent = new Event('click');
    homeLink.dispatchEvent(homeEvent);
});
