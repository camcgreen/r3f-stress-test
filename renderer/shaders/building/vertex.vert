precision mediump float;

varying vec2 vUv; // Pass the uv coords to the fragment shader
varying vec2 vPosition;

void main() {
  vUv = uv;
  vPosition = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
