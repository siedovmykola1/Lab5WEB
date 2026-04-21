import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Привіт, мій друже! Лабораторна №5 працює.');
});


app.listen(port, () => {
    console.log(`\n=========================================`);
    console.log(`🚀 Сервер запущено!`);
    console.log(`🔗 Посилання: http://localhost:${port}`);
    console.log(`=========================================\n`);
}).on('error', (err) => {
    console.error('Помилка при запуску сервера:', err);
});
