import { Component, OnInit } from '@angular/core';
import { run, stopAndCollate } from "../../../../assets/js/examples/face_tracking__track_one_face.js";

@Component({
  selector: 'app-session-view-image-discussion',
  templateUrl: './session-view-image-discussion.page.html',
  styleUrls: ['./session-view-image-discussion.page.scss'],
})
export class SessionViewImageDiscussionPage implements OnInit {
  imagedisplay;
  startTime;
  constructor() { }

  ngOnInit() {
    // console.log(`${this.imagedisplay}`)
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
    let totalBored = 0
    let totalFrus = 0
    for (let i = 0; i < emotionData.length; i++) {
      // in rare cases, there may be errors fetching data from the API call.
      // that will cause the emotionData array to be corrupted with unaccepted values
      // and cause this entire function to cease working. BUT it is rare.
      let boredVal = emotionData[i][0]
      let frusVal = emotionData[i][1]

      totalBored += boredVal
      totalFrus += frusVal
    }
    //Divide by length and times 100, round to 2 dec places
    let percBored = Math.round((totalBored / emotionData.length * 100 + Number.EPSILON)) / 100
    let percFrus = Math.round((totalFrus / emotionData.length * 100 + Number.EPSILON)) / 100
    console.log("BORED %", percBored)
    console.log("FRUS %", percFrus)

    let durBored = Math.round(percBored * duration / 1000)
    let durFrus = Math.round(percFrus * duration / 1000)

    console.log("BORED (s)" + durBored)
    console.log("FRUS (s) " + durFrus)
  }
  getDuration() {
    //Calculates the time the user spends on this page, returns value in ms. 1000ms = 1s
    let endTime = new Date();
    let duration = endTime.getTime() - this.startTime.getTime();
    console.log("Time spent on page(secs): ", duration / 1000)
    return duration
  }
}
