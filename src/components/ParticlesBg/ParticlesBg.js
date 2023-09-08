import React from 'react';
import ParticlesBg from 'particles-bg';

let config = {
    num: [1, 1],
    rps: 0.3,
    radius: [10, 20],
    life: [4, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "all", // all or center or {x:1,y:1,width:100,height:100}
    color: ["#00ffee", "#7200ff"],
    cross: "dead", // cross or bround
    random: 10,  // or null,
    g: 2,    // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    }
  };

const Particles= () => {
    return (
      <>
        <div></div>
        <ParticlesBg type="custom" config={config} bg={true} />
      </>
    )
}

export default Particles;