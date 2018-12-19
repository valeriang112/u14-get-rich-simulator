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
      {text: "New Game", x: 300, gap: 10, w: 200, h: 50, rgb: [40, 40, 40], id: "start_game"},
      {text: "Continue Game", x: 300, gap: 10, w: 200, h: 50, rgb: [40, 40, 40], id: "continue_game"},
      {text: "Settings", x: 300, gap: 10, w: 200, h: 50, rgb: [40, 40, 40], id: "settings"},
      {text: "Send Feedback", x: 300, gap: 10, w: 200, h: 50, rgb: [40, 40, 40], id: "send_feedback"},
      {text: "Exit", x: 300, gap: 10, w: 200, h: 50, rgb: [40, 40, 40], id: "exit"},
    ]
  },
  "new_game" : {
    "entity": "NewgameEntity",
    "x_start_from": 50,
    "generics": {
      y: 200,
      w: 170,
      h: 250,
      rgb: [30, 30, 30],
      gap: 0
    },
    "difficulties": [
      {multiplier: 3, text: {inner: "Dont hurt me daddy!", gap: 145, a_gap: 162}, id: "easy" },
      {multiplier: 1, text: {inner: "Bring em on!", gap: 125, a_gap: 135}, id: "medium"},
      {multiplier: 0.5, text: {inner: "Full ultraviolence", gap: 135, a_gap: 150}, id: "hard"},
    ]
  },
  "cutscene_1" : {
    "entity": "Cutscene1",
  },
  "game" : {
    "entity": "ActualGame"
  }
};
export default game_config;
