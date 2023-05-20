import Logo from './logo'
import NextLink from 'next/link'
import styles from './navbar.module.css'

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
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
  // This is for if the current path of the user is equal to the href of the LinkItem, if so then we are on this page. Then we highlight it.
  // This is what I was trying to do for my navbuttons (current page), couldn't figure it out
  const active = path === href // if user is on this page, then their path === this item's href

  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  // Link is UI, NextLink is handling logic
  return (
    <NextLink href={href}>
      <Link
        pg={2}
        bg={active ? 'green' : undefined}
        color={active ? '@  #202030' : inactiveColor}
        textDecoration={'none'}
        className={styles.navItem}
      >
        {children}
      </Link>
    </NextLink>
  )
}

// Not perfectly aligned
const Navbar = props => {
  // whenever we navigate to a page, the path is passed as an argument, retrieve from the props parameter.
  const { path } = props

  // So you can do <p {...props}></p> and it will load in all props passed in. Wow, so convenient
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#202023080')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      // height="100px"
      {...props}
    >
      <Container
        display="flex"
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <span>
            <Logo />
          </span>
        </Flex>
        {/* how do these base and md keys work, based on size of window? */}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          {/* href is for the url, path is the internal path to the react page, why do they have the same path variable */}
          <LinkItem href="/#about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/#works" path={path}>
            Works
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/#about" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/#works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
