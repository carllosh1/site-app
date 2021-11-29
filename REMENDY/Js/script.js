// principal -> cadastro
function alterar (){
    document.querySelector('.tela2').classList.add("aparecer")
    document.querySelector('.app').classList.add("esconder")
}

// cadastro -> estoque
function alterar2 (){
    document.querySelector('.tela3').classList.add("aparecer")
    document.querySelector('.tela2').classList.add("esconder")

}


// sicronização -> dispositivo
function alterar3 (){
    document.querySelector('.tela6').classList.add("aparecer")
    document.querySelector('.tela3').classList.add("esconder")
}

// cadastro -> sicronizar 
function alterar4 (){
    document.querySelector('.tela4').classList.add("aparecer")
    document.querySelector('.tela2').classList.add("esconder")

}
// cadastro -> relatar
function alterar5 (){
    document.querySelector('.tela5').classList.add("aparecer")
    document.querySelector('.tela3').classList.add("esconder")

}
// estoque -> cadastro
function alterar6 (){
    document.querySelector('.tela2').classList.add("aparecer")
    document.querySelector('.tela3').classList.add("esconder")

}
// estoque -> sicronizar 
function alterar7 (){
    document.querySelector('.tela4').classList.add("aparecer")
    document.querySelector('.tela3').classList.add("esconder")

}

// estoque -> relatar
function alterar8 (){
    document.querySelector('.tela5').classList.add("aparecer")
    document.querySelector('.tela3').classList.add("esconder")

}

// relatar -> cadastro
function alterar9 (){
    document.querySelector('.tela2').classList.add("aparecer")
    document.querySelector('.tela5').classList.add("esconder")

}
// relatar -> estoque 
function alterar10 (){
    document.querySelector('.tela3').classList.add("aparecer")
    document.querySelector('.tela5').classList.add("esconder")

}

// relatar -> sicronizar
function alterar11 (){
    document.querySelector('.tela4').classList.add("aparecer")
    document.querySelector('.tela5').classList.add("esconder")

}

// dispo -> cadastro
function alterar12 (){
    document.querySelector('.tela2').classList.add("aparecer")
    document.querySelector('.tela6').classList.add("esconder")

}
// dispo -> estoque 
function alterar13 (){
    document.querySelector('.tela3').classList.add("aparecer")
    document.querySelector('.tela6').classList.add("esconder")

}

// dispo -> sicronizar
function alterar14 (){
    document.querySelector('.tela4').classList.add("aparecer")
    document.querySelector('.tela6').classList.add("esconder")

}
// dispo -> relatar
function alterar14 (){
    document.querySelector('.tela5').classList.add("aparecer")
    document.querySelector('.tela6').classList.add("esconder")

}
// ativar menu cadastro

// TELA CADASTRO
function ativarMenu(){
  
        document.querySelector('.containerB').classList.toggle('containerB-active');
        document.querySelector('.menuB').classList.toggle('menuB-active')
    
  }

// TELA ESTOQUE
function ativarMenu2(){
  
    document.querySelector('.containerB2').classList.toggle('containerB2-active');
    document.querySelector('.menuB2').classList.toggle('menuB2-active')

}
// TELA SICRONIZAR
function ativarMenu3(){
  
    document.querySelector('.containerB3').classList.toggle('containerB3-active');
    document.querySelector('.menuB3').classList.toggle('menuB3-active')

}
// TELA DISPOSITIVO
function ativarMenu4(){
  
    document.querySelector('.containerB4').classList.toggle('containerB4-active');
    document.querySelector('.menuB4').classList.toggle('menuB4-active')

}


 