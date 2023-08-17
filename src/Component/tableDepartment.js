import React from 'react';
import { Table, } from 'antd';
import { BorderlessTableOutlined, EllipsisOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { departments } from '../shared/department';

const columns = [
    {
        className: 'expandable-column',
        render: () => <EllipsisOutlined />

    },
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        className: 'expandable-column',
    },
    {
        title: <div><UserOutlined /> Phòng ban</div>,
        dataIndex: 'name',
        key: 'name',
        className: 'expandable-column',
        render: (text, record) => <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <div style={{ backgroundColor: record.color, minWidth: '10px', height: '10px', borderRadius: '50%' }}></div>
            {text}
        </div>
    },
    {
        title: <div ><UserOutlined /> Quản lý</div>,
        dataIndex: 'managername',
        key: 'managername',
        className: 'expandable-column',
        // filters: [
        //     {
        //         text: 'Value',
        //         value: 'Value',
        //     },
        // ],
    },
    {
        title: <div ><BorderlessTableOutlined /> Số nhân viên</div>,
        dataIndex: 'amountEmployees',
        key: 'amountEmployees',
    },
    {
        title: <div ><BorderlessTableOutlined /> Email quản lý</div>,
        dataIndex: 'emailManager',
        key: 'emailManager',
        className: 'expandable-column',
    },
    {
        title: <div ><PhoneOutlined /> Số điện thoại</div>,
        dataIndex: 'phone',
        key: 'phone',
        className: 'expandable-column',
    },
];

const TableDepartment = () =>
    <>
        <Table columns={columns} dataSource={departments} style={{
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
            pagination={{
                pageSize: 5,
            }}
            scroll={{
                x: true,

            }}
        />
    </>

export default TableDepartment;