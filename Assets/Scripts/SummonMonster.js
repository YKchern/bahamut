#pragma strict

var id: int;
var prefab: GameObject;

function summonsummon () {
   Debug.Log("Monster Summoned");
   Instantiate(prefab,GameObject.Find("Genmonster").transform.position, Quaternion.identity);

}
