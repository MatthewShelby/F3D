import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r99/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

const canvas = document.getElementById('bg');
const scene = new THREE.Scene();




//#region Floor
const geometryC = new THREE.BoxGeometry(40, 1, 30);

const FloorTexture = new THREE.TextureLoader().load('./textures/Floor/Floor1.jpg');
FloorTexture.wrapS = THREE.RepeatWrapping;
FloorTexture.wrapT = THREE.RepeatWrapping;
FloorTexture.repeat.set(4, 4);
const materialC = new THREE.MeshBasicMaterial({ map: FloorTexture });
const materialD = new THREE.MeshBasicMaterial({ color: 0xfff444 });
const FloorBox = new THREE.Mesh(geometryC, materialC);
//FloorBox.position.set(20, 0.5, 15);
FloorBox.position.set(0, 0, 0);
scene.add(FloorBox);





//#endregion





const sizes = {
      width: window.innerWidth,
      heigth: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.heigth, 0.1, 1000);
camera.position.set(0, 30, 0);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
      canvas: canvas
});
renderer.setSize(sizes.width, sizes.heigth);
renderer.setPixelRatio(window.devicePixelRatio);

//#region Ambient and Orbit


const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 30, 50);
controls.update();
const ambientLight = new THREE.AmbientLight(0xffffff);

const gridHelper = new THREE.GridHelper(100, 100);
scene.add(ambientLight, gridHelper);

//#endregion
function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
}

animate();


