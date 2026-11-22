const $UUID = Java.loadClass('java.util.UUID')

StartupEvents.registry('item', e =>{
    e.create('shrinking_trinket').displayName('Trinket of Shrinking').unstackable().tag('curios:charm').attachCuriosCapability(CuriosJSCapabilityBuilder.create().addAttribute("minecraft:generic.scale", $UUID.randomUUID().toString(), -0.5, 'add_value'))
    e.create('growing_trinket').displayName('Trinket of Growing').unstackable().tag('curios:charm').attachCuriosCapability(CuriosJSCapabilityBuilder.create().addAttribute("minecraft:generic.scale", $UUID.randomUUID().toString(), 0.5, 'add_value'))
})
