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
    'R',
    'Go',
    'AJAX',
    'Java'
  ]

  const frameworks = [
    'React JS',
    'Next.js',
    'React Native',
    'Django',
    'Express',
    'Svelte'
  ]

  const technologies = [
    'Amazon AWS',
    'PostgreSQL',
    'MongoDB',
    'Cockroach DB',
    'MySQL',
    'Node.js',
    'Git',
    'Jira',
    'Vercel',
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
                maxWidth="350px"
                src="https://content.sportslogos.net/logos/35/882/full/3572_ucla_bruins-alternate-1973.png"
                alt="UCLA logo"
              />
            </Box>
          </Section>
          <Section delay={0.1}>
            <Paragraph>
              Hey, I am a CS major at UCLA and a Full-Stack developer focusing
              on web development and mobile development! I am a Frontend Web Dev
              Intern for Viasat, where I will be building their component
              library for all of their websites and apps, where I will reach
              100,000s of Viasat customers.
              <br />
              <br />
              I&apos;m currently working at the CHIPS lab at UCLA maintaining,
              upgrading, and building new websites for them. I am also the Lead
              Frontend Developer and Project Manager for Yumie, a data
              aggregation and social media app targeted at college students. I
              assign tasks, help those who are running into issues, and do my
              best to make sure we reach our deadlines. We currently have a team
              of about 5 frontend engineers and about 20 people total.
              <br />
              <br />
              I am also a Dev Team Officer for ACM at UCLA, where I help
              coordinate events, assign tasks to other engineers, and help
              resolve issues within the team. I will be a Software Engineer
              after graduation, most likely specializing in Full-Stack or Mobile
              development. Interested in MANGA, Big N, Fintech, HFTs, and
              start-up companies.
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
