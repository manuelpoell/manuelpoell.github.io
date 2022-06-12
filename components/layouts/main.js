import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Manuel Pöll, Web-Entwickler" />
        <meta name="author" content="Manuel Pöll" />
        <meta property="og:site_name" content="Manuel Pöll" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Manuel Pöll" />
        <meta property="og:description" content="Manuel Pöll, Web-Entwickler" />
        <meta property="og:url" content="https://manuelpoell.at/" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favicon-96x96.png"
        />
        <title>Manuel Pöll - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
