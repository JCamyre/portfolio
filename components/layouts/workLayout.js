// import Layout from '../components/layouts/article'
import Section from '../section.js'
import React from 'react'
import { Container, Link, Heading, Image, Button } from '@chakra-ui/react'
import Paragraph from '../paragraph.js'

function WorkLayout({id, title, children, image, link, position}) {
  return (
    <Container>
        <Section>
            <Link href={`/#${id}`}>
                <Button>Back</Button>
            </Link>
            <Heading>{title}</Heading>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image src={image} alt={`${title} Logo`} style={{maxWidth: "50%"}} />
                </div>
            </a>
            <Heading fontSize="24px">{position}</Heading>
            <br />
            <Section>
                {children}
            </Section>
        </Section>
    </Container>
  )
}

export default WorkLayout