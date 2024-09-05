import { config } from 'dotenv';
config();
if (1 > (process.env.HYPIXEL_KEY || '').length) throw new Error('No API Key specified!');
