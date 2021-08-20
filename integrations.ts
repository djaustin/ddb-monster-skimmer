import { Monster, MonsterApiResponse } from "./types.ts";

export const fetchMonsters = async (url: string) => {
  console.log("fetching monsters from API...");
  const res = await fetch(`${url}?take=100`);

  const json: MonsterApiResponse = await res.json();

  let resCount = json.data.length;
  let monsters: Monster[] = json.data;
  let downloaded = resCount;
  while (resCount > 0) {
    const request = `${url}?take=100&skip=${downloaded}`;
    const res = await fetch(request);
    const monsterResult = ((await res.json()) as MonsterApiResponse).data;
    resCount = monsterResult.length;
    downloaded += resCount;
    monsters = [...monsters, ...monsterResult];
    console.log(`fetched ${downloaded} monsters`);
  }
  console.log("done.");
  return monsters;
};
