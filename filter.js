// Script credits: ningun0@tutanota.com
// Modified by: karun3@gatech.edu
// Get only OMSCS courses.
$( "td" ).removeClass( "dddefault" );
$(".datadisplaytable tr td:contains('OCY')").parent().remove();
$(".datadisplaytable tr td:contains('OAN')").parent().remove();
$(".datadisplaytable tr td:contains('OCL')").parent().remove();