console.info('Loaded ccc_custom (fluid)')

StartupEvents.registry('fluid', e => {
    e.create('liquid_redstone', 'thick')
        .tint(0xC90000)
        .displayName('Liquid Redstone')
	e.create('liquid_amethyst', 'thick')
        .tint(0x71318D)
        .displayName('Destabilized Amethyst')
})