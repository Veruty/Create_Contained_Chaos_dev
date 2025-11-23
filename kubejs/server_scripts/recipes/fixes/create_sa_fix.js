ServerEvents.recipes(event =>{
event.recipes.create.mechanical_crafting('create_sa:andesite_exoskeleton_chestplate', [
    "01210",
    "00300",
    "54045"
    ], {
        0: 'create:andesite_alloy',
        1: 'create:shaft',
        2: 'create:belt_connector',
        3: 'create_sa:heat_engine',
        4: '#forge:ingots/zinc',
        5: '#forge:stone',
    })
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": "forge:plates/copper"
  },
  "transitionalItem": {
    "item": "create_sa:incomplete_hydraulic_engine"
  },
  "sequence": [
     {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "create_sa:incomplete_hydraulic_engine"
        },
        {
          "fluid": "minecraft:water",
          "nbt": {},
          "amount": 250
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_hydraulic_engine"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "create_sa:incomplete_hydraulic_engine"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_hydraulic_engine"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "create_sa:incomplete_hydraulic_engine"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_hydraulic_engine"
        }
      ]
    }
  ],
  "results": [
    {
      "item": "create_sa:hydraulic_engine",
      "chance": 120.0
    },
    {
      "item": "create:copper_sheet",
      "chance": 8.0
    },
    {
      "item": "create:andesite_alloy",
      "chance": 4.0
    }
  ],
  "loops": 3
})
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": "forge:plates/brass"
  },
  "transitionalItem": {
    "item": "create_sa:incomplete_steam_engine"
  },
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_steam_engine"
        },
        {
          "item": "create:cogwheel"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_steam_engine"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_steam_engine"
        },
        {
          "item": "create:large_cogwheel"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_steam_engine"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_steam_engine"
        },
        {
          "item": "create:propeller"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_steam_engine"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_steam_engine"
        },
        {
          "item": "create:andesite_alloy"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_steam_engine"
        }
      ]
    }
  ],
  "results": [
    {
      "item": "create_sa:steam_engine",
      "chance": 120.0
    },
    {
      "item": "create:brass_sheet",
      "chance": 8.0
    },
    {
      "item": "create:andesite_alloy",
      "chance": 4.0
    }
  ],
  "loops": 3
})
})