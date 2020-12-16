function pageLoad() {
	document.getElementById('root');
	let rootDiv = document.querySelector('#root');

	
	/* csináljunk egy tömböt és a tömbön belül egy objectumot */

	let myObjects = [

		{
			tag: "h1",
			content: "Szeidl Balázs"
		},

		{
			tag: "p",
			content: "frontend developer"
		}
	];

	/*for (let index = 0; index < myObjects.length; index++) {
		const element = myObjects[index];
		
	}*/

	/*Az object-en belül a kulcsok sorrendje nem számít, nem azt a sorrendet adja vissza, ahogy mi beírtuk az object tagjait. Ezzel szemben az Array ugyanazt a sorrendet adja vissza, ahogy az arraybe az elemeket beírtuk.*/

	/*insert adjacenthtmllel tegyük be a root divbe úgy hogy az objeten belül 
	<h1>Szeidl Balázs</h1>
	<p>Lorem ipsum</p>*/


	for (myObject of myObjects) {
		console.log(myObjects);
		rootDiv.insertAdjacentHTML('afterbegin', `<${myObject.tag}>${myObject.content}</${myObject.tag}>`);
	}

	rootDiv.addEventListener('click', function() {
		rootDiv.classList.add('clicked');
	}	);

	
 

	


	  
	





}

window.addEventListener('load', pageLoad);