//Animate
$(function(){
    let wow = new WOW({
        offset: 200,
        mobile: false
    });
    wow.init();
    $("#telNumber").mask("+7 (999) 999-99-99"); 

    $('#telForm').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "../vendor/sendMail/mail.php",
            data: {
                "name": $("#telName").val(),
                "phone": $("#telNumber").val()
            },
        }).done(function(){
            swal("Ваша заяка принята", "Вам обязательно перезвонят", "success");
        }).fail(function(){
            swal("Что-то пошло не так", "Попробуйте позднее", "error");
        });
        return false;
    })

    $("#navbarNav").on("click","a", function (event) {
    //   event.preventDefault();
      let id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 100}, 1000);
    });
});

//About models
let model1 = 
    {
        "Модель":"E-TWOW BOOSTER PLUS ",
        "Автономность аккумулятора":"35km",
        "Максимальный крутящий момент":"15 Нм",
        "Максимальная скорость":"25 км/ч",
        "Амортизатор":"Передний амортизатор + Задний амортизатор",
        "Ограничение максимальной скорости":"Во многих странах существует законодательство, которое ограничивает скорость, поэтому скорость мотороллера можно установить с завода со скоростью 6 км / ч, 12 км / ч, 20 км / ч, 25 км / ч или 30 км / ч. Как только максимальная скорость будет установлена, двигатель станет функционировать, и скутер не будет превышать эту скорость.",
        "Функция нулевого запуска":"По соображениям безопасности, когда вы хотите покататься на скутере, сначала используйте ногу, чтобы сдвинуть ее на небольшое расстояние, затем нажмите правый указатель пальца",
        "Звуковая сигнализация":"Пьезокерамический рожок",
        "UBHI":"UNIBLOCK HUMAN INTERFACE (патент) водостойкий IP54",
        "Шины":"Безвоздушная резина Шины (патент)",
        "Мощность":"500W",
        "Тип двигателя":"DC бесщеточный двигатель",
        "Потребление энергии":"7.5Wh / км",
        "Время зарядки":"1.5h-2h (зарядное устройство 4A) или 3h-3.5h (зарядное устройство 2A)",
        "Входное напряжение зарядного устройства":"220V / 110V",
        "ЖК-дисплей Размер команды":"80 x 60 x 60 мм",
        "Функция ЖК-дисплея":"ODO / Trip / Температура окружающей среды / Скорость / Уровень заряда батареи / Батарея / Индикатор включения / выключения",
        "Материал":"Алюминиевый сплав + Технология металлической краски",
        "Батарея":"Li-Po 33 В; 6,5 Ач",
        "Общий вес":"10,8 кг",
        "Максимальная нагрузка":"125кг",
        "Зарядное устройство":"3.5A",
        "Размер": [
            "Сложенный: 945 x 135 x 300 мм",
            "Развернутый: 940 x 135 x 1160 мм"
            ]
    };
    let model2 = 
    {
        "Модель":"E-TWOW BOOSTER PLUS S",
        "Автономность аккумулятора":"30km",
        "Максимальный крутящий момент":"15 Нм",
        "Максимальная скорость":"25 км/ч",
        "Амортизатор":"Передний амортизатор + Задний амортизатор",
        "Ограничение максимальной скорости":"Во многих странах существует законодательство, которое ограничивает скорость, поэтому скорость мотороллера можно установить с завода со скоростью 6 км / ч, 12 км / ч, 20 км / ч, 25 км / ч или 30 км / ч. Как только максимальная скорость будет установлена, двигатель станет функционировать, и скутер не будет превышать эту скорость.",
        "Функция нулевого запуска":"По соображениям безопасности, когда вы хотите покататься на скутере, сначала используйте ногу, чтобы сдвинуть ее на небольшое расстояние, затем нажмите правый указатель пальца",
        "Звуковая сигнализация":"Пьезокерамический рожок",
        "UBHI":"UNIBLOCK HUMAN INTERFACE (патент) водостойкий IP54",
        "Шины":"Безвоздушная резина Шины (патент)",
        "Мощность":"500W",
        "Тип двигателя":"DC бесщеточный двигатель",
        "Потребление энергии":"7.5Wh / км",
        "Время зарядки":"1.5h-2h (зарядное устройство 4A) или 3h-3.5h (зарядное устройство 2A)",
        "Входное напряжение зарядного устройства":"220V / 110V",
        "ЖК-дисплей Размер команды":"80 x 60 x 60 мм",
        "Функция ЖК-дисплея":"ODO / Trip / Температура окружающей среды / Скорость / Уровень заряда батареи / Батарея / Индикатор включения / выключения",
        "Материал":"Алюминиевый сплав + Технология металлической краски",
        "Батарея":"Li-Po 33 В; 6,5 Ач",
        "Общий вес":"10,8 кг",
        "Максимальная нагрузка":"125кг",
        "Зарядное устройство":"3.5A",
        "Размер": [
            "Сложенный: 945 x 135 x 300 мм",
            "Развернутый: 940 x 135 x 1160 мм"
            ]
    };
    let model3 = {
        "Модель": "E-TWOW BOOSTER PLUS V",
	    "Автономность аккумулятора":"40km",
	    "Максимальный крутящий момент":"14.1 Нм",
	    "Максимальная скорость":"25 км/ч",
	    "Амортизатор":"Передний амортизатор + Задний амортизатор",
	    "Ограничение максимальной скорости":"Во многих странах существует законодательство, которое ограничивает скорость, поэтому скорость мотороллера можно установить с завода со скоростью 6 км / ч, 12 км / ч, 20 км / ч, 25 км / ч или 30 км / ч. Как только максимальная скорость будет установлена, двигатель станет функционировать, и скутер не будет превышать эту скорость.",
	    "Функция нулевого запуска":"По соображениям безопасности, когда вы хотите покататься на скутере, сначала используйте ногу, чтобы сдвинуть ее на небольшое расстояние, затем нажмите правый указатель пальца",
	    "Звуковая сигнализация":"Пьезокерамический рожок",
	    "UBHI":"UNIBLOCK HUMAN INTERFACE (патент) водостойкий IP54",
	    "Шины":"Безвоздушная резина Шины (патент)",
	    "Мощность":"500W",
	    "Тип двигателя":"DC бесщеточный двигатель",
	    "Потребление энергии":"6.15Wh / км",
	    "Время зарядки":"1.5h-2h (зарядное устройство 4A) или 3h-3.5h (зарядное устройство 2A)",
	    "Входное напряжение зарядного устройства":"220V / 110V",
	    "ЖК-дисплей Размер команды":"80 x 60 x 60 мм",
	    "Функция ЖК-дисплея":"ODO / Trip / Температура окружающей среды / Скорость / Уровень заряда батареи / Батарея / Индикатор включения / выключения",
	    "Материал":"Алюминиевый сплав + Технология металлической краски",
	    "Батарея":"Li-Po 24 В; 8,5 Ач",
	    "Общий вес":"10,9 кг",
	    "Максимальная нагрузка":"125кг",
	    "Зарядное устройство":"4A",
	    "Размер": ["Сложенный: 945 x 135 x 300 мм",
	    		  "Развернутый: 940 x 135 x 1160 мм"]
    };
    let model4 = {
        "Модель": "E-TWOW ECO PLUS",
	    "Автономность аккумулятора":"30km",
	    "Максимальный крутящий момент":"13.3 Нм",
	    "Максимальная скорость":"25 км/ч",
	    "Амортизатор":"Передний амортизатор + Задний амортизатор",
	    "Ограничение максимальной скорости":"Во многих странах существует законодательство, которое ограничивает скорость, поэтому скорость мотороллера можно установить с завода со скоростью 6 км / ч, 12 км / ч, 20 км / ч, 25 км / ч или 30 км / ч. Как только максимальная скорость будет установлена, двигатель станет функционировать, и скутер не будет превышать эту скорость.",
	    "Функция нулевого запуска":"По соображениям безопасности, когда вы хотите покататься на скутере, сначала используйте ногу, чтобы сдвинуть ее на небольшое расстояние, затем нажмите правый указатель пальца",
	    "Звуковая сигнализация":"Пьезокерамический рожок",
	    "UBHI":"UNIBLOCK HUMAN INTERFACE (патент) водостойкий IP54",
	    "Шины":"Безвоздушная резина Шины (патент)",
	    "Мощность":"350W",
	    "Тип двигателя":"DC бесщеточный двигатель",
	    "Потребление энергии":"6.15Wh / км",
	    "Время зарядки":"1.5h-2h (зарядное устройство 4A) или 3h-3.5h (зарядное устройство 2A)",
	    "Входное напряжение зарядного устройства":"220V / 110V",
	    "ЖК-дисплей Размер команды":"80 x 60 x 60 мм",
	    "Функция ЖК-дисплея":"ODO / Trip / Температура окружающей среды / Скорость / Уровень заряда батареи / Батарея / Индикатор включения / выключения",
	    "Материал":"Алюминиевый сплав + Технология металлической краски",
	    "Батарея":"Li-Po 24 В; 6,5 Ач",
	    "Общий вес":"10,7 кг",
	    "Максимальная нагрузка":"125кг",
	    "Зарядное устройство":"2A(дополнительно 4А)",
	    "Размер": ["Сложенный: 945 x 135 x 300 мм",
	    		  "Развернутый: 940 x 135 x 1160 мм"]
    };
let vm = new Vue({
    el: "#app",
    data:{
        model1: model1,
        model2: model2,
        model3: model3,
        model4: model4
    },
});