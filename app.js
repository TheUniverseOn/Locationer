//Listen for submit	

document.querySelector('#zipForm').addEventListener('submit', getLocationInfo);

function getLocationInfo(e){

	
	//Get zip value from input 
	const zip = document.querySelector('.zip').value;
	
	//Make request 
	fetch(`http://api.zippopotam.us/us/${zip}`)
		.then(response => {
		console.log(response.status);
		if(response.status != 200){
		
			showIcon('remove');
			document.querySelector('#output').innerHTML= 
			`

             <article class="message  is-danger"> <div class="message-body">Invalid Zipcod, please try again</article>


             `;
					throw Error(response.statusText);
			
								 
		} else{
			return response.json();
			showIcon('check');
		}
	})
	     .then(data => {
		console.log(data);
	})
	.catch(err => console.log(err));
	
		e.preventDefault();
}

function showIcon(){
	//CLEAR ICONS
	document.querySelector('.icon-remove').style.display= 'none'; 
	document.querySelector('.icon-check').style.display= 'none'; 
	
	//show correct icon 
	document.querySelector(`.icon-${icon}`).style.display= 'inline-flex'; 
}