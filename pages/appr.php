<?php
/**
 * pages/appr.php
 * Application Programming Projects detail page.
 * Shows carousel of images/videos, description, and GitHub link per project.
 */
require_once '../includes/db_connection.php';
require_once '../includes/functions.php';

$page_title = 'APPR – Application Programming Projects';
$projects   = getProjectsByCategory('APPR');
?>
<?php include '../includes/header.php'; ?>

<section class="section proj-section--appr">
    <div class="section-container">

        <div class="proj-section-header">
            <div class="proj-section-icon"><i class="fas fa-code"></i></div>
            <div>
                <h2 class="section-title">APPR</h2>
                <p class="section-subtitle">Application Programming Projects</p>
            </div>
        </div>
        <div class="roman-divider"></div>

        <div class="projects-detailed-grid">
            <?php foreach ($projects as $project):
                /* Get media from project_media table; fall back to image_path */
                $media = getProjectMedia($project['id']);
                if (empty($media) && !empty($project['image_path'])) {
                    $media = [['media_path' => $project['image_path'], 'media_type' => 'image', 'caption' => $project['title']]];
                }
            ?>

            <div class="project-detailed-card">

                <!-- Media carousel -->
                <div class="project-media-carousel">
                    <?php if (!empty($media)): ?>
                    <div class="carousel-main">
                        <?php foreach ($media as $i => $item): ?>
                        <div class="carousel-item <?php echo $i === 0 ? 'active' : ''; ?>">
                            <?php if ($item['media_type'] === 'image'): ?>
                                <img src="../<?php echo htmlspecialchars($item['media_path']); ?>"
                                     alt="<?php echo htmlspecialchars($item['caption'] ?? $project['title']); ?>">
                            <?php else: ?>
                                <div class="video-container">
                                    <video width="100%" controls>
                                        <source src="../<?php echo htmlspecialchars($item['media_path']); ?>" type="video/mp4">
                                    </video>
                                </div>
                            <?php endif; ?>
                        </div>
                        <?php endforeach; ?>
                    </div>

                    <?php if (count($media) > 1): ?>
                    <div class="carousel-nav">
                        <button class="carousel-prev" onclick="changeSlide(this, -1)"><i class="fas fa-chevron-left"></i></button>
                        <button class="carousel-next" onclick="changeSlide(this,  1)"><i class="fas fa-chevron-right"></i></button>
                    </div>
                    <div class="carousel-indicators">
                        <?php foreach ($media as $i => $item): ?>
                            <span class="indicator <?php echo $i === 0 ? 'active' : ''; ?>"
                                  onclick="goToSlide(this, <?php echo $i; ?>)"></span>
                        <?php endforeach; ?>
                    </div>
                    <?php endif; ?>
                    <?php endif; ?>
                </div>

                <!-- Project info -->
                <div class="project-detailed-content">
                    <h3><?php echo htmlspecialchars($project['title']); ?></h3>

                    <?php if (!empty($project['overview'])): ?>
                    <div class="project-overview">
                        <h4>Project Overview</h4>
                        <p><?php echo nl2br(htmlspecialchars($project['overview'])); ?></p>
                    </div>
                    <?php endif; ?>

                    <div class="project-description">
                        <h4>Description</h4>
                        <p><?php echo nl2br(htmlspecialchars($project['description'])); ?></p>
                    </div>

                    <?php if (!empty($project['technologies'])): ?>
                    <div class="project-tech-section">
                        <h4>Technologies Used</h4>
                        <div class="project-tech">
                            <?php foreach (explode(', ', $project['technologies']) as $t): ?>
                                <span class="tech-tag"><?php echo htmlspecialchars(trim($t)); ?></span>
                            <?php endforeach; ?>
                        </div>
                    </div>
                    <?php endif; ?>

                    <!-- Action buttons: GitHub + Live link -->
                    <div class="project-action">
                        <?php if (!empty($project['github_url'])): ?>
                        <a href="<?php echo htmlspecialchars($project['github_url']); ?>"
                           target="_blank" rel="noopener" class="btn-github">
                            <i class="fab fa-github"></i> View on GitHub
                        </a>
                        <?php endif; ?>
                        <?php if (!empty($project['project_link'])): ?>
                        <a href="../<?php echo htmlspecialchars($project['project_link']); ?>"
                           class="btn-gold">
                            View Project <i class="fas fa-arrow-right"></i>
                        </a>
                        <?php endif; ?>
                    </div>

                </div>
            </div><!-- /project-detailed-card -->

            <?php endforeach; ?>
        </div>

    </div>
</section>

<script>
/* Shared carousel logic for all detail pages */
function changeSlide(btn, dir) {
    const carousel = btn.closest('.project-media-carousel');
    const items     = carousel.querySelectorAll('.carousel-item');
    const dots      = carousel.querySelectorAll('.indicator');
    let cur = [...items].findIndex(i => i.classList.contains('active'));
    let next = (cur + dir + items.length) % items.length;
    items[cur].classList.remove('active');
    items[next].classList.add('active');
    if (dots.length) { dots[cur].classList.remove('active'); dots[next].classList.add('active'); }
}
function goToSlide(dot, idx) {
    const carousel = dot.closest('.project-media-carousel');
    const items     = carousel.querySelectorAll('.carousel-item');
    const dots      = carousel.querySelectorAll('.indicator');
    let cur = [...items].findIndex(i => i.classList.contains('active'));
    items[cur].classList.remove('active');
    items[idx].classList.add('active');
    dots[cur].classList.remove('active');
    dots[idx].classList.add('active');
}
</script>

<?php include '../includes/footer.php'; ?>