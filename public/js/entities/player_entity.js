export default class player_entity {
  constructor(config){
    this.name = config.name;
    this.player_avatar = window.p5.loadImage(config.avatar);
    this.money_needed = "0.5";
  }

  render(){
    this.draw_name();
    this.draw_money_bar();
    this.draw_money_amm();
  }

  draw_money_bar(){
    window.p5.fill(255, 255, 255);
    window.p5.rect(65, 3, 230, 20);
    window.p5.fill(212, 175, 55)
    window.p5.rect(65, 3, (230 * ((window.score / 100000) / this.money_needed)), 20);
  }

  draw_money_amm(){
    window.p5.fill(12, 12, 12);
    window.p5.textSize(10);
    window.p5.text(`${window.score/100000}BTC/${this.money_needed}BTC`, 100, 17);
  }

  draw_name(){
    window.p5.image(this.player_avatar, 0, 0, 60, 60);
    window.p5.textSize(16);
    window.p5.text(this.name, 0, 75);
  }
}
