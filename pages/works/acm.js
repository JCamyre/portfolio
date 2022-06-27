import { Container, Heading, Image, Box } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'
// divider from '@chakra-ui/react'
import Section from '../../components/section.js'
// import { WorkGridItem } from '../../components/grid-item'
// import Layout from '../../components/layouts/article'

import thumbLunatrading from '../../public/images/lunatradinglogo.png'
import { useEffect } from 'react'

export default function Acm(props) {
  useEffect(() => {
    const { path } = props
    console.log(path)
  })

  return (
    <Container>
      <Section>
        <Heading>ACM at UCLA</Heading>
        <a
          href="https://opensource.uclaacm.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/images/acm-logo.png" alt="ACM Logo" />
        </a>
        <Box align="center">
          <a
            href="https://opensource.uclaacm.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/images/acm-logo2.png" alt="ACM Logo 2" />
          </a>
        </Box>

        <Paragraph>
          ● Deployed computing department’s portal on AWS CloudFront to handle
          the 90%+ requests that need static asset responses
          <br />
          ● Rolled out a spam filter on Contact Us page using A/B testing,
          reducing fraudulent requests by 78%
          <br />
          ● Implemented authorization backed by PostgreSQL, enabling CHIPS
          researchers to exclusively upload files and search records
          <br />
          ● Optimized Node.js to deal with 500+ concurrent requests using
          key-value store session caching, enabling performance to remain
          undegraded in times of peak load during UCLA-wide events
          <br />
          ● Used Docker and Express to web scrape articles and display them
          correctly
          <br />
          ● Proactively established continual relationship with QA team
          <br />
        </Paragraph>
      </Section>
    </Container>
  )
}
