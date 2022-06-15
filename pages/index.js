import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { useEffect } from 'react';
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import WebFont from 'webfontloader';

const Page = () => {
  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: ['Open Sans']
  //     }
  //   });
  // }, [])
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
          Hey, I&apos;m a Full-Stack Developer at UCLA studing Computer Science!
        </Box>
        <Box display={{ md: 'flex' }}></Box>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Joseph Camyre
          </Heading>
          <p>Software Engineer</p>
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
            maxWidth="200px"
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
            .
            <br />
            <Paragraph>
              He is the Full-Stack Developer and Webmaster for the{' '}
              {/* target="_blank" ref="noreferrer" */}
              <a href="https://chips.ucla.edu">CHIPS</a> (Center for
              Heterogeneous Integration and Performance Scaling) Lab at UCLA. He
              is also a part of a start-up with UCLA DevX called Data Den, a
              data analytics and congretation using surveys and targetting the
              college student demographic.
              <br />
              He is also searching for an internship for the 2022 Summer.
            </Paragraph>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
          <Box align="center" my={1}>
            {/* Some issue with this rn: target="_blank" ref="noreferrer" */}
            <a href="https://github.com/JCamyre">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Github Profile
              </Button>
            </a>
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
            <br />
            Started working at CHIPS Lab (UCLA)
            <br />
            Started working at UCLA DevX
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
