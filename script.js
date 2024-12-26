function valider(event)
        {
            var isvalide=true;
            var nom = document.getElementById("nom").value;
            var residence = document.getElementById("residence").value;
            var email = document.getElementById("email").value;
            var age = document.getElementById("age").value;
            var sexe = document.querySelector('input[name="sexe"]:checked');
            var langage = document.querySelectorAll('input[name="langage"]:checked');
            var profession = document.getElementById("profession").value;

            console.log(langage);   
            // console.log(sexe); 
            // console.log(profession);
            // for (const x of langage) {
            //     console.log(x.value);
            // }

            // Validation du nom :
            if(nom.trim()=="")
            {
                document.getElementById("errornom").classList.add("alert","alert-danger","m-5")
                document.getElementById("errornom").textContent="Nom Obligatoire !";
                isvalide=false;
            }
            else
            {
                document.getElementById("errornom").removeAttribute("class")
                document.getElementById("errornom").textContent="";
            }

            // Validation du residence :
            if(residence.trim()=="")
            {
                document.getElementById("errorresidence").classList.add("alert","alert-danger","m-5")
                document.getElementById("errorresidence").textContent="Residence Obligatoire !";
                isvalide=false;
            }
            else
            {
                document.getElementById("errorresidence").removeAttribute("class")
                document.getElementById("errorresidence").textContent="";
            }

            // Validation d'un email :
            if(email.trim()=="")
            {
                document.getElementById("erroremail").classList.add("alert","alert-danger" ,"m-5")
                document.getElementById("erroremail").textContent="Email Obligatoire !";
                isvalide=false;
            }
            else if ( /^\w+@\w+\.\w+$/.test(email)!=true){
                document.getElementById("erroremail").classList.add("alert","alert-danger" ,"m-5")
                document.getElementById("erroremail").textContent="Email Invalide !";
                isvalide=false;
            }
            else
            {
                document.getElementById("erroremail").removeAttribute("class")
                document.getElementById("erroremail").textContent="";
            }

            // Validation d'age :
            if(age.trim()=="")
            {
                document.getElementById("errorage").classList.add("alert","alert-danger" ,"m-5")
                document.getElementById("errorage").textContent="Age Obligatoire !";
                isvalide=false;
            }
            else if (!Number.isInteger(Number(age)))
            {
                document.getElementById("errorage").classList.add("alert","alert-danger" ,"m-5")
                document.getElementById("errorage").textContent="Age Invalide !";
                isvalide=false;
            }
            else
            {
                document.getElementById("errorage").removeAttribute("class")
                document.getElementById("errorage").textContent="";
            }

            // Validation d'un sexe :
            if (sexe==null) {
            document.getElementById("errorsexe").classList.add("alert", "alert-danger" ,"m-5");
            document.getElementById("errorsexe").textContent = "Sexe Obligatoire !";
            isvalide = false;
            } 
            else 
            {
                document.getElementById("errorsexe").removeAttribute("class")
                document.getElementById("errorsexe").textContent = "";
            }

            // Validation des langages 
            if (langage.length === 0) {
                document.getElementById("errorlangage").classList.add("alert", "alert-danger" ,"m-5");
                document.getElementById("errorlangage").textContent = "Langage Parlé Obligatoire !";
                isvalide = false;
            } 
            else 
            {
                document.getElementById("errorlangage").removeAttribute("class")
                document.getElementById("errorlangage").textContent = "";
            }

            // Validation de profession :
            if (profession.trim() == "") 
            {
                document.getElementById("errorprofession").classList.add("alert", "alert-danger" ,"m-5");
                document.getElementById("errorprofession").textContent = "Profession Obligatoire !";
                isvalide = false;
            } 
            else 
            {
                document.getElementById("errorprofession").removeAttribute("class")
                document.getElementById("errorprofession").textContent = "";
                document.getElementById("errorprofession").textContent = "";
            }
            
            if(isvalide==false)
            {
                event.preventDefault();
            }
            else
            {
                alert("Les informatios sont valide")
            }


        }


function stop (event)
{
    event.preventDefault();
}        
        document.querySelector("form").addEventListener("submit",valider)
        document.querySelector("form").addEventListener("submit",stop)
