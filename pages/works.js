import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
// divider from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbLunatrading from '../public/images/joseph.jpg'
import thumbBolt from '../public/images/dog.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="lunatrading"
              title="Lunatrading"
              thumbnail={thumbLunatrading}
            >
              An all-in-one trading information app
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="bolt" title="Bolt" thumbnail={thumbBolt}>
              Scheduling app to schedule schedules
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
