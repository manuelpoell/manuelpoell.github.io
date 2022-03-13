import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbTTSCEggenburg from '../public/images/projects/ttsc-eggenburg.png'
import thumbAdviceGenerator from '../public/images/projects/advice-generator.png'

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
            <ProjectGridItem
              id="advice-generator"
              title="Advice Generator"
              thumbnail={thumbAdviceGenerator}
            >
              Advice Generator Challenge von Frontend Mentor
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
