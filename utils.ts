import { environments, monsterTypes, challengeRatings } from "./maps.ts";
import { Monster, ParsedMonster } from "./types.ts";

export const processMonster = (monster: Monster): any => ({
  ...monster,
  environments: monster.environments.map((id: number) => environments[id]),
  monsterType: monsterTypes[monster.typeId],
  challengeRating: challengeRatings[monster.challengeRatingId],
});

export const writeToFile = async (
  filePath: string,
  monsters: ParsedMonster[]
) => {
  console.log("writing results to", filePath);

  const encoder = new TextEncoder();
  await Deno.writeFile(
    filePath,
    encoder.encode(JSON.stringify(monsters, null, 2))
  );
};
