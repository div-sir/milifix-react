import React from 'react';
import { Typography, ConfigProvider } from 'antd';
import NavBar from './NavBar';

const { Title, Paragraph } = Typography;

const project = {
  title: '專案',
  intro: 'MILIFIX 匯聚跨界專案，從科技到藝術，推動創新與合作，實現多元願景。',
  timeline: [
    { year: '2020', event: '啟動「未來城市」專案，結合 IoT 與 AI 打造智慧社區。' },
    { year: '2021', event: '「藝術＋科技」聯合展演，促進產學合作。' },
    { year: '2023', event: '國際合作專案啟動，拓展全球影響力。' }
  ],
  vision: '我們相信，專案是實現夢想的起點，MILIFIX 將持續推動創新專案，連結世界。'
};

export default function Project() {
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
        <NavBar active="project" />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '2vw' }}>
          <div style={{ borderRadius: 24, boxShadow: '0 4px 24px 0 #0001', padding: 36, maxWidth: 700, width: '100%', margin: '48px 0', background: 'rgba(255,255,255,0.85)' }}>
            <Title level={1} style={{ color: '#222', textAlign: 'center', fontFamily: 'Orbitron, Arial, sans-serif' }}>{project.title}</Title>
            <Paragraph strong style={{ color: '#333', textAlign: 'center' }}>{project.intro}</Paragraph>
            <ul style={{ color: '#0071e3', margin: '2em 0', paddingLeft: 0, listStyle: 'none' }}>
              {project.timeline.map(item => (
                <li key={item.year} style={{ marginBottom: 12 }}>
                  <span style={{ fontWeight: 700 }}>{item.year}</span> {item.event}
                </li>
              ))}
            </ul>
            <Paragraph italic style={{ color: '#0071e3', textAlign: 'center' }}>{project.vision}</Paragraph>
          </div>
        </div>
        <div style={{ color: '#888', textAlign: 'center', width: '100%', padding: '24px 0', fontSize: 16, borderTop: '1px solid #eee', marginTop: 48, background: 'rgba(255,255,255,0.7)' }}>
          &copy; 2024 MILIFIX 集團 | Unlock the Extraordinary<br/>
          聯絡信箱：info@milifix.org ｜ 地址：台北市信義區未來路88號 ｜ 服務專線：02-1234-5678<br/>
          <span style={{ color: '#bbb', fontSize: 14 }}>本網站僅供展示，所有資料僅供參考，未經授權請勿轉載。</span>
        </div>
      </div>
    </ConfigProvider>
  );
} 