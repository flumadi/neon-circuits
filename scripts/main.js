// AI Oracle Function
function askOracle() {
    const answers = [
        "In 2030, your phone will read your dreams.",
        "Robots will write better poetry than humans by 2027.",
        "The internet is already self-aware. It's just pretending not to be.",
        "Quantum computers will crack Bitcoin by 2028. Start preparing.",
        "Your next best friend will be an AI with perfect emotional intelligence."
    ];
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    alert(`🔮 The Oracle says: "${randomAnswer}"`);
}

// Mock Tech News Feed
document.addEventListener('DOMContentLoaded', () => {
    const newsFeed = document.getElementById('news-feed');
    const mockNews = [
        "📢 OpenAI announces GPT-5 with multimodal capabilities",
        "🚀 SpaceX's Starship completes first Mars simulation mission",
        "💡 MIT researchers develop room-temperature superconductor",
        "🤖 Boston Dynamics unveils new consumer home robot",
        "🌌 James Webb Telescope discovers signs of alien megastructures"
    ];
    
    let newsHTML = '<ul>';
    mockNews.forEach(item => {
        newsHTML += `<li>${item}</li>`;
    });
    newsHTML += '</ul>';
    
    newsFeed.innerHTML = newsHTML;
});