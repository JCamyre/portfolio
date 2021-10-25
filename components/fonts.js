import { Global } from '@emotion/react';

// Should be moved into lib am I right or am I right

// () instead of {} cuz we aren't returning anything
const Fonts = () => (
    <Global styles={`
        @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");
    `} 
    />
)

export default Fonts;

