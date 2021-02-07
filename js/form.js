'use stict';

const whurl = 'https://discordapp.com/api/webhooks/807217443713318952/OpZv04y6AX9RMSebv2w_KSC9U_ULGuFsCQDsrXSH8RnUM5vwVZXPfll8GldP7iEJSt8N';

$(function () {
    let flag = true;
    $('button[type="submit"]').prop('disabled', true);
    $('input[name="return"]').on('keyup', function () {
        if ($(this).val() !== '') {
            $('div#return_type').addClass('active');
        } else {
            $('div#return_type').removeClass('active');
        }
    });
    $('*:required, input[name="return"]').on('keyup', function () {
        $('*:required').each(function (e) {
            if ($('*:required').eq(e).val() === '') {
                flag = false;
            }
        });
        if ($('input[name="return"]').val() !== '') {
            if (typeof $('input[name="return_type"]').val() === 'undefined') {
                flag = false;
            } else {
                flag = true;
            }
        }
        if (flag) {
            $('button[type="submit"]').prop('disabled', false);
        } else {
            $('button[type="submit"]').prop('disabled', true);
        }
    });
    $('input[name="return_type"]').on('change', function () {
        if ($('input[name="return"]').val() !== '') {
            if (typeof $('input[name="return_type"]').val() === 'undefined') {
                flag = false;
                console.log(flag);
            } else {
                flag = true;
                console.log(flag);
            }
        }
    });
    $('button[type="submit"]').on('click', function () {
        const userName = getInputValues('input[name="user_name"]');
        const returnName = getInputValues('input[name="return"]');
        const returnType = getInputValues('input[name="return_type]:checked');
        const title = getInputValues('input[name="title"]');
        let desc = getInputValues('textarea[name="desc"]');

        if (userName === '' || desc === '') {
            return;
        }

        if (returnName !== '') {
            desc = desc + '\n\n' + returnType + ' : ' + returnName;
        }

        const msg = {
            "username": userName,
            "embeds": [
                {
                    "title": title,
                    "description": desc,
                    "timestamp": new Date(),
                }
            ]//,
            //"content": "<@725683207655129098>"
        }

        fetch(whurl + "?wait=true",
            {
                "method": "POST",
                "headers": { "content-type": "application/json" },
                "body": JSON.stringify(msg)
            }
        );

        displaySucsess();
    });
});

/**
 * Returns selected HTML element's value.
 *
 * @param {string} selecter
 * @return {string} 
 */
function getInputValues(selecter) {
    const value = $(selecter).val();
    return value;
}

/**
 * Displays sucsess dialog.
 *
 */
function displaySucsess() {
    document.querySelector('dialog').showModal();
}