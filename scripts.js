function calcular(){
      let qtarroz = Number(document.getElementById("qtarroz").value)
      let qtfeijao = Number(document.getElementById("qtfeijao").value)
      let qtoleo = Number(document.getElementById("qtoleo").value)
      let qtmacarrao = Number(document.getElementById("qtmacarrao").value)

      let pts = (qtarroz * 10) + (qtfeijao * 8) + (qtoleo * 4) + (qtmacarrao * 2)
   if (kit == 60){
      pts = pts + 5000
      if  (kit > 60){
         pts = pts + (5000/60) * (kit - 60) * 83.33   
      }
      
   }
   else {
      pts = pts + kit * 83.33
   }
      //área de exibição de resultado
      document.getElementById("resultado").innerText = "Pontuação Total: " + pts + "pts"
       let metaProva1 
    if (cor == "Amarelo"){
        metaProva1 = 54
        metaSup = 27
    }
    else if (cor == "Cinza"){
        metaProva1 = 51
        metaSup = 26

    }
    else if (cor == "Laranja"){
        metaProva1 = 21
        metaSup = 11
    }
    else if (cor = "Marrom"){
        metaProva1 = 88
        metaSup = 44
    }
    else if (cor = "preta"){
        metaProva1 = 60
        metaSup = 30
    }
    else if (cor = "Rosa"){
        metaProva1 = 44
        metaSup = 22
    }
    else if (cor = "Verde"){
        metaProva1 = 61
        metaSup = 31
    }
    else if (cor = "Vermelho"){
        metaProva1 = 32
        metaSup = 16
    }
    if( metaProva1 %2 == 0){
        metaSup = metaProva1/2
    }
    else{
        metaSup = (metaProva1/2) * 1
    }
    let kit = Number(document.getElementById("kit").value)  
    if (kit >= metaProva1) {
        pts = pts + 5000
    }
    else if (kit > metaProva1){
        pts = pts + (kit - metaProva1) * (5000/metaProva1)
    }
    
    else{
        pts = pts + kit * (5000/metaProva1)
    }
    //calcula pontuação do kit
    let suplem = Number(document.getElementById("suplem").value)
    if(suplem >= metaSup){
        pts = pts + 5000
    }
    else if(suplem < metaSup){
        pts = pts + (suplem - metaSup) * (5000/metaSup)

    }
    else{
        pts = pts + (suplem * (5000/metaSup))
    }
    //calcula pontuação do suplemento
    let leite = Number(document.getElementById("leite").value)
    if(leite >= metaProva1){
        pts = pts + 5000
    }
    else if( leite < metaProva1){
        pts = pts + (leite - metaProva1) * (5000/metaProva1)
    }
    else{
        pts = pts + (leite*(5000/metaProva1))
    }    
    //caulcula pontuação do leite
    let sangue = Number(document.getElementById("sangue").value)
    if(sangue >= metaSup){
        pts = pts + 5000
    }
    else if( sangue < metaSup){
        pts = pts - (sangue - metaSup) * (5000/metaSup)
    }
    else{
        pts = pts( sangue * (5000/metaSup))
    }
    //calcula a meta da doação de sangue
    //vamos exibir o resultado para o usuario
     document.getElementById("resultado").innerText = "Pontuação total: " + pts + " pts"
}  
