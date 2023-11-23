#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
varying vec2 vPosition;

void main() {
  gl_FragColor = vec4(0.8, 0.8, 0.95, 0.025);
}