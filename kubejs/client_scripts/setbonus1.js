// From amo, kubejs discord
// priority: 100
ItemEvents.tooltip((event) => {
    global.tooltipModifiers.forEach(modifier => {
        event.addAdvanced(modifier.stack, (stack, advanced, tooltip) => {
/*            tooltip.forEach(line => {
                console.log(line.getString());
            });
            */
            if(modifier.shouldRemoveEmpty) {
                tooltip.removeIf(line => line.getString().isEmpty());
            }
            modifier.toRemove.forEach(toRemove => {
                tooltip.removeIf((line) => {
                    return line.getString().includes(toRemove);
                });
            });
            modifier.predicates.forEach(predicate => {
                tooltip.removeIf((line) => {
                    return predicate(line);
                });
            });
            modifier.linesToRemove.forEach(lineNumber => {
                tooltip.remove(lineNumber);
            });
            Object.keys(modifier.simpleDescription).forEach(index => {
                let text = modifier.simpleDescription[index];
                if(modifier.isLast) index = tooltip.size();
                if (text instanceof Function) text = text();
                else if (text instanceof String) text = text;
                tooltip.add(index, text);
            });
            Object.keys(modifier.simpleFunction).forEach(index => {
                let text = modifier.simpleFunction[index](event.shift);
                if(modifier.isLast) index = tooltip.size();
                let i = index
                text.forEach(line => {
                    tooltip.add(i, line);
                    i++;
                });
            });
            if (event.shift) {
                Object.keys(modifier.advancedDescription).forEach(index => {
                    let i = index
                    if(modifier.isLast) index = tooltip.size();
                    tooltip.add(index, modifier.advancedDescription[i]);
                });
                Object.keys(modifier.advancedFunction).forEach(index => {
                    let j = index
                    if(modifier.isLast) index = tooltip.size();
                    let text = modifier.advancedFunction[j]();
                    let i = index
                    text.forEach(line => {
                        tooltip.add(i, line);
                        i++;
                    });
                });
            }
        }
        );
    });
})
