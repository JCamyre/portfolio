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
            maxWidth="200px"
            display="inline-block"
            borderRadius="full"
            src="/images/joseph.jpg"
            alt="Profile Picture"
            onClick={() => setShowMessage(!showMessage)}
            style={{ cursor: 'pointer' }}
            className="profile-pic"
          />
        </Box>
        {showMessage && (
          <Section delay={0.08}>
            <Box
              borderRadius="lg"
              bg={boxColor}
              mt={5}
              p={3}
              mb={6}
              align="center"
            >
              Hey, I&apos;m a Full-Stack Developer at UCLA studing Computer
              Science!
            </Box>
          </Section>
        )}
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I am currently working at{' '}
            <a href="https://www.viasat.com/">
              <Link>Viasat </Link>
            </a>
            as a Frontend Web Dev Intern, where I am building their component
            library for all of their websites and apps, reaching 100,000's of
            Viasat customers.
            <br />
            <Paragraph>
              I am also a Frontend Developer for ACM working on{' '}
              <a href="https://www.uclaacm.com/">
                <Link>UCLA at ACM's website </Link>
              </a>
              as well as their{' '}
              <a href="https://opensource.uclaacm.com/">
                <Link>OpenSource website</Link>
              </a>
              . I am also the Full-Stack Developer and Webmaster for the{' '}
              <a href="https://chips.ucla.edu">
                <Link>CHIPS</Link>
              </a>{' '}
              (Center for Heterogeneous Integration and Performance Scaling) Lab
              at UCLA. I also work at a start-up called Yumie, a data analytics
              and congretation app using surveys and targetting the college
              student demographic.
              <br />
            </Paragraph>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
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
