const whurl = 'https://discordapp.com/api/webhooks/807217443713318952/OpZv04y6AX9RMSebv2w_KSC9U_ULGuFsCQDsrXSH8RnUM5vwVZXPfll8GldP7iEJSt8N';

const cl = console.log;

$(() => {
    $('button[type="submit"]').prop('disabled', true);
    $('*:required').on('keyup', () => {
        const user_name = $('input[name="user_name"]').val();
        const content = $('textarea[name="desc"]').val();
        $('input[name="return"]').trigger('keyup');
        if (user_name !== '' && content !== '') {
            $('button[type="submit"]').prop('disabled', false);
        } else {
            $('button[type="submit"]').prop('disabled', true);
        }
    });
    $('input[name="return"]').on('keyup', () => {
        const return_name = $('input[name="return"]').val();
        if (return_name !== '') {
            $('div#return_type').addClass('active');
        } else {
            $('div#return_type').removeClass('active');
            $('button[type="submit"]').prop('disabled', false);
            $('input[name="return_type"]:checked').prop('checked', false);
        }
    });
    $('input[name="return_type"]').change(() => {
        const return_type = $('input[name="return_type"]:checked').val();
        if (typeof return_type !== 'undefined') {
            $('button[type="submit"]').prop('disabled', false);
        } else {
            $('button[type="submit"]').prop('disabled', true);
        }
    });
    $('button[type="submit"]').on('click', () => {
        const user_name = $('input[name="user_name"]').val();
        const content = $('textarea[name="desc"]').val();
        const return_name = $('input[name="return"]').val();
        const return_type = $('input[name="return_type"]:checked').val();
        const title = $('input[name="title"]').val();
        send(user_name, return_name, return_type, title, content);
        document.querySelector('dialog').showModal();
        setTimeout(() => {
            window.location = 'contact.html'
        }, 10000);
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
    fetch(whurl + "?wait=true",
        {
            "method": "POST",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify(msg)
        })
        .catch((reason) => {
            throw 'error!\n' + reason;
        });
}