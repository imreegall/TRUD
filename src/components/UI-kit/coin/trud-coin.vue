<script>
import { defineComponent } from 'vue'

import * as THREE from 'three'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Color} from "three";

export default defineComponent({
  name: "trud-coin",

  props: {
    color: {
      type: Color,
      default() {
        return 0x00FF00
      },
    },

    controls: {
      type: Boolean,
      default() {
        return false
      },
    },

    speed: {
      type: Number,
      default() {
        return 100
      },
    },
  },

  async mounted() {
    const viewBox = this.$refs["threeContainer"]

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(27, 1, 1, 35)
    camera.position.set(0, 0, 20)

    const ambiantLight = new THREE.AmbientLight(0xFFFFFF)
    ambiantLight.intensity = 1

    await scene.add(ambiantLight)

    const directionalLight1 = new THREE.DirectionalLight(this.color , 0.1)
    directionalLight1.position.set(-5, 10, 5)
    directionalLight1.target.position.set(5, 0, 0)

    await scene.add(directionalLight1)

    const directionalLight2 = new THREE.DirectionalLight(this.color , 0.1)
    directionalLight2.position.set(-5, -10, 5)
    directionalLight2.target.position.set(5, 0, 0)

    await scene.add(directionalLight2)

    const directionalLight3 = new THREE.DirectionalLight(0xFFFFFF, 2)
    directionalLight2.position.set(0, 0, 10)
    directionalLight2.target.position.set(0, 0, 0)

    await scene.add(directionalLight3)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(Math.min(viewBox.clientWidth, viewBox.clientHeight), Math.min(viewBox.clientWidth, viewBox.clientHeight))
    renderer.setClearColor( 0x000000, 0 )
    renderer.toneMapping = THREE.CineonToneMapping
    renderer.toneMappingExposure = 2
    renderer.shadowMap.enabled = false
    renderer.shadowMap.type = THREE.VSMShadowMap

    const gltfLoader = new GLTFLoader()

    gltfLoader.load("/models/coin2/color.gltf", async gltf => {
      gltf.scene.scale.set( 1.5, 1.5, 1.5 )
      gltf.scene.position.x = -0.3 / 1.2 * 1.5
      gltf.scene.position.y = 6.7 / 1.2 * 1.5
      gltf.scene.position.z = 5.865 / 1.2 * 1.5
      gltf.scene.rotateX(Math.PI)
      gltf.scene.rotateZ(- Math.PI / 60)

      const coinScene = new THREE.Scene()

      await coinScene.add( gltf.scene )

      await coinScene.rotateY(Math.PI)

      await scene.add(coinScene)

      await this.animate(renderer, scene, camera)

      coinScene.rotation.x = - Math.PI

      await this.animate(renderer, scene, camera)

      let i = (- Math.PI / 360) / 100 * this.speed

      setInterval(async () => {
        coinScene.rotateY(i)
        await this.animate(renderer, scene, camera)
      }, 20)

      if (this.controls) {
        await window.addEventListener('mousemove', e => {
          scene.rotation.x = - Math.PI / 4 * ((document.documentElement.clientHeight / 2 - e.clientY) / (document.documentElement.clientHeight / 2))
          scene.rotation.y = - Math.PI / 4 * ((document.documentElement.clientWidth / 2 - e.clientX) / (document.documentElement.clientWidth / 2))
        })
      }
    })

    await window.addEventListener('resize', async () => {
      camera.aspect = 1
      renderer.setSize(Math.min(viewBox.clientWidth, viewBox.clientHeight), Math.min(viewBox.clientWidth, viewBox.clientHeight))
      await camera.updateProjectionMatrix()
    })

    await viewBox.appendChild( renderer.domElement )
  },

  methods: {
    async animate(renderer, scene, camera) {
      await renderer.render(scene, camera)
    },
  },
})
</script>

<template>
  <div class="trud-coin">
    <div class="container" ref="threeContainer" ></div>
  </div>
</template>

<style scoped lang="sass">
.trud-coin
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  aspect-ratio: 1

  .container
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
</style>