import { extend } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import fragmentShader from "./shaders/fragment.frag"
import vertexShader from "./shaders/vertex.vert"

export const RoadMaterial = shaderMaterial({}, vertexShader, fragmentShader)
extend({ RoadMaterial })
