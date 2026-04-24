// assets.js

function generateWallpaperTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Create yellowed floral wallpaper
    ctx.fillStyle = '#f5f3e5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw floral pattern
    ctx.fillStyle = '#c2b280';
    for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * 512, Math.random() * 512, 30, 0, Math.PI * 2);
        ctx.fill();
    }

    // Add stains
    ctx.fillStyle = 'rgba(80, 80, 80, 0.5)';
    ctx.beginPath();
    ctx.arc(150, 100, 40, 0, Math.PI * 2);
    ctx.fill();

    return new THREE.Texture(canvas);
}

function generateFloorTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Create scratched dark linoleum
    ctx.fillStyle = '#4d4d4d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add scratches
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 5;
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * 512, Math.random() * 512);
        ctx.lineTo(Math.random() * 512, Math.random() * 512);
        ctx.stroke();
    }

    return new THREE.Texture(canvas);
}

function generateCeilingTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Create concrete with cracks
    ctx.fillStyle = '#b0b0b0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add cracks
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * 512, Math.random() * 512);
        ctx.lineTo(Math.random() * 512, Math.random() * 512);
        ctx.stroke();
    }

    return new THREE.Texture(canvas);
}

export { generateWallpaperTexture, generateFloorTexture, generateCeilingTexture };