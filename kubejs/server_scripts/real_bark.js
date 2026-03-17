// @ts-check errors
// [09:38:41] [WARN] Error parsing recipe farmersdelight:kjs/30ceh4v1aopt7ob51qa657pd[farmersdelight:cutting]: {"type":"farmersdelight:cutting","ingredients":[[]],"tool":{"tag":"forge:tools/axes"},"result":[{"item":"minecraft:air","count":0,"nbt":"{Damage:0}"},{"item":"minecraft:air","count":0,"nbt":"{Damage:0}"},{"item":"minecraft:air","count":0,"nbt":"{Damage:0}"},{"item":"minecraft:air","count":0,"nbt":"{Damage:0}"}]}: No ingredients for cutting recipe
// [09:38:41] [WARN] Error parsing recipe farmersdelight:kjs/91rm1gky5spar2na4860lvc30[farmersdelight:cutting]: {"type":"farmersdelight:cutting","ingredients":[[]],"tool":{"tag":"forge:tools/axes"},"result":[{"item":"minecraft:air","count":0,"nbt":"{Damage:0}"},{"item":"minecraft:air","count":0,"nbt":"{Damage:0}"},{"item":"minecraft:air","count":0,"nbt":"{Damage:0}"},{"item":"farmersdelight:tree_bark","count":1,"chance":0.6}]}: No ingredients for cutting recipe
// Log and wood + add create Cutting Recipie
const woodtype = [
'oak',
'spruce',
'birch',
'jungle',
'mangrove',
'dark_oak',
'acacia',
'cherry'
]

const fungustype = [
	'crimson',
	'warped'
]

ServerEvents.recipes(event => {
for(let logs of woodtype){
event.shapeless(
  Item.of(`minecraft:${logs}_planks`, 4), // arg 1: output
  [
    '#minecraft:plank_axe',
    [`minecraft:${logs}_log`,`minecraft:${logs}_wood`]
  ]
).damageIngredient('#minecraft:plank_axe', 1)
}}
)

ServerEvents.recipes(event => {
for(let logs of fungustype){
event.shapeless(
  Item.of(`minecraft:${logs}_planks`, 4), // arg 1: output
  [
    '#minecraft:plank_axe',
    [`minecraft:${logs}_hyphae`,`minecraft:${logs}_stem`]
  ]
).damageIngredient('#minecraft:plank_axe', 1)
}}
)

ServerEvents.recipes(event => {
for(let logs of woodtype){
	event.recipes.farmersdelight.cutting(
        `minecraft:${logs}_log`,
        '#forge:tools/axes', // tool
        [ // results "quark:azalea_planks"
						Item.of(`2x immersive_weathering:${logs}_bark`),
						Item.of(`2x minecraft:${logs}_planks`),
						Item.of(`1x minecraft:${logs}_planks`).withChance(0.3),
						Item.of('1x farmersdelight:tree_bark').withChance(0.3)
	
        ],
	);
}
})

ServerEvents.recipes(event => {
	event.recipes.farmersdelight.cutting(
        `minecraft:bamboo_block`,
        '#forge:tools/axes', // tool
        [ // results "quark:azalea_planks"
						Item.of(`8x immersive_weathering:bamboo_bark`)
        ],
	);
})


ServerEvents.recipes(event => {
for(let logs of woodtype){
	event.recipes.farmersdelight.cutting(
        `minecraft:${logs}_wood`,
        '#forge:tools/axes', // tool
        [ // results "quark:azalea_planks"
						Item.of(`4x immersive_weathering:${logs}_bark`),
						Item.of(`3x minecraft:${logs}_planks`),
						Item.of(`1x minecraft:${logs}_planks`).withChance(0.6),
						Item.of('1x farmersdelight:tree_bark').withChance(0.6)
	
        ],
	);
}
})


// Fungus = No Bark
ServerEvents.recipes(event => {
for(let logs of fungustype){
	event.recipes.farmersdelight.cutting(
        `minecraft:${logs}_hyphae`,
        '#forge:tools/axes', // tool
        [ // results "quark:azalea_planks"
						Item.of(`2x immersive_weathering:${logs}_scales`),
						Item.of(`2x minecraft:${logs}_planks`),
						Item.of(`1x minecraft:${logs}_planks`).withChance(0.3),
						Item.of(`1x minecraft:${logs}_planks`).withChance(0.3)
        ],
	);
}
})

