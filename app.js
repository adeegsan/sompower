
let branches = [
  ["26-June", "Xaruntu waxay ku taal isgoyska togdheer koonfurta haldoor Hospital", 523527, 520278],
  ["Waaheen", "Xaruntu waxay ku Taal dhismaha theatre-ka hargeisa", 524334],
  ["New Hargeisa", "Xaruntu Waxay kasoo horjeeda kaalinta Al-shukri", 510578, 521071,],
  ["M. Haaruun", "Tilmaanta Xarunta: Dhinaca Waqooyi ee Saldhiga Macalin Harun", 540967, ],
  ["M. Mooge", "Xaruntu waxay ku taal dhinaca Galeeb ee Saldhiga M. Mooge", 569374, 95281772],
  ["Ambassador", "Xaruntu waxay kutaal kasoo horjeedka Hotel Ambassador", 569260],
  ["Dumbuluq", "Xaruntu waxay ku taal agagaar-ka Iskuulka M.A.ALI", 569036],
  ["Iftin", "Xaruntu waxay ku taal kasoo horjeedka Hargeisa Staduim", 565885],
  ["Isha-Borama", "Xaruntu waxay ku taal koonfurta Isgoyska Jaamacada Hargeisa Looga Laabto", 525706],
  ["Faluuja", "Xaruntu waxay ku taal Xaafada Faluuja, Saldhiga Xaafada agtiisa", 4101600],
  ["Faarax Nuur", "Xaruntu waxay ku taal Isgoyska Siinay, dhinaca bari ee Laamida", 565060],
  ["Jigjiga yar", "Xaruntu waxay ku taal agagaar-ka ina bakeeri", 517460],
  ["Gantaalaha", "Xaruntu waxay ku taal Jaamacada Admas, Fresh compus agtiisa ", 572477],
  ["Salaama", "Xaruntu waxay ka kasoo horjeeda masjidka Salaam ama koonfurta salidhiga IB-koodbuur ", 570903],
  ["Sheedaha", "Xaruntu waxay ku taal Xaafada Sheedaha, Kaalinta Barwaaqo agteeda", 517963, 95281772],
  ["Kirix", "Xaruntu waxay ku taal Kirix area wadada 150-ka", 538499],
  ["Sheeddaha", "Xaruntu waxay ku taal Koonfur-ta Power Station-ka Sheedaha", 517963],
  ["Xero-Awr", "Xaruntu waxay ku taal Isgoyska xero awr ama kasoo horjeed-ka Gamuur Furniture", 523393],
  ["Daloodho", "Xaruntu waxay ku taal Xaafada Daloodho,Start Box area", 533445],
  ["Suuqa", "Xaruntu waxay ku taal galbeed-ka geerash aw-cali", 521042],
  ["Kililka", "Xaruntu waxay ku taal Istaanka basaska kililka", 540206],
  ["Gebiley", "Xaruntu waxay ku taal Mgaalda gebiley", 625048],
  ["Wajaale", "Xaruntu waxay ku taal Magaalda Wajaale", 4322266]
];

let element = branches.map((branch) => {

  return (
    <div class="col-md-4 col-sm-6 col-lg-3 mb-5">
      <div class="card b-card text-center">
        <div class="card-header bg-green">
          <h5 class="card-title">Xarunta  {branch[0].toUpperCase()}</h5>
        </div>
        <div class="card-body">
          <p class="">{branch[1]}</p>
          <h6>Kala Xidhiidh <i class="fas fa-phone-volume"></i></h6>
          <ul class="list-group text-center list-group-flush">
            <li class="list-group-item"><i class="fas fa-phone-square"></i> {branch[2]} </li>
            { /* <li class="list-group-item"><i class="fas fa-mobile-alt"></i> {branch[3]}</li> */}
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
