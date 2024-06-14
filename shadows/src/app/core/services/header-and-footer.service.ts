import { Injectable } from '@angular/core';
import { HeaderItem } from '../model/header-item.model';
import { State } from './state';

@Injectable({
  providedIn: 'root'
})
export class HeaderAndFooterService {

  title: String = "";

  // HEADER

  private headerItems: HeaderItem[] = [
    {
      id: 0,
      name: State.headerMainHome,
      activated: true
    },
    {
      id: 1,
      name: State.headerMainProduction,
      activated: false
    },
    {
      id: 2,
      name: State.headerMainReactions,
      activated: false
    },
    {
      id: 3,
      name: State.headerMainPlanets,
      activated: false
    },
    {
      id: 4,
      name: State.headerMainMails,
      activated: false
    },
    {
      id: 5,
      name: State.headerMainSettings,
      activated: false
    },
    {
      id: 6,
      name: State.headerMainDeconnection,
      activated: false
    }
  ];

  headerToChange(idToDesactivate: number, idToActivate: number) {
    this.headerItemToChange(false, idToDesactivate);
    this.headerItemToChange(true, idToActivate);
  }


  private headerItemToChange(action: boolean, id: number) {
    this.headerItems[id].activated = action;
  }

  getHeaders(): HeaderItem[] {
    return [...this.headerItems];
  }

  onChangeMainHeader(item: HeaderItem): number | undefined {
    if (item.activated === false) {
      const idToDesactivate = this.headerItems.find((element) => element.activated === true)?.id;
      const idToActivate = this.headerItems.find((elemenet) => elemenet.name === item.name)?.id;

      if (idToDesactivate != null && idToActivate != null) {
        this.headerToChange(idToDesactivate, idToActivate);
        return idToActivate;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

  defineHeaderState(data: String) : String {
    switch(data) {
      case "_WelcomeUiComponent" :
        this.onChangeMainHeader(this.headerItems[0]);
        return State.headerMain;
      case "_ProductionUiComponent" :
        this.onChangeMainHeader(this.headerItems[1]);
        return State.headerMain;
      case "_ReactionUiComponent" :
        this.onChangeMainHeader(this.headerItems[2]);
        return State.headerMain;
      case "_PlanetsUiComponent" :
        this.onChangeMainHeader(this.headerItems[3]);
        return State.headerMain;
      case "_MailsUiComponent" :
        this.onChangeMainHeader(this.headerItems[4]);
        return State.headerMain;
      case "_SettingsComponent" :
        this.onChangeMainHeader(this.headerItems[5]);
        return State.headerMain;
      default : 
        return State.headerLanding;
    }
  }

  // FOOTER

  definefooterButtonText(data: String) : String {
    switch(data) {
      case "_MailFormComponent" : 
        this.title = "Section Mail"; 
        return State.footerBack;
      case "_LandingPageComponent" : 
        this.title = "Section Landing"; 
        return State.footerContact;
      case "_WelcomeUiComponent" :
        this.title = "Section Welcome";
        return State.footerWelcome;
      case "_ProductionUiComponent" :
        this.title = "Section " + State.headerMainProduction;
        return State.footerWelcome;
      case "_ReactionUiComponent" :
        this.title = "Section " + State.headerMainProduction;
        return State.footerWelcome;
      case "_PlanetsUiComponent" :
        this.title = "Section " + State.headerMainProduction;
        return State.footerWelcome;
      case "_MailsUiComponent" :
        this.title = "Section " + State.headerMainProduction;
        return State.footerWelcome;
      case "_SettingsComponent" :
        this.title = "Section " + State.headerMainProduction;
        return State.footerWelcome;
      default : 
        return State.footerContact;
    }
  }

}
