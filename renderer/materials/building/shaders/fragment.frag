#ifdef GL_ES
precision mediump float;
#endif

uniform float frequency;
uniform float spacing;
varying vec2 vUv;
varying vec2 vPosition;

void main() {
  float stripes = frequency * vUv.y;
  float rounded = floor(stripes);

  if(mod(rounded, spacing) == 0.0) {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  } else {
    discard;
  }

  gl_FragColor = vec4(1.0, 1.0, 1.0, clamp(vPosition.y + 1.0, 0.0, 0.75));
}