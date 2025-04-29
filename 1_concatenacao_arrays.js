function ConcatenarArray() {
    let brasilianCities = ["Joinville", "São Paulo", "Curitiba"];
    let foreignerCities = ["Lisboa", "Pequim", "Moscow"];

    const array = brasilianCities.concat(foreignerCities);
    return array;
}

console.log(ConcatenarArray());