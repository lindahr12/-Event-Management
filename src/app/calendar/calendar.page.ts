import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {AlertController, NavController} from "@ionic/angular";
import {CalendarComponent, ITimeSelected} from "ionic2-calendar/calendar";
import {formatDate} from "@angular/common";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  public eventSource = [];
  public selectedDate = new Date();
  isToday: boolean = true;
  markDisabled = (date: Date) => {
    var d = new Date();
    // d.setDate(d.getDate() - 1);
    return date < d;
  };
  calendar = {
    mode: 'month',
    currentDate: this.selectedDate
  }
  private viewTitle: any;

  constructor(public navCtrl: NavController) {
  }
  changeMode(mode) {
    this.calendar.mode = mode;
  }
  loadEvents() {
    this.eventSource = this.createRandomEvents();
  }
  onCurrentDateChanged(ev) {
    console.log(ev);
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    ev.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === ev.getTime();
  }
  onViewTitleChanged(Title) {
    this.viewTitle = Title;
  }
  onTimeSelected(event) {
    console.log(event);
    var date = new Date().getTime();
    console.log(date);
    var task = "work fast";

  }
  onEventSelected(event) {
    console.log(event);
  }
  ngOnInit() {
  }

  private createRandomEvents() {
    return [];
  }

  showHideForm() {
    this.navCtrl.navigateRoot('/add-event');

  }
}
