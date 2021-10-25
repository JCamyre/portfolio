import { Container, Box, Heading } from '@chakra-ui/react';

const Page = () => {
    return (
        <Container>
            <Box borderRadius='lg' bg='red' p={3} mb={6} align='center'>
                Hello, I&apos;m a full-stack developer based in America
            </Box>
            <Box display={{md: 'flex'}}>

            </Box>
            <Box flexGrow={1}>
                <Heading as='h2' variant='page-title'>
                    Joseph Camyre
                </Heading>
                <p>Software Engineer ( Developer / Designer / Dreamer )</p>
            </Box>
        </Container>
    )
}

export default Page;