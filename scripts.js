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
}  
