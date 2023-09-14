v=Math.floor(Math.random()*(11-5)+5);
a=Math.floor(Math.random()*(360-0)+0);
n=v*a;
t=Math.floor(Math.random()*(360-0)+0)*v+a;
console.log("Posicion inicial: ", a);
console.log("Valor generado: ", t);
console.log("Angulo final: ", t%360);