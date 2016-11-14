// gangster data
var date_data = [
  'แมว',
  'วานร',
  'พยัคฆ์',
  'โค',
  'พิราบ',
  'มังกร',
  'แมงป่อง',
  'จิ้งจอก',
  'วิหค',
  'กระต่าย',
  'โลมา',
  'กิเลน',
  'ยีราฟ',
  'อูฐ',
  'กุ้ง',
  'กูปรี',
  'ปลวก',
  'ปูนิ่ม',
  'ยุงลาย',
  'จิ้งจก',
  'ปลาทอง',
  'พะยูน',
  'อึ่งอ่าง',
  'แย้',
  'ลูกหมา',
  'ลูกเจี๊ยบ',
  'แมลงสาบ',
  'ปลาทู',
  'หมูสับ',
  'หอยจ๊อ',
  'เป็ดย่าง',
];
var month_data = [
  [ 'ม.ค.',   'ทมิฬ' ],
  [ 'ก.พ.',   'อำมหิต' ],
  [ 'มี.ค.',   'คะนอง' ],
  [ 'เม.ย.',  'คำราม' ],
  [ 'พ.ค.',   'อสูร' ],
  [ 'มิ.ย.',   'มฤตยู' ],
  [ 'ก.ค.',   'มรณะ' ],
  [ 'ส.ค.',   'คลั่ง' ],
  [ 'ก.ย.',   'กระหายเลือด' ],
  [ 'ต.ค.',   'พญายม' ],
  [ 'พ.ย.',   'โลกันตร์' ],
  [ 'ธ.ค.',   'ทรนง' ],
];

// apply data to combobox
$.each(date_data, function(i, v){
  $('#birth_date').append("<option value='" + v + "'>" + (i+1) + "</option>");
})
$.each(month_data, function(i, r){
  $('#birth_month').append("<option value='" + r[1] + "'>" + r[0] + "</option>");
})

// search button
$('#search').click(function(){
  var word_date  = $('#birth_date').val();
  var word_month = $('#birth_month').val();
  if((word_date != '')&&(word_month != '')){
    $('#your-name').html(word_date + word_month);
    $('.modal').addClass('is-active');
  }
});

// modal
$('.modal .delete').click(function(){
  $('.modal').removeClass('is-active');
});
$('.modal #close').click(function(){
  $('.modal').removeClass('is-active');
});
