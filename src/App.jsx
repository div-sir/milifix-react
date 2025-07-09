import { Layout, Typography, Timeline, ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import Story from './Story';
import NavBar from './NavBar';
import Tech from './Tech';
import Art from './Art';
import Project from './Project';
import Team from './Team';
import Particles from './Particles';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

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

const pageMap = {
  '/': { key: 'home', node: <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '2vw' }}>
    <div style={{ borderRadius: 24, boxShadow: '0 4px 24px 0 #0001', padding: 36, maxWidth: 700, width: '100%', margin: '48px 0', background: 'rgba(255,255,255,0.85)' }}>
      <Title level={1} style={{ color: '#222', textAlign: 'center', fontFamily: 'Orbitron, Arial, sans-serif' }}>{story.title}</Title>
      <Paragraph strong style={{ color: '#333', textAlign: 'center' }}>{story.intro}</Paragraph>
      <Timeline
        items={story.timeline.map(item => ({
          color: '#0071e3',
          children: <span><b>{item.year}</b> {item.event}</span>
        }))}
        style={{ margin: '2em 0' }}
      />
      <Paragraph italic style={{ color: '#0071e3', textAlign: 'center' }}>{story.vision}</Paragraph>
    </div>
  </div> },
  '/story': { key: 'story', node: <Story /> },
  '/tech': { key: 'tech', node: <Tech /> },
  '/art': { key: 'art', node: <Art /> },
  '/project': { key: 'project', node: <Project /> },
  '/team': { key: 'team', node: <Team /> },
};

function getPageKey(path) {
  if (path.startsWith('/story')) return 'story';
  if (path.startsWith('/tech')) return 'tech';
  if (path.startsWith('/art')) return 'art';
  if (path.startsWith('/project')) return 'project';
  if (path.startsWith('/team')) return 'team';
  return 'home';
}

function getPageNode(path) {
  if (path.startsWith('/story')) return <Story />;
  if (path.startsWith('/tech')) return <Tech />;
  if (path.startsWith('/art')) return <Art />;
  if (path.startsWith('/project')) return <Project />;
  if (path.startsWith('/team')) return <Team />;
  return pageMap['/'].node;
}

function App() {
  const [location, setLocation] = useState(window.location.pathname);
  window.onpopstate = () => setLocation(window.location.pathname);
  const pageKey = getPageKey(location);
  const pageNode = getPageNode(location);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0071e3',
          fontFamily: "'Montserrat', 'Orbitron', Arial, sans-serif"
        }
      }}
    >
      <div style={{ minHeight: '100vh' }}>
        <Particles />
        <NavBar active={pageKey} />
        <AnimatePresence mode="wait">
          <motion.div
            key={pageKey}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            style={{ minHeight: '100vh', marginLeft: 72 }}
          >
            {pageNode}
            <div style={{ color: '#888', textAlign: 'center', width: '100%', padding: '24px 0', fontSize: 16, borderTop: '1px solid #eee', marginTop: 48, background: 'rgba(255,255,255,0.7)' }}>
              &copy; 2024 MILIFIX 集團 | Unlock the Extraordinary<br/>
              聯絡信箱：info@milifix.org ｜ 地址：台北市信義區未來路88號 ｜ 服務專線：02-1234-5678<br/>
              <span style={{ color: '#bbb', fontSize: 14 }}>本網站僅供展示，所有資料僅供參考，未經授權請勿轉載。</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </ConfigProvider>
  );
}

export default App;
