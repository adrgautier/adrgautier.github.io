import * as z from 'zod';

export enum Status {
  Collection = 'Collection', 
  Playing = 'A Now Playing', 
  Next = 'B Play Next', 
  Later = 'C Play Later', 
  Finished = 'Finished', 
  Completed = 'Completed', 
  Wanted ='Wanted'
}

const statusEnum = z.nativeEnum(Status);

export enum GameState {
  Abandoned = 5,
  Done = 4, // Finished & Abandoned
  Collection = 3,
  Next = 2, // 'C Play Later' & 'B Play Later'
  Playing = 1, // 'A Now Playing'
}
const gameStateEnum = z.nativeEnum(GameState);

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
    publisher: z.string().optional(),
    releaseDate: z.object({ seconds: z.number(), nanoseconds: z.number() }),
    status: statusEnum.optional(),
    gameState: gameStateEnum.optional()
  });

export type Game = z.infer<typeof gameSchema>;