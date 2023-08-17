import { Typography, Descriptions } from 'antd';
const { Text } = Typography;


const MyContract = () => {


    return (


        <div>
            <div style={{ paddingLeft: '5rem' }} >
                <div style={{ marginTop: '2.5rem' }}>
                    <div>
                        <h3 style={{ fontWeight: '400', fontSize: '24px', marginBottom: '1.25rem', color: '#3182CE' }}>
                            Thông tin người lao động
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '2rem', gap: '0.75rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1rem' }}>
                                    <strong style={{ fontSize: '1rem' }} >
                                        Họ và tên:
                                    </strong>
                                    Nguyen Van Quan Li
                                </div>
                                <div style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1rem' }}>
                                    <strong style={{ fontSize: '1rem' }} >
                                        Giới tính:
                                    </strong>
                                    Nam
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1rem' }}>
                                    <strong style={{ fontSize: '1rem' }}>
                                        Sinh ngày:
                                    </strong>
                                    <span>02/02/2002</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1rem' }}>
                                    <strong style={{ fontSize: '1rem' }}>
                                        CCCD/CMND:
                                    </strong>
                                    12345679010
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                                <div style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '1rem' }}>
                                    <strong style={{ fontSize: '1rem' }}>
                                        Địa chỉ:
                                    </strong>
                                    <span style={{ marginLeft: '0.25rem' }}>abczsd</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                                <div style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1rem' }}>
                                    <strong style={{ fontSize: '1rem' }}>
                                        Số điện thoại:
                                    </strong>
                                    0912672727
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 style={{ fontWeight: '400', fontSize: '24px', color: '#3182CE' }} >
                            Hợp đồng lao động
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: '#3182CE', fontSize: '18px' }}>
                                1. Công việc, phòng ban và thời hạn hợp đồng
                            </span>
                            <div style={{ paddingTop: '0.5rem', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }} >
                                <div>
                                    <strong style={{ fontSize: '1rem' }}>
                                        Phòng ban công tác:
                                    </strong>
                                    <span>  Sales</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                                    <strong style={{ fontSize: '1rem' }}>
                                        Loại hợp đồng:
                                    </strong>
                                    <span style={{ marginLeft: '0.5rem' }}>Hợp đồng xác định thời hạn</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1rem' }}>
                                        <strong style={{ fontSize: '1rem' }} >
                                            Từ ngày:
                                        </strong>
                                        <span style={{ marginLeft: '.5rem' }}>01-01-2023</span>
                                    </div>

                                    <div style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1rem' }}>
                                        <strong style={{ fontSize: '1rem' }}>
                                            Đến ngày:
                                        </strong>
                                        <span style={{ marginLeft: '0.25rem' }}>01-01-2023</span>
                                    </div>
                                </div>
                            </div>

                            <span style={{ marginTop: '1.875rem', color: '#3182CE', fontSize: '18px' }}>
                                2. Lương, phụ cấp và các khoản bổ sung khác
                            </span>
                            <div style={{ paddingTop: '0.5rem', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }} >
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1rem' }}>
                                        <strong style={{ fontSize: '1rem' }} >
                                            Lương căn bản:
                                        </strong>
                                        <span style={{ marginLeft: '0.1875rem' }}>
                                            {new Intl.NumberFormat('en-DE').format(9000000)}
                                        </span>
                                    </div>
                                    <div style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '1rem' }}>
                                        <strong style={{ fontSize: '1rem' }} >
                                            Lương tính thuế:
                                        </strong>
                                        <span style={{ marginLeft: '1.25rem' }}>
                                            {new Intl.NumberFormat('en-DE').format(8000000)}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <strong style={{ fontSize: '1rem' }}>
                                        Các phụ cấp &nbsp;(mỗi tháng):
                                    </strong>
                                    <span> &nbsp; 9.000.000</span>
                                    <span></span>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', fontSize: '1rem' }}>
                                        <strong style={{ fontSize: '1rem' }} >
                                            Hình thức trả lương:
                                        </strong>
                                        <span>Chuyển khoản</span>
                                    </div>
                                    <div style={{ marginLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }} >
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.25rem', fontSize: '1rem' }}>
                                            <span style={{ fontSize: '1rem' }} >Số TK ngân hàng:</span>
                                            <span>tptnam2602</span>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem', fontSize: '1rem' }} >
                                            <span style={{ fontSize: '1rem' }}>Chủ tài khoản:</span>
                                            <span style={{ marginLeft: '0.125rem' }}>Tran Pham Thanh Nam</span>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.75rem', fontSize: '1rem' }}>
                                            <span style={{ fontSize: '1rem' }}>Ngân hàng:</span>
                                            <span>TPBank</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <span style={{ marginTop: '1.875rem', color: '#3182CE', fontSize: '18px' }} >
                                3. Thời gian làm việc và ghi chú
                            </span>
                            <div style={{ paddingTop: '0.5rem', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', fontSize: '1rem' }} >
                                    <strong style={{ fontSize: '1rem' }}>
                                        Số ngày làm việc trong 1 tuần:
                                    </strong>
                                    <span>5</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.25rem', fontSize: '1rem' }}>
                                    <strong style={{ fontSize: '1rem' }}>
                                        Số người phụ thuộc
                                    </strong>
                                    <span >1</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.75rem', fontSize: '1rem' }}>
                                    <strong style={{ fontSize: '1rem' }}>
                                        Ghi chú:
                                    </strong>
                                    <span >abc</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >




    )
}





export default MyContract;

