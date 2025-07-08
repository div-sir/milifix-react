import React from 'react';
import { Typography, ConfigProvider } from 'antd';
import NavBar from './NavBar';

const { Title, Paragraph } = Typography;

const tech = {
  title: '科技',
  intro: 'MILIFIX 致力於前瞻科技的探索與應用，融合 AI、雲端、虛擬實境等領域，推動未來生活的無限可能。',
  timeline: [
    { year: '2019', event: '啟動 AI 跨界應用計畫，打造智慧生活新體驗。' },
    { year: '2021', event: '推出雲端協作平台，連結全球創新資源。' },
    { year: '2024', event: '虛擬實境技術進入教育、藝術、醫療等多元場域。' }
  ],
  vision: '我們相信，科技的進步將帶來人類生活的質變，MILIFIX 將持續探索未知，創造屬於未來的奇蹟。'
};

export default function Tech() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0071e3',
          fontFamily: "'Montserrat', 'Orbitron', Arial, sans-serif"
        }
      }}
    >
      <div style={{ minHeight: '100vh', background: '#fff' }}>
        <NavBar active="tech" />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '2vw' }}>
          <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 4px 24px 0 #0001', padding: 36, maxWidth: 700, width: '100%', margin: '48px 0' }}>
            <Title level={1} style={{ color: '#222', textAlign: 'center', fontFamily: 'Orbitron, Arial, sans-serif' }}>{tech.title}</Title>
            <Paragraph strong style={{ color: '#333', textAlign: 'center' }}>{tech.intro}</Paragraph>
            <ul style={{ color: '#0071e3', margin: '2em 0', paddingLeft: 0, listStyle: 'none' }}>
              {tech.timeline.map(item => (
                <li key={item.year} style={{ marginBottom: 12 }}>
                  <span style={{ fontWeight: 700 }}>{item.year}</span> {item.event}
                </li>
              ))}
            </ul>
            <Paragraph italic style={{ color: '#0071e3', textAlign: 'center' }}>{tech.vision}</Paragraph>
          </div>
        </div>
        <div style={{ background: '#fff', color: '#888', textAlign: 'center', width: '100%', padding: '24px 0', fontSize: 16, borderTop: '1px solid #eee', marginTop: 48 }}>
          &copy; 2024 MILIFIX 集團 | Unlock the Extraordinary<br/>
          聯絡信箱：info@milifix.org ｜ 地址：台北市信義區未來路88號 ｜ 服務專線：02-1234-5678<br/>
          <span style={{ color: '#bbb', fontSize: 14 }}>本網站僅供展示，所有資料僅供參考，未經授權請勿轉載。</span>
        </div>
      </div>
    </ConfigProvider>
  );
} 