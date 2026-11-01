ServerEvents.generateData('after_mods', event => {
event.json(
  'createbigcannons:recipe/melting/melt_cast_iron_nugget',
  {
    "neoforge:conditions": [
      {
        "type": "almostunified:conditional",
        "conditions_met": true,
        "original_conditions": [
          {
            "type": "neoforge:not",
            "value": {"type":"neoforge:tag_empty","tag":"c:nuggets/iron"}
          }
        ]
      }
    ],
    "type": "createbigcannons:melting",
    "heat_requirement": "heated",
    "ingredients": [{"tag":"c:nuggets/iron"}],
    "processing_time": 20,
    "results": [{"amount":10,"id":"createbigcannons:molten_cast_iron"}]
  }
)

event.json(
  'createbigcannons:recipe/melting/melt_cast_iron_ingot',
  {
    "neoforge:conditions": [
      {
        "type": "almostunified:conditional",
        "conditions_met": true,
        "original_conditions": [
          {
            "type": "neoforge:not",
            "value": {"type":"neoforge:tag_empty","tag":"c:ingots/iron"}
          }
        ]
      }
    ],
    "type": "createbigcannons:melting",
    "heat_requirement": "heated",
    "ingredients": [{"tag":"c:ingots/iron"}],
    "processing_time": 180,
    "results": [{"amount":90,"id":"createbigcannons:molten_cast_iron"}]
  }
)
event.json(
  'createbigcannons:recipe/melting/melt_cast_iron_block',
  {
    "neoforge:conditions": [
      {
        "type": "almostunified:conditional",
        "conditions_met": true,
        "original_conditions": [
          {
            "type": "neoforge:not",
            "value": {
              "type": "neoforge:tag_empty",
              "tag": "c:storage_blocks/iron"
            }
          }
        ]
      }
    ],
    "type": "createbigcannons:melting",
    "heat_requirement": "heated",
    "ingredients": [{"tag":"c:storage_blocks/iron"}],
    "processing_time": 1620,
    "results": [{"amount":810,"id":"createbigcannons:molten_cast_iron"}]
  }
)


})

ServerEvents.recipes(e => {

    e.remove({ id: 'createbigcannons:compacting/iron_to_cast_iron_ingot' }),
//01.11.26 veruty: it complains that theres no , after line above?????
//01.11.26 but a bit later veruty: nvm i am a dumbass i placed () instead of {} and it still worked but required ,
    e.remove({ id: 'createbigcannons:mixing/alloy_steel' })
})