ServerEvents.recipes(event => {
for(let logs of fungustype){
	event.recipes.farmersdelight.cutting(
        `minecraft:${logs}_stem`,
        '#forge:tools/axes', // tool
        [ // results "quark:azalea_planks"
						Item.of(`2x immersive_weathering:${logs}_scales`),
						Item.of(`2x minecraft:${logs}_planks`),
						Item.of(`1x minecraft:${logs}_planks`).withChance(0.3),
						Item.of(`1x minecraft:${logs}_planks`).withChance(0.3)
	
        ],
	);
}
})

// Log and wood, bark is immersiveweathering:biomesoplenty/bark or whatever
const biomesoplenty_wood = [
'umbran',
'dead',
'maple',
'pine',
'fir',
'redwood',
'mahogany',
'jacaranda',
'magic',
'palm',
'empyreal'
]

ServerEvents.recipes(event => {
for(let logs of biomesoplenty_wood){
event.shapeless(
  Item.of(`biomesoplenty:${logs}_planks`, 4), // arg 1: output
  [
    '#minecraft:plank_axe',
    [`biomesoplenty:${logs}_log`,`biomesoplenty:${logs}_wood`]
  ]
).damageIngredient('#minecraft:plank_axe', 1)
}}
)


ServerEvents.recipes(event => {
for(let logs of biomesoplenty_wood){
	event.recipes.farmersdelight.cutting(
        `biomesoplenty:${logs}_log`,
        '#forge:tools/axes', // tool
        [ 
						Item.of(`2x immersive_weathering:biomesoplenty/${logs}_bark`),
						Item.of(`2x biomesoplenty:${logs}_planks`),
						Item.of(`1x biomesoplenty:${logs}_planks`).withChance(0.3),
						Item.of('1x farmersdelight:tree_bark').withChance(0.3),
	
        ],
	);
}
})

ServerEvents.recipes(event => {
for(let logs of biomesoplenty_wood){
	event.recipes.farmersdelight.cutting(
        `biomesoplenty:${logs}_wood`,
        '#forge:tools/axes', // tool
        [ 
						Item.of(`4x immersive_weathering:biomesoplenty/${logs}_bark`),
						Item.of(`3x biomesoplenty:${logs}_planks`),
						Item.of(`1x biomesoplenty:${logs}_planks`).withChance(0.6),
						Item.of('1x farmersdelight:tree_bark').withChance(0.6),
	
        ],
	);
}
})

ServerEvents.recipes(event => {
event.shapeless(
  Item.of(`biomesoplenty:hellbark_planks`, 4), // arg 1: output
  [
    '#minecraft:plank_axe',
    [`biomesoplenty:hellbark_log`,`biomesoplenty:hellbark_wood`]
  ]
).damageIngredient('#minecraft:plank_axe', 1)}
)

ServerEvents.recipes(event => {
event.recipes.farmersdelight.cutting(
			'biomesoplenty:hellbark_log',
			'#forge:tools/axes', // tool
			[ // results
					Item.of('2x immersive_weathering:biomesoplenty/hellbark_scales'),
					Item.of('2x biomesoplenty:hellbark_planks'),
					Item.of('1x biomesoplenty:hellbark_planks').withChance(0.3),
					Item.of('1x farmersdelight:tree_bark')

			],
);
})

ServerEvents.recipes(event => {
event.recipes.farmersdelight.cutting(
			'biomesoplenty:hellbark_wood',
			'#forge:tools/axes', // tool
			[ // results
					Item.of('4x immersive_weathering:biomesoplenty/hellbark_scales'),
					Item.of('3x biomesoplenty:hellbark_planks'),
					Item.of('1x biomesoplenty:hellbark_planks').withChance(0.6),
					Item.of('1x farmersdelight:tree_bark')

        ],
	);
})



