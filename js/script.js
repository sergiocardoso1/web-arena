//slider
 let contador = 1;

 setInterval(function(){
   document.getElementById('slide' + contador).checked = true;
   contador++;
   if(contador > 7){
      contador = 1;
   }
 },4000)

  //menu
  const btnMobile = document.getElementById('btn-mobile');
  const btnMenu = document.getElementById('btn-menu')
  const btnMenu2 = document.getElementById('btn-menu2')
  const btnMenu3 = document.getElementById('btn-menu3')
  const btnMenu4 = document.getElementById('btn-menu4')
  const btnMenu5 = document.getElementById('btn-menu5')
 
  function toggleMenu(){
     const nav = document.getElementById('nav');
     nav.classList.toggle('active');
  }
 
  btnMobile.addEventListener('click', toggleMenu);
 
  btnMenu.addEventListener('click',function(){
    nav.classList.toggle('active');
  });
 
  btnMenu2.addEventListener('click',function(){
    nav.classList.toggle('active');
  });
 
  btnMenu3.addEventListener('click',function(){
    nav.classList.toggle('active');
  });
 
  btnMenu4.addEventListener('click',function(){
    nav.classList.toggle('active');
  });

  btnMenu5.addEventListener('click',function(){
    nav.classList.toggle('active');
  });

  // btn whatsapp form

var numeroTelefone = "5575981616503";


function goWhats(){
  var selectElementNome = document.getElementById("nome");
  var opcaoSelecionadaNome = selectElementNome.value;
  var selectElementVezesSemana = document.getElementById("select-vezes-semana");
  var opcaoSelecionadaVezesSemana = selectElementVezesSemana.value;
  var selectElementPlano = document.getElementById("select-plano");
  var opcaoSelecionadaPlano = selectElementPlano.value;
  var selectElementModalidade = document.getElementById("select-modalidade");
  var opcaoSelecionadaModalidade = selectElementModalidade.value;
  
    if (validarFormulario(opcaoSelecionadaNome, opcaoSelecionadaVezesSemana, opcaoSelecionadaPlano, opcaoSelecionadaModalidade) === true) {
      var mensagem = "Olá, me chamo: " + opcaoSelecionadaNome + ". Tenho interesse na modalidade: " + 
      opcaoSelecionadaModalidade + ", no plano: " + opcaoSelecionadaPlano + ", " + opcaoSelecionadaVezesSemana + 
      " na semana. Desejo atendimento.";

      var url = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);

      window.open(url);
    } else{
      alert("O campo não pode ficar vazio.");
    }
  }

  function validarFormulario(nome, vezesSemana, plano, modalidade ) {
    
  
    if (nome === "") {
      
      return false; // Impede o envio do formulário
    }

    else if (vezesSemana === "") {
      
      return false; // Impede o envio do formulário
    }

    else if (plano === "") {
      
      return false; // Impede o envio do formulário
    }

    else if (modalidade === "") {
      
      return false; // Impede o envio do formulário
    }

    else{
      return true;
    }
  
  }

  function goWhatsLocacao(botao){

    var valorBotao = botao.value;


    var mensagem = "Olá, tenho interesse na locação de " + valorBotao + ". Desejo atendimento.";
    var url = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);

      window.open(url);
  }