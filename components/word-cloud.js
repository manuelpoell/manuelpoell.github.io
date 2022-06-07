import * as THREE from 'three'
import styled from '@emotion/styled'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { OrbitControls, Text } from '@react-three/drei'
import { getWord } from '../lib/word-list'

const CloudContainer = styled.div`
  width: 100%;
  height: 300px;
`

const Word = ({ children, ...props }) => {
  const color = new THREE.Color()
  const fontProps = {
    fontSize: 4,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false
  }
  const ref = useRef()

  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion)
    ref.current.material.color.lerp(color.set('#8C92AC'), 0.1)
  })

  return (
    <Text ref={ref} {...props} {...fontProps}>
      {children}
    </Text>
  )
}

const Cloud = ({ count = 4, radius = 20 }) => {
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          getWord(temp.length)
        ])
      }
    }
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos}>
      {word}
    </Word>
  ))
}

const WordCloud = () => {
  return (
    <CloudContainer>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <Cloud count={6} radius={21} />
        <OrbitControls autoRotate={true} enableZoom={false} />
      </Canvas>
    </CloudContainer>
  )
}

export default WordCloud
