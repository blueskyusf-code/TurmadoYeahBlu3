function enviarNotificacaoNativa() {
  if (Notification.permission === "granted") {
    
    const notificacao = new Notification("Notícia nova!", {
      body: "Verifique o site pra ver",
      icon: "https://i.ibb.co/Xfzzs9SS/76-Sem-T-tulo-20260610205802.png"
    });

    notificacao.onclick = function(event) {
      event.preventDefault();
      window.open("https://turmadoyeahblu3.web.app/canal/", "_blank"); 
    };

  } else if (Notification.permission === "default") {
    console.log("A permissão ainda não foi solicitada ou está pendente.");
  } else {
    console.log("O usuário bloqueou as notificações nas configurações do navegador.");
  }
}
