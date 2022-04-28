import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Tic Tac Toe">
      <Container>
        <Title>
          Tic Tac Toe <Badge>2022</Badge>
        </Title>
        <P>
          Meine Lösung zur Tic Tac Toe Challenge von{' '}
          <Link href="https://www.frontendmentor.io/" target="_blank">
            Frontend Mentor
          </Link>
          . Ziel der Challenge: Ein funktionsfähiges Tic Tac Toe - Spiel
          möglichst genau nach dem bereitgestellten Responsive Design für
          Desktop, Tablets und Smartphones umzusetzen.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://manuelpoell.github.io/tic-tac-toe/"
              target="_blank"
            >
              https://manuelpoell.github.io/tic-tac-toe/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link
              href="https://github.com/manuelpoell/tic-tac-toe"
              target="_blank"
            >
              https://github.com/manuelpoell/tic-tac-toe{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Frontend Mentor</Meta>
            <Link
              href="https://www.frontendmentor.io/solutions/tic-tac-toe-using-reactnextjs-Hy4aacES5"
              target="_blank"
            >
              https://www.frontendmentor.io/solutions/tic-tac-toe-using-reactnextjs-Hy4aacES5{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React/NextJS, Styled Components, Github Pages</span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/projects/tic-tac-toe-menu.png"
          alt="Advice Generator"
        />
        <ProjectImage
          src="/images/projects/tic-tac-toe-game.png"
          alt="Advice Generator"
        />
        <ProjectImage
          src="/images/projects/tic-tac-toe-endscreen.png"
          alt="Advice Generator"
        />
      </Container>
    </Layout>
  )
}

export default Project
