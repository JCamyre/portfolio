import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
// divider from '@chakra-ui/react'
import Section from '../components/section.js'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbLunatrading from '../public/images/lunatradinglogo.png'
import thumbDataDen from '../public/images/dataden.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={32} mb={4}>
          Works
        </Heading>
        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="lunatrading"
              title="Lunatrading"
              thumbnail={thumbLunatrading}
              width={30}
            >
              An all-in-one trading info app
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="dataden"
              title="Data Den"
              thumbnail={thumbDataDen}
            >
              Data aggregation and analytics using surveys, targetting college
              demographics
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
