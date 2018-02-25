module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 != 0) {
        return false;
    }
    var N = str.length / 2;

    for (var n = 0; n < N; n++) {

        for (var i = 0; i < bracketsConfig.length; i++) {

            var bracketType = bracketsConfig[i][0] + bracketsConfig[i][1];

            while (str.indexOf(bracketType) >= 0) {

                str = str.replace(bracketType, '');

            }
        }
    }
    if (str == '') {
        return true;
    }
    else {
        return false;
    }

}