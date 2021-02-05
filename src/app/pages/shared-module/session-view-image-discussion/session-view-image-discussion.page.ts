import { Component, OnInit } from '@angular/core';
import { run, stopAndCollate } from "../../../../assets/js/examples/face_tracking__track_one_face.js";

@Component({
  selector: 'app-session-view-image-discussion',
  templateUrl: './session-view-image-discussion.page.html',
  styleUrls: ['./session-view-image-discussion.page.scss'],
})
export class SessionViewImageDiscussionPage implements OnInit {
  imagedisplay;
  asgmt_id;
  asgmt_disc_id;
  student_id;
  startTime;
  auth_token;
  constructor() { }

  ngOnInit() {
    // console.log(this.imagedisplay)
    // console.log("asgmt discuss ", this.asgmt_disc_id)
    // console.log("asgmt ", this.asgmt_id)
    // console.log("stu ", this.student_id)
    // console.log("auth", this.auth_token)
  }
  ionViewWillEnter() {
    this.brf_run();
    this.startTime = new Date();
    this.testFaceApi();
  }
  ionViewWillLeave() {
    this.brf_stop();
  }

  testFaceApi() {
    var endpoint = "https://fypjface.cognitiveservices.azure.com/"
    var subscriptionKey = "1d40c6a23cd640d9ae5df348c2090977"

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Ocp-Apim-Subscription-Key", subscriptionKey);

  //   var params = {
  //     "returnFaceId": "true",
  //     "returnFaceLandmarks": "false",
  //     "returnFaceAttributes": "{string}",
  //     "recognitionModel": "recognition_03",
  //     "returnRecognitionModel": "false",
  //     "detectionModel": "detection_02",
  //     "faceIdTimeToLive": "86400",
  // };

    var apiUrl = endpoint + "face/v1.0/detect"
    var jsonData = {
      "url": "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg"
    }

    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(jsonData),
      redirect: 'follow'
    };

    fetch(apiUrl, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
      })
      .catch(error => console.log('error: ', error));
  }
  //Opens camera and begins brfv5 face tracking
  brf_run() {
    run();
    console.log("brfv5 started")
  }
  // Stops camera and brfv5
  brf_stop() {
    var emotionData = stopAndCollate();
    this.emotionEvaluation(emotionData, this.getDuration())
    console.log("camera closed")
  }
  emotionEvaluation(emotionData, duration) {
    // This function will count how many times an emotion reaches higher than the threshold
    // That count will then be divided by the count of datasets to get the percentage
    // eg. Bored > 0.4 Count / Bored Count. Then it will multiply the duration to get how long 
    // the student experiences that emotion.
    let moreThanBoredCount = 0
    let moreThanFrusCount = 0
    let threshold = 0.4

    for (let i = 0; i < emotionData.length; i++) {
      let boredVal = emotionData[i][0]
      let frusVal = emotionData[i][1]

      if (boredVal > threshold) {
        moreThanBoredCount += 1
      }
      if (frusVal > threshold) {
        moreThanFrusCount += 1
      }
    }
    let percBored = moreThanBoredCount / emotionData.length
    let percFrus = moreThanFrusCount / emotionData.length

    let durBored = Math.round(percBored * duration / 1000)
    let durFrus = Math.round(percFrus * duration / 1000)

    // Send API call to db to store variables. 

    let jsonData = {
      Authentication_Token: this.auth_token,
      Student_Id: this.student_id,
      asgmt_Id: this.asgmt_id,
      asgmtDiscuss_Id: this.asgmt_disc_id,
      duration: Math.round(duration / 1000),
      frustDuration: durFrus,
      boredomDuration: durBored
    }

    // console.log("JSON Data: ", jsonData)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
    var proxyUrl = "https://serene-shelf-84252.herokuapp.com/" //proxy for CORS
    var dbApiUrl = "https://slpidev.azurewebsites.net/api/analysis/addAnalysisAsgmtDiscuss"

    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(jsonData),
      redirect: 'follow'
    };

    fetch(proxyUrl + dbApiUrl, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
      })
      .catch(error => console.log('error: ', error));
  }
  getDuration() {
    //Calculates the time the user spends on this page, returns value in ms. 1000ms = 1s
    let endTime = new Date();
    let duration = endTime.getTime() - this.startTime.getTime();
    return duration
  }
}