ServerEvents.recipes(event => {
event.shapeless(
  Item.of(`vinery:dark_cherry_planks`, 4), // arg 1: output
  [
    '#minecraft:plank_axe',
    [`vinery:dark_cherry_log`,`vinery:dark_cherry_wood`]
  ]
).damageIngredient('#minecraft:plank_axe', 1)}
)

ServerEvents.recipes(event => {
event.recipes.farmersdelight.cutting(
			'vinery:dark_cherry_log',
			'#forge:tools/axes', // tool
			[ // results
					Item.of('4x immersive_weathering:vinery/dark_cherry_scales'),
					Item.of('2x vinery:dark_cherry_planks'),
					Item.of('1x vinery:dark_cherry_planks').withChance(0.3),
					Item.of('1x farmersdelight:tree_bark').withChance(0.6)

			],
);
})
ServerEvents.recipes(event => {
event.recipes.farmersdelight.cutting(
			'vinery:dark_cherry_wood',
			'#forge:tools/axes', // tool
			[ // results
					Item.of('4x immersive_weathering:vinery/dark_cherry_scales'),
					Item.of('3x vinery:dark_cherry_planks'),
					Item.of('1x vinery:dark_cherry_planks').withChance(0.6),
					Item.of('1x farmersdelight:tree_bark').withChance(0.6)

			],
);
})



const quark_wood = [
'ancient',
'blossom',
'azalea'
]


ServerEvents.recipes(event => {
for(let logs of quark_wood){
event.shapeless(
  Item.of(`quark:${logs}_planks`, 4), // arg 1: output
  [
    '#minecraft:plank_axe',
    [`quark:${logs}_log`,`quark:${logs}_wood`]
  ]
).damageIngredient('#minecraft:plank_axe', 1)
}}
)



ServerEvents.recipes(event => {
for(let logs of quark_wood){
	event.recipes.farmersdelight.cutting(
        `quark:${logs}_log`,
        '#forge:tools/axes', // tool
        [ 
						Item.of(`2x immersive_weathering:quark/${logs}_bark`),
						Item.of(`2x quark:${logs}_planks`),
						Item.of(`1x quark:${logs}_planks`).withChance(0.3),
						Item.of('1x farmersdelight:tree_bark').withChance(0.3)
	
        ],
	);
}
})

ServerEvents.recipes(event => {
for(let logs of quark_wood){
	event.recipes.farmersdelight.cutting(
        `quark:${logs}_wood`,
        '#forge:tools/axes', // tool
        [ 
						Item.of(`4x immersive_weathering:quark/${logs}_bark`),
						Item.of(`3x quark:${logs}_planks`),
						Item.of(`1x quark:${logs}_planks`).withChance(0.3),
						Item.of('1x farmersdelight:tree_bark').withChance(0.6)
	
        ],
	);
}
})

ServerEvents.recipes(event => {

event.shapeless(
  Item.of(`netherexp:claret_planks`, 2), // arg 1: output
  [
    '#minecraft:plank_axe',
    [`netherexp:cerebrage_claret_stem`,`netherexp:cerebrage_claret_hyphae`]
  ]
).damageIngredient('#minecraft:plank_axe', 1)
}
)



ServerEvents.recipes(event => {
	event.recipes.farmersdelight.cutting(
        "netherexp:cerebrage_claret_stem",
        '#forge:tools/axes', // tool
        [ // results "quark:azalea_planks"
						Item.of(`2x immersive_weathering:netherexp/claret_scales`),
						Item.of(`2x netherexp:claret_planks`),
						Item.of(`1x netherexp:claret_planks`).withChance(0.3),
						Item.of(`1x netherexp:claret_planks`).withChance(0.3)

	
        ],
	);
})

ServerEvents.recipes(event => {
	event.recipes.farmersdelight.cutting(
        "netherexp:cerebrage_claret_hyphae",
        '#forge:tools/axes', // tool
        [ // results "quark:azalea_planks"
						Item.of(`2x immersive_weathering:netherexp/claret_scales`),
						Item.of(`3x netherexp:claret_planks`),
						Item.of(`1x netherexp:claret_planks`).withChance(0.6),
						Item.of('1x farmersdelight:tree_bark').withChance(0.6)
	
        ],
	);
})



