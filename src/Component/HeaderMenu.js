import React from 'react';
import { Avatar, Layout } from 'antd';
const { Header } = Layout;

function HeaderMenu() {
    return (
        <div style={{ width: '100%' }}>
            <Header style={{
                background: 'white',
            }}>

                <Avatar size="large" src=
                    "https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-6/233084184_1491236247879885_9080631247516219420_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=YvunFBC1WdYAX9Ee_JY&_nc_ht=scontent.fsgn5-1.fna&oh=00_AfBiy9uEXITglTCVw1MVUAHqNhIx0g1soxOR3HNczGpMYA&oe=64DA3A35"
                >
                </Avatar>
                <span>&nbsp;&nbsp;Nguyen Van Quan Li</span>
            </Header>
        </div>

    )
}

export default HeaderMenu;
