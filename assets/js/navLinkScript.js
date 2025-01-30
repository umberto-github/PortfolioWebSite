function loadContactContent(event) {
    event.preventDefault();
    const link = event.target;
    const id = link.getAttribute('id');
    const href = link.getAttribute('href');
    fetch(href)
    .then(response => response.text())
    .then(data => {
        document.getElementById('index-body').innerHTML = data;
    })
    .catch(error => console.error('Errore nel caricamento del contenuto:', error));
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', loadContactContent);
});