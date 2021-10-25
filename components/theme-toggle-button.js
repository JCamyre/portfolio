import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode();

    // changes its own color and icon and runs toggleColorMode when clicked
    // Not totaly sure how colorModeValue changes theme colors
    return (
        <IconButton aria-label='Toggle theme' colorScheme={useColorModeValue('purple', 'orange')} icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}>
        </IconButton>
    )
}

export default ThemeToggleButton;
