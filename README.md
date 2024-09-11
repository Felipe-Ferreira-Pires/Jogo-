# Meu primeiro jogo !

Este é um jogo simples desenvolvido com JavaScript e a biblioteca p5.js. O objetivo do jogo é controlar uma raquete para coletar bolas coloridas que aparecem na tela, evitando bolas vermelhas e tentando acumular o maior número de pontos possível.

## Descrição do Jogo

O jogo começa com uma tela de introdução. Quando o jogador pressiona a barra de espaço, o jogo começa. A raquete pode ser movida para a esquerda e para a direita usando as teclas 'a' e 'd', respectivamente. O jogador deve coletar bolas azuis para ganhar pontos, bolas verdes para aumentar os pontos e evitar bolas vermelhas que diminuem a pontuação. O jogo termina quando a pontuação chega a zero.

## Tecnologias Utilizadas

- [p5.js](https://p5js.org/) - Biblioteca JavaScript para criação gráfica e interação
- JavaScript - Linguagem de programação principal utilizada

## Como Executar o Jogo

### Pré-requisitos

Não há pré-requisitos além de um navegador moderno para executar o jogo.

### Instalação e Execução

1. Clone o repositório para o seu computador:

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd seu-repositorio
    ```

3. Abra o arquivo `index.html` no seu navegador. 

    Você pode fazer isso clicando duas vezes no arquivo `index.html` ou abrindo-o a partir do navegador com a opção "Abrir arquivo".

## Controles do Jogo

- **Tecla 'a'** - Mover a raquete para a esquerda
- **Tecla 'd'** - Mover a raquete para a direita
- **Barra de espaço** - Iniciar o jogo e reiniciar após a tela de Game Over

## Regras do Jogo

- **Bolas Azuis**: Adicionam 3 pontos ao total de pontos.
- **Bolas Verdes**: Adicionam 1 ponto ao total de pontos.
- **Bolas Vermelhas**: Reduzem 1 ponto ao total de pontos.
- O jogo termina quando a pontuação chega a zero.

## Estrutura do Código

- `preload()`: Carrega as imagens dos sprites.
- `setup()`: Configura o ambiente do jogo, incluindo a criação da raquete e grupos de sprites.
- `draw()`: Função principal que atualiza o estado do jogo a cada frame.
- `greenBalls()`, `redBalls()`, `blueBalls()`: Funções responsáveis pela criação de diferentes tipos de bolas.

## Contribuição

Se você deseja contribuir para o projeto, siga estas etapas:

1. Fork o repositório
2. Crie uma branch para sua alteração (`git checkout -b minha-alteracao`)
3. Faça commit das suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin minha-alteracao`)
5. Crie um Pull Request

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Contato

Seu Nome - seu-email@dominio.com

Link para o repositório: [https://github.com/seu-usuario/seu-repositorio](https://github.com/seu-usuario/seu-repositorio)
