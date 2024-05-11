import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from './components/Hero.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import RevMain from './components/RevMain.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       
   <Header/>
   <Hero/>
    <Main/>
    <RevMain />
    <App title="I used a prop"/>

    
  </React.StrictMode>,
)
