const cl = console.log;

$(() => {
    const submit = $('button[type="submit"]');
    const user_name = $('input[name="user_name"]');
    const return_name = $('input[name="return_name"]');
    const return_type = $('input[name="return_type"]:checked');
    const title = $('input[name="title"]');
    const desc = $('textarea[name="desc"]');
    const sucsessDialog = document.querySelector('dialog');

    submit.on('click', () => {
        if (return_name.val() == '') {
            if (user_name.val() == '') {
                user_name.addClass('error');
            }
            if (desc.val() == '') {
                desc.addClass('error');
            }
            if (user_name.val() != '' && desc.val() != '') {
                send(user_name.val(), return_name.val(), '', title.val(), desc.val());
                sucsessDialog.showModal();
                let countdown = 20;
                setInterval(() => {
                    $('span').text(String(countdown));
                    countdown --;
                }, 1000);
                setTimeout(() => {
                    location.reload();
                }, 20000);
            }
        } else {
            if(user_name.val() == '') {
                user_name.addClass('error');
            }
            if (desc.val() == '') {
                desc.addClass('error');
            }
            if (typeof $('input[name="return_type"]:checked').val() == 'undefined') {
                cl(typeof $('input[name="return_type"]:checked').val());
                $('div#return_type').addClass('error');
            }
            if (user_name.val() != '' && desc.val() != '' && typeof $('input[name="return_type"]:checked').val() != 'undefined') {
                send(user_name.val(), return_name.val(), $('input[name="return_type"]:checked').val(), title.val(), desc.val());
                sucsessDialog.showModal();
                let countdown = 20;
                setInterval(() => {
                    $('span').text(String(countdown));
                    countdown--;
                }, 1000);
                setTimeout(() => {
                    location.reload();
                }, 20000);
            }
        }
    });

    user_name.on('keyup', () => {
        if (user_name.val() != '') {
            user_name.removeClass('error');
        }
    });

    desc.on('keyup', () => {
        if (desc.val() != '') {
            desc.removeClass('error');
        }
    });

    return_name.on('keyup', () => {
        if (return_name.val() == '') {
            $('div#return_type').removeClass('active');
            return_type.prop('checked', false);
        } else {
            $('div#return_type').addClass('active');
        }
    });

    $('input[name="return_type"]').on('change', () => {
        if (typeof return_type != 'undefined') {
            $('div#return_type').removeClass('error');
        }
    });
});

/**
 * Send to discord.
 *
 * @param {string} user_name
 * @param {string} return_name
 * @param {string} return_type
 * @param {string} title
 * @param {string} content
 */
function send(user_name, return_name, return_type, title, content) {
    if (return_name !== '') {
        content = content + '\n\n' + return_type + ' : ' + return_name;
    }
    const msg = {
        "username": user_name,
        "embeds": [
            {
                "title": title,
                "description": content,
                "timestamp": new Date()
            }
        ]/*,
            "content": "<@725683207655129098>"*/
    }
    fetch('https://discordapp.com/api/webhooks/807217443713318952/OpZv04y6AX9RMSebv2w_KSC9U_ULGuFsCQDsrXSH8RnUM5vwVZXPfll8GldP7iEJSt8N?wait=true',
        {
            "method": "POST",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify(msg)
        })
        .catch((reason) => {
            throw 'error!\n' + reason;
        });
}