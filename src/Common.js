export default class Common
{
    static setDebug(debug)
    {
        Common.debug = debug;
    }

    static addExclamationMark(a)
    {
        if (Common.debug) {
            console.log("Func call done: " + a);
        }
        return a + "!";
    }

    static reverseArray(newArray)
    {
        if (Common.debug) {
            console.log("Back into the array: " + newArray.join(" "));
        }
        return newArray.reverse();
    }

    static done(reversedArray)
    {
        if (Common.debug) {
            console.log("Reversed array: " + reversedArray.join(" "));
        }
        return reversedArray;
    }
}
