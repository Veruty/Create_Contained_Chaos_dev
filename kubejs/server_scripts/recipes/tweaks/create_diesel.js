ServerEvents.recipes(event => {
    event.remove({ id: 'createdieselgenerators:crafting/asphalt_block' })
    event.shaped(
    Item.of('createdieselgenerators:asphalt_block', 8),
    [
        'AAA',
        'ABC',
        'CCC'
    ],
    {
        C: '#forge:gravel',
        A: '#minecraft:sand',
        B: ['thermal:tar', 'createdieselgenerators:crude_oil_bucket']
    }
)

})