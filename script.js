$(document).ready(function () {


    $(".mySelect").on("click", function () {
      $(this).toggleClass("open");
    });

    $(".mySelect").on("blur", function () {
      $(this).removeClass("open");
    });
    flatpickr("#dateorigin", {
      dateFormat: "D. j/n",
      minDate: "today",
      defaultDate: "today",
      maxDate: new Date().fp_incr(30),
      disableMobile: true,
      showPrevNextArrows: true
    });

    flatpickr("#datedestination", {
      dateFormat: "D. j/n",
      minDate: "today",
      defaultDate: "today",
      maxDate: new Date().fp_incr(90),
      disableMobile: true,
      showPrevNextArrows: true
    });

    var startDateInput = $("#dateorigin");
  var endDateInput = $("#datedestination");
  
  var startDatePicker = flatpickr(startDateInput[0], {
    dateFormat: "D. j/n",
    onChange: function(selectedDates, dateStr, instance) {
      var selectedDate = selectedDates[0];
      var endDate = endDatePicker.selectedDates[0];
      
      if (endDate && selectedDate > endDate) {
        endDatePicker.setDate(selectedDate);
      }
    }
  });
  
  var endDatePicker = flatpickr(endDateInput[0], {
    dateFormat: "D. j/n",
    onChange: function(selectedDates, dateStr, instance) {
      var selectedDate = selectedDates[0];
      var startDate = startDatePicker.selectedDates[0];
      
      if (startDate && selectedDate < startDate) {
        startDatePicker.setDate(selectedDate);
      }
    }
  });
    $("#button-field").on("click", function () {
      $(this).addClass("open");
      $('#popover').addClass("open");

    });
    $("#button-field").on("blur", function () {
      $(this).removeClass("open");
      $('#popover').removeClass("open");
    });

    $("#build-fielecon-travel-class").on("click", function () {
        $('#popup').toggleClass("open");
         

      });

      $("#build-fileicon-flight-type").on("click", function () {
        $('#popupp').toggleClass("open");
    
      });

    var especificArea = $("#button-field");

    $(document).on("click", function (event) {

      if (!especificArea.is(event.target) && especificArea.has(event.target).length === 0) {
        $("#button-field").removeClass("open");
        $('#popover').removeClass("open");
      }
    });
    $(document).on("click", function (event) {

        if (!especificArea.is(event.target) && especificArea.has(event.target).length === 0) {
          $("#button-field").removeClass("open");
          $('#popover').removeClass("open");
        }
      });
  

    $('.decrease-btn').click(function (events) {

      events.preventDefault();

      let tagtotal = $(this).next();
      let value = parseInt(tagtotal.val());

      if ($(this).hasClass('verify-btn')) {
        let input1Value = parseInt($('#num-input').val());
        let input2Value = parseInt($('#num-input2').val());
        let sum = input1Value + input2Value;

        if (sum === 1) {
          return;
        }
      }

      if (value > 0) {
        value--;
        tagtotal.val(value);
      }
      calcularSuma();
    });

    $('.increase-btn').click(function (events) {
      events.preventDefault();
      let tagtotal = $(this).prev();
      let value = parseInt(tagtotal.val());
      let maxValue = parseInt(tagtotal.attr('aria-valuemax'));
      if (value < maxValue) {
        value++;
        tagtotal.val(value);
      }
      calcularSuma();
    });

    function calcularSuma() {
      var elementos = $(".countpasagers input");
      var suma = 0;

      elementos.each(function () {
        var valor = parseInt($(this).val());
        if (!isNaN(valor)) {
          suma += valor;
        }
      });
      var tipotrabajador = ' adulto';
      if (suma > 1) {
        tipotrabajador = " viajeros";
      }
      $(".travellersTotal").text(suma + tipotrabajador);
    }
    calcularSuma();


    $("#popup.dropdown-menu li").click(function() {
        var selectedOption = $(this).text();
        $("#popup .selected-value-style").text(selectedOption);
        $("#popup.dropdown-menu li").attr("aria-selected", "false");
        $(this).attr("aria-selected", "true");
        var selectedId = $(this).attr("id");
        $(".fake-select").find("select").val(selectedId).change();
      });

      $("#popupp.dropdown-menu li").click(function() {
        var selectedOption = $(this).text();
        $("#popupp .selected-value-style").text(selectedOption);
        $("#popupp.dropdown-menu li").attr("aria-selected", "false");
        $(this).attr("aria-selected", "true");
        var selectedId = $(this).attr("id");
        $(".fake-select").find("select").val(selectedId).change();
      });

      var options = [
        { value: 'HAV', text: 'La Habana' },
        { value: 'VRD', text: 'Varadero' },
        { value: 'HOL', text: 'Holgín' },

      ];

      var selectize = $('#autocomplete-input').selectize({
        dropdownParent: '#container-origin',
        plugins: ['remove_button'],
        delimiter: ',',
        create: false,
        render: {
          item: function (item, escape) {
            return '<div role="listitem" class="any-ubication">' +
              '<div class="any-ubication-value">' + escape(item.value) + '</div>' +

              '</div>';
          },
          option: function (item, escape) {
            return '<div>' + escape(item.text) + '</div>';
          }
        },
        onChange: function (value) {
          if (value.length > 0) {
            $('#autocomplete-input').prev().addClass('hidden');
          } else {
            $('#autocomplete-input').prev().removeClass('hidden');
          }
          var selectedItems = $('#autocomplete-input')[0].selectize.items;
          var selectedItemsHtml = '';
          for (var i = 0; i < selectedItems.length; i++) {
            selectedItemsHtml += '<div>' + selectedItems[i] + '</div>';
          }
          $('#selected-items').html(selectedItemsHtml);
        }
      })[0].selectize;
      selectize.load(function (callback) {
        callback(options);
      });

      var selectize2 = $('#autocomplete-input2').selectize({
        dropdownParent: '#container-destination',
        plugins: ['remove_button'],
        delimiter: ',',
        create: false,
        render: {
          item: function (item, escape) {
            return '<div role="listitem" class="any-ubication">' +
              '<div class="any-ubication-value">' + escape(item.value) + '</div>' +

              '</div>';
          },
          option: function (item, escape) {
            return '<div>' + escape(item.text) + '</div>';
          }
        },
        onChange: function (value) {
          if (value.length > 0) {
            $('#autocomplete-input2').prev().addClass('hidden');
          } else {
            $('#autocomplete-input2').prev().removeClass('hidden');
          }
          var selectedItems = $('#autocomplete-input2')[0].selectize.items;
          var selectedItemsHtml = '';
          for (var i = 0; i < selectedItems.length; i++) {
            selectedItemsHtml += '<div>' + selectedItems[i] + '</div>';
          }
          $('#selected-items').html(selectedItemsHtml);
        }
      })[0].selectize;
      selectize2.load(function (callback) {
        callback(options);
      });
      $(".button-exchange").click(function () {
        var html1 = $('#container-origin').html();
        var html2 = $('#container-destination').html();
        html1 = html1.replace('"Origen"', '"Destino"');
        html1 = html1.replace('-origin', '-destination');
        html2 = html2.replace('"Destino"', '"Origen"');
        html2 = html2.replace('-destination', '-origin');
        $('#container-origin').html(html2);
        $('#container-destination').html(html1);

        var iconElement = $(this).find("svg");
        iconElement.addClass("rotate");

        setTimeout(function () {
          iconElement.removeClass("rotate");
        }, 1000);
      });
  });