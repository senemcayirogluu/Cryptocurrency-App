import React, { useState } from 'react'
import { Col, Row, Select, Typography, Card, Avatar } from 'antd'
import moment from 'moment';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const { Title, Text } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [cryptoDaily, setCryptoDaily] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ cryptoDaily, count: simplified ? 6 : 12 });

  if (!cryptoNews?.data) return <Loader />;

  console.log("cryptoNews", cryptoNews)

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setCryptoDaily(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.bestCoins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.data.slice(0, simplified ? 6 : 20).map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.title}</Title>
                <img src={news?.thumbnail} alt="" style={{ width: '100%', height: '200px', objectFit: 'contain'}}/>
              </div>
              <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
              <div className="provider-container">
                <Text>{moment(news.createdAt).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News
