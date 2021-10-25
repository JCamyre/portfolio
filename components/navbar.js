import Logo from './logo';
import NextLink from 'next/link';

import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { HumburgerIcon } from '@chakra-ui/icons';

const LinkItem = ({ href, path, children }) => {
    // This is for if the current path of the user is equal to the href of the LinkItem, if so then we are on this page. Then we highlight it.
    // This is what I was trying to do for my navbuttons (current page), couldn't figure it out
    const active = path === href; // if user is on this page, then their path === this item's href

    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
    // Link is UI, NextLink is handling logic
    return (
        <NextLink href={href}>
            <Link pg={2} bg={active ? 'glassTeal' : undefined} color={active ? '@  #202030' : inactiveColor}>
                {children}
            </Link> 
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props;

    // So you can do <p {...props}></p> and it will load in all props passed in. Wow, so convenient
    return (
        <Box position='fixed' as='nav' w='100%' bg={useColorModeValue('#ffffff40', '#202023080')} style={{backdropFilter: 'blur(10px)'}}
            zIndex={1} {...props}>
            Navbar
        </Box>
    )
}

export default Navbar;