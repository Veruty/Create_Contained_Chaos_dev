 let hydrofluAcidCheck
BlockEvents.rightClicked(event => {
hydrofluAcidCheck = "" + event.block.entityData
hydrofluAcidCheck = hydrofluAcidCheck.includes("gasName:\u0022mekanism:hydrofluoric_acid\u0022")
})


FTBQuestsEvents.customTask('18DB029DCC58EAFD', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(hydrofluAcidCheck == null) {return 0}
        if(hydrofluAcidCheck == true) {
            task.progress++ // Adds progress to the quest.
            hydrofluAcidCheck = false
        }
    })
})