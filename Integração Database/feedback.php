<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <!-- ... (mesmo início) ... -->
  </head>
  <body lang="pt-br">
    <header>
      <h1>Feedback's destacados</h1>
    </header>
    <div class="container">
      <!-- ... (feedbacks existentes) ... -->
      <div class="feedback-form">
        <h2>Deixe o seu feedback, é importante para nossa melhora!</h2>
        <form action="processa-feedback.php" method="post">
          <label for="user-feedback">Sua Opinião:</label>
          <textarea id="user-feedback" name="user-feedback" rows="4" cols="50"></textarea>
          <button type="submit">Enviar Feedback</button>
        </form>
      </div>
    </div>
    <footer>
      <p>&copy; 2023 fit-system. Todos os direitos reservados.</p>
    </footer>
  </body>
</html>
