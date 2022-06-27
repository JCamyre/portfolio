import { Container, Heading, Image, Link } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph.js'
import Section from '../../components/section.js'

import { useEffect } from 'react'

export default function Viasat(props) {
  useEffect(() => {
    const { path } = props
    console.log(path)
  })

  return (
    <Container>
      <Section>
        <Heading>Viasat</Heading>
        <Heading fontSize="24px">Frontend Web Developer Intern</Heading>
        <a href="https://www.viasat.com" target="_blank" rel="noreferrer">
          <Link>
            <Image src="/images/viasat-logo.png" alt="Viasat Logo" />
          </Link>
        </a>
        <Paragraph>
          ● Viasat Beam team member, build React component library for all
          Viasat Frontend Developers using TypeScript, SASS, HTML, Storybook,
          impacting 100,000’s of Viasat customers’ website experience
          <br />
          ● Utilize Storybook to streamline the process of designing accessible
          and user-friendly interfaces
          <br />
          ● Leveraged Cypress to ensure accessibility and functionality for any
          scenario
          <br />
        </Paragraph>
      </Section>
    </Container>
  )
}
