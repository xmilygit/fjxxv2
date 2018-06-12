const router = require('koa-router')()
    // const mongoose = require('mongoose');
    // const Account = require('../models/Account');
const comm = require('../../BLL/comm')
    // const path = require('path');


router.prefix('/sys')

router.get('/', async(ctx, next) => {
    await ctx.render('sys/index', {
        title: '校务管理平台'
    })
})

router.get('/pages/accountmng', async(ctx, next) => {
    await ctx.render('sys/pages/Accountmng', {
        title: '用户管理'
    })
})

module.exports = router