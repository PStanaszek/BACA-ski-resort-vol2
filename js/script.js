
(function weatherForecast(){
    var id = "c46a632da27f87f7efe0ff1745ef7149";
    var req = new XMLHttpRequest();
    req.open('GET', "http://api.openweathermap.org/data/2.5/forecast/daily?q=Zawoja&APPID="+id+"&units=metric&cnt=4&lang=pl", true); /* Argument trzeci, wartość true, określa, że żądanie ma być asynchroniczne */
    req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
            if(req.status == 200){
                var json = JSON.parse(req.responseText),
                    name = document.querySelector(".name"),
                    image = document.querySelectorAll(".current-weather > img"),
                    description = document.querySelectorAll(".description"),
                    temp = document.querySelectorAll(".temp"),

                    days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
                    months = [ "STY", "LUT", "MAR", "KWI", "MAJ", "CZE", "LIP", "SIE", "WRZ", "PAŹ", "LIS", "GRU"],
                    date = json.list[0].dt,
                    d = new Date(),
                    t = new Date(d.getTime()+1000*60*60*24),
                    day = d.getDay();
                    day_number = d.getDate(),
                    month_number = d.getMonth() + 1,
                    day_name = days[day],
                    dateArr = document.querySelectorAll(".date");
                    dayArr = document.querySelectorAll(".day");

                    console.log(json);/*usunąc*/
                    name.textContent = json.city.name;
                for(var i = 0; i < 4; i++){
                    description[i].textContent = json.list[i].weather[0].description

                    temp[i].innerHTML = Math.floor(json.list[i].temp.day) + " &#8451";
                    /*setting date*/
                    var dateCalc = new Date(d.getTime()+(1000*60*60*24*i)),
                        numberOfday =dateCalc.getDate()+1;
                    numberOfmonth = dateCalc.getMonth(),
                        nameOfmonth = months[numberOfmonth];

                    dateArr[i].textContent = (numberOfday + " " + nameOfmonth),
                        /*setting date*/
                        /*setting day of the week*/
                        dayCalc = day+1 + i;
                    dayNum = dayCalc;
                    if (dayCalc > 6){
                        dayNum = i;
                    } 
                    dayName = days[dayNum];
                    dayArr[i].textContent = dayName + " ";

                }
                /*setting day of the week*/

            }else{
                console.log("Błąd podczas ładowania strony\n");
            }
        }
    };
    req.send(null);
})();
