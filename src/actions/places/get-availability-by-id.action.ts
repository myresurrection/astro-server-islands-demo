import { defineAction } from "astro:actions";
import { z } from "astro/zod";


export const getAvailabilityById = defineAction({
    accept: 'json',
    input: z.string(),

    handler: async (placeId) => {
        // Demorar la respuesta para simular una consulta a una base de datos o a una API externa
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const isAvailable = Math.random() > 0.5; // Genera un valor booleano aleatorio
        const spotsAvailable = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio de lugares disponibles entre 1 y 11

        let message = 'No hay espacios disponible';
        if (isAvailable) {
            message = (spotsAvailable > 1) ? `Hay ${spotsAvailable} espacios disponibles` : 'Solo queda 1 espacio disponible';
        }



        return { id: placeId, isAvailable, spotsAvailable, message };
    }

});