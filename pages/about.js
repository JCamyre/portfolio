import { Box, Container, Image, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

export default function About() {
  return (
    <Layout>
      <Container>
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
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
