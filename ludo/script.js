let turnBtn = document.getElementById("turnBtn");
var takeTurn=false;
var playerIndex=0;
// getting dice id 
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let dice3 = document.getElementById("dice3");
let dice4 = document.getElementById("dice4");
let dice5 = document.getElementById("dice5");
let dice6 = document.getElementById("dice6");
            // variables for all goti 
            // variables for green goti 
            var got1_green = document.getElementById('got1_green');
            var got2_green = document.getElementById('got2_green');
            var got3_green = document.getElementById('got3_green');
            var got4_green = document.getElementById('got4_green');
            // variables for red goti 
            var got1_red = document.getElementById('got1_red');
            var got2_red = document.getElementById('got2_red');
            var got3_red = document.getElementById('got3_red');
            var got4_red = document.getElementById('got4_red');
            // variables for yellow goti 
            var got1_yellow = document.getElementById('got1_yellow');
            var got2_yellow = document.getElementById('got2_yellow');
            var got3_yellow = document.getElementById('got3_yellow');
            var got4_yellow = document.getElementById('got4_yellow');
            // variables for blue goti 
            var got1_blue = document.getElementById('got1_blue');
            var got2_blue = document.getElementById('got2_blue');
            var got3_blue = document.getElementById('got3_blue');
            var got4_blue = document.getElementById('got4_blue');

            // All Goties Variable 
            var green1=0;
            var green2=0;
            var green3=0;
            var green4=0;

            var red1=0;
            var red2=0;
            var red3=0;
            var red4=0;
                    
            var blue1=0;
            var blue2=0;
            var blue3=0;
            var blue4=0;
            
            var yellow1=0;
            var yellow2=0;
            var yellow3=0;
            var yellow4=0;
            
            // var green1_Left=0;
            // var green2_Left=0;
            // var green3_Left=0;
            // var green4_Left=0;

            // var red1_Left=0;
            // var red2_Left=0;
            // var red3_Left=0;
            // var red4_Left=0;
                    
            // var blue1_Left=0;
            // var blue2_Left=0;
            // var blue3_Left=0;
            // var blue4_Left=0;
            
            // var yellow1_Left=0;
            // var yellow2_Left=0;
            // var yellow3_Left=0;
            // var yellow4_Left=0;
            

            let    Goti_Green_Top1  = [122,310,310,310,310,310,252];
            let   Goti_Green_Left1 =  [50,50,103,152,202,252,311]; 

            let    Goti_Green_Top2  = [50];
            let   Goti_Green_Left2 =  [132]; 
            
            let    Goti_Green_Top3  = [133];
            let   Goti_Green_Left3 =  [200]; 
            
            let    Goti_Green_Top4  = [202];
            let   Goti_Green_Left4 =  [120]; 

            let    Goti_Red_Top1  = [122,310];
            let   Goti_Red_Left1 =  [50,50]; 

            let    Goti_Red_Top2  = [50];
            let   Goti_Red_Left2 =  [132]; 
            
            let    Goti_Red_Top3  = [133];
            let   Goti_Red_Left3 =  [200]; 
            
            let    Goti_Red_Top4  = [202];
            let   Goti_Red_Left4 =  [120]; 

            let    Goti_Yellow_Top1  = [122,310];
            let   Goti_Yellow_Left1 =  [50,50]; 

            let    Goti_Yellow_Top2  = [50];
            let   Goti_Yellow_Left2 =  [132]; 
            
            let    Goti_Yellow_Top3  = [133];
            let   Goti_Yellow_Left3 =  [200]; 
            
            let    Goti_Yellow_Top4  = [202];
            let   Goti_Yellow_Left4 =  [120]; 
            
            let    Goti_Blue_Top1  = [122,310];
            let   Goti_Blue_Left1 =  [50,50]; 

            let    Goti_Blue_Top2  = [50];
            let   Goti_Blue_Left2 =  [132]; 
            
            let    Goti_Blue_Top3  = [133];
            let   Goti_Blue_Left3 =  [200]; 
            
            let    Goti_Blue_Top4  = [202];
            let   Goti_Blue_Left4 =  [120]; 
