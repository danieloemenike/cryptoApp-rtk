import { Card, Row, Col, Input } from 'antd';
import millify from 'millify';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';


const Cryptocurrencies = ({ simplified }) => {
  const [searchTerm, setSearchTerm]  = useState('')
  const count = simplified ? 10 : 50

  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [ cryptos, setCryptos ] = useState([])

  if (isFetching) return 'Loading..'

  useEffect(() => {
    setCryptos(cryptoList?.data?.coins)
    const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(filteredData)
    },[cryptoList, searchTerm])

  return (
    <>
      { !simplified && (
         <div className="search-crypto">
         <Input placeholder = "Search Cryptocurrency" onChange={(e)=> setSearchTerm(e.target.value)}/>
       </div>
      )}
     

      <Row gutter={ [ 32, 32 ] } className='crypto-card-container'>
        { cryptos?.map((currency) => (
          <Col xs={ 24 } sm={ 12 } lg={ 6 } className='crypto-card' key={ currency?.uuid }>
            <Link to={`/crypto/${currency?.uuid}`}>
              <Card title={ `${currency?.rank}.${currency?.name}` } extra={ <img className='crypto-image' src={ currency?.iconUrl } />} hoverable>
                <p> Price: { millify(currency?.price) }</p>
                <p> Price: { millify(currency?.marketCap) }</p>
                <p> Price: { millify(currency?.change) }</p>
            </Card>
            </Link>
          </Col>
        ))}

      </Row>
    </>
  )
}

export default Cryptocurrencies