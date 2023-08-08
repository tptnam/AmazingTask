import React from 'react';
import { Avatar, Layout } from 'antd';
const { Header } = Layout;

function HeaderMenu() {
    return (
        <div style={{ width: '300px' }}>
            <Header style={{
                background: 'white',
            }}>

                <Avatar size="large" src=
                    "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/233084184_1491236247879885_9080631247516219420_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GiJaHyKStRkAX_1Uv8j&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfAEGJuEmNjhvLBsrTqpGlNekYSUY3byFjtarAPzS7hhnA&oe=64D44B75"
                >
                </Avatar>
                <span>&nbsp;&nbsp;Quan Li</span>
            </Header>
        </div>

    )
}

export default HeaderMenu;