var Randomnumber;
            // generate random number 
function GenerateRandomNumber(){
    playerIndex++;
   var recall =  setInterval(function(){
    recallDice();
},60);
        setTimeout(function(){
            clearInterval(recall);
        },1000);
       Randomnumber = Math.floor(Math.random()*6)+1;
    setTimeout(function(){
        switch(Randomnumber)
        {   
            case 1:
                dice1.style.display="block";
                dice2.style.display="none";
                dice3.style.display="none";
                dice4.style.display="none";
                dice5.style.display="none";
                dice6.style.display="none";
                break;
                case 2:
                    dice1.style.display="none";
                    dice2.style.display="block";
                    dice3.style.display="none";
                    dice4.style.display="none";
                    dice5.style.display="none";
                    dice6.style.display="none";
                    break;
                    case 3:
                        dice1.style.display="none";
                        dice2.style.display="none";
                        dice3.style.display="block";
                        dice4.style.display="none";
                        dice5.style.display="none";
                        dice6.style.display="none";
                    break;
                    case 4:
                        dice1.style.display="none";
                        dice2.style.display="none";
                        dice3.style.display="none";
                        dice4.style.display="block";
                        dice5.style.display="none";
                        dice6.style.display="none";
                    break;
                    case 5:
                        dice1.style.display="none";
                        dice2.style.display="none";
                        dice3.style.display="none";
                        dice4.style.display="none";
                        dice5.style.display="block";
                        dice6.style.display="none";
                    break;
                    case 6:
                    dice1.style.display="none";
                    dice2.style.display="none";
                    dice3.style.display="none";
                    dice4.style.display="none";
                    dice5.style.display="none";
                    dice6.style.display="block";
                    break;
                    default:
                    dice1.style.display="none";
                    dice2.style.display="none";
                    dice3.style.display="none";
                    dice4.style.display="none";
                    dice5.style.display="none";
                    dice6.style.display="none";
        }
    },1000);
    choosePlayer(Randomnumber);
}
            // deciding player 
    let player = "Red";
    var ChoosePlayer = document.getElementById("ChoosePlayer");
// function choosePlayer(Randomnumber){
//     if(Randomnumber!=6)
//     {
//         showFalse("Unfortunatly You Stuck",""+player);
//         setTimeout(function(){
//             if(player=="Red")
//             {   
//                 player="Blue";
//             }else if(player=="Blue")
//             {
//                 player="Yellow";
//             }else if(player=="Yellow")
//             {
//                 player="Green";
//             }else if(player=="Green")
//             {
//                 player="Red";
//             }
//             ChoosePlayer.innerText=player;
//         },2000);
//     }
// }
// dice recalll
function recallDice(){
    console.log("PlayerIndex:"+playerIndex);
    takeTurn=false;
    let   Randomno = Math.floor(Math.random()*6)+1;
    switch(Randomno)
    {   
        case 1:
            dice1.style.display="block";
            dice2.style.display="none";
            dice3.style.display="none";
            dice4.style.display="none";
            dice5.style.display="none";
            dice6.style.display="none";
            break;
            case 2:
                dice1.style.display="none";
                dice2.style.display="block";
                dice3.style.display="none";
                dice4.style.display="none";
                dice5.style.display="none";
                dice6.style.display="none";
                break;
                case 3:
                    dice1.style.display="none";
                    dice2.style.display="none";
                    dice3.style.display="block";
                    dice4.style.display="none";
                    dice5.style.display="none";
                    dice6.style.display="none";
                break;
                case 4:
                    dice1.style.display="none";
                    dice2.style.display="none";
                    dice3.style.display="none";
                    dice4.style.display="block";
                    dice5.style.display="none";
                    dice6.style.display="none";
                break;
                case 5:
                    dice1.style.display="none";
                    dice2.style.display="none";
                    dice3.style.display="none";
                    dice4.style.display="none";
                    dice5.style.display="block";
                    dice6.style.display="none";
                break;
                case 6:
                dice1.style.display="none";
                dice2.style.display="none";
                dice3.style.display="none";
                dice4.style.display="none";
                dice5.style.display="none";
                dice6.style.display="block";
                break;
                default:
                dice1.style.display="none";
                dice2.style.display="none";
                dice3.style.display="none";
                dice4.style.display="none";
                dice5.style.display="none";
                dice6.style.display="none";
    }
}
function showFalse(s,p){
    document.getElementById('popup').classList.remove('close-popup');
  var alert = document.getElementById("alert").innerText=s;
  var para = document.getElementById("para").innerText=p;
  let popup  = document.getElementById('popup');
  setTimeout(function(){
      popup.classList.add('open-popup');
  },1000);
  setTimeout(function(){
              popup.classList.remove('open-popup');
              popup.classList.add('close-popup');
          },3500)
 }
 function showTrue(s,p){
    document.getElementById('popup1').classList.remove('close-popup1');
  var alert = document.getElementById("alert1").innerText=s;
  var para = document.getElementById("para1").innerText=p;
  let popup  = document.getElementById('popup1');
  setTimeout(function(){
      popup.classList.add('open-popup1');
  },1000);
  setTimeout(function(){
              popup.classList.remove('open-popup1');
              popup.classList.add('close-popup1');
          },3500)
 }
