import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';
import { CountdownComponent } from 'ngx-countdown';
declare const savefile: any;

@Component({
  selector: 'app-step20-take-photo',
  templateUrl: './step20-take-photo.component.html',
  styleUrls: ['./step20-take-photo.component.scss']
})
export class Step20TakePhotoComponent implements OnInit {


    // webcam snapshot trigger
    private trigger: Subject<void> = new Subject<void>();
    public webcamImage: WebcamImage = null;
    public timerConfig: any;
    public showphoto: boolean;
    public innerHeight: any;
    public widthPhoto: any;
    public heightPhoto: any;
    public showCountDown: boolean;
    @ViewChild('cd', { static: false }) private countdown: CountdownComponent;


    constructor(private router: Router) {

    }

    ngOnInit() {
      this.timerConfig = {
        leftTime : 5,
        format: 's',
        notify: 5,
        demand: true
      };
      this.showphoto = false;
      this.innerHeight = window.innerHeight - 90;
      this.setPhotoDimensions();
      this.showCountDown = false;
    }

    @HostListener('window:resize', ['$event'])
      public onResize(event) {
        this.innerHeight = window.innerHeight - 90;
        this.setPhotoDimensions();
      }

    public triggerSnapshot(): void {
    this.trigger.next();
    }
    public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
    }

    public countdownTrigger() {
      this.showCountDown = true;
      this.countdown.begin();
    }

    public timerHandleEvent(event: any) {
      if (event.action === 'done') {
        this.showphoto = true;
        console.log('Timer countdown');
        this.triggerSnapshot();
      }
    }
    public footerActionHome() {
      this.router.navigate(['']);
    }

    public processImage() {
      try {
        const path = savefile(this.webcamImage.imageAsDataUrl);
        if (path) {
          // call service for processing image
        }
      } catch (exception) {
        console.log('error processing image' + exception);
      }
    }
    public resetEscenario() {
      this.webcamImage = undefined;
      this.showphoto = false;
    }


    public handleImage(webcamImage: WebcamImage): void {
    // tslint:disable-next-line:no-console
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    }

    private setPhotoDimensions() {
      this.widthPhoto = window.innerWidth - (window.innerWidth / 2) - 100;
      this.heightPhoto = window.innerHeight - (window.innerHeight / 2);
    }

}
