var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"]
var members=["Family Book","Grand Father","Father","Brother","Sister","Mother"];
var i=0;
function next_member(){
    i++;
    if(i>5){
        i=0;
    }
document.getElementById("Family_Members").src=images[i];
document.getElementById("Family_Name").innerHTML=members[i];
}
