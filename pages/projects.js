import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbTTSCEggenburg from '../public/images/projects/ttsc-eggenburg-1.png'
import thumbAdviceGenerator from '../public/images/projects/advice-generator-1.png'
import thumbPlanetsFacts from '../public/images/projects/planets-facts-earth-1.png'
import thumbTicTacToe from '../public/images/projects/tic-tac-toe-menu.png'
import thumbSIT from '../public/images/projects/sit-2.png'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} my={10}>
          Meine Projekte
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <ProjectGridItem
              id="owlbear-rodeo-sit"
              title="SIT"
              thumbnail={thumbSIT}
            >
              Initiative Tracker Extension für Owlbear Rodeo
            </ProjectGridItem>
          </Section>
          <Section delay={0.2}>
            <ProjectGridItem
              id="tic-tac-toe"
              title="Tic Tac Toe"
              thumbnail={thumbTicTacToe}
            >
              Tic Tac Toe Challenge von Frontend Mentor
            </ProjectGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectGridItem
              id="planets-facts"
              title="Planets Facts"
              thumbnail={thumbPlanetsFacts}
            >
              Planets Facts Challenge von Frontend Mentor
            </ProjectGridItem>
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem
              id="advice-generator"
              title="Advice Generator"
              thumbnail={thumbAdviceGenerator}
            >
              Advice Generator Challenge von Frontend Mentor
            </ProjectGridItem>
          </Section>
          <Section delay={0.5}>
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
