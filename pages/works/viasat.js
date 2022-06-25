import { Container, Heading, Image, Link } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph.js'
// import Paragraph from '../../components/paragraph'
// divider from '@chakra-ui/react'
import Section from '../../components/section.js'
// import { WorkGridItem } from '../../components/grid-item'
// import Layout from '../../components/layouts/article'

import thumbViasat from '../../public/images/viasat-logo.png'
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
        <a href="https://www.viasat.com" target="_blank">
          <Link>
            <Image src={thumbViasat} alt="Viasat Logo" />
          </Link>
        </a>
        <Paragraph>test</Paragraph>
      </Section>
    </Container>
  )
}
