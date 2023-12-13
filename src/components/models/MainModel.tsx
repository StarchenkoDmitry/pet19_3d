'use client'
import { CameraControls, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'

import { GLTFLoader } from 'three-stdlib'

interface Props {}

function MainModel(props: Props) {
    
    const camera = useThree(state => state.camera)
    console.log("camera:", camera)
    
    const groupRef = useRef<any>(null)
    const [data,setData] = useState<any>()

    useEffect(()=>{
        const loader = new GLTFLoader()
        // loader.load('/test/Wolf-Blender-2.82a.gltf',(gltf)=>{
        // loader.load('/scene.glb',(gltf)=>{
        loader.load('/nasa.glb',(gltf)=>{
            console.log("loaded: ",gltf)
            setData(gltf.scene)  
        })
    },[])

    useFrame(()=>{
        camera.position.x += 0.1

        // gsap.to(camera.position, {
        //     x: () => 0,
        //     y: () => 0,
        //     duration: 0.5
        // }) 
    })

    // const { scene } = useGLTF('/test/Wolf-Blender-2.82a.gltf')
    
    return (
        <>
            <group ref={groupRef} dispose={null}>
                {/* <primitive object={scene}></primitive> */}
                {
                    !!data && <primitive object={data}></primitive>
                }
            </group>
        </>
    )
}

export default MainModel
