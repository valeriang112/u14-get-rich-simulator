export default class button_entity {
  constructor(x, y, h, w, rgb, button_id, text){
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;

    this.rgb = rgb;
    this.button_id = button_id;
    this.text = text;
  }

  render(callback){
    window.p5.strokeWeight(3);
    window.p5.stroke(180, 180, 180)
    if(this.check_no_click()){
      window.p5.fill(this.rgb[0] + 30, this.rgb[1] + 30, this.rgb[2] + 30);
    } else {
      window.p5.fill(this.rgb[0], this.rgb[1], this.rgb[2]);
    }
    window.p5.rect(this.x, this.y, this.w, this.h);
    window.p5.strokeWeight(1);
    window.p5.fill(255, 0, 0);
    window.p5.text(this.text, ((this.x + this.w) / 1.5) - 12, ((this.y + this.h) - (this.h / 2) + 10));
    this.check(callback);
  }

  check(callback){
    if(this.check_no_click() && window.p5.mouseIsPressed){
      callback(this.button_id);
    }
  }

  check_no_click(){
    if ((window.p5.mouseX > this.x) && (window.p5.mouseX < (this.x + this.w)) && (window.p5.mouseY > (this.y)) && (window.p5.mouseY < (this.y + this.h))) {
      return true;
    }
    return false;
  }
}
