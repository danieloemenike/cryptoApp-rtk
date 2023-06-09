import { Col, Row, Statistic, Typography } from 'antd';
import millify from 'millify';
import React from 'react'
import { Link } from 'react-router-dom';
import {useGetCryptosQuery } from "../services/cryptoApi.jsx"
import Cryptocurrencies from './Cryptocurrencies.jsx';
import News from './News.jsx';
const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
 
  
  const globalStats = data?.data?.stats
  if(isFetching) return "Loading.."
  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto
      </Title>
      <Row>
       
        <Col span={12}> <Statistic title="Total Cryptocurrencies" value={globalStats.total} /> </Col>
        <Col span={12}> <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/> </Col>
        <Col span={12}> <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap
)} /> </Col>
        <Col span={12}> <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}  /> </Col>
        <Col span={12}> <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}  /> </Col>

      
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title"> Top 10 CryptoCurrencies in the world</Title>
        <Title level={4} className="show-more"> <Link to ="/cryptocurrencies"> Show more</Link>  </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title"> Latest CryptoNews </Title>
        <Title level={4} className="show-more"> <Link to ="/news"> Show more</Link>  </Title>
      </div>
      <News simplified/>
    </>
  )
}

export default Homepage