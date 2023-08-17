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
        className: 'expandable-column',
        fixed: 'left',
        render: () => <EllipsisOutlined />
    },
    {
        dataIndex: 'status',
        key: 'status',
        className: 'expandable-column',
        fixed: 'left',
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
        className: 'expandable-column',
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
    },
    {
        title: <div><ProfileOutlined /> Tên nhân viên</div>,
        dataIndex: 'name',
        key: 'name',
        className: 'expandable-column',
        fixed: 'left',
        render: (text) => <div>{text}</div>,
    },
    {
        title: <div><UnorderedListOutlined /> Phòng ban</div>,
        dataIndex: 'department',
        key: 'name',
        className: 'expandable-column',
        render: (text, record) => <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <div style={{ backgroundColor: record.color, minWidth: '10px', height: '10px', borderRadius: '50%' }}></div>
            {text}
        </div>
    },
    {
        title: <div ><PhoneOutlined /> Số điện thoại</div>,
        dataIndex: 'phone',
        key: 'phone',
        className: 'expandable-column',
    },
    {
        title: <div><UnorderedListOutlined /> Giới tính</div>,
        dataIndex: 'gender',
        key: 'gender',
        className: 'expandable-column',
        render: (text, recordÏ, index) => {
            if (text === 'Nam') {
                return <Tag color='blue' key={index}>Nam</Tag>
            }
            return <Tag color='red' key={index}>Nữ</Tag>
        }
    },
    {
        title: <div><ProfileOutlined /> Email</div>,
        dataIndex: 'email',
        key: 'email',
        className: 'expandable-column',
    },
    {
        title: <div><ProfileOutlined /> Ngân hàng</div>,
        dataIndex: 'bank',
        key: 'bank',
        className: 'expandable-column',
    },
    {
        title: <div><CalendarOutlined /> Ngày sinh</div>,
        dataIndex: 'birthday',
        key: 'birthday',
        className: 'expandable-column',
        render: (text) => (
            <div>
                {(new Date(text), "d 'tháng' M 'năm' yyyy")}
            </div>
        )
    },
    {
        title: <div><ProfileOutlined /> Địa chỉ</div>,
        dataIndex: 'address',
        key: 'address',
        className: 'expandable-column',
    },
    {
        title: <div> <UnorderedListOutlined /> Quốc gia</div>,
        dataIndex: 'nation',
        key: 'nation',
        className: 'expandable-column',
    },
    {
        title: <div> <BorderlessTableOutlined />Tài khoản ngân hàng</div>,
        dataIndex: 'bankaccount',
        key: 'bankaccount',
        className: 'expandable-column',
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
                x: true,
            }} />
    </ >

export default TableAllDepartment;