const alexscaves_wood = [
'thornwood',
'pewen'
]

ServerEvents.recipes(event => {
for(let logs of alexscaves_wood){
event.shapeless(
  Item.of(`alexscaves:${logs}_planks`, 4), // arg 1: output
  [
    '#minecraft:plank_axe',
    [`alexscaves:${logs}_log`,`alexscaves:${logs}_wood`]
  ]
).damageIngredient('#minecraft:plank_axe', 1)
}}
)


// Fungus = No Bark
ServerEvents.recipes(event => {
for(let logs of alexscaves_wood){
	event.recipes.farmersdelight.cutting(
        `alexscaves:${logs}_log`,
        '#forge:tools/axes', // tool
        [ // results "quark:azalea_planks"
						Item.of(`2x immersive_weathering:alexscaves/${logs}_scales`),
						Item.of(`2x alexscaves:${logs}_planks`),
						Item.of(`1x alexscaves:${logs}_planks`).withChance(0.3),
						Item.of('1x farmersdelight:tree_bark').withChance(0.6)

	
        ],
	);
}
})

ServerEvents.recipes(event => {
for(let logs of alexscaves_wood){
	event.recipes.farmersdelight.cutting(
        `alexscaves:${logs}_wood`,
        '#forge:tools/axes', // tool
        [ // results "quark:azalea_planks"
						Item.of(`2x immersive_weathering:alexscaves/${logs}_scales`),
						Item.of(`3x alexscaves:${logs}_planks`),
						Item.of(`1x alexscaves:${logs}_planks`).withChance(0.6),
						Item.of('1x farmersdelight:tree_bark').withChance(0.6)
	
        ],
	);
}
})


ServerEvents.recipes(event => {
event.shapeless(
  Item.of(`outer_end:azure_planks`, 4), // arg 1: output
  [
    '#minecraft:plank_axe',
    [`outer_end:azure_stem`,`outer_end:azure_pith`]
  ]
).damageIngredient('#minecraft:plank_axe', 1)}
)


ServerEvents.recipes(event => {
event.recipes.farmersdelight.cutting(
			'outer_end:azure_stem',
			'#forge:tools/axes', // tool
			[ // results
					Item.of('2x immersive_weathering:outer_end/azure_bark'),
					Item.of('2x outer_end:azure_planks'),
					Item.of('1x outer_end:azure_planks').withChance(0.3)

			], 
);
})

ServerEvents.recipes(event => {
event.recipes.farmersdelight.cutting(
			'outer_end:azure_pith',
			'#forge:tools/axes', // tool
			[ // results
					Item.of('4x immersive_weathering:outer_end/azure_bark'),
					Item.of('3x outer_end:azure_planks'),
					Item.of('1x outer_end:azure_planks').withChance(0.6)

			],
);
})


const biomemakeover_wood = [
'ancient_oak',
'willow',
'swamp_cypress',
'blighted_balsa'
]

ServerEvents.recipes(event => {
for(let logs of biomemakeover_wood){
event.shapeless(
  Item.of(`biomemakeover:${logs}_planks`, 4), // arg 1: output
  [
    '#minecraft:plank_axe',
    [`biomemakeover:${logs}_log`,`biomemakeover:${logs}_wood`]
  ]
).damageIngredient('#minecraft:plank_axe', 1)
}}
)


ServerEvents.recipes(event => {
for(let logs of biomemakeover_wood){
	event.recipes.farmersdelight.cutting(
        `biomemakeover:${logs}_log`,
        '#forge:tools/axes', // tool
        [ // results "quark:azalea_planks"
						Item.of(`2x immersive_weathering:biomemakeover/${logs}_bark`),
						Item.of(`2x biomemakeover:${logs}_planks`),
						Item.of(`1x biomemakeover:${logs}_planks`).withChance(0.3),
						Item.of('1x farmersdelight:tree_bark').withChance(0.6)

	
        ],
	);
}
})

