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
	event.remove({ output: 'create:spout' })
	event.shaped(
    Item.of('create:spout'),
    [
        ' A ',
        ' B ',
        '   '
    ],
    {
        B: '#kubejs:create_kelp_rubber',
        A: 'create:copper_casing'
    })
	event.remove({ output: 'create:andesite_funnel' })
	event.shaped(
    Item.of('create:andesite_funnel', 2),
    [
        ' A ',
        ' B ',
        '   '
    ],
    {
        A: 'create:andesite_alloy',
        B: '#kubejs:create_kelp_rubber'
    })
	event.remove({ output: 'create:andesite_tunnel' })
	event.shaped(
    Item.of('create:andesite_tunnel', 2),
    [
        'AA ',
        'BB ',
        '   '
    ],
    {
        A: 'create:andesite_alloy',
        B: '#kubejs:create_kelp_rubber'
    })
	event.remove({ output: 'create:brass_funnel' })
	event.shaped(
    Item.of('create:brass_funnel', 2),
    [
        ' A ',
        ' B ',
        ' C '
    ],
    {
        B: 'create:brass_ingot',
        A: 'create:electron_tube',
        C: '#kubejs:create_kelp_rubber'
    })
	event.remove({ output: 'create:brass_tunnel' })
	event.shaped(
    Item.of('create:brass_tunnel', 2),
    [
        'A  ',
        'BB ',
        'CC '
    ],
    {
        B: 'create:brass_ingot',
        A: 'create:electron_tube',
        C: '#kubejs:create_kelp_rubber'
    })
	event.remove({ output: 'create:belt_connector' })
	event.shaped(
    Item.of('create:belt_connector'),
    [
        '   ',
        'AAA',
        'AAA'
    ],
    {
        A: '#kubejs:create_kelp_rubber'
    })
	event.remove({ id: 'thermal:rubber_3' })
	event.custom(
	{
  "type": "thermal:refinery",
  "ingredient": {
    "fluid": "thermal:latex",
    "amount": 1000
  },
  "result": [
    {
      "item": "thermal:rubber",
	  "amount": 4
    }
  ],
  "energy": 4000,
  "experience": 0.2
}
	)
})