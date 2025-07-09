console.info('Loaded ccc_custom (fluid)')

StartupEvents.registry('fluid', e => {
    e.create('liquid_redstone')
        .thickTexture(0xC90000)
        .bucketColor(0xC90000)
        .displayName('Liquid Redstone')
	e.create('liquid_amethyst')
        .thickTexture(0x71318D)
        .bucketColor(0x71318D)
        .displayName('Destabilized Amethyst')
})