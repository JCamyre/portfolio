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
import Layout from '../components/layouts/article'
import { useState } from 'react'
import '../lib/app.module.css'
import About from '../components/about.js'
import Works from '../components/works.js'

const Message = children => {
  return (
    <Box
      borderRadius="lg"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      p={3}
      mb={6}
      align="center"
    >
      {children}
    </Box>
  )
}

const Page = () => {
  const boxColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')

  const [showMessage, setShowMessage] = useState(false)

  return (
    <Layout>
      <Container id="home">
        <br />
        <br />
        <hr style={{ color: 'yellow', height: '20px' }} />
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
            maxWidth="50%"
            display="inline-block"
            borderRadius="full"
            src="/images/joseph-close.jpg"
            alt="Profile Picture"
            onClick={() => setShowMessage(!showMessage)}
            style={{ cursor: 'pointer' }}
            className="profile-pic"
          />
        </Box>
        {showMessage && (
          <Section delay={0.01}>
            <Box
              borderRadius="lg"
              bg={boxColor}
              mt={5}
              p={3}
              mb={6}
              align="center"
            >
              Hey, I&apos;m a Backend and Infrastructure Developer at UCLA studing Computer
              Science!
            </Box>
          </Section>
        )}
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Section>
            <Paragraph>
              I am currently a Software Engineering Intern at <Link href='https://www.capitalone.com/' target="_blank" rel="noreferrer">Capital One</Link>!
              Enhance phone authentication system, reduce the 25% of the 300 million customer support calls a year falsely requiring further verification, improving millions of users&apos; experience and saving over $2 million in Operational Expenses.
            </Paragraph>
            <Paragraph>
            I previously interned at{' '}
            <Link href="https://www.viasat.com/" target="_blank" rel="noreferrer">
              Viasat{' '}
            </Link>
              as a Frontend Web Dev Intern, where I am building their component
              library for all of their websites and apps, reaching 100,000&apos;s of
              Viasat customers.
            </Paragraph>
            <Paragraph>
            Currently, I am actively involved in spearheading two exciting mobile app startups—one centered around the food industry and the other in the dynamic realm of finance.            
            </Paragraph>
            <Paragraph>
              As the Workshop Director and EM Manager for{' '}
              <Link href="https://www.ucladevx.com/" target="_blank" rel="noreferrer">
              DevX at UCLA
              </Link>
              , I designed curriculums for advanced and beginner workshops of 15 interns each, chosen from a pool of 200 applicants.
              I lead groups of 3 to apply knowledge from workshop through building full-stack web applications.
            </Paragraph>
            <Paragraph>
              I am also the AWS Deployment Lead and Officer for{' '}
              <a href="https://www.uclaacm.com/">
                <Link>ACM</Link>
              </a>, where I built Github Actions to automatically deploy all projects to AWS Lambda&apos;s and EC2&apos;s.
            </Paragraph>
            <Paragraph>
              I am a workshop teacher at BAI (Bruin Algorithmic Insights), a branch of{' '}
              <Link href="https://bruincapital.org/">
                BCM
              </Link>.
            </Paragraph>
            <Paragraph>
              Additionally, I am the Full-Stack Developer and Webmaster for the{' '}
              <a href="https://chips.ucla.edu">
                <Link>CHIPS</Link>
              </a>{' '}
              (Center for Heterogeneous Integration and Performance Scaling) Lab
              at UCLA.
              <br />
            </Paragraph>
          </Section>
          <Box align="center" my={4}>
            <NextLink href="/#works">
              <Button
                className="regular-button"
                rightIcon={<ChevronRightIcon />}
                colorScheme="yellow"
              >
                My portfolio
              </Button>
            </NextLink>
          </Box>
          <Box align="center" my={4} className="regular-button">
            <a
              href="https://github.com/JCamyre"
              target="_blank"
              rel="noreferrer"
            >
              <Button rightIcon={<ChevronRightIcon />} colorScheme="yellow">
                Github Profile
              </Button>
            </a>
          </Box>
          <Box align="center" my={4}>
            {' '}
            <a href="/files/Joseph_S_Camyre_Resume.pdf" target="_blank">
              <Button
                className="regular-button"
                rightIcon={<ChevronRightIcon />}
                colorScheme="yellow"
              >
                My resume
              </Button>
            </a>
          </Box>
        </Section>
      </Container>
      <Container id="about">
        <br />
        <br />
        <hr style={{ color: 'yellow', height: '20px' }} />
        <About />
      </Container>
      <Container id="works">
        <br />
        <br />
        <hr style={{ color: 'yellow', height: '20px' }} />
        <Works />
      </Container>
    </Layout>
  )
}

export default Page
