'use client'
import { Canvas, useThree } from '@react-three/fiber'
import React from 'react'


import { Box, CameraControls } from '@react-three/drei'
import { PerspectiveCamera, Vector3 } from 'three'

import MainModel from './models/MainModel'


function MainScene() {


    return (
        <div className='absolute inset-0'>
            <Canvas 
                className="" //bg-slate-300
                // camera={{
                //     position: [0, 0, 1],
                //     near:0.001,
                //     far:1000
                // }}
                camera={{
                    position:[4,0,0]
                }}
                
            >
                <CameraControls 
                    // camera={  new PerspectiveCamera(50,1,0.01,1000) }

                />
                {/* <pointLight position={[1, 1, 1]} intensity={10} /> */}
                {/* <ambientLight intensity={2} /> */}
                <directionalLight position={[2, 2, 2]} intensity={2}/>
                <ambientLight />
                {/* <pointLight position={[4, 4, 4]}  /> */}
                <MainModel/>

                {/* <Box position={new Vector3(1,2)}/>
                <Box position={new Vector3(1,0)}/> */}

                {/* <mesh>
                    <sphereGeometry  />
                    <meshStandardMaterial color="hotpink" alphaTest={0.5} opacity={.5} />
                </mesh> */}
            </Canvas>
        </div>
        
    )
}

export default MainScene
