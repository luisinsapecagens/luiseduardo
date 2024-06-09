function setup() {
    createCanvas(400, 400); // Cria um canvas de 400x400 pixels
    background(220); // Define a cor de fundo para cinza claro
  }
  
  function draw() {
    // Define uma cor aleatória para o círculo
    let r = random(255);
    let g = random(255);
    let b = random(255);
    fill(r, g, b);
    
    // Define uma posição aleatória para o círculo dentro do canvas
    let x = random(width);
    let y = random(height);
    
    // Desenha o círculo na posição definida
    ellipse(x, y, 50, 50); // Círculo de raio 50
  }
  
  function mousePressed() {
    background(220); // Limpa o canvas quando o mouse é pressionado
  }
  