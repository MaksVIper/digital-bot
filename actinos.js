const { Telegraf, Markup } = require('telegraf');
async function commandStart(ctx) {
    await ctx.replyWithPhoto(
        {source: 'sprites/start.jpeg'}, 
        {caption: `👋Привет, на связи <b>INFULL DIGITAL</b> - Ваш проводник в мир автоматизации и оптимизации бизнес-процессов.🚀\n
Увеличиваем обороты <b>до 1,5 млрд ₽</b> за счет интеграции CRM и роста эффективности вашего бизнеса! 🛰️\n
<b>Хотите увидеть, как это работает на практике?</b> Мы подготовили для Вас путешествие по нашим кейсам и решениям 😉 
Погнали покорять бизнес-вселенную!\n
📲 Хочешь на экскурсию, оставь контакты:`, 
            parse_mode: 'HTML',
            ...Markup.keyboard([
            Markup.button.contactRequest('👉 Записаться на экскурсию')
        ]).resize()},
    );
}

//1) Как интегрировать CRM на сложных рынках
async function integrateCrmComplex(bot, chatId) {
    await bot.telegram.sendPhoto(chatId,
        {source: 'sprites/1.jpeg'}, 
        {caption: `Итак, не отходим от сути. Мои <b>сообщения будут краткие и по делу.</b> Обойдемся без прелюдий, как говориться) 😎\n
👋На связи <b>Павел.</b> И сразу хочу подарить вам наш <b>кейс</b> про то, как мы оптимизировали работу <b>страхового агентства.</b> Дело непростое, <b>+20 сотрудников,</b> десятки <b>параллельных процессов,</b> терялось <b>до 30% рабочего времени на рутинные процессы,</b> которые можно было автоматизировать. 🤖.\n
<a href="https://telegra.ph/Kejs-Vnedrenie-CRM-Bitriks24-v-rabotu-strahovogo-agentstva-12-06">Ссылка на телеграф</a>`, 
            parse_mode: 'HTML',
            ...Markup.keyboard([
            Markup.button.contactRequest('👉 Записаться на экскурсию')
        ]).resize()},
    );
}

//2)  давайте мем, про то, что уже все потеряно и пропало, тут нужна ваша помощь, кота можно взять или еще что-то
async function lostAndGone(bot, chatId) {
    await bot.telegram.sendPhoto(chatId,
        {source: 'sprites/2.jpeg'}, 
        {caption: `<b>Hello, my friends!</b> Что там по автоматизации? Что выбрать, куда бежать… 🤔\n
Сэкономил вам время и сравнил всё в статье 📚. Все топ-CRM под <b>любой запрос и кошелек 💸.</b> Ну а мой выбор — вы знаете… 😉\n
<a href="https://www.infullbroker.ru/articles/luchshie-crm-sistemy-2024/">👉 Ссылка на статью</a>\n
А здесь <b>волшебная кнопка,</b> чтобы увидеть наяву, как работает <b>автоматизация компании</b> с оборотом <b>1,5 млрд. ₽. и ежегодным приростом +40% 🚀.</b>`, 
            parse_mode: 'HTML',
            ...Markup.keyboard([
            Markup.button.contactRequest('👉 Записаться на экскурсию')
        ]).resize()},
    );
}

//3)  КАРТИНКА С ФОТО КОМАНДЫ INFULL, сверху лого INFULL DIGITAL (фото маленькое, все в теме космоса)
async function infullDigital(bot, chatId) {
    await bot.telegram.sendPhoto(chatId,
        {source: 'sprites/3.jpeg'}, 
        {caption: `<b>Почему мы для себя выбрали CRM Битрикс24?🤔</b>
Я тут могу долго описывать её преимущества, но скажу так: это <b>лидер рынка,</b> с хорошим базовым ПО и <b>топовыми доработками.</b>\n
Что я ценю в Битрикс24:\n
✅ Безопасность \n
✅ Быстрота интеграции \n
✅ Понятность \n
Кстати, про обновы на Б24 <b>я писал на РБК📰.</b>\n  
<a href="https://companies.rbc.ru/news/gcb6YTehRm/chto-smogut-crm-sistemyi-v-2025-godu-vzglyad-eksperta/">📌Здесь можно почитать.</a> \n
👉Здесь можно записаться на экскурсию по бизнес-процессам.
`, 
            parse_mode: 'HTML',
            ...Markup.keyboard([
            Markup.button.contactRequest('👉 Записаться на экскурсию')
        ]).resize()},
    );
}

