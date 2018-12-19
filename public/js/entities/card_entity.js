export default class card_entity{
  constructor(x, y, h, w, rgb, id, text){
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;

    this.rgb = rgb;
    this.id = id;
    this.text = text;
  }

  render(callback){
    window.p5.strokeWeight(2);
    window.p5.stroke(this.rgb[0] - 10, this.rgb[1] - 10, this.rgb[2] - 10);
    if(this.check_no_click()){
      window.p5.fill(this.rgb[0] + 30, this.rgb[1] + 30, this.rgb[2] + 30);
    } else {
      window.p5.fill(this.rgb[0], this.rgb[1], this.rgb[2]);
    }
    if(this.check_no_click()){
      window.p5.rect(this.x - 15, this.y - 15, this.w + 30, this.h + 30);
    } else {
      window.p5.rect(this.x, this.y, this.w, this.h);
    }

    window.p5.noStroke();
    window.p5.fill(160, 160, 160);
    if(this.check_no_click()){
      window.p5.textSize(15);
    } else {
      window.p5.textSize(11.5);
    }
    if(!this.check_no_click()){
      window.p5.text(this.text.inner, ((this.x + this.w) / 1) - this.text.gap, ((this.y + this.h) - (this.h / 2) + 90));
    } else {
      window.p5.text(this.text.inner, ((this.x + this.w) / 1) - this.text.a_gap, ((this.y + this.h) - (this.h / 2) + 105));
    }
    this.check(callback)
  }

  check(callback){
    if(this.check_no_click() && window.p5.mouseIsPressed && !window.clickDown){
      setTimeout(callback(this.id), 500);
    }
  }

  check_no_click(){
    if ((window.p5.mouseX > this.x) && (window.p5.mouseX < (this.x + this.w)) && (window.p5.mouseY > (this.y)) && (window.p5.mouseY < (this.y + this.h)) && !this.disabled) {
      return true;
    }
    return false;
  }
}
