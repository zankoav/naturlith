
<footer id="footer-top">
    <div class="container pt-5 pb-3">
        <div class="row">
            <div class="col-sm-6 col-md-3 mb-3">
                <?php dynamic_sidebar( 'footer-1' ); ?>
            </div>
            <div class="col-sm-6 col-md-3 mb-3">
                <?php dynamic_sidebar( 'footer-2' ); ?>
            </div>
            <div class="col-sm-6 col-md-3 mb-3">
                <?php dynamic_sidebar( 'footer-3' ); ?>
            </div>
            <div class="col-sm-6 col-md-3 mb-3">
                <?php dynamic_sidebar( 'footer-4' ); ?>
            </div>
        </div>
    </div>
</footer>

<footer id="footer-bottom">
    <div class="container py-4">
        <div class="row justify-content-center">
            <div class="col-md-auto text-center">
                <span class="copyright">Copyright <?php echo date('Y');?> &copy; </span>
            </div>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>

<script>
    jQuery(document).ready(function ($) {
        $('.widget_media_image img').click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    });
</script>
</body>
</html>