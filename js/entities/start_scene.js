export default class start_scene {
  constructor(config){
    this.config = config;
    this.objects = [];

    this.config.menus.map((menu) => { this.objects.push(new menu_item(menu)); });
  }

  render(){

  }
}
