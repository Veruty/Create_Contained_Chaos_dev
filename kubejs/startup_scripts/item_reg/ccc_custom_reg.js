console.info('Loaded ccc_custom')

StartupEvents.registry('item', e => {
    e.create('incomplete_netherite_upgrade', 'create:sequenced_assembly').displayName('Incomplete Netherite Upgrade')
	e.create('godly_alloy').displayName('Godly Alloy').rarity('EPIC')
	e.create('amethyst_alloy').displayName('Amethyst Alloy').rarity('UNCOMMON')
	e.create('fireclay').displayName('Fireclay')
	e.create('firebrick').displayName('Firebrick')
	e.create('brick_dust').displayName('Brick Dust')
	e.create('netherrack_dust').displayName('Netherrack Dust')
	e.create('amethyst_dust').displayName('Amethyst Dust')
    e.create('redstone_crystal').displayName('Redstone Crystal')
    e.create('condensed_alloy').displayName('Condensed Alloy').rarity('UNCOMMON')
    e.create('incomplete_unstable_alloy', 'create:sequenced_assembly').displayName('Incomplete Unstable Alloy').rarity('UNCOMMON')
    e.create('unstable_alloy').displayName('Unstable Alloy').rarity('RARE')
    e.create('unstable_alloy_sword', 'sword').tier('unstable_alloy').displayName('Unstable Alloy Sword').rarity('RARE')
    e.create('unstable_alloy_axe', 'axe').tier('unstable_alloy').displayName('Unstable Alloy Axe').rarity('RARE')
    e.create('unstable_alloy_pickaxe', 'pickaxe').tier('unstable_alloy').displayName('Unstable Alloy Pickaxe').rarity('RARE')
    e.create('unstable_alloy_shovel', 'shovel').tier('unstable_alloy').displayName('Unstable Alloy Shovel').rarity('RARE')
    e.create('unstable_alloy_hoe', 'hoe').tier('unstable-alloy').displayName('Unstable Alloy Hoe').rarity('RARE')
    e.create('incomplete_unstable_alloy_sword', 'create:sequenced_assembly').displayName('Incomplete Unstable Alloy Sword')
    e.create('incomplete_unstable_alloy_pickaxe', 'create:sequenced_assembly').displayName('Incomplete Unstable Alloy Pickaxe')
    e.create('incomplete_unstable_alloy_axe', 'create:sequenced_assembly').displayName('Incomplete Unstable Alloy Axe')
    e.create('incomplete_unstable_alloy_hoe', 'create:sequenced_assembly').displayName('Incomplete Unstable Alloy Hoe')
    e.create('incomplete_unstable_alloy_shovel', 'create:sequenced_assembly').displayName('Incomplete Unstable Alloy Shovel')
    e.create('incomplete_atomic_disassembler', 'create:sequenced_assembly').displayName('Incomplete Atomic Disassembler')
    e.create('almost_complete_atomic_disassembler').displayName('Almost Complete Atomic Disassembler')
    e.create('bifrost_sword', 'sword').displayName('Bifrost Sword').rarity('EPIC').tier('bifrost')
    e.create('chicken_nuggies').food(food => {
        food
            .hunger(4)
            .saturation(3)
    }).displayName('Chicken Nuggies')
    e.create('redstone_alloy').displayName('Redstone Alloy').rarity('UNCOMMON')
    e.create('moon_cheese_alloy').displayName('Moon Cheese Alloy').rarity('UNCOMMON')
    e.create('reinforced_moon_cheese_alloy').displayName('Reinforced Moon Cheese Alloy')
    e.create('incomplete_advanced_mechanism', 'create:sequenced_assembly').displayName('Incomplete Advanced Mechanism')
    e.create('advanced_mechanism').displayName('Advanced Mechanism')
	e.create('incomplete_power_management_mechanism', 'create:sequenced_assembly').displayName('Incomplete Power Management Mechanism')
	e.create('power_management_mechanism').displayName('Power Management Mechanism')
    e.create('simple_mechanism').displayName('Simple Mechanism')
    e.create('incomplete_simple_mechanism').displayName('Incomplete Simple Mechanism')
    e.create('graphite_dust').displayName('Graphite Dust')
    e.create('graphite_rod').displayName('Graphite Rod')
})