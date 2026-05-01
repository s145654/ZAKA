<?php
require_once 'db_connect.php';
require_once 'navbar.php';

$message = "";
$messageType = "";

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit_feedback'])) {
    $email = $conn->real_escape_string($_POST['email']);
    $username = $conn->real_escape_string($_POST['username']);
    $age = (int)$_POST['age'];
    $experience = $conn->real_escape_string($_POST['experience']);
    $source = $conn->real_escape_string($_POST['source']);
    $feedback_text = $conn->real_escape_string($_POST['feedback']);

    $sql = "INSERT INTO feedback (email, username, age, experience, source, feedback_text) 
            VALUES ('$email', '$username', $age, '$experience', '$source', '$feedback_text')";

    if ($conn->query($sql) === TRUE) {
        $message = "Thank you! Your feedback has been saved to the database.";
        $messageType = "success";
    } else {
        $message = "Error: " . $conn->error;
        $messageType = "danger";
    }
}
?>
<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback | ZAKA</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="styles.css" rel="stylesheet">
    <script>
        function validatePHPForm(event) {
            const email = document.getElementById('q-email').value;
            const username = document.getElementById('q-username').value;
            const age = document.getElementById('q-age').value;
            const feedback = document.getElementById('q-feedback').value;
            
            let isValid = true;
            
            // Basic validation matching scripts.js logic
            if (!email.includes('@')) {
                alert('Please enter a valid email.');
                isValid = false;
            } else if (username.length < 3) {
                alert('Username must be at least 3 characters.');
                isValid = false;
            } else if (age < 13 || age > 99) {
                alert('Age must be between 13 and 99.');
                isValid = false;
            } else if (feedback.length < 20) {
                alert('Feedback must be at least 20 characters.');
                isValid = false;
            }
            
            if (!isValid) {
                event.preventDefault();
            }
            return isValid;
        }
    </script>
</head>
<body>
    <header>
        <?php getNavbar('questionnaire.php'); ?>
    </header>

    <main class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card p-4 border-secondary shadow">
                    <h2 class="text-center mb-4">Player Experience Questionnaire</h2>
                    
                    <?php if ($message): ?>
                        <div class="alert alert-<?php echo $messageType; ?>"><?php echo $message; ?></div>
                    <?php endif; ?>

                    <form action="questionnaire.php" method="POST" onsubmit="return validatePHPForm(event)">
                        <div class="mb-3">
                            <label for="q-email" class="form-label">Email Address *</label>
                            <input type="email" id="q-email" name="email" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label for="q-username" class="form-label">ZAKA Username *</label>
                            <input type="text" id="q-username" name="username" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label for="q-age" class="form-label">Your Age *</label>
                            <input type="number" id="q-age" name="age" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label class="form-label d-block">Overall Experience</label>
                            <select name="experience" class="form-select">
                                <option value="excellent">Excellent</option>
                                <option value="good">Good</option>
                                <option value="average">Average</option>
                                <option value="poor">Poor</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="q-source" class="form-label">How did you hear about us?</label>
                            <select id="q-source" name="source" class="form-select">
                                <option value="social">Social Media</option>
                                <option value="friend">Friend</option>
                                <option value="search">Search</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label for="q-feedback" class="form-label">Detailed Feedback *</label>
                            <textarea id="q-feedback" name="feedback" class="form-control" rows="4" required></textarea>
                        </div>

                        <button type="submit" name="submit_feedback" class="btn btn-primary w-100">Submit Feedback</button>
                    </form>
                </div>
            </div>
        </div>
    </main>

    <?php include 'footer.php'; ?>
</body>
</html>