ServerEvents.recipes(event => {
for(let logs of biomemakeover_wood){
	event.recipes.farmersdelight.cutting(
        `biomemakeover:${logs}_wood`,
        '#forge:tools/axes', // tool
        [ // results "quark:azalea_planks"
						Item.of(`2x immersive_weathering:biomemakeover/${logs}_bark`),
						Item.of(`3x biomemakeover:${logs}_planks`),
						Item.of(`1x biomemakeover:${logs}_planks`).withChance(0.6),
						Item.of('1x farmersdelight:tree_bark').withChance(0.6)
	
        ],
	);
}
})


ServerEvents.recipes(event => {
event.shapeless(
  Item.of(`deeperdarker:echo_planks`, 4), // arg 1: output
  [
    '#minecraft:plank_axe',
    [`deeperdarker:echo_log`,`deeperdarker:echo_wood`]
  ]
).damageIngredient('#minecraft:plank_axe', 1)}
)


ServerEvents.recipes(event => {
event.recipes.farmersdelight.cutting(
			'deeperdarker:echo_log',
			'#forge:tools/axes', // tool
			[ // results
					Item.of('2x immersive_weathering:deeperdarker/echo_bark'),
					Item.of('3x deeperdarker:echo_planks'),
					Item.of('1x deeperdarker:echo_planks').withChance(0.3),
					Item.of('1x farmersdelight:tree_bark').withChance(0.6)


			],
);
})

ServerEvents.recipes(event => {
event.recipes.farmersdelight.cutting(
			'deeperdarker:echo_wood',
			'#forge:tools/axes', // tool
			[ // results
					Item.of('4x immersive_weathering:deeperdarker/echo_bark'),
					Item.of(`3x deeperdarker:echo_planks`),
					Item.of(`1x deeperdarker:echo_planks`).withChance(0.6),
					Item.of('1x farmersdelight:tree_bark').withChance(0.6)


			],
);
})





ServerEvents.recipes(event => {
event.shapeless(
  Item.of(`luminous_nether:withered_planks`, 4), // arg 1: output
  [
    '#minecraft:plank_axe',
    [`luminous_nether:withered_log`,`luminous_nether:withered_wood`]
  ]
).damageIngredient('#minecraft:plank_axe', 1)}
)

ServerEvents.recipes(event => {
event.shapeless(
  Item.of(`luminous_nether:mushroom_planks`, 4), // arg 1: output
  [
    '#minecraft:plank_axe',
    'luminous_nether:goldenstem'
  ]
).damageIngredient('#minecraft:plank_axe', 1)}
)


ServerEvents.recipes(event => {
event.recipes.farmersdelight.cutting(
			'luminous_nether:withered_wood',
			'#forge:tools/axes', // tool
			[ // results
					Item.of('2x immersive_weathering:luminous_nether/withered_bark'),
					Item.of('3x luminous_nether:withered_planks'),
					Item.of('1x luminous_nether:withered_planks').withChance(0.3),
					Item.of('1x farmersdelight:tree_bark').withChance(0.6)


			],
);
})

ServerEvents.recipes(event => {
event.recipes.farmersdelight.cutting(
			'luminous_nether:withered_log',
			'#forge:tools/axes', // tool
			[ // results
					Item.of('4x immersive_weathering:luminous_nether/withered_bark'),
					Item.of(`3x luminous_nether:withered_planks`),
					Item.of(`1x luminous_nether:withered_planks`).withChance(0.6),
					Item.of('1x farmersdelight:tree_bark').withChance(0.6)


			],
);
})


ServerEvents.recipes(event => {
event.recipes.farmersdelight.cutting(
			'luminous_nether:goldenstem',
			'#forge:tools/axes', // tool
			[ // results
					Item.of('8x immersive_weathering:luminous_nether/mushroom_bark'),
					Item.of(`3x luminous_nether:mushroom_planks`),
					Item.of(`1x luminous_nether:mushroom_planks`).withChance(0.6)
			],
);
})


