<?php
require_once 'db_connect.php';
require_once 'navbar.php';
require_once 'classes.php';

$message = "";
$messageType = "";

// Handle Insert Operation (Add New Developer)
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['add_developer'])) {
    $id = "D" . rand(100, 999);
    $name = $conn->real_escape_string($_POST['name']);
    $studio = $conn->real_escape_string($_POST['studio']);
    $specialty = $conn->real_escape_string($_POST['specialty']);
    $experience = $conn->real_escape_string($_POST['experience']);

    $sql = "INSERT INTO developers (id, name, studio, specialty, experience) VALUES ('$id', '$name', '$studio', '$specialty', '$experience')";
    if ($conn->query($sql) === TRUE) {
        $message = "Developer '$name' registered successfully!";
        $messageType = "success";
    } else {
        $message = "Error: " . $conn->error;
        $messageType = "danger";
    }
}

// Handle Delete Operation
if (isset($_GET['delete_id'])) {
    $delete_id = $conn->real_escape_string($_GET['delete_id']);
    $sql = "DELETE FROM developers WHERE id = '$delete_id'";
    if ($conn->query($sql) === TRUE) {
        $message = "Developer record deleted successfully!";
        $messageType = "warning";
    } else {
        $message = "Error: " . $conn->error;
        $messageType = "danger";
    }
}

// Fetch Developers
$sql = "SELECT * FROM developers";
$result = $conn->query($sql);
$devsArray = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $devsArray[] = new Developer($row['id'], $row['name'], $row['studio'], $row['specialty'], $row['experience']);
    }
}

