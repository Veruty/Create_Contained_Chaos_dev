 let liquidLithiumCheck
BlockEvents.rightClicked(event => {
liquidLithiumCheck = "" + event.block.entityData.toString()
liquidLithiumCheck = liquidLithiumCheck.includes("FluidName:\u0022mekanism:lithium\u0022")
})


FTBQuestsEvents.customTask('081A57CAB9D4382E', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(liquidLithiumCheck == null) {return 0}
        if(liquidLithiumCheck == true) {
            task.progress++ // Adds progress to the quest.
            liquidLithiumCheck = false
        }
    })
})