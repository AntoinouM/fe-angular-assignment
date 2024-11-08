export interface Hero {
    title: string,
    rating: number,
    vote_count: number,
    season_count: number | null,
    imageSource: string,
    date: number,
    description: string,
}