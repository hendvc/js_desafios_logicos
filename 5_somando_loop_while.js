function NumberSum() {
    const numbers = [5, 5, 10];
    let cont = 0;
    let i = 0;

    while (i < numbers.length) {
        cont = cont + numbers[i];
        i++;
    }
    return `A somatoria dos numeros eh de ${cont}`;
}

console.log(NumberSum());