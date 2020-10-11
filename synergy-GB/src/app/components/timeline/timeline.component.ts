import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
datos
  constructor(private service: AuthService) { 

  }
 
  ngOnInit(): void {
    this.service.timeLine().subscribe(data=>this.datos=data)
  }

}
