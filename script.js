var computador = parseInt(Math.random() * 3 + 1)

alert(`JOKENPO
1 = Pedra
2 = Papel
3 = Tesoura`)


var pontoJogador = 0
var pontoComputador = 0

while (pontoJogador < 2 && pontoComputador < 2) {

    var jogador = parseInt(prompt("Digite o número"))
    if (jogador) {
        if (jogador == 1 && computador == 2) {
            alert(`     
            Jogador jogou: Pedra
            Computador jogou: Papel 
            Computador Venceu`)
            pontoComputador++
        } else if (jogador == 1 && computador == 3) {
            alert(`     
            Jogador jogou: Pedra
            Computador jogou: Tesoura 
            Jogador Venceu`)
            pontoJogador++
        } else if (jogador == 2 && computador == 3) {
            alert(`     
            Jogador jogou: Papel
            Computador jogou: Tesoura 
            Computador Venceu`)
            pontoComputador++
        } else if (jogador == 2 && computador == 1) {
            alert(`     
            Jogador jogou: Papel
            Computador jogou: Pedra 
            Jogador Venceu`)
            pontoJogador++
        } else if (jogador == 3 && computador == 1) {
            alert(` 
            Jogador jogou: Tesoura
            Computador jogou: Pedra 
            Computador Venceu`)
            pontoComputador++
        } else if (jogador == 3 && computador == 2) {
            alert(` 
            Jogador jogou: Tesoura
            Computador jogou: papel 
            Jogador Venceu`)
            pontoJogador++
        } else if (jogador != 1, 2, 3){
            alert('Digite apenas um número válido')
        } else {
            alert('Empate')
        }
    }
}

if (pontoJogador == 2) {
    alert(`Jogador venceu com ${pontoJogador}`)
} else if (pontoComputador == 2) {
    alert(`Computador Venceu com ${pontoComputador}`)
}

