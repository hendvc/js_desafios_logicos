function NumberController() {
    const numbers = ["10", "20", "30", "40", "51", "60"];
    let cont = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 50) {
            cont++;
        } 
    }
    return `O array possui ${cont} numero(s) maior(es) que 50`;

}

console.log(NumberController());