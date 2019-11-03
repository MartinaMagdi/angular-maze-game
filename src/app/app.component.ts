import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { moveCharacter } from './animations/moveCharacterAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [moveCharacter]
})
export class AppComponent implements OnInit {
  title = 'maze-game';
  currentState = 'initial';

  @ViewChild('character') character: ElementRef;
  @ViewChild('canvas') canvasRef: ElementRef;

  ngOnInit() {
    let canvas: any = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    this.drawLines(ctx);
  }

  drawLines(ctx) {
    ctx.beginPath();

    for (let i = 0; i < 2500; i += 600) {
      ctx.moveTo(0, i);
      ctx.lineTo(11000, i);
      ctx.stroke();
    }

    for (let i = 0; i < 11000; i += 1100) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 11000 / 2);
      ctx.stroke();
    }

  }

  setStateAnimation(currentState1, currentState2, currentState3, windowX, windowY, delay1, delay2, delay3){
    this.currentState = currentState1;
    setTimeout(() => {
      this.currentState = currentState2
      setTimeout(() => {
        window.scrollTo(windowX, windowY);
      }, delay1);
      setTimeout(() => {
        this.currentState = currentState3
      }, delay2)
    }, delay3)
  }

  setStateAnimation2(currentState, windowX, windowY, delay){
    this.currentState = currentState;
    setTimeout(() => {
      window.scrollTo(windowX, windowY)
    }, delay);
  }

  // from start to hospital
  toHospital() {
    this.setStateAnimation('hospitalAndFootballDefaultRight', 'hospitalDown', 'hospitalRight', 678, 426, 500, 1500, 1500)
  }

  // from start to football
  toFootball() {
    this.setStateAnimation('hospitalAndFootballDefaultRight', 'footballDown', 'footballRight', 678, 1032, 500, 2500, 1500)
  }

  // from hospitall to fast food
  fromHospitalToFastFood() {
    this.setStateAnimation('hospitalToFastRight', 'hospitalToFastDown', 'hospitalToFastRight2', 1793, 1032, 500, 2500, 1500)
  }

  // from hospitall to healthy food
  fromHospitalToHealthyFood() {
    this.setStateAnimation2('hospitalToHealthyRight', 1818, 448, 500)
  }

  // from football to fast food
  fromFootballToFastFood() {
    this.setStateAnimation2('hospitalToFastRight2', 1812, 1032, 500)
  }

  // from football to healthy food
  fromFootballToHealthyFood() {
    this.setStateAnimation('hospitalToFastDown', 'hospitalToFastRight', 'footballToHealthyRight2', 1818, 417, 1000, 1500, 1500)
  }

  // from healthy to play game
  fromHealthyToPlaying(){
    this.setStateAnimation('healthyToPlayingRight', 'healthyToPlayingDown', 'healthyToPlayingRight2', 2895, 1032, 500, 1500, 1500)
  }

   // from healthy to running
   fromHealthyToRunning(){
     this.setStateAnimation2('healthyToRunningRight', 2930, 448, 1000)
  }

   // from fast to play game
  fromFastFoodToPlaying(){
    this.setStateAnimation2('fastToPlayingRight', 2900, 1032, 700)
  }

   // from fast to running
   fromFastFoodToRunning(){
     this.setStateAnimation('fastToRunningRight', 'fastToRunningUp', 'fastToRunningRight2', 2930, 436, 1000, 1500, 2500)
  }

  // from running to doctor
  fromRunningToDoctor(){
    this.setStateAnimation2('playingToDoctorRight2', 4007, 448, 1000)
  }

  // from running to tv
  fromRunningToTv(){
    this.setStateAnimation('runningToTvRight', 'runningToTvDown', 'runningToTvRight2', 4024, 1024, 500, 1500, 2500)
  }

  // from playing to doctor
  fromPlayingToDoctor(){
    this.setStateAnimation('playingToDoctorRight', 'playingToDoctorUp', 'playingToDoctorRight2', 4013, 439, 1000, 1500, 500)
  }

  // from playing to tv
  fromPlayingToTv(){
    this.setStateAnimation2('playingToTvRight', 4007, 1032, 700)
  }

  // from doctor to water
  fromDoctorToWater(){
    this.setStateAnimation2('doctorToWaterRight', 5113, 439, 700)
  }

  // from tv to water
  fromTvToWater(){
    this.setStateAnimation2('tvToWaterRight', 5119, 1024, 700)
  }

  // from water to Energy
  fromWaterToEnergy(){
    this.setStateAnimation2('waterToEnergyRight', 6243, 439, 1500)
  }

  // from water to toilet
  fromWaterToToilet(){
    this.setStateAnimation2('waterToToiletRight', 6219, 1024, 1500)
  }

  // from energy to plus
  fromEnergyToPlus(){
    this.setStateAnimation2('energyToPlusRight', 7349, 439, 1500)
  }

  // from toilet to fire
  fromToiletToFire(){
    this.setStateAnimation2('toiletToFireRight', 7300, 1024, 1500)
  }

  // from plus to end
  fromPlusToEnd(){
    this.currentState = 'plusToEndRight'
    setTimeout(() => {
      this.currentState = 'plusToEndDown'
      setTimeout(() => {
        window.scrollTo(8061, 1024)
        setTimeout(() => {
          window.scrollTo(8738, 1554)
        }, 1000);
      }, 500);
      setTimeout(() => {
        this.currentState = 'plusToEndRight2'
      }, 2500);
    }, 2500);
  }

  // from fire to end
  fromFireToEnd(){
    this.setStateAnimation('fireToEndRight', 'plusToEndDown', 'plusToEndRight2', 8738, 1554, 1000, 2500, 2500)
  }

  // start again
  startAgian(){
    this.setStateAnimation2('initial', 0, 0, null)
  }
}
