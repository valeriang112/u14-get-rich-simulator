import card_entity from './card_entity.js';

export default class new_game_entity {
  constructor(config){
    this.config = config;
    this.cards = [];
    this.card_num = 0;

    this.config.difficulties.map((item) => {
      this.cards.push(new card_entity(this.config.x_start_from + (this.card_num * this.config.generics.h ) + this.config.generics.gap,
        this.config.generics.y, this.config.generics.h, this.config.generics.w, this.config.generics.rgb, item.id, item.text));
      this.card_num +=1;
    });
  }

  render(){
    this.cards.forEach((card) => {
      card.render(this.run_btn);
    });
  }

  run_btn(btn_id){
    switch(btn_id){
      case 'easy':
        window.obj_settings.difficulty = 'easy';
        window.obj_settings.multiplier = 3;
        break;
      case 'medium':
        window.obj_settings.difficulty = 'medium';
        window.obj_settings.multiplier = 1;
        break;
      case 'hard':
        window.obj.settings.difficulty = 'hard';
        window.obj_settings.multiplier = 0.5;
        break;
      default:
        return;
    }
    window.obj_settings.start_game = false;
    window.obj_start_scene = true;
  }
}
