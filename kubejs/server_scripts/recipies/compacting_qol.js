ServerEvents.recipes(e => {
    e.recipes.create.compacting('18x minecraft:iron_nugget', 'minecraft:raw_iron').heated()
    e.recipes.create.compacting('18x minecraft:gold_nugget', 'minecraft:raw_gold').heated()
    e.recipes.create.compacting('18x create:copper_nugget', 'minecraft:raw_copper').heated()
    e.recipes.create.compacting('18x create:zinc_nugget', 'create:raw_zinc').heated()
    e.recipes.create.compacting('2x minecraft:nether_brick', 'minecraft:netherrack')
})