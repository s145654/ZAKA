<?php
function getNavbar($activePage) {
    $pages = [
        'index.php' => 'Home',
        'about.php' => 'About Us',
        'contact.php' => 'Contact',
        'developer.php' => 'Dev Portal',
        'store.php' => 'Store',
        'questionnaire.php' => 'Feedback',
        'calculate.php' => 'Calculator',
        'funpage.php' => 'Fun Page'
    ];
    
    echo '<nav class="navbar navbar-expand-lg navbar-dark sticky-top py-3">
            <div class="container">
                <a class="navbar-brand" href="index.php">
                    <img src="logo.png" alt="ZAKA Logo" width="60" height="60" class="me-2">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">';
    
    foreach ($pages as $url => $label) {
        $active = ($url == $activePage) ? 'active' : '';
        echo '<li class="nav-item"><a class="nav-link ' . $active . '" href="' . $url . '">' . $label . '</a></li>';
    }
    
    echo '      </ul>
                </div>
            </div>
        </nav>';
}
?>
