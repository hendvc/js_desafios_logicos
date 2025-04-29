function NumberSum() {
    const numbers = [5, 5, 10];
    let cont = 0;

    for (let i = 0; i < numbers.length; i++) {
        cont = cont + numbers[i];
    }
    return `A somatoria dos numeros eh de ${cont}`;
}

console.log(NumberSum());