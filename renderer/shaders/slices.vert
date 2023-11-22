precision mediump float;

varying vec2 vUv; // Pass the uv coords to the fragment shader
varying vec2 vPosition;
varying vec3 vWorldPosition;

void main() {
  vUv = uv;
  vPosition = position.xy;
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
