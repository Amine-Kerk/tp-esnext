let favoriteCityId = 'rome';
console.log(favoriteCityId);
favoriteCityId = 'paris';
console.log(favoriteCityId);


const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
//citiesId=[];
console.log(citiesId);

citiesId.push('tokyo');
console.log(citiesId);

//Création d’objet

function getWeather(citiesId) {
    let city = citiesId.toUpperCase();
    let temperature = 20;
    return { city, temperature };
}
const weather = getWeather(favoriteCityId);
console.log(weather);

//Affectation destructurée


const city = weather.city;
const temperature = weather.temperature;
console.log(city);
console.log(temperature);


//Rest operator

const [parisId, nycId, othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

//Classe

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    set price(price) {
        this._price = price;
    }
    get price() {
        return this._price;
    }
    toString() {
        return `Trip [${this.id} ${this.name} ${this.imageUrl} ${this._price}]`;
    }
    static getDefaultTrip() {
        return this.id + ' ' + this.name + ' ' + this.imageUrl;
    }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');

parisTrip.price = 100;
console.log(parisTrip.name);
console.log(parisTrip.toString());

const defaultTrip = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
console.log(defaultTrip.toString());

//Héritage 

class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price) {
        super(id, name, imageUrl);
        this.price = price || 0;
    }
    toString() {
        return 'Free' + super.toString();
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');

console.log(freeTrip.toString());


//Promise, Set, Map, Arrow Function

class TripService {
    constructor() {
        // TODO Set of 3 trips
        this.trips=new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add (new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add (new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
       
      
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                this.trips.forEach(trip => {
                    if (trip.name===tripName){
                        resolve(trip)

                    }
                    
                });
                reject(`no trip with name ${tripName}`);
            }, 2000)
        });
    }
}
class PriceService {
    constructor() {


        // TODO Map of 2 trips
        this.map = new Map();
        this.map.set("paris", 100);
        this.map.set("rio-de-janeiro", 800);
         // no price for 'nantes'
        this.map.set("nantes");
       
       
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                this.map.forEach(trip => {
                    if (trip.map.get(tripId)){
                        resolve(trip.map.get(tripId))
                    }
                })
                reject(`No price found for id ${tripId}`)
            }, 2000)
        });
    }
}


const tripService=new TripService();
const priceSerivce = new PriceService();

tripService.findByName("Paris")
    .then(value => console.log(`Trip found :${value}`))
    .catch(err => console.log("Find by name : " + err))



 tripService.findByName("Toulouse")
    .then(value => console.log(`Trip found :${value}`))
    .catch(err => console.log("Find by name :" + err))

tripService.findByName("Rio de Janeiro")
    .then(trip => priceService.findPriceByTripId(trip.id)
                    .then(prix => console.log("Price found:" + prix))
                    .catch(err => console.log("Find price by trip Id :  " + err)))
    .catch(err => console.log("Find by name : " + err))

tripService.findByName("Nantes")
    .then(trip => priceService.findPriceByTripId(trip.id)
                    .then(prix => console.log("Find price by trip Id : " + prix))
                    .catch(err => console.log(`Find price by trip Id : ${err}`)))
    .catch(err => console.log("Find by name : " + err))