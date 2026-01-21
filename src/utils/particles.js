export const getParticleColor = (theme) => {
    if (theme === 'light') {
        return `rgba(37, 99, 235, ${Math.random() * 0.5 + 0.3})`;
    }
    return `rgba(59, 130, 246, ${Math.random() * 0.4 + 0.5})`;
};

export const getConnectionColor = (theme, opacity) => {
    if (theme === 'light') {
        return `rgba(37, 99, 235, ${Math.min(opacity, 0.6)})`;
    }
    return `rgba(59, 130, 246, ${Math.min(opacity, 1.0)})`;
};

export class Particle {
    constructor(canvasWidth, canvasHeight) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.color = null;
    }

    update(mouse, canvasWidth, canvasHeight) {
        if (mouse.x != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;
                this.x -= directionX;
                this.y -= directionY;
            }
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
    }

    draw(ctx, theme) {
        if (!this.color || Math.random() > 0.99) {
            this.color = getParticleColor(theme);
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

export const animateParticles = (ctx, canvasWidth, canvasHeight, particles, mouse, theme) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    particles.forEach(particle => {
        particle.update(mouse, canvasWidth, canvasHeight);
        particle.draw(ctx, theme);
    });

    if (canvasWidth >= 768) {
        const maxDist = 150;
        const maxDistSq = maxDist * maxDist;

        ctx.beginPath();

        for (let i = 0; i < particles.length; i++) {
            const a = particles[i];
            for (let j = i + 1; j < particles.length; j++) {
                const b = particles[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;

                if (Math.abs(dx) > maxDist || Math.abs(dy) > maxDist) continue;

                const distanceSq = dx * dx + dy * dy;

                if (distanceSq < maxDistSq) {
                    const distance = Math.sqrt(distanceSq);
                    let opacity = 0.25 * (1 - distance / maxDist);

                    if (mouse.x != null) {
                        const distToMouseX = a.x - mouse.x;
                        const distToMouseY = a.y - mouse.y;
                        if (Math.abs(distToMouseX) < mouse.radius && Math.abs(distToMouseY) < mouse.radius) {
                            const distToMouseSq = distToMouseX * distToMouseX + distToMouseY * distToMouseY;
                            if (distToMouseSq < mouse.radius * mouse.radius) {
                                opacity += 0.3;
                            }
                        }
                    }

                    ctx.strokeStyle = getConnectionColor(theme, opacity);
                    ctx.lineWidth = 1;
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                }
            }
        }

        ctx.stroke();
    }
};
