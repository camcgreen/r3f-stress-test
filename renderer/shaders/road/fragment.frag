#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
varying vec2 vPosition;

void main() {
  gl_FragColor = vec4(1.0, 1.0, 1.0, 0.025);
}