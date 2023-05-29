import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Error from './pages/Error'
import AuthWrapper from './components/AuthWrapper'
import PrivateWrapper from './components/PrivateWrapper'

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateWrapper>
                <Home />
              </PrivateWrapper>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  )
}

export default App
