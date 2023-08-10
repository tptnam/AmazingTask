import React from 'react';
import { Table, Tag, Avatar } from 'antd';
import {
    BorderlessTableOutlined,
    EllipsisOutlined,
    PhoneOutlined,
    ProfileOutlined,
    UnorderedListOutlined,
    CalendarOutlined,
} from '@ant-design/icons';
import { employees } from '../shared/employee';

const columns = [
    {
        render: () => <EllipsisOutlined />
    },
    {
        dataIndex: 'status',
        key: 'status',
        render: (_, { status }) => (
            <>
                {status ? <Avatar size="large" src=
                    "https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-6/233084184_1491236247879885_9080631247516219420_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=YvunFBC1WdYAX9Ee_JY&_nc_ht=scontent.fsgn5-1.fna&oh=00_AfBiy9uEXITglTCVw1MVUAHqNhIx0g1soxOR3HNczGpMYA&oe=64DA3A35"
                >
                </Avatar> :
                    <Avatar size="large" src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/258859759_1345037795951286_5683834817039929278_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=oDDD_NFfbEkAX8uf6Jc&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfBh-d_foo2HhqbuAK3tvjYNUoYbPk_d4GW47mKG5i9TZg&oe=64D72106"
                    >
                    </Avatar>}
            </>
        ),
    },
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: <div style={{ minWidth: '7rem' }}><ProfileOutlined /> Tên nhân viên</div>,
        dataIndex: 'name',
        key: 'name',
        render: (text) => <div>{text}</div>,
    },
    {
        title: <div style={{ minWidth: '12rem' }}><UnorderedListOutlined /> Phòng ban</div>,
        dataIndex: 'department',
        key: 'name',
        render: (text, record) => <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <div style={{ backgroundColor: record.color, minWidth: '10px', height: '10px', borderRadius: '50%' }}></div>
            {text}
        </div>
    },
    {
        title: <div style={{ minWidth: '9rem' }} ><PhoneOutlined /> Số điện thoại</div>,
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: <div style={{ minWidth: '7rem' }} ><UnorderedListOutlined /> Giới tính</div>,
        dataIndex: 'gender',
        key: 'gender',
        render: (text, recordÏ, index) => {
            if (text === 'Nam') {
                return <Tag color='blue' key={index}>Nam</Tag>
            }
            return <Tag color='red' key={index}>Nữ</Tag>
        }
    },
    {
        title: <div style={{ minWidth: '10rem' }} ><ProfileOutlined /> Email</div>,
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: <div style={{ minWidth: '7rem' }} ><ProfileOutlined /> Ngân hàng</div>,
        dataIndex: 'bank',
        key: 'bank',
    },
    {
        title: <div style={{ minWidth: '10rem' }} ><CalendarOutlined /> Ngày sinh</div>,
        dataIndex: 'birthday',
        key: 'birthday',
        render: (text) => (
            <div>
                {(new Date(text), "d 'tháng' M 'năm' yyyy")}
            </div>
        )
    },
    {
        title: <div style={{ minWidth: '12rem' }} ><ProfileOutlined /> Địa chỉ</div>,
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: <div style={{ minWidth: '10rem' }}> <UnorderedListOutlined /> Quốc gia</div>,
        dataIndex: 'nation',
        key: 'nation',
    },
    {
        title: <div style={{ minWidth: '10rem' }}> <BorderlessTableOutlined />Tài khoản ngân hàng</div>,
        dataIndex: 'bankaccount',
        key: 'bankaccount',
    },
];

const TableAllDepartment = () =>
    <>
        <Table columns={columns} dataSource={employees} style={{
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',

        }}
            pagination={{
                pageSize: 5,
            }}

            scroll={{
                x: 500,


            }} />
    </ >

export default TableAllDepartment;