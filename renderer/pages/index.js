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
import { getRandomInt } from "../../utils/helpers"
import styles from "../styles/Home.module.css"

const MyShaderMaterial = shaderMaterial(
  {
    frequency: null,
    spacing: null,
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
        spacing={16.0}
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
          frequency={250.0}
          spacing={4.0}
        />
      </mesh>
    </group>
  )
}

function City(props) {
  const { nodes } = useGLTF("/models/building-collection.glb")
  return (
    <group {...props} dispose={null}>
      {nodes.Scene.children.map((child) => {
        console.log(child)
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={child.geometry}
            position={child.position}
            rotation={child.rotation}
            scale={child.scale}
          >
            <myShaderMaterial
              transparent={true}
              side={THREE.DoubleSide}
              frequency={Math.random() * 200}
              spacing={4.0}
            />
          </mesh>
        )
      })}
    </group>
  )
}

useGLTF.preload("/models/building1.glb")

export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas dpr={[1, 2]}>
        <ambientLight intensity={1} />
        <CameraControls />
        {/* <Box position={[0, 0, 0]} scale={[2, 2, 2]} />
        <Building position={[4, 0, 0]} scale={[1, 1, 1]} /> */}
        <City />
        <Stats />
      </Canvas>
    </div>
  )
}
