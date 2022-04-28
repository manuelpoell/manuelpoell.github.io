import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Planets Facts">
      <Container>
        <Title>
          Planets Facts <Badge>2022</Badge>
        </Title>
        <P>
          Meine Lösung zur Planets Facts Challenge von{' '}
          <Link href="https://www.frontendmentor.io/" target="_blank">
            Frontend Mentor
          </Link>
          . Die Aufgabe war es, das bereitgestellte Responsive Design für
          jeweils Desktop, Tablets und Smartphone Screens umzusetzen. Über die
          Navigationsleiste soll der gewünschte Planet ausgewählt und mittels
          Buttons die Ansicht gewechselt werden können. Die dargestellten
          Informationen wurden von{' '}
          <Link href="https://www.wikipedia.org/" target="_blank">
            Wikipedia
          </Link>{' '}
          bezogen.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://manuelpoell.github.io/planets-facts/"
              target="_blank"
            >
              https://manuelpoell.github.io/planets-facts/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link
              href="https://github.com/manuelpoell/planets-facts"
              target="_blank"
            >
              https://github.com/manuelpoell/planets-facts{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Frontend Mentor</Meta>
            <Link
              href="https://www.frontendmentor.io/solutions/angular-planets-facts-site-413aGZmjI"
              target="_blank"
            >
              https://www.frontendmentor.io/solutions/angular-planets-facts-site-413aGZmjI{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Angular, Github Pages</span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/projects/planets-facts-earth-1.png"
          alt="Planets Facts"
        />
        <ProjectImage
          src="/images/projects/planets-facts-earth-2.png"
          alt="Planets Facts"
        />
        <ProjectImage
          src="/images/projects/planets-facts-earth-3.png"
          alt="Planets Facts"
        />
      </Container>
    </Layout>
  )
}

export default Project
