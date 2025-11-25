function GoToRandomPage() {
    const pages = [
        '/detalhes.html',
        '/detalhes-caneca.html',
        '/detalhes-copilotcabeça.html'
    ];
    const randomIndex = Math.floor(Math.random() * pages.length);

    
    const randomPage = pages[randomIndex];

    
    window.location.href = randomPage;
}