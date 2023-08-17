const {crawlPage} =require('./crawl.js');
const {printReport} = require('./report.js')
async function main(){
  if(process.argv.length<3){
    console.log("no website provided");
    process.exit(1);
  }
//   if(process.argv.length>3){
//     console.log("too many command line args");
//     process.exit(1);
//   }
//   for(const arg of process.argv){
//     console.log(arg);
//   }
  for(let i=2;i<process.argv.length;i++){
      var baseURL = process.argv[i];
  
  console.log(`starting crawl of ${baseURL}`);
  const pages =await crawlPage(baseURL,baseURL,{});
  for(const page of Object.entries(pages)){
    printReport(pages)
  }
  }
}
 main()