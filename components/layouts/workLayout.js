// import Layout from '../components/layouts/article'
import Section from '../section.js'
import React from 'react'
import { Container, Link, Heading, Image, Button } from '@chakra-ui/react'

function WorkLayout({id, title, children, image, link, position}) {
  return (
    <Container>
        <Section>
            <Link href={`/#${id}`}>
                <Button>Back</Button>
            </Link>
            <br />
            <br />
            <Heading>{title}</Heading>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                <div style={{display: 'flex', justifyContent: 'center', margin: 24}}>
                    <Image src={image} alt={`${title} Logo`} style={{maxWidth: "50%", borderRadius: '24px'}} />
                </div>
            </a>
            <br />
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