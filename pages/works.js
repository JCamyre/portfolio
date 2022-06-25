import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
// divider from '@chakra-ui/react'
import Section from '../components/section.js'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbLunatrading from '../public/images/lunatradinglogo.png'
import thumbYumie from '../public/images/yumie-logo.jpg'
import thumbAcm from '../public/images/acm-logo.png'
import thumbViasat from '../public/images/viasat-logo.png'
import thumbDandelion from '../public/images/dandelion-logo.png'
import thumbChips from '../public/images/chips-logo.png'

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
              id="viasat"
              title="Viasat"
              thumbnail={thumbViasat}
              // bg="white"
              // borderRadius="24px"
            ></WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="chips"
              title="Chips"
              thumbnail={thumbChips}
            ></WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="Acm"
              title="ACM at UCLA"
              thumbnail={thumbAcm}
              height="400"
            ></WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="yumie" title="Yumie" thumbnail={thumbYumie}>
              Data aggregation and analytics using surveys, targetting college
              demographics
            </WorkGridItem>
          </Section>
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
              id="dandelion"
              title="Dandelion"
              thumbnail={thumbDandelion}
            ></WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
