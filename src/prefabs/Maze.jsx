import React from 'react'
import { Damaged_Wall } from "./Wall"

const Maze = () => {
    
    const l = 8
    const b = 3
    const h = 1.5

  return (
    <group name='maze'>

        {/* layer_0 */}

        <group name='layer_0'>
            {/* Left Wall */}
            <Damaged_Wall type={"Static"} position={[0,h,l*0]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[0,h,l*1]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[0,h,l*2]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[0,h,l*3]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[0,h,l*4]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[0,h,l*5]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[0,h,l*6]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[0,h,l*7]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[0,h,l*8]} rotation={[0, Math.PI * 0.5, 0]} />

            {/* Right Wall */}
            <Damaged_Wall type={"Static"} position={[l*9,h,l*0]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*9,h,l*1]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*9,h,l*2]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*9,h,l*3]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*9,h,l*4]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*9,h,l*5]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*9,h,l*6]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*9,h,l*7]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*9,h,l*8]} rotation={[0, Math.PI * 0.5, 0]} />

            {/* Upper Wall */}
            <Damaged_Wall type={"Static"} position={[l*0 + 4,h,-l/2]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*1 + 4,h,-l/2]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*2 + 4,h,-l/2]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*3 + 4,h,-l/2]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*4 + 4,h,-l/2]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*5 + 4,h,-l/2]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*6 + 4,h,-l/2]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*7 + 4,h,-l/2]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*8 + 4,h,-l/2]} rotation={[0, 0, 0]} />

            {/* Lower Wall */}
            <Damaged_Wall type={"Static"} position={[l*0 + 4,h,-l/2 + l*9]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*1 + 4,h,-l/2 + l*9]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*2 + 4,h,-l/2 + l*9]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*3 + 4,h,-l/2 + l*9]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*4 + 4,h,-l/2 + l*9]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*5 + 4,h,-l/2 + l*9]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*6 + 4,h,-l/2 + l*9]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*7 + 4,h,-l/2 + l*9]} rotation={[0, 0, 0]} />
            <Damaged_Wall type={"Static"} position={[l*8 + 4,h,-l/2 + l*9]} rotation={[0, 0, 0]} />
        </group>

        <group name='vertical_walls'>
        {/* vertical_1 */}

        <group name='vertical_1'>
            {/* Vertical Walls */}
            {/* <Damaged_Wall type={"Static"} position={[l*1,h,l*0]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*1,h,l*1]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*1,h,l*2]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*1,h,l*3]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*1,h,l*4]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*1,h,l*5]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*1,h,l*6]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*1,h,l*7]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*1,h,l*8]} rotation={[0, Math.PI * 0.5, 0]} />
        </group>
        
        {/* vertical_2 */}

        <group name='vertical_2'>
            {/* Vertical Walls */}
            <Damaged_Wall type={"Static"} position={[l*2,h,l*0]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*2,h,l*1]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*2,h,l*2]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*2,h,l*3]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*2,h,l*4]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*2,h,l*5]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*2,h,l*6]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*2,h,l*7]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*2,h,l*8]} rotation={[0, Math.PI * 0.5, 0]} /> */}
        </group>
        
        {/* vertical_3 */}

        <group name='vertical_3'>
            {/* Vertical Walls */}
            {/* <Damaged_Wall type={"Static"} position={[l*3,h,l*0]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*3,h,l*1]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*3,h,l*2]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*3,h,l*3]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*3,h,l*4]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*3,h,l*5]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*3,h,l*6]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*3,h,l*7]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*3,h,l*8]} rotation={[0, Math.PI * 0.5, 0]} /> */}
        </group>
        
        {/* vertical_4 */}

        <group name='vertical_4'>
            {/* Vertical Walls */}
            {/* <Damaged_Wall type={"Static"} position={[l*4,h,l*0]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*4,h,l*1]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*4,h,l*2]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*4,h,l*3]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*4,h,l*4]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*4,h,l*5]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*4,h,l*6]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*4,h,l*7]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*4,h,l*8]} rotation={[0, Math.PI * 0.5, 0]} />
        </group>
        
        {/* vertical_5 */}

        <group name='vertical_5'>
            {/* Vertical Walls */}
            {/* <Damaged_Wall type={"Static"} position={[l*5,h,l*0]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*5,h,l*1]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*5,h,l*2]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*5,h,l*3]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*5,h,l*4]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*5,h,l*5]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*5,h,l*6]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*5,h,l*7]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*5,h,l*8]} rotation={[0, Math.PI * 0.5, 0]} />
        </group>
        
        {/* vertical_6 */}

        <group name='vertical_6'>
            {/* Vertical Walls */}
            <Damaged_Wall type={"Static"} position={[l*6,h,l*0]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*6,h,l*1]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*6,h,l*2]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*6,h,l*3]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*6,h,l*4]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*6,h,l*5]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*6,h,l*6]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*6,h,l*7]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*6,h,l*8]} rotation={[0, Math.PI * 0.5, 0]} /> */}
        </group>
        
        {/* vertical_7 */}

        <group name='vertical_7'>
            {/* Vertical Walls */}
            {/* <Damaged_Wall type={"Static"} position={[l*7,h,l*0]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*7,h,l*1]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*7,h,l*2]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*7,h,l*3]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*7,h,l*4]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*7,h,l*5]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*7,h,l*6]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*7,h,l*7]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*7,h,l*8]} rotation={[0, Math.PI * 0.5, 0]} /> */}
        </group>
        
        {/* vertical_8 */}

        <group name='vertical_1'>
            {/* Vertical Walls */}
            {/* <Damaged_Wall type={"Static"} position={[l*8,h,l*0]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*8,h,l*1]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*8,h,l*2]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*8,h,l*3]} rotation={[0, Math.PI * 0.5, 0]} />
            <Damaged_Wall type={"Static"} position={[l*8,h,l*4]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*8,h,l*5]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            <Damaged_Wall type={"Static"} position={[l*8,h,l*6]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Damaged_Wall type={"Static"} position={[l*8,h,l*7]} rotation={[0, Math.PI * 0.5, 0]} /> */}
            {/* <Damaged_Wall type={"Static"} position={[l*8,h,l*8]} rotation={[0, Math.PI * 0.5, 0]} /> */}
        </group>
        </group>

        <group name="horizontal_walls">
            {/* horizontal_1 */}

            <group name='horizontal_1'>
                {/* <Damaged_Wall type={"Static"} position={[l*0 + 4,h,-l/2 + l*1]} rotation={[0, 0, 0]} /> */}
                {/* <Damaged_Wall type={"Static"} position={[l*1 + 4,h,-l/2 + l*1]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*2 + 4,h,-l/2 + l*1]} rotation={[0, 0, 0]} />
                <Damaged_Wall type={"Static"} position={[l*3 + 4,h,-l/2 + l*1]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*4 + 4,h,-l/2 + l*1]} rotation={[0, 0, 0]} /> */}
                {/* <Damaged_Wall type={"Static"} position={[l*5 + 4,h,-l/2 + l*1]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*6 + 4,h,-l/2 + l*1]} rotation={[0, 0, 0]} />
                <Damaged_Wall type={"Static"} position={[l*7 + 4,h,-l/2 + l*1]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*8 + 4,h,-l/2 + l*1]} rotation={[0, 0, 0]} /> */}
            </group>

            {/* horizontal_2 */}
            
            <group name='horizontal_2'>
                <Damaged_Wall type={"Static"} position={[l*0 + 4,h,-l/2 + l*2]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*1 + 4,h,-l/2 + l*2]} rotation={[0, 0, 0]} /> */}
                {/* <Damaged_Wall type={"Static"} position={[l*2 + 4,h,-l/2 + l*2]} rotation={[0, 0, 0]} /> */}
                {/* <Damaged_Wall type={"Static"} position={[l*3 + 4,h,-l/2 + l*2]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*4 + 4,h,-l/2 + l*2]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*5 + 4,h,-l/2 + l*2]} rotation={[0, 0, 0]} /> */}
                {/* <Damaged_Wall type={"Static"} position={[l*6 + 4,h,-l/2 + l*2]} rotation={[0, 0, 0]} /> */}
                {/* <Damaged_Wall type={"Static"} position={[l*7 + 4,h,-l/2 + l*2]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*8 + 4,h,-l/2 + l*2]} rotation={[0, 0, 0]} />
            </group>
            
            {/* horizontal_3 */}
            
            <group name='horizontal_3'>
                {/* <Damaged_Wall type={"Static"} position={[l*0 + 4,h,-l/2 + l*3]} rotation={[0, 0, 0]} /> */}
                {/* <Damaged_Wall type={"Static"} position={[l*1 + 4,h,-l/2 + l*3]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*2 + 4,h,-l/2 + l*3]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*3 + 4,h,-l/2 + l*3]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*4 + 4,h,-l/2 + l*3]} rotation={[0, 0, 0]} />
                <Damaged_Wall type={"Static"} position={[l*5 + 4,h,-l/2 + l*3]} rotation={[0, 0, 0]} />
                <Damaged_Wall type={"Static"} position={[l*6 + 4,h,-l/2 + l*3]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*7 + 4,h,-l/2 + l*3]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*8 + 4,h,-l/2 + l*3]} rotation={[0, 0, 0]} />
            </group>
            
            {/* horizontal_4 */}
            
            <group name='horizontal_4'>
                {/* <Damaged_Wall type={"Static"} position={[l*0 + 4,h,-l/2 + l*4]} rotation={[0, 0, 0]} /> */}
                {/* <Damaged_Wall type={"Static"} position={[l*1 + 4,h,-l/2 + l*4]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*2 + 4,h,-l/2 + l*4]} rotation={[0, 0, 0]} />
                <Damaged_Wall type={"Static"} position={[l*3 + 4,h,-l/2 + l*4]} rotation={[0, 0, 0]} />
                <Damaged_Wall type={"Static"} position={[l*4 + 4,h,-l/2 + l*4]} rotation={[0, 0, 0]} />
                <Damaged_Wall type={"Static"} position={[l*5 + 4,h,-l/2 + l*4]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*6 + 4,h,-l/2 + l*4]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*7 + 4,h,-l/2 + l*4]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*8 + 4,h,-l/2 + l*4]} rotation={[0, 0, 0]} /> */}
            </group>
            
            {/* horizontal_5 */}
            
            <group name='horizontal_5'>
                {/* <Damaged_Wall type={"Static"} position={[l*0 + 4,h,-l/2 + l*5]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*1 + 4,h,-l/2 + l*5]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*2 + 4,h,-l/2 + l*5]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*3 + 4,h,-l/2 + l*5]} rotation={[0, 0, 0]} />
                <Damaged_Wall type={"Static"} position={[l*4 + 4,h,-l/2 + l*5]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*5 + 4,h,-l/2 + l*5]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*6 + 4,h,-l/2 + l*5]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*7 + 4,h,-l/2 + l*5]} rotation={[0, 0, 0]} /> */}
                {/* <Damaged_Wall type={"Static"} position={[l*8 + 4,h,-l/2 + l*5]} rotation={[0, 0, 0]} /> */}
            </group>
            
            {/* horizontal_6 */}
            
            <group name='horizontal_6'>
                {/* <Damaged_Wall type={"Static"} position={[l*0 + 4,h,-l/2 + l*6]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*1 + 4,h,-l/2 + l*6]} rotation={[0, 0, 0]} />
                <Damaged_Wall type={"Static"} position={[l*2 + 4,h,-l/2 + l*6]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*3 + 4,h,-l/2 + l*6]} rotation={[0, 0, 0]} /> */}
                {/* <Damaged_Wall type={"Static"} position={[l*4 + 4,h,-l/2 + l*6]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*5 + 4,h,-l/2 + l*6]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*6 + 4,h,-l/2 + l*6]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*7 + 4,h,-l/2 + l*6]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*8 + 4,h,-l/2 + l*6]} rotation={[0, 0, 0]} /> */}
            </group>
            
            {/* horizontal_7 */}
            
            <group name='horizontal_7'>
                <Damaged_Wall type={"Static"} position={[l*0 + 4,h,-l/2 + l*7]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*1 + 4,h,-l/2 + l*7]} rotation={[0, 0, 0]} /> */}
                {/* <Damaged_Wall type={"Static"} position={[l*2 + 4,h,-l/2 + l*7]} rotation={[0, 0, 0]} /> */}
                {/* <Damaged_Wall type={"Static"} position={[l*3 + 4,h,-l/2 + l*7]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*4 + 4,h,-l/2 + l*7]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*5 + 4,h,-l/2 + l*7]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*6 + 4,h,-l/2 + l*7]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*7 + 4,h,-l/2 + l*7]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*8 + 4,h,-l/2 + l*7]} rotation={[0, 0, 0]} />
            </group>
            
            {/* horizontal_8 */}
            
            <group name='horizontal_8'>
                <Damaged_Wall type={"Static"} position={[l*0 + 4,h,-l/2 + l*8]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*1 + 4,h,-l/2 + l*8]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*2 + 4,h,-l/2 + l*8]} rotation={[0, 0, 0]} />
                <Damaged_Wall type={"Static"} position={[l*3 + 4,h,-l/2 + l*8]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*4 + 4,h,-l/2 + l*8]} rotation={[0, 0, 0]} /> */}
                {/* <Damaged_Wall type={"Static"} position={[l*5 + 4,h,-l/2 + l*8]} rotation={[0, 0, 0]} /> */}
                <Damaged_Wall type={"Static"} position={[l*6 + 4,h,-l/2 + l*8]} rotation={[0, 0, 0]} />
                <Damaged_Wall type={"Static"} position={[l*7 + 4,h,-l/2 + l*8]} rotation={[0, 0, 0]} />
                {/* <Damaged_Wall type={"Static"} position={[l*8 + 4,h,-l/2 + l*8]} rotation={[0, 0, 0]} /> */}
            </group>


        </group>

    </group>
  )
}

export default Maze