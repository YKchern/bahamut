#pragma strict

var hp_ui: GameObject;



function LostHP(amount: int){
//GameObject.Find("EnemyTowerHP").SendMessage("UI_LostHP", amount);
hp_ui.SendMessage("UI_LostHP", amount);

}