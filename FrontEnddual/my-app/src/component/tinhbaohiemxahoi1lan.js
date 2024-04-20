import React, { useState } from 'react'
import '../styles/baohiem.scss'
import '../utils/baohiemxuly.js'
export default function Tinhbaohiemxahoi1lan() {
    const [formData, setFormData] = useState({
        Wage: '',
        giatri: ''
    });
    // const [total, setTotal] = useState(0);
    // const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
    // const formattedAmount = formatter.format(total);
    // console.log(formattedAmount);
    // const [total, setTotal] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    const [selectedCategory, setSelectedCategory] = useState('1');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    const getFormData = (event) => {
        event.preventDefault();
        console.log(formData)
    }
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('focus', function () {
            buttons.forEach(btn => btn.classList.remove('focused'));
            this.classList.add('focused');
        });
    });

    function tinhSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc) {
        var ketQua = [];

        while (namBatDau < namKetThuc || (namBatDau === namKetThuc && thangBatDau <= thangKetThuc)) {
            var thang = thangBatDau;
            var nam = namBatDau;

            var thangKetThucCuaNamHienTai = (nam === namKetThuc) ? thangKetThuc : 12;

            if (thangBatDau === 0) {
                thang = 1;
            }

            if (namBatDau === namKetThuc && thangKetThucCuaNamHienTai === thang) {
                ketQua.push({ thangBatDau: thang, namBatDau: nam, thangKetThuc: thangKetThuc, namKetThuc: namKetThuc });
                break;
            }

            ketQua.push({ thangBatDau: thang, namBatDau: nam, thangKetThuc: thangKetThucCuaNamHienTai, namKetThuc: nam });

            thangBatDau = 1;
            namBatDau++;
        }

        return ketQua;
    }
    // Sử dụng hàm
    let tong = 0;
    let tongthang = 0;
    function xuLySuKienClick() {
        var thangBatDau = parseInt(document.getElementById("thangBatDau").value);
        var namBatDau = parseInt(document.getElementById("namBatDau").value);
        var thangKetThuc = parseInt(document.getElementById("thangKetThuc").value);
        var namKetThuc = parseInt(document.getElementById("namKetThuc").value);
        var ketQua = tinhSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc);

        ketQua.forEach(function (item) {
            let thang = (item.thangKetThuc - item.thangBatDau) + 1;
            tongthang += thang;
            if (item.namKetThuc === 1994) {
                tong += formData.Wage * thang * 5.43;
            } else if (item.namKetThuc === 1995) {
                tong += formData.Wage * thang * 4.61;
            } else if (item.namKetThuc === 1996) {
                tong += formData.Wage * thang * 4.36;
            } else if (item.namKetThuc === 1997) {
                tong += formData.Wage * thang * 4.22;
            } else if (item.namKetThuc === 1998) {
                tong += formData.Wage * thang * 3.92;
            } else if (item.namKetThuc === 1999) {
                tong += formData.Wage * thang * 3.75;
            } else if (item.namKetThuc === 2000) {
                tong += formData.Wage * thang * 3.82;
            } else if (item.namKetThuc === 2001) {
                tong += formData.Wage * thang * 3.83;
            } else if (item.namKetThuc === 2002) {
                tong += formData.Wage * thang * 3.68;
            } else if (item.namKetThuc === 2003) {
                tong += formData.Wage * thang * 3.57;
            } else if (item.namKetThuc === 2004) {
                tong += formData.Wage * thang * 3.31;
            } else if (item.namKetThuc === 2005) {
                tong += formData.Wage * thang * 3.06;
            } else if (item.namKetThuc === 2006) {
                tong += formData.Wage * thang * 2.85;
            } else if (item.namKetThuc === 2007) {
                tong += formData.Wage * thang * 2.63;
            } else if (item.namKetThuc === 2008) {
                tong += formData.Wage * thang * 2.14;
            } else if (item.namKetThuc === 2009) {
                tong += formData.Wage * thang * 2;
            } else if (item.namKetThuc === 2010) {
                tong += formData.Wage * thang * 1.83;
            } else if (item.namKetThuc === 2011) {
                tong += formData.Wage * thang * 1.54;
            } else if (item.namKetThuc === 2012) {
                tong += formData.Wage * thang * 1.41;
            } else if (item.namKetThuc === 2013) {
                tong += formData.Wage * thang * 1.33;
            } else if (item.namKetThuc === 2014) {
                tong += formData.Wage * thang * 1.27;
            } else if (item.namKetThuc === 2015) {
                tong += formData.Wage * thang * 1.27;
            } else if (item.namKetThuc === 2016) {
                tong += formData.Wage * thang * 1.23;
            } else if (item.namKetThuc === 2017) {
                tong += formData.Wage * thang * 1.19;
            } else if (item.namKetThuc === 2018) {
                tong += formData.Wage * thang * 1.15;
            } else if (item.namKetThuc === 2019) {
                tong += formData.Wage * thang * 1.12;
            } else if (item.namKetThuc === 2020) {
                tong += formData.Wage * thang * 1.08;
            } else if (item.namKetThuc === 2021) {
                tong += formData.Wage * thang * 1.07;
            } else if (item.namKetThuc === 2022) {
                tong += formData.Wage * thang * 1.03;
            } else if (item.namKetThuc === 2023) {
                tong += formData.Wage * thang * 1;
            } else if (item.namKetThuc === 2024) {
                tong += formData.Wage * thang * 1;
            }
        });
        let TBBHXH = tong / tongthang
        console.log(TBBHXH.toFixed(0));
        console.log(ketQua);
    }
    // Hàm xử lý sự kiện thay đổi trên các select


    // Sử dụng hàm

    // Lắng nghe sự kiện thay đổi trên các select



    return (
        <>
            <form id='paragraph' onSubmit={getFormData}>
                <div className='title'>
                    <h2>
                        Công cụ tính bảo hiểm xã hội một lần
                    </h2>
                </div>
                <div className='navbar'>
                    <div>
                        <button className='button' name='obligatory' value="1" checked={selectedCategory === '1'}
                            onClick={() => handleCategoryClick('1')} >BHXH bắt buộc</button>
                    </div>
                    <div>
                        <button className='button' name='Voluntary' value="2" checked={selectedCategory === '2'} onClick={() => handleCategoryClick('2')} >BHXH tự nguyện</button>
                    </div>
                </div>

                {selectedCategory === '1' && (

                    <div>
                        <div className='navbar-title'>
                            <div >
                                <p>Giai đoạn nộp BHXH</p>
                            </div>
                            <div className='title-second' >
                                <p>Mức lương đóng BHXH</p>
                            </div>
                        </div>
                        <div className='table'>
                            <div>
                                <select name="giatri" id="thangBatDau" className="form-control-select2" onChange={handleChange} value={formData.giatri}>
                                    <option>--Chọn--</option>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                    <option value="6" >6</option>
                                    <option value="7" >7</option>
                                    <option value="8" >8</option>
                                    <option value="9" >9</option>
                                    <option value="10" >10</option>
                                    <option value="11" >11</option>
                                    <option value="12" >12</option>
                                </select>
                            </div>
                            <div>
                                <select name="giatri1" id="namBatDau" className="form-control-select2" onChange={handleChange} >
                                    <option>--Chọn--</option>
                                    <option value="2024" >2024</option>
                                    <option value="2023" >2023</option>
                                    <option value="2022" >2022</option>
                                    <option value="2021" >2021</option>
                                    <option value="2020" >2020</option>
                                    <option value="2019" >2019</option>
                                    <option value="2018" >2018</option>
                                    <option value="2017" >2017</option>
                                    <option value="2016" >2016</option>
                                    <option value="2015" >2015</option>
                                    <option value="2014" >2014</option>
                                    <option value="2013" >2013</option>
                                    <option value="2012" >2012</option>
                                    <option value="2011" >2011</option>
                                    <option value="2010" >2010</option>
                                    <option value="2009" >2009</option>
                                    <option value="2008" >2008</option>
                                    <option value="2007" >2007</option>
                                    <option value="2006" >2006</option>
                                    <option value="2005" >2005</option>
                                    <option value="2004" >2004</option>
                                    <option value="2003" >2003</option>
                                    <option value="2002" >2002</option>
                                    <option value="2001" >2001</option>
                                    <option value="2000" >2000</option>
                                    <option value="1999" >1999</option>
                                    <option value="1998" >1998</option>
                                    <option value="1997" >1997</option>
                                    <option value="1996" >1996</option>
                                    <option value="1995" >1995</option>
                                    <option value="1994" >1994</option>
                                </select>
                            </div>
                            <div>
                                <p>Đến</p>
                            </div>
                            <div>
                                <select name="giatri0" id="thangKetThuc" className="form-control-select2" onChange={handleChange} >
                                    <option>--Chọn--</option>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                    <option value="6" >6</option>
                                    <option value="7" >7</option>
                                    <option value="8" >8</option>
                                    <option value="9" >9</option>
                                    <option value="10" >10</option>
                                    <option value="11" >11</option>
                                    <option value="12" >12</option>
                                </select>
                            </div>
                            <div>
                                <select name="giatri2" id="namKetThuc" className="form-control-select2" onChange={handleChange} >
                                    <option>--Chọn--</option>
                                    <option value="2024" >2024</option>
                                    <option value="2023" >2023</option>
                                    <option value="2022" >2022</option>
                                    <option value="2021" >2021</option>
                                    <option value="2020" >2020</option>
                                    <option value="2019" >2019</option>
                                    <option value="2018" >2018</option>
                                    <option value="2017" >2017</option>
                                    <option value="2016" >2016</option>
                                    <option value="2015" >2015</option>
                                    <option value="2014" >2014</option>
                                    <option value="2013" >2013</option>
                                    <option value="2012" >2012</option>
                                    <option value="2011" >2011</option>
                                    <option value="2010" >2010</option>
                                    <option value="2009" >2009</option>
                                    <option value="2008" >2008</option>
                                    <option value="2007" >2007</option>
                                    <option value="2006" >2006</option>
                                    <option value="2005" >2005</option>
                                    <option value="2004" >2004</option>
                                    <option value="2003" >2003</option>
                                    <option value="2002" >2002</option>
                                    <option value="2001" >2001</option>
                                    <option value="2000" >2000</option>
                                    <option value="1999" >1999</option>
                                    <option value="1998" >1998</option>
                                    <option value="1997" >1997</option>
                                    <option value="1996" >1996</option>
                                    <option value="1995" >1995</option>
                                    <option value="1994" >1994</option>
                                </select>

                            </div>
                            <div className='element-table'>
                                <div className='element-table-right'>
                                    <label>
                                        <input value={formData.Wage} onChange={handleChange} placeholder="VD : 10,000,000" name="Wage" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {selectedCategory === '2' && (
                    <div>

                        <div className='navbar-title'>
                            <div className='title-first'>
                                <p>Giai đoạn nộp BHXH</p>
                            </div>
                            <div className='title-second' >
                                <p>Mức lương đóng BHXH</p>
                            </div>
                            <div className='title-thirt' >
                                <p>Đối tượng tham gia</p>
                            </div>
                        </div>
                        <div className='table'>
                            <div>
                                <select name="giatri" id="thangBatDau" className="form-control-select2" onChange={handleChange} value={formData.giatri}>
                                    <option>--Chọn--</option>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                    <option value="6" >6</option>
                                    <option value="7" >7</option>
                                    <option value="8" >8</option>
                                    <option value="9" >9</option>
                                    <option value="10" >10</option>
                                    <option value="11" >11</option>
                                    <option value="12" >12</option>
                                </select>
                            </div>
                            <div>
                                <select name="giatri1" id="namBatDau" className="form-control-select2" onChange={handleChange} >
                                    <option>--Chọn--</option>
                                    <option value="2024" >2024</option>
                                    <option value="2023" >2023</option>
                                    <option value="2022" >2022</option>
                                    <option value="2021" >2021</option>
                                    <option value="2020" >2020</option>
                                    <option value="2019" >2019</option>
                                    <option value="2018" >2018</option>
                                    <option value="2017" >2017</option>
                                    <option value="2016" >2016</option>
                                    <option value="2015" >2015</option>
                                    <option value="2014" >2014</option>
                                    <option value="2013" >2013</option>
                                    <option value="2012" >2012</option>
                                    <option value="2011" >2011</option>
                                    <option value="2010" >2010</option>
                                    <option value="2009" >2009</option>
                                    <option value="2008" >2008</option>
                                    <option value="2007" >2007</option>
                                    <option value="2006" >2006</option>
                                    <option value="2005" >2005</option>
                                    <option value="2004" >2004</option>
                                    <option value="2003" >2003</option>
                                    <option value="2002" >2002</option>
                                    <option value="2001" >2001</option>
                                    <option value="2000" >2000</option>
                                    <option value="1999" >1999</option>
                                    <option value="1998" >1998</option>
                                    <option value="1997" >1997</option>
                                    <option value="1996" >1996</option>
                                    <option value="1995" >1995</option>
                                    <option value="1994" >1994</option>
                                </select>
                            </div>
                            <div>
                                <p>Đến</p>
                            </div>
                            <div>
                                <select name="giatri0" id="thangKetThuc" className="form-control-select2" onChange={handleChange} >
                                    <option>--Chọn--</option>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                    <option value="6" >6</option>
                                    <option value="7" >7</option>
                                    <option value="8" >8</option>
                                    <option value="9" >9</option>
                                    <option value="10" >10</option>
                                    <option value="11" >11</option>
                                    <option value="12" >12</option>
                                </select>
                            </div>
                            <div>
                                <select name="giatri2" id="namKetThuc" className="form-control-select2" onChange={handleChange} >
                                    <option>--Chọn--</option>
                                    <option value="2024" >2024</option>
                                    <option value="2023" >2023</option>
                                    <option value="2022" >2022</option>
                                    <option value="2021" >2021</option>
                                    <option value="2020" >2020</option>
                                    <option value="2019" >2019</option>
                                    <option value="2018" >2018</option>
                                    <option value="2017" >2017</option>
                                    <option value="2016" >2016</option>
                                    <option value="2015" >2015</option>
                                    <option value="2014" >2014</option>
                                    <option value="2013" >2013</option>
                                    <option value="2012" >2012</option>
                                    <option value="2011" >2011</option>
                                    <option value="2010" >2010</option>
                                    <option value="2009" >2009</option>
                                    <option value="2008" >2008</option>
                                    <option value="2007" >2007</option>
                                    <option value="2006" >2006</option>
                                    <option value="2005" >2005</option>
                                    <option value="2004" >2004</option>
                                    <option value="2003" >2003</option>
                                    <option value="2002" >2002</option>
                                    <option value="2001" >2001</option>
                                    <option value="2000" >2000</option>
                                    <option value="1999" >1999</option>
                                    <option value="1998" >1998</option>
                                    <option value="1997" >1997</option>
                                    <option value="1996" >1996</option>
                                    <option value="1995" >1995</option>
                                    <option value="1994" >1994</option>
                                </select>

                            </div>
                            <div className='element-table'>
                                <div className='element-table-right'>
                                    <label>
                                        <input value={formData.Wage} onChange={handleChange} placeholder="VD : 10,000,000" name="Wage" />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <select className="form-control-select2" onChange={handleChange} >
                                    <option>--Chọn--</option>
                                    <option value="hongheo" >Hộ Nghèo</option>
                                    <option value="hocanngheo" >Hộ Cận Nghèo</option>
                                    <option value="doituongkhac">Đối Tượng Khác</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}
                <div className='calculation-button'>
                    <button type='submit' id="tinhButton"
                        onClick={(event) => {
                            xuLySuKienClick(event);
                        }}
                    >
                        Tính bảo hiểm xã hội
                    </button>
                </div>
                <div id="ketQua"></div>
                <p></p>
                {/* <div className='Giatrihienthi'>
                    <p>Kết quả trong <span id="year-result" class="highlight">{formData.n}  </span>  năm bạn sẽ có <span id="money-result" class="highlight">{formattedAmount}</span> (VNĐ)</p>
                </div> */}
            </form >

        </>
    )
}
