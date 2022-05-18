var db  = require('.db/db.json');
var food_band = require('.db/food-band.json');
var usi_lebedi = require('.db/gusi-lebedi.json');
var palki_skalki  = require('.db/palki-skalki.json');
var partners = require('.db/partners.json');
var pizza_burger = require('.db/pizza-burger.json');
var pizza_plus  = require('.db/pizza-plus.json');
var tanuki = require('.db/tanuki.json');

module.exports = function() {
return {
db : db,
food_band : food_band,
usi_lebedi : usi_lebedi,
palki_skalki : palki_skalki,
partners : partners,
pizza_burger : pizza_burger,
pizza_plus : pizza_plus,
tanuki : tanuki
}
}