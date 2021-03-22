import Head from 'next/head'
import styles from '../styles/Home.module.css'

import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: red;
`

export default function Home() {
  return (
    <div >
      <header>
        <Title>My Page</Title>
        <h1>Hello</h1>
      </header>
    </div>
  )
}
