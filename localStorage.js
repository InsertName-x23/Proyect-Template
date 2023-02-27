let frm_login, frm_registro;
let btn_enviar_registrar, btn_enviar; 

frm_login = document.getElementById("frm_login");
btn_enviar = document.getElementById("btn_login");
btn_enviar_registrar = document.getElementById("btn_enviar_registrar");
frm_registro = document.getElementById("frm_register");

if(frm_login != null) frm_login.addEventListener("submit", Login);
if(frm_registro != null) frm_registro.addEventListener("submit", Registro);

function Login(event){
  verificarUsuario = JSON.parse(localStorage.getItem("Usuario"));

  if (
    verificarUsuario.correo !== impCorreoSingIn.value ||
    verificarUsuario.contraseña !==
      CryptoJS.MD5(impContraseñaSingIn.value).toString()
  ) {
    event.preventDefault();
  } else {
    const MD5passwordLognIn = CryptoJS.MD5(
      impContraseñaSingIn.value
    ).toString();
    let secionUsuario = {
      contraseña: MD5passwordLognIn,
      correo: impCorreoSingIn.value,
    };

    localStorage.setItem("secionUsuario", JSON.stringify(secionUsuario));
    window.location.replace("public/home.html");
}

function Registro(event){
	const MD5password = CryptoJS.MD5(impContraseña.value).toString();
    let Usuario = {
      nombre: impNombre.value,
      contraseña: MD5password,
      correo: impCorreo.value,
      empresa: impEmpresa.value,
    };

    localStorage.setItem("Usuario", JSON.stringify(Usuario));
}


