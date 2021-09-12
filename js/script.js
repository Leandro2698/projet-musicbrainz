let research;

let offsetRes = 0;


// Delet of all result of the request
function deletResRequest() {
    containOfResult.innerHTML = " ";
    offsetRes = 0;
}





// Result for the request in my  form
validSearch.addEventListener("submit", function (e) {
    e.preventDefault();
    deletResRequest();
    divLoad.hidden = false;

    research = barSearch.value;

    msgBeforeResult.className = "hide-msg";

    if (selectResult.value === "everything") {
        getEvery(research, offsetRes);

        btnOffset.addEventListener("click", function () {
            offsetRes += 100;
            getEvery(research, offsetRes)
        })

    }
    else if (selectResult.value === "artist") {
        getArtist(research, offsetRes);

        btnOffset.addEventListener("click", function () {
            offsetRes += 100;
            getArtist(research, offsetRes);
        })

    }
    else if (selectResult.value === "title") {
        getTitle(research, offsetRes);

        btnOffset.addEventListener("click", function () {
            offsetRes += 100;
            getTitle(research, offsetRes);
        })
    }
    else if (selectResult.value === "album") {
        getAlbum(research, offsetRes);

        btnOffset.addEventListener("click", function () {
            offsetRes += 100;
            getAlbum(research, offsetRes);
        })

    }
})

// my factorisation for all my request 

function loopForRequest(allResults) {
    for (let i = 0; i < allResults.recordings.length; i++) {
        nb++

        let idRelease = [];
        let album = [];

        if (allResults.recordings[i]["releases"] === undefined) {

            album = "Inconnu";
        } 
    
        else {

            for (j = 0; j < allResults.recordings[i]["releases"].length; j++) {
                idRelease.push(allResults.recordings[i]["releases"][j].id)
            }
            for (j = 0; j < allResults.recordings[i]["releases"].length; j++) {
                album.push(allResults.recordings[i]["releases"][j].title)
            }
        }

        if (allResults.recordings[i].length === undefined) {
            length = "Non renseignée";
        }
        else {
            length = allResults.recordings[i].length;
        }

        let tag = [];

        if (allResults.recordings[i].tags === undefined) {
            tag = "Non renseigné";
        }
        else {
            for (j = 0; j < allResults.recordings[i].tags.length; j++) {
                tag.push(allResults.recordings[i].tags[j].name)
            }
        }

        let name = [];
        for (n = 0; n < allResults.recordings[i]["artist-credit"].length; n++) {
            name.push(allResults.recordings[i]["artist-credit"][n].name)
        }


        title = allResults.recordings[i].title;

        realId = allResults.recordings[i].id;

        addResult(name, title, album, nb, length, idRelease, realId, tag);
    }
}





function getEvery(research, offsetRes) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://musicbrainz.org/ws/2/recording/?inc=tags&fmt=json&limit=100&offset=' + offsetRes + '&query=' + '"' + encodeURIComponent(research) + '"', true);
    request.addEventListener("readystatechange", function () {

        

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                nb = offsetRes
                valueResearch.textContent = barSearch.value
                divLoad.hidden = true;



                const allResults = JSON.parse(request.responseText);

                count = allResults.count
                showCount.textContent = "à " + count + " Resultats"


                if (count > 0) {
                    msgZeroRes.className = "hide-msg";
                    btnOffset.classList.add("BtnAppear")
                }
                else {

                    msgZeroRes.className = "zero-res";
                }
                

                loopForRequest(allResults);

            }
            else {
                msgPb.className = "pb-res";
            }
        }
    });
    request.send();

}


function getArtist(research, offsetRes) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://musicbrainz.org/ws/2/recording/?fmt=json&limit=100&offset=' + offsetRes + '&query=artist:' + '"' + encodeURIComponent(research) + '"', true);
    request.addEventListener("readystatechange", function () {



        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                nb = offsetRes;
                valueResearch.textContent = barSearch.value
                divLoad.hidden = true;

                const allResults = JSON.parse(request.responseText);

                count = allResults.count
                showCount.textContent = "à " + count + " Resultats"
                if (count > 0) {
                    msgZeroRes.className = "hide-msg";
                    btnOffset.classList.add("BtnAppear")
                }
                else {

                    msgZeroRes.className = "zero-res";
                }

                loopForRequest(allResults);

            }
            else {
                msgPb.className = "pb-res";
            }
        }
    });
    request.send();


}


function getTitle(research, offsetRes) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://musicbrainz.org/ws/2/recording/?fmt=json&limit=100&offset=' + offsetRes + '&query=recording:' + '"' + encodeURIComponent(research) + '"', true);
    request.addEventListener("readystatechange", function () {



        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                nb = offsetRes
                valueResearch.textContent = barSearch.value
                divLoad.hidden = true;
                

                const allResults = JSON.parse(request.responseText);

                count = allResults.count
                
                showCount.textContent = "à " + count + " Resultats"
                if (count > 0) {
                    msgZeroRes.className = "hide-msg";
                    btnOffset.classList.add("BtnAppear")
                }
                else {

                    msgZeroRes.className = "zero-res";
                }
               

                loopForRequest(allResults)
            }
            else {
                msgPb.className = "pb-res";
            }
        }
    });
    request.send();


}




function getAlbum(research, offsetRes) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://musicbrainz.org/ws/2/recording/?fmt=json&limit=100&offset=' + offsetRes + '&query=release:' + '"' + encodeURIComponent(research) + '"', true);
    request.addEventListener("readystatechange", function () {



        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                nb = offsetRes;
                divLoad.hidden = true;
                valueResearch.textContent = barSearch.value
                
                const allResults = JSON.parse(request.responseText);



                count = allResults.count

                showCount.textContent = "à " + count + " Resultats";
                if (count > 0) {
                    msgZeroRes.className = "hide-msg";
                    btnOffset.classList.add("BtnAppear")
                }
                else {

                    msgZeroRes.className = "zero-res";
                }

                loopForRequest(allResults)
            }
            else {
                msgPb.className = "pb-res";
            }
        }
    });
    request.send();
}


// mettre en deseable le button du resultMore 







