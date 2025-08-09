ServerEvents.recipes(event => {
   event.remove({ output: 'createdieselgenerators:pumpjack_head' })
    event.shaped(
    Item.of('createdieselgenerators:pumpjack_head'),
    [
        'A A',
        'BCB',
        'A A'
    ],
    {
        B: 'create:zinc_ingot',
        A: 'create:andesite_alloy',
        C: '#kubejs:create_kelp_rubber'
    })
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