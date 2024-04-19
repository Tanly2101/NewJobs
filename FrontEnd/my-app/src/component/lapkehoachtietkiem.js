import React, { useState } from 'react'
// import '../styles/lapkehoachtietkiem.scss'
export default function Lapkehoachtietkiem() {
    const [formData, setFormData] = useState({
        p: '',
        n: '',
        M: '',
        i: '',
        giatri: ''

    });
    const [total, setTotal] = useState(0);
    const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
    const formattedAmount = formatter.format(total);
    console.log(formattedAmount);
    /**
     *
    P Mục tiêu tiết kiệm.
    i là lãi suất hàng năm của khoản đầu tư đó. Ví dụ lãi suất 10%/năm, thì i được hiểu là 0,1.
    n là số năm bạn dự tính đầu tư.
    M Số tiền ban đầu (VNĐ)

     */
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const getFormData = (event) => {
        event.preventDefault();
        console.log(formData);
        // let PMT = calculatePMT(FV, PV, interestRate, n);
        // console.log("Số tiền cần tiết kiệm mỗi tháng:", PMT);
        if (formData.giatri === 'thang') {
            let totalAmountMonth = calculateTotalAmount(formData.p, formData.M, formData.n, formData.i, formData.giatri);
            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountMonth)
            setTotal(totalAmountMonth);
        } else if (formData.giatri === 'nam') {
            let totalAmount = calculateTotalAmountYear(formData.p, formData.month, formData.n, formData.i, formData.giatri);
            console.log("Tổng số tiền sau kỳ hạn tháng là:", totalAmount)
            setTotal(totalAmount)
        }
    }

    function calculateTotalAmount(principal, Initialinvestment, years, interestRate) {
        // Chuyển đổi lãi suất thành dạng thập phân
        let monthlyInterestRate = interestRate / 100 / 12;

        // // Số lần lãi được tính trong khoảng thời gian gửi
        let numberOfPayments = years * 12;

        // Tính tổng số tiền tích luỹ
        let element = principal - Initialinvestment * Math.pow(1 + monthlyInterestRate, numberOfPayments)

        let samplepart = ((Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1) / monthlyInterestRate);

        let totalAmount = element / samplepart;

        return totalAmount.toFixed(0); // Làm tròn đến hai chữ số thập phân
    }
    function calculateTotalAmountYear(principal, Initialinvestment, years, interestRate) {
        // Chuyển đổi lãi suất thành dạng thập phân
        let monthlyInterestRate = interestRate / 100;

        // // Số lần lãi được tính trong khoảng thời gian gửi
        let numberOfPayments = years;

        // Tính tổng số tiền tích luỹ
        let element = principal - Initialinvestment * Math.pow(1 + monthlyInterestRate, numberOfPayments)

        let samplepart = ((Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1) / monthlyInterestRate);

        let totalAmount = element / samplepart;

        return totalAmount.toFixed(0); // Làm tròn đến hai chữ số thập phân
    }


    return (
        <form id='paragraph' onSubmit={getFormData}>
            <div className='title'>
                <h2>
                    Công cụ lập kế hoạch tiết kiệm ứng dụng lãi suất kép
                </h2>
            </div>
            <div>
                <h3>
                    Bước 1 : Mục tiêu tiết kiệm
                </h3>
                <div className='principal'>
                    <div className='principal-left'>
                        <p className='title-max'>
                            Mục tiêu tiết kiệm (VNĐ)
                        </p>
                        <p className='title-min'>
                            Số tiền tiết kiệm cuối cùng mong muốn.
                        </p>
                    </div>
                    <div className='principal-right'>
                        <label>
                            <input value={formData.p} onChange={handleChange} placeholder="VD : 10,000,000"
                                name="p" />
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <h3>
                    Bước 2 : Khoản đầu tư ban đầu
                </h3>
                <div className='deposits-month'>
                    <div>
                        <p className='title-max'>
                            Số tiền ban đầu (VNĐ)
                        </p>
                        <p className='title-min'>
                            Khoản tiền đầu tư lúc ban đầu bạn có.
                        </p>
                    </div>
                    <div>
                        <label className='principal-right'>
                            <input value={formData.M} placeholder="VD : 10,000,000" onChange={handleChange} name="M" />
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <h3>
                    Bước 3 : Khoảng thời gian ước tính
                </h3>
                <div className='interest'>
                    <div>
                        <p className='title-max'>
                            Thời gian tiết kiệm (Năm)
                        </p>
                        <p className='title-min'>
                            Khoảng thời gian, tính bằng năm, mà bạn dự định tiết kiệm.
                        </p>
                    </div>
                    <div className='principal-right'>
                        <label>
                            <input value={formData.n} placeholder="VD : 10" onChange={handleChange} name="n" />
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <h3>
                    Bước 4 : Lãi suất
                </h3>
                <div className='interest'>
                    <div>
                        <p className='title-max'>
                            Lãi suất(%)
                        </p>
                        <p className='title-min'>
                            Lãi suất ước tính theo kỳ hạn gửi của bạn
                        </p>
                    </div>
                    <div className='principal-right'>
                        <label>
                            <input value={formData.i} placeholder="VD : 10" onChange={handleChange} name="i" />
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <h3>
                    Bước 5: Kỳ hạn
                </h3>
                <div className='money-term'>
                    <div>
                        <p className='title-max'>
                            Định kỳ gửi :
                        </p>
                        <p className='title-min'>
                            Kỳ hạn nhận lãi tiền gửi của bạn
                        </p>
                    </div>
                    <div>
                        <select name="giatri" className="form-control-select2" value={formData.giatri}
                            onChange={handleChange}>
                            <option>--Chọn--</option>
                            <option value="thang">Hàng tháng</option>
                            <option value="nam">Hàng năm</option>
                            <option value="ngay">Hàng ngày</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='calculation-button'>
                <button type='submit'>
                    Tính Lãi
                </button>
            </div>
        </form>
    )
}

