import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  Link,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }} mt={10}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Manuel Pöll
            </Heading>
            <p>Web Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile-picture-placeholder.jpg"
              alt="Profile Picture"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Paragraph>
            Full Stack Web-Entwickler mit Fokus auf Frontend. Angular ist mein
            bevorzugtes Framework, zudem habe ich auch erste Kenntnisse in
            React/NextJS gesammelt. Backend-Projekte setze ich am liebsten mit
            NodeJS oder NestJS um.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Meine Projekte
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Lebenslauf
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Geboren in Horn, Niederösterreich
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            HTL Hollabrunn, Abteilung für Elektronik und technische Informatik,
            Maturaabschluss mit Diplomarbeit
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Zivildienst im Landesklinikum Horn
          </BioSection>
          <BioSection>
            <BioYear>seit 2019</BioYear>
            Web-Entwickler bei Austrosoft Weiss Datenverarbeitung GmbH
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Kontakt
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/manuelpoell" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @manuelpoell
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/manuel-p%C3%B6ll-9281b5233"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @Manuel Pöll
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
