ItemEvents.modifyTooltips(event => {
  const touhoufumos = [
    'kubejs:alice_fumo',
    'kubejs:blackreimu_fumo',
    'kubejs:bluereimu_fumo',
    'kubejs:brownreimu_fumo',
    'kubejs:chen_fumo',
    'kubejs:cirno_fumo',
    'kubejs:cyanreimu_fumo',
    'kubejs:eiki_fumo',
    'kubejs:flandre_fumo',
    'kubejs:grayreimu_fumo',
    'kubejs:greenreimu_fumo',
    'kubejs:koishi_fumo',
    'kubejs:lightbluereimu_fumo',
    'kubejs:limereimu_fumo',
    'kubejs:magentareimu_fumo',
    'kubejs:marisa_fumo',
    'kubejs:marisahat_fumo',
    'kubejs:meiling_fumo',
    'kubejs:nazrin_fumo',
    'kubejs:newreimu_fumo',
    'kubejs:nitori_fumo',
    'kubejs:offcolorreimu_fumo',
    'kubejs:orangereimu_fumo',
    'kubejs:patchouli_fumo',
    'kubejs:pinkreimu_fumo',
    'kubejs:purplereimu_fumo',
    'kubejs:reimu_fumo',
    'kubejs:sunnymilk_fumo',
    'kubejs:tancirno_fumo',
    'kubejs:tewi_fumo',
    'kubejs:whitereimu_fumo',
    'kubejs:yellowreimu_fumo',
    'kubejs:youmu_fumo',
    'kubejs:yuyuko_fumo',
  ]
  touhoufumos.forEach(element => {
    event.add(element, {shift: false}, Text.gray('[Shift]'))
    event.add(element, {shift: true}, Text.gray('Original: Touhou Project'))
    event.add(element, {shift: true}, Text.gray('Model: KosherKomeiji'))
  });
    event.add('kubejs:debug_fumo', {shift: false}, Text.gray('[Shift]'))
    event.add('kubejs:debug_fumo', {shift: true}, Text.gray('Original: BlockBench'))
    event.add('kubejs:debug_fumo', {shift: true}, Text.gray('Model: KosherKomeiji'))

    event.add('kubejs:zalkat_fumo', {shift: false}, Text.gray('[Shift]'))
    event.add('kubejs:zalkat_fumo', {shift: true}, Text.gray('Original: ZalkaT'))
    event.add('kubejs:zalkat_fumo', {shift: true}, Text.gray('Model: KosherKomeiji, Veruty'))

    event.add('kubejs:thesauce_fumo', {shift: false}, Text.gray('[Shift]'))
    event.add('kubejs:thesauce_fumo', {shift: true}, Text.gray('Original: THESAUCE'))
    event.add('kubejs:thesauce_fumo', {shift: true}, Text.gray('Model: KosherKomeiji, Veruty'))

    event.add('kubejs:veruty_fumo', {shift: false}, Text.gray('[Shift]'))
    event.add('kubejs:veruty_fumo', {shift: true}, Text.gray('Original: Veruty'))
    event.add('kubejs:veruty_fumo', {shift: true}, Text.gray('Model: KosherKomeiji, Veruty'))

    event.add('kubejs:blockypanda83_fumo', {shift: false}, Text.gray('[Shift]'))
    event.add('kubejs:blockypanda83_fumo', {shift: true}, Text.gray('Original: Blockypanda83'))
    event.add('kubejs:blockypanda83_fumo', {shift: true}, Text.gray('Model: KosherKomeiji, Veruty'))

    event.add('kubejs:chaoscorporation_fumo', {shift: false}, Text.gray('[Shift]'))
    event.add('kubejs:chaoscorporation_fumo', {shift: true}, Text.gray('Original: ChaosCorporation'))
    event.add('kubejs:chaoscorporation_fumo', {shift: true}, Text.gray('Model: KosherKomeiji, Veruty'))

    event.add('kubejs:junycat_fumo', {shift: false}, Text.gray('[Shift]'))
    event.add('kubejs:junycat_fumo', {shift: true}, Text.gray('Original: junycat'))
    event.add('kubejs:junycat_fumo', {shift: true}, Text.gray('Model: KosherKomeiji, Veruty'))

    event.add('kubejs:m3chanicb_fumo', {shift: false}, Text.gray('[Shift]'))
    event.add('kubejs:m3chanicb_fumo', {shift: true}, Text.gray('Original: M3chanicB'))
    event.add('kubejs:m3chanicb_fumo', {shift: true}, Text.gray('Model: KosherKomeiji, Veruty'))

    event.add('kubejs:lavender_bunnies_fumo', {shift: false}, Text.gray('[Shift]'))
    event.add('kubejs:lavender_bunnies_fumo', {shift: true}, Text.gray('Original: Lavender Bunnies'))
    event.add('kubejs:lavender_bunnies_fumo', {shift: true}, Text.gray('Model: KosherKomeiji, Veruty'))

    event.add('kubejs:sirheadcrab1_fumo', {shift: false}, Text.gray('[Shift]'))
    event.add('kubejs:sirheadcrab1_fumo', {shift: true}, Text.gray('Original: Sirheadcrab1'))
    event.add('kubejs:sirheadcrab1_fumo', {shift: true}, Text.gray('Model: KosherKomeiji, Veruty'))

    event.add('kubejs:spar117maschief_fumo', {shift: false}, Text.gray('[Shift]'))
    event.add('kubejs:spar117maschief_fumo', {shift: true}, Text.gray('Original: spar117maschief'))
    event.add('kubejs:spar117maschief_fumo', {shift: true}, Text.gray('Model: KosherKomeiji, Veruty'))

    event.add('kubejs:lordshadowlight_fumo', {shift: false}, Text.gray('[Shift]'))
    event.add('kubejs:lordshadowlight_fumo', {shift: true}, Text.gray('Original: LordShadowLight'))
    event.add('kubejs:lordshadowlight_fumo', {shift: true}, Text.gray('Model: KosherKomeiji, Veruty'))

    event.add('kubejs:lucasskittles_fumo', {shift: false}, Text.gray('[Shift]'))
    event.add('kubejs:lucasskittles_fumo', {shift: true}, Text.gray('Original: Lucasskittles'))
    event.add('kubejs:lucasskittles_fumo', {shift: true}, Text.gray('Model: KosherKomeiji, Veruty'))

    event.add('kubejs:leevee123_fumo', {shift: false}, Text.gray('[Shift]'))
    event.add('kubejs:leevee123_fumo', {shift: true}, Text.gray('Original: leevee123'))
    event.add('kubejs:leevee123_fumo', {shift: true}, Text.gray('Model: KosherKomeiji, Veruty'))
 
})