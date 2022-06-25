import React from 'react'
import { Container, Box, Link, Header } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import chips_logo from '../../public/images/chips-logo.png'

function chips() {
  return (
    <Layout>
      <Container>
        <Header>CHIPS Lab (UCLA)</Header>
        <Header fontSize="24px">Leader Web Developer</Header>
        <Paragraph>CHIPS Display Site:</Paragraph>
        <a href="https://github.com/JCamyre/CHIPSDisplaySite" target="_blank">
          <Link>
            <Image src={chips_logo} alt="CHIPS Logo" />
          </Link>
        </a>
        <a href="https://chips.ucla.edu">
          <Link>CHIPS Main Website</Link>
        </a>
        <Paragraph>CHIPS</Paragraph>
      </Container>
    </Layout>
  )
}

export default chips
