<template>
  <div class="relative w-full h-full overflow-hidden rounded-2xl" ref="container">
    <canvas ref="canvas" class="absolute inset-0 w-full h-full z-10"></canvas>
    <!-- Hidden fallback image for layout and accessibility -->
    <NuxtImg 
      :src="src" 
      :alt="alt" 
      :width="width" 
      :height="height"
      sizes="sm:100vw md:50vw lg:400px"
      preload
      fetchpriority="high"
      class="w-full h-auto object-cover opacity-0 pointer-events-none" 
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import gsap from 'gsap';

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  width: { type: [String, Number] },
  height: { type: [String, Number] }
});

const container = ref(null);
const canvas = ref(null);

let scene, camera, renderer, material, mesh;
let animationId;

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform sampler2D tDiffuse;
uniform float uHover;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  
  // Smooth zoom effect
  float scale = 1.0 - (uHover * 0.1);
  uv = (uv - 0.5) * scale + 0.5;
  
  gl_FragColor = texture2D(tDiffuse, uv);
}
`;

const initThree = () => {
  if (!container.value || !canvas.value) return;

  scene = new THREE.Scene();
  
  const { clientWidth, clientHeight } = container.value;
  camera = new THREE.OrthographicCamera(
    clientWidth / -2, clientWidth / 2,
    clientHeight / 2, clientHeight / -2,
    1, 1000
  );
  camera.position.z = 1;

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: true
  });
  renderer.setSize(clientWidth, clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Load texture
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(props.src);

  const geometry = new THREE.PlaneGeometry(clientWidth, clientHeight);
  
  material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      tDiffuse: { value: texture },
      uHover: { value: 0.0 },
      uTime: { value: 0.0 }
    },
    transparent: true
  });

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Resize handling
  window.addEventListener('resize', onResize);
  
  // Hover events
  container.value.addEventListener('mouseenter', onMouseEnter);
  container.value.addEventListener('mouseleave', onMouseLeave);

  animate();
};

const onMouseEnter = () => {
  if(!material) return;
  gsap.to(material.uniforms.uHover, {
    value: 1.0,
    duration: 0.8,
    ease: "power2.out"
  });
};

const onMouseLeave = () => {
  if(!material) return;
  gsap.to(material.uniforms.uHover, {
    value: 0.0,
    duration: 0.8,
    ease: "power2.out"
  });
};

const onResize = () => {
  if (!container.value || !camera || !renderer) return;
  const { clientWidth, clientHeight } = container.value;
  
  camera.left = clientWidth / -2;
  camera.right = clientWidth / 2;
  camera.top = clientHeight / 2;
  camera.bottom = clientHeight / -2;
  camera.updateProjectionMatrix();
  
  renderer.setSize(clientWidth, clientHeight);
  
  if (mesh) {
    mesh.geometry.dispose();
    mesh.geometry = new THREE.PlaneGeometry(clientWidth, clientHeight);
  }
};

const clock = new THREE.Clock();

const animate = () => {
  if (!scene || !camera || !renderer) return;
  
  if (material) {
    material.uniforms.uTime.value = clock.getElapsedTime();
  }
  
  renderer.render(scene, camera);
  animationId = requestAnimationFrame(animate);
};

onMounted(() => {
  setTimeout(() => {
    requestAnimationFrame(() => {
      initThree();
    });
  }, 100);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
  if (container.value) {
    container.value.removeEventListener('mouseenter', onMouseEnter);
    container.value.removeEventListener('mouseleave', onMouseLeave);
  }
  cancelAnimationFrame(animationId);
  if (renderer) renderer.dispose();
  if (scene) scene.clear();
  if (material) material.dispose();
  if (mesh && mesh.geometry) mesh.geometry.dispose();
});
</script>

<style scoped>
</style>
