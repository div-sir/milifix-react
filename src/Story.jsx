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

export default function Story() {
  // 若未用 react-router-dom，可用 window.location 取代 useNavigate
  const navigate = (path) => { window.location.href = path; };

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
        <NavBar active="story" />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '2vw' }}>
          <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 4px 24px 0 #0001', padding: 36, maxWidth: 700, width: '100%', margin: '48px 0' }}>
            <Title level={1} style={{ color: '#222', textAlign: 'center', fontFamily: 'Orbitron, Arial, sans-serif' }}>品牌故事</Title>
            <Paragraph strong style={{ color: '#333', textAlign: 'center' }}>
              歡迎來到 MILIFIX！這裡是品牌故事頁面，請依需求補充內容。
            </Paragraph>
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