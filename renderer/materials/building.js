import { extend } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import fragmentShader from "../shaders/building/fragment.frag"
import vertexShader from "../shaders/building/vertex.vert"

export const BuildingMaterial = shaderMaterial(
  {
    frequency: null,
    spacing: null,
  },
  vertexShader,
  fragmentShader,
)
extend({ BuildingMaterial })
