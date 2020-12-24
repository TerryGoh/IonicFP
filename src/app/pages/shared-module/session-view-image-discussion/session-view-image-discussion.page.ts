import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-view-image-discussion',
  templateUrl: './session-view-image-discussion.page.html',
  styleUrls: ['./session-view-image-discussion.page.scss'],
})
export class SessionViewImageDiscussionPage implements OnInit {
  imagedisplay;
  constructor() { }
  
  ngOnInit() {
    console.log(`${this.imagedisplay}`)
  }

}
