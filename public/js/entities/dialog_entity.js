import button_entity from './button_entity.js';

export default class dialog_entity {
  constructor(config){
    if(config.type == "dialog"){
      this.render = this.render_dialog;
    } else {
      this.render = this.render_option;
    }
    this.text = config.text;
    this.orientation = config.orientation;
    this.player_name = config.player_name;
    this.profile_pic = window.p5.loadImage(config.chars[config.player_name].profile);
    this.options = [];
    this.option_num = 0;
    if(this.orientation == 'left'){
      this.x = 100;
      this.y = 740;
    } else if(this.orientation == 'right'){
      this.x = 100;
      this.y = 740;
    } else if(this.orientation == 'floating') {
      this.x = 400;
      this.y = 585;
      this.render = this.render_floating;
    }
    this.config = config;
    console.log(this.config);
    if(config.type == "option"){
      this.config.options.forEach((item) => {
        this.options.push(new button_entity((this.x+20+((120 + 30)*this.option_num)), this.y, 30, 120, [180, 180, 180], item.outcome, item.inner));
        this.option_num +=1;
      });
    }
  }

  render_dialog(callback){
    window.p5.fill(190);
    window.p5.strokeWeight(2);
    window.p5.stroke(51);
    window.p5.rect(this.x, 660, 600, 125);
    window.p5.noStroke();
    window.p5.fill(0);
    window.p5.textSize(14);
    window.p5.text(this.text.inner, this.x + this.text.gap, 660 + 30, this.x + 400);
    window.p5.textSize(10);
    window.p5.fill(0);
    window.p5.triangle(this.x-18, 660 + 15 , this.x, 660, this.x, 660 + 30);
    window.p5.image(this.profile_pic, 5, 660, 80, 80);
    window.p5.textSize(13);
    window.p5.text(this.player_name, 8, 750, 20, 20);
  }

  render_option(callback){
    window.p5.fill(190);
    window.p5.strokeWeight(2);
    window.p5.stroke(51);
    window.p5.rect(this.x, 660, 600, 125);
    window.p5.noStroke();
    window.p5.fill(0);
    window.p5.textSize(14);
    window.p5.text(this.text.inner, this.x + this.text.gap, 660 + 30, this.x + 400);
    window.p5.textSize(10);
    window.p5.fill(0);
    window.p5.triangle(this.x-18, 660 + 15 , this.x, 660, this.x, 660 + 30);
    window.p5.image(this.profile_pic, 5, 660, 80, 80);
    window.p5.textSize(13);
    window.p5.text(this.player_name, 8, 750, 20, 20);
    this.options.forEach((option) => { option.render(this.render_callback) });
  }

  render_floating(callback){
    window.p5.fill(190);
    window.p5.strokeWeight(2);
    window.p5.stroke(51);
    window.p5.rect(120, 480, 550, 150);
    window.p5.noStroke();
    window.p5.fill(0);
    window.p5.textSize(14);
    window.p5.text(this.text.inner, 120 + this.text.gap, 480 + 30, 120 + 300);

    window.p5.triangle(400, 450, 400-15, 480, 400+15, 480);
    window.p5.image(this.profile_pic, 370, 385, 60, 60);
    this.options.forEach((option) => { option.render(this.render_callback) });
  }

  render_callback(data){
    switch(data){
      case 'survive':
        window.obj_settings.actual_game = true;
        window.obj_settings.tutorial = true;
        break;
      case 'death':
        window.obj_settings.death = true;
        break;
      case 'next':
        window.objects.Cutscene1.dialog_index +=1;
      default:
        return;
    }
    window.obj_settings.start_scene = false;
  }
}
