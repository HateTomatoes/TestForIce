const _ = require('lodash');


let objArray = [
    {a:'123', b:'456'},
    {a:'456', b:'456'},
    {a:'789', b:'456'},
    {a:'000', b:'456'},
];

async function test(){
    return '123';
}

async function runYun(){
    let xx = await test();
    console.log('xx = ', xx);
}

runYun().catch(()=>{

});
// let xxx = _.keyBy(objArray, 'a');
// console.log('xxx = ', xxx);