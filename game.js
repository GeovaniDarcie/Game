var canvas, ctx, ALTURA, LARGURA, frames = 0, maxPulos = 3,
    
    chao ={
        y: 550,
        altura: 50,
        cor: "#ffdf70",

        desenha: function(){
            ctx.fillStyle = this.cor;
            ctx.fillRect(0, this.y, LARGURA, this.altura);
            }
        },

    bloco = {
        y: 0,
        x: 50,
        altura: 50,
        largura: 50,
        cor: "#ff4e4e",
        velocidade: 0,
        gravidade: 1.5,
        forcaDoPulo: 15,
        quantPulos: 0,
        
        atualiza: function(){
            this.velocidade += this.gravidade;
            this.y += this.velocidade;

            if (this.y > chao.y - this.altura){
                this.y = chao.y - this.altura;
                this.quantPulos = 0;
            }
        },
        
        pula :function(){
            if(this.quantPulos < maxPulos){
                this.velocidade = -this.forcaDoPulo;
                this.quantPulos++;
            }
         },

        desenha: function(){
            ctx.fillStyle = this.cor;
            ctx.fillRect(this.x, this.y, this.largura, this.altura);
        },

       
    };


function clique(evento){
   bloco.pula();
}

function main(){
   ALTURA = window.innerHeight;
   LARGURA = window.innerWidth;

   if (LARGURA >= 500){
       ALTURA = 600;
       LARGURA = 600
   }

   canvas = document.createElement("canvas");
   canvas.width = LARGURA;
   canvas.height = ALTURA;
   
   ctx = canvas.getContext("2d");

   document.body.appendChild(canvas);

   document.addEventListener("mousedown", clique);

   roda();

}

function roda(){
    atualiza();
    desenha();

    window.requestAnimationFrame(roda);

}

function atualiza(){
    frames++;
    bloco.atualiza();
}

function desenha(){
    ctx.fillStyle = "#50beff";
    ctx.fillRect(0,0, LARGURA, ALTURA);
    
    chao.desenha();
    bloco.desenha();
}

main();