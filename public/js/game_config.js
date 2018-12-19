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
    "dialogs":[
      {text: {inner: "\"Stop!, give me your wallet, turn around and count to 100 if you love your life.\", said a random angry robber", gap: 10, a_gap: 20}, orientation: "left", player_name: "Robber", type: "dialog"},
      {text: {inner: "\"Oh no!\"", options: [{inner: "Give wallet", outcome: "survive"}, {inner: "Run!", outcome: "death"}], gap: 10, a_gap: 20}, orientation: "right", player_name: "Unknown", type: "option"},
      {text: {inner: "Welcome to the game, I am your assistant, Lisa.", gap: 10, a_gap: 20}, orientation: "floating", player_name: "Lisa AI", type: "dialog"},
      {text: {inner: "As you have just seen, you were robbed of all your money at gunpoint, you are now broke af.", gap: 10, a_gap: 20}, orientation: "floating", player_name: "Lisa AI", type: "dialog"},
      {text: {inner: "You have recently heard of a new technology called Bitcoin and how it can make you rich. Throughout the game, your objective is to upgrade your equipment and mine bitcoin and get rich. Please click the dialog to begin the tutorial", gap: 10, a_gap: 20}, orientation: "floating", player_name: "Lisa AI", type: "dialog"},
    ]
  },
  "game" : {
    "entity": "ActualGame"
  }
};
export default game_config;
