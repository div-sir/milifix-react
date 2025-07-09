import React from 'react';
import { Typography, ConfigProvider } from 'antd';
import NavBar from './NavBar';

const { Title, Paragraph } = Typography;

const art = {
  title: '藝術',
  intro: 'MILIFIX 以藝術為靈感，跨足設計、音樂、影像等多元領域，激發創意火花，連結科技與人文。',
  timeline: [
    { year: '2018', event: '舉辦首屆 MILIFIX 藝術展，融合數位與傳統媒材。' },
    { year: '2022', event: '與國際藝術家合作，推動 AI 藝術創作。' },
    { year: '2023', event: '開發互動式藝術平台，讓大眾參與創作。' }
  ],
  vision: '我們相信，藝術是連結世界的橋樑，MILIFIX 將持續用創意點亮未來。'
};

export default function Art() {
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
        <NavBar active="art" />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '2vw' }}>
          <div style={{ borderRadius: 24, boxShadow: '0 4px 24px 0 #0001', padding: 36, maxWidth: 700, width: '100%', margin: '48px 0', background: 'rgba(255,255,255,0.85)' }}>
            <Title level={1} style={{ color: '#222', textAlign: 'center', fontFamily: 'Orbitron, Arial, sans-serif' }}>{art.title}</Title>
            <Paragraph strong style={{ color: '#333', textAlign: 'center' }}>{art.intro}</Paragraph>
            <ul style={{ color: '#0071e3', margin: '2em 0', paddingLeft: 0, listStyle: 'none' }}>
              {art.timeline.map(item => (
                <li key={item.year} style={{ marginBottom: 12 }}>
                  <span style={{ fontWeight: 700 }}>{item.year}</span> {item.event}
                </li>
              ))}
            </ul>
            <Paragraph italic style={{ color: '#0071e3', textAlign: 'center' }}>{art.vision}</Paragraph>
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