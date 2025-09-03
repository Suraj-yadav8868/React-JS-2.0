import React, { useEffect, useState } from 'react';

export default function Album() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=002efedd43a6481caededec969eda1b6')
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles || []);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {articles.map((article, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <img
                    src={article.urlToImage || 'https://via.placeholder.com/300'}
                    alt="news"
                    className="card-img-top"
                    style={{ height: '225px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      {article.title || 'No title available'}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </a>
                      </div>
                      <small className="text-muted">
                        {article.author || 'Unknown'}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
