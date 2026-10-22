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
        C: '#c:gravel',
        A: '#minecraft:sand',
        B: ['createdieselgenerators:crude_oil_bucket']
    }
)

})