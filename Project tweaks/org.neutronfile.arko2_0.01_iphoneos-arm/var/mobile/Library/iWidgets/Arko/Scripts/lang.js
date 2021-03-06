var Lang = "en"; 
if (Lang == "en") {
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var shortdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var shortmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var hourtext = ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
    var weatherdesc = ["Tornado", "Tropical Storm", "Hurricane", "Thunderstorm", "Thunderstorm", "Snow", "Sleet", "Sleet", "Freezing Drizzle", "Drizzle", "Freezing Rain", "Showers", "Showers", "Flurries", "Snow", "Snow", "Snow", "Hail", "Sleet", "Dust", "Fog", "Haze", "Smoky", "Blustery", "Windy", "Cold", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Clear", "Sunny", "Fair", "Fair", "Sleet", "Hot", "Thunderstorms", "Thunderstorms", "Thunderstorms", "Showers", "Heavy Snow", "Light Snow", "Heavy Snow", "Partly Cloudy", "Thunderstorm", "Snow", "Thunderstorm", "blank"];
} 
if (Lang == "id") {
    var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    var shortdays = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    var months=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","November","Desember"];
    var shortmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Nov", "Dec "];
    var hourtext = ["Dua Belas", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sembilan", "Sepuluh", "Sebelas", "Dua Belas", "Satu", "Dua", "Tiga", "Empat", "Lima", " Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sepuluh", "Sebelas", "Dua belas"];
    var weatherdesc = ["Tornado", "Badai Tropis", "Badai", "Badai Petir", "Badai Petir", "Salju", "Hujan Batu", "Hujan Batu", "Hujan Batu", "Gerimis Pembekuan", "Gerimis", "Hujan Beku" , "Hujan", "Hujan", "Hujan", "Salju", "Salju", "Salju", "Hujan Es", "Hujan Es", "Debu", "Debu", "Kabut", "Kabut", "Berasap", "Kencang", "Berangin", "Dingin", "Berawan", "Berawan", "Berawan", "Berawan", "Berawan", "Cerah", "Cerah", "Cerah", "Terang", "Terang", "Hujan Batu", "Panas", "Badai Petir", "Badai Petir", "Badai Petir", "Hujan", "Salju Lebat", "Salju Ringan", "Salju Lebat", "Salju Mendung", "Hujan Badai", "Badai Petir", "Salju", "Badai", "kosong"];
} 
if (Lang == "it") {
    var days = ['Domenica', 'Luned&#236', 'Marted&#236', 'Mercoled&#236', 'Gioved&#236', 'Venerd&#236', 'Sabato'];
    var months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    var shortmonths = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
    var shortdays = ["Sun", "Mon", "Mar", "Mer", "Gio", "Ven", "Sat"];
    var weatherdesc = ["Tornado", "Tempesta Tropicale", "Uragano", "Temporali Forti", "Temporali", "Pioggia mista a Neve", "Nevischio", "Nevischio", "Pioggia Gelata", "Pioggerella", "Pioggia Ghiacciata", "Pioggia", "Pioggia", "Neve a Raffiche", "Neve Leggera", "Tempesta di Neve", "Neve", "Grandine", "Nevischio", "Irregolare", "Nebbia", "Foschia", "Fumoso", "Raffiche di Vento", "Ventoso", "Freddo", "Nuvoloso", "Molto Nuvoloso", "Molto Nuvoloso", "Nuvoloso", "Nuvoloso", "Sereno", "Sereno", "Bel Tempo", "Bel Tempo", "Pioggia e Grandine", "Caldo", "Temporali Isolati", "Temporali Sparsi", "Temporali Sparsi", "Rovesci Sparsi", "Neve Forte", "Nevicate Sparse", "Neve Forte", "Nuvoloso", "Rovesci Temporaleschi", "Rovesci di Neve", "Temporali isolati", "Non Disponibile"];
}
if (Lang == "ca") {
    var days = ["Domingo", "Lunes", "Martes", "Mi????rcoles", "Jueves", "Viernes", "S????bado"];
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var shortmonths = ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"];
    var shortdays = ["Dom", "Lun", "Mar", "Mi????", "Jue", "Vie", "S????"];
    var hourtext = ["doce", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce"];
    var weatherdesc = ["Tornado", "Tormenta Tropical", "Huracan", "Tormentas Electricas Severas", "Tormentas Electricas", "Mezcla de Lluvia y Nieve", "Mezcla de lluvia y aguanieve", "Mezcla de nieve y aguaniev", "Llovizna helada", "Llovizna", "Lluvia bajo cero", "Chubascos", "Chubascos", "Rafagas de nieve", "Ligeras precipitaciones de nieve", "Viento y nieve", "Nieve", "Granizo", "Aguanieve", "Polvareda", "Neblina", "Bruma", "Humeado", "Tempestuoso", "Vientoso", "Frio", "Nublado ", "Mayormente nublado", "Mayormente nublado", "despejado", "despejado", "Despejado", "Soleado", "Lindo", "Lindo", "Mezcla de lluvia y granizo", "Caluroso", "Tormentas electricas aisladas", "Tormentas electricas dispersas", "Tormentas electricas dispersas", "Chubascos dispersos", "Nieve fuerte", "Precipitaciones de nieve dispersas", "Nieve fuerte", "despejado", "Lluvia con truenos y relampagos", "Precipitaciones de nieve", "Tormentas aisladas", "No disponible"];
}
if (Lang == "de") {
    var days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    var months = ["Januar", "Februar", "M????rz", "April", "Mai", "Juni", "Ju li", "August", "September", "Oktober", "November", "Dez ember"];
    var shortmonths = ["Jan", "Feb", "M????", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez "];
    var shortdays = ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"];
    var hourtext = ["null", "ein", "zwei", "drei", "vier", "f??nf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zw??lf", "dreizehn", "vierzehn", "f??nfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn", "zwanzig", "einundzwanzig", "zweiundzwanzig", "dreiundzwanzig", "null"];
    var weatherdesc = ["Tornado", "Tropischer Sturm", "Wirbelsturm", "Schwere Gewitter", "Gewitter", "Regen und Schnee", "Graupelschauer", "Schneeregen", "Gefrierender Nieselregen", "Nieselregen", "Gefrierender Regen", "Schauer", "Schauer", "Schneegest????ber", "Leichte Schneeschauer", "Schneetreiben", "Schnee", "Hagel", "Schneeregen", "Staubig", "Nebelig", "Dunstschleier", "Dunstig", "St????rmisch", "Windig", "Kalt", "Bew????lkt", "Meist Bew????lkt", "Meist Bew????lkt", "Bew????lkt", "Bew????lkt", "Klar", "Sonnig", "Heiter", "Heiter", "Regen und Hagel", "Heiss", "?????rtliche Gewitter", "Vereinzelte Gewitter", "Vereinzelte Gewitter", "Vereinzelte Schauer", "Starker Schneefall", "Vereinzelte Schneeschauer", "Starker Schneefall", "Bew????lkt", "Gewitter", "Scheeschauer", "?????rtliche Gewitterschauer", "Nicht Verf????gbar"];
}
if (Lang == "fr") {
    var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    var months = ["Janvie", "F????vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao????t", "Septembre", "Octobre", "Novembre", "D????cembre"];
    var shortmonths = ["Jan", "F????v", "Mar", "Avr", "Mai", "Jui", "Jui", "Ao????", "Sep", "Oct", "Nov", "D????c"];
    var shortdays = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    var hourtext = ["minuit", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "midi", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "minuit"];
    var weatherdesc = ["Tornade", "Tropical", "Ouragan", "Orages Violents", "Orages", "Pluie", "Pluie", "Neige", "Bruine", "Bruine", "Pluie", "Averses", "Averses", "Quelques Flocons", "Faibles Chutes de Neige", "Rafales de Neige", "Neige", "Gr????????le", "Neige Fondue", "Poussi????????reux", "Brouillard", "Brume", "Brumeux", "Temp????????te", "Vent", "Temps Froid", "Temps Nuageux ", "Tr????????s Nuageux", "Tr????????s Nuageux", "Nuageux", "Nuageux", "Temps Clair", "Ensoleille", "Beau Temps", "Beau Temps", "Pluie et Gr????????les", "Temps Chaud", "Orages Isol????????s", "Orages Eparses", "Orages Eparses", "Averses Eparses", "Fortes Chutes de Neige", "Chutes de Neige Eparses", "Fortes Chutes de Neige", "Nuageux", "Orages", "Chute de Neige", "Orages Isol????????s", "Non Disponible"];
}
if (Lang == "cn_s") {
    var days = ['???????????????????', '???????????????????', '??????????????????', '???????????????????', '????????????????????', '???????????????????', '???????????????????'];
    var months = ['?????????????', '????????????', '?????????????', '??????????????', '?????????????', '?????????????', '????????????', '?????????????', '????????????', '????????????', '???????????????????', '??????????????????'];
    var shortmonths = ['???????', '??????', '???????', '????????', '???????', '???????', '??????', '???????', '??????', '??????', '?????????????', '????????????'];
    var shortdays = ['??????????????', '??????????????', '?????????????', '??????????????', '???????????????', '??????????????', '??????????????'];
    var weatherdesc = ["???????????????????", "????????????????????????", "?????????????", "?????????????", "?????????????", "???????", "??????????????", "??????????????", "????????????????????????????", "??????????????", "??????????????", "?????????????", "?????????????", "?????????????", "???????", "???????", "???????", "Hail", "??????????????", "??????", "??????????????", "????????????", "??????", "?????????????????????????", "?????????????", "???????", "?????????????", "?????????????", "?????????????", "?????????????", "?????????????", "????????????", "??????????????", "?????????????", "?????????????", "??????????????", "Hot", "?????????????", "?????????????", "?????????????", "?????????????", "?????????????", "?????????????", "?????????????", "?????? ?????????????", "?????????????", "???????", "?????????????", "?????????????"];
} 

