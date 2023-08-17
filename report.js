const fs = require('fs/promises');
function printReport(pages){
    const sortedPages = sortPages(pages)
    for(const sortPage of sortedPages){
        const url = sortPage[0];
        const hits = sortPage[1];
        const cont=`url: ${url}, hits: ${hits}\n`
        addFile(cont)
        // console.log(`Found ${hits} links to page:${url}`);
    }
}
async function addFile(cont){
    try{
      await fs.appendFile('output.txt',cont)
  }catch(err){
    console.log(err);
  }
}
function sortPages(pages){
    pagesArr = Object.entries(pages)
    pagesArr.sort((a,b)=>{
        aHits = a[1]
        bHits = b[1]
        return b[1]-a[1];
    })
    return pagesArr
}
module.exports = {
    sortPages,
    printReport
};