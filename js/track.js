const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let toggleButton = document.getElementById('toggleButton')
toggleButton.disabled = true;
let row = 0;
var faves = [];

const modelParams = {
    flipHorizontal: true, // flip e.g for video
    maxNumBoxes: 20, // maximum number of boxes to detect
    iouThreshold: 0.5, // ioU threshold for non-max suppression
    scoreThreshold: 0.9, // confidence threshold for predictions.
  };

  let isVideo = false;
  let model = null;

  toggleButton.addEventListener("click", function () {
      toggleVideo();
  })

  function toggleVideo() {
      if (!isVideo) {
          startVideo();
      }
      else {
          handTrack.stopVideo(video);
          isVideo = false;
      }
  }

  function startVideo() {
      handTrack.startVideo(video).then(function (status) {
          if (status) {
              isVideo = true;
              runDetection();
          } else {
              console.log("enable video");
          }
      });
  }

  function runDetection() {
    model.detect(video).then(predictions => {
        // console.log("Predictions: ", predictions);
        model.renderPredictions(predictions, canvas, context, video);

        // if (predictions.length <= 0) return;
            
        let openhands = 0;
        let closedhands = 0;
        let pointing = 0;
        let pinching = 0;
        let currentLoc = "";
        

        for(let p of predictions){
            //uncomment to view label and position data
            // console.log(p.label + " at X: " + p.bbox[0] + ", Y: " + p.bbox[1] + " at X: " + p.bbox[2] + ", Y: " + p.bbox[3]);
            
            if(p.label == 'open') openhands++;
            if(p.label == 'closed') closedhands++;
            if(p.label == 'point') pointing++;
            if(p.label == 'pinch') pinching++;
            
        }
        currentLoc = window.location.pathname;
        if (pointing == 1 && closedhands == 1) {
            currentLoc = window.location.pathname;
            const locs = ["/index.html", "/descriptions.html", "/addShops.html"];
            const dests = ["/index.html", "/descriptions.html", "/addShops.html"];
            if (locs.includes(currentLoc)){
                if (currentLoc === locs[0]){
                    location.href = dests[1];
                }
                if (currentLoc === locs[1]) {
                    location.href = dests[2];
                }
                if (currentLoc === locs[2]) {
                    location.href = dests[0];
                }
            }
        }
        if (currentLoc === "/descriptions.html") {
            var tableElement = document.getElementById('shopsTable');
            tableElement.addEventListener('mouseout', function() {
                tableElement.rows[row].style.color = "blue";
                
                setTimeout(function() {
                    tableElement.rows[row].style.color = "";
                  }, 1000);
            }, false)
            var event = new MouseEvent('mouseout', {
                'view': window,
                'bubbles': true,
                'cancelable': true,
              });
        }


        if (openhands == 1){
            if (currentLoc === "/descriptions.html") {
                tableElement.dispatchEvent(event);
                row++;
                console.log(row);
                if (row == tableElement.rows.length) {
                    row = 0;
                }
            }
        }

        if (openhands > 1) {
            var rowtext = tableElement.rows[row].innerHTML;
            var linkStart = rowtext.substring(rowtext.indexOf("https"));
            var link = linkStart.substring(0, linkStart.indexOf("\""));
            window.open(link, '_blank').focus();
        }

        var favoritesTable = document.getElementById('favoriteShops');
        

        if (pinching == 1 && closedhands == 1) {
            var shoptext = tableElement.rows[row].innerHTML;
            if (!(faves.includes(shoptext))){
                faves.push(shoptext);
                var rowAdd = favoritesTable.insertRow(0);
                rowAdd.innerHTML = shoptext;
            }

        }

        if (closedhands > 1) {
            location.href = "/descriptions.html";
        }

        if (pointing == 1) {
            window.scrollTo(0,document.body.scrollHeight);
        }

        if (pointing > 1) {
            window.scrollTo(0,0);
        }

        if (isVideo) {
            requestAnimationFrame(runDetection);
        }
    });
  }

  handTrack.load(modelParams).then(lmodel => {
      model = lmodel;
      toggleButton.disabled = false;
  })