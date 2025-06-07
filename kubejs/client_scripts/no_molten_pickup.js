BlockEvents.rightClicked(event => {
  if (event.block.id === 'kubejs:firebricks' || event.block.id === 'mbd2:primitive_blast_furnace' && event.item.id === 'minecraft:bucket') {
    event.cancel()
  }
})
