console.info('Hello, World! (Loaded client scripts)')

ItemEvents.modifyTooltips(event => {
  event.add('kubejs:godly_shard_abyssal', {shift: false}, Text.gray('[Shift]'))
  event.add('kubejs:godly_shard_abyssal', {shift: true}, Text.gray('Obtained by killing Leviathan (Cataclysm)'))

  event.add('kubejs:godly_shard_end', {shift: false}, Text.gray('[Shift]'))
  event.add('kubejs:godly_shard_end', {shift: true}, Text.gray('Obtained by killing Ender Dragon (Minecraft)'))

  event.add('kubejs:godly_shard_flaming', {shift: false}, Text.gray('[Shift]'))
  event.add('kubejs:godly_shard_flaming', {shift: true}, Text.gray('Obtained by killing Ignis (Cataclysm)'))

  event.add('kubejs:godly_shard_strange', {shift: false}, Text.gray('[Shift]'))
  event.add('kubejs:godly_shard_strange', {shift: true}, Text.gray('Obtained by killing Maledictus (Cataclysm)'))

  event.add('kubejs:godly_shard_toxic', {shift: false}, Text.gray('[Shift]'))
  event.add('kubejs:godly_shard_toxic', {shift: true}, Text.gray('Obtained by killing Tremorzilla (Alexs Caves)'))
})


