<?php require_once 'navbar.php'; ?>
<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us | ZAKA</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="styles.css" rel="stylesheet">
</head>
<body>
    <header>
        <?php getNavbar('about.php'); ?>
    </header>

    <main class="container py-5">
        <div class="row g-4">
            <div class="col-md-8">
                <div class="card p-4 border-secondary shadow h-100">
                    <h2>Our Story</h2>
                    <p>ZAKA was founded by a team of passionate developers with a vision to create a world-class gaming ecosystem.</p>
                    <ul class="list-group list-group-flush bg-transparent">
                        <li class="list-group-item bg-transparent text-white border-secondary">Adnan AL-Sheikh - CEO & Founder</li>
                        <li class="list-group-item bg-transparent text-white border-secondary">Khaled Al-Jabri - Lead Developer</li>
                        <li class="list-group-item bg-transparent text-white border-secondary">Moayad AL-Sawafi - Creative Director</li>
                        <li class="list-group-item bg-transparent text-white border-secondary">Ziyad Al-Hinai - Systems Architect</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>

    <?php include 'footer.php'; ?>
</body>
</html>
