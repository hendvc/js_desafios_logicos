function SpliceArray() {
    const animals = ["Leão", "Capivara", "Calopsita", "Onça", "Gavião", "Porco"];
    animals.splice(3,1, "Tigre");
    animals.splice(4,1, "Cavalo");

    return animals;
}

console.log(SpliceArray());