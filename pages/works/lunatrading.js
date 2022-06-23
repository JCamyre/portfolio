import { Container, Heading, SimpleGrid, Image } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'
// divider from '@chakra-ui/react'
import Section from '../../components/section.js'
import { WorkGridItem } from '../../components/grid-item'
import Layout from '../../components/layouts/article'

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
        <Image src={thumbLunatrading} alt="Lunatrading Logo" />
      </Section>
    </Container>
  )
}
