<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class forgotMail extends Mailable
{
    use Queueable, SerializesModels;

    public $token, $email;
    public function __construct($token, $email)
    {
        $this->token = $token;
        $this->email = $email;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $token = $this->token;
        $email = $this->email;
        return $this->from('tawheed9104@gmail.com')->view('forgotMail', compact('token', 'email'));
    }
}
