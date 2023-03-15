import { Link, Heading, Image } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'
import WorkLayout from '../../components/layouts/workLayout'

function Chips() {
  return (
    <>
      <WorkLayout id='chips' link='https://chips.ucla.edu' image='/images/chips-logo.png' title='CHIPS Lab (UCLA)' position='Lead Full Stack Developer'>
        <Link href="https://chips-display-site.vercel.app/" target="_blank" rel="noreferrer">CHIPS Display Site</Link>
        <Paragraph fontSize="20px">
          ● Deployed computing department's portal on AWS CloudFront to handle
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
      </WorkLayout>
    </>
  )
}

export default Chips
