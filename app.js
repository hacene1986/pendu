//ciblage d'element
const keyword = document.getElementById('key');
const cache = document.getElementById('cache');
const image = document.getElementById('img');
//console.log(keyword);
let mots = [
    'salut', 'moi', 'monde', 'courage', 'film', 'mariage', 'voiture', 'musique'
]


//console.log(mots)

let motCache = '-';

let img = [
    '<img src="./img/pendu_0.jpg" />',
    '<img src="./img/pendu_1.jpg" />',
    '<img src="./img/pendu_2.jpg" />',
    '<img src="./img/pendu_3.jpg" />',
    '<img src="./img/pendu_4.jpg" />',
    '<img src="./img/pendu_5.jpg" />',
    '<img src="./img/pendu_6.jpg" />',
    '<img src="./img/pendu_7.jpg" />',
    '<img src="./img/pendu_8.jpg" />',
    '<img src="./img/pendu_9.jpg" />'
   
]


nb_mots = mots.length;
//console.log(nb_mots)


alea();

function alea()
{
	var nb_alea = Math.floor(Math.random() * nb_mots)
   console.log(mots[nb_alea])
    let lettre = mots[nb_alea].length;
    let repeat =  motCache.repeat(lettre);
    
    cache.innerHTML = repeat;

    for(let i=0 ;i<mots[nb_alea].length ;i++){
       mots[nb_alea][i]
    }
   
 //   return  mots[nb_alea]
 function generateWord(){
    keyword.addEventListener('keyup', e => {
      //  console.log(e.target.value);
       nb_erreur = 0;
        let word = e.target.value
        let m = repeat.split('')
        for(let i = 0; i<word.length; i++){
            let indexMots = mots[nb_alea].search(word[i])
           // console.log(indexMots)
            if(indexMots != -1){
                    m[indexMots] = word[i] 
            } else{
                
                let im = img[nb_erreur]
                nb_erreur++;
                image.innerHTML = im
            }
            cache.innerHTML = m.join('');
        }
       
    })
}
generateWord()
}






