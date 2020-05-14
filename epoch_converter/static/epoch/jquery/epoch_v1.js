function process_epoch() {
        var epoch_to_convert, epoch_input_tz, dataString = "&time_to_convert=date_input&epoch_to_convert=" + document.getElementById("enter_epoch").value + "&tz_to_convert=" + document.getElementById("dropdown_selector_epoch").value;
        return $.ajax({
                type: "POST",
                url: "/tools/epochconverter/",
                data: dataString,
                success: function (response) {
                        var data = response,
                                myTable = document.getElementById("myTable");
                        if (document.getElementById("output_epoch_1").innerHTML = data.vara0, $(window).width() > 900)
                                for (var i = 1; i < 337; i++) {
                                        var dyn_set = "vara" + i;
                                        myTable.rows[i].cells[1].innerHTML = data[dyn_set]
                                }
                }
        }), !1
}

function onload_epoch() {
        var timezone = moment.tz.names(),
                tz_default = moment.tz.guess();
        $("select").append('<option value="' + tz_default + '">' + tz_default + "</option>");
        for (var i = 0; i < timezone.length; i++) $("select").append('<option value="' + timezone[i] + '">' + timezone[i] + "</option>");
        $("select").selectpicker();
        var date_now = new Date,
                time_now = date_now.getTime(),
                epoch_now = Math.round(time_now / 1e3);
        document.getElementById("enter_epoch").defaultValue = epoch_now, document.getElementById("output_epoch_1").innerHTML = date_now;
        var epoch_to_convert, epoch_input_tz, dataString = "&time_to_convert=date_input&epoch_to_convert=" + epoch_now + "&tz_to_convert=" + document.getElementById("dropdown_selector_epoch").value;
        return $.ajax({
                type: "POST",
                url: "/tools/epochconverter/",
                data: dataString,
                success: function (response) {
                        var data = response,
                                myTable = document.getElementById("myTable");
                        if ($(window).width() > 900)
                                for (var myTable = document.getElementById("myTable"), i = 1; i < 337; i++) {
                                        var dyn_set = "vara" + i;
                                        myTable.rows[i].cells[1].innerHTML = data[dyn_set]
                                }
                }
        }), !1
}

function process_epoch_test1() {
        var epoch_value = document.getElementById("enter_epoch").value,
                d = new Date(1e3 * epoch_value);
        setTimeout((function () {
                var epoch_input_tz = document.getElementById("dropdown_selector_epoch").value,
                        dataString = "&time_to_convert=date_input&epoch_to_convert=" + epoch_value + "&tz_to_convert=" + epoch_input_tz;
                return $.ajax({
                        type: "POST",
                        url: "/tools/epochconverter/",
                        data: dataString,
                        success: function (response) {
                                var data = response,
                                        myTable = document.getElementById("myTable");
                                if (document.getElementById("output_epoch_1").innerHTML = response.vara0, $(window).width() > 900)
                                        for (var i = 1; i < 337; i++) {
                                                var dyn_set = "vara" + i;
                                                myTable.rows[i].cells[1].innerHTML = data[dyn_set]
                                        }
                        }
                }), !1
        }), 50)
}

function process_epoch_test() {
        var date_input, date_input_tz, dataString = "&time_to_convert=" + document.getElementById("datetimepicker1").value + "&epoch_to_convert=datetoepoch&tz_to_convert=" + document.getElementById("dropdown_selector_date").value;
        return $.ajax({
                type: "POST",
                url: "/tools/epochconverter/",
                data: dataString,
                success: function (response) {
                        var data = response,
                                myTable = document.getElementById("myTable");
                        if (document.getElementById("output_date_1").innerHTML = response.vara0, $(window).width() > 900)
                                for (var i = 1; i < 337; i++) {
                                        var dyn_set = "vara" + i;
                                        myTable.rows[i].cells[1].innerHTML = data[dyn_set]
                                }
                }
        }), !1
}

function startTime() {
        var today = new Date,
                h = today.getHours(),
                m = today.getMinutes(),
                s = today.getSeconds(),
                epoch_now = today.getTime();
        m = checkTime(m), s = checkTime(s), e = checkTime(epoch_now), document.getElementById("running_epoch").innerHTML = e;
        var t = setTimeout(startTime, 500)
}

function checkTime(i) {
        return i < 10 && (i = "0" + i), Math.round(i / 1e3)
}

function reload_page() {
        window.location.hash || (window.location = window.location + "#epoch", window.location.reload())
}

function search_table() {
        var input, filter, table, tr, td, i;
        for (filter = (input = document.getElementById("myInput")).value.toUpperCase(), tr = (table = document.getElementById("myTable")).getElementsByTagName("tr"), i = 0; i < tr.length; i++)(td = tr[i].getElementsByTagName("td")[0]) && (td.innerHTML.toUpperCase().indexOf(filter) > -1 ? tr[i].style.display = "" : tr[i].style.display = "none")
}
$(document).ready((function () {
        $("#datetimepicker1").datetimepicker({
                defaultDate: new Date,
                format: "ddd,MMM DD,YYYY, hh:mm:ss A",
                sideBySide: !0
        });
        var date_input = document.getElementById("datetimepicker1").value,
                date_input_epoch = moment(date_input, ["ddd,MMM DD,YYYY, hh:mm:ss A"]).unix();
        document.getElementById("output_date_1").innerHTML = date_input_epoch
})), $(document).ready((function () {
        $("#datetimepicker1").on("dp.change", (function () {
                var date_input, date_input_tz, dataString = "&time_to_convert=" + document.getElementById("datetimepicker1").value + "&epoch_to_convert=datetoepoch&tz_to_convert=" + document.getElementById("dropdown_selector_date").value;
                return $.ajax({
                        type: "POST",
                        url: "/tools/epochconverter/",
                        data: dataString,
                        success: function (response) {
                                var data = response;
                                document.getElementById("output_date_1").innerHTML = response.vara0;
                                for (var myTable = document.getElementById("myTable"), i = 1; i < 337; i++) {
                                        var dyn_set = "vara" + i;
                                        myTable.rows[i].cells[1].innerHTML = data[dyn_set]
                                }
                        }
                }), !1
        }))
}));