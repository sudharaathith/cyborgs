import React, { Component } from 'react';

class ParticleSystem extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.particles = [];
    this.lines = [];
  }

  componentDidMount() {
    this.initializeCanvas();
    this.animate();
  }

  initializeCanvas() {
    const canvas = this.canvasRef.current;
    this.ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Add some particles to the system
    for (let i = 0; i < 5; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx:(Math.random() - 0.5)*2,
        vy:(Math.random() - 0.5)*2,
        radius: 200,
        color: 'rgba(153, 76, 0, .1)',
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    this.particles.forEach((particle) => {
      this.drawParticle(particle);
      this.updateParticlePosition(particle);
    });




    requestAnimationFrame(this.animate.bind(this));
  }

  areParticlesNear(particle1, particle2, distanceThreshold) {
    const dx = particle1.x - particle2.x;
    const dy = particle1.y - particle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < distanceThreshold;
  }

  drawLine(particle){
    this.particles.forEach((particle1) => {
        if( this.areParticlesNear(particle, particle1,70)){
            this.ctx.beginPath()
            this.ctx.strokeStyle = '#fff';
            this.ctx.moveTo(particle.x, particle.y);
            this.ctx.lineTo(particle1.x, particle1.y);
            this.ctx.stroke()
        }
    })
  }

  drawParticle(particle) {
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = particle.color;
    this.ctx.fill();
    this.ctx.closePath();
    // this.drawLine(particle);
  }

  updateParticlePosition(particle) {
    particle.x += particle.vx;
    particle.y +=particle.vy;

    if (particle.x < 0) particle.vx *= -1;
    if (particle.x > window.innerWidth) particle.vx *= -1;
    if (particle.y < 0) particle.vy *= -1;
    if (particle.y > window.innerHeight)  particle.vy *= -1;
  }



  render() {
    return <canvas className=' top-0 left-0 w-screen h-screen blur-3xl fixed ' ref={this.canvasRef} />;
  }
}

export default ParticleSystem;
