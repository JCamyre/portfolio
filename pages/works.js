import { Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
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
        <Container w="65%">
          <SimpleGrid column={[1, 1, 2]} gap={6}>
            <Section>
              <WorkGridItem
                id="viasat"
                title="Viasat"
                thumbnail={thumbViasat}
                // bg="white"
                // borderRadius="24px"
              >
                Viasat Beam team member, build React component library,
                impacting 100,000’s of Viasat customers’ website experience
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem id="chips" title="Chips" thumbnail={thumbChips}>
                Build out new features and new websites for CHIPS lab at UCLA
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="acm"
                title="ACM at UCLA"
                thumbnail={thumbAcm}
                height="400"
              >
                Spearheaded development of informational Open-source website and
                build out main ACM at UCLA website
              </WorkGridItem>
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
              >
                Bridging access to concerts and venues for all
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Container>
      </Container>
    </Layout>
  )
}

export default Works
