/* Case Sensitive => reconhece letras MAIUSCULAS e minusculas (e diferencia elas)// thiago / Thiago 
document selector 
por tag: document.getElementsByTagName('h3') por classe: document.getElementsByClassName('.nomedaclasse')
por nome: document.getElementsByName('email')
 por ID: document.getElementById('#idDoelemento')
  por seletor: document.querySelector('id/classe/nome') */

let nome = window.document.getElementById("nome") /* Pegue o elemento pelo ID */
let email = document.querySelector("#email") /*query obrigatório # */
let assunto = document.querySelector("#assunto")

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

function validaNome() {
  let txtNome = document.querySelector("#txtNome")
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome Inválido"
    txtNome.style.color = "red"
  } else {
    txtNome.innerHTML = "Nome Válido"
    txtNome.style.color = "green"
  }

}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail")

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail inválido"
    txtEmail.style.color = "red"
  } else {
    txtEmail.innerHTML = "E-mail Válido"
    txtEmail.style.color = "green"
  }
}






