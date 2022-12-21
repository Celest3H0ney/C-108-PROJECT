function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Nw5LIsR_0/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
  
      document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
  
      img = document.getElementById('dog1') 
      img1 = document.getElementById('cat2')
      img2 = document.getElementById('lion3')
      img3 = document.getElementById('cow4')
  
      if (results[0].label == "barking") {
        img.src = 'dog1.gif';
        img1.src = 'cat.jpg';
        img2.src = 'lion.jpg';
        img3.src = 'cow.png';
      } else if (results[0].label == "meowing") {
        img.src = 'dog.jpg';
        img1.src = 'cat2.gif';
        img2.src = 'lion.jpg';
        img3.src = 'cow.png';
      } else if (results[0].label == "roaring") {
        img.src = 'dog.jpg';
        img1.src = 'cat.jpg';
        img2.src = 'lion3.gif';
        img3.src = 'cow.png';
      }else{
        img.src = 'dog.jpg';
        img1.src = 'cat.jpg';
        img2.src = 'lion.jpg';
        img3.src = 'cow4.gif';
      }
    }
  }