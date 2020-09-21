//  **** LET ****
let favoriteCityId = 'Rome';

console.log(favoriteCityId)

favoriteCityId = 'Paris';

console.log(favoriteCityId)


// **** CONST ****
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);

//const citiesId = [];
//console.log(citiesId);

citiesId.push('tokyo');
console.log(citiesId);

// Création d’objet
function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature };
}
console.log(getWeather(favoriteCityId));


const weather = getWeather(favoriteCityId);
console.log(weather);

// Affectation destructurée
const city = weather.city;
const temperature = weather.temperature;

console.log(city + " : " + temperature);

// Rest operator

let [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId + ", " + nycId + ", " + othersCitiesId);
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

// Class

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return 'Trip [' + this.id + ', ' + this.name + ', ' + this.imageUrl + '] - price = ' + this._price;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    static getDefaultTrip() {
        let rio = new Trip('rio-de-janeiro', 'Rio-de-Janeiro', 'img/rio-de-janeiro.jpg');
        return rio;
    }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg',);

console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());

parisTrip.price = 100;
console.log(parisTrip.toString());


const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip);
console.log(defaultTrip.toString());


/// *** Heritage ***

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this.price = 0;
    }

    toString() {
        return 'FreeTrip [' + this.id + ', ' + this.name + ', ' + this.imageUrl + ', ' + this.price + ']';
    }

}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
console.log(freeTrip.toString());


/// *** Promise, Set, Map ***

module.exports = { Trip };
