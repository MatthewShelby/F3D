import './style.css';
// import './node_modules/three/build/three.js';
import * as THREE from 'three';
// import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


//  TO LEARN: Texture MApping



const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });
renderer.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild(renderer.domElement);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 30;
//camera.position.setZ(30);
const spaceTextureb1 = new THREE.TextureLoader().load('../../m1.jpg');

const geometryC = new THREE.BoxGeometry(10, 10, 10);
const materialC = new THREE.MeshBasicMaterial({ map: spaceTextureb1 });
const cube = new THREE.Mesh(geometryC, materialC);
cube.position.x = 30;
cube.position.y = 5;
//scene.add(cube);
const geometry = new THREE.TorusGeometry(10, 3, 10, 100);
// const material = new THREE.MeshBasicMaterial({ color: 0xff4400, wireframe: true });
const material = new THREE.MeshStandardMaterial({ color: 0xff4400 });
const torus = new THREE.Mesh(geometry, material);
torus.position.y = 20;
//scene.add(torus);
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper);

const geometryM = new THREE.SphereGeometry(13, 32, 32, 0, Math.PI * 2, 0, Math.PI);
console.info(geometryM.parameters)

const moonT = new THREE.TextureLoader().load('../../Moon.jpg');
const Bump = new THREE.TextureLoader().load('../../M8.jpg');

const materialM = new THREE.MeshMatcapMaterial({ map: moonT, normalMap: Bump });
//const materialM = new THREE.MeshToonMaterial({ map: moonT, normalMap: Bump }); 3.141592653589793
materialM.bumpScale = 0.7;
const sphere = new THREE.Mesh(geometryM, materialM);
sphere.position.x -= 15;
sphere.position.y += 15;
scene.add(sphere);





//const controls = new OrbitControls(camera, renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 20, 100);
controls.update();



function animate() {
  requestAnimationFrame(animate);
  //torus.rotation.x += 0.006;
  //torus.rotation.y += 0.006;
  sphere.rotation.y += 0.002;
  sphere.rotation.x += 0.0001;
  renderer.render(scene, camera);
}


animate();



function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300));
  star.position.set(x, y, z)
  scene.add(star);
}

Array(400).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('../../space-background.webp');
scene.background = spaceTexture;










// // import './style.css'
// // import javascriptLogo from './javascript.svg'
// // import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
