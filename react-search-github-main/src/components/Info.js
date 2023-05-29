import React from 'react'
import useGlobalContext from '../context/context'
import { GoGist, GoRepo } from 'react-icons/go'
import { FiUser, FiUserPlus } from 'react-icons/fi'
import styled from 'styled-components'

const Info = () => {
  const { gitUser } = useGlobalContext()
  const { following, followers, public_repos, public_gists } = gitUser
  const items = [
    {
      label: 'repos',
      value: public_repos,
      icon: <GoRepo className='icon' />,
      color: 'green',
    },
    {
      label: 'following',
      value: following,
      icon: <FiUserPlus className='icon' />,
      color: 'yellow',
    },
    {
      label: 'followers',
      value: followers,
      icon: <FiUser className='icon' />,
      color: 'pink',
    },
    {
      label: 'gists',
      value: public_gists,
      icon: <GoGist className='icon' />,
      color: 'purple',
    },
  ]

  return (
    <Wrapper className='section-center'>
      {items.map((item, index) => {
        const { label, value, icon, color } = item
        return (
          <article className='item' key={index}>
            <span className={color}>{icon}</span>
            <div>
              <h3>{value}</h3>
              <p>{label}</p>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`

export default Info
