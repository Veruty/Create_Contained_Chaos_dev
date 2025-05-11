ServerEvents.recipes(e => {
    e.recipes.create.item_application('kubejs:machine_casing', ['kubejs:condensed_casing', "thermal:invar_plate"])
    e.recipes.create.item_application('kubejs:heat_proof_casing', ['kubejs:condensed_casing', "kubejs:ht_ceramic_plate"])
    e.shaped(
        Item.of('mbd2:machine_casing_input'),
        [
            ' A ',
            ' B ',
            '   '
        ],
        {
            B: 'kubejs:machine_casing',
            A: '#forge:chests'
        }
    )
    e.shapeless(
        Item.of('mbd2:machine_casing_output'),
        [
            'mbd2:machine_casing_input'
        ]
    )
    e.shaped(
        Item.of('mbd2:machine_casing_output'),
        [
            '   ',
            ' A ',
            ' B '
        ],
        {
            A: 'kubejs:machine_casing',
            B: '#forge:chests'
        }
    )
    e.shapeless(
        Item.of('mbd2:machine_casing_input'),
        [
            'mbd2:machine_casing_output'
        ]
    )
    e.shapeless(
        Item.of('mbd2:machine_casing_energy'),
        [
            'minecraft:redstone_block',
            'kubejs:machine_casing'
        ]
    )
    	e.custom({"type": "create:sequenced_assembly",
		"ingredient": {"item": "kubejs:machine_casing"},
			"loops": 1,
				"results": [
					{"chance": 50.0, "item": "kubejs:graphite_electrodes_machine_casing"},
					{"chance": 10.0, "item": "kubejs:graphite_rod"},
					{"chance": 40.0, "item": "kubejs:graphite_dust"}
				],
		"sequence": [{
			"type": "create:deploying",
				"ingredients": [
					{"item": "kubejs:incomplete_graphite_electrodes_machine_casing"},
					{"item": "kubejs:graphite_rod"}
				],
				"results": [{"item": "kubejs:incomplete_graphite_electrodes_machine_casing"}]
		},
        {
			"type": "create:deploying",
				"ingredients": [
					{"item": "kubejs:incomplete_graphite_electrodes_machine_casing"},
					{"item": "kubejs:graphite_rod"}
				],
				"results": [{"item": "kubejs:incomplete_graphite_electrodes_machine_casing"}]
		},
                {
			"type": "create:deploying",
				"ingredients": [
					{"item": "kubejs:incomplete_graphite_electrodes_machine_casing"},
					{"item": "kubejs:graphite_rod"}
				],
				"results": [{"item": "kubejs:graphite_electrodes_machine_casing"}]
		}
		],
		"transitionalItem": {"item": "kubejs:incomplete_graphite_electrodes_machine_casing"}
		})
    e.shaped(
    Item.of('kubejs:electric_macine_casing'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        D: 'kubejs:machine_casing',
        B: 'thermal:cured_rubber',
        C: 'kubejs:power_management_mechanism',
        A: 'createaddition:electrum_wire'
    }
)
e.shaped(
    Item.of('mbd2:arc_furnace_controller'),
    [
        'ABA',
        'CDC',
        'EBE'
    ],
    {
        D: 'kubejs:machine_casing',
        B: 'kubejs:advanced_mechanism',
        E: 'create_new_age:copper_circuit',
        C: 'create:precision_mechanism',
        A: 'kubejs:power_management_mechanism'
    }
)
})