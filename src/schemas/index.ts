import { z } from "astro/zod";
import { Prisma } from "../generated/prisma/client";
export const PlacesSchema = z.array(z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string(),
    avg_rating: z.union([
        z.number(),
        z.instanceof(Prisma.Decimal).transform((d) => d.toNumber()),
    ]),
    image: z.string(),
})
)

export const AvailabilitySchema = z.object({
    id: z.string(),
    isAvailable: z.boolean(),
    spotsAvailable: z.number(),
    message: z.string(),
})


export type Place = z.infer<typeof PlacesSchema>[number];
export type Availability = z.infer<typeof AvailabilitySchema>;