//import './style.css';
// import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r99/three.module.js';
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js';

import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js';
// import { DRACOLoader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/DRACOLoader.js';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// 

//import { OrbitControls } from 'https://unpkg.com/three@<0.121.1>/examples/jsm/controls/OrbitControls.js';


//#region Init SCENE


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });
renderer.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild(renderer.domElement);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//camera.position.z = 30;


camera.position.set(10, 3, 12);
// camera.position.set(12, 3, 25);
//camera.up.set(0, 0, 0); 
//camera.lookAt(20, 2, 0);

// const controls = new OrbitControls(camera, renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
const ambientLight = new THREE.AmbientLight(0xDDDDDD);

const gridHelper = new THREE.GridHelper(100, 100);
gridHelper.position.set(25, 0, 0);

//scene.add(ambientLight, gridHelper);
//scene.add(gridHelper);


//#endregion



//#region Floor
const geometryC = new THREE.BoxGeometry(40, 1, 30);

const FloorTexture = new THREE.TextureLoader().load('./textures/Floor/Floor1.jpg');
FloorTexture.wrapS = THREE.RepeatWrapping;
FloorTexture.wrapT = THREE.RepeatWrapping;
FloorTexture.repeat.set(20, 15);
const materialC = new THREE.MeshBasicMaterial({ map: FloorTexture });
const FloorBox = new THREE.Mesh(geometryC, materialC);
FloorBox.position.set(20, 0.5, 15);
scene.add(FloorBox);
//#endregion



//#region addLight
function addLight(x, y, z) {

      const geometryX = new THREE.BoxGeometry(0.1, 0.1, 0.1);
      const materialX = new THREE.MeshBasicMaterial({ color: 0xe9f026 });
      const cube = new THREE.Mesh(geometryX, materialX);
      //cube.position.set(5, 3.5, 3);
      cube.position.set(x, y + 0.2, z);

      //scene.add(cube);

      const light0 = new THREE.PointLight(0xffffff, 0.3, 100);
      light0.position.set(x, y, z);
      scene.add(light0);
}
function addLight2(x, y, z) {

      const geometryX = new THREE.BoxGeometry(0.1, 0.1, 0.1);
      const materialX = new THREE.MeshBasicMaterial({ color: 0xe9f026 });
      const cube = new THREE.Mesh(geometryX, materialX);
      //cube.position.set(5, 3.5, 3);
      cube.position.set(x, y + 0.2, z);

      //scene.add(cube);

      const light1 = new THREE.PointLight(0xffffff, 0.3, 100);
      light1.position.set(x, y, z);
      scene.add(light1);
}
//#endregion


//#region WallS
const WallTexture = new THREE.TextureLoader().load('./textures/Wall/Wall1.jpg');
WallTexture.wrapS = THREE.RepeatWrapping;
WallTexture.wrapT = THREE.RepeatWrapping;
WallTexture.repeat.set(30, 2);
const WallMaterial = new THREE.MeshBasicMaterial({ map: WallTexture });

//#region Wall 1
const geometryW1 = new THREE.BoxGeometry(0.2, 3, 30);

const WallBox1 = new THREE.Mesh(geometryW1, WallMaterial);

WallBox1.position.set(0.1, 2.5, 15);

scene.add(WallBox1);

//#endregion

//#region Wall 2.

const geometryW2 = new THREE.BoxGeometry(40, 3, 0.2);
const WallBox2 = new THREE.Mesh(geometryW2, WallMaterial);
WallBox2.position.set(20, 2.5, 0);
scene.add(WallBox2);
//#endregion

//#region Wall 3

const geometryW3 = new THREE.BoxGeometry(0.2, 3, 30);
const WallBox3 = new THREE.Mesh(geometryW3, WallMaterial);
WallBox3.position.set(39.9, 2.5, 15);
scene.add(WallBox3);
//#endregion

//#endregion


//#region Funitures
//#region Chairs


