
let salary = 0;
function cost()
{
    let values = document.getElementsByTagName('input');

let error=false;
    for(var i=0;i<values.length;i++){}
    {
        if (values[i].value == " ")
            error =  true;
    }
    let total , newTotal ;
if (error)
{ 
    alert("You should fill all the info"); 
}else
{
    let total = 0;
   // for (var i = 0 ; i < values.length ;i++)
    //    total = total + parseFloat(values[i].value);
    total =parseFloat(values[0].value) +
       parseFloat( values[1].value) + 
       parseFloat(values[2].value);

    if (total > 150)
    {  
        newTotal = total -  0.15 * total ;
        document.getElementById("c").style.backgroundColor="greenYellow";
        document.getElementById('c').value = total ;
        document.getElementById("in").style.color = "red";
        document.getElementById("in").innerHTML=
        "<h3>You have to pay " + newTotal  +
        " you got 15 % discount  </h3>";                
    }
    else
    {
        document.getElementById("c").style.backgroundColor="greenYellow";
        document.getElementById('c').value = total ;
        document.getElementById("in").style.color = "red";
        document.getElementById("in").innerHTML=
        "<h3>You have to pay " + total  +
        " you don't have any discount  </h3>"; 
    }
}   
 
}
function addEmployee()
{
    salary += parseInt(document.getElementById("q1").value * 
            document.getElementById("cost1").value);
    document.getElementById("out").innerHTML= 
            "Total amount of salaries : " + salary; 
        var itemTable=document.getElementsByTagName("table")[0];           
        var item=document.getElementsByTagName("input")[1];
        var quant=document.getElementsByTagName("input")[2];
            
        var itemRow=document.createElement("tr");
        var itemCell=document.createElement("td");
        var quantCell=document.createElement("td");
        var costCell=document.createElement("td");            
            
        itemCell.innerHTML=item.value;
        quantCell.innerHTML=quant.value;
        costCell.innerHTML=quant.value * 
        document.getElementById("cost1").value;            
            
        itemRow.appendChild(itemCell);
        itemRow.appendChild(quantCell);
        itemRow.appendChild(costCell);            
            
        itemTable.appendChild(itemRow);
        item.value="";
        quant.value="";        
}
function size1(x)
        {
            x.style.width = "600px";  
            x.style.borderColor="blue";          
        }

 function size2(x)
        {
            x.style.width = "400px";
            x.style.borderColor="black";
        }        
function size2(x)
        {
            x.style.width = "400px";
            x.style.borderColor="black";
        }      