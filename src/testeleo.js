let notas = [2, 0, 3]


muitaTreta = notas.reduce((teste, treta) => teste + treta);
// console.log(notas.reduce(somar, 0)/notas.length)
console.log(`valor somado da porra toda ${muitaTreta}`)

if (typeof(muitaTreta) === 'string') {
    console.log('nao foi dessa vez')
} else {
    console.log (Math.round(muitaTreta / notas.))
}