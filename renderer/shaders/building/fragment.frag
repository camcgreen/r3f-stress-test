#ifdef GL_ES
precision mediump float;
#endif

uniform float frequency;
uniform float spacing;
varying vec2 vUv;
varying vec2 vPosition;
varying vec3 vWorldPosition;

void main() {
  // float frequency = 40.0;
  float stripes = frequency * vUv.y;
  float rounded = floor(stripes);

  if(mod(rounded, spacing) == 0.0) {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  } else {
    discard;
  }

  // if(vWorldPosition.y == 1.0) {
  //   discard;
  // }

  // if(vWorldPosition.y == -1.0) {
  //   discard;
  // }

  // gl_FragColor = vec4(1.0, 1.0, 1.0, clamp(vWorldPosition.y + 1.0, 0.0, 0.75));
  gl_FragColor = vec4(1.0, 1.0, 1.0, clamp(vPosition.y + 1.0, 0.0, 0.75));
}