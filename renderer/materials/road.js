import { extend } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import fragmentShader from "../shaders/road/fragment.frag"
import vertexShader from "../shaders/road/vertex.vert"

export const RoadMaterial = shaderMaterial({}, vertexShader, fragmentShader)
extend({ RoadMaterial })
