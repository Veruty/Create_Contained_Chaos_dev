ServerEvents.recipes(event => {
event.custom({"type": "thermal:press",
	"ingredient":[ { "item": 'minecraft:copper_ingot'},
	{"item": 'immersiveengineering:mold_bullet_casing'}],
	"result": [{ "item": 'immersiveengineering:empty_casing', "count": 2 }]
	})

event.custom({"type": "thermal:press",
	"ingredient":[ { "tag": 'forge:ingots/steel'},
	{"item": 'immersiveengineering:mold_wire'}],
	"result": [{ "item": 'immersiveengineering:wire_steel', "count": 2 }]
	})

event.custom({"type": "thermal:press",
	"ingredient":[ { "tag": 'forge:ingots/aluminum'},
	{"item": 'immersiveengineering:mold_wire'}],
	"result": [{ "item": 'immersiveengineering:wire_aluminum', "count": 2 }]
	})

event.custom({"type": "thermal:press",
	"ingredient":[ { "tag": 'forge:ingots/lead'},
	{"item": 'immersiveengineering:mold_wire'}],
	"result": [{ "item": 'immersiveengineering:wire_lead', "count": 2 }]
	})

event.custom({"type": "thermal:press",
	"ingredient":[ { "tag": 'forge:ingots/copper'},
	{"item": 'immersiveengineering:mold_wire'}],
	"result": [{ "item": 'immersiveengineering:wire_copper', "count": 2 }]
	})

event.custom({"type": "thermal:press",
	"ingredient":[ { "tag": 'forge:ingots/electrum'},
	{"item": 'immersiveengineering:mold_wire'}],
	"result": [{ "item": 'immersiveengineering:wire_electrum', "count": 2 }]
	})

event.custom({"type": "thermal:press",
	"ingredient":[ { "tag": 'forge:ingots/iron'},
	{"item": 'immersiveengineering:mold_wire'}],
	"result": [{ "item": 'createaddition:iron_wire', "count": 2 }]
	})

event.custom({"type": "thermal:press",
	"ingredient":[ { "tag": 'forge:ingots/gold'},
	{"item": 'immersiveengineering:mold_wire'}],
	"result": [{ "item": 'createaddition:gold_wire', "count": 2 }]
	})

event.custom({"type": "thermal:press",
	"ingredient":[ { "tag": 'forge:dough/wheat'},
	{"item": 'immersiveengineering:mold_wire'}],
	"result": [{ "item": 'farmersdelight:raw_pasta', "count": 2 }]
	})
})