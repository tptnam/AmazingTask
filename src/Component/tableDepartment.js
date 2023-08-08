import React from 'react';
import { Table, } from 'antd';
import { BorderlessTableOutlined, EllipsisOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { departments } from '../shared/department';

const columns = [
    {
        render: () => <EllipsisOutlined />
    },
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: <div style={{ minWidth: '5rem' }}><UserOutlined /> Phòng ban</div>,
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <div style={{ backgroundColor: record.color, minWidth: '10px', height: '10px', borderRadius: '50%' }}></div>
            {text}
        </div>
    },
    {
        title: <div style={{ minWidth: '7rem' }} ><UserOutlined /> Quản lý</div>,
        dataIndex: 'managername',
        key: 'managername',
        // filters: [
        //     {
        //         text: 'Value',
        //         value: 'Value',
        //     },
        // ],
    },
    {
        title: <div style={{ minWidth: '4rem' }} ><BorderlessTableOutlined /> Số nhân viên</div>,
        dataIndex: 'amountEmployees',
        key: 'amountEmployees',
    },
    {
        title: <div style={{ minWidth: '7rem' }} ><BorderlessTableOutlined /> Email quản lý</div>,
        dataIndex: 'emailManager',
        key: 'emailManager',
    },
    {
        title: <div style={{ minWidth: '7rem' }} ><PhoneOutlined /> Số điện thoại</div>,
        dataIndex: 'phone',
        key: 'phone',
    },
];

const TableDepartment = () =>
    <>
        <Table columns={columns} dataSource={departments} style={{
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }} />
    </>

export default TableDepartment;