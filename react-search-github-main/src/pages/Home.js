import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Info from '../components/Info'
import User from '../components/User'
import Repos from '../components/Repos'
import useGlobalContext from '../context/context'

const Home = () => {
  const { loading } = useGlobalContext()

  if (loading) {
    return (
      <>
        <Navbar />
        <Search />
        <div className='loading'></div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </>
  )
}

export default Home
