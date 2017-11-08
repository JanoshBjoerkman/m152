<?php
    include_once("config.php");
?>
<!DOCTYPE html>
<html lang="en">
    <?php require_once(TEMPLATES_PATH."/header.php"); ?>
<body>
    <?php 
        $current_li = 'video';
        require_once(TEMPLATES_PATH."/navbar.php"); 
    ?>

    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1>Video - Containerformate - Codecs</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Containerformat</th>
                            <th>Suffix</th>
                            <th>MIME</th>
                            <th>Audio-Codec</th>
                            <th>Video-Coded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="change" data-answer="MP4">?</td>
                            <td class="change" data-answer=".mp4">?</td>
                            <td class="change" data-answer="video/mp4MP4">?</td>
                            <td>
                                <ul class="list-group">
                                    <li class="list-group-item change" data-answer="MPEG-4 Part 3">?</li>
                                    <li class="list-group-item change" data-answer="AAC">?</li>
                                    <li class="list-group-item change" data-answer="MP3">?</li>
                                </ul>
                            </td>
                            <td>
                                <ul class="list-group">
                                    <li class="list-group-item">MPEG-H Part 2</li>
                                    <li class="list-group-item">MPEG-4 Part 10</li>
                                    <li class="list-group-item">MPEG-4 Part 2</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>WebM</td>
                            <td>.webm</td>
                            <td>audio/webm</td>
                            <td>
                                <ul class="list-group">
                                    <li class="list-group-item">Vorbis</li>
                                    <li class="list-group-item">Opus</li>
                                </ul>
                            </td>
                            <td>
                                <ul class="list-group">
                                    <li class="list-group-item">VP8</li>
                                    <li class="list-group-item">VP9</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>OGG</td>
                            <td>
                                <ul class="list-group">
                                    <li class="list-group-item">.ogg</li>
                                    <li class="list-group-item">.ogv</li>
                                    <li class="list-group-item">.oga</li>
                                    <li class="list-group-item">.ogx</li>
                                    <li class="list-group-item">.ogm</li>
                                    <li class="list-group-item">.spx</li>
                                </ul>
                            </td>
                            <td>
                                <ul class="list-group">
                                    <li class="list-group-item">audio/ogg</li>
                                    <li class="list-group-item">video/ogg</li>
                                    <li class="list-group-item">application/ogg</li>
                                </ul>
                            </td>
                            <td>Opus</td>
                            <td>
                                <ul class="list-group">
                                    <li class="list-group-item">Theora</li>
                                    <li class="list-group-item">Matroska</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <button type="button" class="btn btn-primary change" id="showAnswer" data-answer="restart">show answer</button>
                
            </div>
        </div>
    </div>

    <?php require_once(TEMPLATES_PATH."/footer.php"); ?>
</body>
</html>