module.exports = class validate {
    constructor(arg) {
        console.log(arg);
    }


    /**
     * Validate inputs from form
     * @param {array} matrix 
     */
    search(matrix) {
        // searches string in matrix if found returns the position, direction and length
        
        var allD = [
            [0, 1],
            [1, 1],
            [1, 0],
            [1, -1],
            [0, -1],
            [-1, -1],
            [-1, 0],
            [-1, 1]
        ];


        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        for (var z = 0; z < alphabet.length; z++) {

            let string = alphabet[z] + alphabet[z] + alphabet[z] + alphabet[z]
            var length = string.length;
            var rows = matrix.length;
            var cols = matrix[0].length;

            string = string.toUpperCase();

            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    if (string[0] == matrix[i][j][0]) {
                        for (var k = 0; k < 8; k++) {
                            if (
                                i + allD[k][0] * length >= 0 &&
                                i + allD[k][0] * length <= rows &&
                                j + allD[k][1] * length >= 0 &&
                                j + allD[k][1] * length <= cols
                            ) {
                                var chars = "";
                                for (var l = 0; l < length; l++) {
                                    chars += matrix[i + allD[k][0] * l][j + allD[k][1] * l][0];
                                }
                                if (chars == string.toUpperCase()) {

                                    return [[i, j], allD[k], length];
                                }
                            }
                        }
                    }
                }
            }



        }
        return -1;
    }



};

