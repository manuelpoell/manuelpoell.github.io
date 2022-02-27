import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CgPacman } from 'react-icons/cg'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  svg {
    transition: 200ms ease;
    margin-right: 5px;
  }

  &:hover svg {
    transform: scale(1.5);
  }
`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <CgPacman />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
          >
            Manuel Pöll
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
