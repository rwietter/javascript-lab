import configs from '../config/infos-extractor.json'
import * as fs from 'fs'
import pdfParse from 'pdf-parse'
import WordExtractor from "word-extractor"
import mammoth from 'mammoth'
const extractor = new WordExtractor();

const pdf = (path: string) =>
    new Promise<string>((resolve, reject) => {
        let dataBuffer = fs.readFileSync(path);
        pdfParse(dataBuffer).then((data: any) => {
            resolve(data.text)
        }).catch((error: any) => {
            reject(error)
        })
    })

const doc = (path: string) => new Promise<string>((resolve, reject) =>
    extractor
        .extract(path)
        .then((result: any) => resolve(result.getBody()))
        .catch((error: any) => reject(error))
)

const docx = (path: string) => new Promise<string>((resolve, reject) =>
    mammoth
        .extractRawText({ path })
        .then((result: any) => resolve(result.value))
        .catch((error: any) => reject(error))
)

const extractInfos = (text: string) =>
    new Promise
        (resolve => {
            let email, name, birthday, zipcode, phone, marital_status, state, years
            email = extractEmails(text)[0]
            name = extractName(text, email)
            let { firstname, lastname } = separateNames(name)
            birthday = extractBirthday(text)
            zipcode = extractZipcode(text)
            phone = extractPhone(text)
            years = extractYears(text)
            marital_status = extractMaritalStatus(text)
            state = extractState(text)
            let data = { email, name, firstname, lastname, birthday, zipcode, phone, years, marital_status, state }
            resolve(data)
        })

const extractEmails = (text: string) => {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

const extractName = (text: string, email: string): string => {
    let name: string
    configs.names_indicators.map((item: string) => {
        var regexp = new RegExp(`${item}*([^\n\r]*)`, 'gi')
        let nome_regex = regexp.exec(text)
        let nome_regex_2
        if (nome_regex) {
            nome_regex_2 = /^(.*?)\s{3}/gi.exec(nome_regex[1])
            if (nome_regex_2)
                name = nome_regex_2[1]
            else
                name = nome_regex[1]
        }
    })



    //se não achou vai procurar pelo email
    if (!name && email) {
        let search_word = email.substring(0, email.lastIndexOf("@"))
        let names_regex = new RegExp(`([A-Z][A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,})(?: [a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+){1,4}`, 'g')
        let names = []
        let run = true
        //array of possible names
        do {
            let reg = names_regex.exec(text)
            if (reg)
                names.push(reg[0])
            else
                run = false
        } while (run)

        //loop for match with email
        for (var i = 0; i < names.length; i++) {
            var item = names[i]
            let hits = 0
            for (var x = 0; x < search_word.length; x++) {
                let search = new RegExp(search_word.substring(x, x + 3), 'gi')
                if (search.exec(item))
                    hits++
            }
            if (hits >= 2) {
                name = item;
                break;
            }
        }
    }

    if (name)
        name = name.replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, "");

    name = name.toLowerCase();
    name = name.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); })
    return name
}

const separateNames = (name: string): { firstname: string, lastname: string } => {
    var firstname: string = name.split(' ').slice(0, -1).join(' ');
    var lastname: string = name.split(' ').slice(-1).join(' ');
    return { firstname, lastname }
}

const extractBirthday = (text: string): string => {
    let birthday = /(([0-9]{2}\/[0-9]{2}\/[0-9]{4})|([0-9]{4}-[0-9]{2}-[0-9]{2}))/g.exec(text)
    return birthday ? birthday[0] : null
}

const extractZipcode = (text: string): string => {
    let zipcode = /[^0-9][0-9]{5}-[0-9]{3}[^0-9]/gi.exec(text)
    return zipcode ? zipcode[0] : null
}

const extractPhone = (text: string): string => {
    let phone = /((\()?[0-9]{2}(\))?(\s)?)([0-9]{4,5})(\s)?(-)?[0-9]{3,4}/.exec(text)
    return phone ? phone[0] : null
}

const extractYears = (text: string): number => {
    let years = /([0-9]{1,2}).( anos)/gi.exec(text)
    if (!years)
        return null
    years = /[0-9]{1,2}/g.exec(years[0])
    return years ? parseInt(years[0]) : null
}

const extractMaritalStatus = (text: string): string => {
    let { marital_status: marital_status_list } = configs
    let marital_status: string
    for (var i = 0; i < marital_status_list.length; i++) {
        const item = marital_status_list[i]
        let ms_regex = new RegExp(item, 'gi')
        marital_status = ms_regex.exec(text).toString()
        if (marital_status) {
            marital_status = marital_status[0]
            break;
        }
    }
    return marital_status
}

const extractState = (text: string): string => {
    let state_regex = /[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ][A-Z]{2}[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/g.exec(text)
    if (!state_regex)
        return null

    let state = configs.brazilian_states.filter((item: string) => {
        return state_regex[0].toLowerCase() == item
    })

    return state[0]
}

export default { pdf, doc, docx, extractInfos }