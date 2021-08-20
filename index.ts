import { fetchMonsters } from "./integrations.ts";
import { processMonster, writeToFile } from "./utils.ts";

let [filePath, url] = Deno.args;

filePath = filePath ?? "./monsters.json";
url = url ?? "https://monster-service.dndbeyond.com/v1/Monster";

const monsters = await fetchMonsters(url);
console.log("processing monsters...");
const processedMonsters = monsters.map(processMonster);
console.log("done.");
writeToFile(filePath, processedMonsters);
