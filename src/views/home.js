import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Investor Creative Planner</title>
        <meta property="og:title" content="Investor Creative Planner" />
      </Helmet>
    </div>
  )
}

export default Home
