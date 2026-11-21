// kubejsstudio custom: kubejs:refined_radiance_casing_wood
ServerEvents.generateData('after_mods', event => {

    event.json(
      'kubejs:recipe/refined_radiance_casing_logs',
      {
        "type": "create:item_application",
        "ingredients": [
          {"tag":"c:stripped_logs"},
          {"item":"create:refined_radiance"}
        ],
        "results": [{"id":"create:refined_radiance_casing"}]
      }
    )
    

    event.json(
      'kubejs:recipe/refined_radiance_casing_wood',
      {
        "type": "create:item_application",
        "ingredients": [
          {"tag":"c:stripped_wood"},
          {"item":"create:refined_radiance"}
        ],
        "results": [{"id":"create:refined_radiance_casing"}]
      }
    )


    event.json(
      'kubejs:recipe/shadow_steel_casing_logs',
      {
        "type": "create:item_application",
        "ingredients": [
          {"tag":"c:stripped_logs"},
          {"item":"create:shadow_steel"}
        ],
        "results": [{"id":"create:shadow_steel_casing"}]
      }
    )

    event.json(
      'kubejs:recipe/shadow_steel_casing_wood',
      {
        "type": "create:item_application",
        "ingredients": [
          {"tag":"c:stripped_wood"},
          {"item":"create:shadow_steel"}
        ],
        "results": [{"id":"create:shadow_steel_casing"}]
      }
    )
    

})
ServerEvents.recipes(event => {event.recipes.create.mixing('create:chromatic_compound', ['3x minecraft:glowstone_dust', '3x create:powdered_obsidian', 'create:polished_rose_quartz']).superheated()})


ServerEvents.generateData('after_mods', event => {
    event.json(
      'createaddition:recipe/compat/immersiveengineering/constantan',
      {
        "type": "create:mixing",
        "ingredients": [{"tag":"c:ingots/nickel"},{"tag":"c:ingots/copper"}],
        "results": [{"id":"immersiveengineering:ingot_constantan","count":2}],
        "heat_Requirement": "heated",
        "neoforge:conditions": [
          {
            "type": "almostunified:conditional",
            "conditions_met": true,
            "original_conditions": [
              {
                "type": "neoforge:mod_loaded",
                "modid": "immersiveengineering"
              }
            ]
          }
        ]
      }
    )
})

//ServerEvents.recipes(event => {
//	event.shaped(
//    Item.of('create:spout', 2),
//    [
//        ' A ',
//        ' B ',
//        '   '
//    ],
//    {
//        B: 'thermal:cured_rubber',
//        A: 'create:copper_casing'
//    })
//	event.shaped(
//    Item.of('create:andesite_funnel', 4),
//    [
//        ' A ',
//        ' B ',
//        '   '
//    ],
//    {
//        A: 'create:andesite_alloy',
//        B: 'thermal:cured_rubber'
//    })
//	event.shaped(
//    Item.of('create:andesite_tunnel', 4),
//    [
//        'AA ',
//        'BB ',
//        '   '
//    ],
//    {
//        A: 'create:andesite_alloy',
//        B: 'thermal:cured_rubber'
//    })
//	event.shaped(
//    Item.of('create:brass_funnel', 4),
//    [
//        ' A ',
//        ' B ',
//        ' C '
//    ],
//    {
//        B: 'create:brass_ingot',
//        A: 'create:electron_tube',
//        C: 'thermal:cured_rubber'
//    })
//	event.shaped(
//    Item.of('create:brass_tunnel', 4),
//    [
//        'A  ',
//        'BB ',
//        'CC '
//    ],
//    {
//        B: 'create:brass_ingot',
//        A: 'create:electron_tube',
//        C: 'thermal:cured_rubber'
//    })
//	event.shaped(
//    Item.of('create:belt_connector', 6),
//    [
//        '   ',
//        'AAA',
//        'AAA'
//    ],
//    {
//        A: 'thermal:cured_rubber'
//    })
//	event.remove({ id: 'thermal:rubber_3' })
//
//})