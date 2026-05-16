<?php
/**
 * pages/ttt.php
 * Tech Talent Team Ter AA — Drone Challenge & Energy Challenge showcase.
 */
require_once '../includes/db_connection.php';
require_once '../includes/functions.php';

$page_title = 'TTT – Tech Talent Team';

$about   = getAboutMe();
$contact = getContactInfo();
?>
<?php include '../includes/header.php'; ?>

<section class="section proj-section--appr" style="background: linear-gradient(160deg, var(--navy-dark) 0%, #0d1b2a 100%);">
    <div class="section-container">

        <div class="proj-section-header">
            <div class="proj-section-icon"><i class="fas fa-robot"></i></div>
            <div>
                <h2 class="section-title">Tech Talent Team</h2>
                <p class="section-subtitle">Ter AA – Drone & Energy Challenge</p>
            </div>
        </div>
        <div class="roman-divider"></div>

        <!-- Two info cards side by side -->
        <div class="ttt-intro-grid">
            <!-- Card 1: Overview + Visit button -->
            <div class="ttt-card">
                <i class="fas fa-users ttt-card-icon"></i>
                <p class="ttt-card-title">Tech Talent Team</p>
                <p class="ttt-card-text">
                    The <strong>Tech Talent Team</strong> is a select group of students from ROC Ter AA chosen to 
                    represent the college at national and international technology competitions. 
                    Comprised of the most driven and skilled students across multiple disciplines, 
                    the team competes in challenges that test engineering, programming, design, and teamwork.
                </p>
                <div style="margin-top:1.5rem; text-align:center;">
                    <a href="https://techtalentteam.nl/" target="_blank" rel="noopener" class="btn-gold">
                        <i class="fas fa-external-link-alt"></i> Visit TechTalentTeam.nl
                    </a>
                </div>
            </div>

            <!-- Card 2: Roles & Contributions -->
            <div class="ttt-card">
                <i class="fas fa-crown ttt-card-icon"></i>
                <p class="ttt-card-title">Roles & Contributions</p>
                <ul class="ttt-roles-list">
                    <li><i class="fas fa-drone"></i> Drone Team – Main 3D Designer & Embedded Systems Engineer</li>
                    <li><i class="fas fa-microchip"></i> Drone Team – Co-Pilot</li>
                    <li><i class="fas fa-bolt"></i> International Energy Challenge – Participant (Avans / Ter AA)</li>
                    <li><i class="fas fa-award"></i> One of three students selected from entire college</li>
                </ul>
            </div>
        </div>

        <!-- Drone Challenge Section -->
        <div style="margin-top:4rem;">
            <div class="proj-section-header">
                <div class="proj-section-icon"><i class="fas fa-drone"></i></div>
                <div>
                    <h2 class="section-title" style="font-size:clamp(1.2rem, 3vw, 2rem);">Drone Challenge 2026</h2>
                    <p class="section-subtitle">5th Edition – Ter AA Representative</p>
                </div>
            </div>
            <div class="roman-divider"></div>

            <div class="projects-detailed-grid" style="grid-template-columns:1fr; max-width:1000px; margin:2rem auto 0;">
                <div class="ttt-detail-card">

                    <!-- Drone media — natural presentation -->
                    <div class="ttt-media-side">
                        <div class="carousel-main">
                            <div class="carousel-item active">
                                <img src="../assets/DroneTeam.jpg" alt="Drone Team Ter AA" class="ttt-media-img">
                            </div>
                            <div class="carousel-item">
                                <div class="video-container" style="background:#000;">
                                    <video width="100%" height="100%" controls style="max-height:360px;">
                                        <source src="../assets/DroneFlying.mp4" type="video/mp4">
                                    </video>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-nav">
                            <button class="carousel-prev" onclick="changeSlide(this, -1)"><i class="fas fa-chevron-left"></i></button>
                            <button class="carousel-next" onclick="changeSlide(this,  1)"><i class="fas fa-chevron-right"></i></button>
                        </div>
                        <div class="carousel-indicators">
                            <span class="indicator active" onclick="goToSlide(this, 0)"></span>
                            <span class="indicator" onclick="goToSlide(this, 1)"></span>
                        </div>
                    </div>

                    <!-- Drone Info -->
                    <div class="ttt-content-side">
                        <h3>Drone Challenge 2026</h3>

                        <div class="project-overview">
                            <h4>Overview</h4>
                            <p>
                                The Drone Challenge is a prestigious national competition where teams of students 
                                design, build, and race custom drones through complex obstacle courses. 
                                As one of only three students selected from the entire ROC Ter AA Techniek & ICT college,
                                I served as the <strong>Main 3D Designer</strong>, <strong>Embedded Systems Engineer</strong>, 
                                and <strong>Co-Pilot</strong> for the Ter AA drone team.
                            </p>
                        </div>

                        <div class="project-description">
                            <h4>My Contributions</h4>
                            <p>
                                Designed custom 3D-printed components using Autodesk Fusion to optimize the drone's 
                                aerodynamic performance and structural integrity. Developed and programmed the embedded 
                                flight systems using Arduino/C++, working in close collaboration with the pilot to 
                                fine-tune control algorithms and real-time sensor processing. The team's combined effort 
                                resulted in a competitive, high-performance racing drone that successfully navigated 
                                the challenge course.
                            </p>
                        </div>

                        <div class="project-tech-section">
                            <h4>Technologies & Tools</h4>
                            <div class="project-tech">
                                <span class="tech-tag">Autodesk Fusion</span>
                                <span class="tech-tag">Arduino</span>
                                <span class="tech-tag">C++</span>
                                <span class="tech-tag">3D Printing</span>
                                <span class="tech-tag">Embedded Systems</span>
                                <span class="tech-tag">Soldering</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Energy Challenge Section -->
        <div style="margin-top:4rem;">
            <div class="proj-section-header">
                <div class="proj-section-icon"><i class="fas fa-bolt"></i></div>
                <div>
                    <h2 class="section-title" style="font-size:clamp(1.2rem, 3vw, 2rem);">International Energy Challenge 2026</h2>
                    <p class="section-subtitle">Avans / Ter AA – Participant</p>
                </div>
            </div>
            <div class="roman-divider"></div>

            <div class="projects-detailed-grid" style="grid-template-columns:1fr; max-width:1000px; margin:2rem auto 0;">
                <div class="ttt-detail-card">

                    <!-- Energy media — natural presentation -->
                    <div class="ttt-media-side">
                        <img src="../assets/energyChallenge.jpg" alt="Energy Challenge 2026" class="ttt-media-img" style="position:absolute; inset:0; width:100%; height:100%;">
                    </div>

                    <!-- Energy Info -->
                    <div class="ttt-content-side">
                        <h3>International Energy Challenge</h3>

                        <div class="project-overview">
                            <h4>Overview</h4>
                            <p>
                                The International Energy Challenge is a collaborative competition organized by 
                                Avans University of Applied Sciences and ROC Ter AA, bringing together students 
                                from multiple institutions to solve real-world energy problems. Participants work 
                                in multidisciplinary teams to design and present innovative, sustainable energy 
                                solutions.
                            </p>
                        </div>

                        <div class="project-description">
                            <h4>Participation</h4>
                            <p>
                                Represented ROC Ter AA at the International Energy Challenge, collaborating with 
                                students across disciplines to develop technical solutions addressing modern energy 
                                challenges. The experience strengthened my ability to work under pressure, communicate 
                                across technical domains, and apply engineering principles to real-world sustainability problems.
                            </p>
                        </div>

                        <div class="project-tech-section">
                            <h4>Focus Areas</h4>
                            <div class="project-tech">
                                <span class="tech-tag">Sustainable Energy</span>
                                <span class="tech-tag">Problem Solving</span>
                                <span class="tech-tag">Team Collaboration</span>
                                <span class="tech-tag">Engineering Design</span>
                            </div>
                        </div>

                        <div class="project-action" style="margin-top:1rem;">
                            <a href="https://techtalentteam.nl/" target="_blank" rel="noopener" class="btn-outline" style="width:100%; justify-content:center;">
                                <i class="fas fa-external-link-alt"></i> Learn More at TechTalentTeam.nl
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Certificates Section -->
        <div style="margin-top:4rem;">
            <div class="proj-section-header">
                <div class="proj-section-icon"><i class="fas fa-certificate"></i></div>
                <div>
                    <h2 class="section-title" style="font-size:clamp(1.2rem, 3vw, 2rem);">Certificates & Achievements</h2>
                    <p class="ttt-section-subtitle">Recognition from the Tech Talent Team programs</p>
                </div>
            </div>
            <div class="roman-divider"></div>

            <div class="ttt-certs-grid">
                <?php 
                $certificates = getCertificates();
                $ttt_certs = array_filter($certificates, function($c) {
                    $t = strtolower($c['title']);
                    return strpos($t, 'drone') !== false || strpos($t, 'energy') !== false || strpos($t, 'talent') !== false;
                });
                foreach ($ttt_certs as $cert): 
                ?>
                <div class="certificate-item">
                    <i class="fas fa-certificate"></i>
                    <div class="certificate-body">
                        <span class="certificate-title"><?php echo htmlspecialchars($cert['title']); ?></span>
                        <span class="certificate-meta">
                            <?php echo htmlspecialchars($cert['issuer']); ?>
                            &nbsp;&middot;&nbsp;
                            <?php echo htmlspecialchars($cert['year']); ?>
                        </span>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>

    </div>
</section>

<script>
/* Shared carousel logic */
function changeSlide(btn, dir) {
    const carousel = btn.closest('.ttt-media-side, .project-media-carousel');
    const items     = carousel.querySelectorAll('.carousel-item');
    const dots      = carousel.querySelectorAll('.indicator');
    let cur = [...items].findIndex(i => i.classList.contains('active'));
    let next = (cur + dir + items.length) % items.length;
    items[cur].classList.remove('active');
    items[next].classList.add('active');
    if (dots.length) { dots[cur].classList.remove('active'); dots[next].classList.add('active'); }
}
function goToSlide(dot, idx) {
    const carousel = dot.closest('.ttt-media-side, .project-media-carousel');
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