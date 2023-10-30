import classNames from "classnames/bind";
import styles from "./Canvas.module.css";
import { Game } from "@/schemas/gametrack";

const cx = classNames.bind(styles);

const tileNames = [
  "main",
  "big1",
  "big2",
  "big3",
  "big4",
  "med1",
  "med2",
  "med3",
  "med4",
  "med5",
  "med6",
  "med7",
  "med8",
  "sml1",
  "sml2",
  "sml3",
  "sml4",
  "sml5",
  "sml6",
];

type CanvasProps = {
  games: Game[];
};

export default function Canvas({ games }: CanvasProps) {
  const tiles = tileNames.map((tileName, index) => {
    const game = games[index];

    return {
      tileName,
      imageUrl: game?.posterURL,
      alt: game?.title,
      title: game?.title,
    };
  });

  return (
    <div className={cx("section")}>
      <div className={cx("canvas")}>
        <div className={cx("bg")}>
          {tiles.map((tile) => (
            <div className={cx("wrapper", tile.tileName)}>
              <div className={cx("tile")} title={tile.title}>
                <img src={tile.imageUrl} alt={tile.alt} />
              </div>
            </div>
          ))}
        </div>
        {tiles.map((tile) => (
          <div className={cx("wrapper", tile.tileName)}>
            <div className={cx("tile")} title={tile.title}>
              <img src={tile.imageUrl} alt={tile.alt} />
            </div>
          </div>
        ))}
        <div className={cx("shutter")} />
      </div>
    </div>
  );
}
