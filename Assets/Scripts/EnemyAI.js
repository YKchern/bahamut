#pragma strict

var GenEnemyPoint: GameObject;
var prefab: GameObject[];

function Start () {
   for(var i=0;i<5;i++){
       Instantiate(prefab[Random.Range(0,3)],GenEnemyPoint.transform.position, Quaternion.identity); 
       yield WaitForSeconds(.3);
   }
}

function Update () {

}