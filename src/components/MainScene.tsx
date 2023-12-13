'use client'
import { Canvas, useThree } from '@react-three/fiber'
import React from 'react'


import { Box, CameraControls } from '@react-three/drei'
import { Vector3 } from 'three'

import MainModel from './models/MainModel'


function MainScene() {


    return (
        <div className='absolute inset-0'>
            <Canvas 
                className="" //bg-slate-300
                camera={{
                    position: [0, 0, 1],
                    near:0.001,
                    far:1000
                }}
                
            >
                <CameraControls />
                {/* <pointLight position={[1, 1, 1]} intensity={10} /> */}
                <ambientLight intensity={3} />

                <MainModel/>

                {/* <Box position={new Vector3(1,2)}/>
                <Box position={new Vector3(1,0)}/> */}
            </Canvas>
        </div>
        
    )
}

export default MainScene
