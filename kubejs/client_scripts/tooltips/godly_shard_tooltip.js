// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

ItemEvents.tooltip(event => {
	event.addAdvanced('kubejs:godly_shard_abyssal', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('[Shift]').gray()])
    } else {
      text.add(1, Text.gray('Obtained by killing Leviathan (Cataclysm)'))
    }
  })
	event.addAdvanced('kubejs:godly_shard_end', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('[Shift]').gray()])
    } else {
      text.add(1, Text.gray('Obtained by killing Ender Guardian (Cataclysm)'))
    }
  })
	event.addAdvanced('kubejs:godly_shard_flaming', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('[Shift]').gray()])
    } else {
      text.add(1, Text.gray('Obtained by killing Ignis (Cataclysm)'))
    }
  })
  	event.addAdvanced('kubejs:godly_shard_strange', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('[Shift]').gray()])
    } else {
      text.add(1, Text.gray('Obtained by killing Ender Dragon (Minecraft)'))
    }
  })
    event.addAdvanced('kubejs:godly_shard_toxic', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('[Shift]').gray()])
    } else {
      text.add(1, Text.gray('Obtained by killing Tremorzilla (Alexs Caves)'))
    }
  })
})


