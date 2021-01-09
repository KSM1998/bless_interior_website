
var buttons = document.querySelectorAll("li");
var section = document.querySelectorAll(".each-gallery");

       	 Array.prototype.forEach.call(buttons, function(item){
          	item.addEventListener('click', function () {
            Array.prototype.forEach.call(buttons, function(item){
              item.clssName = "";
            });
            item.className = "active"; //show images

            var values = item.textContent;
            Array.prototype.forEach.call(section, function(show){
              show.style.display = "none";
              if (show.getAttribute("data-id") === values || values === "전체")  {
               show.style.display = "block";
              }
            });            
           });
         });