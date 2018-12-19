import dialog_entity from './dialog_entity.js';

export default class cutscene_1 {
  constructor(config){
    this.config = config;
    this.dialogs = []
    this.dialog_index = 0;
    this.config.dialogs.map((config) => {
      config.chars = this.config.chars;
      this.dialogs.push(new dialog_entity(config));
    });
  }

  render(){
    this.dialogs[this.dialog_index].render(this.handle_next);
  }

  handle_next(){
    this.dialog_index += 1
  }
}
