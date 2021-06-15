// get year of birth from form

// get akan name
function dayName() {
   var birthYear = parseInt(document.getElementById("birthYear").value);
//    if(birthYear.length !== 3) {
//        alert("Year characters more than 3");
//    }

   
    // get month of birt from form
    var month = parseInt(document.getElementById("month").value);
    
    if(month >12 || month <= 0 ) {
        alert("Enter a valid month");
    }
    // get day of birth from form
    var day = parseInt(document.getElementById("date").value);

    if(day <=0 || day > 31) {
        alert("Enter a valid date");
    }
    
    var dayNumber = new Date (birthYear,month-1,day).getDay();
    console.log(dayNumber);

    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi",  "Kwame"];
    var femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var male = document.getElementById("flexRadioDefault1");
    var female = document.getElementById("flexRadioDefault2")

    if(male.checked) {
        alert("Your Akan Name is: " + maleNames[dayNumber]);
    } else if(female.checked){
        alert("Your Akan Name is: " + femaleNames[dayNumber])
    } else {
        alert("Select your gender");
    }
    

}



