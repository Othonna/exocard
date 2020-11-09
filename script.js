/*
Nous allons intégrer une page en HTML / CSS / jQuery. Le client nous a fournit une maquette mais il nous annonce que
nous sommes totalement libre dans notre créativité, tant que l'on garde les fonctionnalités essentielles.

Voici la liste des fonctionnalités :

- Intégration du design avec Bootstrap et Font Awesome
- Un clic sur le bouton Follow (bleu) remplace son contenu par Unfollow (rouge) et vice-versa
- Un clic sur le coeur ajoute un like (infini) et change le coeur en noir (et vice-versa).
- Un clic sur la bulle de commentaire affiche un formulaire ou le masque.
- Si on remplit le formulaire et qu'on clique sur ajouter, le contenu s'ajoute au dessus. (.val() permet de récupérer la valeur d'un textarea en jQuery)
- Dans le message, on mettra le premier mot en gras afin qu'il puisse représenter le pseudo de l'utilisateur */


// follow button

$('.Bfollow').click(function () {
    $('.Bfollow').text('Unfollow');
});

var clicked = true;
$(".Bfollow").click(function () {
    if (clicked) {
        $(this).css('background-color', 'red').css('outline', 'none');
        clicked = false;
    } else {
        $(this).css('background-color', '#098DBA').text('Follow').css('outline', 'none');
        clicked = true;
    }
});

// change color & add like
var handclick = true;
var countlike = 0

$('#hand').click(function() {
    if (handclick) {
        $(this).attr('src', 'assets/hand-black.svg');
        countlike = countlike + 1;
        $('#count strong').text(countlike);
        handclick = false;
    } else {
        $(this).attr('src', 'assets/hand-white.svg');
        countlike = countlike - 1;
        $('#count strong').text(countlike);
        handclick = true;
    }
})

// Version infini
/*
$('#hand').click(function() {
    countlike = countlike + 1;
    $('#count strong').text(countlike);
});
*/

// comment click

var showinput = true;

$('#inputcomment').hide();
$("#btncomment").hide();
$('#comment').click(function(){
    if (showinput) {
        $("#inputcomment").show();
        $("#btncomment").show();
        showinput = false;
    } else {
        $("#inputcomment").hide();
        $("#btncomment").hide();
        showinput = true;
    }
});

// add comment in first div

$("#btncomment").click(function(){
    var txt = $("#inputcomment").val();
    $("#newtext b").first().text("The Gluk ").css('font-weight', 'bold'); 
    $('#newtext').append(txt);
});


