(function () {
    let Message;
    Message = function (arg) {
        this.text = arg.text,
        this.message_side = arg.message_side;
        this.avatar = arg.avatar;
        this.draw = function (_this) {
            return function () {
                let $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $message.find('.avatar').html(_this.avatar);
                

                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    $(function () {
        let getMessageText, message_side, sendMessage, avatar;
        message_side = 'right';
       
        getMessageText = function () {
            let $message_input;
            $message_input = $('.message_input');
            return $message_input.val();
        };
        sendMessage = function (text, avatar) {
            let $messages, message;
            if (text.trim() === '') {
                return;
            }

            $('.message_input').val('');
            // avatar = 'Pēteris';
            // avatar = $('.avatar').val();
            $messages = $('.messages');
            message_side = message_side === 'left' ? 'right' : 'left';
            
            const username = $('#username_inputfield');

            message = new Message({
                text: text,
                message_side: message_side,
                avatar: username.val(),
            });

            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };
        $('.send_message').click(function (e) {
            return sendMessage(getMessageText());
        });
        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
                return sendMessage(getMessageText());
            }
        });
        sendMessage('Hello! How are you today?', 'Pēteris');
    });
}.call(this));