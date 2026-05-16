<?php
/**
 * CV Projects Page
 */
require_once '../includes/db_connection.php';
require_once '../includes/functions.php';

$category = 'CV';
$projects = getProjectsByCategory($category);
$page_title = 'CV - Curriculum Vitae';
?>

<?php include '../includes/header.php'; ?>

<section class="section cv-section">
    <div class="section-container">
        <h2 class="section-title"><?php echo $category; ?></h2>
        <p class="section-subtitle">Curriculum Vitae & Additional Materials</p>
        <div class="roman-divider"></div>
        
        <div class="projects-detailed-grid">
            <?php foreach ($projects as $project): 
                $media = getProjectMedia($project['id']);
                // If no media in project_media table, use the image_path from projects
                if (empty($media) && !empty($project['image_path'])) {
                    $media = array(array(
                        'media_path' => $project['image_path'],
                        'media_type' => 'image',
                        'caption' => $project['title']
                    ));
                }
            ?>
                <div class="project-detailed-card">
                    <div class="project-media-carousel">
                        <?php if (!empty($media)): ?>
                            <div class="carousel-main">
                                <?php foreach ($media as $index => $item): ?>
                                    <div class="carousel-item <?php echo $index === 0 ? 'active' : ''; ?>" data-index="<?php echo $index; ?>">
                                        <?php if ($item['media_type'] === 'image'): ?>
                                            <img src="../<?php echo $item['media_path']; ?>" alt="<?php echo $item['caption'] ?? $project['title']; ?>">
                                        <?php else: ?>
                                            <video width="100%" height="300" controls>
                                                <source src="../<?php echo $item['media_path']; ?>" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video>
                                        <?php endif; ?>
                                    </div>
                                <?php endforeach; ?>
                            </div>

                            <?php if (count($media) > 1): ?>
                                <div class="carousel-nav">
                                    <button class="carousel-prev" onclick="changeCarousel(this, -1)"><i class="fas fa-chevron-left"></i></button>
                                    <button class="carousel-next" onclick="changeCarousel(this, 1)"><i class="fas fa-chevron-right"></i></button>
                                </div>
                                <div class="carousel-indicators">
                                    <?php foreach ($media as $index => $item): ?>
                                        <span class="indicator <?php echo $index === 0 ? 'active' : ''; ?>" onclick="goToSlide(this, <?php echo $index; ?>)"></span>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>
                        <?php endif; ?>
                    </div>

                    <div class="project-detailed-content">
                        <h3><?php echo $project['title']; ?></h3>
                        
                        <div class="project-overview">
                            <h4>Project Overview</h4>
                            <p><?php echo $project['overview']; ?></p>
                        </div>

                        <div class="project-description">
                            <h4>Description</h4>
                            <p><?php echo $project['description']; ?></p>
                        </div>

                        <div class="project-tech-section">
                            <h4>Technologies Used</h4>
                            <div class="project-tech">
                                <?php 
                                $techs = explode(', ', $project['technologies']);
                                foreach ($techs as $tech):
                                ?>
                                    <span class="tech-tag"><?php echo trim($tech); ?></span>
                                <?php endforeach; ?>
                            </div>
                        </div>

                        <?php if (!empty($project['project_link'])): ?>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<script>
function changeCarousel(button, direction) {
    const carousel = button.closest('.project-media-carousel').querySelector('.carousel-main');
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = button.closest('.project-media-carousel').querySelectorAll('.indicator');
    
    let currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
    let newIndex = (currentIndex + direction + items.length) % items.length;
    
    items[currentIndex].classList.remove('active');
    items[newIndex].classList.add('active');
    
    if (indicators.length > 0) {
        indicators[currentIndex].classList.remove('active');
        indicators[newIndex].classList.add('active');
    }
}

function goToSlide(indicator, index) {
    const carousel = indicator.closest('.project-media-carousel').querySelector('.carousel-main');
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = indicator.closest('.carousel-indicators').querySelectorAll('.indicator');
    
    let currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
    
    items[currentIndex].classList.remove('active');
    items[index].classList.add('active');
    
    indicators[currentIndex].classList.remove('active');
    indicators[index].classList.add('active');
}
</script>

<?php include '../includes/footer.php'; ?>