//4)  КАРТИНКА С КОСМОНАВТОМ М ГАЛОЧКОЙ ЗОЛОТОГО ПАРТНЕРА _ лого INFULL DIGITAL
async function goldStatus(bot, chatId) {
    await bot.telegram.sendPhoto(chatId,
        {source: 'sprites/4.jpeg'}, 
        {caption: `Как получили статус Золотого партнера?\n

Короче, статус мы свой подтвердили.😎 <b>Золотой партнер Битрикс24 — это:</b> \n
✅ Тестирование спецов \n
✅ Наличие своих разработчиков и интеграторов \n
✅ Обратная связь (выше 4,5 баллов) от партнеров, которые прошли с нами автоматизацию \n

<b>Итог</b> — статус есть. Галочку поставили ✔️. Клиенты довольны, мы тоже.😏 Короче, мы Золотые партнеры! 🏆\n

А вот <b>волшебная кнопка,</b> чтобы увидеть наяву, как работает <b>автоматизация</b> компании с оборотом <b>1,5 млрд. ₽. и ежегодным приростом +40% 🚀.</b>
`, 
            parse_mode: 'HTML',
            ...Markup.keyboard([
            Markup.button.contactRequest('👉 Записаться на экскурсию')
        ]).resize()},
    );
}

//5)  Мем с чуваком который разбрасывает деньги баксы
async function memeStatus(bot, chatId) {
    await bot.telegram.sendPhoto(chatId,
        {source: 'sprites/5.jpeg'}, 
        {caption: `<b>Как компании теряют деньги на CRM? Зачем вам CRM?</b>\n
<b>63%</b> тех, кто оплатил лицензию, решают на этом остановиться. Купили, сказали сотрудникам <b>пользоваться</b> — занавес! \n
Дальше — саботаж, увольнения, цифры и <b>net profit</b> все тот же 💸!\n <b>Собственник плачет в сторонке 😢.</b>\n

📌<b>Рассказал про ошибки интеграции</b> <a href="https://www.infullbroker.ru/articles/oshibki-pri-vnedrenii-crm/">здесь</a> .\n 

<b>Спойлер:</b> можно всё сделать <b>без слез и саботажа</b> 🚫.\n
👉Здесь можно посмотреть, как это работает у нас! 
`, 
            parse_mode: 'HTML',
            ...Markup.keyboard([
            Markup.button.contactRequest('👉 Записаться на экскурсию')
        ]).resize()},
    );
}

//6)  Мем взять и вставить лого инфулл, вставить тот же текст, что на картинке
async function commandUp(bot, chatId) {
    await bot.telegram.sendPhoto(chatId,
        {source: 'sprites/6.jpeg'}, 
        {caption: `<b>Почему сотрудники бойкотируют автоматизацию?</b>\n
Каждый собственник бизнеса должен понять одну простую вещь: <b>вы и сотрудники находитесь по разные стороны баррикад.</b> 💥\n
<b>Интересные факты:</b>\n
<b>Выработка сотрудника в Китае</b> составляет <b>+250%</b> 📈:\n платишь ему <b>14 000$ в год,</b> а работает он на <b>35 000$.</b>\n
В <b>Америке</b> этот показатель — 1,3% 🇺🇸.\n
В <b>России</b> — всего <b>0,7%</b> 🇷🇺.\n
<b>Что это значит?</b>\n
Каждый месяц вы платите <b>200 К</b>, а сотрудник работает на <b>160 К.</b> 💰\n
<b>Как изменить ситуацию?</b>\n
<b>Хочешь, чтобы сотрудники работали лучше? Плати больше!</b> 💸
Это основная позиция <b>наемного сотрудника,</b> если что…\n`, 
            parse_mode: 'HTML',
            ...Markup.keyboard([
            Markup.button.contactRequest('👉 Записаться на экскурсию')
        ]).resize()},
    );
}

//7)  Космонавт + лого РБК + ЛОГО IN FULL Digital
async function badCustomerRbk(bot, chatId) {
    await bot.telegram.sendPhoto(chatId,
        {source: 'sprites/7.jpeg'}, 
        {caption: `👨‍💻<b>Про отвратительных продажников и силу РБК</b>\n
Если я вас еще не догрел своей большой речью про нужность и важность, <b>вот несколько моих статей с РБК:</b>\n
 <b>К теме повышение продаж:</b> первичных и повторных. <a href="https://companies.rbc.ru/news/IERtegWIoy/kak-najti-i-postroit-tochki-kasaniya-s-klientom/">Как найти и построить точки касания с клиентом 📈</a>\n
 <b>Про отвратительных продажников и боль всего рынка. СПОЙЛЕР❗</b>, если там болит, не значит, что причина боли именно в этом месте 🤔. <a href="https://companies.rbc.ru/news/MvVX9rarkZ/kak-najti-kompetentnogo-spetsialista-po-prodazham/">Как найти компетентного специалиста по продажам</a>\n
 <b>Про дефицит кадров.</b> И как с этим работать: <a href="https://companies.rbc.ru/news/jfUvOMF59A/defitsit-kadrov-v-rossii-kak-samostoyatelno-vyirastit-tsennyih-spetsialistov/\\">Дефицит кадров в России: как самостоятельно вырастить ценных специалистов 👥</a>\n
<b>Встречаемся на экскурсии 🤝.</b> Здесь записываемся ✅ . 
`, 
            parse_mode: 'HTML',
            ...Markup.keyboard([
            Markup.button.contactRequest('👉 Записаться на экскурсию')
        ]).resize()},
    );
}

module.exports = {commandStart, integrateCrmComplex, lostAndGone, infullDigital, goldStatus, commandUp, badCustomerRbk, memeStatus};