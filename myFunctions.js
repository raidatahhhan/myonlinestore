var cart = [];
        
function addToCart(productName, price) {
  const existingItem = cart.find(item => item.productName === productName);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    const newItem = { productName, price, quantity: 1 };
    cart.push(newItem);
  }

  var MessageElement = document.getElementById('Message' + productName);
  MessageElement.style.display = 'block';

  setTimeout(function() {
    MessageElement.style.display = 'none';
  }, 3000);

  updateCartView();
}
function clearCart() {
  cart.length = 0;
  document.getElementById("form").style.display = 'none'
document.getElementById("body").style.height = "3000px"

  updateCartView();
}

function updateCartView() {
  var cartItemsElement = document.getElementById('cart-items');
  var totalElement = document.getElementById('total');
  var taxElement = document.getElementById('tax');
  var finalTotalElement = document.getElementById('final-total');
  
  cartItemsElement.innerHTML = '';
  
  cart.forEach(item => {
    const row = document.createElement('tr');
    const productNameCell = document.createElement('td');
    const quantityCell = document.createElement('td');
    const priceCell = document.createElement('td');
    const totalCell = document.createElement('td');

    productNameCell.textContent = item.productName;
    quantityCell.textContent = item.quantity;
    priceCell.textContent = `${item.price}`;
    totalCell.textContent = `${item.price * item.quantity}`;

    row.appendChild(productNameCell);
    row.appendChild(quantityCell);
    row.appendChild(priceCell);
    row.appendChild(totalCell);

    cartItemsElement.appendChild(row);
  });
  
  var total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  totalElement.textContent = `${total.toFixed(2)}`;
  
  var tax = total * 0.05;
  taxElement.textContent = `${tax.toFixed(Math.round())}`;
  
  var finalTotal = total + tax;
  finalTotalElement.textContent = `${finalTotal.toFixed(Math.round())}`;
    
}

function showForm() {
document.getElementById("form").style.display = 'block'
var form = document.getElementById('form')
form.scrollIntoView({ behavior: 'smooth' });
document.getElementById("body").style.height = "3900px"
}

let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
console.log(alphabets.length);
let status = document.getElementById('status');
status.innerText = "Captcha";

generate = () => {
   
    let first = alphabets[Math.floor(Math.random() * alphabets.length)];
    let second = Math.floor(Math.random() * 10);
    let third = Math.floor(Math.random() * 10);
    let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let sixth = Math.floor(Math.random() * 10);
    captcha = first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();
    console.log(captcha);
    document.getElementById('generated-captcha').value = captcha;
    document.getElementById("entered-captcha").value = '';
    status.innerText = "Captcha"
}

check = () => {
    
    let userValue = document.getElementById("entered-captcha").value;
    
    console.log(captcha);
    console.log(userValue);

    if(userValue == captcha){
        document.getElementById("entered-captcha").style.borderColor = "green";
        document.getElementById("status-captcha").value = 'yes';
        status.innerText = "Correct!!"
    } else {
        status.innerText = "Try Again!!"
        document.getElementById("entered-captcha").style.borderColor = "red";
        document.getElementById("status-captcha").value = 'no';
        document.getElementById("entered-captcha").value = '';
    }
}

function buy() {

    var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  
    var zipPattern = /^(0[1-9]|1[0-4])+\d{9}$/;
  
    // dd-mm-yyyy
    var regex = /^\s*(3[01]|[12][0-9]|0?[1-9])\-(1[012]|0?[1-9])\-((?:19|20)\d{2})\s*$/;
  
    let userValue = document.getElementById("entered-captcha").value;
    let status = document.getElementById('status');
    status.innerText = "Captcha";
  
    var statusCaptcha = document.getElementById("status-captcha").value;  
    var dateString    = document.getElementById("birthdate").value;
    var eamil  = document.getElementById("email").value;
    var name   = document.getElementById("fullName").value;
    var number = document.getElementById("Numberc").value;
    var tell   = document.getElementById("mobileNumber").value;
    var x = 0;
    
    if (mailformat.test(eamil)) {
      document.getElementById("email").style.borderColor = "green";
      document.getElementById("p").style.display = 'none';
      x += 1;
    }
    else {
      document.getElementById("email").style.borderColor = "red";
      document.getElementById("p").innerHTML = "يجب ادخال ( @ , . ) لتحقيق الايميل ";
      document.getElementById("p").style.display = 'block';
    }
      
    var namePattern = /^[\u0600-\u06FF\s]+$/;
  
    if (namePattern.test(name)) {
      document.getElementById("fullName").style.borderColor = "green";
      document.getElementById("n").style.display = 'none';
      x += 1
    }
    else {
      document.getElementById("fullName").style.borderColor = "red";
      document.getElementById("n").innerHTML = " (6 احرف على الاقل) يجب ادخال الاسم بللغة العربية";
      document.getElementById("n").style.display = 'block';
    }
  
    if( zipPattern.test(number) ) {
      document.getElementById("Numberc").style.borderColor = "green";
      document.getElementById("c").style.display = 'none';
      x += 1;
    }
    else {
      document.getElementById("Numberc").style.borderColor = "red";
      document.getElementById("c").innerHTML = "لم يتم ادخال الرقم الوطني بشكل صحيح";  
      document.getElementById("c").style.display = 'block';
    }
  
    if (dateString === "") {
         document.getElementById("birthdate").style.borderColor = "red";
      document.getElementById("msgDate").innerHTML = "لم يتم إدخال التاريخ بشكل صحيح , يجب أن يأخذ الصيغة dd-mm-yyyy";  
      document.getElementById("msgDate").style.display = 'block';
    } else {
        document.getElementById("birthdate").style.borderColor = "green";
        document.getElementById("msgDate").style.display = 'none';
        x += 1;
     
    }
  
  
    var tellPattern = /^(!?(\+|00)963[-\s]?)?0?9[2-9]{1}\d{7}$/;
    if (tellPattern.test(tell)) {
      document.getElementById("mobileNumber").style.borderColor = "green"
      document.getElementById("t").style.display = 'none'
      x += 1
    } else {
      document.getElementById("mobileNumber").style.borderColor = "red"
      document.getElementById("t").innerHTML = "  (9 ارقام)الرجاء إدخال رقم هاتف سوري صحيح" 
      document.getElementById("t").style.display = 'block'
    }
  
      if( userValue == captcha ){
          document.getElementById("entered-captcha").style.borderColor = "green";
          document.getElementById("status-captcha").value = 'yes';
          status.innerText = "Correct!!"
          x += 1;
      } else {
          status.innerText = "Try Again!!";
          document.getElementById("entered-captcha").style.borderColor = "red";
          document.getElementById("status-captcha").value = 'no';
          document.getElementById("entered-captcha").value = '';
      }
  
      if (x === 6) {
        var finalTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.05;
        alert(`المبلغ النهائي: ${finalTotal.toFixed(Math.round())} ل,س`);
        document.getElementById("form").style.height = '900px'
  
      }
      else {
        alert ("فشل في عملية الشراء ! تحقق من صحة بياناتك")
        // document.getElementById("form").style.height = '1120px'
      }
  }
  