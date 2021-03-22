namearray=[]

function submit(){
    
    var name1 = document.getElementById("student1").value;
    var name2 = document.getElementById("student2").value;
    var name3 = document.getElementById("student3").value;
    var name4 = document.getElementById("student4").value;

    namearray.push(name1);
    namearray.push(name2);
    namearray.push(name3);
    namearray.push(name4);

    console.log(namearray);

    document.getElementById("displayname").innerHTML = namearray;
    document.getElementById("buttonsort").style.display = "inline-block";

}

function sorting(){

    namearray.sort();
    console.log(namearray);
    document.getElementById("displayname").innerHTML = namearray;
}