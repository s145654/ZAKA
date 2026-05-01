<?php
// Class representing a Game record
class Game {
    public $id;
    public $title;
    public $genre;
    public $price;
    public $rating;

    public function __construct($id, $title, $genre, $price, $rating) {
        $this->id = $id;
        $this->title = $title;
        $this->genre = $genre;
        $this->price = $price;
        $this->rating = $rating;
    }
}

// Class representing a Developer record
class Developer {
    public $id;
    public $name;
    public $studio;
    public $specialty;
    public $experience;

    public function __construct($id, $name, $studio, $specialty, $experience) {
        $this->id = $id;
        $this->name = $name;
        $this->studio = $studio;
        $this->specialty = $specialty;
        $this->experience = $experience;
    }
}

// Function to render a table of games
function renderGamesTable($games) {
    if (empty($games)) {
        echo '<tr><td colspan="5" class="text-center text-muted">No games found.</td></tr>';
        return;
    }

    foreach ($games as $game) {
        echo '<tr>';
        echo '<td>' . htmlspecialchars($game->id) . '</td>';
        echo '<td>' . htmlspecialchars($game->title) . '</td>';
        echo '<td>' . htmlspecialchars($game->genre) . '</td>';
        echo '<td>' . htmlspecialchars($game->price) . '</td>';
        echo '<td><span class="badge bg-warning text-dark">' . htmlspecialchars($game->rating) . '</span></td>';
        echo '</tr>';
    }
}

// Function to render a table of developers
function renderDevelopersTable($developers) {
    if (empty($developers)) {
        echo '<tr><td colspan="5" class="text-center text-muted">No developers found.</td></tr>';
        return;
    }

    foreach ($developers as $dev) {
        echo '<tr>';
        echo '<td>' . htmlspecialchars($dev->id) . '</td>';
        echo '<td>' . htmlspecialchars($dev->name) . '</td>';
        echo '<td>' . htmlspecialchars($dev->studio) . '</td>';
        echo '<td>' . htmlspecialchars($dev->specialty) . '</td>';
        echo '<td>' . htmlspecialchars($dev->experience) . '</td>';
        echo '</tr>';
    }
}
?>
