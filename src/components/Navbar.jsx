import React, { useEffect, useState } from 'react'
import { Avatar, Button, Menu, Typography } from 'antd'
import { Link } from 'react-router-dom'
import icon from '../images/cryptocurrency.png'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);

    useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);    
    }, [])

    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize])


    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className='logo'>
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
            <Menu theme='dark'
                items={[
                    { icon: <HomeOutlined />, label: <Link to="/">Home</Link>, key: 'Home' },
                    { icon: <FundOutlined />, label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>, key: 'Cryptocurrencies', link: '/cryptocurrencies' },
                    { icon: <MoneyCollectOutlined />, label: <Link to="/exchanges">Exchanges</Link>, key: 'Exchanges', link: '/exchanges' },
                    { icon: <BulbOutlined />, label: <Link to="/news">News</Link>, key: 'News', link: '/news' }
                ]}
            />
            )}
        </div>
    )
}

export default Navbar