import React from 'react';
import { Typography, ConfigProvider } from 'antd';
import NavBar from './NavBar';

const { Title, Paragraph } = Typography;

export default function Art({ lang = 'zh', i18n }) {
  const art = i18n.art;
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
        <NavBar active="art" lang={lang} />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '2vw', flexWrap: 'wrap', gap: 32 }}>
          {art.works && art.works.map((work, idx) => (
            <div key={idx} style={{ borderRadius: 24, boxShadow: '0 4px 24px 0 #0001', padding: 36, maxWidth: 700, width: 340, margin: '24px 0', background: 'rgba(255,255,255,0.85)' }}>
              <Title level={2} style={{ color: '#222', textAlign: 'center', fontFamily: 'Orbitron, Arial, sans-serif' }}>{work.name}</Title>
              <Paragraph strong style={{ color: '#333', textAlign: 'center' }}>{work.desc}</Paragraph>
              <div><img src={work.img} alt={work.name} style={{ width: '100%', maxWidth: 300, borderRadius: 8, margin: '12px auto' }} /></div>
            </div>
          ))}
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