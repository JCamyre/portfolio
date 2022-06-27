import { Container, Heading, Image } from '@chakra-ui/react'
// import Paragraph from '../../components/paragraph'
// divider from '@chakra-ui/react'
import Section from '../../components/section.js'
// import { WorkGridItem } from '../../components/grid-item'
import Layout from '../../components/layouts/article'

import thumbLunatrading from '../../public/images/lunatradinglogo.png'
import { useEffect } from 'react'

export default function Dandelion(props) {
  useEffect(() => {
    const { path } = props
    console.log(path)
  })

  return (
    <Container>
      <Layout>
        <Section>
          <Heading>Dandelion</Heading>
          <Image
            borderRadius="16px"
            src="/images/dandelion-logo.png"
            alt="Lunatrading Logo"
          />
        </Section>
      </Layout>
    </Container>
  )
}
