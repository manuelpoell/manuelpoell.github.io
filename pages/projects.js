import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbTTSCEggenburg from '../public/images/projects/ttsc-eggenburg.png'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} my={10}>
          Meine Projekte
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              id="ttsc-eggenburg"
              title="Homepage TTSC Sparkasse Eggenburg"
              thumbnail={thumbTTSCEggenburg}
            >
              Homepage für den Tischtennis-Verein Eggenburg
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
