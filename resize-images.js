const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageConfigs = [
    // Team member images
    { input: 'imgnew/author-image1.webp', output: 'imgnew/author-image1-optimized.webp', width: 300, height: 300 },
    { input: 'imgnew/author-image2.webp', output: 'imgnew/author-image2-optimized.webp', width: 300, height: 300 },
    { input: 'imgnew/author-image3.webp', output: 'imgnew/author-image3-optimized.webp', width: 300, height: 300 },
    { input: 'imgnew/author-image4.webp', output: 'imgnew/author-image4-optimized.webp', width: 300, height: 300 },
    
    // Course images
    { input: 'imgnew/courses-image1.webp', output: 'imgnew/courses-image1-optimized.webp', width: 400, height: 300 },
    { input: 'imgnew/courses-image2.webp', output: 'imgnew/courses-image2-optimized.webp', width: 400, height: 300 },
    { input: 'imgnew/courses-image3.webp', output: 'imgnew/courses-image3-optimized.webp', width: 400, height: 300 },
    { input: 'imgnew/courses-image4.webp', output: 'imgnew/courses-image4-optimized.webp', width: 400, height: 300 },
    { input: 'imgnew/courses-image5.webp', output: 'imgnew/courses-image5-optimized.webp', width: 400, height: 300 },
    
    // Testimonial images
    { input: 'imgnew/tst-image3.webp', output: 'imgnew/tst-image3-optimized.webp', width: 60, height: 60 },
    { input: 'imgnew/tst-image4.webp', output: 'imgnew/tst-image4-optimized.webp', width: 60, height: 60 },
    
    // Contact image
    { input: 'imgnew/contact-image.webp', output: 'imgnew/contact-image-optimized.webp', width: 400, height: 300 }
];

async function resizeImages() {
    for (const config of imageConfigs) {
        try {
            await sharp(config.input)
                .resize(config.width, config.height, {
                    fit: 'cover',
                    position: 'center'
                })
                .webp({ quality: 80 })
                .toFile(config.output);
            console.log(`Successfully resized ${config.input}`);
        } catch (error) {
            console.error(`Error resizing ${config.input}:`, error);
        }
    }
}

resizeImages(); 