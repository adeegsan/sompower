
let branches = [
  ["26-June", "Xaruntu waxay ku taal Saldhiga Ibrahim Koodbur agtiisa", 523527, 95281772],
  ["Waaheen", "Xaruntu waxay ku Talaal Suuqa Waaheen Qaybta Bari", 524334, 95281772],
  ["New Hargeisa", "Xaruntu Waxay ku xigtaa Kaalinta Daarasalaam ee New Hargeisa", 510578, 95281772],
  ["M. Haaruun", "Tilmaanta Xarunta: Dhinaca Bari ee Schoolka Macalin Harun", 540967, 95281772],
  ["M. Mooge", "Xaruntu waxay ku taal dhinaca Galeeb ee Saldhiga M. Mooge", 569374, 95281772],
  ["Ambassador", "Xaruntu waxay kutaal kasoo horjeedka Hotel Ambassador", 569260, 95281772],
  ["Dumbuluq", "Xaruntu waxay ku taal dhismaha Dhakhtark Edna Adan Hospital", 569036, 95281772],
  ["Iftin", "Xaruntu waxay ku taal dhismaha Dhakhtark Edna Adan Hospital", 565885, 95281772],
  ["Isha-Borama", "Xaruntu waxay ku taal Isgoyska Jaamacada Hargeisa Looga Laabto", 525706, 95281772],
  ["Faluuja", "Xaruntu waxay ku taal Xaafada Faluuja, Saldhiga Xaafada agtiisa", 4101600, "063-4101600"],
  ["Faarax Nuur", "Xaruntu waxay ku taal Isgoyska Siinay, dhinaca bari ee Laamida", 565060, 95281772],
  ["Jigjiga yar", "Xaruntu waxay ku taal Isgoyska, Kaalinta National Dhinaceeda Bari", 517460, 95281772],
  ["Gantaalaha", "Xaruntu waxay ku taal Jaamacada Admas, Fresh compus agtiisa ", 572477, 95281772],
  ["Salaama", "Xaruntu waxay udhaw dahay Schoolka Salaama dhinaciisa Galbeed ", 570903, 95281772],
  ["Sheedaha", "Xaruntu waxay ku taal Xaafada Sheedaha, Kaalinta Barwaaqo agteeda", 517963, 95281772],
  ["Kirix", "Xaruntu waxay ku taal Xaafada ina Kirix, Dhinaca Bari ee Saldhiga", 538499, 95281772],
  ["Xero-Awr", "Xaruntu waxay ku taal Dhismaha Business Center Dhinacisa Galbeed", 523393, 95281772],
  ["Daloodho", "Xaruntu waxay ku taal Xaafada Daloodho, Kasoo horjeedka Dahabshiil", 517963, 95281772]
];

let element = branches.map((branch) => {

  return (
    <div class="col-md-4 col-sm-6 col-lg-3 mb-5">
      <div class="card b-card text-center">
        <div class="card-header bg-warning">
          <h5 class="card-title">Xarunta  {branch[0].toUpperCase()}</h5>
        </div>
        <div class="card-body">
          <p class="">{branch[1]}</p>
          <h6>Kala Xidhiidh <i class="fas fa-phone-volume"></i></h6>
          <ul class="list-group text-left list-group-flush">
            <li class="list-group-item"><i class="fas fa-phone-square"></i> {branch[2]} </li>
            <li class="list-group-item"><i class="fas fa-mobile-alt"></i> {branch[3]}</li>
          </ul>
        </div>
      </div>
    </div>
  )

});


function Branch() {
  return element;
}

const domContainer = document.getElementById("root");
ReactDOM.render(<Branch />, domContainer);