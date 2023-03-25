import './App.css'
import {  Routes, Route, Link } from 'react-router-dom'
import NavBar  from './components/NavBar'
import { Layout, Space } from 'antd';
import Cryptocurrencies from "./components/Cryptocurrencies"
import Homepage from './components/Homepage';
import Exchanges from "./components/Exchanges"
import CryptoDetails from "./components/CryptoDetails"
import News from "./components/News"
import {Typography} from 'antd';
function App() {
  return (
    <div className="app">
      <div className="navbar">
      <NavBar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage/>} />
            

              <Route path="/exchanges" element={<Exchanges/>} />
            

              <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
            

              <Route path="/crypto/:coinId" element = {<CryptoDetails/>}/>
            

              <Route path="/news" element={ <News /> } />
             

            </Routes>
          </div>
      </Layout>

     

      <div className="footer" level={5}>
        <Typography.Title style={{color:'white', textAlign:'center'}}>
          CryptoVerse <br/> All Rights Reserved
        </Typography.Title>
        <Space>
          <Link to="/"> </Link>
          <Link to="/exchanges"> Exchanges</Link>
          <Link to="/news">  News </Link>
        </Space>
        </div>
      </div>
         </div>
  )
}

export default App
