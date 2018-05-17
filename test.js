function sleep(second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(' enough sleep~');
        }, second);
    })
}

async function sleep2(second) {
    let intime = Date.now();
    console.log(`进入时间:${intime}`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let outtime = Date.now();
            console.log(`耗时${outtime-intime}`);
        }, second);
    })
}

function normalFunc() {
    console.log('normalFunc');
}
async function awaitDemo() {
    await normalFunc();
    console.log('something, ~~');
    let result = await sleep(2000);
    console.log(result); // 两秒之后会被打印出来
}

async function test() {
    console.log("begin...")
    sleep2(1000)
    await sleep2(10000)
    sleep2(5000)
    console.log("end...")
}
test();
//awaitDemo();