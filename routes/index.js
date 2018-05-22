const router = require('koa-router')()
const mongoose = require('mongoose');
const Account = require('../models/Account');


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
    var time=ctx.request.query.time
    /*
    try {
        var list = await mongoose.model('Account').findAll();
    } catch (err) {
        x(err)
    }
    
    console.log(list)
    */
    await mongoose.model('Account').sleep(time);
    await ctx.render('test', {
        title: 'test'
    })
})

async function t1(){
    var http=require('http');
    var intime=Date.now();

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

router.get('/test2',async(ctx,next)=>{
    var html=await t1()
    console.log(html) 
    await ctx.render('test',{
        title:"test",
        html:html
    })
})

module.exports = router