import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);

renderer.domElement.style.position="fixed";
renderer.domElement.style.top="0";
renderer.domElement.style.left="0";
renderer.domElement.style.zIndex="-1";

document.body.appendChild(renderer.domElement);

const geometry=new THREE.IcosahedronGeometry(2,1);

const material=new THREE.MeshPhysicalMaterial({
color:0x0066ff,
metalness:0.5,
roughness:0.2,
transmission:0.4
});

const mesh=new THREE.Mesh(geometry,material);
scene.add(mesh);

camera.position.z=5;

function animate(){
requestAnimationFrame(animate);

mesh.rotation.x+=0.005;
mesh.rotation.y+=0.008;

renderer.render(scene,camera);
}

animate();

window.addEventListener("resize",()=>{
camera.aspect=window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth,window.innerHeight);
});
