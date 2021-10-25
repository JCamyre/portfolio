import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

// idk how framer-motion works
const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
});

// Making my own animation (when the page first loads), fades in and rises up a little bit
// Any time you need a div with animation, boom
const Section = ({ children, delay=0 }) => (
    <StyledDiv initial={{y: 10, opacity: 0}} animate={{y: 0, opacity:1}} transition={{ duration: 0.8, delay }} mb={6}>
        {children}
    </StyledDiv>
)

export default Section;