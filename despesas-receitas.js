const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

for (let i = 0; i < usuarios.length; i++) {
    const receitas = usuarios[i].receitas;
    const despesas = usuarios[i].despesas;

    const saldoLiquido = calculaSaldo(receitas, despesas);

    if (saldoLiquido > 0) {
        console.log(`${usuarios[i].nome} possui saldo positivo de ${saldoLiquido} `)  
    } else {
        console.log(`${usuarios[i].nome} possui saldo negativo de ${saldoLiquido} `)  
    }   
}

function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)
    return somaReceitas-somaDespesas
}

function somaNumeros(numeros) {
    let total = 0
    for (let i = 0; i < numeros.length; i++) {
        total = total+numeros[i];
    }
    return total
}

