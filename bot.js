import { config } from "dotenv";
config();
import TelegramBot from "node-telegram-bot-api";

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Import command
import torrent2magnet from "./bot/commands/torrent2magnet.js";
import start from "./bot/start.js";

//Use command
torrent2magnet(bot);
start(bot);