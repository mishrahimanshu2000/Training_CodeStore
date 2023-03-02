function display() {
    document.getElementById('example1').innerHTML = " <pre>Writing using innerHTML <br>" +
        "document.getElementById('example1').innerHTML = Writing using innerHTML</pre>";
}
function docWrite() {
    document.write("Written using document.write(\"\")" + "<br> <b>Using document.write() after an HTML document is loaded, will delete all existing HTML:</b> <br> Refresh the page to reload");
}
function winAlert() {
    window.alert('This is alert window');
}
function conLog() {
    console.log("console.log() is used");
}