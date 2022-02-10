import { Box, Container, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { React } from 'react'

export default function About() {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={32} mb={4}>
          About
        </Heading>
        <SimpleGrid>
          <Section>
            <Box align="center">
              <Image
                maxWidth="350px"
                src="https://content.sportslogos.net/logos/35/882/full/3572_ucla_bruins-alternate-1973.png"
                alt="UCLA logo"
              />
            </Box>
          </Section>
          <Section>
            <Paragraph>
              I am a first year CS major at UCLA and a Full-Stack developer who
              wants to pursue new projects and try out iOS development. I am
              currently working at the CHIPS lab at UCLA maintaining, upgrading,
              and building new websites for them. I am also with a group of
              brilliant students at UCLA DevX working on a data aggregation and
              analytics app. I will be a Software Engineer after graduation,
              either specializing in Full-Stack or Mobile development, or
              something else who knows! Interested in both MANGA and start-up
              companies. I enjoy to workout, play tennis, cars, playing the
              guitar, trading, and eating spicy food in my free time! If you
              want to reach out to me for any reason, the best way to contact me
              is via email: jcamyre127@g.ucla.edu.
            </Paragraph>
          </Section>
          <Section>
            <SimpleGrid columns={3} spacing={20}>
              <Box>
                <Heading fontSize={18}>Languages</Heading>
                <Paragraph align="center">
                  Python
                  <br />
                  JavaScript
                  <br />
                  C++
                  <br />
                  TypeScript
                  <br />
                  HTML
                  <br />
                  SQL
                  <br />
                  Ruby
                  <br />
                  Swift
                  <br />
                </Paragraph>
              </Box>
              <Box>
                <Heading fontSize={18}>Frameworks</Heading>
                <Paragraph>
                  React
                  <br />
                  React Native
                  <br />
                  Next.js
                  <br />
                  Gatsby.js
                  <br />
                  Express
                  <br />
                  Node.js
                  <br />
                </Paragraph>
              </Box>
              <Box>
                <Heading fontSize={18}>Other</Heading>
                <Paragraph>
                  AWS
                  <br />
                  PostgreSQL
                  <br />
                  MongoDB
                  <br />
                </Paragraph>
              </Box>
            </SimpleGrid>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
