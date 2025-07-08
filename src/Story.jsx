import React from 'react';

export default function Story() {
  return (
    <>
      <canvas className="stars"></canvas>
      <header>
        <div className="logo">MILIFIX</div>
        <nav id="navbar">
          <a href="/tech.html" data-section="tech">科技</a>
          <a href="/art.html" data-section="art">藝術</a>
          <a href="/project.html" data-section="project">專案</a>
          <a href="/team.html" data-section="team">人員介紹</a>
          <a href="/story" data-section="story" className="active">品牌故事</a>
          <div className="lang-switch">
            <div className="lang-dropdown">
              <div className="lang-selected"><span className="globe">🌐</span></div>
              <div className="lang-list"></div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="content-glass">
          <div className="glow"></div>
          <h1 id="main-title">品牌故事</h1>
          <div id="main-content" className="section-content">
            {/* 這裡可根據需求填入品牌故事內容，或從 public/data/content-zh.json 讀取 */}
            歡迎來到 MILIFIX！這裡是品牌故事頁面，請依需求補充內容。
          </div>
        </div>
      </main>
      <footer>
        &copy; 2024 MILIFIX 集團 | Unlock the Extraordinary
      </footer>
    </>
  );
} 