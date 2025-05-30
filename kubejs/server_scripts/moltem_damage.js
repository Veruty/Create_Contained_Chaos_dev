const LAVA_LIKE = ["kubejs:molten_steel",]
const DIRECT_DAMAGE_BY_LAVA_LIKE = 4
const FIRETICKS_BY_LAVA_LIKE = 300

function convertFluidId(blockId){
    const IdRegex = new RegExp("(.*)\\:(.*)")
    let regex = IdRegex.exec(blockId)
    if(!regex) return null
    let mod = regex[1]
    let fluid = regex[2]
    return `fluid.${mod}.${fluid}`
}
const LAVA_LIKE_FLUID = LAVA_LIKE.map(blockId => convertFluidId(blockId))

ServerEvents.tick(event=>{
    let {server, server:{entities, tickCount}} = event
    if(tickCount % 5 != 0) return;

    let inLavaLike = entities.filter(entity => entity.isInFluidType(
        fluid => Boolean(LAVA_LIKE_FLUID.find(lavaLike => fluid.descriptionId == lavaLike))))
    
    inLavaLike.forEach(entity =>{
        entity.setRemainingFireTicks(FIRETICKS_BY_LAVA_LIKE)
        if(entity.type == "minecraft:item") return;
        entity.attack(entity.damageSources().lava(), DIRECT_DAMAGE_BY_LAVA_LIKE)
    })
})