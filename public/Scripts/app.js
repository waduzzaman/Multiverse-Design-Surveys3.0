(function(){
    function Start(){
        console.log("App started.....");
    }
    window.addEventListener("load",Start);
})();

function ExportToExcel(type, fn, dl) {
    var elt = document.getElementById('report_table');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Report.' + (type || 'xlsx')));
}