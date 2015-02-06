#pragma strict

var prefab : GameObject [];

function Start () {
   if(PlayerPrefs.GetInt("LV") == 1)
   {
	SpawnMon(0, 3, 2, 5.5f);
	
	yield WaitForSeconds(2f);
	
	InvokeRepeating("RegularSpawn", 0, 10f);
	
   }
   else if(PlayerPrefs.GetInt("LV") == 2)
   {
   	SpawnMon(0, 3, 3, 3.5f);
	
	yield WaitForSeconds(2f);
	
	InvokeRepeating("RegularSpawn", 0, 10f);
   
   }
   else if (PlayerPrefs.GetInt("LV") == 3)
   {
    SpawnMon(0, 3, 5, 1.5f);
	
	yield WaitForSeconds(2f);
	
	InvokeRepeating("RegularSpawn", 0, 10f);
   
   
   }
}

function SpawnMon (start : int, end : int, amount : int, wait : float) {
	for(var i=0;i<amount;i++) {
		Instantiate(
			prefab[Random.Range(start, end)],
			GameObject.Find ("EnemySpawnPoint").transform.position,
			Quaternion.identity
		);
		yield WaitForSeconds(wait);
	}
}

function RegularSpawn () {
	SpawnMon (0, 1, 10, 1f);
}