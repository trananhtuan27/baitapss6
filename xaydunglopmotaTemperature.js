let Temperlature = function (temperatureC) {
    this.TemperlatureC = temperatureC;
    this.getF = function () {

        return this.TemperlatureC * 1.8 + 32;
    }
    this.getK = function () {
        return this.TemperlatureC + 273.5;
    }
}

function display() {
    let temperatureC = Number(document.getElementById("TemperatureC").value);
    let temperature = new Temperlature(temperatureC);
    document.getElementById("resultF").innerHTML = temperatureC + " C = "
        + temperature.getF() + " F";
    document.getElementById("resultK").innerHTML = temperatureC + " C = "
        + temperature.getK() + " KenVil";

}


