// ===========================================================================
// API SIMULADA: TASA DEL DÓLAR SEGÚN EL BANCO CENTRAL DE VENEZUELA (BCV)
// ===========================================================================
// Este archivo simula una API que devuelve la tasa del dólar en Venezuela según
// el BCV. Devuelve un valor estático basado en información reciente (64.74 VES/USD
// al 7 de marzo de 2025, según posts en X). Tu equipo de desarrollo puede
// reemplazar esto con una API real más adelante.
// ===========================================================================

/**
 * Simula una llamada a una API para obtener la tasa del dólar del BCV.
 * @returns {Promise<Object>} - Promesa que resuelve con la tasa del dólar.
 */
function getExchangeRate() {
    return new Promise((resolve) => {
        // Simulación de una respuesta de API
        setTimeout(() => {
            resolve({
                success: true,
                date: "2025-03-07",
                rate: 64.74, // Tasa del BCV según posts recientes en X
                currency: "VES/USD"
            });
        }, 500); // Simula un retraso de red de 500ms
    });
}

// Exportar la función para usarla en otros archivos
// Esto es compatible con entornos que usan módulos (puedes ajustar según tu setup)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getExchangeRate };
} else {
    window.getExchangeRate = getExchangeRate;
}
