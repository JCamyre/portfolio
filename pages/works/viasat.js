import { Container, Heading, Image, Link } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph.js'
import Section from '../../components/section.js'
import { useEffect } from 'react'
import WorkLayout from '../../components/layouts/workLayout.js'

export default function Viasat(props) {
  useEffect(() => {
    const { path } = props
    console.log(path)
  })

  return (
    <>
      <WorkLayout id='viasat' title='Viasat' image='/images/viasat-logo.png' link='https://www.viasat.com' position='Frontend Web Developer Intern'>
        <Paragraph>
            ● Viasat Beam team member, build React component library for all
            Viasat Frontend Developers using TypeScript, SASS, HTML, Storybook,
            impacting 100,000's of Viasat customers' website experience
            <br />
            ● Utilize Storybook to streamline the process of designing accessible
            and user-friendly interfaces
            <br />
            ● Leveraged Cypress to ensure accessibility and functionality for any
            scenario
            <br />
          </Paragraph>
      </WorkLayout>
    </>
  )
}
