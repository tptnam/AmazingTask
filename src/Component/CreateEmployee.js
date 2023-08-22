import { Steps, Form, Input, Button, message, Radio, Row, Col, Space, Dropdown, DatePicker } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { useState } from "react";

function CreateEmployee() {
    const [statusCreate, setStatusCreate] = useState(0);
    const [accountCreate, setAccountCreate] = useState(null);
    const [profileCreate, setProfileCreate] = useState(null);

    const onFinishCreateAccount = (e) => {
        setAccountCreate(e);
        setStatusCreate(1);
    }

    const onFinishProfileAccount = (e) => {
        setProfileCreate(e);
        setStatusCreate(2);
    }

    const next = () => {
        setStatusCreate(statusCreate + 1);
    };
    const prev = () => {
        setStatusCreate(statusCreate - 1);
    };


    const items = [
        {
            label: 'Sales',
            key: '1',
        },
        {
            label: 'Marketing',
            key: '2',
        },
        {
            label: 'Finance',
            key: '3',
        },
        {
            label: 'Human Resource',
            key: '4',
        },
        {
            label: 'Operations',
            key: '5',
        },
        {
            label: 'Engineering',
            key: '6',
        },
        {
            label: 'Customer Support',
            key: '7',
        },
        {
            label: 'Research & Development',
            key: '8',
        },
        {
            label: 'Quanlity Assurance',
            key: '9',
        },
        {
            label: 'Design',
            key: '10',
        },
        {
            label: 'Chăm sóc khách hàng',
            key: '11',
        },
    ];
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    const FORM = [
        <CreateAccountEmployee onFinish={onFinishCreateAccount} initValue={accountCreate} />,
        <FormInfo onFinish={onFinishProfileAccount} initValue={profileCreate} />
    ]


    return (
        <div>
            <Steps
                onChange={setStatusCreate}
                current={statusCreate}
                style={{
                    paddingBottom: '5%',

                }}
            >
                <Steps.Step title='Tạo tài khoản'></Steps.Step>
                <Steps.Step title='Thông tin cá nhân'></Steps.Step>
            </Steps>
            {FORM[statusCreate]}
        </div>
    )

    function CreateAccountEmployee({ onFinish, initValue }) {
        return (
            <Form
                onFinish={onFinish}
                initialValues={initValue}
                layout="vertical"
            >
                <Form.Item
                    label="Tên đăng nhập"
                    name={"accountName"}
                    rules={[
                        {
                            required: true,
                        },
                    ]
                    }
                >
                    <Input placeholder="Nhập tên đăng nhập" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name={"email"}
                    rules={[
                        {
                            required: true,
                            type: "email",
                            message: "Enter valid email"
                        },
                    ]
                    }>
                    <Input placeholder="Nhập email" />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu"
                    name={"password"}
                    extra="Mật khẩu cần ít nhất 1 ký tự đặc biệt, 1 chữ hoa và một số"
                    rules={[
                        {
                            required: true,
                            type: "password",
                            message: "Enter password"
                        },
                    ]
                    }>
                    <Input.Password placeholder="Nhập mật khẩu" />
                </Form.Item>
                <Form.Item label="Xác nhận mật khẩu"
                    name={"confirmPassword"}
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                    ]}>
                    <Input.Password placeholder="Nhập lại mật khẩu" />
                </Form.Item>
                <Form.Item>
                    <div style={{
                        display: "flex",
                        justifyContent: 'space-between'
                    }}>
                        <Button
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={() => prev()}
                            disabled
                        >
                            Quay lại
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Next
                        </Button>

                    </div>
                </Form.Item>

            </Form >

        )

    }

    function FormInfo({ onFinish, initValue }) {
        const [value, setValue] = useState('');
        const onChange = (value) => {
            setValue(value.target.value);
        };
        return (
            <Form onFinish={onFinish} initialValues={initValue} name="validateOnly" layout="vertical" autoComplete="off">
                <Row justify="center">
                    <Col span={11}>
                        <Form.Item
                            name={"firstname"} label="Họ"
                        >
                            <Input placeholder="Nhập họ" />
                        </Form.Item>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <Form.Item
                            name={"lastname"} label="Tên"
                        >
                            <Input placeholder="Nhập tên" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={11}>
                        <Form.Item
                            name={"gender"} label="Giới tính"
                        >
                            <Radio.Group onChange={onChange} value={value}>
                                <Radio value={"Nữ"}>Nữ</Radio>
                                <Radio value={"Nam"}>Nam</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <Form.Item
                            name={"country"} label="Quốc tịch"
                        >
                            <Input placeholder="Nhập quốc tịch" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={11}>
                        <Form.Item
                            name={"phone"} label="Số điện thoại"
                        >
                            <Input placeholder="Nhập số điện thoại" />
                        </Form.Item>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <Form.Item
                            name={"birthday"} label="Ngày sinh"
                        >
                            <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={24}>
                        <Form.Item
                            name={"address"} label="Địa chỉ"
                        >
                            <Input placeholder="Nhập địa chỉ" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify="center">
                    <Col span={11}>
                        <Form.Item
                            name={"department"} label="Phòng ban"
                        >
                            <Dropdown menu={menuProps}>
                                <Button>
                                    <Space>
                                        Chọn phòng ban
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </Form.Item>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <Form.Item
                            name={"CCCD"} label="CCCD|CMND"
                        >
                            <Input placeholder="Nhập CCCD|CMND" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={11}>
                        <Form.Item
                            name={"bankName"} label="Tên tài khoản ngân hàng"
                        >
                            <Input placeholder="Nhập tên tài khoản ngân hàng" />
                        </Form.Item>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <Form.Item
                            name={"bankNumber"} label="Số tài khoản ngân hàng"
                        >
                            <Input placeholder="Nhập số tài khoản ngân hàng" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={24}>
                        <Form.Item
                            name={"bank"} label="Ngân hàng"
                        >
                            <Input placeholder="Nhập ngân hàng" />
                        </Form.Item>
                    </Col>
                </Row>
                <div style={{
                    display: "flex",
                    justifyContent: 'space-between'
                }}>
                    <Button
                        onClick={() => prev()}
                    >
                        Quay lại
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => next()}>
                        Hoàn Thành
                    </Button>
                </div>
            </Form >


        )
    }



} export default CreateEmployee;