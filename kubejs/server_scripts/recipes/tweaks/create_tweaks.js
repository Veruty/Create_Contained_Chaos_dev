ServerEvents.recipes(event => {
	event.shaped(
    Item.of('create:spout', 2),
    [
        ' A ',
        ' B ',
        '   '
    ],
    {
        B: 'thermal:cured_rubber',
        A: 'create:copper_casing'
    })
	event.shaped(
    Item.of('create:andesite_funnel', 4),
    [
        ' A ',
        ' B ',
        '   '
    ],
    {
        A: 'create:andesite_alloy',
        B: 'thermal:cured_rubber'
    })
	event.shaped(
    Item.of('create:andesite_tunnel', 4),
    [
        'AA ',
        'BB ',
        '   '
    ],
    {
        A: 'create:andesite_alloy',
        B: 'thermal:cured_rubber'
    })
	event.shaped(
    Item.of('create:brass_funnel', 4),
    [
        ' A ',
        ' B ',
        ' C '
    ],
    {
        B: 'create:brass_ingot',
        A: 'create:electron_tube',
        C: 'thermal:cured_rubber'
    })
	event.shaped(
    Item.of('create:brass_tunnel', 4),
    [
        'A  ',
        'BB ',
        'CC '
    ],
    {
        B: 'create:brass_ingot',
        A: 'create:electron_tube',
        C: 'thermal:cured_rubber'
    })
	event.shaped(
    Item.of('create:belt_connector', 6),
    [
        '   ',
        'AAA',
        'AAA'
    ],
    {
        A: 'thermal:cured_rubber'
    })
	event.remove({ id: 'thermal:rubber_3' })

})