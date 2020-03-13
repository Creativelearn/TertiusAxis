/**
 * @author Dragon3DGraff / http://dragon3dgraff.ru/
 */
"use strict"

let TertiusAxis = function () {

	let taUI = new TA_UI();
	
	taUI.init();

	let manipulatingContainer = taUI.createContainer( 'Manipulating' );
	taUI.addElement( manipulatingContainer, 'button', 'Select', function () {

		taScene.mode.action = 'select';

	} 
	);

	let addToSceneContainer = taUI.createContainer( 'sectionDiv' );
	addToSceneContainer.id = 'AddToScene';
	let title =  taUI.addElement( addToSceneContainer, 'p', 'Add to scene', '');
	title.className = 'sectionName';

	
	// console.log (func);
	taUI.addElement( addToSceneContainer, 'button', 'Cube', function () {
	
		taScene.mode.action = 'creationEntity';
		taScene.mode.entity = 'cube';

	}
	);

	taUI.addElement( addToSceneContainer, 'button', 'Sphere', function () {
	
		taScene.mode.action = 'creationEntity';
		taScene.mode.entity = 'sphere';

	}
	);

	let paramContainer = taUI.createContainer( 'sectionDiv' );
	paramContainer.id = 'Parameters';
	 title =  taUI.addElement( paramContainer,'p', 'Parameters', '');
	title.className = 'sectionName';

	
	

	let infoDiv = taUI.createContainer( 'info' );

	let taScene = new TA_Scene( taUI );	
	taUI.setScene( taScene );

	// taUI.taScene = taScene;

	// let cubeButton = document.getElementById( 'createCube' );

	// cubeButton.addEventListener( 'click', function () {
	
	// 	taScene.mode.creationEntity = true;
	// 	taScene.mode.entity = 'cube';

	// }, false );

	// let sphereButton = document.getElementById( 'createSphere' );

	// sphereButton.addEventListener( 'click', function () {

	// 	taScene.mode.creationEntity = true;
	// 	taScene.mode.entity = 'sphere';

	// }, false );


	// Object.call(addToScene).addElement('button', 'Cube', 'cube');
	// let uicontainer = document.getElementById( 'Properties' );
	// 	let dom = document.createElement( 'div' );
	// 	dom.innerHTML = 'text';

	// 	uicontainer.appendChild(dom);
		
}
// echo "# TertiusAxis" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git remote add origin https://github.com/Dragon3DGraff/TertiusAxis.git
// git push -u origin master
