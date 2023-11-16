<!-- Formulário de Cadastro -->
<form id="cadastroForm">
  <h2>Cadastro</h2>
  <label for="emailCadastro">E-mail:</label>
  <input type="email" id="emailCadastro" required>
  <br>
  <label for="senhaCadastro">Senha:</label>
  <input type="password" id="senhaCadastro" required>
  <br>
  <button type="button" onclick="cadastrarUsuario()">Cadastrar</button>
</form>
<!-- Formulário de Login -->
<form id="loginForm">
  <h2>Login</h2>
  <label for="emailLogin">E-mail:</label>
  <input type="email" id="emailLogin" required>
  <br>
  <label for="senhaLogin">Senha:</label>
  <input type="password" id="senhaLogin" required>
  <br>
  <button type="button" onclick="validarLogin()">Login</button>
  <p id="loginMessage"></p>
</form>
