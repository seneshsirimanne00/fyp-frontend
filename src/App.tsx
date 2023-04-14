import React from 'react';
import './App.css';
import {  Col, Layout, Row } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { HeaderStyled, MidColContainer, SectionLeft, SectionRight } from './styled';
import logo from './images/logo.png';
import menu from './images/menu.png';
import user from './images/user.png';
import right from './images/right.png';
import left from './images/left.png';
import CommentCard from './components/CommentCard';


function App() {
  return (
    <div className="App" style={{ background:"#F0F2F5" }}>
      <Layout style={{ minHeight: "80vh" }}>
        <HeaderStyled>
          <img style={{ height:"40px"}} src={logo} alt="description of image" />
          <img style={{ height:"40px"}} src={menu} alt="description of image" />
          <img style={{ height:"40px"}} src={user} alt="description of image" />
        </HeaderStyled>
        <Row style={{ height:"81vh" }}>
          <Col span={5} style={{ height:"90vh" }}>
            <SectionLeft>
              <img style={{ height:"90%", paddingTop : "20px"}} src={left} alt="description of image" />
            </SectionLeft>
          </Col>
          <Col span={14} style={{ height:"90vh" }}>
            <MidColContainer>
              <CommentCard/>
              <CommentCard/>
              {/* <CardStyled>
                <h1>haha</h1>
              </CardStyled>
              <CardStyled>
                <h1>haha</h1>
              </CardStyled> */}
            </MidColContainer>
          </Col>
          <Col span={5} style={{ height:"90vh" }}>
          <SectionRight>
            <img style={{ height:"90%", paddingTop : "20px"}} src={right} alt="description of image" />
            </SectionRight>
          </Col>
        </Row>
        <Footer>Copyright © Social media Site 2022. All rights reserved.  </Footer>
      </Layout>
    </div>
  );
}

export default App;
