import { Link, UnorderedList, ListItem } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'
import WorkLayout from '../../components/layouts/workLayout'

function Chips() {
  return (
    <WorkLayout id='chips' link='https://chips.ucla.edu' image='/images/chips-logo.png' title='CHIPS Lab (UCLA)' position='Lead Full Stack Developer'>
      <Link href="https://chips-display-site.vercel.app/" target="_blank" rel="noreferrer">CHIPS Display Site</Link>
      <Paragraph fontSize="20px">
        This was my first real coding job, I was so happy when I got the position!
      </Paragraph>
      <UnorderedList>
        <ListItem>Deployed computing department's portal on AWS CloudFront to handle
        the 90%+ requests that need static asset responses</ListItem>
        <ListItem>Rolled out a spam filter on Contact Us page using A/B testing,
        reducing fraudulent requests by 78%</ListItem>
        <ListItem>Implemented authorization backed by PostgreSQL, enabling CHIPS
        researchers to exclusively upload files and search records</ListItem>
        <ListItem>Optimized Node.js to deal with 500+ concurrent requests using
        key-value store session caching, enabling performance to remain
        undegraded in times of peak load during UCLA-wide events</ListItem>
        <ListItem>Used Docker and Express to web scrape articles and display them
        correctly</ListItem>
        <ListItem>Proactively established continual relationship with QA team</ListItem>
      </UnorderedList>
    </WorkLayout>
  )
}

export default Chips
