
let form = document.getElementById('formulaire');
let table = document.getElementById('tables');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let montant = document.getElementById('montant');
let type = document.getElementById('type');
let date = document.getElementById('date');
// annuler la soumission du formulaire par defaut
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let Nom = fname.value;
    console.log('nom', Nom);

    let PreNom = lname.value;
    console.log('prenom', PreNom);

    let budget = parseInt(montant.value);
    console.log('montant', budget);

    let nature = type.value;
    console.log('nature', nature);

    let moment = date.value;
    console.log('moment', moment);
    let solde = 0; 
    // Mettez à jour le solde en fonction de l'opération
    if (nature === 'dépot') {
       
      solde = solde + budget;
  } else if (nature === 'retrait'){   
      solde = solde - budget;
  }
  let resultat = document.getElementById('resultat');
  // Affichez le solde actuel
  let actuel = document.createElement('h4')
  actuel.innerHTML = `Solde actuel : ${solde}`;
  resultat.appendChild(actuel);

    let ligne = document.createElement('tr');
    ligne.innerHTML = `<tr><td>${Nom}</td><td>${PreNom}</td><td>${budget}</td><td>${nature}</td><td>${moment}</td><tr/>`;
    table.appendChild(ligne);

    form.reset();
    
   
});

 
  

