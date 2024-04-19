import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <header >
                <div id="tabs">
                    <ul>
                        <li>
                            <Link to='/'>
                                <span>
                                    Tính lãi xuất kép
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/tietkiem'>
                                <span>
                                    Lập kế hoạch tiết kiệm
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/that-nghiep'>
                                <span>
                                    Tính bảo hiểm thất nghiệp
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/bao-hiem'>
                                <span>
                                    Tính bảo hiểm xã hội một lần
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
