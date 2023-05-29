import React, { useState, useContext, useEffect } from 'react'
import { mockUser } from './mockData.js/mockUser'
import { mockFollowers } from './mockData.js/mockFollowers'
import { mockRepos } from './mockData.js/mockRepos'
import axios from 'axios'

const AppContext = React.createContext()

const requestUrl = 'https://api.github.com/rate_limit'
const API_ENDPOINT = 'https://api.github.com/users/'

export const AppProvider = ({ children }) => {
  const [gitUser, setGitUser] = useState(mockUser)
  const [gitRepos, setGitRepos] = useState(mockRepos)
  const [gitFollowers, setGitFollowers] = useState(mockFollowers)
  const [requests, setRequests] = useState(0)
  const [error, setError] = useState({ show: true, msg: '' })
  const [loading, setLoading] = useState(false)

  const getRequest = () => {
    axios(requestUrl)
      .then((response) => {
        let data = response.data.rate.remaining
        setRequests(data)
        if (data === 0) {
          toggleError(
            true,
            'you have no request left. Please check back after an hour'
          )
        }
      })
      .catch((err) => console.log(err))
  }

  const fetchData = async (url) => {
    setLoading(true)
    const response = await axios(url).catch((err) => console.log(err))
    if (response) {
      const data = await response.data
      setGitUser(data)
      toggleError()
      await Promise.allSettled([
        axios(`${data.followers_url}?per_page=100`),
        axios(`${data.repos_url}?per_page=100`),
      ]).then((response) => {
        const [followers, repos] = response
        const followersData = followers.value.data
        setGitFollowers(followersData)
        const reposData = repos.value.data
        setGitRepos(reposData)
      })
    } else {
      toggleError(true, 'User not found')
    }
    setLoading(false)
  }

  useEffect(getRequest, [])

  const toggleError = (show = false, msg = '') => {
    setError({ show, msg })
  }
  const fetchBtn = (query) => {
    fetchData(`${API_ENDPOINT}${query}`)
  }

  return (
    <AppContext.Provider
      value={{
        gitUser,
        gitRepos,
        gitFollowers,
        requests,
        error,
        fetchBtn,
        loading,
        getRequest,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}
export default useGlobalContext
