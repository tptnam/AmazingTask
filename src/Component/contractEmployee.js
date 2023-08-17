import React from 'react';
import { Table, Tag, } from 'antd';
import { NumberOutlined, EllipsisOutlined, CalendarOutlined, UserOutlined, UnorderedListOutlined, AlignLeftOutlined } from '@ant-design/icons';
import { contract } from '../shared/contract';

const columns = [
    {
        fixed: 'left',
        width: 'auto',
        render: () => <EllipsisOutlined />,
        className: 'expandable-column',
    },
    {
        title: 'ID',
        width: 'auto',
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
        className: 'expandable-column',
    },
    {
        title: <div><UserOutlined /> Tạo Bởi</div>,
        dataIndex: 'createBy',
        key: 'id',
        className: 'expandable-column',
    },
    {
        title: <div><UserOutlined />  Loại hợp đồng</div>,
        width: 'auto',
        dataIndex: 'typeOfContract',
        key: 'id',
        className: 'expandable-column',
        render: (_, { typeOfContract }) => (
            <>
                {typeOfContract === 1 ? <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'underline' }}>
                    <div style={{ backgroundColor: "orange", minWidth: '10px', height: '10px', borderRadius: '50%' }}></div>
                    Hợp đồng xác định hạn
                </div> : <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                    <div style={{ backgroundColor: "blue", minWidth: '10px', height: '10px', borderRadius: '50%' }}></div>
                    Hợp đồng KO xác định hạn
                </div>}
            </>
        ),
    },

    {
        title: <div><UnorderedListOutlined />  Trạng thái</div>,
        dataIndex: 'typeOfContract',
        key: 'id',
        className: 'expandable-column',
        render: status => (
            <>
                {status === '1' ? <Tag color="purple">Hiệu lực</Tag> :
                    <Tag color="red">Hết hạn</Tag>}
            </>
        ),

    },
    {
        title: <div><UnorderedListOutlined /> Loại lương</div>,
        dataIndex: 'typeOfGross',
        key: 'id',
        className: 'expandable-column',
        render: status => (
            <>
                {status === 1 ? <Tag color="geekblue">Gross To Net</Tag> :
                    <Tag color="geekblue">Gross To Nettttt</Tag>}
            </>
        ),
    },
    {
        title: <div><NumberOutlined /> Người phụ thuộc</div>,
        minWidth: '2rem',
        dataIndex: 'numberOfDependent',
        key: 'id',
        className: 'expandable-column',
    },
    {
        title: <div ><CalendarOutlined /> Ngày bắt đầu</div>,
        dataIndex: 'dateStart',
        key: 'id',
        className: 'expandable-column',
    },
    {
        title: <div ><CalendarOutlined /> Ngày kết thúc</div>,
        minWidth: '2rem',
        dataIndex: 'dateEnd',
        key: 'id',
        className: 'expandable-column',
    },
    {
        title: <div ><NumberOutlined /> Lương thoả thuận</div>,
        minWidth: '2rem',
        dataIndex: 'salary',
        key: 'id',
        className: 'expandable-column',
        render: e => (
            <>
                {e}VND
            </>
        )
    },
    {
        title: <div ><NumberOutlined /> Lương đóng thuế</div>,
        minWidth: '2rem',
        dataIndex: 'tax',
        key: 'id',
        className: 'expandable-column',
        render: e => (
            <>
                {e} VND
            </>
        )
    },
    {
        title: <div style={{ minWidth: '2rem', }} ><NumberOutlined /> Tổng phụ cấp</div>,
        minWidth: '2rem',
        key: 'id',
        className: 'expandable-column',
        render: () => (
            <>
                0 VND
            </>
        )
    },
    {
        title: <div ><AlignLeftOutlined /> Ghi chú</div>,
        minWidth: '2rem',
        dataIndex: 'dateEnd',
        key: 'id',
        className: 'expandable-column',
        render: () => (
            <>
                chưa có ghi chú
            </>
        )
    },
];

const ContractEmployee = () =>
    <>
        <Table columns={columns} dataSource={contract} style={{
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
            pagination={{
                pageSize: 8,
            }}
            scroll={{
                x: true,
            }}
        />
    </>

export default ContractEmployee;