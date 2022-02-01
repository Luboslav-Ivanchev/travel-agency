window.addEventListener('load', solution);

function solution() {
  console.log('TODO: Write the missing functionality!');

   let ul=document.querySelectorAll('#information ul')[0];

  let inputs=document.querySelectorAll('#form input');


   let button=document.getElementById('submitBTN');

   button.addEventListener('click',function () {
     let nameInput=inputs[0];
     let emailInput=inputs[1];
     let phoneInput=inputs[2];
     let addressInput=inputs[3];
     let postalInput=inputs[4];

     let nameLi=document.createElement('li');
     let emailLi=document.createElement('li');
     let phoneLi=document.createElement('li');
     let addressLi=document.createElement('li');
     let postalLi=document.createElement('li');

     nameLi.textContent=`Full name:${nameInput.value}`;
     emailLi.innerHTML=`Email:${emailInput.value}`;
     phoneLi.textContent=`Phone Number: ${Number(phoneInput.value)}`;
     addressLi.textContent=`Address:${addressInput.value}`;
     postalLi.textContent=`Postal code:${Number(postalInput.value)}`;

     ul.appendChild(nameLi);
     ul.appendChild(emailLi);
     ul.appendChild(phoneLi);
     ul.appendChild(addressLi);
     ul.appendChild(postalLi);

   });

  let divElement=document.getElementById('block');

    let divChildren=Array.from(divElement.children);



   let continueButton=document.getElementById('continueBTN');

    continueButton.removeAttribute('disabled');

    continueButton.addEventListener('click',function () {



       divChildren.forEach(elements=>{
         elements.remove();


       })
      let h3=document.createElement('h3');
      h3.textContent=`Thank you for your reservation`;
      divElement.appendChild(h3);




    });
      let btnEdit=document.getElementById('editBTN');
      btnEdit.removeAttribute('disabled');
       btnEdit.addEventListener('click',function () {



         continueButton.setAttribute('disabled','true');
         btnEdit.setAttribute('disabled','true')
         let interval=setInterval(function () {
           continueButton.removeAttribute('disabled')
           btnEdit.removeAttribute('disabled')

         },10000);


})

}
