'use stict';

const whurl = 'https://discordapp.com/api/webhooks/807217443713318952/OpZv04y6AX9RMSebv2w_KSC9U_ULGuFsCQDsrXSH8RnUM5vwVZXPfll8GldP7iEJSt8N';

$(function () {
    $('button[type="submit"]').prop('disabled', true);
    $('*:required').on('keyup', function () {
        let flag = true;
        $('*:required').each(function (e) {
            if ($('*:required').eq(e).val() === '') {
                flag = false;
            }
        });
        if (flag) {
            $('button[type="submit"]').prop('disabled', false);
        } else {
            $('button[type="submit"]').prop('disabled', true);
        }
    });
    $('button[type="submit"]').on('click', function () {
        const userName = getInputValues('input[name="user_name"]');
        const returnName = getInputValues('input[name="return"]');
        const title = getInputValues('input[name="title"]');
        let desc = getInputValues('textarea[name="desc"]');

        if (userName === '' || desc === '') {
            return;
        }

        if (returnName !== '') {
            desc = desc + '\n\n返信先 : ' + returnName;
        }

        const msg = {
            "username": userName,
            "embeds": [
                {
                    "title": title,
                    "description": desc,
                    "timestamp": new Date(),
                }
            ],
            "content": "<@725683207655129098>"
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