const glftLoader = new GLTFLoader();
glftLoader.load('./Objects/furnitures/chair2.gltf', (gltfScene) => {
      gltfScene.scene.position.set(12, 1.01, 10);
      const sf = 0.6;
      gltfScene.scene.scale.set(sf, sf, sf);

      gltfScene.scene.rotation.y = Math.PI / 0.9;
      //console.info(gltfScene.scene);

      const Bump = new THREE.TextureLoader().load('./Objects/furnitures/pnm1.jpg');

      const materialForChair = new THREE.MeshMatcapMaterial({ color: 0xd5d7e3, normalMap: Bump });

      for (let j = 0; j < gltfScene.scene.children.length; j++) {
            gltfScene.scene.children[j].material = (materialForChair);
      }

      scene.add(gltfScene.scene);

});

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(14, 4, 11);
//scene.add(pointLight)
const geometryN = new THREE.BoxGeometry(0.1, 0.1, 0.1);
const materialN = new THREE.MeshBasicMaterial({ color: 0xeb4034 });
const cubeN = new THREE.Mesh(geometryN, materialN);
//cube.position.set(5, 3.5, 3);
cubeN.position.set(22, 3.3, 4.5);
//scene.add(cubeN);

const spotLight = new THREE.PointLight(0xffffff, 0.4);
spotLight.position.set(22, 3.2, 4.5);
addLight2(22.3, 3.1, 4.5);

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 100;
spotLight.shadow.mapSize.height = 100;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.add(spotLight);


const glftLoader2 = new GLTFLoader();
glftLoader2.load('./Objects/furnitures/chair1.gltf', (gltfScene) => {
      gltfScene.scene.position.set(14, 1.01, 10);
      //console.info(gltfScene.scene.children);

      const Bump = new THREE.TextureLoader().load('./Objects/furnitures/pnm1.jpg');

      const materialForChair = new THREE.MeshMatcapMaterial({ color: 0xd5d7e3, normalMap: Bump });

      for (let j = 0; j < gltfScene.scene.children.length; j++) {
            //gltfScene.scene.children[j].material = (materialForChair);
      }
      scene.add(gltfScene.scene);

});




//#endregion

//#region Tables
//#region Table1

const glftLoader3 = new GLTFLoader();
glftLoader3.load('./Objects/furnitures/Tables/Table1/Table1.gltf', (gltfScene) => {
      gltfScene.scene.position.set(12, 1.01, 11);
      gltfScene.scene.scale.set(10, 10, 10);
      console.info(gltfScene.scene.children);
      scene.add(gltfScene.scene);
});

//#endregion
//#region Table2

//#endregion
//#endregion
//#endregion




//#region Boothes
const glftLoader4 = new GLTFLoader();
glftLoader4.load('./Objects/Boothes/GameFi/GameFi booth.gltf', (gltfScene) => {
      gltfScene.scene.position.set(5, 1.01, 5);
      gltfScene.scene.rotateY(3.14159);
      gltfScene.scene.scale.set(10, 10, 10);
      scene.add(gltfScene.scene);
});
addLight(5, 4, 3);
addLight(5, 4, 8);
addLight(4, 1, 10);
// addLight(9, 4, 3);
// addLight(9, 4, 8);
//addLight(9, 3, 5);
// light0.position.set(5, 3, 8);
// scene.add(light0);
// light0.position.set(9, 3, 5);
// scene.add(light0);
// light0.position.set(9, 3, 8);
// scene.add(light0);

//scene.add(light1);

const glftLoader5 = new GLTFLoader();
glftLoader5.load('./Objects/Boothes/Tornado/Tornado Booth.gltf', (gltfScene) => {
      gltfScene.scene.position.set(15, 1.01, 5);
      gltfScene.scene.scale.set(10, 10, 10);
      scene.add(gltfScene.scene);
});

addLight2(16, 3.6, 2);
addLight2(16, 3.6, 4);
addLight2(16, 3.6, 6);
addLight2(19, 3.6, 2);
addLight2(19, 3.6, 4);
addLight2(19, 3.6, 6);
addLight2(17.5, 5, 3);
addLight2(17.5, 2, 8);
addLight2(17.5, 1.5, 5);
//#region Spotlight
const geometryZ = new THREE.BoxGeometry(0.1, 0.1, 0.1);
const materialZ = new THREE.MeshBasicMaterial({ color: 0xe9f026 });
const cube2 = new THREE.Mesh(geometryZ, materialZ);
//cube.position.set(5, 3.5, 3);
//cube2.position.set(17, 1, 5);

