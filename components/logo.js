import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

// Best way to do CSS for React, way better than doing style={{ fontWeight: '20px' }}
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover {
    transform: scale(1.05, 1.05);
    transition-duration: 300ms;
    cursor: pointer;
  }
`

const Logo = () => {
  // -${useColorModeValue('', '-dark')} doens't work rn
  const footPrintImg = `/images/icicles.png`

  return (
    <Link href="/" style={{ height: 0 }}>
      <LogoBox>
        <Image src={footPrintImg} width={20} height={20} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontWeight="bold"
          ml={3}
          letterSpacing="tighter"
        >
          Joseph Camyre
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
