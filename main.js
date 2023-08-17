const {crawlPage} =require('./crawl.js');
const {printReport} = require('./report.js')
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
async function main(){
//   if(process.argv.length<3){
//     console.log("no website provided");
//     process.exit(1);
//   }
//   if(process.argv.length>3){
//     console.log("too many command line args");
//     process.exit(1);
//   }
//   for(const arg of process.argv){
//     console.log(arg);
//   }
   
   if(isMainThread){
    const urls = process.argv.slice(2);
   console.log(urls);
    urls.forEach(url=>{
        new Worker(__filename,{workerData:url})
    });
   }else{
    const url=workerData;  
  console.log(`starting crawl of ${url}`);
  const pages =await crawlPage(url,url,{});
  for(const page of Object.entries(pages)){
    printReport(pages)
  }
  }
}
 main()