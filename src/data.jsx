const data = [
  {
    id: 101,
    name: "Panadol",
    price: 24,
    desc: "بانادول يحتوي على باراسيتامول، يُستخدم كمسكن للألم وخافض للحرارة في حالات الصداع، ألم الأسنان، الحمى، وآلام العضلات. يؤخذ بمعدل قرص كل 6-8 ساعات حسب الحاجة، بحد أقصى 4 أقراص في اليوم. لا يُنصح باستخدامه لمرضى الكبد المزمن.",
    image: "",
    isStrip: true,
    pieces: 24,
    stripsPerBox: 3
  },
  {
    id: 102,
    name: "Paramol",
    price: 20,
    desc: "بارامول يُستخدم لتسكين الألم وخفض الحرارة وعلاج أعراض نزلات البرد والإنفلونزا. يحتوي على باراسيتامول وكافيين، ويؤخذ قرص كل 6 ساعات. يُمنع استخدامه لمن يعانون من ارتفاع ضغط الدم أو مشاكل في القلب.",
    image: "",
    isStrip: true,
    pieces: 30,
    stripsPerBox: 2
  },
  {
    id: 103,
    name: "Cataflam",
    price: 38,
    desc: "كتافلام يحتوي على ديكلوفيناك بوتاسيوم، يُستخدم لعلاج آلام الأسنان، المفاصل، الصداع، وآلام الدورة الشهرية. يؤخذ قرص مرتين إلى ثلاث مرات يوميًا بعد الأكل. غير مناسب لمرضى قرحة المعدة أو من يعانون من أمراض القلب.",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExASFRUSFxgVFhgVEhcVEhUWGxcYFxUZFhcZHiggGx8mGxkaITIiMSkrLi4uGB8zOjMsOCotLisBCgoKDg0OGxAQGzclHyUwLzAtLS0vMC8tNS0tLS4vLS0yNzIvLSstLS8rLysvNi0tLS0tKy0vLTIvLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xAA/EAACAgECAwYEBAQFAQkBAAABAgADEQQhBRIxBhMiQVFhMnGBkQcUQqFSYnKxIzPB0fBzJENTgpKisrPxFf/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAtEQEAAgIBAwMDAQkBAAAAAAAAAQIDEQQSITEFQVETIrFhIzJCcaHB4fDxFP/aAAwDAQACEQMRAD8A7jERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERATwmeZ9MTT1aXcvgNfNvuwOB6YXP+sDcDg//AJPQZUreGaksGtvtbz8BZK16eSbn7joZnv4rZVtixtv1LkDYn6bDOS3zl+j4lG1niVrRceuY76fb+orj55HX2m43aOkEBmOT/COcA+YyPP26+0jok2mYmLT6gOoZc4PqpU/YiZMyqXsREBERAREQEREBERAREQEREBERAREQEREBERAhtU1gtGBlNwQMZyT1+QA/efK8XAHiDptk8y7DYsc/QH7TPr9QlYZ7HRFU7s7BVHzJ2nxptSli81bo6nzRgy/cS2hmq4kp2DKcZB332JB/cH7GZ2tVviX7gGaNmjQgjkG/XG3qPL5n7zNIH2+ipYEco3GD6Y9MdJ7peFUoSyVqCfPr9vSYp6D7wN+2wKMnP0BP9pH38QO4UYx16Mw28/0qfnmZVvYec8stDDdFJ8sjMQNIhyfiOTv1Ow3O58vkJ906pz0ZiScDbK+2Sf8ASQXFO0Y0zD83pLEqJ21FJ76pfTnUjmX5YI+clq9ZpmqFyaitqj+v4gD/AFDZd+u00vWa13bx8+yt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+TS8R0xqflAajspf3pzellQIOeQVs+2+U/T5+fl9JKW6Xuaspa2AQbTsGC+wPyxMFmlHiJss5lX2bNmehORyrjfzMxaMLzYdVdCrI2QeVuboTvsw2x8pSt+r7dNb4Yxx9Tr3op1dbKGdrLFIfwuSgH8GGBOffbAmfgr6Vl5LtMt2STzBmSwKDsAw64zNZ+yunYIqJcpUNnFnMbCSSu2MDAwNhvib+k4eKVKrlXAAAdTzH9veWrhiqtuZOSNeEtp+w2k1O2k1j1WHpVqVDZ9lsXGfsTI/iHYXiOlPN+XLhSGD0HvMEHIPKPF+0uXZHsJezpdczVhSrAHPO2DkYX9PzO/tOrROCtv0TT1PLinUT1R+rga9sK9m1GnvFykFkRkSqxhjBYOOesEjcDrNPs+v5qzV22qpbke/GPCHIswVB9C23yE7zxPgun1AxdRXZ/UoJ+h6iRHCewuj09j2VIwFi8rIzc1ZHyP9sxbHedbnsmnNwVpbprMWnXvuPO9R8KZ2H4ZfqOR0Vq6lAHeP0JAAPdj9Q269NzOm6HhyVZKjLN8Tn4m+vkPbpNtVAGAAANgBsAPaeyceCtbTbzMuDNmnJPxBERNmJERAREQEREBERAREQEREBERATx1BGCAQeoO4M9iBXOJ9itJbuK+6b1qwo+qEFf2zKtxbsHqFU90yWjy/7t/sTj950yIH5z7Q9mVD2m7TWVWWcvKVJrSs5BbkTo2enU+sx9muCLU7BS5UkE824yPMT9GX0K45XVWU9QwBH2MjKuzWmVuZaVH8v6M+uP8Aghfq+VF4RwG67ZE5U87GGAP6fWXPgXZSjTeILz2f+I+7D+kfp/v7ydUY2AxiewrsiIhBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP//Z",
    isStrip: true,
    pieces: 20,
    stripsPerBox: 4
  },
  {
    id: 104,
    name: "Brufen",
    price: 27,
    desc: "بروفين يحتوي على إيبوبروفين، مسكن للآلام ومضاد للالتهاب، يُستخدم في حالات الصداع، ألم الظهر، وآلام العضلات. يؤخذ من مرتين إلى ثلاث مرات يوميًا بعد الطعام. لا يُستخدم لمرضى الكلى أو الكبد، ويُفضل تجنبه في الحمل.",
    image: "",
    isStrip: true,
    pieces: 40,
    stripsPerBox: 3
  },
  {
    id: 105,
    name: "Voltaren",
    price: 30,
    desc: "فولتارين يحتوي على ديكلوفيناك صوديوم، يُستخدم لتخفيف الألم والالتهابات، خاصةً في أمراض المفاصل والروماتيزم. يؤخذ مرتين يوميًا بعد الأكل. يجب الحذر عند استخدامه لمرضى القلب، ويُمنع استخدامه أثناء الحمل.",
    image: "",
    isStrip: false,
    pieces: 25,
    stripsPerBox: 0
  },
    {
    id: 106,
    name: "Comtrex",
    price: 34,
    desc: "كومتريكس يُستخدم لعلاج أعراض نزلات البرد مثل احتقان الأنف، الصداع، الحمى، والعطس. يحتوي على مضادات للهستامين ومسكنات. الجرعة قرص كل 8 ساعات. لا يُنصح به لمرضى الضغط أو القلب أو الكبد.",
    image: "",
    isStrip: true,
    pieces: 30,
    stripsPerBox: 3
  },
  {
    id: 107,
    name: "Flurest",
    price: 22,
    desc: "فلورست يُستخدم لتخفيف أعراض البرد مثل الرشح، احتقان الجيوب الأنفية، وارتفاع الحرارة. يحتوي على باراسيتامول وكلورفينرامين. الجرعة قرص كل 6 إلى 8 ساعات. يُمنع لمرضى الضغط المرتفع أو مرضى الجلوكوما.",
    image: "",
    isStrip: true,
    pieces: 20,
    stripsPerBox: 2
  },
  {
    id: 108,
    name: "Congestal",
    price: 28,
    desc: "كونجستال يُعالج الزكام، احتقان الأنف، الكحة، والحرارة. يحتوي على باراسيتامول وسودوافدرين وكلورفينرامين. يُؤخذ قرص كل 8 ساعات. يُمنع على مرضى ارتفاع ضغط الدم أو من يعانون من مشاكل في الغدة الدرقية.",
    image: "",
    isStrip: true,
    pieces: 24,
    stripsPerBox: 2
  },
  {
    id: 109,
    name: "Cold-Free",
    price: 18,
    desc: "كولد فري يُستخدم لعلاج أعراض البرد والأنفلونزا مثل الرشح والحمى والكحة الجافة. الجرعة قرص كل 6 ساعات. يُنصح بتجنبه في الحمل والرضاعة، ويُمنع استخدامه للأطفال دون 12 سنة.",
    image: "",
    isStrip: false,
    pieces: 25,
    stripsPerBox: 0
  },
  {
    id: 110,
    name: "Mucosol",
    price: 40,
    desc: "ميوكوسول مذيب للبلغم يُستخدم لعلاج الكحة المصحوبة ببلغم في أمراض الجهاز التنفسي. الجرعة للبالغين: ملعقة كبيرة 3 مرات يوميًا. يُستخدم بحذر مع مرضى الكبد. غير مناسب للأطفال أقل من سنتين.",
    image: "",
    isStrip: false,
    pieces: 50,
    stripsPerBox: 0
  },
  {
    id: 111,
    name: "Sinupret",
    price: 65,
    desc: "سينيوبريت مكمل عشبي يُساعد في علاج التهابات الجيوب الأنفية والاحتقان. الجرعة قرص 3 مرات يوميًا. آمن نسبيًا لكن يجب الحذر مع الحوامل والمرضعات. يُفضل استشارة الطبيب قبل الاستخدام.",
    image: "",
    isStrip: true,
    pieces: 30,
    stripsPerBox: 3
  },
  {
    id: 112,
    name: "Oplex",
    price: 25,
    desc: "أوبلكس شراب يُستخدم لعلاج الكحة وطرد البلغم، يحتوي على أوكسوميمازين وجوافينيسين. الجرعة: ملعقة كبيرة 3 مرات يوميًا بعد الأكل. يجب تجنبه في الأطفال أقل من 6 سنوات ومرضى الكبد.",
    image: "",
    isStrip: false,
    pieces: 40,
    stripsPerBox: 0
  },
  {
    id: 113,
    name: "Tussivan",
    price: 30,
    desc: "توسيفان يُستخدم لعلاج السعال الجاف، يحتوي على ديكستروميثورفان وسودوافدرين. الجرعة: قرص مرتين يوميًا أو حسب الحاجة. يجب الحذر مع مرضى الضغط المرتفع ويُمنع على الأطفال دون 12 سنة.",
    image: "",
    isStrip: true,
    pieces: 30,
    stripsPerBox: 2
  },
    {
    id: 114,
    name: "Amoxil",
    price: 42,
    desc: "أموكسيل يحتوي على أموكسيسيللين، مضاد حيوي واسع المدى يُستخدم لعلاج التهابات الجهاز التنفسي، التهابات الأذن، والمجاري البولية. الجرعة: قرص كل 8 ساعات لمدة 5-7 أيام. يُستخدم بحذر مع مرضى الكُلى والحساسية للبنسيلين.",
    image: "",
    isStrip: true,
    pieces: 30,
    stripsPerBox: 3
  },
  {
    id: 115,
    name: "Curam",
    price: 55,
    desc: "كيورام يحتوي على أموكسيسيللين وكلافيولانيك أسيد، يُستخدم لعلاج التهابات الجيوب الأنفية، اللوزتين، الجهاز التنفسي، والجلد. الجرعة: قرص كل 12 ساعة. يُمنع لمرضى الكبد والحساسية للبنسيلين.",
    image: "",
    isStrip: true,
    pieces: 20,
    stripsPerBox: 2
  },
  {
    id: 116,
    name: "Augmentin",
    price: 60,
    desc: "أوجمنتين يحتوي على أموكسيسيللين وكلافيولانات، مضاد حيوي واسع المدى يُستخدم لعلاج عدوى الصدر، الجيوب، الأسنان، والجلد. الجرعة: قرص كل 12 ساعة. لا يُستخدم في حالات أمراض الكبد أو الحساسية للبنسيلين.",
    image: "",
    isStrip: true,
    pieces: 24,
    stripsPerBox: 3
  },
  {
    id: 117,
    name: "Zithromax",
    price: 70,
    desc: "زيثروماكس يحتوي على أزيثرومايسين، مضاد حيوي يُستخدم لعلاج التهابات الحلق، الرئة، الأذن، وعدوى الجلد. يُؤخذ قرص واحد يوميًا لمدة 3-5 أيام. يُستخدم بحذر مع مشاكل الكبد ولا يُفضل مع الحوامل إلا باستشارة الطبيب.",
    image: "",
    isStrip: true,
    pieces: 20,
    stripsPerBox: 2
  },
  {
    id: 118,
    name: "Cefotax",
    price: 90,
    desc: "سيفوتاكس هو مضاد حيوي من نوع السيفالوسبورينات، يُستخدم في حالات العدوى الشديدة مثل الالتهاب الرئوي وعدوى الدم، ويُعطى بالحقن فقط. يُستخدم تحت إشراف طبي ولا يُعطى لمن لديهم حساسية من السيفالوسبورينات.",
    image: "",
    isStrip: false,
    pieces: 30,
    stripsPerBox: 0
  },
  {
    id: 119,
    name: "Septrin",
    price: 33,
    desc: "سبترين يحتوي على سلفاميثوكسازول وتريميثوبريم، يُستخدم لعلاج التهابات البول والجهاز التنفسي. الجرعة: قرص كل 12 ساعة. يُمنع استخدامه في حالات أمراض الدم، الحمل، أو الحساسية للكبريت.",
    image: "",
    isStrip: true,
    pieces: 25,
    stripsPerBox: 2
  },
  {
    id: 120,
    name: "Tavanic",
    price: 80,
    desc: "تافانيك يحتوي على ليفوفلوكساسين، مضاد حيوي قوي يُستخدم لعلاج التهابات الجهاز التنفسي والمجاري البولية. الجرعة: قرص يوميًا لمدة 5-7 أيام. يُمنع استخدامه لمن دون 18 عامًا أو مرضى الأعصاب والصرع.",
    image: "",
    isStrip: true,
    pieces: 30,
    stripsPerBox: 3
  },
    {
    id: 121,
    name: "Feroglobin",
    price: 50,
    desc: "فيروجلوبين يحتوي على الحديد وفيتامين ب12 وحمض الفوليك، يُستخدم لعلاج حالات الأنيميا ونقص الحديد خاصة عند الحوامل والمرضعات. الجرعة: كبسولة يوميًا بعد الأكل. يُستخدم بحذر مع مرضى الكبد ويُفضل شربه مع عصير برتقال لتحسين الامتصاص.",
    image: "",
    isStrip: false,
    pieces: 30,
    stripsPerBox: 0
  },
  {
    id: 122,
    name: "Multi-Maca",
    price: 85,
    desc: "مالتي ماكا مكمل غذائي طبيعي يُستخدم لتحسين الطاقة والقدرة الجنسية وتقوية الجسم بشكل عام. الجرعة: كبسولة أو اثنين يوميًا. لا يُنصح باستخدامه لمرضى الضغط أو من يعانون من مشاكل في القلب.",
    image: "",
    isStrip: false,
    pieces: 25,
    stripsPerBox: 0
  },
  {
    id: 123,
    name: "Hematinic",
    price: 35,
    desc: "هيماتينيك تركيبة لعلاج الأنيميا تحتوي على الحديد، حمض الفوليك، وفيتامينات ب. الجرعة: قرص واحد إلى قرصين يوميًا بعد الأكل. يجب تجنب تناوله مع الشاي أو القهوة لأنه يقلل من الامتصاص. يُستخدم بحذر مع مرضى القولون.",
    image: "",
    isStrip: true,
    pieces: 30,
    stripsPerBox: 3
  },
  {
    id: 124,
    name: "Feromin",
    price: 32,
    desc: "فيرومين مكمل غذائي غني بالحديد وفيتامينات متعددة يُستخدم لعلاج الأنيميا ونقص المعادن. يُؤخذ مرة واحدة يوميًا بعد الأكل. آمن للحامل ولكن يجب استشارة الطبيب قبل استخدامه مع أدوية أخرى.",
    image: "",
    isStrip: true,
    pieces: 20,
    stripsPerBox: 2
  },
  {
    id: 125,
    name: "Becozyme",
    price: 28,
    desc: "بيكوزيم يحتوي على مجموعة فيتامينات ب المركبة، يُستخدم لعلاج ضعف الأعصاب والإجهاد ونقص الطاقة. الجرعة: قرص يوميًا. لا يُفضل استخدامه لمرضى الكبد أو الأشخاص الذين يعانون من حساسية تجاه أحد مكونات الفيتامينات.",
    image: "",
    isStrip: true,
    pieces: 25,
    stripsPerBox: 2
  },
    {
    id: 126,
    name: "Amaryl",
    price: 45,
    desc: "أمارييل يحتوي على جليمبريد، يُستخدم لتحفيز البنكرياس لإفراز الإنسولين في مرضى السكري من النوع الثاني. الجرعة: مرة واحدة يوميًا قبل الإفطار. يُستخدم بحذر في كبار السن ومرضى الكبد، وقد يسبب انخفاضًا شديدًا في السكر.",
    image: "",
    isStrip: true,
    pieces: 30,
    stripsPerBox: 2
  },
  {
    id: 127,
    name: "Janumet",
    price: 140,
    desc: "جانومت يحتوي على ميتفورمين وسيتاجليبتين، يُستخدم لتنظيم مستوى السكر في الدم عند مرضى السكري من النوع الثاني. الجرعة: قرص مرتين يوميًا مع الطعام. يُمنع استخدامه لمرضى الكلى أو من لديهم تحسس من مكوناته.",
    image: "",
    isStrip: true,
    pieces: 30,
    stripsPerBox: 3
  },
  {
    id: 128,
    name: "Cidophage",
    price: 30,
    desc: "سيدوفاج يحتوي على ميتفورمين، يُستخدم في حالات السكري النوع الثاني، وأحيانًا لحالات تكيّس المبايض. الجرعة: من قرص إلى قرصين يوميًا بعد الأكل. قد يسبب مشاكل بالمعدة، ويُمنع استخدامه في حالات الفشل الكلوي.",
    image: "",
    isStrip: true,
    pieces: 20,
    stripsPerBox: 2
  },
  {
    id: 129,
    name: "Glucophage",
    price: 36,
    desc: "جلوكوفاج هو الاسم التجاري للميتفورمين، ويعمل على تقليل إنتاج الجلوكوز من الكبد وتحسين حساسية الخلايا للأنسولين. الجرعة: قرص إلى قرصين يوميًا بعد الأكل. يجب مراقبة وظائف الكلى قبل الاستخدام.",
    image: "",
    isStrip: true,
    pieces: 25,
    stripsPerBox: 2
  },
  {
    id: 130,
    name: "Mixtard",
    price: 95,
    desc: "ميكستارد هو إنسولين متوسط المفعول يُستخدم في التحكم في مستويات السكر في الدم لمرضى السكري. يُعطى عن طريق الحقن تحت الجلد مرة أو مرتين يوميًا حسب توجيهات الطبيب. يجب مراقبة مستوى السكر باستمرار وتجنب نوبات الهبوط.",
    image: "",
    isStrip: false,
    pieces: 30,
    stripsPerBox: 0
  },
    {
    id: 131,
    name: "Concor",
    price: 42,
    desc: "كونكور يحتوي على بيسوبرولول، من أدوية حاصرات بيتا، يُستخدم لعلاج ارتفاع ضغط الدم واضطرابات القلب. الجرعة: قرص واحد يوميًا صباحًا. يُستخدم بحذر مع مرضى الربو والسكري، لأنه قد يخفي أعراض هبوط السكر.",
    image: "",
    isStrip: true,
    pieces: 30,
    stripsPerBox: 2
  },
  {
    id: 132,
    name: "Amlodipine",
    price: 28,
    desc: "أملوديبين من مجموعة حاصرات قنوات الكالسيوم، يُستخدم لتقليل ضغط الدم وتحسين تدفق الدم. الجرعة: مرة واحدة يوميًا. قد يسبب تورمًا في الأطراف أو دوخة، ويجب الحذر منه لمرضى الكبد.",
    image: "",
    isStrip: true,
    pieces: 25,
    stripsPerBox: 2
  },
  {
    id: 133,
    name: "Capoten",
    price: 33,
    desc: "كابوتين يحتوي على كابتوبريل، من مثبطات الإنزيم المحول للأنجيوتنسين (ACEI)، يُستخدم لعلاج الضغط وفشل القلب. الجرعة: قرص مرتين إلى ثلاث مرات يوميًا قبل الأكل. لا يُستخدم في الحمل، ويجب مراقبة وظائف الكلى والبوتاسيوم.",
    image: "",
    isStrip: true,
    pieces: 20,
    stripsPerBox: 2
  },
  {
    id: 134,
    name: "Norvasc",
    price: 31,
    desc: "نورفاسك يحتوي على أملوديبين، يُستخدم لتقليل ضغط الدم ومنع الذبحات الصدرية. الجرعة: قرص واحد يوميًا. آمن إلى حد ما لكن قد يسبب دوخة أو صداع. يجب مراقبة الضغط بانتظام خاصةً مع كبار السن.",
    image: "",
    isStrip: true,
    pieces: 30,
    stripsPerBox: 3
  },
  {
    id: 135,
    name: "Tenormin",
    price: 37,
    desc: "تينورمين يحتوي على أتينولول، من أدوية حاصرات بيتا، يُستخدم في حالات الضغط والذبحة الصدرية. الجرعة: مرة واحدة يوميًا. قد يُسبب بطء ضربات القلب أو برودة في الأطراف. لا يُستخدم مع مرضى الربو أو بطء القلب.",
    image: "",
    isStrip: true,
    pieces: 30,
    stripsPerBox: 3
  },
    {
    id: 136,
    name: "Tryptizol",
    price: 40,
    desc: "تربتيزول يحتوي على أميتريبتيلين، يُستخدم كمضاد اكتئاب ثلاثي الحلقات، ويُساعد في تهدئة الأعصاب وتحسين النوم. الجرعة: قرص مساءً قبل النوم. قد يسبب دوخة أو نعاس. يُمنع في حالات الزرق أو مشاكل القلب.",
    image: "",
    isStrip: true,
    pieces: 30,
    stripsPerBox: 3
  },
  {
    id: 137,
    name: "Stugeron",
    price: 18,
    desc: "ستوجيرون يحتوي على سيناريزين، يُستخدم لعلاج الدوخة، الدوار، ودوار الحركة. الجرعة: قرص مرتين إلى ثلاث مرات يوميًا. قد يسبب النعاس، ويُفضل تجنب القيادة بعد تناوله. يُستخدم بحذر مع كبار السن.",
    image: "",
    isStrip: true,
    pieces: 20,
    stripsPerBox: 2
  },
  {
    id: 138,
    name: "Dogmatil",
    price: 26,
    desc: "دوجماتيل يحتوي على سلبيريد، يُستخدم لعلاج القلق والقولون العصبي وبعض الاضطرابات النفسية. الجرعة: قرص إلى قرصين يوميًا. قد يسبب النعاس واضطرابات هرمونية. يُمنع استخدامه مع مرضى الصرع.",
    image: "",
    isStrip: true,
    pieces: 25,
    stripsPerBox: 2
  },
  {
    id: 139,
    name: "Cerebrolysin",
    price: 150,
    desc: "سيريبروليزين هو محلول يُعطى بالحقن لتحسين وظائف المخ في حالات الجلطات الدماغية أو الزهايمر. يُستخدم تحت إشراف طبي فقط. قد يسبب دوخة أو تهيج موضعي مكان الحقن. لا يُستخدم مع مرضى الكبد أو الحوامل.",
    image: "",
    isStrip: false,
    pieces: 30,
    stripsPerBox: 0
  },
  {
    id: 140,
    name: "Lyrica",
    price: 120,
    desc: "ليركا يحتوي على بريجابالين، يُستخدم لعلاج التهابات الأعصاب، آلام العضلات، والقلق العام. الجرعة: مرة إلى مرتين يوميًا حسب وصف الطبيب. قد يسبب دوخة، زيادة وزن، أو نعاس. يُمنع القيادة بعد تناوله.",
    image: "",
    isStrip: true,
    pieces: 30,
    stripsPerBox: 3
  },
    {
    id: 141,
    name: "Orohex",
    price: 22,
    desc: "اوراوهيكس غسول فم يحتوي على كلورهيكسيدين، يُستخدم لعلاج التهابات اللثة وقرح الفم. يُستخدم مرتين يوميًا مع المضمضة لمدة 30 ثانية. يُمنع بلعه ويُستخدم لفترة مؤقتة فقط.",
    image: "",
    isStrip: false,
    pieces: 30,
    stripsPerBox: 0
  },
  {
    id: 142,
    name: "Mycozal",
    price: 19,
    desc: "ميكوزال جل للفم يحتوي على ميكونازول، مضاد فطري يُستخدم لعلاج فطريات الفم واللسان. يُوضع بالفم بعد الأكل 3-4 مرات يوميًا. يجب عدم بلعه ويُستخدم بحذر مع الأطفال.",
    image: "",
    isStrip: false,
    pieces: 25,
    stripsPerBox: 0
  },
  {
    id: 143,
    name: "Decal B12",
    price: 35,
    desc: "ديكال بي 12 مكمل يحتوي على فيتامين B12 والكالسيوم، يُستخدم لعلاج تقرحات الفم ونقص فيتامين ب. الجرعة قرص يوميًا. يُستخدم بحذر مع مرضى الكلى ويُفضل تناوله بعد الأكل.",
    image: "",
    isStrip: true,
    pieces: 20,
    stripsPerBox: 2
  },
  {
    id: 144,
    name: "Betadine Mouthwash",
    price: 27,
    desc: "بيتادين غسول فم مطهر يحتوي على بوفيدون-يود، يُستخدم في حالات التهابات الفم واللثة والحلق. يُستخدم للمضمضة مرتين يوميًا. لا يُستخدم لمن لديهم حساسية من اليود أو أمراض الغدة الدرقية.",
    image: "",
    isStrip: false,
    pieces: 30,
    stripsPerBox: 0
  },
  {
    id: 145,
    name: "Tantum Verde",
    price: 40,
    desc: "تانتم فيردي غسول فم مضاد للالتهاب ومسكن موضعي لآلام الحلق والتهابات الفم. يُستخدم 2-3 مرات يوميًا بعد الأكل. آمن للاستخدام الموضعي لفترات قصيرة. يُفضل عدم بلعه.",
    image: "",
    isStrip: false,
    pieces: 25,
    stripsPerBox: 0
  },
    {
    id: 146,
    name: "Bepanthen",
    price: 38,
    desc: "بانثينول كريم يُستخدم لترطيب الجلد وعلاج التسلخات والجفاف. يُدهن من 2-3 مرات يوميًا على المنطقة المصابة. آمن للرضع والحوامل، ويُستخدم بعد تغيير الحفاض أو في حالات الجفاف الشديد.",
    image: "",
    isStrip: false,
    pieces: 30,
    stripsPerBox: 0
  },
  {
    id: 147,
    name: "Fucidin",
    price: 44,
    desc: "فيوسيدين مرهم مضاد حيوي موضعي يُستخدم لعلاج العدوى الجلدية والجروح الملتهبة. يُدهن مرتين يوميًا لمدة 5-7 أيام. يُمنع على الجروح المفتوحة العميقة أو مناطق العين.",
    image: "",
    isStrip: false,
    pieces: 30,
    stripsPerBox: 0
  },
  {
    id: 148,
    name: "MEBO",
    price: 55,
    desc: "ميبو مرهم طبيعي يحتوي على بيتا سيتوستيرول، يُستخدم في علاج الحروق والجروح السطحية والتهابات الجلد. يُوضع مرتين يوميًا على الجرح. آمن نسبيًا، ويمكن استخدامه للأطفال والحوامل.",
    image: "",
    isStrip: false,
    pieces: 30,
    stripsPerBox: 0
  },
  {
    id: 149,
    name: "Dermoviva",
    price: 25,
    desc: "ديرموفيفا كريم يحتوي على مكونات طبيعية مثل زيت الزيتون والألوفيرا، يُستخدم لترطيب البشرة والتسلخات. يُستخدم من مرتين إلى ثلاث مرات يوميًا. آمن للاستخدام اليومي وللبشرة الحساسة.",
    image: "",
    isStrip: false,
    pieces: 25,
    stripsPerBox: 0
  }

];


export default data;
