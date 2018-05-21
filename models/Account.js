var mongoose = require('mongoose');
var AccountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, '用户名必须填写']
    },
    password: String,
    gender: String,
    pid: {
        type: String,
        validate: {
            validator: function(v) {
                return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(v)
            },
            message: '身份证不符合要求'
        }
    },
    wxopenid: String,
    binders: [{
        _fk: mongoose.SchemaTypes.ObjectId,
        bindertype: String
    }]
}, { collection: 'Account' });

AccountSchema.statics.findAll = async function() {
    let intime = Date.now();
    console.log(`进入时间:${intime}`)
    //let list = await this.model('Account').find({});
    //var list1 = await this.find({});
    var p = await this.model('Account').find({}).exec()
    let outtime=Date.now();
    console.log( await sleep(10000))
    console.log(`耗时时间:${outtime-intime}`)
    return p;
}

async function sleep(time) {
    return new Promise(resolve=>{
        setTimeout(() => {
        console.log(`休息了:${time}`)
        resolve(`休息了:${time}`)
    }, time);
})
}

mongoose.model('Account', AccountSchema);