function SelectOnlyThis(id) {
    for (var i = 1; i <= 2; i++) {
        document.getElementById(i).checked = false;
    }

    document.getElementById(id).checked = true;
}

let corr = true;

function err1() {
    corr = false;
}

var alphanumeric = /^[0-9a-zA-Z\s]+$/;
var nnn = /^[A-Za-z\s]+$/;

function Validation() {
    //userid
    var uid = isUidValid();
    //email
    var email = isEmailValid();
    //password
    var password = isPasswordValid();
    //name
    var name = isNameValid();
    //address
    var address = isAddValid();
    //country
    var country = document.getElementById("country").value;
    //zipcode
    var zipcode = isZipValid();
    //gender
    var gender = genderVarification(gender);
    if (gender == undefined) {
        alert("plese select your gender");
        err1();
        return false;
    }
    //language
    var language = langValidation();
    if (language == undefined) {
        alert("plese select your language");
        err1();
        return false;
    }

    if (corr) {
        confirm1();
    } else {
        alert("Something went wrong");
    }
    //about
    function confirm1() {
        var about = document.getElementById("about").value;
        //confirmation
        var confirmation = confirm("are you sure you want to submit");
        if (confirmation) {

            alert(
                "Resgistration form Data : \n" +
                "\n" +
                "User ID : " + uid + "\n" +
                "Email : " + email + "\n" +
                "Password : " + password + "\n" +
                "Name : " + name + "\n" +
                "Address : " + address + "\n" +
                "Country : " + country + "\n" +
                "Zip Code : " + zipcode + "\n" +
                "Gender : " + gender + "\n" +
                "Language : " + language + "\n" +
                "About : " + about + "\n"
            );
            SendData();
        }
        else {
            alert("Resgistration cancelled");
        }
    }

    function SendData() {
        let FormData = {
            userid: uid,
            Email: email,
            Password: password,
            Name: name,
            Address: address,
            Country: country,
            ZipCode: zipcode,
            Gender: gender,
            Language: language,
        }


        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function () {
            console.log(xhr.responseText);
            if (xhr.responseText == 'success') {
                alert("Form Data Sent On Admin Email.");
            } else {
                alert("Sometiong went wrong. prom app page.");
            }
        }

        var dataa = JSON.stringify({
            "userid": uid,
            "Email": email,
            "Password": password,
            "Name": name,
            "Address": address,
            "Country": country,
            "ZipCode": zipcode,
            "Gender": gender,
            "Language": language
        });

        xhr.send(dataa);


    }







}



function isUidValid() {
    var uid1 = document.getElementById("uid").value;
    if (uid1 === "") {
        alert("plese enter your userid");
    } else {
        return uid1;
    }
    err1();
    return flase;
}

function isEmailValid() {
    var em = document.getElementById("email").value;
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(em)) {
        return em;
    }

    alert("You have entered an invalid email address!");
    err1();
    return false;

}

function isPasswordValid() {
    var pass = document.getElementById("password").value;
    if (pass.length < 7) {
        alert("password length should be greater then 7");
        err1();
        return false;
    } else if (pass.length > 12) {
        alert("password length should be less then 12");
        err1();
        return false;
    }
    return pass;
}

function isNameValid() {
    var nm = document.getElementById("name").value;
    if (nm == "") {
        alert("please enter your name");
        err1();
        return false;
    } else if (nnn.test(nm) == false) {
        alert('Please input alphabet characters only in NAME');
        err1();
        return false;
    }
    return nm;
}

function isAddValid() {
    var add = document.getElementById("address").value;

    if (add == "") {
        alert("please enter your address");
        err1();
        return false;
    } else if (alphanumeric.test(add) == false) {
        alert('Please input alphabet characters only in ADDRESS');
        err1();
        return false;
    }
    return add;
}

function isZipValid() {
    var zip = document.getElementById("zipcode").value;

    if (zip.length != 6) {
        alert("zipcode length should be 6 digit");
        err1();
        return false;
    }

    return zip;
}

function genderVarification(gender) {



    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var other = document.getElementById("other");

    if (male.checked) {
        gender = male.value;
    } else if (female.checked) {
        gender = female.value;
    } else if (other.checked) {
        gender = other.value;
    }
    return gender;
}

let langValidation = () => {
    var lan;

    var Eng = document.getElementById("1");
    var NonEng = document.getElementById("2");

    if (Eng.checked) {
        lan = Eng.value;
    } else if (NonEng.checked) {
        lan = NonEng.value;
    }
    return lan;
}

let hello = () => {
    console.error("hello");
}




