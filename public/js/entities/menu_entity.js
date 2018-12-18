import button_entity from './button_entity.js';

export default class menu_entity {
  constructor(config){
    this.config = config;
    this.button_number = 0;
    this.buttons = [];

    this.config.menu_items.map((item) => {
      this.button_number +=1;
      this.buttons.push(new button_entity(item.x, this.config.y_start_from + (this.button_number * item.h) + item.gap, item.h, item.w, item.rgb, item.id, item.text));
    });

  }

  render() {
    this.button_number = 0; // reset button count to ensure buttons are drawn correctly
    this.buttons.forEach((item) => { item.render(this.run_btn); });
  }

  run_btn(btn_id){
    switch(btn_id){
      case 'start_game':
        window.obj_settings.start_game = true;
        window.obj_settings.MainMenu = false;
    }
  }
}
