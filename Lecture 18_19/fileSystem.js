var fs = require('fs');


/*fs.writeFileSync("file1.txt", "This is aditional content", null, function (err) {
    console.log(err?.message);
});
//fs.closeSync();


var fss = require('fs');

fss.appendFile("file1.txt", "\nThis is aditional content", null, function (err) {
    console.log(err?.message);
});*/

/*fs.readFile("file1.txt", null, (error, data) => {

    console.log(data.toString());
});*/

fs.open("file1.txt", "r+", (error, fd) => {
    console.log(fd);

    fs.read(fd, (error, data) => {
        console.log(data.toString())
    })
})