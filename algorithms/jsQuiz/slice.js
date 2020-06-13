const myFunc = str => {
    if (str.length > 1) {
        return myFunc(str.slice(1))
    }

    return str
}

console.log(myFunc('Hello world')) // d
// ello world > llo world > lo world > o world >  world > world > orld > rld > rd > d
