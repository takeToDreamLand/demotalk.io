const fs = require('fs')

fs.readFile('./SUMMARY.md', 'utf8', (err, str)=>{
    if (err) throw err;
    else {
        let regex = /\]\((.*?)\.md\)/g;
        console.log(regex);
        let results = str.match(regex);
        let urls = results.map((result) => {
            return result.replace(/[\(\)\]]|\.md/g,'')
        })
        fs.writeFileSync('./urls.json',JSON.stringify(urls), (err) => {
            console.log('Dumped news bits to file');})
    }
    
})
