import { Container, Heading, Image } from '@chakra-ui/react'
import Section from '../../components/section.js'
// import Paragraph from '../../components/paragraph'
// import { WorkGridItem } from '../../components/grid-item'
// import Layout from '../../components/layouts/article'

import thumbDataDen from '../../public/images/dataden.png'
import { useEffect } from 'react'

export default function Dataden(props) {
  useEffect(() => {
    console.log(props)
  })

  return (
    <Container>
      <Section>
        <Heading>Dataden</Heading>
        <Image src={thumbDataDen} alt="DataDen logo" />
      </Section>
    </Container>
  )
}
