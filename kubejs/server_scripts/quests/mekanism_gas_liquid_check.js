let brineCheck
let chlorineCheck
let cleanSlurryCheck
let dirtySlurryCheck
let fissileFuelCheck
let hydrofluAcidCheck
let hydrogenChlorideCheck
let liquidLithiumCheck
let lithiumCheck
let nuclearWasteCheck
let plutoniumCheck
let poloniumCheck
let sodiumCheck
let sulfAcidCheck
let sulfDioxCheck
let sulfTrioxCheck
let uranHexfluCheck
let uranOxideCheck
BlockEvents.rightClicked(event => {
brineCheck = "" + event.block.entityData
brineCheck = brineCheck.includes("FluidName:\u0022mekanism:brine\u0022")
chlorineCheck = "" + event.block.entityData
chlorineCheck = chlorineCheck.includes("gasName:\u0022mekanism:chlorine\u0022")
cleanSlurryCheck = "" + event.block.entityData
cleanSlurryCheck = cleanSlurryCheck.includes("slurryName:\u0022mekanism:clean")
dirtySlurryCheck = "" + event.block.entityData
dirtySlurryCheck = dirtySlurryCheck.includes("slurryName:\u0022mekanism:dirty")
fissileFuelCheck = "" + event.block.entityData
fissileFuelCheck = fissileFuelCheck.includes("gasName:\u0022mekanism:fissile_fuel\u0022")
hydrofluAcidCheck = "" + event.block.entityData
hydrofluAcidCheck = hydrofluAcidCheck.includes("gasName:\u0022mekanism:hydrofluoric_acid\u0022")
hydrogenChlorideCheck = "" + event.block.entityData
hydrogenChlorideCheck = hydrogenChlorideCheck.includes("gasName:\u0022mekanism:hydrogen_chloride\u0022")
liquidLithiumCheck = "" + event.block.entityData
liquidLithiumCheck = liquidLithiumCheck.includes("FluidName:\u0022mekanism:lithium\u0022")
lithiumCheck = "" + event.block.entityData
lithiumCheck = lithiumCheck.includes("gasName:\u0022mekanism:lithium\u0022")
nuclearWasteCheck = "" + event.block.entityData
nuclearWasteCheck = nuclearWasteCheck.includes("gasName:\u0022mekanism:nuclear_waste\u0022")
plutoniumCheck = "" + event.block.entityData
plutoniumCheck = plutoniumCheck.includes("gasName:\u0022mekanism:plutonium\u0022")
poloniumCheck = "" + event.block.entityData
poloniumCheck = poloniumCheck.includes("gasName:\u0022mekanism:polonium\u0022")
sodiumCheck = "" + event.block.entityData
sodiumCheck = sodiumCheck.includes("gasName:\u0022mekanism:sodium\u0022")
sulfAcidCheck = "" + event.block.entityData
sulfAcidCheck = sulfAcidCheck.includes("gasName:\u0022mekanism:sulfuric_acid\u0022")
sulfDioxCheck = "" + event.block.entityData
sulfDioxCheck = sulfDioxCheck.includes("gasName:\u0022mekanism:sulfur_dioxide\u0022")
sulfTrioxCheck = "" + event.block.entityData
sulfTrioxCheck = sulfTrioxCheck.includes("gasName:\u0022mekanism:sulfur_trioxide\u0022")
uranHexfluCheck = "" + event.block.entityData
uranHexfluCheck = uranHexfluCheck.includes("gasName:\u0022mekanism:uranium_hexafluoride\u0022")
uranOxideCheck = "" + event.block.entityData
uranOxideCheck = uranOxideCheck.includes("gasName:\u0022mekanism:uranium_oxide\u0022")
})


