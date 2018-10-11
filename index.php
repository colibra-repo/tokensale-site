<?php 
    session_start();
    $design = 'index-en.html'; //Default design page
    if(isset($_GET['page']) && file_exists('designs/'.$_GET['page'])) {
        $design = $_GET['page'];
    }
    ob_start();

    include('designs/'.$design); //Ako iskash da smenish design-a, trqbva da napishesh imeto na html faila tuk

    $design_file = ob_get_contents();
    ob_end_clean();
    //Vzima sydyrjanieto na fajla

    $formStartPos = strpos($design_file, '[form]');
    $formEndPos = strpos($design_file, '[;form]') + strlen('[;form]');
    //Namira shortcode-ovete v stranicata i tqhnata poziciq
    $errorStartPos = strpos($design_file, '[hasError]');
    $errorEndPos = strpos($design_file, '[;hasError]') + strlen('[;hasError]');
    //Namira shortcode-ovete v stranicata za syobshtenie za greshka 
    $thankyouStartPos = strpos($design_file, '[thankyou]');
    $thankyouEndPos = strpos($design_file, '[;thankyou]') + strlen('[;thankyou]');
    //Namira shortcode-ovete v stranicata za syobshtenie Thankyou 
    if(!isset($_SESSION['result'])) { //Logika na stranicata
        $design_file = substr_replace($design_file, '', $thankyouStartPos, $thankyouEndPos - $thankyouStartPos );
        $design_file = substr_replace($design_file, '', $errorStartPos, $errorEndPos - $errorStartPos );
    } elseif(isset($_SESSION['result']) && $_SESSION['result'] == 'thankyou') {
        $design_file = substr_replace($design_file, '', $formStartPos, $formEndPos - $formStartPos );
        unset($_SESSION['result']);
    } elseif(isset($_SESSION['result']) && $_SESSION['result'] == 'error' && isset($_SESSION['error_msg'])) {
        $design_file = substr_replace($design_file, '', $thankyouStartPos, $thankyouEndPos - $thankyouStartPos );
        $design_file = str_replace('[error_msg]', $_SESSION['error_msg'], $design_file);
        unset($_SESSION['result']);
        unset($_SESSION['error_msg']);
    }

    //Spisyk na shortcodes za premahvane
    $replaceWords = array(
        '[form]', 
        '[;form]', 
        '[hasError]',
        '[;hasError]',
        '[thankyou]',
        '[;thankyou]',
        '[error_msg]'
    );
    //Izchistva izhoda ot nenujnite shortcode-ove
    $design_file = str_replace($replaceWords, '', $design_file);
    //Printira faila
    echo $design_file;