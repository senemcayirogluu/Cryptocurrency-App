import React from 'react'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import millify from 'millify'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data;

  console.log(data);
  
  if(isFetching) return 'Loading...';

  
  return (
   <>
   <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
   <Row>
     <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.totalCoins} /></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={globalStats.totalExchanges} /></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
      <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
      <Col span={12}><Statistic title="Total Markets" value={globalStats.totalMarkets} /></Col>
   </Row>
   </>
  )
}

export default Homepage