import React from 'react';
import {
    HomeOutlined,
    TeamOutlined,
    ClockCircleOutlined,
    MailOutlined,

} from '@ant-design/icons';
import { Menu, Layout, Avatar } from 'antd';
import { useEffect } from 'react';
const { Header } = Layout;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem(<h1 style={{ fontSize: 16, }}>DASHBOARD</h1>, '1', <HomeOutlined />),

    getItem(<span style={{ fontWeight: 'bolder' }} >NHÂN VIÊN</span>, 'sub1', <></>, [
        getItem('Phòng Ban', '2', <TeamOutlined />),
        getItem('Phòng Ban Của Tôi', '3', <TeamOutlined />),
        getItem('Toàn Bộ Nhân Viên', '4', <TeamOutlined />),
        getItem('Tạo Nhân Viên Mới', '5', <TeamOutlined />),
    ]),

    getItem(<span span style={{ fontWeight: 'bolder' }} >TĂNG CA</span >, 'sub2', <></>, [
        getItem('Đơn Tăng Ca Nhân Viên', '6', <ClockCircleOutlined />),
        getItem('Đơn Tăng Ca Của Tôi', '7', <ClockCircleOutlined />)
    ]),

    getItem(<span style={{ fontWeight: 'bolder' }}>NGHỈ PHÉP</span>, 'sub3', <></>, [
        getItem('Đơn Nghỉ Phép Nhân Viên', '8', <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" /></svg>),
        getItem('Đơn Nghỉ Phép Của Tôi', '9', <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" /></svg>)
    ]),

    getItem(<span style={{ fontWeight: 'bolder' }} >ĐƠN KHÁC</span>, 'sub4', <></>, [
        getItem('Danh Sách Đơn Khác', '10', <MailOutlined />),
        getItem('Đơn Khác Của Tôi', '11', <MailOutlined />)
    ]),

    getItem(<span style={{ fontWeight: 'bolder' }} >QUẢN LÍ LƯƠNG</span>, 'sub5', <></>, [
        getItem('Lương Nhân Viên', '12', <TeamOutlined />),
        getItem('Lương Của Tôi', '13', <TeamOutlined />)
    ]),

    getItem(<span style={{ fontWeight: 'bolder' }} >HỢP ĐỒNG</span>, 'sub6', <></>, [
        getItem('Hợp Đồng Nhân Viên', '14', <MailOutlined />),
        getItem('Hợp Đồng Của Tôi', '15', <MailOutlined />)
    ]),


    getItem(<span style={{ fontWeight: 'bolder' }} >TUYỂN DỤNG</span>, 'sub7', <></>, [
        getItem('Danh Sách Ứng Viên', '16', <TeamOutlined />),
    ]),
];

const MenuSider = (props) => {

    useEffect(() => {
        const savedSelectedKey = localStorage.getItem('selectedKey');
        if (savedSelectedKey) {
            props.setSelector(parseInt(savedSelectedKey));
        }
    }, []);

    const handleOnclick = (e) => {
        const selectedKeyabv = parseInt(e.key);
        localStorage.setItem('selectedKey', selectedKeyabv);
        props.setSelector(selectedKeyabv);
    };


    const savedSelectedKey = localStorage.getItem('selectedKey');

    return (
        <div style={{ width: 'fit-content' }}>
            <Header style={{
                background: 'white',
            }}>

                <Avatar size="large" src=
                    "https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-6/233084184_1491236247879885_9080631247516219420_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=YvunFBC1WdYAX9Ee_JY&_nc_ht=scontent.fsgn5-1.fna&oh=00_AfBiy9uEXITglTCVw1MVUAHqNhIx0g1soxOR3HNczGpMYA&oe=64DA3A35"
                >
                </Avatar>
                <span>&nbsp;&nbsp;Nguyen Van Quan Li</span>
            </Header>
            <Menu
                style={{

                    width: '100%',
                    height: '90vh',
                    minHeight: '90vh',
                    overflowY: 'scroll'


                }}

                onClick={handleOnclick}
                defaultSelectedKeys={[savedSelectedKey || '1']}
                defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7']}
                mode="inline"
                items={items}


            />
        </div >
    );
};
export default MenuSider;