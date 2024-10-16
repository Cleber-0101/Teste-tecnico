//  descobrir qual interruptor controla as lâmpadas
function descobrirInterruptores() {
    const interruptores = {
        A: "Lâmpada 1",
        B: "Lâmpada 2",
        C: "Lâmpada 3"
    };

    console.log("Ligando o interruptor A por 10 minutos...");
    let statusLuzA = "ligada"; 
    let statusLuzB = "desligada"; 
    let statusLuzC = "desligada"; 

    console.log("Desligando o interruptor A...");
    statusLuzA = "desligada"; 

    console.log("Ligando o interruptor B...");
    statusLuzB = "ligada"; 

    console.log("Indo até a sala das lâmpadas...");

    console.log("Verificando as lâmpadas:");
    if (statusLuzB === "ligada") {
        console.log("A lâmpada ligada é a controlada pelo interruptor B.");
    }

    if (statusLuzA === "desligada") {
        console.log("A lâmpada desligada e quente é a controlada pelo interruptor A.");
    }

    if (statusLuzC === "desligada") {
        console.log("A lâmpada desligada e fria é a controlada pelo interruptor C.");
    }
}


descobrirInterruptores();
