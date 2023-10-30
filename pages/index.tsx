import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import axios from "axios";
import classNames from "classnames/bind";
import Logo from "@/components/Logo";
import styles from "@/styles/main.module.css";
import {FeedItem, feedSchema} from "@/schemas/inoreader";
import heroBg from "@/images/hero.jpg";
import { collection, getDocs, query, where, or} from "firebase/firestore"; 
import gameTrackDB from '@/data/gameTrack';
import getGameTrackUserId from '@/helpers/getGameTrackUserId';
import Canvas from '@/components/Canvas';
import { Game, GameState, Status, gameSchema } from '@/schemas/gametrack';

const cx = classNames.bind(styles);

interface HomePageProps {
    latestReadings: FeedItem[]
    games: Game[]
}

export default function Home({latestReadings, games}: HomePageProps) {
    return (
        <>
            <Head>
                <title>@adrgautier</title>
                <meta name="description" content="I am a Front-End web developer."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.bunny.net"/>
                <link href="https://fonts.bunny.net/css?family=outfit:300,600,900&display=swap" rel="stylesheet"/>
            </Head>
            <main>
                <div className={cx('hero')}>
                    <Image className={cx('heroBg')} src={heroBg} alt="" placeholder={"blur"} quality={70} priority />
                    <Logo/>
                    <div className={cx('heroGradient')}/>
                </div>
                <div className={cx('section', 'resume')}>
                    <h1>Hello 👋 </h1>
                    <p>I'm Adrien, a <strong className={cx('text-gradient gradient1')}>front-end</strong> web engineer
                        based in Bordeaux.</p>
                    <p>Please take a look at some of my work on <Link
                        className={cx('text-gradient', 'gradient2')}
                        href="https://github.com/adrgautier">GitHub</Link> or read my articles on <Link
                        className={cx('text-gradient', 'gradient3')}
                        href="https://blog.adrgautier.co">Hashnode</Link>.
                    </p>
                </div>
                <div className={cx('section', 'readings')}>
                    <h2>My latest readings</h2>
                    <ul>{latestReadings.slice(0, 5).map((reading) => (
                        <li key={reading.url}>
                            <Link href={reading.url}>{reading.title}</Link>&nbsp;-&nbsp;
                            <time
                                dateTime={reading.date_published}>{reading.date_formated}</time>
                        </li>
                    ))}</ul>
                </div>
                <Canvas games={games} />
            </main>
            <footer>
                Made with <Link href="https://nextjs.org">Next</Link> — Illustrations made with <Link
                href="https://stability.ai/blog/stable-diffusion-public-release">Stable Diffusion</Link>
            </footer>
        </>
    )
}

const SERVICE_LIST = 'HuURE4djtumtm2GzXS8d';
const COLLECTION_LIST = '3vjOzfDNeUWSLjULX7UU';


export async function getStaticProps() {
    //const response = await axios.get("https://www.inoreader.com/stream/user/1005545242/tag/user-broadcasted/view/json");
    //const feed = feedSchema.parse(response.data);
    const feed = { items: [] };

    const collectionGamesCollection = collection(gameTrackDB, `users/${getGameTrackUserId()}/lists/${COLLECTION_LIST}/games`);
    const collectionGamesQuery = query(collectionGamesCollection, or(where("status", "==", Status.Playing), where("status", "==", Status.Completed), where("status", "==", Status.Finished), where("gameState", "==", GameState.Done), where("gameState", "==", GameState.Playing)));
    const collectionGamesDocs = await getDocs(collectionGamesQuery);

    const serviceGamesCollection = collection(gameTrackDB, `users/${getGameTrackUserId()}/lists/${SERVICE_LIST}/games`);
    const serviceGamesQuery = query(serviceGamesCollection, or(where("status", "==", Status.Playing), where("status", "==", Status.Completed), where("status", "==", Status.Finished), where("gameState", "==", GameState.Done), where("gameState", "==", GameState.Playing)));
    const serviceGamesDocs = await getDocs(serviceGamesQuery);


    let games: Game[] = []

    collectionGamesDocs.forEach(doc => {
        const data = doc.data();

        const result = gameSchema.safeParse(data);

        if(result.success) {      
            games.push(result.data);
        }
    });

    serviceGamesDocs.forEach(doc => {
        const data = doc.data();

        const result = gameSchema.safeParse(data);

        if(result.success) {      
            games.push(result.data);
        }
    });

    games.sort((a, b) => {
        return a.releaseDate.seconds > b.releaseDate.seconds ? -1 : 1;

    });

    console.log(games.map(({title, releaseYear}) => [title, releaseYear]))

    return {
        props: {
            latestReadings: feed.items,
            games
        }
    }
}