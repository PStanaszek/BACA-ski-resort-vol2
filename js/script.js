(function weatherForecast(){
    var id = "c46a632da27f87f7efe0ff1745ef7149";
    var req = new XMLHttpRequest();
    req.open('GET', "http://api.openweathermap.org/data/2.5/forecast/daily?q=Zawoja&APPID="+id+"&units=metric&cnt=4&lang=pl", true); /* Argument trzeci, wartość true, określa, że żądanie ma być asynchroniczne */
    req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
            if(req.status == 200){
                var json = JSON.parse(req.responseText),
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
                for(var i = 0; i < 3; i++){
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

/*var ss = document.querySelector("#ak");
            ss.addEventListener("click", function(){
            console.log("hello");
            });*/

function newHTML(){

    var navItem = document.getElementsByClassName('nav-bar');
    for(var i = 0; i < navItem.length; i++) {
        var elem = navItem[i];   
        elem.onclick = function(event) {
            event.preventDefault();
            var url = this.getAttribute("href");

            var xhr = new XMLHttpRequest();
            console.log("dsa");
            xhr.onreadystatechange = function(){
                console.log("dsa");
                if(xhr.status == 200){
                   

                    document.querySelector(".content").innerHTML = xhr.responseText;
                    document.querySelector(".content > div").classList.add("animated","pulse");
                    console.log(document.querySelector(".content > div").classList)
                    if( url = "gallery.html"){
                    var viewer = new Viewer(document.getElementById('images'));
                    Viewer.setDefaults(options)   
                    }
                    
                }

            }
            xhr.open('GET', url, true);
            xhr.send(null); 
        }


    };
};

newHTML();

(function clickedWeater(){

    var weatherContainer = document.querySelector(".weather");
    var weatherElem = document.querySelectorAll(".current-weather");
    var weatherHeaderIcon = document.querySelector(".name >img");
    weatherContainer.onclick = function(e){
       e.preventDefault();
        weatherContainer.classList.toggle("slideOutWeatherDiv");
        weatherHeaderIcon.classList.toggle("hideWeatherDivs");
        console.log(weatherContainer.classList);
        for ( var i = 0; i< weatherElem.length; i++){
          weatherElem[i].classList.toggle("hideWeatherDivs");
          weatherElem[i].classList.toggle("showWeatherDivs");
          console.log(weatherElem[i].classList);
            
         
        }
    
        
        
    }
})();

