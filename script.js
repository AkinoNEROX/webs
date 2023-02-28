const dataall = [
  {
      "time": "24-2-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "25-2-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "26-2-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "27-2-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "28-2-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "1-3-2023",
      "status": "✖️หยุด✖️"
    },
    {
      "time": "2-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "3-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "4-3-2023",
      "status": "⚠️เข้างานปกติ 10.00 น.| 17.00 น.ไปงานสมุทรสาคร|กลับมาถึงบริษัทแล้วไปมหาสารคามต่อ|"
    },
    {
      "time": "5-3-2023",
      "status": "งานเลี้ยงคุณลูกค้า ร้าน บ้านชายนันท์  ต.บรบือ อ.บรบือ จ.มหาสารคาม"
    },
    {
      "time": "6-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "7-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "8-3-2023",
      "status": "⚠️ถ่าย Mv โอมเพี้ยงนะจังงัง"
    },
    {
      "time": "9-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "10-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "11-3-2023",
      "status": "⚠️เข้างานปกติ 10.00 น. | 16.00 ไปงานต่อชลบุรี| Hillary 1"
    },
    {
      "time": "12-3-2023",
      "status": "✖️หยุด✖️"
    },
    {
      "time": "13-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "14-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "15-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "16-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "17-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "18-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "19-3-2023",
      "status": "✖️หยุดกันหมด✖️"
    },
    {
      "time": "20-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "21-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "22-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "23-3-2023",
      "status": "⚠️เข้างานปกติ 10.00 น.|12.00น.ไปงานต่อexhibition fair Makro Impack เมืองทองธานี"
    },
    {
      "time": "24-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "25-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "26-3-2023",
      "status": "✖️หยุด✖️"
    },
    {
      "time": "27-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "28-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "29-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "30-3-2023",
      "status": "✅เข้างานปกติ 10.00 น."
    },
    {
      "time": "31-3-2023",
      "status": "⚠️เข้างานปกติ 10.00 น. | 21.00 ไปงานตาอ แสงจันทรห์สุวรรณภูมิ"
    }
]



var ch = 0;
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var table = document.getElementById('showstatus')
let tomorrow =  new Date()
tomorrow.setDate(today.getDate() + 1)

var datetomorrow = tomorrow.getDate()+'-'+(tomorrow.getMonth()+1)+'-'+tomorrow.getFullYear();

var time = today.getHours() + "." + today.getMinutes();
var timeout = 18.00
var timeset = time - 10.00
var timeset2 = timeset * 100
var timeset3 = timeset2 / 8

console.log(timeset3);

if (timeset3 < 20) {
  document.getElementById('showstatustime').innerHTML = `<div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${timeset3}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="">${timeset3}%</div>`;
}else if  (timeset3 < 40) {
  document.getElementById('showstatustime').innerHTML = `<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${timeset3}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="">${timeset3}%</div>`;
}else if  (timeset3 < 60) {
  document.getElementById('showstatustime').innerHTML = `<div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: ${timeset3}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="">${timeset3}%</div>`;
}else if  (timeset3 < 80) {
  document.getElementById('showstatustime').innerHTML = `<div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: ${timeset3}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="">${timeset3}%</div>`;
}else if  (timeset3 < 90) {
  document.getElementById('showstatustime').innerHTML = `<div class="progress-bar progress-bar-striped bg-danger" style="width: ${timeset3}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="">${timeset3}%</div>`;
}else {
  document.getElementById('showstatustime').innerHTML = `<div class="progress-bar progress-bar-striped bg-success" style="width: ${timeset3}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="">เลิกงาน</div>`;
}

for (var i = 0; i < dataall.length; i++) {
  var nrow = `
  <tr>
      <td>${dataall[i].time}</td>
      <td>${dataall[i].status}</td>
  </tr> 
  `
  table.innerHTML += nrow
}

document.getElementById('showday').innerHTML = `วันนี้วันที่ : <b class = 'text-danger'> ${date} </b>`;
Checkdatastatus();

function Checkdatastatus(){

  
for (var i = 0; i < dataall.length; i++) {
  if (date === dataall[i].time) {
    document.getElementById('showstatustoday').innerHTML = `รายละเอียด : <b class = 'text-success'> ${dataall[i].status} </b>`;
    break;
  } else {
    
  }
}

for (var i = 0; i < dataall.length; i++) {
  if (datetomorrow === dataall[i].time) {
      document.getElementById('tomorrow').innerHTML = `
      <h3 class = 'text-center'>พรุ่งนี้</h3>
      วันที่ : <b class = 'text-danger'> ${datetomorrow} </b></br>
      รายละเอียด : <b class = 'text-success'> ${dataall[i].status} </b>`;
    break;
  } else {
    
  }
}


}
