import React from 'react'
import { Avatar, Button, Menu, Typography } from 'antd'
import { Link } from 'react-router-dom'
import icon from '../images/cryptocurrency.png'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className='logo'>
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
            </div>
            <Menu theme='dark'
                items={[
                    { icon: <HomeOutlined />, label: <Link to="/">Home</Link>, key: 'Home' },
                    { icon: <FundOutlined />, label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>, key: 'Cryptocurrencies', link: '/cryptocurrencies' },
                    { icon: <MoneyCollectOutlined />, label: <Link to="/exchanges">Exchanges</Link>, key: 'Exchanges', link: '/exchanges' },
                    { icon: <BulbOutlined />, label: <Link to="/news">News</Link>, key: 'News', link: '/news' }
                ]}
            />
        </div>
    )
}

export default Navbar