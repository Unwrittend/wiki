import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type FeatureItem = {
  title: string;
  imgUrl: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "D&D 5e",
    imgUrl: "/img/DnD-Emblem.png",
    description: (
      <>
        Dungeons and Dragons 5e has streamlined mechanics that make it easy for
        new players to join and focus on storytelling instead of number
        crunching.
      </>
    ),
  },
  {
    title: "Modified Sandbox",
    imgUrl: "/img/table_of_players.png",
    description: (
      <>
        The campaign features standalone adventures or "monster of the week"
        style encounters that are connected by an overarching plot or story.
      </>
    ),
  },
  {
    title: "West Marches-style",
    imgUrl: "/img/missions.png",
    description: (
      <>
        West Marches is designed to be flexible and accommodate a large number
        of players forming small groups each week. Players can join or leave the
        game as they wish, and the game can be run on a casual, drop-in basis.
      </>
    ),
  },
];

function Feature({ title, imgUrl, description }: FeatureItem) {
  const imageUrl = useBaseUrl(imgUrl);
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <img src={imageUrl} className={styles.featurePng} />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
