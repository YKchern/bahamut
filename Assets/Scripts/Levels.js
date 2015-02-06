#pragma strict

function Start () {

}

function Update () {

}

function SetLevel(lv: int) {
    PlayerPrefs.SetInt("LV",lv);
    Application.LoadLevel(2);

}
