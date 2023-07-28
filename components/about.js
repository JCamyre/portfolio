import { Box, Container, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { React } from 'react'

export default function About() {
  const languages = [
    'Python',
    'TypeScript',
    'JavaScript',
    'C++',
    'HTML',
    'SASS',
    'CSS',
    'SQL',
  ]

  const frameworks = [
    'Django',
    'Flask',
    'Fast API',
    'Express',
    'React JS',
    'Next.js',
    'React Native',
    'Vercel',
  ]

  const technologies = [
    'AWS Lambda',
    'AWS EC2',
    'AWS RDS',
    'AWS SQS',
    'Kafka',
    'Splunk',
    'Snowflake',
    'Terraform',
    'Jenkins',
    'Docker',
    'Kubernetes',
    'Linux',
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'Node.js',
    'Git',
    'Jira',
    'Heroku',
    'Googling'
  ]

  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={32} mb={4}>
          About
        </Heading>
        <SimpleGrid>
          <Section delay={0.1}>
            <Box align="center" borderRadius="lg" backgroundColor="white">
              <Image
                maxWidth="75%"
                src="https://content.sportslogos.net/logos/35/882/full/3572_ucla_bruins-alternate-1973.png"
                alt="UCLA logo"
              />
            </Box>
          </Section>
          <Section delay={0.1}>
            <Paragraph>
              Here are my favorite languages, frameworks, and other software dev tools! 
              <br />
              <br />
              Send me an email: jcamyre127@g.ucla.edu
            </Paragraph>
          </Section>
          <Section delay={0.2}>
            <SimpleGrid columns={3} spacing={20}>
              <Box>
                <Heading fontSize={18}>Languages</Heading>
                <Paragraph align="center">
                  {languages.map(language => (
                    <>
                      <p key={language}>{language}</p>
                      <br />
                    </>
                  ))}
                </Paragraph>
              </Box>
              <Box>
                <Heading fontSize={18}>Frameworks</Heading>
                <Paragraph>
                  {frameworks.map(framework => (
                    <>
                      <p key={framework}>{framework}</p>
                      <br />
                    </>
                  ))}
                </Paragraph>
              </Box>
              <Box>
                <Heading fontSize={18}>Other</Heading>
                <Paragraph>
                  {technologies.map(technology => (
                    <>
                      <p key={technology}>{technology}</p>
                      <br />
                    </>
                  ))}
                </Paragraph>
              </Box>
            </SimpleGrid>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
