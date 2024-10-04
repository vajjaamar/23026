document.addEventListener('DOMContentLoaded', () => {
    const data = {
        status: "ok",
        totalResults: 4030,
        articles: [
            {
                source: { id: null, name: "ETF Daily News" },
                author: "MarketBeat News",
                title: "Tesla (NASDAQ:TSLA) Shares Up 3.8% After Analyst Upgrade",
                description: "Shares of Tesla, Inc. (NASDAQ:TSLA – Get Free Report) rose 3.8% on Friday after Truist Financial raised their price target on the stock from $215.00 to $236.00. Truist Financial currently has a hold rating on the stock. Tesla traded as high as $249.87 and las…",
                url: "https://www.etfdailynews.com/2024/10/04/tesla-nasdaqtsla-shares-up-3-8-after-analyst-upgrade/",
                urlToImage: "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
                publishedAt: "2024-10-04T15:47:05Z",
                content: "Shares of Tesla, Inc. (NASDAQ:TSLA – Get Free Report) rose 3.8% on Friday after Truist Financial raised their price target on the stock from $215.00 to $236.00. Truist Financial currently has a hold … [+5981 chars]"
            }
        ]
    };

    const fetchNewsBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = data.articles;  // Use the articles directly from the data variable

    function renderRandomArticle() {
        newsContainer.innerHTML = ''; 
        if (articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.className = 'news-item';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            newsContainer.appendChild(articleElement);
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchNewsBtn.addEventListener('click', renderRandomArticle);  // Trigger renderRandomArticle on button click
});
