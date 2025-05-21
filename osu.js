import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { LegacyClient } from 'osu-web.js';
const { osuApiKey } = require("./config.json")

export const osuAPI = new LegacyClient(osuApiKey);
