<?php
require_once 'db_connect.php';
require_once 'navbar.php';
require_once 'classes.php';

$message = "";
$messageType = "";

// Handle Insert Operation
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['add_game'])) {
    $id = "G" . rand(100, 999);
    $title = $conn->real_escape_string($_POST['title']);
    $genre = $conn->real_escape_string($_POST['genre']);
    $price = $conn->real_escape_string($_POST['price']);
    $rating = (float)$_POST['rating'];

    $sql = "INSERT INTO games (id, title, genre, price, rating) VALUES ('$id', '$title', '$genre', '$price', $rating)";
    if ($conn->query($sql) === TRUE) {
        $message = "Game '$title' added successfully!";
        $messageType = "success";
    } else {
        $message = "Error: " . $conn->error;
        $messageType = "danger";
    }
}

// Handle Search (Select Query)
$search_query = "";
if (isset($_GET['search'])) {
    $search_query = $conn->real_escape_string($_GET['search']);
}

$sql = "SELECT * FROM games";
if (!empty($search_query)) {
    $sql .= " WHERE title LIKE '%$search_query%' OR genre LIKE '%$search_query%'";
}
$result = $conn->query($sql);

$gamesArray = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $gamesArray[] = new Game($row['id'], $row['title'], $row['genre'], $row['price'], $row['rating']);
    }
}
?>
<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Store | ZAKA</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="styles.css" rel="stylesheet">
</head>
<body>
    <header>
        <?php getNavbar('store.php'); ?>
    </header>

    <main class="container py-5">
        <h1 class="text-center mb-2">Digital Armory</h1>
        <p class="text-center text-white-50 mb-5">Browse our curated game collection</p>

        <!-- ===== FEATURED GAME CARDS (Bootstrap Grid Layout) ===== -->
        <div class="row g-4 mb-5">
            <!-- Game Card 1 -->
            <div class="col-md-4">
                <div class="card h-100 p-0 overflow-hidden border-secondary shadow">
                    <img src="https://i.ytimg.com/vi/adGdyCdvKz4/maxresdefault.jpg" alt="Fortnite"
                        class="img-fluid w-100" style="height:180px; object-fit:cover;">
                    <div class="p-3">
                        <h5 class="mb-1">Fortnite</h5>
                        <span class="badge bg-success mb-2">Free</span>
                        <p class="small text-white-50 mb-3">Ultimate Battle Royale experience with 350M+ players.</p>
                        <button class="btn btn-primary btn-sm w-100" data-bs-toggle="modal" data-bs-target="#fortniteModal">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
            <!-- Game Card 2 -->
            <div class="col-md-4">
                <div class="card h-100 p-0 overflow-hidden border-secondary shadow">
                    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202508/2119/0e5bd9c98da8bbb6a35bec372b40dcb15093a50970c3b478.jpg"
                        alt="Call of Duty" class="img-fluid w-100" style="height:180px; object-fit:cover;">
                    <div class="p-3">
                        <h5 class="mb-1">Call of Duty: Black Ops 7</h5>
                        <span class="badge bg-warning text-dark mb-2">$49.99</span>
                        <p class="small text-white-50 mb-3">High-octane FPS action across diverse warzones.</p>
                        <button class="btn btn-primary btn-sm w-100" data-bs-toggle="modal" data-bs-target="#codModal">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
            <!-- Game Card 3 -->
            <div class="col-md-4">
                <div class="card h-100 p-0 overflow-hidden border-secondary shadow">
                    <img src="https://w0.peakpx.com/wallpaper/105/594/HD-wallpaper-video-game-minecraft.jpg"
                        alt="Minecraft" class="img-fluid w-100" style="height:180px; object-fit:cover;">
                    <div class="p-3">
                        <h5 class="mb-1">Minecraft</h5>
                        <span class="badge bg-warning text-dark mb-2">$29.99</span>
                        <p class="small text-white-50 mb-3">Build infinite worlds and unleash your creativity.</p>
                        <button class="btn btn-primary btn-sm w-100" data-bs-toggle="modal" data-bs-target="#minecraftModal">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <?php if ($message): ?>
            <div class="alert alert-<?php echo $messageType; ?>"><?php echo $message; ?></div>
        <?php endif; ?>

        <!-- ===== GAMES DATABASE - DYNAMIC TABLE ===== -->
        <div class="card p-4 border-secondary shadow mb-4">
            <div class="row align-items-center mb-3">
                <div class="col-md-6">
                    <h3 class="mb-0">Games Database</h3>
                    <small class="text-white-50">Data loaded dynamically from MySQL database</small>
                </div>
                <div class="col-md-6">
                    <form action="store.php" method="GET" class="input-group">
                        <input type="text" name="search" class="form-control bg-transparent text-white border-secondary" 
                               placeholder="Search by title or genre..." value="<?php echo htmlspecialchars($search_query); ?>">
                        <button type="submit" class="btn btn-outline-secondary text-white border-secondary">Search</button>
                    </form>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-dark table-hover table-striped align-middle mb-0">
                    <thead class="table-primary">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php renderGamesTable($gamesArray); ?>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- ===== ADD NEW GAME FORM ===== -->
        <div class="card p-4 border-secondary shadow">
            <h4 class="mb-3">Add a New Game to the Database</h4>
            <form action="store.php" method="POST">
                <div class="row g-3">
                    <div class="col-md-4">
                        <label class="form-label">Game Title</label>
                        <input type="text" name="title" class="form-control bg-transparent text-white border-secondary" placeholder="e.g. Street Fighter 6" required>
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">Genre</label>
                        <input type="text" name="genre" class="form-control bg-transparent text-white border-secondary" placeholder="e.g. Fighting" required>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">Price</label>
                        <input type="text" name="price" class="form-control bg-transparent text-white border-secondary" placeholder="e.g. $39.99" required>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">Rating (1-5)</label>
                        <input type="number" name="rating" class="form-control bg-transparent text-white border-secondary" min="1" max="5" step="0.1" placeholder="4.5" required>
                    </div>
                    <div class="col-md-1 d-flex align-items-end">
                        <button type="submit" name="add_game" class="btn btn-primary w-100">Add</button>
                    </div>
                </div>
            </form>
        </div>
    </main>

    <!-- ===== BOOTSTRAP MODALS ===== -->
    <div class="modal fade" id="fortniteModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-dark text-white border-secondary">
                <div class="modal-header border-secondary">
                    <h5 class="modal-title">Fortnite</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p><strong>Genre:</strong> Battle Royale</p>
                    <p><strong>Price:</strong> Free to Play</p>
                    <p><strong>Rating:</strong> 4.8 / 5 ⭐</p>
                    <p><strong>Downloads:</strong> 350M+</p>
                    <p>Drop in, build up, and outlast 100 players in the most popular Battle Royale game in the world.</p>
                </div>
                <div class="modal-footer border-secondary">
                    <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <a href="#" class="btn btn-primary">Play Now (Free)</a>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="codModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-dark text-white border-secondary">
                <div class="modal-header border-secondary">
                    <h5 class="modal-title">Call of Duty: Black Ops 7</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p><strong>Genre:</strong> First Person Shooter (FPS)</p>
                    <p><strong>Price:</strong> $49.99</p>
                    <p><strong>Rating:</strong> 4.5 / 5 ⭐</p>
                    <p><strong>Downloads:</strong> 100M+</p>
                    <p>Experience high-octane combat across diverse, cinematic warzones. The most intense CoD yet.</p>
                </div>
                <div class="modal-footer border-secondary">
                    <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <a href="calculate.php" class="btn btn-warning">Calculate Price</a>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="minecraftModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-dark text-white border-secondary">
                <div class="modal-header border-secondary">
                    <h5 class="modal-title">Minecraft</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p><strong>Genre:</strong> Sandbox / Adventure</p>
                    <p><strong>Price:</strong> $29.99</p>
                    <p><strong>Rating:</strong> 4.9 / 5 ⭐</p>
                    <p><strong>Downloads:</strong> 238M+</p>
                    <p>Explore infinite worlds and build everything from simple homes to grand castles. Survival or creative — you decide.</p>
                </div>
                <div class="modal-footer border-secondary">
                    <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <a href="calculate.php" class="btn btn-warning">Calculate Price</a>
                </div>
            </div>
        </div>
    </div>

    <?php include 'footer.php'; ?>
</body>
</html>
