function solve(text) {
    let pattern = /^>>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)$/;
    let furniture = [];
    let total = 0;

    while (text[0] != "Purchase") {
        let line = text.shift();
        let match = pattern.exec(line);
        if (match != null) {
            let {
                name,
                price,
                qty
            } = match.groups;
            price = Number(price);
            qty = Number(qty);
            total += price * qty;
            furniture.push(name);
        }
    }
    console.log("Bought furniture:")
    for (let item of furniture) {
        console.log(item)
    }
    console.log(`Total money spend: ${total.toFixed(2)}`)
}
solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
])

function furniture(data) {
    let pattern = new RegExp(">>(?<furniture>[\\w]+)<<(?<price>[\\d]+[.]?[\\d]+)!(?<quantity>[\\d]+)");
    let command = data.shift();
    let furniture = [];
    let currMoney = 0;
    let moneyTotal = 0;
    let quantity = 0; 
      
    while (command !== 'Purchase') {
        let match = pattern.exec(command);
      
        if (match !== null) {
            furniture.push(match.groups['furniture']);
            currMoney = Number(match.groups['price']);
            quantity = Number(match.groups['quantity']);
            moneyTotal += currMoney * quantity;
        } 
      
        command = data.shift();
    }
 
    console.log('Bought furniture:');
    
    if (furniture.length > 0) {
        console.log(furniture.join('\n'));
    }
  
    console.log(`Total money spend: ${moneyTotal.toFixed(2)}`);
}