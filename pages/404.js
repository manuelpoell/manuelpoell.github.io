import NextLink from 'next/link'
import {
  Box,
  Heading,
  Container,
  Text,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container mt={10}>
      <Heading as="h1">Not Found</Heading>
      <Text>Diese Seite konnte nicht gefunden werden.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Zur Startseite</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
