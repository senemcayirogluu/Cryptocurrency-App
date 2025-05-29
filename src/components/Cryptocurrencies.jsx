import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Card, Col, Input, Row } from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = cryptosList?.data?.bestCoins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  console.log(cryptos);

  if(isFetching) return <Loader />;

  return (
    <>
    {!simplified && (
    <div className='search-crypto'>
      <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
    </div>
    )}
      <Row gutter={[36, 36]} className='crypto-card-container'>
        {cryptos?.map((currency) => (
          <Col key={currency.uuid} xs={24} sm={12} lg={6} className='crypto-card'>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card title={currency.name} extra={<img className='crypto-image' src={currency.iconUrl} />} hoverable>

                <p>Symbol: {currency.symbol}</p>
                <span onClick={() => window.open(currency.coinrankingUrl, '_blank')} style={{ cursor: 'pointer', color: 'blue' }} >Ranking Link</span>

              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies