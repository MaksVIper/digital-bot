const {Telegraf, session, Markup} = require("telegraf");
const {commandStart, integrateCrmComplex, lostAndGone, infullDigital, goldStatus, memeStatus, commandUp, badCustomerRbk} = require("./actinos");
require('dotenv').config();
const bot = new Telegraf(process.env.TELEGRAM_TOKEN_EDU);
bot.use(session());
const cron = require('node-cron');
const Datastore = require('nedb');
const {post} = require("axios");
const leads = new Datastore({filename: 'leads'});
leads.loadDatabase();
bot.start(async (ctx) => {
    commandStart(ctx);
    console.log(ctx.chat.id);
    await leads.find({userId: ctx.from.id}, function (err, docs) {
        if (!docs.length) {
            leads.insert({userId : ctx.from.id, firstName: ctx.from?.first_name, lastName: ctx.from?.last_name, username: ctx.from?.username, stage: 1, final: false, lead: '', chatId: ctx.chat.id});
        }
    });
});

bot.command('manager', async (ctx) => {
    const targetBotUsername = 'infulldigital_chat_bot'; // Юзернейм другого бота, например: 'OtherBotBot'
    const message = await ctx.reply(
        'Нажмите на кнопку ниже, чтобы проконсультироваться:',
        Markup.inlineKeyboard([
            Markup.button.url('➡ Перейти к консультации', `https://t.me/${targetBotUsername}`)
        ])
    );
    setTimeout(() => {
        ctx.deleteMessage(message.message_id);
    }, 30000);
});
//*/1 * * * *'
/*cron.schedule('/1 * * * *', () => { // 9 часов UTC = 12 часов по Москве
    console.log(`Скрипт запущен в 12:00 по Москве`);
}, {
    scheduled: true,
    timezone: 'Europe/Moscow'
});*/
cron.schedule('0 9 * * *', () => { // 9 часов UTC = 12 часов по Москве
    cycleMessage();
}, {
    scheduled: true,
    timezone: 'Europe/Moscow'
});

function cycleMessage() {
    leads.find({final: false}, function (err, docs) {
        if (docs.length) {
            docs.map((value) => {
                if (value.stage === 1) {
                    integrateCrmComplex(bot, value.chatId);
                    leads.update({userId: value.userId}, { $set: {stage: 2} }, {upsert: false});
                } else if (value.stage === 2) {
                    lostAndGone(bot, value.chatId);
                    leads.update({userId: value.userId}, { $set: {stage: 3} }, {upsert: false});
                } else if (value.stage === 3) {
                    infullDigital(bot, value.chatId);
                    leads.update({userId: value.userId}, { $set: {stage: 4} }, {upsert: false});
                } else if (value.stage === 4) {
                    goldStatus(bot, value.chatId);
                    leads.update({userId: value.userId}, { $set: {stage: 5} }, {upsert: false});
                } else if (value.stage === 5) {
                    memeStatus(bot, value.chatId);
                    leads.update({userId: value.userId}, { $set: {stage: 6} }, {upsert: false});
                } else if (value.stage === 6) {
                    commandUp(bot, value.chatId);
                    leads.update({userId: value.userId}, { $set: {stage: 7} }, {upsert: false});
                } else if (value.stage === 7) {
                    badCustomerRbk(bot, value.chatId);
                    leads.update({userId: value.userId}, { $set: {final: true} }, {upsert: false});
                }
            })
        }
    });
}

bot.on('contact', async (ctx) => {
    const phoneNumber = ctx.message.contact.phone_number;
    const createLead = await post(`${process.env.API_URL}/rest/28735/${process.env.API_KEY}/crm.lead.add/`, {
        fields: {
            TITLE: `Заявка через тг бота infullDigital ${phoneNumber} ${ctx.from?.first_name} ${ctx.from?.last_name}`,
            NAME: ctx.from?.first_name,
            SECOND_NAME: '',
            LAST_NAME: ctx.from?.last_name,
            STATUS_ID: "NEW",
            CURRENCY_ID: "RUB",
            OPPORTUNITY: 0,
            SOURCE_DESCRIPTION: `Номер телефона: ${phoneNumber}`,
            SOURCE_ID: '263',
            OPENED: 'Y',
            ASSIGNED_BY_ID: '28735',
            PHONE: {
                'n0': {
                    VALUE: phoneNumber,
                    VALUE_TYPE: 'WORK'
                }
            },
        },
        params: {REGISTER_SONET_EVENT: "Y"},
    }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        maxRedirects: 1,
    }).then((response) => {
        leads.update({userId: ctx.from.id}, { $set: {final: true, lead: response.data?.result} }, {upsert: false});
        return true;
    }).catch((error) => {
        return false;
    });

    return createLead;
});



bot.launch();