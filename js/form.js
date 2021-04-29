const cl = console.log;

$(() => {
    const submit = $('button[type="submit"]');
    submit.prop('disabled', true);

    const user_name = $('input[name="user_name"]');
    const return_name = $('input[name="return_name"]');
    const return_type = $('input[name="return_type"]');
    const title = $('input[name="title"]');
    const desc = $('textarea[name="desc"]');

    user_name.on('keyup', () => {
        if (user_name.val() != '' && desc.val() != '') {
            if (return_name.val() == '') {
                submit.prop('disabled', false);
            } else {
                if (typeof return_type.val() == 'undifined') {
                    submit.prop('disabled', true);
                } else {
                    submit.prop('disabled', false);
                }
            }
        } else {
            submit.prop('disabled', true);
        }
    });

    return_name.on('keyup', () => {
        cl(return_type.val());
        if (user_name.val() != '' && desc.val() != '') {
            if (return_name.val() == '') {
                submit.prop('disabled', false);
            } else {
                if (typeof return_type.val() == 'undifined') {
                    submit.prop('disabled', true);
                } else {
                    submit.prop('disabled', false);
                }
            }
        } else {
            submit.prop('disabled', true);
        }
        if (return_name.val() != '') {
            $('div#return_type').addClass('active');
        } else {
            $('div#return_type').removeClass('active');
        }
    });

    return_type.on('change', () => {
        cl(return_type.val())
        if (user_name.val() != '' && desc.val() != '') {
            if (return_name.val() == '') {
                submit.prop('disabled', false);
            } else {
                if (typeof return_type.val() == 'undifined') {
                    submit.prop('disabled', true);
                } else {
                    submit.prop('disabled', false);
                }
            }
        } else {
            submit.prop('disabled', true);
        }
    });

    title.on('keyup', () => {
        if (user_name.val() != '' && desc.val() != '') {
            if (return_name.val() == '') {
                submit.prop('disabled', false);
            } else {
                if (typeof return_type.val() == 'undifined') {
                    submit.prop('disabled', true);
                } else {
                    submit.prop('disabled', false);
                }
            }
        } else {
            submit.prop('disabled', true);
        }
    });
    
    desc.on('keyup', () => {
        if (user_name.val() != '' && desc.val() != '') {
            if (return_name.val() == '') {
                submit.prop('disabled', false);
            } else {
                if (typeof return_type.val() == 'undifined') {
                    submit.prop('disabled', true);
                } else {
                    submit.prop('disabled', false);
                }
            }
        } else {
            submit.prop('disabled', true);
        }
    });
});