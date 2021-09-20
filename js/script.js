
            import * as THREE from '/js/three.module.js';
            import { OrbitControls } from '/js/OrbitControls.js';
            import { EXRLoader } from '/js/EXRLoader.js';
            import { OBJLoader } from '/js/OBJLoader.js';
            import { FlakesTexture } from '/js/FlakesTexture.js';

            var renderer, scene, camera,light, camera_group;

            var h = window.innerHeight
            var w = window.innerWidth
            var obj_group = new THREE.Group()
            var stone_group = new THREE.Group()
            var extra_group = new THREE.Group()
            var light_group = new THREE.Group()
            var pressed = false 
            var current_z,current_x
            var counter = 0
            var timeout 
                var obj_name_list = [
                    '1.obj',
                    '2.obj',
                    '3.obj',
                    '4.obj',
                    '5.obj',
                    '6.obj',
                    '7.obj',
                    '8.obj',
                    '9.obj'
                ]
                var obj_list = Array()
                var obj_line_list = Array()
                var stone_name_list = ['stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj','stone.obj']
                var extra_name_list = [
                    'teamugobj.obj',
                    'bowl.obj',
                    'sprite.obj',
                    'boxbottle.obj',
                    'bottle.obj',
                    ]
                var stone_list = Array()
                var extra_list = Array()

                init();
                animate();



            function animate() {
                console.log('ehy0')
                
                if(pressed){
                    clearTimeout(timeout)
                                easing_ani(0,
                                    current_z,
                                    pressed_char_z*5+115,
                                    current_x,
                                    (pressed_char_x*3) - (46*1.5)
                                )
                    light_group.rotation.y = degtorad(pressed_char_x*4 - (pressed_char_x*2))
                }else{
                    console.log('ehy')
                    camera.position.z = 115
                    camera.position.x = 100
                    current_z = 115
                    current_x = 100
                    light_group.rotation.y = degtorad(10)
                }
                render()
            }
            function easing_ani(counter,prev_z,newnew_z,prev_x,newnew_x){
                counter++
                if(counter<20){
                    camera.position.x = map_range(counter,0,20,prev_x,newnew_x)
                    camera.position.z = map_range(counter,0,20,prev_z,newnew_z)
                    current_x = map_range(counter,0,20,prev_x,newnew_x)
                    current_z = map_range(counter,0,20,prev_z,newnew_z)
                    render()
                    timeout = setTimeout(function(){
                        easing_ani(counter,prev_z,newnew_z,prev_x,newnew_x)
                    })
                }else{
                    // camera.position.z = newnew_z
                    // camera.position.x = newnew_x
                    current_z = pressed_char_z*5+115
                    current_x = (pressed_char_x*3) - (46*1.5)
                    render()
                    
                }
            }
            function easeInQuint(x){
                return x*x*x*x;
            }

            function init() {

                // camera
                camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 10, 1000 );
                camera.position.set( 100, 10, 115 );
                // camera.rotation.x = degtorad(220)
                camera_group = new THREE.Group()
                camera_group.add(camera)
                

                
                // scene
                scene = new THREE.Scene();
                scene.add(camera_group)
                
                scene.background = new THREE.Color(0xffffff);
                scene.fog = new THREE.FogExp2(0xff0000, 0.003);
                // ground        
                var groundGeometry =  new THREE.PlaneBufferGeometry( 1000, 300 );
                var groundMaterial =  new THREE.MeshBasicMaterial( { color: 0xffffff } );
                var ground = new THREE.Mesh( groundGeometry, groundMaterial );

                ground.rotation.x = - Math.PI * 0.5;
                ground.position.y = -0.1
                
                // camera.lookAt( 0,0,0 ); 
                scene.add( ground );
                
                // shadow_ground                
                var planeGeometry = new THREE.PlaneGeometry( 1000, 300 );
                    planeGeometry.rotateX( - Math.PI / 2 );

                var planeMaterial = new THREE.ShadowMaterial({color: 0xaec1e2, transparent: true, opacity: 1});

                var plane = new THREE.Mesh( planeGeometry, planeMaterial );
                plane.receiveShadow = true;
                scene.add( plane );

         


       
                // matcap                
                let goldMat;
                const textureLoader = new THREE.TextureLoader();
                var matcap = textureLoader.load('assets/9.jpg');
              
                goldMat = new THREE.ShaderMaterial({
                    transparent: false,
                    side: THREE.DoubleSide,
                    uniforms: { 
                        tMatCap: { type: 't', value: matcap } 
                    },
                    vertexShader: document.getElementById( 'vs-matcap' ).textContent,
                    fragmentShader: document.getElementById( 'fs-matcap' ).textContent,
                    flatShading: false
                });

                // matcap                
                let greenMat;
                var matcap2 = textureLoader.load('assets/2.png');
              
                greenMat = new THREE.ShaderMaterial({
                    transparent: false,
                    side: THREE.DoubleSide,
                    uniforms: { 
                        tMatCap: { type: 't', value: matcap2 } 
                    },
                    vertexShader: document.getElementById( 'vs-matcap' ).textContent,
                    fragmentShader: document.getElementById( 'fs-matcap' ).textContent,
                    flatShading: false
                });
       
                // matcap                
                let blackMat;
                var matcap3 = textureLoader.load('assets/13.jpeg');
              
                blackMat = new THREE.ShaderMaterial({
                    transparent: false,
                    side: THREE.DoubleSide,
                    uniforms: { 
                        tMatCap: { type: 't', value: matcap3 } 
                    },
                    vertexShader: document.getElementById( 'vs-matcap' ).textContent,
                    fragmentShader: document.getElementById( 'fs-matcap' ).textContent,
                    flatShading: false
                });
       


                const normalMap3 = new THREE.CanvasTexture( new FlakesTexture() );
                normalMap3.wrapS = THREE.RepeatWrapping;
                normalMap3.wrapT = THREE.RepeatWrapping;
                normalMap3.repeat.x = 10;
                normalMap3.repeat.y = 6;
                normalMap3.anisotropy = 16;

                const clearcoatNormaMap = textureLoader.load( 'assets/Scratched_gold_01_1K_Normal.png' );

                // car paint

                let car_material = new THREE.MeshPhysicalMaterial( {
                    clearcoat: 1.0,
                    clearcoatRoughness: 0.1,
                    metalness: 0.9,
                    roughness: 0.5,
                    color: 0x0000ff,
                    normalMap: normalMap3,
                    normalScale: new THREE.Vector2( 0.15, 0.15 )
                } );


                const normalMap2 = textureLoader.load( 'assets/Water_1_M_Normal.jpg' );

                var new_material = new THREE.MeshPhysicalMaterial( {
                    clearcoat: 1.0,
                    metalness: 0.0,
                                roughness: 0.1,
                    color: 0xffffff,
                    emissive: 0x686868,
                    normalMap: normalMap2,
                    normalScale: new THREE.Vector2( 0.15, 0.15 ),
                    clearcoatNormalMap: clearcoatNormaMap,
                    side: THREE.DoubleSide,

                    // y scale is negated to compensate for normal map handedness.
                    clearcoatNormalScale: new THREE.Vector2( 2.0, - 2.0 )
                } );

                const normalMap4 = textureLoader.load( 'assets/plaster-normal.jpg');

                var new_material2 = new THREE.MeshPhysicalMaterial( {
                    clearcoat: 3.0,
                    metalness: 3.0,
                    color: 0xffffff,
                    emissive: 0x8fbfad,
                    normalMap: normalMap4,
                    normalScale: new THREE.Vector2( 0.15, 0.15 ),
                    clearcoatNormalMap: clearcoatNormaMap,

                    // y scale is negated to compensate for normal map handedness.
                    clearcoatNormalScale: new THREE.Vector2( 2.0, - 2.0 )
                } );

                var new_material5 = new THREE.MeshPhysicalMaterial( {
                    clearcoat: 1.0,
                    metalness: 0.0,
                    color: 0xff0000,
                    normalMap: normalMap4,
                    normalScale: new THREE.Vector2( 0.15, 0.15 ),
                    clearcoatNormalMap: clearcoatNormaMap,

                    // y scale is negated to compensate for normal map handedness.
                    clearcoatNormalScale: new THREE.Vector2( 2.0, - 2.0 )
                } );
                var loader = new OBJLoader();
                load_obj(0)
                function load_obj(i){
                    var obj_line = new THREE.Group()
                    loader.load( 'obj/'+obj_name_list[i],
                        function( obj ){
                            obj_list.push(obj)
                            obj_group.add( obj );
                            // obj_group.add( obj_line );
                            obj.traverse( function( child ) {
                                if ( child instanceof THREE.Mesh ) {
                                    var geo = child.geometry
                                    var mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 2 } );
                                    var wireframe = new THREE.LineSegments( geo, mat );
                                    obj_line.add(wireframe)

                                    child.material =  new_material
                                }
                            });
                            obj_line_list.push( obj_line );

                            obj.rotation.y = degtorad(45)
                            obj.children[0].castShadow = true;
                        
                            if(obj_list.length<obj_name_list.length){
                                load_obj(obj_list.length)
                            }else{
                    render() 
                                // console.log(ob) 
                                scene.add( obj_group );
                                for (var j = 8; j >= 0; j--) {
                                    obj_list[j].position.x = j*10-(4*10)
                                }
                                console.log(obj_list)
                                console.log(obj_line_list)
                                // digitalcanon
                                obj_list[0].position.y = 5
                                obj_list[0].rotation.y = degtorad(135)
                                obj_list[0].scale.set(0.065,-0.065,0.085)
                                obj_list[0].position.z = -180
                                obj_list[0].position.x = 0

                                //WT
                                obj_list[1].scale.set(0.05,0.05,0.05)
                                obj_list[1].position.z = -15
                                obj_list[1].position.y = 0
                                obj_list[1].position.x = -60
                                obj_list[1].rotation.y = degtorad(-30)
                                obj_list[1].rotation.x = degtorad(-30)

                                // ru4real
                                obj_list[2].position.y = 18
                                obj_list[2].scale.set(0.085,0.085,0.085)
                                obj_list[2].position.z = -130
                                obj_list[2].position.x = 100
                                obj_list[2].rotation.x = degtorad(-5)
                                // obj_list[2].rotation.x = degtorad(1.5)
                                obj_list[2].rotation.y = degtorad(0)

                                // sabu
                                obj_list[3].scale.set(0.05,0.05,0.05)
                                obj_list[3].position.z = -30
                                obj_list[3].position.y = 10
                                obj_list[2].position.x = 100
                                obj_list[3].rotation.z = degtorad(0)
                                obj_list[3].rotation.x = degtorad(0)
                                obj_list[3].rotation.x = degtorad(30)
                                obj_list[3].rotation.y = degtorad(-70)


                                // summer
                                obj_list[4].position.y = 5
                                obj_list[4].scale.set(0.045,0.045,0.045)
                                obj_list[4].position.z = 30
                                obj_list[4].position.x = 0
                                obj_list[4].position.z = -130
                                // very
                                // obj_list[5].position.y = 15
                                obj_list[5].scale.set(0.045,0.045,0.045)
                                obj_list[5].position.z = -80
                                obj_list[5].position.x = 40
                                obj_list[5].rotation.y = degtorad(-45)

                                // orgd
                                // obj_list[6].position.y = 10
                                obj_list[6].scale.set(0.105,0.105,0.105)
                                obj_list[6].position.z = -150
                                obj_list[6].position.x = 150
                                obj_list[6].rotation.y = degtorad(-50)

                                // istanbul
                                obj_list[7].position.y = 30
                                obj_list[7].position.z = -140
                                obj_list[7].position.x = 0
                                obj_list[7].scale.set(0.08,0.08,0.08)


                                // worldonawire
                                obj_list[8].scale.set(0.125,0.15,0.125)
                                obj_list[8].position.y = 1
                                obj_list[8].position.z = -150
                                obj_list[8].position.x = -170
                                obj_list[8].rotation.y = degtorad(0)
                                obj_list[8].rotation.z = degtorad(0)


                                obj_line_list[0].position.y = 5
                                obj_line_list[0].rotation.y = degtorad(135)
                                obj_line_list[0].scale.set(0.065,-0.065,0.085)
                                obj_line_list[0].position.z = -180
                                obj_line_list[0].position.x = 0

                                //WT
                                obj_line_list[1].scale.set(0.05,0.05,0.05)
                                obj_line_list[1].position.z = -15
                                obj_line_list[1].position.y = 0
                                obj_line_list[1].position.x = -60

                                // ru4real
                                obj_line_list[2].position.y = 18
                                obj_line_list[2].scale.set(0.085,0.085,0.085)
                                obj_line_list[2].position.z = -130
                                obj_line_list[2].position.x = 100
                                obj_line_list[2].rotation.x = degtorad(-5)
                                // obj_line_list[2].rotation.x = degtorad(1.5)
                                obj_line_list[2].rotation.y = degtorad(0)

                                // sabu
                                obj_line_list[3].scale.set(0.05,0.05,0.05)
                                obj_line_list[3].position.z = -10
                                obj_line_list[3].position.y = 0
                                obj_line_list[2].position.x = 100
                                obj_line_list[3].rotation.z = degtorad(0)
                                obj_line_list[3].rotation.x = degtorad(0)

                                // summer
                                obj_line_list[4].position.y = 5
                                obj_line_list[4].scale.set(0.045,0.045,0.045)
                                obj_line_list[4].position.z = 30
                                obj_line_list[4].position.x = 0

                                // very
                                // obj_line_list[5].position.y = 15
                                obj_line_list[5].scale.set(0.045,0.045,0.045)
                                obj_line_list[5].position.z = -80
                                obj_line_list[5].position.x = 0
                                obj_line_list[5].rotation.y = degtorad(-45)

                                // orgd
                                // obj_line_list[6].position.y = 10
                                obj_line_list[6].scale.set(0.105,0.105,0.105)
                                obj_line_list[6].position.z = -150
                                obj_line_list[6].position.x = 150
                                obj_line_list[6].rotation.y = degtorad(-50)

                                // istanbul
                                obj_line_list[7].position.y = 30
                                obj_line_list[7].position.z = -140
                                obj_line_list[7].position.x = 0
                                obj_line_list[7].scale.set(0.081,0.081,0.081)

                                // worldonawire
                                obj_line_list[8].scale.set(0.125,0.15,0.125)
                                obj_line_list[8].position.y = 1
                                obj_line_list[8].position.z = -150
                                obj_line_list[8].position.x = -170
                                obj_line_list[8].rotation.y = degtorad(0)
                                obj_line_list[8].rotation.z = degtorad(0)
                            }
                        }
                    );
                }

                load_extra(0)
                function load_extra(i){
                    loader.load( 'obj/'+extra_name_list[i],
                        function( obj ){
                            extra_list.push(obj)
                            obj.scale.set(2.5,2.5,2.5)
                            obj.traverse( function( child ) {
                                if ( child instanceof THREE.Mesh ) {
                                    child.material = goldMat
                                }
                            });
                            obj.children[0].castShadow = true;

                            extra_group.add( obj );
                            if(extra_list.length<extra_name_list.length){
                                load_extra(extra_list.length)
                            }else{
                                scene.add( extra_group );
                                extra_list[2].scale.set(5.5,5.5,5.5)
                                extra_list[3].scale.set(20.5,20.5,20.5)
                                extra_list[4].scale.set(0.075,0.075,0.075)
                                extra_list[4].children[0].material = greenMat 
                                for (var k = 6; k >= 0; k--) {
                                        extra_list.push(extra_list[0].clone())
                                        extra_group.add( extra_list[extra_list.length-1] );
                                        extra_list.push(extra_list[1].clone())
                                        extra_group.add( extra_list[extra_list.length-1] );
                                        extra_list.push(extra_list[2].clone())
                                        extra_group.add( extra_list[extra_list.length-1] );
                                        extra_list.push(extra_list[3].clone())
                                        extra_group.add( extra_list[extra_list.length-1] );
                                        extra_list.push(extra_list[4].clone())
                                        extra_group.add( extra_list[extra_list.length-1] );
                                        console.log(extra_list.length)
                                        if(k == 0){
                                            for (var j = extra_list.length - 1; j >= 0; j--) {
                                                extra_list[j].position.x = (Math.floor(Math.random() * 100)-50)
                                                extra_list[j].position.z = (Math.floor(Math.random() * 100)-50)
                                            }
                    render()

                                        }
                                }
                                console.log(extra_list)
                            }
                        }
                    );
                }
                
                load_stone(0)
                function load_stone(i){
                    loader.load( 'obj/stone.obj',
                        function( obj ){
                            var group = new THREE.Group()
                            stone_list.push(group)
                            group.add(obj)
                            var ran = Math.random()*1.2
                            obj.scale.set(1+ran,1+ran,1+ran)
                            obj.traverse( function( child ) {
                                if ( child instanceof THREE.Mesh ) {
                                    child.material = new_material2
                                    if(stone_list.length%10 == 0){
                                    child.material = blackMat
                                    }
                                }
                            });
                            obj.children[0].castShadow = true;

                            stone_group.add( group );
                            if(stone_list.length<422){
                                load_stone(0)
                            }else{
                                scene.add( stone_group );
                                for (var i = Math.floor(stone_list.length/2) - 1; i >= 0; i--) {
                                    stone_list[i].children[0].position.x = 1*i
                                    stone_list[i].position.z = -50
                                    stone_list[i].position.x = -50
                                    // stone_list[i].position.y = -1
                                    stone_list[i].rotation.y = degtorad(8*i)
                                }
                                for (var i = Math.floor(stone_list.length/2) - 1; i >= 0; i--) {
                                    stone_list[i+Math.floor(stone_list.length/2)].children[0].position.x = 0.75*i
                                    stone_list[i+Math.floor(stone_list.length/2)].position.z = -50
                                    stone_list[i+Math.floor(stone_list.length/2)].position.x = 20
                                    stone_list[i+Math.floor(stone_list.length/2)].position.y = -1
                                    stone_list[i+Math.floor(stone_list.length/2)].rotation.y = degtorad(8*i)
                    render()
                                }
                            }
                        }
                    );
                }
                // light                
                    light = new THREE.DirectionalLight( 0xffffff );
                    light.lookAt( 0,0,0 );
                    light.position.set( 50, 10, 0 );
                    light.castShadow = true;
                    light.shadow.camera.left = -100;
                    light.shadow.camera.right = 100;
                    light.shadow.camera.top = 200;
                    light.shadow.camera.bottom = -100;
                    light.shadow.radius = 0.25
                    light_group.add(light)
                    // light.shadow.mapSize.width = 512; // default
                    // light.shadow.mapSize.height = 512; // default
                    light.shadow.camera.near = 0.1; // default
                    light.shadow.camera.far = 5000; // default
                    light.shadow.camera.fov = 10;
                    scene.add( light_group );

                // renderer                
                renderer = new THREE.WebGLRenderer();
                renderer.shadowMap.enabled = true;
                renderer.setSize( window.innerWidth, window.innerHeight );

                document.body.appendChild(renderer.domElement);
                renderer.render(scene, camera);
                setTimeout(function(){
                    render()
                },1000)


            }

            function degtorad(degrees) {
                return degrees * Math.PI / 180;
            }
            function onWindowResize() {

                renderer.setSize( window.innerWidth, window.innerHeight );

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                render();

            }

            function render() {
                renderer.render( scene, camera );

            }
            function map_range(value, low1, high1, low2, high2) {
                return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
            }
                var pressed_char_x
                var pressed_char_z
                var keypos_array = [
                        [49,81,65,90],
                        [50,87,83,88],
                        [51,69,68,67],
                        [52,82,70,86],
                        [53,84,71,66],
                        [54,89,72,78],
                        [55,85,74,77],
                        [56,73,75,188],
                        [57,79,76,190],
                        [48,80,186,191],
                        [189,219,222],
                        [187,221,13],
                    ]
                $(document).keydown(function(e) {
                    pressed = true
                    var code = e.keyCode || e.which;
                    for (var i = keypos_array.length - 1; i >= 0; i--) {
                        for (var j = keypos_array[i].length - 1; j >= 0; j--) {
                            if(keypos_array[i][j] == code){
                            pressed_char_x = i*4 + j
                            pressed_char_z = j
                            animate()
                            return false

                            }
                        }
                    }
                });
