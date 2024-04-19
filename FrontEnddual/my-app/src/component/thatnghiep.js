import React, { useEffect, useState } from 'react'
import '../styles/thatnghiep.scss'
export default function Thatnghiep() {
    const [formData, setFormData] = useState({
        p: '',
        n: '',
        p1: '',
        p2: '',
        p3: '',
        p4: '',
        p5: '',
        p6: '',
        giatri: ''


    });
    const [total, setTotal] = useState(0);

    const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
    const formattedAmount = formatter.format(total);
    console.log(formattedAmount);

    const [inherit, setInherit] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    const handleChange2 = (event) => {
        formData.giatri = event.target.value
    }
    const getFormData = (event) => {
        event.preventDefault();
        console.log(formData)
    }
    const [selectedCategory, setSelectedCategory] = useState('1');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    ///lương đóng bảo hiểm không thay đổi trong 6 tháng



    useEffect(() => {
        let callradio2 = document.querySelector(".chedo")
        let callradio3 = document.querySelector(".chedothay")
        if (callradio2.checked) {
            let totalAmountyear = calculateTotalAmount(formData.p);
            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyear)
        } else if (callradio3.checked) {
            let totalAmountyeararea5 = calculateTotalAmountArea5(formData.p1, formData.p2, formData.p3, formData.p4, formData.p5, formData.p6);
            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea5)
        }
    },)
    useEffect(() => {
        let callradio = document.querySelector(".chedo")
        let callradiosalary1 = document.querySelector(".private")
        if (callradio.checked && callradiosalary1.checked && formData.giatri === "vung1") {
            let totalAmountyeararea1 = calculateTotalAmountArea1(formData.p);
            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea1)
        } else if (callradio.checked && callradiosalary1.checked && formData.giatri === "vung2") {
            let totalAmountyeararea2 = calculateTotalAmountArea2(formData.p);
            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea2)
        } else if (callradio.checked && callradiosalary1.checked && formData.giatri === "vung3") {
            let totalAmountyeararea3 = calculateTotalAmountArea3(formData.p);
            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea3)
        } else if (callradio.checked && callradiosalary1.checked && formData.giatri === "vung4") {
            let totalAmountyeararea4 = calculateTotalAmountArea4(formData.p);
            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea4)
        }
    },)

    function calculateTotalAmount(principal) {
        let BaseSalary = 1800000; //02
        let MonthlySalary = 20 * BaseSalary; //03
        let apply = MonthlySalary;
        let monthlyUnemployment = 5 * BaseSalary; //05
        let MonthlyAllowance = 0.6 * principal; // 08

        if (apply > MonthlySalary) {
            return MonthlySalary;
        } else if (MonthlyAllowance > monthlyUnemployment) {
            return monthlyUnemployment;
        } else {
            return MonthlyAllowance;
        }
    }
    function calculateTotalAmountArea1(principal) {
        let BaseSalary = 4680000; //02
        let MonthlySalary = 20 * BaseSalary; //03
        let apply = MonthlySalary;
        let monthlyUnemployment = 5 * BaseSalary; //05
        let MonthlyAllowance = 0.6 * principal; // 08

        if (apply > MonthlySalary) {
            return MonthlySalary;
        } else if (MonthlyAllowance > monthlyUnemployment) {
            return monthlyUnemployment;
        } else {
            return MonthlyAllowance;
        }
    }
    function calculateTotalAmountArea2(principal) {
        let BaseSalary = 4160000; //02
        let MonthlySalary = 20 * BaseSalary; //03
        let apply = MonthlySalary;
        let monthlyUnemployment = 5 * BaseSalary; //05
        let MonthlyAllowance = 0.6 * principal; // 08

        if (apply > MonthlySalary) {
            return MonthlySalary;
        } else if (MonthlyAllowance > monthlyUnemployment) {
            return monthlyUnemployment;
        } else {
            return MonthlyAllowance;
        }
    }
    function calculateTotalAmountArea3(principal) {
        let BaseSalary = 3640000; //02
        let MonthlySalary = 20 * BaseSalary; //03
        let apply = MonthlySalary;
        let monthlyUnemployment = 5 * BaseSalary; //05
        let MonthlyAllowance = 0.6 * principal; // 08

        if (apply > MonthlySalary) {
            return MonthlySalary;
        } else if (MonthlyAllowance > monthlyUnemployment) {
            return monthlyUnemployment;
        } else {
            return MonthlyAllowance;
        }
    }
    function calculateTotalAmountArea4(principal) {
        let BaseSalary = 3250000; //02
        let MonthlySalary = 20 * BaseSalary; //03
        let apply = MonthlySalary;
        let monthlyUnemployment = 5 * BaseSalary; //05
        let MonthlyAllowance = 0.6 * principal; // 08

        if (apply > MonthlySalary) {
            return MonthlySalary;
        } else if (MonthlyAllowance > monthlyUnemployment) {
            return monthlyUnemployment;
        } else {
            return MonthlyAllowance;
        }
    }
    /// lương đóng bảo hiểm thay đổi trong 6 tháng
    useEffect(() => {
        let callradio = document.querySelector(".chedothay")
        let callradiosalary1 = document.querySelector(".private")
        if (callradio.checked && callradiosalary1.checked && formData.giatri === "vung1") {
            let totalAmountyeararea6 = calculateTotalAmountArea6(formData.p1, formData.p2, formData.p3, formData.p4, formData.p5, formData.p6);
            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea6)
        } else if (callradio.checked && callradiosalary1.checked && formData.giatri === "vung2") {
            let totalAmountyeararea7 = calculateTotalAmountArea7(formData.p1, formData.p2, formData.p3, formData.p4, formData.p5, formData.p6);
            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea7)
        } else if (callradio.checked && callradiosalary1.checked && formData.giatri === "vung3") {
            let totalAmountyeararea8 = calculateTotalAmountArea8(formData.p1, formData.p2, formData.p3, formData.p4, formData.p5, formData.p6);
            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea8)
        } else if (callradio.checked && callradiosalary1.checked && formData.giatri === "vung4") {
            let totalAmountyeararea9 = calculateTotalAmountArea9(formData.p1, formData.p2, formData.p3, formData.p4, formData.p5, formData.p6);
            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea9)
        }
    },)
    //





    function calculateTotalAmountArea5(principal1, principal2, principal3, principal4, principal5, principal6) {
        let medium = (Number(principal1) + Number(principal2) + Number(principal3) + Number(principal4) + Number(principal5) + Number(principal6)) / 6
        let BaseSalary = 1800000; //02
        let MonthlySalary = 20 * BaseSalary; //03
        let apply = MonthlySalary;//04
        let monthlyUnemployment = 5 * BaseSalary; //05
        let MonthlyAllowance = 0.6 * Number(medium); // 08

        if (apply > MonthlySalary) {
            return MonthlySalary;
        } else if (MonthlyAllowance > monthlyUnemployment) {
            return monthlyUnemployment;
        } else {
            return MonthlyAllowance;
        }
    }
    function calculateTotalAmountArea6(principal1, principal2, principal3, principal4, principal5, principal6) {
        let medium = (Number(principal1) + Number(principal2) + Number(principal3) + Number(principal4) + Number(principal5) + Number(principal6)) / 6;
        console.log(medium)

        let BaseSalary = 4680000; //02
        let MonthlySalary = 20 * BaseSalary; //03
        let apply = MonthlySalary;//04
        let monthlyUnemployment = 5 * BaseSalary; //05
        let MonthlyAllowance = 0.6 * Number(medium); // 08

        if (apply > MonthlySalary) {
            return MonthlySalary;
        } else if (MonthlyAllowance > monthlyUnemployment) {
            return monthlyUnemployment;
        } else {
            return MonthlyAllowance;
        }
    }
    function calculateTotalAmountArea7(principal1, principal2, principal3, principal4, principal5, principal6) {
        let medium = (Number(principal1) + Number(principal2) + Number(principal3) + Number(principal4) + Number(principal5) + Number(principal6)) / 6;
        console.log(medium)

        let BaseSalary = 4160000; //02
        let MonthlySalary = 20 * BaseSalary; //03
        let apply = MonthlySalary;//04
        let monthlyUnemployment = 5 * BaseSalary; //05
        let MonthlyAllowance = 0.6 * Number(medium); // 08

        if (apply > MonthlySalary) {
            return MonthlySalary;
        } else if (MonthlyAllowance > monthlyUnemployment) {
            return monthlyUnemployment;
        } else {
            return MonthlyAllowance;
        }
    }
    function calculateTotalAmountArea8(principal1, principal2, principal3, principal4, principal5, principal6) {
        let medium = (Number(principal1) + Number(principal2) + Number(principal3) + Number(principal4) + Number(principal5) + Number(principal6)) / 6;
        console.log(medium)

        let BaseSalary = 3640000; //02
        let MonthlySalary = 20 * BaseSalary; //03
        let apply = MonthlySalary;//04
        let monthlyUnemployment = 5 * BaseSalary; //05
        let MonthlyAllowance = 0.6 * Number(medium); // 08

        if (apply > MonthlySalary) {
            return MonthlySalary;
        } else if (MonthlyAllowance > monthlyUnemployment) {
            return monthlyUnemployment;
        } else {
            return MonthlyAllowance;
        }
    }
    function calculateTotalAmountArea9(principal1, principal2, principal3, principal4, principal5, principal6) {
        let medium = (Number(principal1) + Number(principal2) + Number(principal3) + Number(principal4) + Number(principal5) + Number(principal6)) / 6;
        console.log(medium)
        let BaseSalary = 3250000; //02
        let MonthlySalary = 20 * BaseSalary; //03
        let apply = MonthlySalary;//04
        let monthlyUnemployment = 5 * BaseSalary; //05
        let MonthlyAllowance = 0.6 * Number(medium); // 08

        if (apply > MonthlySalary) {
            return MonthlySalary;
        } else if (MonthlyAllowance > monthlyUnemployment) {
            return monthlyUnemployment;
        } else {
            return MonthlyAllowance;
        }
    }

    ///thời gian được hưởng bảo hiểm thất nghiệp 
    // function inheritunemployment()


    return (
        <>
            <form id='paragraph' onSubmit={getFormData}>
                <div className='title'>
                    <h2>
                        Công cụ tính mức hưởng bảo hiểm thất nghiệp
                    </h2>
                </div>
                <div className='sixmonth'>
                    <div>
                        <label>
                            <input className='chedo' type="radio" name="che-do-tinh" value="1" checked={selectedCategory === '1'}
                                onChange={() => handleCategoryClick('1')} />
                            <label>Lương đóng BH không thay đổi trong 6 tháng</label>
                        </label>
                    </div>
                    <div>
                        <input className='chedothay' type="radio" name="che-do-tinh-thay-doi" value="2" checked={selectedCategory === '2'}
                            onChange={() => handleCategoryClick('2')} />
                        <label>Lương đóng BH thay đổi trong 6 tháng</label>
                    </div>
                </div>
                {selectedCategory === '2' && (
                    <div>
                        <div className='month-change-2'>
                            <div className="item-calculate" >
                                <label>
                                    <strong>
                                        BHTN tháng 1:
                                    </strong>
                                </label>
                                <div>
                                    <input value={formData.p1} onChange={handleChange} name="p1" placeholder="6,000,000" type="text" className="form-control ui-autocomplete-input currrency" />
                                </div>
                            </div>
                            <div className="item-calculate">
                                <label>
                                    <strong>
                                        BHTN tháng 2:
                                    </strong>
                                </label>
                                <div>
                                    <input value={formData.p2} onChange={handleChange} name="p2" placeholder="6,000,000" type="text" className="form-control ui-autocomplete-input currrency" />
                                </div>
                            </div>
                            <div className="item-calculate">
                                <label>
                                    <strong>
                                        BHTN tháng 3:
                                    </strong>
                                </label>
                                <div>
                                    <input value={formData.p3} onChange={handleChange} name="p3" placeholder="6,000,000" type="text" className="form-control ui-autocomplete-input currrency" />
                                </div>
                            </div>
                        </div>
                        <div className='month-change-2'>
                            <div className="item-calculate">
                                <label>
                                    <strong>
                                        BHTN tháng 4:
                                    </strong>
                                </label>
                                <div>
                                    <input value={formData.p4} onChange={handleChange} name="p4" placeholder="6,000,000" type="text" className="form-control ui-autocomplete-input currrency" />
                                </div>
                            </div>
                            <div className="item-calculate">
                                <label>
                                    <strong>
                                        BHTN tháng 5:
                                    </strong>
                                </label>
                                <div>
                                    <input value={formData.p5} onChange={handleChange} name="p5" placeholder="6,000,000" type="text" className="form-control ui-autocomplete-input currrency" />
                                </div>
                            </div>
                            <div className="item-calculate">
                                <label>
                                    <strong>
                                        BHTN tháng 6:
                                    </strong>
                                </label>
                                <div>
                                    <input value={formData.p6} onChange={handleChange} name="p6" placeholder="6,000,000" type="text" className="form-control ui-autocomplete-input currrency" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {selectedCategory === '1' && (
                    <div>
                        <div>
                            <h3 id='title-mini-1'>
                                Tiền lương đóng BHTN:
                            </h3>
                            <div className='principal-that'>
                                <div className='principal-right'>
                                    <label>
                                        <input value={formData.p} onChange={handleChange} placeholder="6,000,000" name="p" />
                                    </label>
                                    <p>
                                        (Bình quân tiền lương tháng đóng BHTN của 06 tháng liền kề trước khi thất nghiệp)
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                )}

                <div>
                    <h3 id='title-mini-1' >
                        Tổng thời gian đóng BHTN chưa hưởng:
                    </h3>
                    <div className='deposits-month-1'>
                        <div className='deposits-month-1'>
                            <label className='principal-right-2'>
                                <input value={formData.n} placeholder="12" onChange={handleChange} name="n" />
                            </label>
                            <p>(Thời gian đóng bảo hiểm thất nghiệp – Thời gian đã hưởng trợ cấp thất nghiệp)</p>
                        </div>

                    </div>

                </div>

                <div >

                    <div className='money-term-1'>
                        <div>
                            <div>
                                <p className='title-max'>
                                    Chế độ tiền lương
                                </p>
                            </div>
                            <div>
                                <div>
                                    <input className='government' type="radio" name="che-do-luong" id="doanh-nghiep-nha-nuoc" value="1" checked onChange={handleChange} />
                                    <label >Doanh nghiệp nhà nước</label>
                                </div>
                                <div>
                                    <input className='private' type="radio" name="che-do-luong" id="doanh-nghiep-tu-nhan" value="2" onChange={handleChange} />
                                    <label >Doanh nghiệp tư nhân</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>
                                    Vùng
                                </p>
                            </div>
                            <div>
                                <select name="giatri" className="form-control-select2" onChange={handleChange2} >
                                    <option>--Chọn--</option>
                                    <option value="vung1" >Vùng 1</option>
                                    <option value="vung2" >Vùng 2</option>
                                    <option value="vung3" >Vùng 3</option>
                                    <option value="vung4" >Vùng 4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='calculation-button'>
                    <button type='submit' onClick={() => {
                        let callradio = document.querySelector(".chedo")
                        let callradiosalary1 = document.querySelector(".private")
                        let callradio1 = document.querySelector(".chedothay")
                        let callradiosalary2 = document.querySelector(".private")
                        let callradio2 = document.querySelector(".chedo")
                        let callradio3 = document.querySelector(".chedothay")
                        if (callradio.checked && callradiosalary1.checked && formData.giatri === "vung1") {
                            let totalAmountyeararea1 = calculateTotalAmountArea1(formData.p);
                            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea1)
                            setTotal(totalAmountyeararea1);
                        } else if (callradio.checked && callradiosalary1.checked && formData.giatri === "vung2") {
                            let totalAmountyeararea2 = calculateTotalAmountArea2(formData.p);
                            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea2)
                            setTotal(totalAmountyeararea2);
                        } else if (callradio.checked && callradiosalary1.checked && formData.giatri === "vung3") {
                            let totalAmountyeararea3 = calculateTotalAmountArea3(formData.p);
                            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea3)
                            setTotal(totalAmountyeararea3);
                        } else if (callradio.checked && callradiosalary1.checked && formData.giatri === "vung4") {
                            let totalAmountyeararea4 = calculateTotalAmountArea4(formData.p);
                            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea4)
                            setTotal(totalAmountyeararea4);
                        }
                        if (callradio1.checked && callradiosalary2.checked && formData.giatri === "vung1") {
                            let totalAmountyeararea6 = calculateTotalAmountArea6(formData.p1, formData.p2, formData.p3, formData.p4, formData.p5, formData.p6);
                            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea6)
                            setTotal(totalAmountyeararea6);
                        } else if (callradio1.checked && callradiosalary2.checked && formData.giatri === "vung2") {
                            let totalAmountyeararea7 = calculateTotalAmountArea7(formData.p1, formData.p2, formData.p3, formData.p4, formData.p5, formData.p6);
                            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea7)
                            setTotal(totalAmountyeararea7);
                        } else if (callradio1.checked && callradiosalary2.checked && formData.giatri === "vung3") {
                            let totalAmountyeararea8 = calculateTotalAmountArea8(formData.p1, formData.p2, formData.p3, formData.p4, formData.p5, formData.p6);
                            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea8)
                            setTotal(totalAmountyeararea8);
                        } else if (callradio1.checked && callradiosalary2.checked && formData.giatri === "vung4") {
                            let totalAmountyeararea9 = calculateTotalAmountArea9(formData.p1, formData.p2, formData.p3, formData.p4, formData.p5, formData.p6);
                            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea9)
                            setTotal(totalAmountyeararea9);
                        }
                        if (callradio2.checked) {
                            let totalAmountyear = calculateTotalAmount(formData.p);
                            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyear)
                            setTotal(totalAmountyear);
                        } else if (callradio3.checked) {
                            let totalAmountyeararea5 = calculateTotalAmountArea5(formData.p1, formData.p2, formData.p3, formData.p4, formData.p5, formData.p6);
                            console.log("Tổng số tiền sau kỳ hạn năm là:", totalAmountyeararea5)
                            setTotal(totalAmountyeararea5)
                        }
                        if (formData.n < 12) {
                            setInherit("không đươc hưởng BHTN")
                        } else if (formData.n >= 12 && formData.n <= 36) {
                            setInherit("không đươc hưởng BHTN")
                        } else if (formData.n > 36) {
                            let ketqua = formData.n / 12;
                            let roundedNumber = Math.floor(ketqua);
                            setInherit(` được hưởng ${roundedNumber} tháng BHTN`)

                        }

                    }}>
                        Tính Bảo Hiểm
                    </button>
                </div>
                <p></p>
                {
                    <div className='Giatrihienthi'>
                        <p>Kết Quả</p>
                        <p>* Mức hưởng BHTN hàng tháng: {formattedAmount} (Tháng)</p>
                        <p> {inherit}  </p>
                    </div>}
            </form >

        </>
    )

}
