import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
canvas: document.querySelector("#bg"),
antialias: true,
alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.IcosahedronGeometry(1.6, 8);

const material = new THREE.MeshPhysicalMaterial({
color:0x0077ff,
metalness:1,
roughness:0,
clearcoat:1
});

const object = new THREE.Mesh(geometry, material);

scene.add(object);

// Stars
const stars = new THREE.BufferGeometry();
const vertices = [];

for(let i=0;i<3000;i++){
vertices.push(
(Math.random()-0.5)*100,
(Math.random()-0.5)*100,
(Math.random()-0.5)*100
);
}

stars.setAttribute(
"position",
new THREE.Float32BufferAttribute(vertices,3)
);

const starMaterial=new THREE.PointsMaterial({
size:0.15
});

const starField=new THREE.Points(stars,starMaterial);

scene.add(starField);

const light=new THREE.PointLight(0xffffff,60);

light.position.set(5,5,5);

scene.add(light);

function animate(){

requestAnimationFrame(animate);

object.rotation.x+=0.003;

object.rotation.y+=0.005;

starField.rotation.y+=0.0004;

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});
