import * as THREE from "three"
import React, { useRef, useState } from "react"
import { Canvas, useFrame, extend } from "@react-three/fiber"
import {
  shaderMaterial,
  CameraControls,
  Stats,
  Edges,
  useGLTF,
} from "@react-three/drei"
import fragmentShader from "../shaders/slices.frag"
import vertexShader from "../shaders/slices.vert"
import styles from "../styles/Home.module.css"

const MyShaderMaterial = shaderMaterial(
  {
    frequency: null,
  },
  vertexShader,
  fragmentShader,
)
extend({ MyShaderMaterial })

function Box(props) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <myShaderMaterial
        transparent={true}
        side={THREE.DoubleSide}
        frequency={40.0}
      />
    </mesh>
  )
}

function Building(props) {
  const { nodes, materials } = useGLTF("/models/building1.glb")
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry}>
        <myShaderMaterial
          transparent={true}
          side={THREE.DoubleSide}
          frequency={200.0}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload("/models/building1.glb")

export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas>
        <ambientLight intensity={1} />
        <CameraControls />
        <Box position={[0, 0, 0]} scale={[2, 2, 2]} />
        <Building position={[4, 0, 0]} scale={[1, 1, 1]} />
        <Stats />
      </Canvas>
    </div>
  )
}
