import * as THREE from "three";

const canvas = document.getElementById("bg");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
canvas: canvas,
antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

const geometry = new THREE.IcosahedronGeometry(1.5,1);

const material = new THREE.MeshPhysicalMaterial({
color:0x0071ff,
metalness:0.9,
roughness:0.05,
transmission:0.2,
clearcoat:1
});

const mesh = new THREE.Mesh(geometry,material);

scene.add(mesh);

const light1 = new THREE.PointLight(0xffffff,40);
light1.position.set(5,5,5);
scene.add(light1);

const light2 = new THREE.AmbientLight(0xffffff,1);
scene.add(light2);

function animate(){

requestAnimationFrame(animate);

mesh.rotation.x +=0.003;
mesh.rotation.y +=0.005;

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});
