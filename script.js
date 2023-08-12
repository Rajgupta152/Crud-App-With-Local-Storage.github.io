// email error should be display in alert box
// all the data store in object and display in document
// each users email should be unique
// debugger
let data =[];

let updateBtn = document.getElementById('updateBtn');
let uniqueValue = new Set();

let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let fatherName = document.getElementById('father-name');
let email= document.getElementById('email');
let password = document.getElementById('password');
let phone = document.getElementById('number');
let gender = document.getElementsByName('gender');
let course = document.getElementsByName('course');
let image = document.getElementById('image');
let originalImage = "image/";

// document.getElementById('preview-btn').addEventListener('click',function(){
//     if(image.value != ''){
//         document.getElementById('preview-image').src = originalImage + image.value.slice(12);
//     }
// })
// let selectedImage = originalImage.concat(image.value.slice(12));
// console.log(image.value);

// let tableData = document.createElement('tbody');

    document.getElementById('form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting by default
        // debugger
        
      let registerBtn = document.getElementById('registerBtn');
      //Update data
      if(registerBtn.value != undefined && registerBtn.value != '' && registerBtn.value != null){
            let courseChecked = false;
            let genderChecked = false;
            // Validate the input field in form
            if(fname.value.length < 3){
                alert('Please enter valid first name');
                return false;
            }
            if(lname.value.length < 3){
                alert('Please enter valid last name');
                return false;
            }
            if(fatherName.value == ''){
                alert('Please enter father name');
                return false;
            }
            if(email.value == ''){
                alert('Please enter email');
                return false;
            }
            if(!email.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
                alert('Invalid Email. Please enter valid email');
                return false;
            }
            if(password.value == ''){
                alert('Please enter password');
                return false;
            }
            if(phone.value.length != 10){
                alert('Invalid phone number. Please enter valid phone number');
                return false;
            } 
            for(let i = 0; i<course.length; i++){
                if(course[i].checked){
                    courseChecked = true;
                }
            }
            if(!courseChecked){
                alert('Please choose at least one course');
                return false;
            }
        
            for(let i = 0; i<gender.length; i++){
                if(gender[i].checked){
                    genderChecked = true;
                }
            }
            if(!genderChecked){
                alert('Please choose gender');
                return false;
            }
        
            // Get form data and store it in an object
            let checkBoxes = [];
            course.forEach(function(chekedCourse){
                if(chekedCourse.checked){
                    checkBoxes.push(chekedCourse.value);
                }
            })
        
            let genderName;
            gender.forEach(function(gender_value){
                if(gender_value.checked){
                    genderName = gender_value.value;
                }
            })

     let msg = 'Are you sure. You want to update';
     if(confirm(msg)){
        registerBtn.textContent = 'Register';
        
        registerBtn = Number(registerBtn.value);
        data[registerBtn].fname =  fname.value;
        data[registerBtn].lname =  lname.value;
        data[registerBtn].fatherName =  fatherName.value;
        data[registerBtn].email =  email.value;
        data[registerBtn].password =  password.value;
        data[registerBtn].phone =  phone.value;
        data[registerBtn].courses = [];
        course.forEach(function(chekedCourse){
            if(chekedCourse.checked){
                data[registerBtn].courses.push(chekedCourse.value);
            }
        })
        gender.forEach(function(gender_value){
            if(gender_value.checked){
                data[registerBtn].gender = gender_value.value;
            }
        })

        // store array of object in local storage
        for(let i=0;i<data.length;i++){
            localStorage.setItem('item'+i,JSON.stringify(data[i])); 
        }
        // data[registerBtn].image = originalImage + image.value.slice(12);
        
    //   let removeTable =   document.querySelectorAll('#tableBody tr');
    //   for (let j = 0; j < removeTable.length; j++) {
    //     removeTable[j].remove();           
    //   }
    //   debugger
      document.querySelector('tbody').remove();
      tableData = '';
      tableData = document.createElement('tbody');
        studentDatatableFunct();
        
        form.reset();
     }
     }else{
            let courseChecked = false;
            let genderChecked = false;
            // Validate the input field in form
            if(fname.value.length < 3){
                alert('Please enter valid first name');
                return false;
            }
            if(lname.value.length < 3){
                alert('Please enter valid last name');
                return false;
            }
            if(fatherName.value == ''){
                alert('Please enter father name');
                return false;
            }
            if(email.value == ''){
                alert('Please enter email');
                return false;
            }
            if(!email.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
                alert('Invalid Email. Please enter valid email');
                return false;
            }
            if(password.value == ''){
                alert('Please enter password');
                return false;
            }
            if(phone.value.length != 10){
                alert('Invalid phone number. Please enter valid phone number');
                return false;
            } 
            for(let i = 0; i<course.length; i++){
                if(course[i].checked){
                    courseChecked = true;
                }
            }
            if(!courseChecked){
                alert('Please choose at least one course');
                return false;
            }
        
            for(let i = 0; i<gender.length; i++){
                if(gender[i].checked){
                    genderChecked = true;
                }
            }
            if(!genderChecked){
                alert('Please choose gender');
                return false;
            }
            // Get form data and store it in an object
            let checkBoxes = [];
            course.forEach(function(chekedCourse){
                if(chekedCourse.checked){
                    checkBoxes.push(chekedCourse.value);
                }
            })
            // console.log(checkBoxes);
        
            let genderName;
            gender.forEach(function(gender_value){
                if(gender_value.checked){
                    genderName = gender_value.value;
                }
            })
            console.log(genderName);
          
          
            if (uniqueValue.has(email.value)) {
                alert("Email must be unique. This email has already been used.");
                return false;
              }
            if(uniqueValue.has(phone.value)){
                alert("Phone number must be unique. This Phone number has already been used.");
                return false;
            }  
              // Add the unique values to the list of submitted unique values
              uniqueValue.add(email.value);
              uniqueValue.add(phone.value);
        
            // Array of object
            data.push({fname: fname.value,
                lname: lname.value,
                fatherName: fatherName.value,
                email: email.value,
                password: password.value,
                phone: phone.value,
                courses: checkBoxes,
                gender: genderName,
            });
            // console.log(data[0].courses[0]);
            // data[0].courses = checkBoxes;
            // data[0].gender = genderName;         

            // store array of object in local storage
            for(let i=0;i<data.length;i++){
                localStorage.setItem('item'+i,JSON.stringify(data[i])); 
            }
          if(data.length > 0 ){
            
            let data = document.querySelector('tbody');
            if(data != null && data != ''){
              document.querySelector('tbody').remove();
            }
            tableData = '';
            tableData = document.createElement('tbody');
            studentDatatableFunct();
           }                      
          form.reset();
          alert('Form submitted successfully');
          return true;
        
        }                
      });

 // all Student data create in table
      const studentDatatableFunct = () =>{
// debugger
      registerBtn.value = '';
     //put input value on cell
     for(let i=0; i<data.length; i++){
           //select tbody from html

    // let tableData = document.getElementById('tableBody');
    
    //create row for tobody
    let tr = document.createElement('tr');
    //create cells for row
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');
    let td8 = document.createElement('td');
    // let td10 = document.createElement('td');
    let td9 = document.createElement('td');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    editBtn.className = 'edit';
    deleteBtn.className = 'delete';
    // let imageFile = document.createElement('img');
    
    // imageFile.src += image.value;
    // imageFile.style.width = '50px';
    // imageFile.style.height = '60px';

   //Append row in tbody
   tableData.append(tr);
   //Append cells in row
   tr.append(td1);
   tr.append(td2);
   tr.append(td3);
   tr.append(td4);   
   tr.append(td5);
   tr.append(td6);
   tr.append(td7);
   tr.append(td8);
//    tr.append(td10);
   tr.append(td9);
   td9.append(editBtn);
   td9.append(deleteBtn); 
//    td10.append(imageFile); 
   td1.textContent = data[i].fname;
   td2.textContent = data[i].lname;
   td3.textContent = data[i].fatherName;
   td4.textContent = data[i].email;
   td5.textContent = data[i].password;
   td6.textContent = data[i].phone;
   td7.textContent = data[i].courses;
   td8.textContent = data[i].gender;
//    imageFile.src = data[i].image;
//    imageFile.src = data[i].image;
   editBtn.textContent = 'Edit';
   editBtn.style.marginLeft = '10px';
   editBtn.id = 'stdentEdit_' + i;
   // editBtn.onclick = 'editData()';
    
   deleteBtn.textContent = 'Delete'; 
   deleteBtn.style.marginLeft = '10px';
   deleteBtn.style.marginRight = '10px';
   // deleteBtn.id = 'stdentDel_' + i;

   // document.getElementById(editBtn.id).onclick = editData(i);
   editBtn.onclick = function(){
       editData(i);
   }
   deleteBtn.addEventListener('click',function(e){
   let msg = 'Are you sure, You want delete it?'
   if(confirm(msg)){
       deleteBtn.parentElement.parentElement.remove();
       registerBtn.textContent = 'Register';
       registerBtn.value = '';
       data.splice(i,1);
       uniqueValue.delete(td4.textContent);
       uniqueValue.delete(td6.textContent);
       localStorage.removeItem('item'+i);
       form.reset();
   }
        
    })
    } 

    document.querySelectorAll('#tableData')[0].append(tableData);
 
      }

    function editData(i){
    for(let i=0; i<course.length; i++){
        if(course[i].checked == true){
            course[i].checked = false;
        }
    }
    registerBtn.textContent = "Update";
    fname.value = data[i].fname;
    lname.value = data[i].lname;
    fatherName.value = data[i].fatherName;
    email.value = data[i].email;
    password.value = data[i].password;
    phone.value = data[i].phone;
    // image.name = data[i].image;
    // image.src  = data[i].image;
    // document.getElementById('preview-image').src = data[i].image;
  
    // course.value = data[i].courses;
    // console.log(data[i].courses[1]);
      for(let j=0; j<data[i].courses.length; j++){
        for(let k=0; k<course.length; k++){
          if(data[i].courses[j] == course[k].value){
            course[k].checked = true;
          }
        }
      }

      for(let j=0;j<gender.length;j++){
        if(data[i].gender == gender[j].value){
            gender[j].checked = true;
        }
      }
    
    registerBtn.value = i;
    // updateBtn.onclick = function(){
    //     updateData(i);
    // }
      }




 






