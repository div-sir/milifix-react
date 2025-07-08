import './App.css';
import { Fireflies } from 'react-bits';

const story = {
  title: '品牌故事',
  intro: 'MILIFIX 起源於一個神秘的創意火花，結合科技、藝術與人文精神，致力於開創非凡的未來。',
  timeline: [
    { year: '2018', event: '神秘組織 MILIFIX 正式成立，聚集來自各領域的先驅。' },
    { year: '2020', event: '推出首個結合AI與藝術的跨界專案，獲得國際矚目。' },
    { year: '2023', event: '啟動虛擬宇宙計畫，邁向數位未來新紀元。' }
  ],
  vision: '我們相信，神秘與創新是推動世界前進的力量。MILIFIX 將持續探索未知，創造屬於未來的傳奇。'
};

function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0f1a 0%, #1a223a 100%)', color: '#eee', fontFamily: "'Montserrat', 'Orbitron', Arial, sans-serif" }}>
      <Fireflies color="#4ad" count={32} style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none', top: 0, left: 0 }} />
      <header style={{ width: '100%', background: 'rgba(20,28,44,0.85)', boxShadow: '0 2px 16px 0 #0004', backdropFilter: 'blur(8px)', position: 'sticky', top: 0, zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
        <div className="logo" style={{ fontFamily: 'Orbitron, Arial, sans-serif', fontSize: '2em', color: '#b6e0fe', letterSpacing: '0.12em', fontWeight: 'bold', textShadow: '0 0 16px #4ad, 0 0 4px #fff2', padding: '16px 0' }}>MILIFIX</div>
        <nav style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="#" style={{ color: '#4ad', textDecoration: 'none', fontSize: '1.1em', letterSpacing: '0.04em', padding: '8px 0' }}>Home</a>
          <a href="#" style={{ color: '#eee', textDecoration: 'none', fontSize: '1.1em', letterSpacing: '0.04em', padding: '8px 0' }}>科技</a>
          <a href="#" style={{ color: '#eee', textDecoration: 'none', fontSize: '1.1em', letterSpacing: '0.04em', padding: '8px 0' }}>藝術</a>
          <a href="#" style={{ color: '#eee', textDecoration: 'none', fontSize: '1.1em', letterSpacing: '0.04em', padding: '8px 0' }}>專案</a>
          <a href="#" style={{ color: '#eee', textDecoration: 'none', fontSize: '1.1em', letterSpacing: '0.04em', padding: '8px 0' }}>人員介紹</a>
          <div className="lang-switch" style={{ marginLeft: 32, display: 'flex', gap: 8 }}>
            <span role="img" aria-label="語言切換" style={{ fontSize: '1.3em' }}>🌐</span>
          </div>
        </nav>
      </header>
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1, padding: '48px 0 32px 0' }}>
        <div className="content-glass" style={{ background: 'rgba(30,40,60,0.7)', boxShadow: '0 8px 32px 0 rgba(31,38,135,0.37)', backdropFilter: 'blur(12px)', borderRadius: 24, border: '1.5px solid rgba(255,255,255,0.18)', padding: '48px 36px', maxWidth: 700, width: '90vw', margin: '0 auto', position: 'relative' }}>
          <div className="glow" style={{ position: 'absolute', width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle, #4ad 0%, #0a0f1a 80%)', opacity: 0.18, filter: 'blur(32px)', top: -60, right: -60, zIndex: 0 }}></div>
          <h1 style={{ fontFamily: 'Orbitron, Arial, sans-serif', fontSize: '2.2em', letterSpacing: '0.08em', color: '#b6e0fe', marginBottom: '0.3em', textShadow: '0 0 24px #4ad, 0 0 8px #fff2' }}>{story.title}</h1>
          <div className="section-content" style={{ fontSize: '1.1em', color: '#eee', marginBottom: '1.2em', lineHeight: 1.7 }}>
            <p style={{ fontWeight: 'bold', marginBottom: '1.2em' }}>{story.intro}</p>
            <div style={{ margin: '2em 0 1em 0', paddingLeft: '0.5em' }}>
              {story.timeline.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5em' }}>
                  <span style={{ fontWeight: 'bold', color: '#4ad', marginRight: '1em' }}>{item.year}</span>
                  <span>{item.event}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.2em', fontStyle: 'italic', color: '#b6e0fe' }}>{story.vision}</div>
          </div>
        </div>
      </main>
      <footer style={{ width: '100%', background: 'rgba(20,28,44,0.85)', color: '#b6e0fe', textAlign: 'center', padding: '18px 0 12px 0', fontSize: '1em', letterSpacing: '0.04em', boxShadow: '0 -2px 16px 0 #0004', zIndex: 10, position: 'relative' }}>
        &copy; 2024 MILIFIX 集團 | Unlock the Extraordinary
      </footer>
    </div>
  );
}

export default App;
