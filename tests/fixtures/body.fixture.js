module.exports.htmlMockWithScriptTag = `
<p>Die Held*innen der Neuzeit.</p>
<p>Die Bösewicht*innen der Vergangenheit.</p>
<p>Die Sänger*innen der Gegenwart</p>
<script>
document.getElementById("demo").innerHTML = "Hünd*in!";
</script>
`

module.exports.expectedScriptTag = `
<p>Die Helden der Neuzeit.</p>
<p>Die Bösewichte der Vergangenheit.</p>
<p>Die Sänger der Gegenwart</p>
<script>
document.getElementById("demo").innerHTML = "Hünd*in!";
</script>
`

module.exports.htmlMockWithStyleTag = `
<p>Die Held*innen der Neuzeit.</p>
<div id="scoped-content">
  <style type="text/css" scoped="">
    /* Kätz*in */
    p { color: red; }
  </style>
  <p>Die Bösewicht*innen der Vergangenheit.</p>
</div>
<p>Die Sänger*innen der Gegenwart</p>
`

module.exports.expectedStyleTag = `
<p>Die Helden der Neuzeit.</p>
<div id="scoped-content">
  <style type="text/css" scoped="">
    /* Kätz*in */
    p { color: red; }
  </style>
  <p>Die Bösewichte der Vergangenheit.</p>
</div>
<p>Die Sänger der Gegenwart</p>
`

module.exports.htmlMockWithVariants = `
<ul>
  <li>Gendern mit Unterstrich: Kund_innen.</li>
  <li>Gendern mit Sternchen: Kund*innen.</li>
  <li>Gender Gap: Kund innen.</li><!-- not clearly detectable -->
  <li>Gendern mit Doppelpunkt: Kund:innen.</li>
  <li>Gendern mit Punkt: Kund. innen.</li><!-- not clearly detectable -->
</ul>
`

module.exports.expectedVariants = `
<ul>
  <li>Gendern mit Unterstrich: Kunden.</li>
  <li>Gendern mit Sternchen: Kunden.</li>
  <li>Gender Gap: Kund innen.</li><!-- not clearly detectable -->
  <li>Gendern mit Doppelpunkt: Kunden.</li>
  <li>Gendern mit Punkt: Kund. innen.</li><!-- not clearly detectable -->
</ul>
`
