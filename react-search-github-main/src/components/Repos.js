import React from 'react'
import useGlobalContext from '../context/context'
import styled from 'styled-components'
import Pie3d from './charts/Pie3d'
import Doughnut2d from './charts/Doughnut2d'
import Column3d from './charts/Column3d'
import Bar3d from './charts/Bar3d'

const Repos = () => {
  const { gitRepos } = useGlobalContext()

  const reposTemp = gitRepos.reduce((total, item) => {
    const { language, stargazers_count } = item
    if (!language) return total
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: 1 }
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      }
    }
    return total
  }, {})

  const languages = Object.values(reposTemp)
    .sort((a, b) => {
      return b.value - a.value
    })
    .slice(0, 5)

  const stargazers = Object.values(reposTemp)
    .map((item) => {
      return { ...item, value: item.stars }
    })
    .sort((a, b) => {
      return b.value - a.value
    })
    .slice(0, 5)

  const starsCount = gitRepos
    .map((item) => {
      const { name, stargazers_count } = item
      return { label: name, value: stargazers_count }
    })
    .sort((a, b) => {
      return b.value - a.value
    })
    .slice(0, 5)

  const forksCount = gitRepos
    .map((item) => {
      const { name, forks_count } = item
      return { label: name, value: forks_count }
    })
    .sort((a, b) => {
      return b.value - a.value
    })
    .slice(0, 5)

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3d data={languages} />
        <Doughnut2d data={stargazers} />
        <Column3d data={starsCount} />
        <Bar3d data={forksCount} />
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`

export default Repos
