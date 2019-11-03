import { trigger, transition, style, animate, state } from '@angular/animations';

export const moveCharacter = trigger('moveCharacter', [

  // to hospital animation
  state('initial', style({
    transform: 'translate3d(886px, 575px, 0)'
  })),
  state('hospitalAndFootballDefaultRight', style({
    transform: 'translate3d(1075px, 575px, 0)'
  })),
  state('hospitalDown', style({
    transform: 'translate3d(1075px, 1180px, 0)'
  })),
  state('hospitalRight', style({
    transform: 'translate3d(1375px, 1180px, 0)'
  })),
  transition('initial=>hospitalAndFootballDefaultRight', animate('1500ms')),
  transition('hospitalAndFootballDefaultRight=>hospitalDown', animate('1500ms')),
  transition('hospitalDown=>hospitalRight', animate('1500ms')),
  
  // to football animation
  state('footballDown', style({
    transform: 'translate3d(1075px, 1775px, 0)'
  })),
  state('footballRight', style({
    transform: 'translate3d(1375px, 1775px, 0)'
  })),
  transition('hospitalAndFootballDefaultRight=>footballDown', animate('2500ms')),
  transition('footballDown=>footballRight', animate('1500ms')),

  // ----------------------------------------------------------------------------------------------------
  // from hospital to healthy food animation
  state('hospitalToHealthyRight', style({
    transform: 'translate3d(2375px, 1180px, 0)'
  })),
  transition('hospitalRight=>hospitalToHealthyRight', animate('1500ms')),
  
  // from hospital to fast food animation
  state('hospitalToFastRight', style({
    transform: 'translate3d(2175px, 1175px, 0)'
  })),
  state('hospitalToFastDown', style({
    transform: 'translate3d(2175px, 1775px, 0)'
  })),
  state('hospitalToFastRight2', style({
    transform: 'translate3d(2375px, 1775px, 0)'
  })),
  transition('hospitalRight=>hospitalToFastRight', animate('1500ms')),
  transition('hospitalToFastRight=>hospitalToFastDown', animate('2500ms')),
  transition('hospitalToFastDown=>hospitalToFastRight2', animate('1500ms')),

  // ----------------------------------------------------------------------------------------------------
  // from football to healthy food animation
  state('footballToHealthyRight2', style({
    transform: 'translate3d(2375px, 1178px, 0)'
  })),
  transition('footballRight=>hospitalToFastDown', animate('1500ms')),
  transition('hospitalToFastDown=>hospitalToFastRight', animate('1500ms')),
  transition('hospitalToFastRight=>footballToHealthyRight2', animate('1500ms')),

  // from football to fast food animation
  transition('footballRight=>hospitalToFastRight2', animate('1500ms')),

  // ----------------------------------------------------------------------------------------------------
  // from healthy to running animation
  state('healthyToRunningRight', style({
    transform: 'translate3d(3475px, 1180px, 0)'
  })),
  transition('hospitalToHealthyRight=>healthyToRunningRight', animate('1500ms')),

  // from healthy to play a game
  state('healthyToPlayingRight', style({
    transform: 'translate3d(3275px, 1180px, 0)'
  })),
  state('healthyToPlayingDown', style({
    transform: 'translate3d(3275px, 1780px, 0)'
  })),
  state('healthyToPlayingRight2', style({
    transform: 'translate3d(3475px, 1780px, 0)'
  })),
  transition('hospitalToHealthyRight=>healthyToPlayingRight', animate('1500ms')),
  transition('healthyToPlayingRight=>healthyToPlayingDown', animate('1500ms')),
  transition('healthyToPlayingDown=>healthyToPlayingRight2', animate('1500ms')),
  
  // ----------------------------------------------------------------------------------------------------
  // from fast food to running animation
  state('fastToRunningRight', style({
    transform: 'translate3d(3275px, 1775px, 0)'
  })),
  state('fastToRunningUp', style({
    transform: 'translate3d(3275px, 1175px, 0)'
  })),
  state('fastToRunningRight2', style({
    transform: 'translate3d(3475px, 1175px, 0)'
  })),
  transition('hospitalToFastRight2=>fastToRunningRight', animate('2500ms')),
  transition('fastToRunningRight=>fastToRunningUp', animate('1500ms')),
  transition('fastToRunningUp=>fastToRunningRight2', animate('1500ms')),
  
  // from fast food to play a game animation
  state('fastToPlayingRight', style({
    transform: 'translate3d(3475px, 1775px, 0)'
  })),
  transition('hospitalToFastRight2=>fastToPlayingRight', animate('2000ms')),

  // ----------------------------------------------------------------------------------------------------
  // from running to doctor animation
  transition('healthyToRunningRight=>playingToDoctorRight2', animate('1500ms')),

  // from running to tv animation
  state('runningToTvRight', style({
    transform: 'translate3d(4375px, 1180px, 0)'
  })),
  state('runningToTvDown', style({
    transform: 'translate3d(4375px, 1780px, 0)'
  })),
  state('runningToTvRight2', style({
    transform: 'translate3d(4575px, 1780px, 0)'
  })),
  transition('healthyToRunningRight=>runningToTvRight', animate('2500ms')),
  transition('runningToTvRight=>runningToTvDown', animate('1500ms')),
  transition('runningToTvDown=>runningToTvRight2', animate('1500ms')),

  // ----------------------------------------------------------------------------------------------------
  // from playing to doctor animation
  state('playingToDoctorRight', style({
    transform: 'translate3d(4375px, 1775px, 0)'
  })),
  state('playingToDoctorUp', style({
    transform: 'translate3d(4375px, 1175px, 0)'
  })),
  state('playingToDoctorRight2', style({
    transform: 'translate3d(4575px, 1180px, 0)'
  })),
  transition('healthyToPlayingRight2=>playingToDoctorRight', animate('2500ms')),
  transition('playingToDoctorRight=>playingToDoctorUp', animate('1500ms')),
  transition('playingToDoctorUp=>playingToDoctorRight2', animate('1500ms')),
  
  // from playing to tv animation
  state('playingToTvRight', style({
    transform: 'translate3d(4575px, 1775px, 0)'
  })),
  transition('healthyToPlayingRight2=>playingToTvRight', animate('2500ms')),

  // ----------------------------------------------------------------------------------------------------
  // from doctor to water animation
  state('doctorToWaterRight', style({
    transform: 'translate3d(5675px, 1180px, 0)'
  })),
  transition('playingToDoctorRight2=>doctorToWaterRight', animate('2500ms')),

  // from tv to water animation
  state('tvToWaterRight', style({
    transform: 'translate3d(5675px, 1775px, 0)'
  })),
  transition('playingToTvRight=>tvToWaterRight', animate('2500ms')),

  // ----------------------------------------------------------------------------------------------------
  // from water to energy animation
  state('waterToEnergyRight', style({
    transform: 'translate3d(6775px, 1180px, 0)'
  })),
  transition('doctorToWaterRight=>waterToEnergyRight', animate('2500ms')),

  // from water to toilet animation
  state('waterToToiletRight', style({
    transform: 'translate3d(6775px, 1775px, 0)'
  })),
  transition('tvToWaterRight=>waterToToiletRight', animate('2500ms')),

  // ----------------------------------------------------------------------------------------------------
  // from energy to plus animation
  state('energyToPlusRight', style({
    transform: 'translate3d(7875px, 1180px, 0)'
  })),
  transition('waterToEnergyRight=>energyToPlusRight', animate('2500ms')),

  // from toilet to fire animation
  state('toiletToFireRight', style({
    transform: 'translate3d(7875px, 1775px, 0)'
  })),
  transition('waterToToiletRight=>toiletToFireRight', animate('2500ms')),

  // ----------------------------------------------------------------------------------------------------
  // from plus to end animation
  state('plusToEndRight', style({
    transform: 'translate3d(8775px, 1180px, 0)'
  })),
  state('plusToEndDown', style({
    transform: 'translate3d(8775px, 2375px, 0)'
  })),
  state('plusToEndRight2', style({
    transform: 'translate3d(9375px, 2375px, 0)'
  })),
  transition('energyToPlusRight=>plusToEndRight', animate('2500ms')),
  transition('plusToEndRight=>plusToEndDown', animate('2500ms')),
  transition('plusToEndDown=>plusToEndRight2', animate('2500ms')),

  // from fire to end animation
  state('fireToEndRight', style({
    transform: 'translate3d(8775px, 1775px, 0)'
  })),
  transition('toiletToFireRight=>fireToEndRight', animate('2500ms')),
  transition('fireToEndRight=>plusToEndDown', animate('2500ms')),
  transition('plusToEndDown=>plusToEndRight2', animate('2500ms')),
])