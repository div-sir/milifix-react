import { Layout, Typography, Timeline, ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import Story from './Story';
import NavBar from './NavBar';
//import { Fireflies } from 'react-bits';

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

function App() {
  // 簡易路由：根據網址顯示 Story 或首頁
  const isStory = window.location.pathname === '/story';
  if (isStory) return <Story />;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#4ad',
          fontFamily: "'Montserrat', 'Orbitron', Arial, sans-serif"
        }
      }}
    >
      <Layout style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0f1a 0%, #1a223a 100%)' }}>
        <NavBar active="home" />
        <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, padding: '2vw' }}>
          <div style={{ background: 'rgba(30,40,60,0.7)', borderRadius: 24, padding: 36, maxWidth: 700, width: '100%', margin: '48px 0' }}>
            <Title level={1} style={{ color: '#b6e0fe', textAlign: 'center', fontFamily: 'Orbitron, Arial, sans-serif' }}>{story.title}</Title>
            <Paragraph strong style={{ color: '#eee', textAlign: 'center' }}>{story.intro}</Paragraph>
            <Timeline
              items={story.timeline.map(item => ({
                color: '#4ad',
                children: <span><b>{item.year}</b> {item.event}</span>
              }))}
              style={{ margin: '2em 0' }}
            />
            <Paragraph italic style={{ color: '#b6e0fe', textAlign: 'center' }}>{story.vision}</Paragraph>
          </div>
        </Content>
        <Footer style={{ background: 'rgba(20,28,44,0.85)', color: '#b6e0fe', textAlign: 'center', width: '100%', padding: '24px 0', fontSize: 16 }}>
          &copy; 2024 MILIFIX 集團 | Unlock the Extraordinary<br/>
          聯絡信箱：info@milifix.org ｜ 地址：台北市信義區未來路88號 ｜ 服務專線：02-1234-5678<br/>
          <span style={{ color: '#888', fontSize: 14 }}>本網站僅供展示，所有資料僅供參考，未經授權請勿轉載。</span>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
