<?php
    include_once("config.php");
?>
<!DOCTYPE html>
<html lang="en">
    <?php require_once(TEMPLATES_PATH."/header.php"); ?>
<body>
    <?php
        $current_li = 'audio';
        require_once(TEMPLATES_PATH."/navbar.php"); 
     ?>

    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1>Audio - Containerformate - Codecs</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>mp3 und wav einfügen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    </div>

    <?php require_once(TEMPLATES_PATH."/footer.php"); ?>
</body>
</html>