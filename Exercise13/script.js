function createCard(title,cName,views,monthOld,duration,thumbnail){
   let html=  `<div class="card">
   <img class="img" src=${thumbnail}>
   <div class="text">
       <h3>${title}</h3>
       <p>${cName} . ${views} . ${monthOld} Months ago</p>
   </div>
</div>`
document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}

createCard("hii","cwh",1,3,"3:10","https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ");
createCard("hii","cwh",1,3,"3:10","https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ");
createCard("hii","cwh",1,3,"3:10","https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ");
createCard("hii","cwh",1,3,"3:10","https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ");
