ServerEvents.recipes(event => {
    event.remove({ id: 'create_mechanical_extruder:extruding/asurine' })
    event.remove({ id: 'create_mechanical_extruder:extruding/crimsite' })
    event.remove({ id: 'create_mechanical_extruder:extruding/ochrum' })
    event.remove({ id: 'create_mechanical_extruder:extruding/veridium' })
})