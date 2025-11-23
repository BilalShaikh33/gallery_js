var gallery = [
    "https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPBJeCI5Zn0H6bVe9TwlEr8bBTQe5f42DGQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYlECKGgTE1fNTMa_tF6Upnp4O7EKv8C01g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfDg6lWT_71HaElHxKu11quu1Y7dNkH9y6w&s",


]

var imgShow = document.getElementById("imgShow")
var disabbut = document.getElementById("nexbut")
var prevbut = document.getElementById("prevbut")
var nextbut = document.getElementById("nexbut")

var currentIndex = 0 


function nextImg(){
    currentIndex +=1
    imgShow.src = gallery[currentIndex]

    if (currentIndex ==  3) {
        
        disabbut.style.display = "none"

   
        
        
    }

    if (currentIndex == 1) {
            
        prevbut.style.display = "inline"
        
    }
}




function prevImg(){
    currentIndex -=1
    imgShow.src = gallery[currentIndex]

    if (currentIndex ==  2 ) {  
        nextbut.style.display = "inline"
    }

    if (currentIndex == 0) {
        prevbut.style.display = "none"
    }
}
