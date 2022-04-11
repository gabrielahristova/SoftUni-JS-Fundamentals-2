function solve(input) {
    for (let table of input) {
        // let singleLineInfo = table.split('|')
        // let town = singleLineInfo[0];
        // let latitude = singleLineInfo[1];
        // let longitude = singleLineInfo[2];

        let [town, latitude, longitude] = table.split(' | ');
        let currentTownInfo = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(currentTownInfo);
    }
}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
])