// Remove original bark recipes first
ServerEvents.recipes(event => {
	for(let logs of woodtype){
event.remove({ id: `minecraft:${logs}_planks` })
	}
	for(let logs of fungustype){
event.remove({ id: `minecraft:${logs}_planks` })
	}
	for(let logs of biomesoplenty_wood){
event.remove({ id: `biomesoplenty:${logs}_planks`})
	}
	for(let logs of quark_wood){
event.remove({ id: `quark:world/crafting/woodsets/${logs}/planks`})
	}
event.remove({ id: `netherexp:claret_planks`})
	for(let logs of alexscaves_wood){
event.remove({ id: `alexscaves:${logs}_planks` })
	}
	for(let logs of biomemakeover_wood){
event.remove({ id: `biomemakeover:wood/${logs}/${logs}_planks`})
event.remove({ id: `biomemakeover:wood/${logs}/${logs}_planks_wood`})
event.remove({ id: `biomemakeover:wood/${logs}/${logs}_planks_wood_stripped`})
event.remove({ id: `biomemakeover:wood/${logs}/${logs}__planks_stripped`})
	}
event.remove({ id: `luminous_nether:mushroom_plank_recipe`})
event.remove({ id: `luminous_nether:mprecipe_2`})
event.remove({ id: `biomesoplenty:hellbark_planks`})


event.remove({ id: `luminous_nether:mushroom_plank_recipe_2`})
event.remove({ id: `luminous_nether:stripped_withered_log_plank_recipe`})
event.remove({ id: `luminous_nether:stripped_withered_wood_plank_recipe`})
event.remove({ id: `outer_end:azure_planks`})
event.remove({ id: `deeperdarker:echo_planks`})
event.remove({ id: "luminous_nether:withered_plank_recipe" })
event.remove({ id: `luminous_nether:withered_wood_plank_recipe`})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:oak_log'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:oak_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:spruce_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:spruce_log'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:birch_log'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:birch_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:jungle_log'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:jungle_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:mangrove_log'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:mangrove_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:dark_oak_log'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:dark_oak_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:acacia_log'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:acacia_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:cherry_log'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:cherry_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'vinery:dark_cherry_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:crimson_stem'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:crimson_hyphae'})
event.remove({ type: 'farmersdelight:cutting', input:'quark:azalea_log'})
event.remove({ type: 'farmersdelight:cutting', input:'quark:azalea_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'netherexp:cerebrage_claret_stem'})
event.remove({ type: 'farmersdelight:cutting', input:'netherexp:cerebrage_claret_hyphae'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:umbran_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:umbran_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:dead_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:dead_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:bamboo_block'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:warped_stem'})
event.remove({ type: 'farmersdelight:cutting', input:'minecraft:warped_hyphae'})
event.remove({ type: 'farmersdelight:cutting', input:'deeperdarker:echo_log'})
event.remove({ type: 'farmersdelight:cutting', input:'deeperdarker:echo_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:maple_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:maple_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:pine_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:pine_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:fir_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:fir_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'alexscaves:thornwood_log'})
event.remove({ type: 'farmersdelight:cutting', input:'luminous_nether:withered_log'})
event.remove({ type: 'farmersdelight:cutting', input:'alexscaves:thornwood_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'quark:ancient_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomemakeover:ancient_oak_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'biomemakeover:ancient_oak_log'})
event.remove({ type: 'farmersdelight:cutting', input:'quark:blossom_log'})
event.remove({ type: 'farmersdelight:cutting', input:'quark:blossom_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'quark:ancient_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'outer_end:azure_stem'})
event.remove({ type: 'farmersdelight:cutting', input:'outer_end:azure_pith'})
event.remove({ type: 'farmersdelight:cutting', input:'alexscaves:pewen_log'})
event.remove({ type: 'farmersdelight:cutting', input:'alexscaves:pewen_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:redwood_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:redwood_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:fir_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:fir_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'luminous_nether:withered_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:mahogany_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:mahogany_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:jacaranda_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:jacaranda_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:magic_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:magic_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'biomemakeover:willow_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomemakeover:willow_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:palm_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:palm_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:empyreal_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:empyreal_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'biomemakeover:swamp_cypress_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomemakeover:swamp_cypress_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'biomemakeover:blighted_balsa_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomemakeover:blighted_balsa_wood'})
event.remove({ type: 'farmersdelight:cutting', input:'luminous_nether:goldenstem'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:hellbark_log'})
event.remove({ type: 'farmersdelight:cutting', input:'biomesoplenty:hellbark_wood'})
})
