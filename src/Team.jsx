import React from 'react';
import { Typography, ConfigProvider } from 'antd';
import NavBar from './NavBar';

const { Title, Paragraph } = Typography;

const team = {
  title: '人員介紹',
  intro: 'MILIFIX 匯聚來自科技、藝術、設計等領域的頂尖人才，攜手共創未來。',
  timeline: [
    { year: '2018', event: '核心團隊成立，聚集多元專業背景成員。' },
    { year: '2020', event: '擴大國際合作，吸引全球優秀人才加入。' },
    { year: '2023', event: '推動跨界人才培育計畫，促進知識交流。' }
  ],
  vision: '我們相信，人才是最珍貴的資產，MILIFIX 將持續培育與吸引優秀夥伴，共同實現願景。'
};

export default function Team() {
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
        <NavBar active="team" />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '2vw' }}>
          <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 4px 24px 0 #0001', padding: 36, maxWidth: 700, width: '100%', margin: '48px 0' }}>
            <Title level={1} style={{ color: '#222', textAlign: 'center', fontFamily: 'Orbitron, Arial, sans-serif' }}>{team.title}</Title>
            <Paragraph strong style={{ color: '#333', textAlign: 'center' }}>{team.intro}</Paragraph>
            <ul style={{ color: '#0071e3', margin: '2em 0', paddingLeft: 0, listStyle: 'none' }}>
              {team.timeline.map(item => (
                <li key={item.year} style={{ marginBottom: 12 }}>
                  <span style={{ fontWeight: 700 }}>{item.year}</span> {item.event}
                </li>
              ))}
            </ul>
            <Paragraph italic style={{ color: '#0071e3', textAlign: 'center' }}>{team.vision}</Paragraph>
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