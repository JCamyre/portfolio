import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbLunatrading from '../public/images/works/joseph.jpg';
import thumbBolt from '../public/images/works/dog.png';

const Works = () => {
    return (
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid column={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id='lunatrading' title='Lunatrading' thumbnail={thumbLunatrading}>
                        An all-in-one trading information app
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='bolt' title='Bolt' thumbnail={thumbBolt}>
                        Scheduling app to schedule schedules
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works;