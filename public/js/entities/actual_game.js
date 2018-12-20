export default class actual_game {
  constructor(config){
    this.r = 750;
    this.y = 400;
    window.score = 0;
    this.miner = window.p5.loadImage("/img/pc.png");
    this.btc_system = new particle_system(window.p5.createVector(width/2, 650));
    this.coin_sounds = window.p5.loadSound("/img/coin.wav")
    setInterval(()=>{window.space_pressed=true}, 750);
  }

  render(){
    window.obj_settings.game_live = true;
    this.btc_system.render();
    window.p5.tint(255, 255);
    window.p5.image(this.miner, 370, 690, 80, 80);
    if(window.space_pressed){
      this.increase_score();
      this.coin_sounds.play();
      this.btc_system.add_particle();
      window.space_pressed = false;
    }
  }

  increase_score(){
    window.score = (window.obj_settings.multiplier * 3) + window.score;
  }
}

class bitcoin_particle {
  constructor(position){
    this.acceleration = window.p5.createVector(0, 0.05);
    this.velocity = window.p5.createVector(random(-2, 2), random(-3, 2));
    this.position = position.copy();
    this.image = window.p5.loadImage("/img/money.png");
    this.lifespan = 255;
  }

  render(){
    this.update();
    this.display();
  }

  update(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 3;
  }

  display(){
    window.p5.tint(255, this.lifespan);
    window.p5.image(this.image, this.position.x, this.position.y, 40, 40);
  }

  is_dead(){
    return this.lifespan < 0;
  }
}

class particle_system {
  constructor(position){
    this.origin = position.copy();
    this.particles = [];
  }

  add_particle(){
    this.particles.push(new bitcoin_particle(this.origin));
  }

  render(){
    for(var i = this.particles.length-1; i >= 0; i--){
      var particle = this.particles[i];
      particle.render();
      if(particle.is_dead()){
        this.particles.splice(i, 1);
      }
    };
  }
}