// Override render function for developer to include delete button
function renderDevelopersWithActions($developers) {
    if (empty($developers)) {
        echo '<tr><td colspan="6" class="text-center text-muted">No developers found.</td></tr>';
        return;
    }

    foreach ($developers as $dev) {
        echo '<tr>';
        echo '<td>' . htmlspecialchars($dev->id) . '</td>';
        echo '<td>' . htmlspecialchars($dev->name) . '</td>';
        echo '<td>' . htmlspecialchars($dev->studio) . '</td>';
        echo '<td>' . htmlspecialchars($dev->specialty) . '</td>';
        echo '<td>' . htmlspecialchars($dev->experience) . '</td>';
        echo '<td><a href="developer.php?delete_id=' . urlencode($dev->id) . '" class="btn btn-danger btn-sm" onclick="return confirm(\'Are you sure?\')">Delete</a></td>';
        echo '</tr>';
    }
}
?>
<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dev Portal | ZAKA</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="styles.css" rel="stylesheet">
</head>
<body>
    <header>
        <?php getNavbar('developer.php'); ?>
    </header>

    <main class="container py-5">
        <div class="text-center mb-5">
            <h1>Create. Deploy. Thrive.</h1>
            <p class="lead text-white-50">Join the growing community of developers on ZAKA.</p>
        </div>

        <?php if ($message): ?>
            <div class="alert alert-<?php echo $messageType; ?>"><?php echo $message; ?></div>
        <?php endif; ?>

        <!-- ===== TOP ROW: Submit Project + Roadmap ===== -->
        <div class="row g-4 mb-5">
            <div class="col-md-7">
                <div class="card h-100 p-4 border-secondary shadow">
                    <h4 class="mb-3">Submit a New Project</h4>
                    <form action="https://httpbin.org/get" method="get">
                        <div class="mb-3">
                            <label for="project-name" class="form-label">Project Name</label>
                            <input type="text" id="project-name" name="project-name" class="form-control"
                                placeholder="Futuristic Racing Simulator" required>
                        </div>
                        <div class="mb-3">
                            <label for="engine" class="form-label">Development Engine</label>
                            <select id="engine" name="engine" class="form-select">
                                <option value="unreal">Unreal Engine 5</option>
                                <option value="unity">Unity 3D</option>
                                <option value="godot">Godot Engine</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Target Platforms</label>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="platform" id="pc" value="pc" checked>
                                <label class="form-check-label" for="pc">PC (Windows/Linux)</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="platform" id="mobile" value="mobile">
                                <label class="form-check-label" for="mobile">Mobile (iOS/Android)</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="platform" id="console" value="console">
                                <label class="form-check-label" for="console">Console (PS5/Xbox)</label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="access-key" class="form-label">Dev Access Password</label>
                            <input type="password" id="access-key" name="access-key" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Initialize Submission</button>
                    </form>
                </div>
            </div>
            <div class="col-md-5">
                <div class="card h-100 p-4 border-secondary shadow">
                    <h4 class="mb-3">Submission Roadmap</h4>
                    <p class="text-white-50">Track your project through our automated review cycle.</p>
                    <div class="accordion accordion-flush" id="roadmapAccordion">
                        <div class="accordion-item bg-transparent border-secondary">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-transparent text-white" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#step1">
                                    Step 1: Security Sandbox Verification
                                </button>
                            </h2>
                            <div id="step1" class="accordion-collapse collapse" data-bs-parent="#roadmapAccordion">
                                <div class="accordion-body text-white-50 small">
                                    Your submission is run in an isolated sandbox to check for malicious code, vulnerabilities, or policy violations.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item bg-transparent border-secondary">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-transparent text-white" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#step2">
                                    Step 2: Static Content Analysis
                                </button>
                            </h2>
                            <div id="step2" class="accordion-collapse collapse" data-bs-parent="#roadmapAccordion">
                                <div class="accordion-body text-white-50 small">
                                    Assets, metadata, and descriptions are scanned to ensure they meet ZAKA community standards.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item bg-transparent border-secondary">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-transparent text-white" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#step3">
                                    Step 3: QA Community Playtest
                                </button>
                            </h2>
                            <div id="step3" class="accordion-collapse collapse" data-bs-parent="#roadmapAccordion">
                                <div class="accordion-body text-white-50 small">
                                    A group of selected beta testers play and rate your game before it goes live.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item bg-transparent border-secondary">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-transparent text-white" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#step4">
                                    Step 4: Final Approval &amp; Release
                                </button>
                            </h2>
                            <div id="step4" class="accordion-collapse collapse" data-bs-parent="#roadmapAccordion">
                                <div class="accordion-body text-white-50 small">
                                    Upon approval, your game goes live on the ZAKA storefront and you start earning!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ===== DEVELOPERS DATABASE - DYNAMIC TABLE ===== -->
        <div class="card p-4 border-secondary shadow mb-4">
            <div class="row align-items-center mb-3">
                <div class="col-md-6">
                    <h3 class="mb-0">Developer Registry</h3>
                    <small class="text-white-50">Data loaded dynamically from MySQL database</small>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-dark table-hover table-striped align-middle mb-0">
                    <thead class="table-primary">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Studio</th>
                            <th>Specialty</th>
                            <th>Experience</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php renderDevelopersWithActions($devsArray); ?>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- ===== REGISTER NEW DEVELOPER FORM ===== -->
        <div class="card p-4 border-secondary shadow">
            <h4 class="mb-3">Register a New Developer</h4>
            <form action="developer.php" method="POST">
                <div class="row g-3">
                    <div class="col-md-3">
                        <label for="dev-name" class="form-label">Full Name</label>
                        <input type="text" id="dev-name" name="name" class="form-control bg-transparent text-white border-secondary"
                            placeholder="e.g. Ali Al-Rashdi" required>
                    </div>
                    <div class="col-md-3">
                        <label for="dev-studio" class="form-label">Studio / Company</label>
                        <input type="text" id="dev-studio" name="studio"
                            class="form-control bg-transparent text-white border-secondary"
                            placeholder="e.g. Muscat Games" required>
                    </div>
                    <div class="col-md-3">
                        <label for="dev-specialty" class="form-label">Specialty</label>
                        <input type="text" id="dev-specialty" name="specialty"
                            class="form-control bg-transparent text-white border-secondary" placeholder="e.g. 2D Art"
                            required>
                    </div>
                    <div class="col-md-2">
                        <label for="dev-exp" class="form-label">Experience</label>
                        <input type="text" id="dev-exp" name="experience" class="form-control bg-transparent text-white border-secondary"
                            placeholder="e.g. 2 Years" required>
                    </div>
                    <div class="col-md-1 d-flex align-items-end">
                        <button type="submit" name="add_developer" class="btn btn-primary w-100">Add</button>
                    </div>
                </div>
            </form>
        </div>
    </main>

    <?php include 'footer.php'; ?>
</body>
</html>

</body>

</html>
