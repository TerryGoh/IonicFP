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
  constructor() { }

  ngOnInit() {
    console.log(this.imagedisplay)
  }
  ionViewWillEnter() {
    this.brf_run();
    this.startTime = new Date();
  }
  ionViewWillLeave() {
    this.brf_stop();
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
    // eg. Bored > 0.4 Count / Bored Count. Then it will times the duration to get how long the student 
    // experiences that emotion.
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
    console.log("BORED Count", moreThanBoredCount)
    console.log("FRUS Count", moreThanFrusCount)

    let percBored = moreThanBoredCount / emotionData.length
    let percFrus = moreThanFrusCount / emotionData.length

    console.log("BORED %", percBored)
    console.log("FRUS %", percFrus)

    let durBored = Math.round(percBored * duration / 1000)
    let durFrus = Math.round(percFrus * duration / 1000)

    console.log("BORED (s) " + durBored)
    console.log("FRUS (s) " + durFrus)

    console.log(this.asgmt_disc_id)
    console.log(this.asgmt_id)
    console.log(this.student_id)

    // TODO - Send API call to db to store variables. 
    // Student id, assignment id, assignment discussion id, bored dur, frus dur, duration 
  }
  getDuration() {
    //Calculates the time the user spends on this page, returns value in ms. 1000ms = 1s
    let endTime = new Date();
    let duration = endTime.getTime() - this.startTime.getTime();
    console.log("Time spent on page(secs): ", duration / 1000)
    return duration
  }
}
