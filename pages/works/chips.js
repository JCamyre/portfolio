import React from 'react'
import { Container, Box, Link, Heading, Image } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import chips_logo from '../../public/images/chips-logo.png'

function chips() {
  return (
    <Layout>
      <Container>
        <Heading>CHIPS Lab (UCLA)</Heading>
        <Heading fontSize="24px">Lead Full Stack Developer</Heading>
        <Paragraph>CHIPS Display Site:</Paragraph>
        <a
          href="https://github.com/JCamyre/CHIPSDisplaySite"
          target="_blank"
          rel="noreferrer"
        >
          <Link>
            <Image src="/images/chips-logo.png" alt="CHIPS Logo" />
          </Link>
        </a>

        <a href="https://chips.ucla.edu" target="_blank" rel="noreferrer">
          <Link>CHIPS Main Website</Link>
        </a>
        <Paragraph fontSize="20px">
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
      </Container>
    </Layout>
  )
}

export default chips
