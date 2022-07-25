import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


//#region Init SCENE


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });
renderer.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild(renderer.domElement);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//camera.position.z = 30;



const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 30, 100);
controls.update();
const ambientLight = new THREE.AmbientLight(0xffffff);

const gridHelper = new THREE.GridHelper(100, 100);
scene.add(ambientLight, gridHelper);


//#endregion



//#region Floor
const geometryC = new THREE.BoxGeometry(40, 1, 30);

const FloorTexture = new THREE.TextureLoader().load('./textures/Floor/Floor1.jpg');
FloorTexture.wrapS = THREE.RepeatWrapping;
FloorTexture.wrapT = THREE.RepeatWrapping;
FloorTexture.repeat.set(4, 4);
const materialC = new THREE.MeshBasicMaterial({ map: FloorTexture });
const FloorBox = new THREE.Mesh(geometryC, materialC);
FloorBox.position.set(20, 0.5, 15);
scene.add(FloorBox);
//#endregion



//#region WallS
const WallTexture = new THREE.TextureLoader().load('./textures/Wall/Wall1.jpg');
WallTexture.wrapS = THREE.RepeatWrapping;
WallTexture.wrapT = THREE.RepeatWrapping;
WallTexture.repeat.set(4, 4);
const WallMaterial = new THREE.MeshBasicMaterial({ map: WallTexture });

//#region Wall 1
const geometryW1 = new THREE.BoxGeometry(0.3, 3, 30);
const WallBox1 = new THREE.Mesh(geometryW1, WallMaterial);
WallBox1.position.set(0, 4, 30);
scene.add(WallBox1);
//#endregion

//#region Wall 2
const geometryW2 = new THREE.BoxGeometry(40, 1, 30);
const WallBox2 = new THREE.Mesh(geometryW2, WallMaterial);
WallBox1.position.set(20, 0.5, 15);
scene.add(WallBox2);
//#endregion

//#region Wall 3
const geometryW3 = new THREE.BoxGeometry(40, 1, 30);
const WallBox3 = new THREE.Mesh(geometryW3, WallMaterial);
WallBox1.position.set(20, 0.5, 15);
scene.add(WallBox3);
//#endregion

//#endregion

























function animate() {
      requestAnimationFrame(animate);
      //torus.rotation.x += 0.006;
      //torus.rotation.y += 0.006;
      // cube.rotation.y += 0.002;
      // cube.rotation.x += 0.0001;
      renderer.render(scene, camera);
}


animate();