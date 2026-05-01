<?php require_once 'navbar.php'; ?>
<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fun Page | ZAKA</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="styles.css" rel="stylesheet">
</head>
<body>
    <header>
        <?php getNavbar('funpage.php'); ?>
    </header>

    <main class="container py-5 text-center">
        <div id="quiz-container" class="card p-5 border-secondary shadow mx-auto" style="max-width: 600px;">
            <h2>ZAKA Trivia Challenge</h2>
            <p>Test your gaming knowledge!</p>
            <button id="start-btn" class="btn btn-primary btn-lg" onclick="startQuiz()">Start Quiz</button>
            
            <div id="quiz-area" class="d-none mt-4">
                <h4 id="question-text"></h4>
                <div id="options-container" class="d-grid gap-2 mt-3"></div>
            </div>
        </div>
    </main>

    <?php include 'footer.php'; ?>
</body>
</html>

    <?php include 'footer.php'; ?>
</body>
</html>
