import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Advice Generator">
      <Container>
        <Title>
          Advice Generator <Badge>2022</Badge>
        </Title>
        <P>
          Meine Lösung zur Advice Generator Challenge von{' '}
          <Link href="https://www.frontendmentor.io/" target="_blank">
            Frontend Mentor
          </Link>
          . Die Aufgabe war es, das bereitgestellte Design umzusetzen und eine
          funktionsfähige Web-Applikation nachzubauen. Die dargestellen Texte
          werden nach Klick auf den Button von der{' '}
          <Link href="https://api.adviceslip.com/" target="_blank">
            Advice Slip JSON API
          </Link>{' '}
          abgeholt.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://manuelpoell.github.io/advice-generator/"
              target="_blank"
            >
              https://manuelpoell.github.io/advice-generator/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link
              href="https://github.com/manuelpoell/advice-generator"
              target="_blank"
            >
              https://github.com/manuelpoell/advice-generator{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Frontend Mentor</Meta>
            <Link
              href="https://www.frontendmentor.io/solutions/reactnextjs-advicegenerator-_Ep1R5NKP"
              target="_blank"
            >
              https://www.frontendmentor.io/solutions/reactnextjs-advicegenerator-_Ep1R5NKP{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React/NextJS, Styled Components, Github Pages</span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/projects/advice-generator.png"
          alt="Advice Generator"
        />
      </Container>
    </Layout>
  )
}

export default Project
