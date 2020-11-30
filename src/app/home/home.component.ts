import { Component, OnInit } from '@angular/core';
import { User } from '../models/user-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = {
    profilePic: "https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg",
    name: "Kyle Fuhri",
    title: "Intern Junior Web Developer",
    workName: "Liber8",
    workWebsite: "https://www.liber8.co.za",
    city: "Johannesburg",
    country: "South Africa",
    facebookLink: "https://www.facebook.com/kyle.fuhri",
    githubLink: "https://github.com/Work90210",
    linkedinLink: "https://linkedin.com/in/kyle-fuhri",
    description: "This is where people would add a little description about themselves...",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
