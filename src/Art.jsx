import React from 'react';
import { Layout, Typography, ConfigProvider } from 'antd';
import NavBar from './NavBar';

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function Art() {
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
        <NavBar active="art" />
        <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, padding: '2vw' }}>
          <div style={{ background: 'rgba(30,40,60,0.7)', borderRadius: 24, padding: 36, maxWidth: 700, width: '100%', margin: '48px 0' }}>
            <Title level={1} style={{ color: '#b6e0fe', textAlign: 'center', fontFamily: 'Orbitron, Arial, sans-serif' }}>藝術</Title>
            <Paragraph strong style={{ color: '#eee', textAlign: 'center' }}>
              這裡是 MILIFIX 藝術頁面，請依需求補充內容。
            </Paragraph>
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