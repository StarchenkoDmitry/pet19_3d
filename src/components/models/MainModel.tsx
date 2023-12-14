// 'use client'
import { CameraControls, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'

import { GLTFLoader } from 'three-stdlib'

interface Props {}

function MainModel(props: Props) {
    
    const {camera, viewport} = useThree(state => state)
    console.log("camera:", camera,viewport)
    
    const groupRef = useRef<any>(null)
    const [data,setData] = useState<any>()

    useEffect(()=>{
        const loader = new GLTFLoader()
        loader.load('/nasa.glb',(gltf)=>{
            console.log("loaded: ",gltf)
            setData(gltf.scene)  
        })
    },[])

    useFrame(()=>{
        // camera.position.x += 0.1
        if(!data)return 
        data.rotation.y += 0.01
    })

    
    const { scene } = useGLTF('/nasa.glb')

    return (
        <>
            <group ref={groupRef} dispose={null}>
            {
                !!data && 
                <primitive object={data}></primitive>
            }
            <primitive object={scene}></primitive>
            </group>
        </>
    )
}

export default MainModel
