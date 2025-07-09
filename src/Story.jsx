import React from 'react';
import { Layout, Typography, ConfigProvider, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const navItems = [
  { key: 'tech', label: '科技', path: '/tech.html' },
  { key: 'art', label: '藝術', path: '/art.html' },
  { key: 'project', label: '專案', path: '/project.html' },
  { key: 'team', label: '人員介紹', path: '/team.html' },
  { key: 'story', label: '品牌故事', path: '/story' },
];

export default function Story({ lang = 'zh', i18n }) {
  const story = i18n.story;
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
        <NavBar active="story" lang={lang} />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '2vw' }}>
          <div style={{ borderRadius: 24, boxShadow: '0 4px 24px 0 #0001', padding: 36, maxWidth: 700, width: '100%', margin: '48px 0', background: 'rgba(255,255,255,0.85)' }}>
            <Title level={1} style={{ color: '#222', textAlign: 'center', fontFamily: 'Orbitron, Arial, sans-serif' }}>{story.title}</Title>
            <Paragraph strong style={{ color: '#333', textAlign: 'center' }}>{story.intro}</Paragraph>
            <ul style={{ color: '#0071e3', margin: '2em 0', paddingLeft: 0, listStyle: 'none' }}>
              {story.timeline && story.timeline.map((item, idx) => (
                <li key={idx} style={{ marginBottom: 12 }}><span style={{ fontWeight: 700 }}>{item.year}</span> {item.event}</li>
              ))}
            </ul>
            <Paragraph italic style={{ color: '#0071e3', textAlign: 'center' }}>{story.vision}</Paragraph>
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