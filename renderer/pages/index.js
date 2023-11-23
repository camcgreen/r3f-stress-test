import * as THREE from "three"
import React, { useRef, useState } from "react"
import { Canvas, useFrame, extend } from "@react-three/fiber"
import {
  shaderMaterial,
  CameraControls,
  Stats,
  Edges,
  useGLTF,
  Text,
} from "@react-three/drei"
import { BuildingMaterial } from "../materials/building"
import { RoadMaterial } from "../materials/road"
import { getRandomInt } from "../../utils/helpers"
import styles from "../styles/Home.module.css"

function City(props) {
  const { nodes } = useGLTF("/models/city.glb")
  console.log(nodes)
  return (
    <group {...props} dispose={null}>
      {nodes.Scene.children.map((child) => {
        const { name } = child
        switch (true) {
          case name.includes("building"):
            return (
              <mesh
                castShadow
                receiveShadow
                geometry={child.geometry}
                position={child.position}
                rotation={child.rotation}
                scale={child.scale}
              >
                <buildingMaterial
                  transparent={true}
                  side={THREE.DoubleSide}
                  // frequency={Math.random() * 200}
                  frequency={400}
                  spacing={10.0}
                />
              </mesh>
            )
          case name.includes("road"):
            return (
              <mesh
                castShadow
                receiveShadow
                geometry={child.geometry}
                position={child.position}
                rotation={child.rotation}
                scale={child.scale}
              >
                <roadMaterial transparent={true} />
              </mesh>
            )
          case name.includes("text"):
            const formattedName = name.split("-")[1].replace("_", " ") // converts text-Korea_Town to Korea Town
            return (
              <Text
                fontSize={0.25}
                color="#717175"
                // anchorX="center"
                // anchorY="middle"
                position={child.position}
                rotation={child.rotation}
              >
                {formattedName}
              </Text>
            )
            break
          default:
            break
        }
      })}
    </group>
  )
}

useGLTF.preload("/models/city.glb")

export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas dpr={[1, 2]}>
        <ambientLight intensity={1} />
        <CameraControls />
        <City />
        <Stats />
      </Canvas>
    </div>
  )
}
