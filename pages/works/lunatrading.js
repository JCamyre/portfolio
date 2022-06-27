import { Container, Heading, Image } from '@chakra-ui/react'
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
        <Image src="/images/lunatradinglogo.png" alt="Lunatrading Logo" />
      </Section>
      <Section>
        <Paragraph>
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
