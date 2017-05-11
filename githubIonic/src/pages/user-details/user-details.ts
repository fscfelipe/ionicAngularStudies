import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';

/**
 * Generated class for the UserDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetails {
  user: User;
  login: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
     this.login = navParams.get('login');
     githubUsers.loadDetails(this.login).subscribe(user => {
      this.user = user;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetails');
  }

}
