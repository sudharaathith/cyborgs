import React, { Component } from "react";

class ParticleSystem extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.particles = this.initializeParticles();
  }

  componentDidMount() {
    this.initializeCanvas();
    this.animate();
  }

  initializeCanvas() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.ctx = ctx;
  }

  initializeParticles() {
    const particles = [];
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    for (let i = 0; i < 5; i++) {
      particles.push(this.createRandomParticle(canvasWidth, canvasHeight));
    }

    return particles;
  }

  createRandomParticle(canvasWidth, canvasHeight) {
    return {
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: window.innerWidth < 600 ? 120 : 200,
      color: "rgba(153, 76, 0, 0.12)",
    };
  }

  animate() {
    const { ctx } = this;
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    this.particles.forEach((particle) => {
      this.drawParticle(particle);
      this.updateParticlePosition(particle, canvasWidth, canvasHeight);
    });

    requestAnimationFrame(this.animate.bind(this));
  }

  drawParticle(particle) {
    const { ctx } = this;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
    ctx.closePath();
  }

  updateParticlePosition(particle, canvasWidth, canvasHeight) {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > canvasWidth) {
      particle.vx *= -1;
    }
    if (particle.y < 0 || particle.y > canvasHeight) {
      particle.vy *= -1;
    }
  }

  render() {
    return (
      <canvas
        className="top-0 overflow-x-hidden left-0 blur-3xl w-screen h-screen fixed"
        ref={this.canvasRef}
      />
    );
  }
}

export default ParticleSystem;
