$(function () {
    $(".sample-date-picker").mpdatepicker({
        'timePicker': true,
        onOpen: function () {
            console.log('open');
        },
        onSelect: function (selected) {
            console.log('select', selected);
        },
        onChange: function (oldVal, newVal) {
            console.log('change', oldVal, newVal);
        },
        onClose: function () {
            console.log('close');
        },
    });
});