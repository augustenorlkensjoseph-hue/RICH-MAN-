importer fs depuis "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(texte) {
  retour {
    texte : stylizedChar(texte),
    contextInfo: {
      externalAdReply: {
        titre : "Rich Man X bot",
        corps : "ð“†© ð ƒð ¢ð ð ¢ð ð šð ¥ ð ‚ð «ð žð ° ð Ÿ ð Ÿ'ð Ÿ' ð“†ª",
        vignette : fs.readFileSync("./database/RichX.jpg"),
        sourceUrl: "https://whatsapp.com",
        type de média : 1,
        renderLargerThumbnail: false
      }
    }
  }
}