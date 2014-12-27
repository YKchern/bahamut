#pragma strict

var id: int;
var amount: int=1;
var attack: int=1;
var prefab: GameObject;

function summonsummon () {
   //Debug.Log("Monster Summoned");
      if(GameObject.Find("Energy").GetComponent(Energy).SpendEnergy(amount)){
       Instantiate(prefab,GameObject.Find("Genmonster").transform.position, Quaternion.identity);  
 /*
   if(GameObject.Find("Energy").GetComponent(Energy).SpendEnergy(amount)){
     // Instantiate(prefab,GameObject.Find("Genmonster").transform.position, Quaternion.identity);  
   	 if(id ==1){
   		Instantiate(prefab,GameObject.Find("Genmonster").transform.position, Quaternion.identity);
     }
   	 else if (id ==2){
        Instantiate(prefab,GameObject.Find("Genmonster").transform.position, Quaternion.identity).renderer.material.color = Color.red;;
     }
     else if (id ==3){
        Instantiate(prefab,GameObject.Find("Genmonster").transform.position, Quaternion.identity).renderer.material.color = Color.green;;  
     } 
      */   
  }

     
}
