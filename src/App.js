import "./App.css";
import { Layout, Button, Space, Input, Select } from "antd";
import MenuSider from "./Component/Menu";
import HeaderMenu from "./Component/HeaderMenu";
import { useState } from "react";
import TableDepartment from "./Component/tableDepartment";
import TableAllDepartment from "./Component/tableAllEmployee";

import {
  LoginOutlined

} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;



function App() {


  const handleSelectorChange = (newSelector) => {
    setSelector(newSelector);
  };

  const [selector, setSelector] = useState(1);


  const buttonHoverStyle = {
    backgroundColor: '#transparent',
    border: '1px solid blue',
    color: 'white',
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '1px solid black',
    color: 'black',
  };

  return (
    <Layout >

      <Sider
        width={'fit-content'}
        theme="light"
        style={{
          Height: '100vh'
        }}
      >


        <HeaderMenu />
        <MenuSider setSelector={handleSelectorChange} />

      </Sider>




      {
        selector === 1 &&
        <Layout>
          <Header
            style={{
              background: 'black',
              color: 'white'
            }}
          >
            header o day abc
          </Header>


          <Content
            style={{
              margin: '0px',
            }}
          >
            <div>
              content o day abcxyzssss
            </div>
          </Content>


          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      }

      {
        selector === 2 &&
        <Layout style={{
          borderLeft: 'solid 0.5px grey'
        }}>
          <Header
            style={{
              background: 'white',
              display: "flex",
              justifyContent: 'space-between'


            }}
          >

            <span style={{ fontWeight: 'bolder' }}>Danh Sách Phòng Ban</span>
            <Button style={{ color: 'blue', border: '1px solid blue', marginTop: 15 }} ><LoginOutlined /></Button>


          </Header>


          <Content
            style={{
              paddingLeft: '10%',
              paddingTop: '5%',
              paddingBottom: '5%',

            }}
          >
            <Space>
              <div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  padding: '2rem',
                  borderRadius: '.3rem',
                  marginBottom: '2rem',
                }}>
                  <div>
                    <Input placeholder="Tìm kiếm" style={{
                      border: 'none',
                      borderBottom: '1px solid gray',
                      borderRadius: '0',
                      width: '12rem',
                      background: 'none'
                    }} />
                  </div>

                  <div style={{ display: 'flex', width: '35%' }}>
                    <Select
                      defaultValue="Toàn bộ phòng ban"
                      style={{ width: 170 }}
                      options={[{ value: 'Toàn bộ phòng ban', label: 'Toàn bộ phòng ban' }]}
                    />

                    <div>
                      <Button style={{ color: '#32CD32', border: '#32CD32 1px solid', marginLeft: 10 }}>Làm mới</Button>
                    </div>
                  </div>
                  <Button
                    style={buttonStyle}
                    className="custom-button"
                    onMouseEnter={(e) => {
                      e.target.style = { ...e.target.style, ...buttonHoverStyle };
                    }}
                    onMouseLeave={(e) => {
                      e.target.style = { ...e.target.style, ...buttonStyle };
                    }}
                  >
                    + Thêm nhân viên
                  </Button>
                </div>



                <hr />

                <TableDepartment />

              </div>

            </Space>
          </Content>


          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Footer o day
          </Footer>
        </Layout>
      }

      {
        selector === 4 &&
        <Layout style={{
          borderLeft: 'solid 0.5px grey'
        }}>
          <Header
            style={{
              color: 'black',
              background: 'white',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >

            <span style={{ fontWeight: 'bolder' }}>Toàn Bộ Nhân Viên</span>
            <Button style={{ color: 'blue', border: '1px solid blue', marginTop: 15 }} ><LoginOutlined /></Button>


          </Header>


          <Content
            style={{
              paddingLeft: '15%',
              paddingTop: '5%',
              paddingBottom: '5%',
              paddingRight: '15%',

            }}
          >

            <div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                padding: '2rem',
                borderRadius: '.3rem',
                marginBottom: '2rem',
              }}>
                <div>
                  <Input placeholder="Tìm kiếm" style={{
                    border: 'none',
                    borderBottom: '1px solid gray',
                    borderRadius: '0',
                    width: '12rem',
                    background: 'none'
                  }} />
                </div>

                <div style={{ display: 'flex', width: '35%' }}>
                  <Select
                    defaultValue="Toàn bộ phòng ban"
                    style={{ width: 170 }}
                    options={[{ value: 'Toàn bộ phòng ban', label: 'Toàn bộ phòng ban' }]}
                  />

                  <div>
                    <Button style={{ color: '#32CD32', border: '#32CD32 1px solid', marginLeft: 10 }}>Làm mới</Button>
                  </div>
                </div>

                <Button
                  style={buttonStyle}
                  className="custom-button"
                  onMouseEnter={(e) => {
                    e.target.style = { ...e.target.style, ...buttonHoverStyle };
                  }}
                  onMouseLeave={(e) => {
                    e.target.style = { ...e.target.style, ...buttonStyle };
                  }}
                >
                  + Thêm nhân viên
                </Button>
              </div>



              <hr />

              <TableAllDepartment />

            </div>


          </Content>


          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Footer o day
          </Footer>
        </Layout>
      }



    </Layout >

  );
}

export default App;
