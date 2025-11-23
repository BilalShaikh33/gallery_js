var gallery = [
    "https://www.psu.com/wp/wp-content/uploads/2021/08/ghost-of-tsushima-directors-cut-review-ps5-4.jpg",
    "https://cdn.wccftech.com/wp-content/uploads/2018/07/ghost_tsushima_battlefield-scaled.jpg",
    "https://i.redd.it/iyiug45hoccc1.jpeg",
    "https://www.psu.com/wp/wp-content/uploads/2021/08/ghost-of-tsushima-directors-cut-review-ps5-1.jpg",


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
