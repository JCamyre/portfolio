import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer at UCLA studing Computer
          Science
        </Box>
        <Box display={{ md: 'flex' }}></Box>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Joseph Camyre
          </Heading>
          <p>Software Engineer ( Developer / Designer / Dreamer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/joseph.jpg"
            alt="Profile Picture"
          />
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          {/* When you make a styled tag, you can use it like a component, with all the css styling */}
          <Paragraph>
            Joseph is currently working on{' '}
            <NextLink href="/works/lunatrading">
              <Link>Lunatrading</Link>
            </NextLink>
            He is the Web Developer/Webmaster for the CHIPS Lab at UCLA.
            <br />
            He is also a part of a start-up with DevX called Bolt, a scheduling
            app that plans to improve human interaction by decreasing the effort
            required to schedule get-togethers.
            <br />
            He is also an intern for ACM DevTeam.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
            <NextLink href="https://github.com/JCamyre">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Github Profile
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2003</BioYear>
            Born in Santa Rosa, California.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Started studying CS at UCLA.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Playing guitar, Working out, Trading stocks, Speed typing, Tennis,
            UI/UX design, Cars, Machine learning/A.I, Spicy food
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
