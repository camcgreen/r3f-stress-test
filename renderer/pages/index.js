import * as THREE from "three"
import React, { useRef, useState } from "react"
import { Canvas, useFrame, extend } from "@react-three/fiber"
import { shaderMaterial, CameraControls, Stats, Edges } from "@react-three/drei"
import fragmentShader from "../shaders/slices.frag"
import vertexShader from "../shaders/slices.vert"
import styles from "../styles/Home.module.css"

const MyShaderMaterial = shaderMaterial({}, vertexShader, fragmentShader)
extend({ MyShaderMaterial })

function Box({ position, scale }) {
  const resolution = { value: { x: window.innerWidth, y: window.innerHeight } }
  return (
    <mesh position={position} scale={scale}>
      <boxGeometry />
      {/* <planeGeometry /> */}
      <myShaderMaterial
        transparent={true}
        u_resolution={resolution}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas>
        <CameraControls />
        <Box position={[0, 0, 0]} scale={[2, 2, 2]} />
        <Stats />
      </Canvas>
    </div>
  )
}
