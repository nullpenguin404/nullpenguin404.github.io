/**
 * Sender to discord.
 *
 * @export
 * @class sender
 */
export class sender {
    whurl = 'https://discordapp.com/api/webhooks/807217443713318952/OpZv04y6AX9RMSebv2w_KSC9U_ULGuFsCQDsrXSH8RnUM5vwVZXPfll8GldP7iEJSt8N';

    /**
     * Send to discord.
     *
     * @param {string} user_name
     * @param {string} return_name
     * @param {string} return_type
     * @param {string} title
     * @param {string} content
     */
    send(user_name, return_name, return_type, title, content) {
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
}