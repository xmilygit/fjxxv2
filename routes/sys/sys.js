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



module.exports = router