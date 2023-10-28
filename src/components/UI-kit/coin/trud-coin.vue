<script>
import { defineComponent } from 'vue'

import * as THREE from 'three'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/addons/controls/OrbitControls"

export default defineComponent({
  name: "trud-coin",

  data() {
    return {
      removeAllListeners: null,
    }
  },

  props: {
    color: {
      type: Number,
      default() {
        return 0x00FF00
      },
    },

    mouseFollow: {
      type: Boolean,
      default() {
        return false
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

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.update()
    controls.enabled = this.controls


    // LIGHTNING


    const ambiantLight = new THREE.AmbientLight(0xFFFFFF)
    ambiantLight.intensity = 1
    await scene.add(ambiantLight)

    const directionalLight1 = new THREE.DirectionalLight(this.color , 0.2)
    directionalLight1.position.set(5, 10, 5)
    directionalLight1.target.position.set(-5, 0, 0)
    await scene.add(directionalLight1)

    const directionalLight2 = new THREE.DirectionalLight(this.color , 0.2)
    directionalLight2.position.set(5, -10, 5)
    directionalLight2.target.position.set(-5, 0, 0)
    await scene.add(directionalLight2)

    const directionalLight3 = new THREE.DirectionalLight(0xFFFFFF, 2)
    directionalLight2.position.set(0, 0, 10)
    directionalLight2.target.position.set(0, 0, 0)
    await scene.add(directionalLight3)


    // LOAD THE COIN MODEL


    const gltfLoader = new GLTFLoader()
    const coinScene = new THREE.Scene()

    gltfLoader.load("/models/coin2/color.gltf", async gltf => {
      gltf.scene.scale.set( 1.5, 1.5, 1.5 )
      gltf.scene.position.x = -0.3 / 1.2 * 1.5
      gltf.scene.position.y = 6.7 / 1.2 * 1.5
      gltf.scene.position.z = 5.865 / 1.2 * 1.5
      gltf.scene.rotateX(Math.PI)
      gltf.scene.rotateZ(- Math.PI / 60)

      await coinScene.add( gltf.scene )
      await coinScene.rotateY(Math.PI)

      await scene.add(coinScene)

      await animate(renderer, scene, camera)
    })


    // EVENTS


    if (this.speed > 0) {
      setInterval(async () => {
        coinScene.rotateY((- Math.PI / 360) / 100 * this.speed / 2)
      }, 10)
    }
    if (this.mouseFollow) {
      await window.addEventListener('mousemove', mouseFollow)
    }

    let isMouseDown = false

    if (this.controls) {
      await window.addEventListener('mouseup', restoreCameraPosition)
      await window.addEventListener('mousedown', () => {
        isMouseDown = true
      })

      await restoreCameraPosition()
    }
    await window.addEventListener('resize', resizeViewBox)
    await viewBox.appendChild( renderer.domElement )

    this.removeAllListeners = async () => {
      if (this.mouseFollow) {
        await window.removeEventListener('mousemove', mouseFollow)
      }

      if (this.controls) {
        await window.removeEventListener('mouseup', restoreCameraPosition)
      }

      await window.removeEventListener('resize', resizeViewBox)
    }


    // FUNCTIONS


    async function animate() {
      requestAnimationFrame( animate )
      await renderer.render(scene, camera)
    }

    async function resizeViewBox() {
      camera.aspect = 1
      renderer.setSize(Math.min(viewBox.clientWidth, viewBox.clientHeight), Math.min(viewBox.clientWidth, viewBox.clientHeight))
      await camera.updateProjectionMatrix()
    }

    function mouseFollow(e) {
      scene.rotation.x = -Math.PI / 4 * ((document.documentElement.clientHeight / 2 - e.clientY) / (document.documentElement.clientHeight / 2))
      scene.rotation.y = -Math.PI / 4 * ((document.documentElement.clientWidth / 2 - e.clientX) / (document.documentElement.clientWidth / 2))
    }

    async function restoreCameraPosition() {
      isMouseDown = false

      const radius = Math.sqrt(camera.position.x ** 2 + camera.position.z ** 2)
      const firstCos = Math.abs(camera.position.x) / radius

      let firstAngle = Math.PI / 2 - Math.acos(firstCos)

      if (camera.position.x < 0) {
        if (camera.position.z < 0) {
          firstAngle -= Math.PI
        } else {
          firstAngle *= -1
        }
      } else {
        if (camera.position.z < 0) {
          firstAngle = Math.PI - firstAngle
        }
      }

      const secondCos = radius / 20

      let secondAngle = Math.acos(secondCos)

      if (camera.position.y < 0) {
        secondAngle *= -1
      }

      setTimeout(async () => {
        moveSphereCamera(firstAngle, secondAngle, -0.4523893421169298, -0.5194097297300448)
      }, 500)
    }

    function moveSphereCamera(firstAngle, secondAngle, toFirst, toSecond) {
      if (isMouseDown) {
        return
      }

      const z = 20 * Math.cos(secondAngle) * Math.cos(firstAngle)
      const x = 20 * Math.cos(secondAngle) * Math.sin(firstAngle)
      const y = 20 * Math.sin(secondAngle)

      camera.position.set(x, y, z)

      camera.lookAt(0, 0, 0)

      let tempFirst = firstAngle
      let tempSecond = secondAngle

      const isFirstAngleIsNeedsWork = Math.abs(firstAngle - toFirst) > 0.1
      const isSecondAngleIsNeedsWork = Math.abs(secondAngle - toSecond) > 0.1

      if (isFirstAngleIsNeedsWork) {
        tempFirst -= (firstAngle - toFirst) * 0.01
      }

      if (isSecondAngleIsNeedsWork) {
        tempSecond -= (secondAngle - toSecond) * 0.01
      }

      if (isFirstAngleIsNeedsWork || isSecondAngleIsNeedsWork) {
        setTimeout(() => {
          moveSphereCamera(tempFirst, tempSecond, toFirst, toSecond)
        }, 5)
      }
    }
  },

  async beforeUnmount() {
    await this.removeAllListeners()
  }
})
</script>

<template>
  <div class="trud-coin">
    <div
        class="container"
        ref="threeContainer"
        :class="{
          controls: controls,
        }"
    ></div>
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

    &.controls
      cursor: grab

      &:active
        cursor: grabbing
</style>