//  function  moveGoti(color,loc){
//     if(color==player && takeTurn==false)
//     {
//         var v = Goti_Green_Top1[Randomnumber]+"px"
//         if(loc==1){
            
//         got1_green.style.top=v;
//             takeTurn=true
//         }
//         else if(loc==2){
//             takeTurn=true
//             got2_green.style.top=v;}
//             else if(loc==3){
//                 takeTurn=true
//                 got3_green.style.top=v;}
//                 else if(loc==4){
//          takeTurn=true
//      got4_green.style.top=v;}
//  }else{
//     if(takeTurn==true)
//     {
//         showFalse("You Already take Your Turn","Please Wait For Your Next Turn");
//     }
//         showFalse("Its Not Your Turn","Please Wait For Your Turn");
//     }
// }
function movegoti(color,index)
{   if(takeTurn==false){
    if(color=="green")
    {   takeTurn=true;
        if(index==1)
        { 
        green1 = green1 + Randomnumber;
      let a =  Goti_Green_Left1[green1];
      let b =  Goti_Green_Top1[green1];
      got1_green.style.top=a;
      got1_green.style.left=b;
            
     }  else if(index==2)
     { 
        green2 = green2 + Randomnumber;
        let a =  Goti_Green_Left2[green2];
        let b =  Goti_Green_Top2[green2];
        got2_green.style.top=a;
        got2_green.style.left=b;

     }  else if(index==3)
     { 
        green3 = green3 + Randomnumber;
        let a =  Goti_Green_Left3[green3];
        let b =  Goti_Green_Top3[green3];
        got3_green.style.top=a;
        got3_green.style.left=b;

     }  else if(index==4)
     { 
        green4 = green4 + Randomnumber;
        let a =  Goti_Green_Left4[green4];
        let b =  Goti_Green_Top4[green4];
        got4_green.style.top=a;
        got4_green.style.left=b;

     } 
    }
   else if(color=="red")
    {takeTurn=true;
        if(index==1)
        { 
        red1 = red1 + Randomnumber; 
            
      let a =  Goti_Red_Left1[red1];
      let b =  Goti_Red_Top1[red1];
      got1_red.style.top=a;
      got1_red.style.left=b;

            console.log("red");
        }  else if(index==2)
        { 
         console.log("red");
         red2 = red2 + Randomnumber;
   
         let a =  Goti_Red_Left2[red2];
         let b =  Goti_Red_Top2[red2];
         got2_red.style.top=a;
         got2_red.style.left=b;
         
        }  else if(index==3)
        { 
         console.log("red");
         red3 = red3 + Randomnumber;

         let a =  Goti_Red_Left3[red3];
         let b =  Goti_Red_Top3[red3];
         got3_red.style.top=a;
         got3_red.style.left=b;
            
        }  else if(index==4)
        { 
         console.log("red");
        red4 = red4 + Randomnumber;

        let a =  Goti_Red_Left4[red4];
        let b =  Goti_Red_Top4[red4];
        got4_red.style.top=a;
        got4_red.style.left=b;
          
     }
    }
    else if(color=="blue")
    {takeTurn=true;
        if(index==1)
        { 
            blue1= blue1 + Randomnumber;

            let a =  Goti_Blue_Left1[blue1];
            let b =  Goti_Blue_Top1[blue1];
            got1_blue.style.top=a;
            got1_blue.style.left=b;
                 
        }  else if(index==2)
        { 
            blue2= blue2 + Randomnumber;
            let a =  Goti_Blue_Left2[blue2];
            let b =  Goti_Blue_Top2[blue2];
            got2_blue.style.top=a;
            got2_blue.style.left=b;
           
        }  else if(index==3)
        { 
            blue3= blue3 + Randomnumber;
            let a =  Goti_Blue_Left3[blue3];
            let b =  Goti_Blue_Top3[blue3];
            got3_blue.style.top=a;
            got3_blue.style.left=b;
           
        }  else if(index==4)
        { 
            blue4= blue4 + Randomnumber;
           
            let a =  Goti_Blue_Left4[blue4];
            let b =  Goti_Blue_Top4[blue4];
            got4_blue.style.top=a;
            got4_blue.style.left=b;
        }  
    }
   else if(color=="yellow")
    {takeTurn=true;
        if(index==1)
     {  
        yellow1= yellow1 + Randomnumber;
        
        let a =  Goti_Yellow_Left1[yellow1];
        let b =  Goti_Yellow_Top1[yellow1];
        got1_yellow.style.top=a;
        got1_yellow.style.left=b;
     }  else if(index==2)
     {  
        yellow2= yellow2 + Randomnumber;
        
        let a =  Goti_Yellow_Left2[yellow2];
        let b =  Goti_Yellow_Top2[yellow2];
        got2_yellow.style.top=a;
        got2_yellow.style.left=b;
     }  else if(index==3)
     {  
        yellow3= yellow3 + Randomnumber;
        
        let a =  Goti_Yellow_Left3[yellow3];
        let b =  Goti_Yellow_Top3[yellow3];
        got3_yellow.style.top=a;
        got3_yellow.style.left=b;
     }  else if(index==4)
     {  
        yellow4= yellow4 + Randomnumber;
 
        let a =  Goti_Yellow_Left4[yellow4];
        let b =  Goti_Yellow_Top4[yellow4];
        got4_yellow.style.top=a;
        got4_yellow.style.left=b;
    }
    }}
    else{
        showFalse("Its Not Yor Turn","Wait For Your Turn");
    }
}
function choosePlayer(Randomnumber){
    if(playerIndex==1)
   {
        if(red1==0 && red2==0 && red3==0 && red4==0 && Randomnumber!=6)
        { console.log("redTurn");
            showFalse("Unfortunatly You Stuck","Please Wait For Next Turn");
        }
   }else if(playerIndex==2)
   {
        if(blue1==0 && blue2==0 && blue3==0 && blue4==0 && Randomnumber!=6)
        { console.log("BleTurn");
            showFalse("Unfortunatly You Stuck","Please Wait For Next Turn");
        }
   } else if(playerIndex==3)
   {
        if( yellow1==0 && yellow2==0 && yellow3==0 && yellow4==0 && Randomnumber!=6)
        { console.log("YellowTurn");
            showFalse("Unfortunatly You Stuck","Please Wait For Next Turn");
        }
   }else if(playerIndex==4)
   {
        if(green1==0 && green2==0 && green3==0 && green4==0 && Randomnumber!=6) 
        { console.log("GreenTurn");
            showFalse("Unfortunatly You Stuck","Please Wait For Next Turn");
            setTimeout(function(){
            playerIndex=0;
            },600);
        }
   }
    if(Randomnumber!=6)
    {
        setTimeout(function(){
            if(player=="Red")
            {   
                player="Blue";
            }else if(player=="Blue")
            {
                player="Yellow";
            }else if(player=="Yellow")
            {
                player="Green";
            }else if(player=="Green")
            {
                player="Red";
            }
            ChoosePlayer.innerText=player;
        },2000);
    }
}