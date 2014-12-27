#pragma strict

var GenEnemyPoint: GameObject;
var prefab: GameObject[];
var waveNo: int=5;
function Start () {

  //  for(var i=0;i<5;i++){
  //     Instantiate(prefab[Random.Range(0,3)],GenEnemyPoint.transform.position, Quaternion.identity); 
  //     yield WaitForSeconds(.3);
  // }
  
  for(var i=0;i<waveNo;i++){
   genEnemy(5,0,3,.3);
   yield WaitForSeconds(3);
   genEnemy(2,0,3,.5);
  }
  
}

function genEnemy(eAmt: int, startIdx:int , endIdx:int, wait: float){

      for(var i=0;i<eAmt;i++){
       Instantiate(prefab[Random.Range(startIdx,endIdx)],GenEnemyPoint.transform.position, Quaternion.identity); 
       yield WaitForSeconds(wait);
   }


}