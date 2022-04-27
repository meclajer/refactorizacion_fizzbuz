const fs = require("fs");

class Reader {

    static readJsonFile(filePath) {

        // Part 1 Read json file ===========================
        const rawdata = fs.readFileSync(filePath);
        const explorers = JSON.parse(rawdata);

        return explorers

    }

}

module.exports = Reader