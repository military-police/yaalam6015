var x = document.getElementById("menu"); //gets the navbar menu
var menu = false ; //not wroking


//test if the navbar is open
function navbar() {
    menu = true;
    if (x.style.display === "flex")  {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
      menu = false;
    }
  }

//event lisener
  window.onresize = doALoadOfStuff;
//function on event
function doALoadOfStuff() {
    if (window.innerWidth < 768 ) {
        x.style.display === "flex"
    }
    if (window.innerWidth > 768 ) {
      x.style.display = "flex"
    }

}


//תמיכה בשפות אחרות

var lang = document.getElementById('lang');
lang.addEventListener('change', (event) => {
  console.log(event.target.value)
  if(event.target.value == "EN"){
    eng()
  }
  if(event.target.value == "HE"){
    heb()
  }
  if(event.target.value == "AR"){
    arb()
  }
});


var bars = document.querySelectorAll('#bar')
var footer = document.querySelector('#footer')
var page = document.querySelector('#page')



function eng(){
  bars.forEach((element, i) => {
    element.textContent = langs.en.nav[i]
  });
  footer.textContent = langs.en.footer
  page.textContent = langs.en.page1
}

function heb(){
  bars.forEach((element, i) => {
    element.textContent = langs.he.nav[i]
  });
  footer.textContent = langs.he.footer
  page.textContent = langs.he.page1
}

function arb(){
  bars.forEach((element, i) => {
    element.textContent = langs.ab.nav[i]
  });
  footer.textContent = langs.ab.footer
  page.textContent = langs.ab.page1
}


const langs = {
  en : {
    nav:[ 'Info', 'Background' , 'Contact', 'Send A Complaint'],
    footer:"This website is served by the National Unit for Operational   Investigations in the IDF , in order to enable the service to  the public.",
    page1:"The National Unit for Operational Investigations in the IDF is authorized to investigate suspected criminal offenses under international humanitarian law carried out during operational activities or ongoing security by soldiers under IDF command.",
    page2:[
      'On January 2017, the Investigating Military Police, invented the National Unit for Operational Investigations (so called: “YAALAM”), following two government committees (Turkel 2013, Ciechanover 2015) that dealt with international humanitarian law, inter alia with respect to suspected criminal offenses committed by IDF soldiers during operational activity or ongoing security',
      'From the report of the Turkel Committee which recommended the establishment of the unit, section 62, MPC for operational matters:',
      '"The committee came to conclusion that alongside the State Attorney\'s Office for Operational Matters in the military prosecution, there is room to establish a department in the MPC for operational matters.',
      'The military investigators\' appointed to the MPC for operational matters will be trained in the rules of international humanitarian law, and in particular in the duties relating to the investigation of violations of these rules.',
      'In order to ensure direct communication with witnesses, complainants and other relevant investigators, it is recommended that interrogators who are proficient in Arabic be among the investigators. "In order to promote the MPC\'s accessibility to the complainants, it is recommended that MPIU bases for operational matters be deployed in the areas where the events under investigation take place."',
      'From the report of the “Ciechanover” Committee, Recommendation No. 9 - Sections 91-93, MPC for operational matters and the recommendation for implementation:',
      '"The “Turkel” Commission found that one of the requirements arising from the principle of effectiveness and thoroughness is that an investigation be conducted professionally, therefore the committee recommended the establishment of a body for operational matters in the MPC, similar to such a body operating in the military prosecutor\'s office. The dedicated body will specialize in handling investigations into complaints of violations of the rules of international humanitarian law. The committee recommended that researchers in this body receive appropriate training, and that their sons also have proficient researchers in the Arabic language. It was also recommended that MPI bases for operational matters be deployed in the areas where the investigated events take place. "',
      '"We recommend that the military authorities establish a dedicated unit in the IDF that will investigate operational incidents. It is proposed that this unit be established and operational within 4 months from the date of approval of the recommendations of this report in the Government " "Representatives of the Military Prosecutor\'s Office informed the staff that the army adopted the recommendation and began the initial processes required for the establishment of this unit. The competent bodies in the army even instructed on the allocation of appropriate resources. The Supreme Court of the IDF or any other suitable host will be decided by the IDF. "',
      'In addition to the conclusions of the aforesaid committees, on January 28, 2018, Prime Minister Benjamin Netanyahu decided to expand the powers of the MPIU unit (under the responsibility of the YALM) regarding the interrogation of Border Police soldiers in shooting incidents in Judea and Samaria, while operating under IDF command. A series of discussions on the subject, a decision was made that the implementation of the decision and the transfer of responsibility will be carried out starting in October 2019.'
    ],
    page3:[
      
    ]
  },

  he : {
    nav:[ 'כללי', 'אודות' , 'דרכים ליצרת קשר', 'הגשת תלונה'],
    page1:"כללי : היחידה הארצית לחקירות מבצעיות במצ\"ח מוסמכת לחקור חשד לעבירה פלילית, בדין ההומניטארי הבין-לאומי שהתבצעה במהלך פעילות מבצעית או ביטחון שוטף ע\"י חיילים הנמצאים תחת פיקוד צה\"ל",
    footer:"אתר זה מופעל ע\"י היחידה מתוך מטרה להנגיש את השירות לציבור."

  },

  ab : {
    nav:[ 'معلومات', 'خلفية' , 'اتصل', 'شروط الامتثال للشكوى'],
    page1:"معلومات : الوحدة الوطنية للتحقيقات العملياتية في جيش الدفاع الإسرائيلي مخولة بالتحقيق في الجرائم الجنائية المشتبه بها بموجب القانون الإنساني الدولي والتي يتم تنفيذها أثناء الأنشطة العملياتية أو الأمن المستمر من قبل الجنود تحت قيادة جيش الدفاع الإسرائيلي.",
    footer:"يتم تشغيل هذا الموقع من قبل الوحدة لغرض جعل الخدمة في متناول الجمهور."

  }
} 