#pragma strict

var StartBtn:Transform;
var anim: Animator;

function Start () {
   
   }

function ShowStartButtonFun(){
   anim = StartBtn.GetComponent(Animator);
   anim.SetBool("Show",true);
   

}