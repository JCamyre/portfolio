import { Container, Heading, Image, Box } from '@chakra-ui/react'
import Section from '../../components/section.js'
import Layout from '../../components/layouts/article.js'
import Paragraph from '../../components/paragraph'
import thumbDataDen from '../../public/images/dataden.png'
import { useEffect } from 'react'

export default function Yumie(props) {
  useEffect(() => {
    console.log(props)
  })

  return (
    <Layout>
      <Container>
        <Section>
          <Heading>Yumie</Heading>
          <Box align="center">
            <Image src="/images/yumie-logo.jpg" alt="Yumie logo" />
          </Box>
        </Section>
        <Section>
          <Paragraph>
            ● Developed social media and survey platform using React, Express
            and Node.js that stored thousands of college students’ opinions in
            MongoDB
            <br />
            ● Also lead development of mobile app with team of 6 using React
            Native
            <br />
            ● Deployed on AWS Elastic Beanstalk, RDS and S3 to ensure end-to-end
            uptime of 99.64%
            <br />
            ● Worked with 5 designers using Figma to improve website
            user-friendliness, increasing post-first-page click-through rate by
            15%
            <br />
            ● Led adoption of Git, Jira and GitHub Actions among existing team
            of 6 classmates, reducing customer bug reports by 60%
            <br />
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
