let formulaire = document.getElementById("formulaire");
let tache = document.getElementById("tache");

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  //recup le ul par l'id
  let liste = document.getElementById("ul");

  console.log(tache.value);

  //recup l'input tache
  let Newli = document.createElement("li");

  let value = tache.value;

  Newli.textContent = value;

  liste.appendChild(Newli);
  //créer un li avec createElement
  let newbutton = document.createElement("button");

  newbutton.innerHTML = "Supprimer";
  //recup la valeur de l'input tache
  //textContent la valeur de l'input tache dans ton li
  //appendChild le li dans le ul.
  Newli.appendChild(newbutton);

  newbutton.addEventListener("click", function () {
    liste.removeChild(Newli);
  });
  let newbutton2 = document.createElement("button");
  newbutton2.innerHTML = "Modifier";
  Newli.appendChild(newbutton2);
  
  newbutton2.addEventListener("click",function () {
      let indI = document.createElement("input");
      console.log("input");
     let formI= document.createElement("form")
     let newbutton3 =document.createElement("button");
     newbutton3.innerHTML = "Sauvegarder";
     Newli.appendChild(formI);      
      formI.appendChild(indI);      
      formI.appendChild(newbutton3);
      newbutton2.remove();
      formI.addEventListener("submit", function (event) {
        let Mort= indI.value;
        Newli.textContent=Mort;
        event.preventDefault();
        console.log(Mort);
        Newli.appendChild(newbutton);
        Newli.appendChild(newbutton2);     
});
    
  })
});