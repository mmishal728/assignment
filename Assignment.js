
// 1st
function kilometerToMeter(km){
if(km < 0){
    return("Distance can't be nagative");
}
else{
    var meter = km*1000;
    return(meter);
}
}
var meter=kilometerToMeter(0);
console.log(meter);

// 2nd
function budgetCalculator(watch,phone,laptop){
    if(watch,phone,laptop < 0 ){
    return("Error money can't be nagative");
    }
    else{ 
        var watch= watch*50;
        var phone=phone*100;
        var laptop=laptop*500;
        var total=watch+phone+laptop;
        return (total);
    }
}
var total=budgetCalculator(0,0,0);
console.log(total);

// 3rd
function hotelCost(days){
    if( days < 0) {
        var hotelcost="Error days cann't be nagative"
        return(hotelcost)

    }
    else if(days <= 10){
        var totalcost=days*100;
        return (totalcost);
    }
    else if(days <= 10){
        var totalcost=days*100;
        return (totalcost);
    }
    else if (days <= 20){
        var tendays= 10*100;
        var daysRemaining= days-10;
        var twentydays= daysRemaining*80;
        var totalcost =tendays+twentydays;
        return (totalcost);
    }
    else{
        var tendays= 10*100;
        var twentydays= 10*80;
        var daysRemaining= days-20;
        var otherdays= daysRemaining*50;
        var totalcost= tendays+twentydays+otherdays;
        return (totalcost);
        
    }
    
}
var totalcost=hotelCost(45);
console.log(totalcost);

// 4th
function megaFriend(Name){
    var longestName="";
    for(var i=0; i <Name.length; i++){
        if(Name[i].length > longestName.length){
            longestName=Name[i];
        }
    }
    return longestName;
}
var longestName=megaFriend(["Borkot", "Rahimuddin", "karim"]);
console.log(longestName);