ServerEvents.recipes(event => {
event.remove({ id: 'createoreexcavation:extractor/water'})
event.remove({ id: 'createoreexcavation:ore_vein_type/water'})


event.custom({
  "type": "createoreexcavation:vein",
  "amountMultiplierMax": 2.0,
  "amountMultiplierMin": 0.5,
  "biomeWhitelist": "minecraft:is_overworld",
  "finite": "default",
  "icon": {
    "count": 1,
    "id": "mekanism:raw_osmium"
  },
  "name": "{\"translate\":\"item.mekanism.raw_osmium\"}",
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
    "id": 'createoreexcavation:netherite_drill'
  },
  "output": [
    {
      "id": "mekanism:raw_osmium"
    }
  ],
  "priority": 0,
  "stress": 256,
  "ticks": 600,
  "veinId": "kubejs:raw_osmium_ore"
})

event.custom({
  "type": "createoreexcavation:vein",
  "amountMultiplierMax": 2.0,
  "amountMultiplierMin": 0.5,
  "biomeWhitelist": "createdieselgenerators:oil_biomes",
  "finite": "default",
  "icon": {
    "count": 1,
    "id": "createdieselgenerators:crude_oil_bucket"
  },
  "name": "{\"translate\":\"block.createdieselgenerators.crude_oil\"}",
  "placement": {
    "salt": 1485839891,
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
    "id": "createdieselgenerators:crude_oil"
  },
  "priority": 0,
  "stress": 256,
  "ticks": 20,
  "veinId": "kubejs:crude_oil"
})
})