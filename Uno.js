for (i=1; i<11; i++){
    v=Math.floor(Math.random()*(11-5)+5);
    r=Math.floor(Math.random()*(37-0)+0);
    n=v*r;
    t=n%36;
    console.log("Jugada número: ", i);
    console.log("Valor generado: ", Math.floor(n));
    console.log("Posición del número: ", Math.floor(t));
}