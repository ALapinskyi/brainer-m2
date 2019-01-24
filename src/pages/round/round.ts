import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController, PopoverController, NavParams, MenuController } from 'ionic-angular';
import { RoundResultsPage } from '../round-results/round-results';
import { RoundHelpPopoverPage } from '../round-help-popover/round-help-popover';
import { Round } from '../../models/game/round';
import { Question } from '../../models/game/question';

import { CountdownComponent } from 'ngx-countdown';
import { trigger,style,transition,animate,state } from '@angular/animations';
import { Answer } from '../../models/game/answer';

@Component({
  selector: 'page-round',
  templateUrl: 'round.html',
  animations: [
    trigger('answerSelected', [
      state('selected',   style({
        transform: 'scale(1.02)'
      })),
      state('correct',   style({
        backgroundColor: '#13d46b',
        transform: 'scale(1.02)'
      })),
      state('incorrect',   style({
        backgroundColor: '#ff463c',
        transform: 'scale(1.02)'
      })),
      transition('unselected => selected', animate('300ms ease-in')),
      transition('unselected => correct', animate('300ms ease-in')),
      transition('selected => imcorrect', animate('300ms ease-in'))
    ]),
    trigger('nextQuestionButton', [
      state('hidden',   style({
        transform: 'translateY(100px)'
      })),
      state('displayed',   style({
        transform: 'translateY(-50px)'
      })),
      transition('hidden => displayed', animate('500ms ease-in')),
      transition('displayed => hidden', animate('300ms ease-out'))
    ]),
    trigger('timeoutLine', [
      state('full',   style({
        backgroundColor: '#13d46b',
        width: '100%',
      })),
      state('empty',   style({
        backgroundColor: '#ff463c',
        width: '0%'
      })),
      transition('full => empty', animate('10000ms ease-in'))
    ])
  ]
})
export class RoundPage implements OnInit {
  
  @ViewChild('popoverContent', { read: ElementRef }) 
  content: ElementRef;

  nextQuestionButtonState: string = 'hidden';
  timeoutLineState: string = 'full';

  round: Round;
  questionIndex: number = 0;
  currentQuestion: Question;

  @ViewChild(CountdownComponent) 
  counter: CountdownComponent;
  time: number = 10;

  clickAudio: any;
  successAudio: any;
  unsuccessAudio: any;

  constructor(private popoverCtrl: PopoverController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController) {
      this.menuCtrl.enable(false, 'mainMenu');

      this.round = navParams.get('round');
      let questionIndex = navParams.get('questionIndex');
      if(questionIndex) {
        this.questionIndex = questionIndex;
      }

      this.currentQuestion = this.round.questions[this.questionIndex];
  }


  ngOnInit(): void {    
    this.clickAudio = new Audio();
    this.clickAudio.src = "assets/sounds/button-16.mp3";

    this.successAudio = new Audio();
    this.successAudio.src = "assets/sounds/success.mp3";

    this.unsuccessAudio = new Audio();
    this.unsuccessAudio.src = "assets/sounds/unsuccess.mp3";
    setTimeout(() => {
      this.timeoutLineState = 'empty';
    }, 100);
  }

  selectAnswer(answer: Answer) {
    this.counter.stop();

    this.clickAudio.load();
    this.clickAudio.play();

    answer.selectedState = "selected";

    setTimeout(() => {
      this.showCorrect();
      setTimeout(() => this.nextQuestionButtonState = 'displayed', 300);
    }, 300);
  }

  showCorrect(){
    this.currentQuestion.answers.forEach(answer => {
      if(answer.correct) {
        if(answer.selectedState === "selected"){
          this.successAudio.load();
          this.successAudio.play();
        } else {
          this.unsuccessAudio.load();
          this.unsuccessAudio.play();
          this.currentQuestion.answers.forEach( a => {
            if(a.selectedState === "selected") {
                a.selectedState = "incorrect";
            }
          });
        }
        answer.selectedState = "correct";
      }
    });
  }

  showNextQuestion() {    
    this.questionIndex++;
    const animationsOptions = {
      animation: 'ios-transition',
      duration: 500
    }

    this.navCtrl.push(RoundPage, {
      round: this.round,
      questionIndex: this.questionIndex
    }, animationsOptions);
  }

  goToRoundResults(params){
    if (!params) params = {};
    this.navCtrl.push(RoundResultsPage);
  }

  onTimerFinished(){
    this.showCorrect();
  }

  resetTimer(){
    this.counter.restart();
  }


  presentPopover(ev) {

    let popover = this.popoverCtrl.create(RoundHelpPopoverPage, {
      contentEle: this.content.nativeElement
    });
    console.log(popover);
    popover.present({
      ev: ev
    });
  }

}
