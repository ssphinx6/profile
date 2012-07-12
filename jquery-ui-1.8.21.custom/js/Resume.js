
$.fx.speeds._default = 1000;

$(function () {
    // Using accordian.
    $('.accordion').accordion();

    // dialog box defination
    $('.dialog').dialog({
        autoOpen: false,
        show: 'blind',
        hide: 'explode',
        width: '1100',
        height: '590',
        title: 'Job Responsibilites',
        modal: 'true'

    });

    // dialog close.
    $('.dialog').bind('dialogclose', function (event) {
        $('#workExp .heading').css('color', '#FFFFFF');

    });

    // Opening dialogs on div click.
    $('#workExp .heading').click(function (event) {
        var headingID = $(this).attr('id');
        switch (headingID) {
            case 'div1':
                $('#dialog1').dialog('open');
                $(this).css('color', '#75ABFF');
                break;
            case 'div2':
                $('#dialog2').dialog('open');
                $(this).css('color', '#75ABFF');
                break;
            case 'div3':
                $('#dialog3').dialog('open');
                $(this).css('color', '#75ABFF');
                break;
            case 'div4':
                $('#dialog4').dialog('open');
                $(this).css('color', '#75ABFF');
                break;
            case 'div5':
                $('#dialog5').dialog('open');
                $(this).css('color', '#75ABFF');
                break;
            case 'div6':
                $('#dialog6').dialog('open');
                $(this).css('color', '#75ABFF');
                break;
            default:
                $('#dialog1').dialog('open');
                $(this).css('color', '#75ABFF');
                break;
        }
    });

    $('#proSummary, #workExp, #edu, #certs').hide();

    // click of menu bar.
    $('.tabs li').click(function () {
        var liId = $(this).attr('id');
        switch (liId) {
            case 'litechSkills':
                $('#proSummary, #workExp, #edu, #certs').hide();
                $('#techSkills').fadeIn();
                $('body').css('overflow', 'auto');
                break;
            case 'liproSummary':
                $('#techSkills, #workExp, #edu, #certs').hide();
                $('#proSummary').fadeIn();
                $('body').css('overflow', 'auto');
                break;
            case 'liworkExp':
                $('#techSkills, #proSummary, #edu, #cert').hide();
                $('#workExp').fadeIn();
                $('body').css('overflow', 'hidden');
                break;
            case 'liedu':
                $('#techSkills, #proSummary, #workExp, #certs').hide();
                $('#edu').fadeIn();
                $('body').css('overflow', 'auto');
                break;
            case 'licerts':
                $('#techSkills, #proSummary, , #workExp, #edu').hide();
                $('#certs').fadeIn();
                $('body').css('overflow', 'auto');
                break;
            default:
                break;
        }
    });
});

