import game_config from './game_config.js';
import entities from './entities/index.js';

export default class Game{
  constructor(){
    this.x_size = 800;
    this.y_size = 800;
    window.objects = {};
    window.obj_settings = {};
  }

  run(){
    for(var entity in game_config){
      let loaded_entity = new entities[game_config[entity].entity](game_config[entity]);
      window.objects[game_config[entity].entity] = loaded_entity;
    }
  }

	draw(){
    window.p5.clear();
    if(window.obj_settings['MainMenu'] === true){
      window.objects['MenuEntities'].render();
      return 0;
    }
	}

  handle_keys(event){
    if(event.defaultPrevented){
      return;
    }

    switch(event.key){
      case 'Escape':
        window.obj_settings['MainMenu'] = true;
    }
  }
}

window.Game = Game;