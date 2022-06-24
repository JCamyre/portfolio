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
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
          <Box align="center" my={4}>
            {/* Some issue with this rn: target="_blank" ref="noreferrer" */}
            <a href="https://github.com/JCamyre" target="_blank">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Github Profile
              </Button>
            </a>
          </Box>
          <Box align="center" my={4}>
            <a href="#" target="_blank">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My resume
              </Button>
            </a>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
