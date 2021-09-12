const btnSearch = document.querySelector("#btnSearch");
const containOfResult = document.querySelector("#contain-result")
const msgBeforeResult = document.querySelector("#msgHide");
const msgZeroRes = document.querySelector("#zeroRes");
const msgPb = document.querySelector("#pbRes");
const containModal = document.querySelector(".modal-contain");
const zoneModal = document.querySelector(".zone-modal")
const resModTitle = document.querySelector(".modal-title");
const resModArt = document.querySelector(".modal-artist");
const resModAlb = document.querySelector(".modal-album");
const resModTag = document.querySelector(".modal-tag");
const resModLength = document.querySelector(".modal-length");
const resModScore = document.querySelector(".modal-score");
const validSearch = document.querySelector("#formSearch");
const barSearch = document.querySelector("#barSearch");
const selectResult = document.querySelector("#selectOption");
const valueResearch = document.querySelector(".valueResearch");
const btnOffset = document.querySelector(".btnShowResult");
const showCount = document.querySelector(".CountResult");
const btnCloseModal = document.querySelector(".btnCloseMod");
const placeForCovers = document.querySelector(".zoneImgCov");
const noImgMsg = document.querySelector("#noImg");
const titleCover = document.querySelector(".title-cover");
const loading = document.querySelector(".loading");
const divLoad = document.querySelector(".load");





function addResult (name,title,album,nb,length,idRelease,realId,tag){

    // father of item of the result "ul"
    const listOfResult = document.createElement("ul")
    listOfResult.className = "list-result"
    containOfResult.appendChild(listOfResult)

    // father of number result  "li"
    const zoneOfnumber = document.createElement("li");
    zoneOfnumber.className = "item-res";
    listOfResult.appendChild(zoneOfnumber);

    // child of number "p"
    const resOfNumber = document.createElement("p");
    zoneOfnumber.appendChild(resOfNumber);
    resOfNumber.textContent = nb
    
    // father of artist result  "li"
    const zoneOfArtist = document.createElement("li");
    zoneOfArtist.className = "item-res";
    listOfResult.appendChild(zoneOfArtist);
    

    // child of artist "p"
    const resOfArtist = document.createElement("p"); 
    zoneOfArtist.appendChild(resOfArtist);
    resOfArtist.textContent = name; 

    // father of title result  "li"
    const zoneOfTitle = document.createElement("li");
    zoneOfTitle.className = "item-res";
    listOfResult.appendChild(zoneOfTitle);


    // child of title "p"
    const resOfTitle = document.createElement("p");
    zoneOfTitle.appendChild(resOfTitle);
    resOfTitle.textContent = title; 
    

    // father of album result  "li"
    const zoneOfAlbum = document.createElement("li");
    zoneOfAlbum.className = "item-res";
    listOfResult.appendChild(zoneOfAlbum);

    // child of album "p"
    const resOfAlbum = document.createElement("p");
    zoneOfAlbum.appendChild(resOfAlbum); 
    resOfAlbum.textContent = album
    
    
    // father of more result  "li"
    const zoneOfmore = document.createElement("li");
    zoneOfmore.className = "item-res";
    listOfResult.appendChild(zoneOfmore);
    

    // child of more "btn"
    const resOfMore = document.createElement("button");
    resOfMore.textContent = "plus d'info"
    zoneOfmore.appendChild(resOfMore);


    //  evenement sur pour la modal
    resOfMore.addEventListener("click",function(){
        CoverVisible();
        placeForCovers.innerHTML = " ";
        getModal(name,title,album,length,idRelease,realId,tag)
    })
}





