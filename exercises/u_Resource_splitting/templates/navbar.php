<?php
    function getNavbarClass($li_class)
    {
        global $current_li;
        if($li_class == $current_li)
        {
            return 'active';
        }
        else
        {
            return '';
        }
    }
?>

<nav class="navbar navbar-default" role="navigation">
    <ul class="nav navbar-nav">
        <li class="<?php echo getNavbarClass('video') ?>">
            <a href="index.php">Video</a>
        </li>
        <li class="<?php echo getNavbarClass('audio') ?>">
            <a href="audio.php">Audio</a>
        </li>
    </ul>
</nav>
