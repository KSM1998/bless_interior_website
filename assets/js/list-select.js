	const buttons = document.querySelectorAll("li");
	const section = document.querySelectorAll(".each-gallery");
			buttons.forEach(item => {
				
				item.addEventListener('click', ()=>{
					buttons.forEach(item => {
						item.clssName ="";
					});
					item.className ="active";
					
					//show images
					let values = item.textContent;
					section.forEach(show => {
							show.style.display = "none";
						if(show.getAttribute("data-id") === values || values === "전체") {
							show.style.display = "block";
						}
					});
					
				});
				
			});