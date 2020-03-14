const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];


  function checaSeusaCSS(usuario){
      for (let i = 0; i < usuario.tecnologias.length; i++) {
          if (usuario.tecnologias[i]=="CSS") {
              return true              
          }      
      }
      return false
  }

  const resultado = checaSeusaCSS(usuarios[0])
  console.log(resultado)
