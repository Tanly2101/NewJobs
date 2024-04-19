import React, { useState } from 'react'

export default function Home() {
    const [formData, setFormData] = useState({
        p: '',
        month: '',
        n: '',
        i: '',
        giatri: ''
    });
    const [total, setTotal] = useState(0);
    const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
    const formattedAmount = formatter.format(total);
    console.log(formattedAmount);
    /**
     * Fn là giá trị của khoản đầu tư trong khoảng thời gian n năm mà bạn nhận được.
    P là giá trị khoản đầu tư hiện tại của bạn.
    i là lãi suất hàng năm của khoản đầu tư đó. Ví dụ lãi suất 10%/năm, thì i được hiểu là 0,1.
    n là số năm bạn dự tính đầu tư.
    m là số lần ghép lãi trong 1 năm, nếu lãi nhận hàng năm thì m là 1.
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
        console.log(formData)

        if (formData.giatri === 'nam') {
            let totalAmountyear = calculateTotalAmountyear(formData.p, formData.month, formData.n, formData.i, formData.giatri);
            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyear)
            setTotal(totalAmountyear)
        } else if (formData.giatri === 'thang') {
            let totalAmount = calculateTotalAmount(formData.p, formData.month, formData.n, formData.i, formData.giatri);
            console.log("Tổng số tiền sau kỳ hạn tháng là:", totalAmount)
            setTotal(totalAmount)
        } else if (formData.giatri === 'ngay') {
            let totalAmountdate = calculateTotalAmountdate(formData.p, formData.month, formData.n, formData.i, formData.giatri);
            console.log("Tổng số tiền sau kỳ hạn ngày là:", totalAmountdate)
            setTotal(totalAmountdate)
        }
    }
    // trường hợp đúng công thức 
    function calculateTotalAmount(principal, monthlyContribution, years, interestRate) {
        // Chuyển đổi lãi suất thành dạng thập phân
        let monthlyInterestRate = interestRate / 100 / 12;

        // // Số lần lãi được tính trong khoảng thời gian gửi
        let numberOfPayments = years * 12;
        // Tính tổng số tiền tích luỹ
        let totalAmount = principal * Math.pow(1 + monthlyInterestRate, numberOfPayments) +
            monthlyContribution * ((Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1) / monthlyInterestRate);

        return totalAmount.toFixed(0); // Làm tròn đến hai chữ số thập phân
    }
    // trường hợp công thức
    function calculateTotalAmountyear(principal, dailyContribution, years, interestRate) {
        // Chuyển đổi lãi suất hàng năm thành lãi suất hàng năm
        let dailyInterestRate = interestRate / 100;

        // Số ngày gửi trong khoảng thời gian years
        let numberOfDays = years;

        // Tính tổng số tiền tích luỹ
        let totalAmountyear = principal * Math.pow(1 + dailyInterestRate, numberOfDays) +
            dailyContribution * ((Math.pow(1 + dailyInterestRate, numberOfDays) - 1) / dailyInterestRate);

        return totalAmountyear.toFixed(0); // Làm tròn đến hai chữ số thập phân
    }
    // trường hợp công thức
    function calculateTotalAmountdate(principal, dailyContribution, years, interestRate) {
        //  đổi lãi suất hàng năm thành lãi suất hàng ngày
        let dailyInterestRate = interestRate / 100 / 365;

        // Số ngày gửi trong khoảng thời gian years
        let numberOfDays = years * 365;

        // Tính tổng số tiền tích luỹ
        let totalAmountdate = principal * Math.pow(1 + dailyInterestRate, numberOfDays) +
            dailyContribution * ((Math.pow(1 + dailyInterestRate, numberOfDays) - 1) / dailyInterestRate);

        return totalAmountdate.toFixed(0); // Làm tròn đến hai chữ số thập phân
    }


    return (
        <>
            <form id='paragraph' onSubmit={getFormData}>
                <div className='title'>
                    <h2>
                        Công cụ tính Lãi Kép
                    </h2>
                </div>
                <div>
                    <h3>
                        Bước 1 : Đầu Tư Ban Đầu
                    </h3>
                    <div className='principal'>
                        <div className='principal-left' >
                            <p className='title-max'>
                                Số tiền gốc ban đầu
                            </p>
                            <p className='title-min'>
                                Số tiền bạn có sẵn để đầu tư ban đầu
                            </p>
                        </div>
                        <div className='principal-right'>
                            <label>
                                <input value={formData.p} onChange={handleChange} placeholder="VD : 10,000,000" name="p" />
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>
                        Bước 2 : Khoản đóng góp
                    </h3>
                    <div className='deposits-month'>
                        <div>
                            <p className='title-max'>
                                Số tiền gửi mỗi tháng (VNĐ)
                            </p>
                            <p className='title-min'>
                                Số tiền bạn định thêm vào tiền gốc hàng tháng.
                            </p>
                        </div>
                        <div>
                            <label className='principal-right'>
                                <input value={formData.month} placeholder="VD : 10,000,000" onChange={handleChange} name="month" />
                            </label>
                        </div>
                    </div>
                    <div className='sending-time'>
                        <div>
                            <p className='title-max'>
                                Thời gian gửi (Năm)
                            </p>
                            <p className='title-min'>
                                Khoảng thời gian, tính bằng năm, mà bạn dự định tiết kiệm
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
                        Bước 3 : Lãi suất
                    </h3>
                    <div className='interest'>
                        <div>
                            <p className='title-max'>
                                Lãi suất (%)
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
                <div >
                    <h3>
                        Bước 4 : Kỳ Hạn
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
                            <select name="giatri" className="form-control-select2" value={formData.giatri} onChange={handleChange}>
                                <option>--Chọn--</option>
                                <option value="thang" >Hàng tháng</option>
                                <option value="nam" >Hàng năm</option>
                                <option value="ngay" >Hàng ngày</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='calculation-button'>
                    <button type='submit'>
                        Tính Lãi
                    </button>
                </div>
                <p></p>
                <div className='Giatrihienthi'>
                    <p>Kết quả trong <span id="year-result" class="highlight">{formData.n}  </span>  năm bạn sẽ có <span id="money-result" class="highlight">{formattedAmount}</span> (VNĐ)</p>
                </div>
            </form >

        </>
    )
}
