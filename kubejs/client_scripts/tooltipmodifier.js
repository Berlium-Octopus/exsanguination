// priority: 200
// From amo, kubejs discord
global.tooltipModifiers = [];

function TooltipModifier(stack) {
    this.stack = [stack];
    this.simpleDescription = {}
    this.advancedDescription = {}
    this.toRemove = []
    this.predicates = []
    this.linesToRemove = []
    this.simpleFunction = {}
    this.advancedFunction = {}
    this.isLast = false
    this.shouldRemoveEmpty = false
}

TooltipModifier.prototype = {
    addSimple: function (index, text) {
        this.simpleDescription[index] = text;
        return this;
    },
    addAdvanced: function (index, text) {
        this.advancedDescription[index] = text;
        return this;
    },
    remove: function (text) {
        this.toRemove.push(text);
        return this;
    },
    removeIf: function (callback) {
        this.predicates.push(callback);
        return this;
    },
    removeLine: function (lineNumber) {
        this.linesToRemove.push(lineNumber);
        return this;
    },
    addStack: function (stack) {
        this.stack.push(stack);
        return this;
    },
    addSimpleFunction: function (startIndex, list) {
        let index = startIndex;
        this.simpleFunction[index] = list;
        return this;
    },
    addAdvancedFunction: function (startIndex, list) {
        let index = startIndex;
        this.advancedFunction[index] = list;
        return this;
    },
    // Sets the tooltip to be last in the list
    last: function () {
        this.isLast = true;
        return this;
    },
    // Removes empty lines from the tooltip
    removeEmpty: function () {
        this.shouldRemoveEmpty = true;
        return this;
    }
}

const $Minecraft = Java.loadClass('net.minecraft.client.Minecraft');
const $Style = Java.loadClass('net.minecraft.network.chat.Style')
const $ChatFormatting = Java.loadClass('net.minecraft.ChatFormatting')
function addArmorSetTooltip(stacks, validPieces, setName, setBonus) {
    return new TooltipModifier(stacks)
        .addAdvancedFunction(3, () => {
            let missingList = () => {
                try {
                    let player = $Minecraft.getInstance().player;
                    if (player == null) return [];
                    let missingPieces = [];
                    // This Part Of The Code Makes An Array
                    let helmetPieces = validPieces.helmet;
                    let chestplatePieces = validPieces.chestplate;
                    let leggingsPieces = validPieces.leggings;
                    let bootsPieces = validPieces.boots;
                    let offhandPieces = validPieces.offhand;
                    let curiosPieces = validPieces.curios;
                    let mainhandPieces = validPieces.mainhand;
                    let curios = player.nbt.ForgeCaps['curios:inventory']
                    // Makes The Armor Piece Green When kubejs:none + curios support
                    if (!helmetPieces.includes("kubejs:none") && !helmetPieces.some(piece => player.headArmorItem.getItem().id === piece)) missingPieces.push("Helmet")
                    if (!chestplatePieces.includes("kubejs:none") && !chestplatePieces.some(piece => player.chestArmorItem.getItem().id === piece)) missingPieces.push("Chestplate");
                    if (!leggingsPieces.includes("kubejs:none") && !leggingsPieces.some(piece => player.legsArmorItem.getItem().id === piece)) missingPieces.push("Leggings");
                    if (!mainhandPieces.includes("kubejs:none") && !mainhandPieces.some(piece => player.mainHandItem.getItem().id === piece)) missingPieces.push("Mainhand");
                    if (!curiosPieces.includes("kubejs:none") && !curiosPieces.some(piece => curios.toString().contains(piece))) missingPieces.push("Curios");
                    if (!bootsPieces.includes("kubejs:none") && !bootsPieces.some(piece => player.feetArmorItem.getItem().id === piece)) missingPieces.push("Boots");
                    if (!offhandPieces.includes("kubejs:none") && !offhandPieces.some(piece => player.offHandItem.getItem().id === piece)) missingPieces.push("Offhand");
                    return missingPieces;                    
                } catch (err) {
                    console.error("ARMORSETERROR: " + err);
                }
            }

            missingList = missingList();
            let possiblePieces = ["Helmet", "Chestplate", "Leggings", "Boots", "Mainhand", "Offhand", "Curios"]
            let missingPieces = [];
            let gameTime = Math.ceil($Minecraft.getInstance().level.time / 40);
            possiblePieces.forEach(piece => {
                // change kubejs:none to minecraft:air if you dont have the item
                if (validPieces[piece.toLowerCase()].includes("kubejs:none")) return
                let text = Text.of(` \u2507 ${piece} `)
                if (missingList.includes(piece)) {
                    text = text.darkGray()
                    if (validPieces[piece.toLowerCase()] !== undefined) {
                        text = text.append(Item.of(validPieces[piece.toLowerCase()][gameTime % validPieces[piece.toLowerCase()].length])
                            .displayName
                        );
                    }
                } else {
                    text = text.green()
                }
                missingPieces.push(text);
            });
            missingPieces.push(Text.of("Set Bonus: ").gold())
            setBonus.forEach(line => {
                missingPieces.push(line);
            });
            return missingPieces;
        })
        .addSimpleFunction(1, (shift) => {
            let shiftText = shift ? Text.of('Shift').white() : Text.of('Shift').gray();
            let arr = [
                Text.of(`Hold [`).darkGray().append(shiftText).darkGray().append(Text.of(`] for Set Bonus summary.`).darkGray())
            ]
            if (shift) {
                arr.push(Text.of(`${setName} Set`).gold())
            }
            return arr;
        }).last()
}
