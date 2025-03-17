document.addEventListener("DOMContentLoaded", function() {
    function initScrollRevealSlider() {
        const sliderSection = document.querySelector('.slider-section');
        const preContainer = document.querySelector('.main_slider-pre-container');
        const leftContent = document.querySelector('.main_slider-pre-left-content');
        const imageContainer = document.querySelector('.main_slider-pre-image-container');
        const bgImage = imageContainer?.querySelector('img');
        const mainSlider = document.querySelector('.main_slider.section-gallery');
        const revealImage = document.querySelector('.reveal-image');

        let imageRevealed = false;

        window.addEventListener('scroll', function() {
            const rect = sliderSection.getBoundingClientRect();
            const progress = -rect.top / (rect.height - window.innerHeight);

            // Check if the screen width is less than 600px (mobile version)
            const isMobile = window.innerWidth < 600;

            // Handle mobile version separately to prevent transparency
            if (isMobile) {
                mainSlider.style.opacity = 1; // Keep the slider white on mobile
            } else {
                if (progress >= 0 && progress <= 1) {
                    // Show/hide pre-slider and main slider with opacity change
                    preContainer.style.opacity = Math.max(1 - progress * 2, 0);
                    mainSlider.style.opacity = Math.min(progress * 2, 1);
                }
            }

            if (rect.top < 250 && parseInt(document.documentElement.scrollTop) < 1500) {
                imageContainer.style.display = 'block';
                leftContent.style.display = 'block';
                leftContent.style.top = `${rect.top + 500}px`;
            } else {
                imageContainer.style.display = 'none';
                leftContent.style.display = 'none';
            }

            if (progress >= 0 && progress <= 1) {
                // Image animation
                const newTop = Math.min(50 + progress * 50, 100);
                imageContainer.style.top = `${newTop}%`;
                bgImage.style.opacity = 0.5 + progress * 0.5;

                // Reveal/hide main slider image
                if (progress >= 0.5 && !imageRevealed) {
                    bgImage.style.opacity = '0';
                    revealImage.style.opacity = '1';
                    imageRevealed = true;
                } else if (progress < 0.5 && imageRevealed) {
                    bgImage.style.opacity = '1';
                    revealImage.style.opacity = '0';
                    imageRevealed = false;
                }
            }
        });
    }

    initScrollRevealSlider();

    // Main Slider Functionality
function initMainSlider() {
    const slider = document.querySelector('.main_slider.gallery-slider');
    if(!slider) return;
    const slides = slider.querySelectorAll('.main_slider_slide');
    const dots = document.querySelectorAll('.main_slider_dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;

    let slideImages = {
          0: { 0: './images/website_images/Kenji_Explained_2.png', 1: './video/Kenji_X1_Rescue_Zone_3_small.gif', 2: './video/Lab_Application_1.gif' },
          1: { 0: './images/kenji-x1/plata.PNG', 1: './images/website_images/current-draw.jpg', 2: './images/website_images/lagos-techie-kenji-x1.jpg' },
          2: { 0: './video/tower_rotation_smallsize.gif', 1: './images/kenji-x1/kenji-tower-modules.png', 2: './images/kenji-x1/Kenji-1_Tower_Module.jpg' },
          3: { 0: './video/arm_craning_1.gif', 1: './video/arm_craning_5.gif', 2: './video/arm_craning_3_small.gif' },
          4: { 0: './images/website_images/s-l400.jpg', 1: './images/website_images/RaspberryPi_B+.jpg', 2: './images/website_images/roboDrive_Hardware_Enclosure.png' },
          5: { 0: './video/kenji_positioning_2.gif', 1: './images/kenji-x1/Kenji-6.jpg', 2: './images/kenji-x1/Graph3.jpg' },
    };

    if (slider.classList.contains('geo-lab-slider')) {
        slideImages = {
            0: { 0: './images/geo-lab/1024x1024.PNG', 1: './video/Alex_diagn.gif', 2: './images/geo-lab/DSC_0750.JPG' },
            1: { 0: './video/geo-lab-gif-slide-2.gif', 1: './images/geo-lab/IMG_0776.JPG', 2: './images/geo-lab/IMG_0373.JPG' },
            2: { 0: './images/geo-lab/Vibrations_2.bmp', 1: './images/geo-lab/Vibrations_3.bmp', 2: './images/geo-lab/Vibrations_1.bmp' },
            // 3: { 0: './images/geo-lab/DSC_0750.JPG', 1: './images/geo-lab/DSC_0754.JPG', 2: './images/geo-lab/DSC_0755.JPG' },
            // 4: { 0: './images/geo-lab/DSC_0751.JPG', 1: './images/geo-lab/DSC_0744.JPG', 2: './images/geo-lab/DSC_0754.JPG' },
            // 5: { 0: './images/geo-lab/DSC_0744.JPG', 1: './images/geo-lab/DSC_0755.JPG', 2: './images/geo-lab/DSC_0754.JPG' }
        }
    }

    if (slider.classList.contains('torch-slider')) {
        slideImages = {
            0: { 0: './images/torch/slider/torch-slider-image-1.png', 1: './images/torch/slider/torch-slider-image-2.png', 2: './images/torch/slider/torch-slider-image-3.png' },
            1: { 0: './images/torch/slider/torch-slider-image-4.png', 1: './images/torch/slider/torch-slider-image-5.png', 2: './images/torch/slider/torch-slider-image-6.png' },
            2: { 0: './images/torch/slider/torch-slider-image-7.png', 1: './images/torch/slider/torch-slider-image-8.png', 2: './images/torch/slider/torch-slider-image-9.png' },
            3: { 0: './images/torch/slider/torch-slider-image-10.png', 1: './images/torch/slider/torch-slider-image-11.png', 2: './video/arm_craning_1.gif' },
            4: { 0: './images/torch/slider/torch-slider-image-13.png', 1: './images/torch/slider/torch-slider-image-14.png', 2: './images/torch/slider/torch-slider-image-15.png' },
            5: { 0: './video/kenji_positioning_2.gif', 1: './images/torch/slider/torch-slider-image-17.png', 2: './images/torch/slider/torch-slider-image-18.png' },
            6: { 0: './images/torch/slider/torch-slider-image-19.png', 1: './images/torch/slider/torch-slider-image-20.png', 2: './images/torch/slider/torch-slider-image-21.png' },
            7: { 0: './images/torch/torch-slider-image-1.png', 1: './images/torch/Mixed_Reality_Goggles.jpg', 2: './images/website_images/Remote_Control.jpg' }
        }
    }

    if (slider.classList.contains('robo-drive-slider')) {
        slideImages = {
            0: { 0: './images/kenji-x1/Baseboard_opened_v61_2.png', 1: './images/robodrive/probe_stream_setup_2.gif', 2: './images/robodrive/robodrive-slider-farm.png' },
            1: { 0: './images/robodrive/battery_pack.jpg', 1: './images/robodrive/roboDrive_Module.jpg', 2: '' },
            2: { 0: './images/robodrive/robodrive-slder-3-field-tested.PNG', 1: './video/Kenji_X1_3.gif', 2: './video/robodrive-slider-3-3.gif' },
            // 3: { 0: './images/torch/', 1: './images/torch/', 2: './images/torch/' },
            // 4: { 0: './images/torch/', 1: './images/torch/', 2: './images/torch/' },
            // 5: { 0: './images/torch/', 1: './images/torch/', 2: './images/torch/' }
        }
    }

    if (slider.classList.contains('mecha-arm-slider')) {
        slideImages = {
            0: { 0: './images/torch/Left_Mecha_Arm_version1_4cooopy.png', 1: './images/torch/arm_illustration-mecha-arm.jpg', 2: './video/right_mecha_arm.gif' },
            1: { 0: './images/torch/robot-servo.png', 1: './images/mecha-arm/Right_Mecha_Arm_version1 v63_kenji-x1.png', 2: './images/mecha-arm/mecha,arm image_2024-11-05_18-56-41.png' },
            2: { 0: './video/arm_craning_3_small.gif', 1: './video/arm_craning_5.gif', 2: './video/arm_craning_2.gif' },
            3: { 0: './images/mecha-arm/mecha-arm-slide-4-1.png', 1: './images/mecha-arm/mecha-arm-slide-4-2.png', 2: './video/kenji_positioning_2.gif' },
            4: { 0: './images/mecha-arm/Picture1.png', 1: './images/website_images/joystick.jpg', 2: './images/website_images/vr-googles.jpg' },
            5: { 0: './images/torch/', 1: './images/torch/', 2: './images/torch/' }
        }
    }
    function showSlide(index) {
        console.log('Showing slide:', index);
        slider.style.transform = `translateX(-${index * 100}%)`;
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        prevBtn.classList.toggle('inactive', index === 0);
        nextBtn.classList.toggle('inactive', index === slides.length - 1);

        if (slides[index]) {
            initializeTabs(slides[index]);
        } else {
            console.error('Slide not found at index:', index);
        }
    }

    function initializeTabs(slide) {
        const slideIndex = Array.from(slides).indexOf(slide);
        console.log('Initializing slide:', slideIndex);

        const tabs = slide.querySelectorAll('.information_block_tab');
        const tabContents = slide.querySelectorAll('.information_block_tab_content');
        const tabImage = slide.querySelector('.information_block_right img');

        if (!tabImage) {
            console.error('Image element not found for slide', slideIndex);
            return;
        }

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active', 'default-active'));
                tabContents.forEach(tc => tc.classList.remove('active'));
                
                tab.classList.add('active');
                tabContents[index].classList.add('active');
                
                // Update image
                if (slideImages[slideIndex] && slideImages[slideIndex][index]) {
                    tabImage.src = slideImages[slideIndex][index];
                }

                // Update content from data-content attribute
                const content = tab.getAttribute('data-content');
                if (content) {
                    tabContents[index].textContent = content;
                }
            });

            tab.addEventListener('mouseenter', () => {
                if (!tab.classList.contains('active')) tab.classList.remove('default-active');
            });

            tab.addEventListener('mouseleave', () => {
                if (!tab.classList.contains('active')) tab.classList.add('default-active');
            });
        });

        // Set default tab
        tabs[0].click();
    }

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Initialize tabs for all slides
    slides.forEach(initializeTabs);

    // Show initial slide
    showSlide(currentSlide);
}

    // Gallery Slider Functionality
    function initGallerySlider() {
        const gallerySlider = document.querySelector(".section-gallery .gallery-slider.down_slider");
        if (!gallerySlider) {
            console.error("Gallery slider not found");
            return;
        }

        const gallerySlides = gallerySlider.querySelectorAll(".slide");
        const galleryPrevSlideBtn = document.querySelector(".down_slider .prev-slide");
        const galleryNextSlideBtn = document.querySelector(".down_slider .next-slide");
        const gallerySlideInfo = gallerySlider.querySelectorAll(".slide-info p");
        
        if (!gallerySlides.length || !galleryPrevSlideBtn || !galleryNextSlideBtn || !gallerySlideInfo.length) {
            console.error("One or more gallery elements not found");
            return;
        }

        let galleryCurrentSlide = 0;

        function showGallerySlide(index) {
            gallerySlides.forEach((slide, i) => {
                slide.style.display = i === index ? "block" : "none";
                gallerySlideInfo[i].style.display = i === index ? "block" : "none";
            });

            galleryPrevSlideBtn.classList.toggle('inactive', index === 0);
            galleryNextSlideBtn.classList.toggle('inactive', index === gallerySlides.length - 1);
        }

        showGallerySlide(galleryCurrentSlide);

        galleryPrevSlideBtn.addEventListener("click", function() {
            if (galleryCurrentSlide > 0) {
                galleryCurrentSlide--;
                showGallerySlide(galleryCurrentSlide);
            }
        });

        galleryNextSlideBtn.addEventListener("click", function() {
            if (galleryCurrentSlide < gallerySlides.length - 1) {
                galleryCurrentSlide++;
                showGallerySlide(galleryCurrentSlide);
            }
        });
    }

    // Standalone Tabulation Block
    // function initStandaloneInfoBlock() {
    //     const infoBlock = document.querySelector('.information_block_section.standalone');
    //     if (!infoBlock) {
    //         console.error("Standalone information block not found");
    //         return;
    //     }

    //     const tabs = infoBlock.querySelectorAll('.information_block_tab');
    //     const tabContents = infoBlock.querySelectorAll('.information_block_tab_content');
    //     const image = infoBlock.querySelector('.information_block_right img');
    //     // const images = [
    //     //     './images/torch/TORCH_gen2_Render_A27.png',
    //     //     './images/kenji-x1/DSC_0763_smallsize.jpg',
    //     //     './images/kenji-x1/pcb-stack-inside-robodrive.png'
    //     // ];

    //     // const images = [
    //     //     './images/torch/TORCH_gen2_Render_A27copy.png',
    //     //     './images/torch/TORCH_gen1_mono3(3)copy.png',
    //     //     './images/torch/TORCH_gen1_sidecut.png'
    //     // ];

    //     function showTab(index) {
    //         tabs.forEach((tab, i) => {
    //             tab.classList.toggle('active', i === index);
    //         });
    //         tabContents.forEach((content, i) => {
    //             content.style.display = i === index ? 'block' : 'none';
    //         });
    //         if (image && images[index]) {
    //             image.src = images[index];
    //         }
    //     }

    //     tabs.forEach((tab, index) => {
    //         tab.addEventListener('click', () => showTab(index));
    //     });

    //     // Show the first tab by default
    //     showTab(0);
    // }

    // Initialize all components
    initScrollRevealSlider();
    initMainSlider();
    initGallerySlider();
    // initStandaloneInfoBlock();
});