
<?php
$path = dirname(__FILE__);
require $path . '/PHPMailer/src/Exception.php';
require $path . '/PHPMailer/src/PHPMailer.php';
require $path . '/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

function getFileExt($file)
{
    $name = $file['name'];

    return end(explode('.', $name));
}

function validateFile($file)
{
    $extensitions = ['pdf', 'docx', 'doc', 'txt'];

    $is_ext = in_array(getFileExt($file), $extensitions);
    $is_size = $file['size'] < 10000000; // 10 MB

    return $is_ext && $is_size;
}

function mailer($sendto, $subject, $htmlBody, $files, $headers = false)
{
    try {
        $phpmailer = new PHPMailer();
        $file = $files['file'];
        $documentName = 'cv';

        if (validateFile($file)) {
            $phpmailer->addAttachment(
                $file['tmp_name'],
                $documentName . '.' . getFileExt($file)
            );
        }

        if (SMTP) {
            $phpmailer->isSMTP();
            $phpmailer->Host = ''; // ex: smtp.mailtrap.io
            $phpmailer->SMTPAuth = true; // change to false if not needed
            $phpmailer->Port = 2525; // port
            $phpmailer->Username = ''; // only n case auth needed, otherwise comment this line
            $phpmailer->Password = ''; // only n case auth needed, otherwise comment this line
        }

        $phpmailer->setFrom(SND_FROM, SND_NAME);

        $addresses = explode(',', $sendto);

        foreach ($addresses as $address) {
            $phpmailer->addAddress(trim($address));
        }

        $phpmailer->addReplyTo(SND_FROM, SND_NAME);

        $phpmailer->isHTML(true);
        $phpmailer->Subject = $subject;
        $phpmailer->Body = $htmlBody;
        $phpmailer->CharSet = 'UTF-8';
        $phpmailer->AltBody = str_replace(
            ['<br>', '<br/>', '<BR>', '<BR/>'],
            "\r\n",
            strip_tags($htmlBody, '<br>')
        );
        $phpmailer->send();
        return true;
    } catch (Exception $e) {
        return false;
    }
}

function fileContentsToVar($file, $data)
{
    extract($data);
    ob_start();
    require $file;
    return ob_get_clean();
}

