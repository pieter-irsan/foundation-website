$(document).ready(function(){
    $("#flip").bind("click",function(){
        $("#panel").slideDown("slow");
    });
    $("#btn").bind("click",function(){
        $("#panel").slideUp("slow");
    });
});

function validasi_input(form){
    pola_email=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    
    if (form.name.value==""){
        alert("Mohon isi kolom nama!");
        form.name.focus();
        return (false);
    }
    else if (form.email.value==""){
        alert("Mohon isi kolom email!");
        form.email.focus();
        return (false);
    }
    else if (!pola_email.test(form.email.value)){
        alert('Mohon isi email yang benar!');
        form.email.focus();
        return (false);
    }
    else if (form.acc_no.value==""){
        alert("Mohon isi kolom no rekening!");
        form.acc_no.focus();
        return (false);
    }
    else if (form.tel.value==""){
        alert("Mohon isi kolom nomor telepon!");
        form.tel.focus();
        return (false);
    }
    else {
        return (true);
    }
}