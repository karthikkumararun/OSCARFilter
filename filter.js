// Script credits: Fellow student (identity removed for privacy)
// Modified by: Karthik Arun
// Get only OMSCS courses.

$( "td" ).removeClass( "dddefault" );
$(".datadisplaytable tr td:contains('OCY')").parent().remove();
$(".datadisplaytable tr td:contains('OAN')").parent().remove();
$(".datadisplaytable tr td:contains('OCL')").parent().remove();