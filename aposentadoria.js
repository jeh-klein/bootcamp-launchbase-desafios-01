const nome = 'Bruno'
const sexo = 'Masculino'
const idade = 60
const contribuição = 35
const regra = idade + contribuição

if (sexo == 'Masculino') {
    if (contribuição >= 35 && regra >= 95)
      console.log(`${nome} você pode se aposentar`)
    else 
      console.log(`${nome} você ainda não pode se aposentar!`)   
}

if (sexo == 'Feminino') {
    if (contribuição >= 30 && regra >= 85)
      console.log(`${nome} você pode se aposentar`)
    else
      console.log(`${nome} você ainda não pode se aposentar!`)   
}