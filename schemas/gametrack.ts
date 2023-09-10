import * as z from 'zod';

export const gameSchema = z.object({
    playedPosition: z.number(),
    completion: z.number(),
    genres: z.array(z.string()),
    criticRating: z.number(),
    platforms: z.array(z.string()),
    developer: z.string(),
    id: z.string(),
    listPosition: z.number(),
    summary: z.string(),
    videos: z.array(z.string()),
    gameID: z.number(),
    bannerURL: z.string(),
    fireID: z.string(),
    title: z.string(),
    hoursPlayed: z.number(),
    releaseYear: z.number(),
    screenshots: z.array(z.string()),
    userRating: z.number(),
    posterURL: z.string(),
    ownedPlatform: z.string(),
    releasePosition: z.number(),
    publisher: z.string(),
    releaseDate: z.object({ seconds: z.number(), nanoseconds: z.number() })
  });

export type Game = z.infer<typeof gameSchema>;