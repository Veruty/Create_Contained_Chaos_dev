ServerEvents.recipes(e => {
	
    e.recipes.create.filling('ae2:certus_quartz_crystal', [Fluid.water(100), 'ae2:certus_quartz_dust'])
	e.recipes.create.mixing('2x ae2:certus_quartz_dust', ['minecraft:quartz', 'minecraft:light_blue_dye', Fluid.water(250)]).heated()
	e.recipes.create.mixing('ae2:singularity', [Fluid.of('estrogen:liquid_estrogen', 500), Fluid.of('estrogen:testosterone_mixture', 500)])

})
