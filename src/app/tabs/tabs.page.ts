import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(private navCtrl: NavController) {}
  styles = ['color: #fdf9f2', 'background-color: #146778'].join(";");
  ngOnInit() {}
  check(location) {
    let locations = ["/tabs/main", "/tabs/session-view/session-my", "/tabs/support/logout"];
    this.navCtrl.navigateRoot(locations[location]);
  }
}
