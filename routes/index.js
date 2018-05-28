const router = require('koa-router')()
const mongoose = require('mongoose');
const Account = require('../models/Account');
const comm = require('../BLL/comm')
const path = require('path');


router.get('/', async(ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.get('/string', async(ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async(ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

router.get('/test', async(ctx, next) => {
    // var time=ctx.request.query.time
    // await mongoose.model('Account').sleep(time);
    // var acct=await mongoose.model('Account').myFind('5afc5c04831edaa8fadc9cd5')
    var acct = mongoose.model('Account')
    var acct2 = await acct.myFind({ 'username': '徐明', 'password': 'ad382994a0b58821324c1e4c30d700eca724d4dc' })
    console.log(acct2[0].username)
    await ctx.render('test', {
        title: 'test'
    })
})

router.get('/test3', async(ctx, next) => {
    var psw = comm.strtomd5("123123123");
    try {
        var json = await comm.xlstojsonfile(
            path.resolve(__dirname, '../public/all.xlsx'),
            path.resolve(__dirname, '../public/all.json'),
            "Sheet1"
        )
        console.log(json); 
    } catch (err) {
        console.log(err.message)
        
    }
    console.log(psw);
    await ctx.render('test', {
        title: 'test'
    })
})

async function t1() {
    var http = require('http');
    var intime = Date.now();

    return http.get("http://scratch.mit.edu/");
    /*
    return new Promise(function(resolve,reject){
        http.get("http://scratch.mit.edu/", (html) => {
            console.log('耗时:' + (Date.now() - intime));
            resolve(html)
        })
    });
    */
}

router.get('/test2', async(ctx, next) => {
    var html = await t1()
    console.log(html)
    await ctx.render('test', {
        title: "test",
        html: html
    })
})

module.exports = router