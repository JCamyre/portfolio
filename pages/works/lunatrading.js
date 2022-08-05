import { Container, Heading, Image, Box, Link } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'
// divider from '@chakra-ui/react'
import Section from '../../components/section.js'
// import { WorkGridItem } from '../../components/grid-item'
// import Layout from '../../components/layouts/article'

import thumbLunatrading from '../../public/images/lunatradinglogo.png'
import { useEffect } from 'react'

export default function Lunatrading(props) {
  useEffect(() => {
    const { path } = props
    console.log(path)
  })

  return (
    <Container>
      <Section>
        <Heading>Lunatrading</Heading>
        <Box align="center" mt="20px">
          <a
            href="https://github.com/JCamyre/Lunatrading"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/lunatradinglogo.png"
              h="100px"
              alt="Lunatrading Logo"
            />
          </a>
        </Box>
      </Section>
      <Section>
        <Paragraph style={{ lineHeight: '32px' }}>
          My favorite project ever is my Stock Trading Information Web App
          called Lunatrading! I started working on this project out of laziness:
          I was looking at over 10 different websites to get all the information
          I needed to decide whether to buy a stock or not! I used React on the
          frontend, and Python and Django for the backend. I also created my own
          Python package from scratch that enabled coders to get any information
          for a stock that they needed.
          <br />
          ● Built stock information presenter SPA using React and Django REST
          Framework
          <br />
          ● Deployed on Heroku
          <br />
          ● Provisioned a cron job to scrape 17000 stocks daily, perform
          in-memory processing using pandas under Python and batch insert
          results to PostgreSQL
          <br />
        </Paragraph>
      </Section>
    </Container>
  )
}
