console.log('STEEL remove loaded')

ServerEvents.tags('item', event => {
	event.removeAllTagsFrom('blocksyouneed_luna:steel_ingot')
	event.removeAllTagsFrom('blocksyouneed_luna:steel_block')
	event.removeAllTagsFrom('ad_astra:steel_ingot')
	event.removeAllTagsFrom('ad_astra:steel_plate')
	event.removeAllTagsFrom('ad_astra:steel_nugget')
	event.removeAllTagsFrom('ad_astra:steel_block')
	event.removeAllTagsFrom('davebuildingmod:steel_ingot')
	event.removeAllTagsFrom('davebuildingmod:steel_block')

})
	// ??.02.25 Veruty: dont think removing block tags will be great idea as mining is determend by tags