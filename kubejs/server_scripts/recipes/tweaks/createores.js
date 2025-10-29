ServerEvents.recipes(event => {
event.remove({ id: 'createoreexcavation:extractor/water'})
event.remove({ id: 'createoreexcavation:ore_vein_type/water'})




event.custom({
  "type": "createoreexcavation:vein",
  "amountMax": 40.0,
  "amountMin": 10.0,
  "biomeWhitelist": "minecraft:is_overworld",
  "icon": {
    "item": "mekanism:raw_osmium"
  },
  "name": "Raw Osmium",
  //change later to translate key
  "placement": {
    "salt": 1485901891,
    "separation": 8,
    "spacing": 128
  },
  "priority": 0
}).id("kubejs:raw_osmium_ore")

event.custom({
  "type": "createoreexcavation:drilling",
  "drill": {
    "item": 'createoreexcavation:netherite_drill'
  },
  "output": [
    {
      "item": "mekanism:raw_osmium"
    }
  ],
  "priority": 0,
  "stress": 256,
  "ticks": 600,
  "vein_id": "kubejs:raw_osmium_ore"
})

event.custom({
  "type": "createoreexcavation:vein",
  "amountMax": 40.0,
  "amountMin": 10.0,
  "biomeWhitelist": "createdieselgenerators:oil_biomes",
  "icon": {
    "item": 'createdieselgenerators:crude_oil_bucket'
  },
  "name": "Crude Oil",
  //change later to translate key
  "placement": {
    "salt": 1485901891,
    "separation": 8,
    "spacing": 256
  },
  "priority": 0
}).id("kubejs:crude_oil")

event.custom({
  "type": "createoreexcavation:extracting",
  "drill": {
    "tag": "createoreexcavation:drills"
  },
  "output": {
    "amount": 1000,
    "fluid": "createdieselgenerators:crude_oil"
  },
  "priority": 0,
  "stress": 256,
  "ticks": 20,
  "vein_id": "kubejs:crude_oil"
})
})