$(function() {

/* botões página inicial */

  $("#btnDialog").click(function() {
    $("#pagMain").hide();
    $("#pagDialog").show();
  });

  $("#btnCamera").click(function() {
    $("#pagMain").hide();
    $("#pagCamera").show();
  });
  
  $("#btnBussola").click(function() {
    $("#pagMain").hide();
    $("#pagBussola").show();
  });

  $("#btnAccel").click(function() {
    $("#pagMain").hide();
    $("#pagAccel").show();
  });

  $("#btnGPS").click(function() {
    $("#pagMain").hide();
    $("#pagGPS").show();
  });

/* botão voltar */

  function voltarMain() {
    $("#pagMain").show();
    $("#pagDialog").hide();
    $("#pagCamera").hide();
    $("#pagBussola").hide();
    $("#pagAccel").hide();
    $("#pagGPS").hide();
  }

  $(".btnVoltar").click(voltarMain);
  
  /* botões diálogo*/

  $("#btnAlert").click(function() {
    alert("Alert javascript");
  });

  $("#btnConfirm").click(function() {
    confirm("Confirm javascript");
  });

  $("#btnNativAlert").click(function() {
    navigator.notification.alert("Alert nativo", null, "Alerta");
  });

  $("#btnNativConfirm").click(function() {
    navigator.notification.confirm("Confirm nativo", null, "Confirmação", ["OK", "Cancelar"]);
  });

  $("#btnNativBeep").click(function() {
    navigator.beep(2);
  });

  $("#btnNativVibrate").click(function() {
    navigator.vibrate(1000);
  });
  
  /* botão captura imagem */

  $("#btnPhotoCapture").click(function() {
    var options = {
      quality: $("#cmbQuality").val(),
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: $("#cmbSource").val(),
      allowEdit: true,
      encodingType: $("#cmbEnconding").val(),
      targetWidth: 100,
      targetHeight: 100,
      saveToPhotoAlbum: false
    };
    
    navigator.camera.getPicture(successPhoto,failPhoto,options);
  });
  
  function successPhoto(imageData) {
    $("#imgPhoto").attr("src","data:image/jpeg;base64," + imageData);
  }
  
  function failPhoto(message) {
    alert("Erro ao capturar imagem " + message);
  
  }

});