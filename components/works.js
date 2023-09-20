import { Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import Section from '../components/section.js'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbLunatrading from '../public/images/lunatradinglogo.png'
import thumbAcm from '../public/images/acm-logo.png'
import thumbViasat from '../public/images/viasat-logo.png'
import thumbChips from '../public/images/chips-logo.png'
import thumbDIPD from '../public/images/DIPD-logo.jpg'
import thumbBAI from '../public/images/bai-logo.png';
import thumbDevX from '../public/images/devx-logo.jpg';
import thumbCapitalOne from '../public/images/capital-one.png'
import thumbFork from "../public/images/fork-logo.jpg"
import thumbLunarTrading from "../public/images/lunar-trading-logo.png"

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
                id="fork"
                title="Fork"
                thumbnail={thumbFork}
              >
                Introducing Fork, your ultimate companion for healthy eating and a seamless dining experience.
              </WorkGridItem>
          </Section>
          <Section>
              <WorkGridItem
                id="capitalone"
                title="Capital One"
                thumbnail={thumbCapitalOne}
              >
                Enhance phone authentication system, reduce the 25% of the 300 million customer support calls a year falsely requiring further verification, improving millions of users&apos; experience and saving over $2 million in Operational Expenses.
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="lunartrading"
                title="Lunar Trading"
                thumbnail={thumbLunarTrading}
              >
                Democratize investing and empower college students by leveraging AI and ML.
              </WorkGridItem>
          </Section>
            <Section>
              <WorkGridItem
                id="viasat"
                title="Viasat"
                thumbnail={thumbViasat}
              >
                Viasat Beam team member, build React component library,
                impacting 100,000's of Viasat customers' website experience
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
                Enabled effortless AWS deployment for all ACM projects.
              </WorkGridItem>
            </Section>
            {/* Maybe display the title position here! */}
            {/* <Section>
              <WorkGridItem
                id="lunatrading"
                title="Lunatrading"
                thumbnail={thumbLunatrading}
                width={30}
              >
                An all-in-one trading info app
              </WorkGridItem>
            </Section> */}
            <Section>
              <WorkGridItem
                id="devx"
                title="DevX"
                thumbnail={thumbDevX}
                width={30}
              >
                DevX
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="dipd"
                title="DIPD (Diversity and Inclusion in Product and Data)"
                thumbnail={thumbDIPD}
                width={30}
              >
                DIPD
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="bai"
                title="BAI (Bruin AI Quant)"
                thumbnail={thumbBAI}
                width={30}
              >
                BAI, BCM
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Container>
      </Container>
    </Layout>
  )
}

export default Works
