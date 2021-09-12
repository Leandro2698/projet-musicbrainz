function CoverVisible(){
    containModal.classList.add("cover-visible");
}
function deletResCover(){
    containModal.classList.remove("cover-visible");
    
}
function convertInMin(length) {
    let min = Math.floor(length / 60000);
    let sec = ((length % 60000) / 1000).toFixed(0);
    return min + ":" + (sec < 10 ? '0' : '') + sec;
}


btnCloseModal.addEventListener("click",function(){
    deletResCover(); 
})




function getModal(name,title,album,length,idRelease,realId,tag){

for(i=0 ; i < idRelease.length; i++){
        const request = new XMLHttpRequest();

    request.open('GET','https://coverartarchive.org/release/'+idRelease[i], true);
    request.addEventListener("readystatechange", function(){

    

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {

                const allCovers = JSON.parse(request.responseText);

                resModArt.textContent = "ARTISTE(S) : "+ name;
                resModTitle.textContent = "TITRE : "+ title;
                resModAlb.textContent = "ALBUM(S) : "+ album ;
                resModLength.textContent = "DURÉE : "+ convertInMin(length) + "min";
                resModTag.textContent = "GENRE(S) : "+tag;
                titleCover.textContent = "COVER(S)";
                
                

                getScore(realId)

               for(k = 0; k < allCovers.images.length; k++){

                   let cover = document.createElement("img");
                   cover.src = allCovers.images[k].thumbnails.small 
                   placeForCovers.appendChild(cover);

               }    
                       
            }
            else {
                    resModArt.textContent = "ARTISTE(S) : "+ name;

                    resModTitle.textContent = "TITRE : "+ title;

                    // resModAlb.textContent = "ALBUM(S) : "+ album ;

                    resModLength.textContent = "DURÉE : "+ convertInMin(length);

                    resModTag.textContent = "GENRE(S) : "+tag;

                    titleCover.textContent = "AUCUNE COVER POUR LE MOMENT";

                    getScore(realId)
             
            }
        }
    });
    request.send();

}
}


function getScore(realId){
    const request = new XMLHttpRequest();
    request.open('GET','https://musicbrainz.org/ws/2/recording/'+realId+'?inc=ratings&fmt=json', true);
    request.addEventListener("readystatechange", function(){

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {

        
                const allResults = JSON.parse(request.responseText);
                
                
                let score = allResults.rating.value;
                
                if(score === null){
                    resModScore.textContent = "AUCUNE NOTE";
                }
                else{ 
                   
                    resModScore.textContent = "NOTE : " +score;
                
                }
    
            } 
            else { 
            }
        }
    });
    request.send();
}



    


