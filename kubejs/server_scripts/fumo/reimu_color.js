BlockEvents.rightClicked(e => {
	
	
    function getdir(dir){
        switch(dir){
            case 'west': return 'west'
            case 'south': return 'south'
            case 'east': return 'east'
            case 'north': return 'north'
        }
    }
	
    if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/black') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:blackreimu_fumo[facing=${dir}]`)
    }
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/gray') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:grayreimu_fumo[facing=${dir}]`)
	}
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/white') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:whitereimu_fumo[facing=${dir}]`)
	}
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/red') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:newreimu_fumo[facing=${dir}]`)
	}
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/brown') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:brownreimu_fumo[facing=${dir}]`)
	}
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/orange') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:orangereimu_fumo[facing=${dir}]`)
	}
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/yellow') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:yellowreimu_fumo[facing=${dir}]`)
	}
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/lime') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:limereimu_fumo[facing=${dir}]`)
	}
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/green') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:greenreimu_fumo[facing=${dir}]`)
	}
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/cyan') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:cyanreimu_fumo[facing=${dir}]`)
	}
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/light_blue') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:lightbluereimu_fumo[facing=${dir}]`)
	}
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/blue') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:bluereimu_fumo[facing=${dir}]`)
	}
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/purple') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:purplereimu_fumo[facing=${dir}]`)
	}
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/magenta') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:magentareimu_fumo[facing=${dir}]`)
	}
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/pink') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:pinkreimu_fumo[facing=${dir}]`)
	}
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:dyes/light_gray') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:offcolorreimu_fumo[facing=${dir}]`)
	}
	if (e.player.isCrouching() && e.player.mainHandItem.hasTag('forge:slimeballs') && e.block.hasTag('kubejs:reimu_colorable')) {
		let dir = getdir(e.block.getBlockState().getValue(e.block.getBlockState().getProperties().toArray()[0]).name().toLowerCase())
		 e.server.runCommandSilent(`execute in ${e.level.dimension} run setblock ${e.block.pos.x} ${e.block.pos.y} ${e.block.pos.z} kubejs:reimu_fumo[facing=${dir}]`)
	}		
}) 