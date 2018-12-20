import button_entity from './button_entity.js';
import rain_entity from './rain_entity.js';

export default class menu_entity {
  constructor(config){
    this.config = config;
    this.button_number = 0;
    this.rain = new rain_entity();
    this.buttons = [];

    this.config.menu_items.map((item) => {
      this.button_number +=1;
      this.buttons.push(new button_entity(item.x, this.config.y_start_from + (this.button_number * item.h) + item.gap, item.h, item.w, item.rgb, item.id, item.text));
    });

  }

  render() {
    this.buttons.forEach((item) => {
      if(!window.obj_settings.game_live && item.button_id == 'continue_game'){
        item.disabled = true;
      } else {
        item.disabled = false;
      }
      item.render(this.run_btn);
    });
    this.rain.render();
  }

  run_btn(btn_id){
    switch(btn_id){
      case 'start_game':
        window.obj_settings.start_game = true;
        window.obj_settings.MainMenu = false;
        break;
      case 'continue_game':
        window.obj_settings.game_paused = false;
        window.obj_settings.MainMenu = false;
        window.obj_settings.actual_game = true;
        break;
      case 'settings':
        window.obj_settings.settings = true;
        window.obj_settings.MainMenu = false;
        break;
      case 'send_feedback':
        window.obj_settings.send_feedback = true;
        window.obj_settings.MainMenu = false;
        break;
      case 'exit':
        window.obj_settings.exit = true;
        window.obj_settings.MainMenu = false;
        break;
      default:
        break;
    }
  }
}
