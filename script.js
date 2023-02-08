var computador = parseInt(Math.random() * 3 + 1)

alert(`JOGO DA VELHA
1 = Pedra
2 = Papel
3 = Tesoura`)

var jogador = parseInt(prompt("Digite o número"))

if (jogador) {
    if (jogador == 1 && computador == 2) {
        alert(`     
            Jogador jogou: Pedra
            Computador jogou: Papel 
            Computador Venceu`)
    } else if (jogador == 1 && computador == 3) {
        alert(`     
            Jogador jogou: Pedra
            Computador jogou: Tesoura 
            Jogador Venceu`)
    } else if (jogador == 2 && computador == 3) {
        alert(`     
            Jogador jogou: Papel
            Computador jogou: Tesoura 
            Computador Venceu`)
    } else if (jogador == 2 && computador == 1) {
        alert(`     
            Jogador jogou: Papel
            Computador jogou: Pedra 
            Jogador Venceu`)
    } else if (jogador == 3 && computador == 1) {
        alert(` 
            Jogador jogou: Tesoura
            Computador jogou: Pedra 
            Computador Venceu`)
    } else if (jogador == 3 && computador == 2) {
        alert(` 
            Jogador jogou: Tesoura
            Computador jogou: papel 
            Jogador Venceu`)
    } else{
        alert('Empate')
    }
}
