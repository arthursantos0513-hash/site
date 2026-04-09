function calcular(){
      let qtarroz = Number(document.getElementById("qtarroz").value)
      let qtfeijao = Number(document.getElementById("qtfeijao").value)
      let qtoleo = Number(document.getElementById("qtoleo").value)
      let qtmacarrao = Number(document.getElementById("qtmacarrao").value)

      let pts = (qtarroz * 10) + (qtfeijao * 8) + (qtoleo * 4) + (qtmacarrao * 2)
      let kit = Number(document.getElementById("kit").value)
      let suplem = Number(document.getElementById("suplem").value)
      let leite = Number(document.getElementById("leite").value)
      let sangue = Number(document.getElementById("sangue").value)
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
    }
    else if (cor == "Cinza"){
         metaProva1 = 51
    }
    else if (cor == "Laranja"){
        metaProva1 = 21
    }
    else if (cor = "Marrom"){
        metaProva1 = 88
    }
    else if (cor = "preta"){
        metaProva1 = 60
    }
    else if (cor = "Rosa"){
        metaProva1 = 44
    }
    else if (cor = "Verde"){
        metaProva1 = 61
    }
    else if (cor = "Vermelho"){
        metaProva1 = 32
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
        
    //vamos exibir o resultado para o usuario
     document.getElementById("resultado").innerText = "Pontuação total: " + pts + " pts"
}  
