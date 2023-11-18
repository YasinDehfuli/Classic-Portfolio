function formatRows(main, prefer, common) {
    return '<tr><td class="col-xs-3"><input type="text" value="' +main+ '" class="form-control editable" /></td>' +
        '<td class="col-xs-3"><input type="text" value="' +common+ '" class="form-control editable" /></td>' +
        '<td class="col-xs-3"><input type="text" value="' +prefer+ '" class="form-control editable numberInput" /></td>' +

        '<td class="col-xs-1 text-center"><a href="#" onClick="deleteRow(this)">' +
        '<i class="fa-solid fa-xmark"></i></a></td></tr>';
};

function deleteRow(trash) {
    $(trash).closest('tr').remove();
};

function addRow() {
    var main = $('.addMain').val();
    var preferred = $('.addPrefer').val();
    var common = $('.addCommon').val();
    $(formatRows(main,preferred,common)).insertAfter('#addRow');
    $(input).val('');
}

$('.addBtn').click(function()  {
    addRow();
});

// محاسبه جمع اعداد و نمایش جمع کل
document.addEventListener('input', function (e) {
    if (e.target.classList.contains('numberInput')) {
        calculateTotal();
    }
});

function calculateTotal() {
    let total = 0;
    const numberInputs = document.querySelectorAll('.numberInput');
    numberInputs.forEach(function (input) {
        const value = parseFloat(input.value) || 0;
        total += value;
    });

    // نمایش جمع کل با فرمت فارسی
    document.getElementById('total').innerText =  'جمع کل: ' + total.toLocaleString('fa') + ' ﷼ '  ;
}

