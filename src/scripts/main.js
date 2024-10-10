AOS.init();

// Definir momento do evento
const eventDate = new Date("Nov 11, 2024 08:00:00");
const eventTimeStamp = eventDate.getTime();

const countDown = setInterval(function() {
    // Definir momento atual
    const now = new Date();
    const nowTimeStamp = now.getTime();

    // Definir tempo até o evento
    const timeUntilEvent = eventTimeStamp - nowTimeStamp;

    // Definir constantes auxiliares
    const minInMS = 1000 * 60;
    const hoursInMs = minInMS * 60;
    const daysInMs = hoursInMs * 24;

    // Quebra o tempo em unidades
    const daysUntilEvent = Math.floor(timeUntilEvent / daysInMs);
    const hoursUntilEvent = Math.floor((timeUntilEvent % daysInMs) / hoursInMs);
    const minUntilEvent = Math.floor((timeUntilEvent % hoursInMs) / minInMS);
    const secUntilEvent = Math.floor((timeUntilEvent % minInMS) / 1000);

    // Substituir conteúdo do span
    document.getElementById('contador').innerHTML = `A Mila vai fazer 11 anos em ${daysUntilEvent} dias ${hoursUntilEvent} horas ${minUntilEvent} minutos e ${secUntilEvent} segundos`;

    // Apresentar mensagem caso o evento já tenha ocorrido 


}, 1000);