FTBQuestsEvents.customTask('3990489D29FD69B6', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(brineCheck == null) {return 0}
        if(brineCheck == true) {
            task.progress++ // Adds progress to the quest.
            brineCheck = false
        }
    })
})
FTBQuestsEvents.customTask('4A9D1DC701EA89D0', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(chlorineCheck == null) {return 0}
        if(chlorineCheck == true) {
            task.progress++ // Adds progress to the quest.
            chlorineCheck = false
        }
    })
})
FTBQuestsEvents.customTask('093570D31C881837', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(cleanSlurryCheck == null) {return 0}
        if(cleanSlurryCheck == true) {
            task.progress++ // Adds progress to the quest.
            cleanSlurryCheck = false
        }
    })
})
FTBQuestsEvents.customTask('61C80229A6088D66', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(dirtySlurryCheck == null) {return 0}
        if(dirtySlurryCheck == true) {
            task.progress++ // Adds progress to the quest.
            dirtySlurryCheck = false
        }
    })
})
FTBQuestsEvents.customTask('196C5E0A9724C7E6', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(fissileFuelCheck == null) {return 0}
        if(fissileFuelCheck == true) {
            task.progress++ // Adds progress to the quest.
            fissileFuelCheck = false
        }
    })
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

FTBQuestsEvents.customTask('7A69667E4DB84182', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(hydrogenChlorideCheck == null) {return 0}
        if(hydrogenChlorideCheck == true) {
            task.progress++ // Adds progress to the quest.
            hydrogenChlorideCheck = false
        }
    })
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
FTBQuestsEvents.customTask('111F08EC986B989D', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(lithiumCheck == null) {return 0}
        if(lithiumCheck == true) {
            task.progress++ // Adds progress to the quest.
            lithiumCheck = false
        }
    })
})
FTBQuestsEvents.customTask('3CE86EEABE1AEDAD', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(nuclearWasteCheck == null) {return 0}
        if(nuclearWasteCheck == true) {
            task.progress++ // Adds progress to the quest.
            nuclearWasteCheck = false
        }
    })
})
FTBQuestsEvents.customTask('0BEBE9BACA875AC9', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(plutoniumCheck == null) {return 0}
        if(plutoniumCheck == true) {
            task.progress++ // Adds progress to the quest.
            plutoniumCheck = false
        }
    })
})
FTBQuestsEvents.customTask('3A29218DFC902641', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(poloniumCheck == null) {return 0}
        if(poloniumCheck == true) {
            task.progress++ // Adds progress to the quest.
            poloniumCheck = false
        }
    })
})
FTBQuestsEvents.customTask('5042389DF6578656', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(sodiumCheck == null) {return 0}
        if(sodiumCheck == true) {
            task.progress++ // Adds progress to the quest.
            sodiumCheck = false
        }
    })
})
FTBQuestsEvents.customTask('048BEDB820F2D6DC', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(sulfAcidCheck == null) {return 0}
        if(sulfAcidCheck == true) {
            task.progress++ // Adds progress to the quest.
            sulfAcidCheck = false
        }
    })
})
FTBQuestsEvents.customTask('507370457C85E239', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(sulfDioxCheck == null) {return 0}
        if(sulfDioxCheck == true) {
            task.progress++ // Adds progress to the quest.
            sulfDioxCheck = false
        }
    })
})
FTBQuestsEvents.customTask('040A29662464CD85', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(sulfTrioxCheck == null) {return 0}
        if(sulfTrioxCheck == true) {
            task.progress++ // Adds progress to the quest.
            sulfTrioxCheck = false
        }
    })
})
FTBQuestsEvents.customTask('122EE8B4B6117910', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(uranHexfluCheck == null) {return 0}
        if(uranHexfluCheck == true) {
            task.progress++ // Adds progress to the quest.
            uranHexfluCheck = false
        }
    })
})
FTBQuestsEvents.customTask('5EF3562178B81DA3', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    event.setCheck((task, player) => {
        if(uranOxideCheck == null) {return 0}
        if(uranOxideCheck == true) {
            task.progress++ // Adds progress to the quest.
            uranOxideCheck = false
        }
    })
})