scene.add(cube2);
const spotLight2 = new THREE.SpotLight(0xffffff, 0.4);
spotLight2.position.set(17, 15, 30);
spotLight2.target = cube2;
camera.target = cube2;


spotLight2.castShadow = true;

spotLight2.shadow.mapSize.width = 512;
spotLight2.shadow.mapSize.height = 512;

spotLight2.shadow.camera.near = 5;
spotLight2.shadow.camera.far = 100;
spotLight2.shadow.camera.fov = 30;

//scene.add(spotLight2);
//#endregion

const glftLoader6 = new GLTFLoader();
glftLoader6.load('./Objects/Boothes/Irancell Booth/Irancell Booth.gltf', (gltfScene) => {
      gltfScene.scene.position.set(13, 1.01, 4.5);
      gltfScene.scene.scale.set(11, 11, 11);
      scene.add(gltfScene.scene);
});

//#endregion

//#region Hologram
// const glftLoader7 = new GLTFLoader();
// var body0;
// glftLoader7.load('./Objects/Body/google poly.gltf', function (gltf) {
//       body0 = gltf.scene;
//       body0.position.set(25.1, 1.31, 3.5);
//       body0.scale.set(0.7, 0.7, 0.7);
//       scene.add(body0);


// });
const glftLoader9 = new GLTFLoader();
var body1;
var hasBody1 = false;
glftLoader9.load('./Objects/Body/yuki/scene.gltf', function (gltf) {
      body1 = gltf.scene;
      body1.position.set(22, 1.41, 4.5);
      body1.scale.set(0.4, 0.4, 0.4);
      scene.add(body1);
      hasBody1 = true;

});








const glftLoader8 = new GLTFLoader();
glftLoader8.load('./Objects/Boothes/Hologram/Hologram.gltf', (gltfScene) => {
      gltfScene.scene.position.set(22, 1.01, 4.5);
      gltfScene.scene.scale.set(9, 9, 9);
      scene.add(gltfScene.scene);
});

//#endregion






const geometry = new THREE.SphereGeometry(0.5, 15, 15);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sphere = new THREE.Mesh(geometry, material);
sphere.position.set(12, 3, 10);
//scene.add(sphere);




var gr = false;
function animate() {
      requestAnimationFrame(animate);

      /*
      //torus.rotation.x += 0.006;
      //torus.rotation.y += 0.006;
      // cube.rotation.y += 0.002;
      // cube.rotation.x += 0.0001;*/
      if (hasBody1) {
            body1.rotation.y += 0.004;

      }

      if (!gr) {
            //camera.lookAt(12, 2, 1, 1)
            body1.rotation.y += 0.024;
            gr = true;
      }
      renderer.render(scene, camera);
}


animate();
/*
if (spotLight.position.x == 12) {
      spotLight.position.x += 0.006;
      gr = true;
}
if (spotLight.position.x > 12 && gr) {
      spotLight.position.x += 0.006;
}
if (spotLight.position.x < 17 && !gr) {
      spotLight.position.x -= 0.006;
}
if (spotLight.position.x < 12) {
      spotLight.position.x += 0.008;
      gr = true;
}
if (spotLight.position.x > 17 && gr) {
      spotLight.position.x -= 0.008;
      gr = false;
}

if (sphere.position.x == 12) {
      sphere.position.x += 0.006;
      gr = true;
}
if (sphere.position.x > 12 && gr) {
      sphere.position.x += 0.006;
}
if (sphere.position.x < 17 && !gr) {
      sphere.position.x -= 0.006;
}
if (sphere.position.x < 12) {
      sphere.position.x += 0.008;
      gr = true;
}
if (sphere.position.x > 17 && gr) {
      sphere.position.x -= 0.008;
      gr = false;
}
*/