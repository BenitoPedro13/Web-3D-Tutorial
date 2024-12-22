/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ../public/model.gltf -T
*/

import React, { useRef, useEffect, Suspense } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const animationGroups = {
  'pdc1': ['pdc1','pdc1-door1', 'pdc1-door2', 'pdc1-frame'],
  'pdc2': ['pdc2','pdc2-door1', 'pdc2-door2', 'pdc2-frame'],
  'pdc3': ['pdc3-door1', 'pdc3-door2', 'pdc3-frame'],
  'pdc4': ['pdc4','pdc4-door1', 'pdc4-door2', 'pdc4-frame'],
  'pdc6': ['pdc6','pdc-top-open', 'pdc6-door2.004', 'pdc6-frame'],
  'missiles': ['misile_door-topAction','missile_door-bottomAction', 'missile1Action', 'missile2Action'],
  'gangway': ['hatch-upper','gangway'],
  'drone': ['hatch-lower'],
}

function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/ship.glb')
  const { actions } = useAnimations(animations, group)
  
  const playActions = function(strGroup, intTimeScale){
    animationGroups[strGroup].forEach(function(strAction){
      const action = actions[strAction]
      action.clampWhenFinished = true
      action.timeScale = intTimeScale
      action.setLoop(1,1).reset().play()
    });
    if(intTimeScale === 1 ){
      setTimeout(function(){
      playActions(strGroup, -1);
      }, 3000);
    }
  }  
  
  useEffect(() => {
    let i=0;
    for (const key in animationGroups) {
      setTimeout(function(){
        playActions(key, 1);
      }, 1000* i);
      i++;
    }
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <directionalLight name="Sun" intensity={400} decay={2} position={[0, -0.91, 235.38]}>
          <group position={[0, 0, -1]} />
        </directionalLight>
        <PerspectiveCamera name="Camera" makeDefault={true} far={100000} near={0.1} fov={22.9} position={[-465.25, -92.76, -467.37]} rotation={[2.94, -0.78, 3]} />
        <directionalLight name="Sun001" intensity={200} decay={2} position={[-250.65, 0, 0]} rotation={[2.42, -0.07, 0.03]}>
          <group position={[0, 0, -1]} />
        </directionalLight>
        <group name="hull003">
          <mesh name="xxx_-_corvette_whole005" geometry={nodes['xxx_-_corvette_whole005'].geometry} material={materials['cw-pe-silver']} />
          <mesh name="xxx_-_corvette_whole005_1" geometry={nodes['xxx_-_corvette_whole005_1'].geometry} material={materials['cw-pe-white']} />
          <mesh name="xxx_-_corvette_whole005_2" geometry={nodes['xxx_-_corvette_whole005_2'].geometry} material={materials['CW-Paint-matte']} />
          <mesh name="xxx_-_corvette_whole005_3" geometry={nodes['xxx_-_corvette_whole005_3'].geometry} material={materials['Cw-Rubber']} />
          <mesh name="xxx_-_corvette_whole005_4" geometry={nodes['xxx_-_corvette_whole005_4'].geometry} material={materials['cw-worn-steel']} />
          <group name="airlock-aft" position={[2.76, 0, 0]}>
            <mesh name="xxx_-_corvette_whole174" geometry={nodes['xxx_-_corvette_whole174'].geometry} material={materials['cw-pe-silver']} />
            <mesh name="xxx_-_corvette_whole174_1" geometry={nodes['xxx_-_corvette_whole174_1'].geometry} material={materials['CW-Paint-matte']} />
          </group>
          <group name="gangway">
            <mesh name="xxx_-_corvette_whole065" geometry={nodes['xxx_-_corvette_whole065'].geometry} material={materials['cw-pe-silver']} />
            <mesh name="xxx_-_corvette_whole065_1" geometry={nodes['xxx_-_corvette_whole065_1'].geometry} material={materials['cw-pe-white']} />
            <mesh name="xxx_-_corvette_whole065_2" geometry={nodes['xxx_-_corvette_whole065_2'].geometry} material={materials['CW-Paint-matte']} />
          </group>
          <mesh name="hatch-lower" geometry={nodes['hatch-lower'].geometry} material={materials['cw-pe-silver']} 
            onClick={()=>{playActions('drone',1)}}/>
          <mesh name="hatch-upper" geometry={nodes['hatch-upper'].geometry} material={materials['cw-pe-silver']} 
            onClick={()=>{playActions('gangway',1)}}
          />
          <mesh name="missile-door1" geometry={nodes['missile-door1'].geometry} material={materials['cw-pe-silver']} position={[-5.71, 58.51, -40.64]} rotation={[-2.25, 0, 0]} 
            onClick={()=>{playActions('missiles',1)}} />
          <mesh name="missile-door2" geometry={nodes['missile-door2'].geometry} material={materials['cw-pe-silver']} position={[-5.6, 42.09, -52.79]} rotation={[2.24, 0, 0]} 
            onClick={()=>{playActions('missiles',1)}}/>
          <mesh name="missile1" geometry={nodes.missile1.geometry} material={materials['CW-Paint-matte']} />
          <mesh name="missile2" geometry={nodes.missile2.geometry} material={materials['CW-Paint-matte']} />
          <mesh name="outer-flame" geometry={nodes['outer-flame'].geometry} material={materials['Material.001']} position={[0, 0, 258.4]} scale={[38.48, 38.48, 69.81]}>
            <mesh name="inner-flame" geometry={nodes['inner-flame'].geometry} material={materials.Material} position={[0, 0, 0.15]} scale={[0.33, 0.33, 0.5]} />
          </mesh>
          <mesh name="pdc1-door" geometry={nodes['pdc1-door'].geometry} material={materials['cw-pe-silver']} position={[-36.42, 2.84, -139.52]} rotation={[Math.PI, 0.27, 1.54]} 
            onClick={()=>{playActions('pdc1',1)}}
          />
          <mesh name="pdc1-door2" geometry={nodes['pdc1-door2'].geometry} material={materials['cw-pe-silver']} position={[-36.42, -9.46, -139.52]} rotation={[Math.PI, 0.27, -1.56]} 
            onClick={()=>{playActions('pdc1',1)}}/>
          <mesh name="pdc1-frame" geometry={nodes['pdc1-frame'].geometry} material={materials['CW-Titanium-shiny']} position={[58.53, -4.46, -95.3]} rotation={[-Math.PI, 0.28, 0]} scale={-1}>
            <group name="pdc1" position={[85.88, 0.32, -15.95]} rotation={[3.14, -0.01, 1.58]} scale={-1}>
              <mesh name="xxx_-_corvette_whole055" geometry={nodes['xxx_-_corvette_whole055'].geometry} material={materials['cw-pe-silver']} />
              <mesh name="xxx_-_corvette_whole055_1" geometry={nodes['xxx_-_corvette_whole055_1'].geometry} material={materials['Material.007']} />
            </group>
          </mesh>
          <mesh name="pdc2-door" geometry={nodes['pdc2-door'].geometry} material={materials['cw-pe-silver']} position={[35.64, 3.15, -139.38]} rotation={[0, 0.27, -1.52]} 
            onClick={()=>{playActions('pdc2',1)}}/>
          <mesh name="pdc2-door2" geometry={nodes['pdc2-door2'].geometry} material={materials['cw-pe-silver']} position={[35.64, -9.08, -139.38]} rotation={[0, 0.27, 1.69]} 
            onClick={()=>{playActions('pdc2',1)}}/>
          <mesh name="pdc2-frame" geometry={nodes['pdc2-frame'].geometry} material={materials['CW-Titanium-shiny']} position={[-58.84, -3.54, -97.07]} rotation={[0, 0.27, 0]}>
            <group name="pdc2" position={[85.84, 0.39, -15.88]} rotation={[0.01, -0.01, -1.55]}>
              <mesh name="xxx_-_corvette_whole055" geometry={nodes['xxx_-_corvette_whole055'].geometry} material={materials['cw-pe-silver']} />
              <mesh name="xxx_-_corvette_whole055_1" geometry={nodes['xxx_-_corvette_whole055_1'].geometry} material={materials['Material.007']} />
            </group>
          </mesh>
          <mesh name="pdc3-housing" geometry={nodes['pdc3-housing'].geometry} material={materials['cw-pe-silver']} position={[-64.56, 0, -16]} rotation={[Math.PI, 0, 0]} scale={-1}>
            <mesh name="pdc3-door1" geometry={nodes['pdc3-door1'].geometry} material={materials['cw-pe-silver']} position={[4.42, 6.4, 0.1]} rotation={[-Math.PI, 0, -1.59]} scale={-1} 
              onClick={()=>{playActions('pdc3',1)}}/>
            <mesh name="pdc3-door2" geometry={nodes['pdc3-door2'].geometry} material={materials['cw-pe-silver']} position={[3.73, -6.2, 0.1]} rotation={[-Math.PI, 0, 1.55]} scale={-1} 
              onClick={()=>{playActions('pdc3',1)}}/>
            <mesh name="pdc3-frame" geometry={nodes['pdc3-frame'].geometry} material={materials['CW-Titanium-shiny']} position={[-98.64, 0, 16]}>
              <group name="pdc3" position={[85.67, 0.65, -15.77]} rotation={[0, 0, -1.54]}>
                <mesh name="xxx_-_corvette_whole055" geometry={nodes['xxx_-_corvette_whole055'].geometry} material={materials['cw-pe-silver']} />
                <mesh name="xxx_-_corvette_whole055_1" geometry={nodes['xxx_-_corvette_whole055_1'].geometry} material={materials['Material.007']} />
              </group>
            </mesh>
          </mesh>
          <mesh name="pdc4-housing" geometry={nodes['pdc4-housing'].geometry} material={materials['cw-pe-silver']} position={[63.81, 0, -16]}>
            <mesh name="pdc4-door1" geometry={nodes['pdc4-door1'].geometry} material={materials['cw-pe-silver']} position={[3.77, 6.64, 0.1]} rotation={[0, 0, -1.6]} 
              onClick={()=>{playActions('pdc4',1)}}/>
            <mesh name="pdc4-door2" geometry={nodes['pdc4-door2'].geometry} material={materials['cw-pe-silver']} position={[4.27, -5.72, 0.1]} rotation={[0, 0, 1.6]} 
              onClick={()=>{playActions('pdc4',1)}}/>
            <mesh name="pdc4-frame" geometry={nodes['pdc4-frame'].geometry} material={materials['CW-Titanium-shiny']} position={[-100.69, 0, 16]}>
              <group name="pdc4" position={[85.84, 0.39, -15.88]} rotation={[0, 0, -1.56]}>
                <mesh name="xxx_-_corvette_whole055" geometry={nodes['xxx_-_corvette_whole055'].geometry} material={materials['cw-pe-silver']} />
                <mesh name="xxx_-_corvette_whole055_1" geometry={nodes['xxx_-_corvette_whole055_1'].geometry} material={materials['Material.007']} />
              </group>
            </mesh>
          </mesh>
          <mesh name="pdc6-housing" geometry={nodes['pdc6-housing'].geometry} material={materials['cw-pe-silver']} position={[-0.26, 45.5, 105.7]} rotation={[0, 0, Math.PI / 2]}>
            <mesh name="pdc6-door1" geometry={nodes['pdc6-door1'].geometry} material={materials['cw-pe-silver']} position={[3.09, 6.16, 0.04]} rotation={[0, 0, -1.58]} 
              onClick={()=>{playActions('pdc6',1)}}/>
            <mesh name="pdc6-door2" geometry={nodes['pdc6-door2'].geometry} material={materials['cw-pe-silver']} position={[3.78, -6.39, 0.02]} rotation={[0, 0, 1.57]} 
              onClick={()=>{playActions('pdc6',1)}}/>
            <mesh name="pdc6-frame" geometry={nodes['pdc6-frame'].geometry} material={materials['CW-Titanium-shiny']} position={[-104.3, 0, 16]}>
              <group name="pdc6" position={[85.66, 0.5, -16.05]} rotation={[0, 0, -1.61]}>
                <mesh name="xxx_-_corvette_whole055" geometry={nodes['xxx_-_corvette_whole055'].geometry} material={materials['cw-pe-silver']} />
                <mesh name="xxx_-_corvette_whole055_1" geometry={nodes['xxx_-_corvette_whole055_1'].geometry} material={materials['Material.007']} />
              </group>
            </mesh>
          </mesh>
          <mesh name="pdc7-housing" geometry={nodes['pdc7-housing'].geometry} material={materials['cw-pe-silver']} position={[-0.26, -46.96, 105.7]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh name="pdc7-door1" geometry={nodes['pdc7-door1'].geometry} material={materials['cw-pe-silver']} position={[3.3, -6.25, -0.01]} rotation={[0, 0, 1.58]} 
              />
            <mesh name="pdc7-door2" geometry={nodes['pdc7-door2'].geometry} material={materials['cw-pe-silver']} position={[3.29, 5.87, -0.01]} rotation={[0, 0, -1.61]} 
              />
            <mesh name="pdc7-frame" geometry={nodes['pdc7-frame'].geometry} material={materials['CW-Titanium-shiny']} position={[-101.81, 0, 16]}>
              <group name="pdc7" position={[85.89, -0.1, -15.92]} rotation={[0.01, 0.01, -1.56]}>
                <mesh name="xxx_-_corvette_whole055" geometry={nodes['xxx_-_corvette_whole055'].geometry} material={materials['cw-pe-silver']} />
                <mesh name="xxx_-_corvette_whole055_1" geometry={nodes['xxx_-_corvette_whole055_1'].geometry} material={materials['Material.007']} />
              </group>
            </mesh>
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/ship.glb');

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
            <Model />
      </Suspense>
      {/* REPLACE THIS LIGHT AS NEEDED IT'S A GOOD START */}
      <ambientLight intensity={1000}/>
    </>
  );
};

const Ship = () => {
  return (
    <Canvas shadows gl={{ physicallyCorrectLights: true, toneMappingExposure:.02 }}>
      {/* REMOVE ORBIT CONTROLS TO FORCE THE CAMERA VIEW */}
      <Environment
        files={['/box/px.png', '/box/nx.png', '/box/py.png', '/box/ny.png', '/box/pz.png', '/box/nz.png']}
        background={true}
      />

      <OrbitControls />
          <Scene>
          </Scene>
    </Canvas>
  );
};

export default Ship;