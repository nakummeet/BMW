import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

gsap.registerPlugin(ScrollTrigger);

/* ---------- SCENE ---------- */

const scene = new THREE.Scene();

/* ---------- CAMERA ---------- */

const camera = new THREE.PerspectiveCamera(
60,
window.innerWidth / window.innerHeight,
0.1,
1000
);

camera.position.set(0, 1.8, 8);

/* ---------- RENDERER ---------- */

const renderer = new THREE.WebGLRenderer({
antialias: true,
alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("car3d").appendChild(renderer.domElement);


/* ---------- LIGHT ---------- */

const light1 = new THREE.DirectionalLight(0xffffff, 2);
light1.position.set(5, 10, 7);
scene.add(light1);

const light2 = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(light2);


/* ---------- LOAD MODEL ---------- */

let car;

const loader = new GLTFLoader();

loader.load("../models/2019_bmw_m2_competition.glb", (gltf) => {

car = gltf.scene;

/* size */

car.scale.set(80,80,80);

/* starting position (right side of text) */

car.position.set(3,-2,0);
car.rotation.y = -1;

scene.add(car);


/* ---------- SCROLL ANIMATION ---------- */

const tl = gsap.timeline({
scrollTrigger:{
trigger:".m2",
start:"top top",
end:"bottom bottom",
scrub:1
}
});


/* SECTION 1
car right side */

tl.to(car.position,{
x:3,
y:-1,
duration:1
});

tl.to(car.rotation,{
y:-0.5,
duration:1
},"<");


/* SECTION 2
car moves LEFT */

tl.to(car.position,{
x:-3,
y:-0.8,
duration:1
});

tl.to(car.rotation,{
y:0.8,
duration:1
},"<");


/* SECTION 3
car moves RIGHT again */

tl.to(car.position,{
x:3,
y:-1,
duration:1
});

tl.to(car.rotation,{
y:-0.6,
duration:1
},"<");

});


/* ---------- RENDER LOOP ---------- */

function animate(){

requestAnimationFrame(animate);

renderer.render(scene, camera);

}

animate();


/* ---------- RESPONSIVE ---------- */

window.addEventListener("resize", () => {

camera.aspect = window.innerWidth / window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth, window.innerHeight);

});