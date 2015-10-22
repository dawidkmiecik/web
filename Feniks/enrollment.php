<?php

// Tworzymy zmienną dla imienia i nazwiska
$name = $_POST['name'];

// Tworzymy zmienną dla adresu email
$email = $_POST['email'];

// Tworzymy zmienną dla telefonu
$phone = $_POST['phone'];
// Tworzymy zmienną dla tematu
$topic = $_POST['topic'];
// Tworzymy zmienną dla wiadomości
$message = $_POST['message'];

// Podajesz adres email z którego ma być wysłana wiadomość
$odkogo = "Formularz z feniksdesign.pl";

// Podajesz adres email na który chcesz otrzymać wiadomość
$dokogo = "kontakt@feniksdesign.pl";

// Podajesz tytuł jaki ma mieć ta wiadomość email
$tytul = "Formularz feniksdesign.pl";

// Przygotowujesz treść wiadomości
$wiadomosc = "";
$wiadomosc .= "Imie i nazwisko: " . $name . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Telefon: " . $phone . "\n";
$wiadomosc .= "Temat: " . $topic . "\n";
$wiadomosc .= "Wiadomosc: " . $message . "\n";

// Wysyłamy wiadomość
$sukces = mail($dokogo, $tytul, $wiadomosc, "Od: <$odkogo>");

// Przekierowywujemy na potwierdzenie
if ($sukces){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=confirmation.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.php\">";
}
?>