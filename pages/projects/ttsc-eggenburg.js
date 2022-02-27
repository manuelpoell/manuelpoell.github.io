import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Homepage TTSC Sparkasse Eggenburg">
      <Container>
        <Title>
          Homepage TTSC Sparkasse Eggenburg <Badge>2021</Badge>
        </Title>
        <P>
          Eine Homepage für den Tischtennis-Verein TTSC Sparkasse Eggenburg.
          Umgesetzt mit Wordpress.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.tt-eggenburg.at/" target="_blank">
              https://www.tt-eggenburg.at/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Wordpress</span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/projects/ttsc-eggenburg.png"
          alt="TTSC Sparkasse Eggenburg"
        />
      </Container>
    </Layout>
  )
}

export default Project
