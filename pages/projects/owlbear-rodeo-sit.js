import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="SIT">
      <Container>
        <Title>
          SIT <Badge>2023</Badge>
        </Title>
        <P>
          <Link href="https://www.owlbear.app/" target="_blank">
            Owlbear Rodeo
          </Link>{' '}
          ist ein Online Tabletop Tool. Die SIT Extension wurde für das
          rundenbasierte Kampfsystem in &quot;Dungeons and Dragons&quot;
          entworfen. Durch die eingeblendete Sidebar ist für jeden Spieler die
          Reihenfolge im Kampf ersichtlich. Zusätzlich können temporäre
          Spieleffekte eingetragen werden, welche bei Ablauf eine Notification
          auslösen.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Owlbear Rodeo</Meta>
            <Link href="https://www.owlbear.app/" target="_blank">
              https://www.owlbear.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/manuelpoell/sit" target="_blank">
              https://github.com/manuelpoell/sit <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Angular</span>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/sit-1.png" alt="SIT Screen" />
        <ProjectImage src="/images/projects/sit-2.png" alt="SIT Screen" />
        <ProjectImage src="/images/projects/sit-3.png" alt="SIT Screen" />
      </Container>
    </Layout>
  )
}

export default Project
