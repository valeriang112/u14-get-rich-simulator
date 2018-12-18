const game_config = {
  "player" : {
    "name": "Mao",
    "represented" : "player_entity",
    "avatar" : "../img/mao.jpg",
    "entity" : "PlayerEntity",
  },
  "main_menu" : {
    "entity": "MenuEntities",
    "y_start_from": 160,
    "menu_items" : [
      {text: "New Game", x: 300, gap: 10, w: 200, h: 50, rgb: [0, 10, 0], id: "start_game"},
      {text: "Continue Game", x: 300, gap: 10, w: 200, h: 50, rgb: [0, 10, 0], id: "continue_game"},
      {text: "Settings", x: 300, gap: 10, w: 200, h: 50, rgb: [0, 10, 0], id: "settings"},
      {text: "Send Feedback", x: 300, gap: 10, w: 200, h: 50, rgb: [0, 10, 0], id: "send_feedback"},
      {text: "Exit", x: 300, gap: 10, w: 200, h: 50, rgb: [0, 10, 0], id: "exit"},
    ]
  }
};
export default game_config;
