BlockEvents.rightClicked(event => {
  if (event.block.id === 'kubejs:molten_steel' || event.block.id === 'mbd2:primitive_blast_furnace' && event.item.id === 'minecraft:bucket') {
    event.cancel()
  }
})
