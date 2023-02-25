
const dataall = [
    {
        "time": "2023-2-24",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-2-25",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-2-26",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-2-27",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-2-28",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-01",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-02",
        "status": "✖️หยุด✖️"
      },
      {
        "time": "2023-3-03",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-04",
        "status": "⚠️เข้างานปกติ 10.00 น.| 17.00 น.ไปงานสมุทรสาคร|กลับมาถึงบริษัทแล้วไปมหาสารคามต่อ|"
      },
      {
        "time": "2023-3-05",
        "status": "งานเลี้ยงคุณลูกค้า ร้าน บ้านชายนันท์  ต.บรบือ อ.บรบือ จ.มหาสารคาม"
      },
      {
        "time": "2023-3-06",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-07",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-08",
        "status": "⚠️ถ่าย Mv โอมเพี้ยงนะจังงัง"
      },
      {
        "time": "2023-3-09",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-10",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-11",
        "status": "⚠️เข้างานปกติ 10.00 น. | 16.00 ไปงานต่อชลบุรี| Hillary 1"
      },
      {
        "time": "2023-3-12",
        "status": "✖️หยุด✖️"
      },
      {
        "time": "2023-3-13",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-14",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-15",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-16",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-17",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-18",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-19",
        "status": "✖️หยุดกันหมด✖️"
      },
      {
        "time": "2023-3-20",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-21",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-22",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-23",
        "status": "⚠️เข้างานปกติ 10.00 น.|12.00น.ไปงานต่อexhibition fair Makro Impack เมืองทองธานี"
      },
      {
        "time": "2023-3-24",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-25",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-26",
        "status": "✖️หยุด✖️"
      },
      {
        "time": "2023-3-27",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-28",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-29",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-30",
        "status": "✅เข้างานปกติ 10.00 น."
      },
      {
        "time": "2023-3-31",
        "status": "⚠️เข้างานปกติ 10.00 น. | 21.00 ไปงานตาอ แสงจันทรห์สุวรรณภูมิ"
      }
]


var ch = 0;
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var table = document.getElementById('showstatus')

for (var i = 0; i < dataall.length; i++) {
    var nrow = `
    <tr>
        <td>${dataall[i].time}</td>
        <td>${dataall[i].status}</td>
    </tr> 
    `
    table.innerHTML += nrow
}

document.getElementById('showday').innerHTML = `วันนี้วันที่ : <b class = 'btn btn-danger'> ${date} </b>`;
Checkdatastatus();

function Checkdatastatus(){
  for (var i = 0; i < dataall.length; i++) {
    if (date === dataall[i].time) {
      document.getElementById('showstatustoday').innerHTML = `STATUS : <b class = 'btn btn-primary'> ${dataall[i].status} </b>`;
      break;
    } else {
      
    }
  }

}


// function delay(milliseconds){
//   return new Promise(resolve => {
//       setTimeout(resolve, milliseconds);
//   });
// }


// async function init(){
//   await delay(1000);
//   console.log(ch);
//   init();
// }

// init();

