export default class dialog_entity {
  constructor(config){
    if(config.type == "dialog"){
      this.render = this.render_dialog;
    } else if(config.type == "option"){
      this.render == this.render_option;
    }
    this.text = config.text;
    this.orientation = config.orientation;
    this.player_name = config.player_name;
    if(this.orientation == 'left'){
      this.x = 40;
    } else if(this.orientation == 'right'){
      this.x = 500;
    } else {
      this.x = 340;
    }
  }

  render_dialog(callback){
    window.p5.fill(190);
    window.p5.strokeWeight(2);
    window.p5.stroke(51);
    window.p5.rect(this.x, 600, 380, 120);
    window.p5.noStroke();
    window.p5.fill(0);
    window.p5.textSize(14);
    window.p5.text(this.text.inner, this.x + this.text.gap, 600 + 50, this.x + 280);
    window.p5.textSize(10);
    window.p5.text(this.text.player_name, this.x + 120, 600 + 80);
  }

  render_option(callback){
    window.p5.fill(0);
    window.p5.rect(this.x, 600, 340, 140);
  }
}
