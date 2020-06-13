const upCaseStr = obj => {
    try {
        console.log(obj.name.toUppersCase())
    } catch (e) {
        eBugs(e)
    }
}

const obj = {
    name: 'Luks',
}

upCaseStr(obj)
function eBugs(err) {
    throw 'perdeu playboy'
}
